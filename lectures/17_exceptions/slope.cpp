#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

class Point {
public:
	Point(double x_, double y_) : x(x_),y(y_) {}
	double x,y;
};
class Line {
public:
	Line(const Point &a_, const Point &b_) : a(a_),b(b_) {}
	Point a,b;
};

double compute_slope(const Point &a, const Point &b) {
	double rise = b.y - a.y;
	double run = b.x - a.x;
	double epsilon = 0.00001;
	if (fabs(run) < epsilon){
		throw -1;
	}
	return rise / run;
}

double slope(const Line &ln) {
	return compute_slope(ln.a,ln.b);
}

bool steeper_slope(const Line &m, const Line &n) {
	double slope_m = slope(m);
	double slope_n = slope(n);
	return slope_m > slope_n;
}

void organize(std::vector<Line> &lines) {
	std::sort(lines.begin(),lines.end(), steeper_slope);
}

int main () {
	std::vector<Line> lines;

	// adding test lines
	lines.push_back(Line(Point(0, 0), Point(1, 1)));  // slope = 1
	lines.push_back(Line(Point(0, 0), Point(2, 3)));  // slope = 1.5
	lines.push_back(Line(Point(0, 0), Point(5, 2)));  // slope = 0.4
	lines.push_back(Line(Point(3, 2), Point(3, 5)));  // vertical line (should throw)
	try {
		organize(lines);
		// Print the sorted lines based on steepness
		std::cout << "Sorted lines by steepest slope:" << std::endl;
		for (const Line &ln : lines) {
			std::cout << "Line from (" << ln.a.x << ", " << ln.a.y << ") to ("
			<< ln.b.x << ", " << ln.b.y << ") - Slope: ";
			try {
				std::cout << slope(ln) << std::endl;
			} catch (int) {
				std::cout << "undefined (vertical line)" << std::endl;
			}
		}
	} catch (int) {
		std::cout << "error: infinite slope" << std::endl;
	}
	return 0;
}
