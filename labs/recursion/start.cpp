// Starting code for Checkpoints 2 and 3.  This includes
// functions to read the grid and to output it.

#include <fstream>
#include <iostream>
#include <list>
#include <vector>


// A simple class to represent a point location.  It only has a
// constructor and a two public member variables.  This is one of the
// few times that you are allowed to use non-private member variables.

class Point {
public:
  Point(int x0, int y0) : x(x0), y(y0) {}
  int x,y;
};


// NOTE: We could use a boolean (true/false) to represent whether each
// cell of the grid was blocked or open.  This would be the minimal
// representation for memory.

// However, debuggers (both traditional and memory debuggers) might
// not be able to help debug errors with vectors of booleans, if they
// are efficiently packed by a clever STL implementation.  So instead
// we use an enum, to improve readability, and to ensure that the
// status of each grid cell is stored as an integer avoiding debugger
// confusion during development.


enum GRID_STATUS { GRID_CLEAR, GRID_BLOCKED };


// Input the grid and the start location.  The input is a sequence of
// x y locations, terminated by x==0 and y==0.  The last input, which
// follows 0 0 input, is the start location.
//
// The grid is represented as a 2d vector of GRID_STATUS, with each location
// that is blocked --- meaning that no path can go through --- being
// represented by the value GRID_BLOCKED.  The grid is large enough to
// include all blocked points and include the starting location.  The
// first coordinate of the vector of vectors is the x coordinate, and
// the second is the y coordinate.  The format of the input is
// specified in the lab handout.

void read_grid(std::istream& istr,
               std::vector<std::vector<GRID_STATUS> >& blocked_grid,
	       int& start_x, int& start_y) {

  // Read the x y locations into a list of Points.  Keep track of the
  // max x and max y values so that the size of the grid can be
  // determined.
  int x, y;
  int max_x = 0, max_y = 0;  // keep track of the max coordinate values
  std::list<Point> blocked_points;
  while ((istr >> x >> y) && ! (x==0 && y==0)) {
    blocked_points.push_back(Point(x,y));
    if (x > max_x) max_x = x;
    if (y > max_y) max_y = y;
  }

  // Now that a 0 0 location has been read, read the start location.
  // If this is beyond the max x or y value then update these values.
  istr >> start_x >> start_y;
  if (start_x > max_x) max_x = start_x;
  if (start_y > max_y) max_y = start_y;

  // Make a vector of vectors with all entries marked clear.
  std::vector<GRID_STATUS> one_row_of_ys(max_y+1, GRID_CLEAR);
  std::vector<std::vector<GRID_STATUS> > empty_grid(max_x+1, one_row_of_ys);
  blocked_grid = empty_grid;

  // For Point in the list, mark the location in the list as blocked.
  std::list<Point>::iterator p;
  for (p = blocked_points.begin(); p != blocked_points.end(); ++p) {
    blocked_grid[p->x][p->y] = GRID_BLOCKED;
  }
}


// Output the grid to cout.  The form of the output is explained in
// the cout statement below.

void print_grid(const std::vector<std::vector<GRID_STATUS> > & blocked_grid,
                unsigned int start_x, unsigned int start_y) {

  std::cout << "Here is the grid with the origin in the upper left corner, x increasing \n"
            << "horizontally and y increasing down the screen.  An 'X' represents a blocked\n"
            << "location and the 'S' represents the starting location.\n\n";
  
  for (unsigned int y=0; y<blocked_grid[0].size(); ++y) {
    for (unsigned int x=0; x<blocked_grid.size(); ++x) {
      if (x == start_x && y == start_y)
        std::cout << " S";
      else if (blocked_grid[x][y] == GRID_BLOCKED)
        std::cout << " X";
      else 
        std::cout << " .";
    }
    std::cout << std::endl;
  }
}



int main(int argc, char* argv[]) {
  if (argc != 2) {
    std::cerr << "Usage: " << argv[0] << " grid-file" << std::endl;;
    return 1;
  }
  std::ifstream istr(argv[1]);
  if (!istr) {
    std::cerr << "Could not open " << argv[1] << std::endl;
    return 1;
  }
  
  std::vector<std::vector<GRID_STATUS> > blocked_grid;
  int start_x, start_y;
  read_grid(istr, blocked_grid, start_x, start_y);
  print_grid(blocked_grid, start_x, start_y);

  // Start here with your code...



  return 0;
}
      
