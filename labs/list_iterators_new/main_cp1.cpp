#include <iostream>
#include <fstream>
#include <vector>

class GifFrame {
public:
	std::vector<uint8_t> data;  // raw image data
	int width, height;               // frame dimensions
	int left, top;                    // position within the GIF
	uint8_t disposalMethod = 0;       // add this field (0 = undefined, 1 = keep, etc.)
	bool hasTransparency = false;      // flag for transparency
	uint8_t transparentColorIndex = 0; // index of the transparent color in the global color table
	uint16_t delayTime = 0;            // delay time before the next frame in hundredths of a second
	// default constructor
	GifFrame() : width(0), height(0), left(0), top(0), disposalMethod(0), 
                 hasTransparency(false), transparentColorIndex(0), delayTime(0) {}
	// constructor to initialize the frame data
	GifFrame(const std::vector<uint8_t>& frameData) : data(frameData), disposalMethod(0),
                                                     hasTransparency(false), transparentColorIndex(0), delayTime(0) {}
};

std::vector<uint8_t> loopExtension; // Stores Netscape Loop Extension

void printPalette(const std::vector<uint8_t>& fileData, size_t pos, int paletteSize) {
    // Print the first 3 bytes (RGB values) for each color in the palette
    for (int i = 0; i < paletteSize; i++) {
        uint8_t r = fileData[pos + i * 3]; // Red
        uint8_t g = fileData[pos + i * 3 + 1]; // Green
        uint8_t b = fileData[pos + i * 3 + 2]; // Blue
        // std::cout << "Color " << i << ": (" << (int)r << ", " << (int)g << ", " << (int)b << ")\n";
    }
}

void printFrameIndices(const std::vector<uint8_t>& frameData) {
    std::cout << "Frame Indices (first 20 bytes): ";
    for (size_t i = 0; i < std::min(frameData.size(), size_t(20)); ++i) {
        std::cout << (int)frameData[i] << " ";
    }
    std::cout << "\n";
}

void printFullFrameData(const std::vector<uint8_t>& frameData) {
    std::cout << "Frame Data: ";
    for (size_t i = 0; i < frameData.size(); i++) {
        std::cout << (int)frameData[i] << " ";
    }
    std::cout << "\n";
}

// Helper function to extract the complete header from the GIF file data.
std::vector<uint8_t> extractGifHeader(const std::vector<uint8_t>& fileData) {
    // Read first 6 bytes (signature)
    std::vector<uint8_t> header(fileData.begin(), fileData.begin() + 6);
    // Read next 7 bytes (logical screen descriptor)
    header.insert(header.end(), fileData.begin() + 6, fileData.begin() + 13);

    // Check for Global Color Table flag (bit 7 of the LSD's 7th byte)
    uint8_t packedFields = fileData[10]; // This is in the LSD (byte 11 in 1-indexed terms)
    if (packedFields & 0x80) {
        // The size of the GCT is 3 * 2^(N+1) where N is in the lower 3 bits of the packed field.
        int sizeOfGCT = 3 * (1 << ((packedFields & 0x07) + 1));
        header.insert(header.end(), fileData.begin() + 13, fileData.begin() + 13 + sizeOfGCT);
    }
    return header;
}

// check point 1: complete this function, so as to reverse vector without using iterators.
void reverseFrames(std::vector<GifFrame>& frames) {
}

void writeGif(const std::string& outputFilename, const std::vector<uint8_t>& originalFileData,
              const std::vector<GifFrame>& frames, const std::vector<uint8_t>& loopExtension) {
    if (frames.empty()) {
        std::cerr << "No frames to write!\n";
        return;
    }

    std::ofstream outFile(outputFilename, std::ios::binary);
    if (!outFile) {
        std::cerr << "Error creating output file!\n";
        return;
    }

    // The first 13 bytes of the GIF header are typically static (GIF signature, version, and logical screen descriptor).
    outFile.write(reinterpret_cast<const char*>(originalFileData.data()), 13);

    size_t pos = 13;
    uint8_t packedFields = originalFileData[10];

    // if a global color table exists.
    if (packedFields & 0x80) {
	// extracts the size of the global color table:
        int gctSize = 3 * (1 << ((packedFields & 0x07) + 1));
        outFile.write(reinterpret_cast<const char*>(&originalFileData[pos]), gctSize);
        pos += gctSize;
    }

    if (!loopExtension.empty()) {
        outFile.write(reinterpret_cast<const char*>(loopExtension.data()), loopExtension.size());
    }

    for (const auto& frame : frames) {
        outFile.write(reinterpret_cast<const char*>(frame.data.data()), frame.data.size());
    }

    uint8_t trailer = 0x3B;
    outFile.write(reinterpret_cast<const char*>(&trailer), 1);

    outFile.close();
    std::cout << "GIF successfully written to " << outputFilename << "\n";
}

std::vector<GifFrame> extractFrames(const std::string& filename, std::vector<uint8_t>& fileData, std::vector<uint8_t>& loopExtension) {
	std::ifstream file(filename, std::ios::binary);
	if (!file) {
		std::cerr << "Error opening file!\n";
		return {};
	}

	fileData = std::vector<uint8_t>((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
	file.close();

	if (fileData.size() < 6 || fileData[0] != 'G' || fileData[1] != 'I' || fileData[2] != 'F') {
		std::cerr << "Not a valid GIF file!\n";
		return {};
	}

	std::vector<GifFrame> frames;
	size_t pos = 13;

	// GIF Header Structure: all GIF files must start with a header block. The header takes up the first six bytes of the file. 
	// The first 13 bytes of a standard GIF file are fixed and contain the following data:
	// Bytes 0-2: The signature "GIF" (3 bytes)
	// Bytes 3-5: The version, typically "87a" or "89a" (3 bytes)
	// Bytes 6-7: Logical screen width (2 bytes)
	// Bytes 8-9: Logical screen height (2 bytes)
	// Byte 10: Packed fields (1 byte)
	// Byte 11: Background color index (1 byte)
	// Byte 12: Pixel aspect ratio (1 byte)
	// Byte 10 is packed fields, which has 8 bits:
	// Bit 7: The first (most-significant) bit is the global color table flag. 
	// If it's 0, then there is no global color table. If it's 1, then a global color table will follow. i
	// Bit 6-4: The next three bits are the color resolution. 
	// They are only meaningful if there is a global color table, and allow you to compute its size. 
	// If the value of this field is N, the number of entries in the global color table will be 2 ^ (N+1) - that is, two raised to the power (N+1). 
	// Bit 3: The next single bit is the sort flag.
	// If the values is 1, then the colors in the global color table are sorted in order of "decreasing importance," which typically means "decreasing frequency" in the image.
	// This can help the image decoder, but is not required.
	// Bit 2-0: Size of global color table.
	uint8_t packedFields = fileData[10];
	// if GCT Flag is set (GCT is present).
	if (packedFields & 0x80) {
		int gctSize = 3 * (1 << ((packedFields & 0x07) + 1));
		std::cout << "Global Color Table Size: " << gctSize << " bytes\n";
		printPalette(fileData, 13, gctSize); // Starting at position 13 (after the logical screen descriptor)
		pos += gctSize;
	}

	// after the 13 bytes, we have graphic control extension blocks, which are used to specify transparency settings and control animations.
	std::vector<uint8_t> gceBlock;

	while (pos < fileData.size()) {
		if (fileData[pos] == 0x21) { // graphics control extension block, all extension blocks begin with 21. It is 8 bytes long and contains seven fields.
					     // this is followed by an extension type byte, which indicates the type of extension.
					     // the codes for the Graphics Control and Application extensions are 0xF9 and 0xFF, respectively.
					     // the GIF89a specification adds four extension blocks to the original GIF87a format.
					     // the four extension blocks are the Graphics Control, Application, Comment, and Plain Text Extensions.
			if (fileData[pos + 1] == 0xF9) { // next is the graphic control label, F9, which is the value that flags this as a graphic control extension.
							// third up is the total block size in bytes. This is always 0x04, because there are four more bytes of information before the extension block terminator.
							// next is a packed field. bits 5-7 are reserved for future use.
							// bits 2-4 indicate disposal method.
							// bit 1 is the user input flag.
							// bit 0 is the transparent color flag.
				gceBlock.assign(fileData.begin() + pos, fileData.begin() + pos + 8);
				pos += 8;
				// extract the disposal method from the packed field in the GCE
				uint8_t packedField = gceBlock[3];  // This is the packed field in the GCE
				uint8_t disposalMethod = (packedField >> 2) & 0b00000111;  // extract the disposal method, i.e., bit 2-4.
				// std::cout << "Disposal Method: " << (int)disposalMethod << std::endl;
				// extract transparent color flag (bit 0)
				uint8_t transparentColorFlag = packedField & 0b00000001;
				// std::cout << "Transparent Color Flag: " << (int)transparentColorFlag << std::endl;

				// extract delay time (2 bytes, little-endian)
				uint16_t delayTime = (gceBlock[4] | (gceBlock[5] << 8));
				// std::cout << "Delay Time: " << delayTime << " hundredths of a second" << std::endl;

				// extract transparent color index (if transparent color flag is set)
				uint8_t transparentColorIndex = 0; // Default value if no transparency
				if (transparentColorFlag == 1) {
					transparentColorIndex = gceBlock[6];
					// std::cout << "Transparent Color Index: " << (int)transparentColorIndex << std::endl;
				}

				// store the extracted information in the GifFrame structure
				if (!frames.empty()) {
        				GifFrame& currentFrame = frames.back();  // store in the last frame added
        				currentFrame.disposalMethod = disposalMethod;
        				currentFrame.hasTransparency = transparentColorFlag;
        				currentFrame.delayTime = delayTime;
        				currentFrame.transparentColorIndex = transparentColorIndex;
				}
			} else if (fileData[pos + 1] == 0xFF) { // the application extension block allows GIF files to be customized for particular applications. Netscape took advantage of this feature to supplement the graphics control block with an application extension block that would tell a web browser how many times to display a sequence of images in an animated GIF before stopping.
								// Netscape Loop Extension
				size_t loopStart = pos;
				pos += 2; // Move past 0x21 FF

				if (pos + 11 < fileData.size() && fileData[pos] == 0x0B &&
					std::equal(fileData.begin() + pos + 1, fileData.begin() + pos + 12, "NETSCAPE2.0")) {

					pos += 12; // Move past "NETSCAPE2.0"
					// Extract the entire block starting from 0x21
					std::vector<uint8_t> extensionData;
					// Go back to the start of the extension block
					extensionData.insert(extensionData.end(), fileData.begin() + loopStart, fileData.begin() + pos);

					// Read sub-blocks
					while (pos < fileData.size() && fileData[pos] != 0x00) {
						size_t blockSize = fileData[pos]; // Get block size
						extensionData.insert(extensionData.end(), fileData.begin() + pos, fileData.begin() + pos + blockSize + 1);
						pos += blockSize + 1;
					}

					// Include the block terminator (0x00)
					if (pos < fileData.size() && fileData[pos] == 0x00) {
						extensionData.push_back(0x00);
						pos++;
					}

					// Store the full extension data
					loopExtension.assign(extensionData.begin(), extensionData.end());
				}
			} else { // Other extension blocks
				pos += 2;
				while (pos < fileData.size() && fileData[pos] != 0x00) {
					pos += fileData[pos] + 1;
				}
				pos++;
			}
		} else if (fileData[pos] == 0x2C) { // image descriptor. The image descriptor always consists of 10 bytes that contain the dimensions of the image and information on which color table to use and how the image data is stored.
						    // Every image descriptor begins with the value 2C. The next 8 bytes represent the location and size of the following image. The last byte is another packed field.
			size_t frameStart = pos;
			pos += 10;
			if (fileData[frameStart + 9] & 0x80) {	// check the packed field. This bit is set to 1 if the Image Block contains a Local Color Table that should be used when rendering the image.
				int lctSize = 3 * (1 << ((fileData[frameStart + 9] & 0x07) + 1));
				pos += lctSize;
			}
			pos++;
			while (pos < fileData.size() && fileData[pos] != 0x00) {	// 0 means that no bytes follow and we have read all the data in this block.
				pos += fileData[pos] + 1;
			}
			pos++;
			std::vector<uint8_t> frameData;
			if (!gceBlock.empty()) {
				// the insert function insert the bytes from gceBlock to the beginning of frameData.
				frameData.insert(frameData.begin(), gceBlock.begin(), gceBlock.end());
			}
			// appends the bytes starting from frameStart to the current position (pos), which corresponds to the image data for the frame.
			frameData.insert(frameData.end(), fileData.begin() + frameStart, fileData.begin() + pos);
			// std::cout << "Extracted frame size: " << frameData.size() << " bytes\n";
			// std::cout << "Last byte of this frame is: " << (int)(frameData.back()) << "\n";
			frames.push_back(GifFrame(frameData));
		} else if (fileData[pos] == 0x3B) {
			// A GIF file always starts with the three-byte signature “GIF” and ends with the byte (in hex) “3B,” which indicates the end of the data stream.
			break;
		} else {
			pos++;
		}
	}
	return frames;
}

int main() {
	// read the complete file into fileData, and extract frames.
	std::vector<uint8_t> fileData;
	std::vector<GifFrame> frames = extractFrames("input.gif", fileData, loopExtension);
	if (frames.empty()) return 1;

	// extract the complete header from fileData
	std::vector<uint8_t> completeHeader = extractGifHeader(fileData);

	// reverse the frames
        reverseFrames(frames);

	// write out the new GIF with the complete header
	writeGif("reversed.gif", completeHeader, frames, loopExtension);

	return 0;
}
