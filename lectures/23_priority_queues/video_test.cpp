#include <iostream>
#include <queue>
#include <vector>

class Video {
public:
    std::string title;
    int viewCount;

    Video(std::string t, int v) : title(t), viewCount(v) {}
};

// Comparator for sorting by viewCount (descending)
// If Compare(a, b) returns true, it means a has a lower priority than b.
// Thus here, this comparator function means a has a lower priority if it has a lower viewCount.
// Therefore, the video with the highest viewCount stays on top of the heap, meaning this is a max heap.
struct CompareByViews {
    bool operator()(const Video& a, const Video& b) {
        return a.viewCount < b.viewCount;
    }
};

// Comparator for sorting by title (alphabetical order)
// If Compare(a, b) returns true, it means a has lower priority than b.
// Thus here, this comparator function means a has a lower priority if a's title goes after b's title.
// Therefore, this is a min heap.
struct CompareByTitle {
    bool operator()(const Video& a, const Video& b) {
        return a.title > b.title;  // Min-heap (A-Z)
    }
};

int main() {
    std::priority_queue<Video, std::vector<Video>, CompareByViews> pq_views;
    std::priority_queue<Video, std::vector<Video>, CompareByTitle> pq_titles;

    pq_views.push(Video("Video A", 500));
    pq_views.push(Video("Video B", 1000));
    pq_views.push(Video("Video C", 300));

    pq_titles.push(Video("Video A", 500));
    pq_titles.push(Video("Video B", 1000));
    pq_titles.push(Video("Video C", 300));

    std::cout << "Sorted by views:\n";
    while (!pq_views.empty()) {
        std::cout << pq_views.top().title << " (" << pq_views.top().viewCount << " views)\n";
        pq_views.pop();
    }

    std::cout << "\nSorted by title:\n";
    while (!pq_titles.empty()) {
        std::cout << pq_titles.top().title << "\n";
        pq_titles.pop();
    }

    return 0;
}

