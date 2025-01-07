#include <iostream>
#include <vector>
#include <cmath>
#include <fstream>

#include "line.h"



// A helper function to parse a collection of files from an input file.
std::vector<Line>& load(std::ifstream &istr) {
  std::vector<Line> roads;
  float x1,y1,z1,x2,y2,z2;
  while (istr >> x1 >> y1 >> z1 >> x2 >> y2 >> z2) {
    roads.push_back(Line(Point(x1,y1,z1),Point(x2,y2,z2)));
  }
  return roads;
}


// A helper function to sort our road collection by gradient (steepest first).
void organize(std::vector<Line> &roads) {
  std::sort(roads.begin(),roads.end(), steeper_gradient);
}


// A helper function to print data about the collection of roads.
void print(const std::vector<Line> &roads) {

  // print each road in the current, sorted order (steepest first)
  for (int i = 0; i < roads.size(); i++) {
    std::cout << roads[i] << std::endl;
  }

  // count the number of roads with gradient less than 10%
  int count;
  for (unsigned int i = roads.size() - 1;
       i >= 0  && gradient(roads[i]) < 10.0;
       i--) {
    count++;
  }
  std::cout << "There are " << count << " road(s) with gradient less than 10%." << std::endl;
}


// This program expects a single argument, the name of the file containing our input data.
int main (int argc, char* argv[]) {

  // check the arguments and open the input file for reading
  if (argc != 2) {
    std::cerr << "ERROR: Usage: " << argv[0] << " <input_file>" << std::endl;
    return 1;
  }
  std::ifstream istr(argv[1]);
  if (!istr.good()) {
    std::cerr << "ERROR: the file " << argv[1] << " was not successfully opened for reading." << std::endl;
    return 1;
  }

  // load the data from the input file
  std::vector<Line> roads = load(istr);

  // sort the roads by gradient, and print information about the roads
  organize(roads);
  print(roads);
}


