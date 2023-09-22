#include <iostream>
#include <fstream>

#define MAX_ARRAY_SIZE 50



/** IMPORTANT: SOLUTIONS THAT DO NOT FOLLOW BELOW INSTRUCTIONS WILL RECEIVE NO CREDIT
 * Do not add or modify code in this file UNLESS ASKED TO! 
 * You are NOT allowed to declare new variables; use the ones already declared.
 * You are NOT allowed to create new helper functions or modify checkCorrectSmallest()
**/



/** DO NOT MODIFY THIS FUNCTION! **/
int checkCorrectSmallest(int* smallestNum, const std::string& filename) {
    if (filename == "first.txt" || filename == "middle.txt") {
        if (*smallestNum != 1) {return -1;}
    }

    else if (filename == "last.txt") {
        if (*smallestNum != 22) {return -1;}
    }

    return 1;
}

/** A function that will identify the mean and smallest number
  * in a set of data provided that there are at most 50 numbers 
  * in the file.
  *
  * @param filename: The name of a file that contains a list of numbers.
  *
  * Task: Add or modify code in the appropriate sections to fix memory and logic errors
  * without using data structures (such as an array or vector) and without using any
  * additional memory on the stack.
**/

void identifyMeanAndMin(const std::string& filename) {
   int* numElements;
   int* sum;
   int* smallestNum;
   float* avg;

   /** PART 1: ADD CODE BELOW **/




   /** PART 1: ADD CODE ABOVE **/

   *numElements = 0;
   *sum = 0;

   int readInt;
   int* intArray = new int[MAX_ARRAY_SIZE];
   std::ifstream input(filename);

   while (input >> readInt) {
       *(intArray + *numElements) = readInt;
       *numElements += 1;
   }

   std::cout << "Printing the contents of the array in reverse order:  ";

   /** PART 2: MODIFY CODE BELOW **/

   for (int i = MAX_ARRAY_SIZE; i >= -1; i--) {
       // If we're at the beginning of the for loop, initalize *smallestNum
       // Else, compare *smallestNum to current element in the for loop
       if (i == MAX_ARRAY_SIZE) {
           *smallestNum = *(intArray + i);
       }

       else {
           if (*smallestNum > *(intArray + i)) {
               *smallestNum = *(intArray + i);
	   	   }
       }

   /** PART 2: MODIFY CODE ABOVE **/

       *sum += *(intArray + i);
       std::cout << *(intArray + i) << " ";
   }
 
   std::cout << std::endl;
   if (checkCorrectSmallest(smallestNum, filename) == -1) {
       std::cout << "ERROR: incorrect value for smallest number" << std::endl;
       return;
   }

   *avg = *sum / float(*numElements);
   std::cout << "The average for the set of numbers in " << filename << " is "
	     << *avg << " and the smallest number is " << *smallestNum
	     << std::endl;

   /** PART 3: ADD AND/OR MODIFY CODE BELOW **/

   delete intArray;

   /** PART 3: ADD AND/OR MODIFY CODE ABOVE **/
}

int main() {
   identifyMeanAndMin("first.txt");
   std::cout << std::endl;

   identifyMeanAndMin("middle.txt");
   std::cout << std::endl;

   identifyMeanAndMin("last.txt");
   return 0;
}

