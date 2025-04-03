import random

# Function to read a file and sample a given number of lines
def sample_lines_from_file(file_path, num_samples):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()  # Read all lines into a list
    return random.sample(lines, min(num_samples, len(lines)))  # Randomly pick lines, ensuring we don't pick more than available lines

# Paths to input text files
file1 = "file1.txt"
file2 = "file2.txt"

# Load and sample 3000 lines from each file
sampled_lines_file1 = sample_lines_from_file(file1, 3000)
sampled_lines_file2 = sample_lines_from_file(file2, 3000)

# Combine sampled lines from both files
combined_sampled_lines = sampled_lines_file1 + sampled_lines_file2

# Shuffle the combined lines to mix lines from both files
random.shuffle(combined_sampled_lines)

# Write the sampled lines to a new text file
output_file = "sampled_lines.txt"
with open(output_file, 'w', encoding='utf-8') as f:
    f.writelines(combined_sampled_lines)

print(f"Sampled lines saved to {output_file}")

