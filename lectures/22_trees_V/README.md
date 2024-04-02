# Lecture 22 --- Trees, Part V plus bonus lecture on Problem Solving Techniques

## Test 3 Information

- Test 3 will be held Thursday, April 4th, 2024 from 6-7:50pm.
- Student’s assigned test room, row, and seat assignments will be re-randomized. If on Tuesday evening you still don’t have a seating assignment when you log onto Submitty, let us know via the ds_instructors list.
- If you will miss an exam due to a scheduled event or unforeseen circumstance, you should email the DS instructors list (ds_instructors@cs.rpi.edu) as soon as possible as stated in the syllabus. 
- If you have a letter from Disability Services for Students and you have not already emailed it to ds_instructors@cs.rpi.edu, please do so by Tuesday 4:30pm. Shianne Hulbert will be in contact with you about your accommodations for the test.
- Coverage: Maps, Sets, Trees, as well as concepts learned prior to test 2. Please remember Recursion and Big O notation goes hand in hand with all the topics taught after Test 2.
- OPTIONAL: you are allowed two physical pieces of 8.5x11” paper, that’s four “sides”. We will not collect these electronically and we will not pre-print them, you will have to bring these notes pages yourself if you want them. We will check at the start of the exam that you do not have more than two pieces of paper for your notes!
- All students must bring their Rensselaer photo ID card.
- Bring pencil(s) & eraser (pens are ok, but not recommended). 
- Practice problems from previous tests are available on the [course materials](https://submitty.cs.rpi.edu/courses/s24/csci1200/course_materials) page on Submitty.

# Test Taking Skills
- Look at the point values for each problem, allocate time proportional to the problem points - Roughly 1 minute per point. (Dont spend all your time on one problem and neglect the other big point problems).
- Look at the size of the answer box. If your solution is going to take a lot more space than the box allows, we are probably looking for the solution to a simpler problem or a simpler solution to the problem.
- Going in to the test, you should know what big topics will be covered on the test. As you skim through the problems, see if you can match up those big topics to each question. Even if you are atimped about how to solve the whole problem, or some of the details of the problem, make sure you demonstrate your understanding of the big topic that is covered in that question.
- Re-read the problem statement carefullt. Make sure you didn't miss anything.

# Review from Lecture 21
- Red Black tree
- B+ Trees

# Today's lecture:
- Exercises
- Problen Solving Techniques

# 22.1 Exercises

1. Draw a balanced binary tree that contains the values: 6, 13, 9, 17, 32, 23, and 20.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

2. What is the height of a balanced binary tree storing n elements?

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

3. Draw a binary search tree that has post-order traversal: 6 13 9 17 32 23 20.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

4. How many correct answers are possible for the previous question?

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

6. Draw a Red Black Tree for the following number sequence 65, 56, 69, 96, 47, 74.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

7. Find the time complexities of teh following code snippets:

```cpp
 #include <stdio.h>

int main() {
    int a = 0, b = 0;
    int N = 10, M = 10;

    // This loop runs for N time
    for (int i = 0; i < N; i++) {
        a = a + 10;
    }
    // This loop runs for M time
    for (int i = 0; i < M; i++) {
        b = b + 40;
    }

    printf("%d %d", a, b);

    return 0;
}

```

```cpp
#include <stdio.h>

// Driver Code
int main()
{
    int a = 0, b = 0;
    int N = 15, M = 14;

    // Nested loops
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            a = a + j;

            // Print the current value of a
            printf("%d ", a);
        }
        printf("\n");
    }
    return 0;
}
```
# 22.2 Problem Solving Techniques

Discuss how to design and implement algorithms using three steps or stages:
1. Generating and Evaluating Ideas
2. Mapping Ideas into Code
3. Getting the Details Right
4. Problem Solving Strategies
5. Design Example: Conway's Game of Life

## 22.2.1 Generating and Evaluating Ideas

- **Ask Questions!** Make notes of your questions as you read the problem.
  Can you answer them? Do a little research.
  Ask your lab study group. Ask your peers and collegues.
  Ask your TA, instructor, interviewer, project manager, supervisor, etc.
- **Most importantly, play with examples!** Can you develop a strategy for solving the
  problem?
  You should try any strategy on several examples.
  Is it possible to map this strategy into an algorithm and then code?
- Try solving a **simpler version of the problem** first and either learn from the exercise or generalize the result.
- Does this problem **look like another problem** you know how to solve?
- If someone gave you a partial solution, could you **extend this to a complete solution**?
- What if you **split the problem in half** and solved each half (recursively) separately?
- Does **sorting the data** help?
- Can you split the problem into different cases, and **handle each case** separately?
- Can you discover **something fundamental about the problem** that makes it easier to solve or makes you able to solve it more efficiently?
- Once you have one or more ideas that you think **will work**, you should **evaluate your ideas**:
    * Will it indeed work?
    * Are there other ways to approach it that might be better / faster?
    * if it doesn’t work, why not?
 
## 22.2.2 Exercises: Practice using these Techniques on Simple Problems

- A perfect number is a number that is the sum of its factors. The first perfect number is 6. Let’s write a
program that finds all perfect numbers less than some input number n.

```cpp
int main() {
	std::cout << "Enter a number: ";
	int n;
	std::cin >> n;













}
```

- Given a sequence of n floating point numbers, find the two that are closest in value.

```cpp
int main() {
	float f;
	while (std::cin >> f) {

















}
```

- Now let’s write code to remove duplicates from a sequence of numbers:

```cpp
int main() {
int x;
while (std::cin >> x) {













}
```

## 22.2.3 Mapping Ideas Into Code

- How are you going to **represent the data**?
- What structures are **most efficient** and what is **easiest**?
  _Note: Might be different answers!_
- Can you **use classes (object-oriented programming)** to organize the data?
   * What data should be stored and manipulated as a unit?
   * What information needs to be stored for each object?
   * What public operations (beyond simple accessors) might be helpful?
- How can you **divide the problem into units of logic** that will become functions?
- **Can you reuse any code** you’re previously written? Will any of the logic you write now be re-usable?
- Are you going to use **recursion or iteration?** What information do you need to maintain during the loops or recursive calls and how is it being “carried along”?
- How effective is your solution? Is your solution general?
- **How is the performance?**
    * What is the order notation of the number of operations?
    * Can you now think of better ideas or approaches?
- **Make notes for yourself about the logic of your code** as you write it. These will become your _invariants_; that is, what should be true at the beginning and end of each iteration / recursive call.

## 22.2.4 Example: Merge Sort

- In Lecture 12, we finished the implementation of the merge sort function on linked lists, now let's re-visit the merge sort problem and sort vectors.
- How do we **Map Ideas Into Code**?
- What invariants can we write down within the **merge sort** and **merge** functions? Which invariants can we test using assertions? Which ones are too expensive (i.e., will affect the overall performance of the algorithm)?

```cpp
// We split the vector in half, recursively sort each half, and
// merge the two sorted halves into a single sorted interval.
template <class T>
void mergesort(int low, int high, vector<T>& values, vector<T>& scratch) {
	if (low >= high) return;
	int mid = (low + high) / 2;
	mergesort(low, mid, values, scratch);
	mergesort(mid+1, high, values, scratch);
	merge(low, mid, high, values, scratch);
}

// Non-recursive function to merge two sorted intervals (low..mid & mid+1..high)
// of a vector, using "scratch" as temporary copying space.
template <class T>
void merge(int low, int mid, int high, vector<T>& values, vector<T>& scratch) {
	int i=low, j=mid+1, k=low;
	// while there's still something left in one of the sorted subintervals...
	while (i <= mid && j <= high) {
		// look at the top values, grab the smaller one, store it in the scratch vector
		if (values[i] < values[j]) {
			scratch[k] = values[i]; ++i;
		} else {
		scratch[k] = values[j]; ++j;
		}
		++k;
	}

	// Copy the remainder of the interval that hasn't been exhausted
	for ( ; i<=mid; ++i, ++k ) scratch[k] = values[i]; // low interval
	for ( ; j<=high; ++j, ++k ) scratch[k] = values[j]; // high interval
	// Copy from scratch back to values
	for ( i=low; i<=high; ++i ) values[i] = scratch[i];
}
```

## 22.2.5 Getting the Details Right

- Is everything being **initialized** correctly, including boolean flag variables, accumulation variables, max / min variables?
- Is the **logic of your conditionals** correct? Check several times and test examples by hand.
- Do you have the **bounds on the loops** correct? Should you end at _n, n−1 or n−2_?
- Tidy up your “notes” to **formalize the invariants**. Study the code to make sure that your code does in fact have it right. When possible **use assertions to test your invariants.** (Remember, sometimes checking the invariant is impossible or too costly to be practical.)
- Does it work on the **corner cases**; e.g., when the answer is on the start or end of the data, when there are repeated values in the data, or when the data set is very small or very large?
- Did you **combine / format / return / print your final answer? Don't forget to return the correct data from each function.**

<!--## 13.6 Example: Nonlinear Word Search

What did we need to think about to **Get the Details Right** when we finished the implementation of the
nonlinear word search program? What did we worry about when writing the first draft code (a.k.a. pseudocode)? When debugging, what test cases should we be sure to try? Let’s try to break the code and write down
all the “corner cases” we need to test.

```cpp
bool search_from_loc(loc position, const vector<string>& board, const string& word, vector<loc>& path) {
	// start by adding this location to the path
	path.push_back(position);
	// BASE CASE: if the path length matches the word length, we're done!
	if (path.size() == word.size()) return true;
	// search all the places you can get to in one step
	for (int i = position.row-1; i <= position.row+1; i++) {
		for (int j = position.col-1; j <= position.col+1; j++) {
			// don't walk off the board though!
			if (i < 0 || i >= board.size()) continue;
			if (j < 0 || j >= board[0].size()) continue;

			// don't consider locations already on our path
			if (on_path(loc(i,j),path)) continue;
			// if this letter matches, recurse!
			if (word[path.size()] == board[i][j]) {
			// if we find the remaining substring, we're done!
			if (search_from_loc (loc(i,j),board,word,path))
				return true;
			}
		}
	}
	// We have failed to find a path from this loc, remove it from the path
	path.pop_back();
	return false;
}-->

## 22.2.6 Exercise: Maximum Subsequence Sum
- Problem: Given is a sequence of n values, a<sub>0</sub>, . . . , a<sub>n−1</sub>, find the maximum value of &#931;<sub>i=j</sub><sup>k</sup> over all possible subsequences j . . . k.
- For example, given the integers: 14, −4, 6, −9, −8, 8, −3, 16, −4, 12, −7, 4
The maximum subsequence sum is: 8 + (−3) + 16 + (−4) + 12 = 29.
- Let’s write a first draft of the code, and then talk about how to make it more efficient.

```cpp
int main() {
	std::vector<int> v;
	int x;
	while (std::cin >> x) {
		v.push_back(x);
	}
}
```

## 22.2.7 Problem Solving Strategies
Here is an outline of the major steps to use in solving programming problems:
1. Before getting started: **study the requirements, carefully**!
2. Get started:
   - What **major operations** are needed and how do they **relate to each other** as the **program flows**?
   -  What **important data / information** must be represented? How should it be represented? Consider and
analyze several alternatives, thinking about the most important operations as you do so.
   - Develop a **rough sketch of the solution**, and write it down. There are advantages to working on paper
first. Don’t start hacking right away!
3. **Review**: reread the requirements and examine your design. Are there major pitfalls in your design? Does
everything make sense? Revise as needed.
4. **Details, level 1**:
   - What major classes are needed to represent the data / information? What standard library classes can
be used entirely or in part? Evaluate these based on efficiency, flexibility and ease of programming.
   - Draft the main program, defining variables and writing function prototypes as needed.
   - Draft the class interfaces — the member function prototypes.
These last two steps can be interchanged, depending on whether you feel the classes or the main program flow
is the more crucial consideration.
5. **Review:** reread the requirements and examine your design. Does everything make sense? Revise as needed.
6. **Details, level 2**:
   - Write the details of the classes, including member functions.
   - Write the functions called by the main program. Revise the main program as needed.
7. **Review:** reread the requirements and examine your design. Does everything make sense? Revise as needed.
8. **Testing**:
    - Test your classes and member functions. Do this separately from the rest of your program, if practical.
Try to test member functions as you write them.
    - Test your major program functions. Write separate “driver programs” for the functions if possible. Use
the debugger and well-placed output statements and output functions (to print entire classes or data
structures, for example).
    - Be sure to test on small examples and boundary conditions.
The goal of testing is to incrementally figure out what works — line-by-line, class-by-class, function-by-function.
When you have incrementally tested everything (and fixed mistakes), the program will work.

**Notes:**
 - For larger programs and programs requiring sophisticated classes / functions, these steps may need to be
repeated several times over.
 - Depending on the problem, some of these steps may be more important than others.
 - For some problems, the data / information representation may be complicated and require you to write
several different classes. Once the construction of these classes is working properly, accessing information
in the classes may be (relatively) trivial.
 - For other problems, the data / information representation may be straightforward, but what’s computed
using them may be fairly complicated.
 - Many problems require combinations of both.

## 22.2.8 Design Example: Conway’s Game of Life

Let’s design a program to simulate Conway’s Game of Life. Initially, due to time constraints, we will focus on the
main data structures of needed to solve the problem.
Here is an overview of the Game:
- We have an infinite two-dimensional grid of cells, which can grow arbitrarily large in any direction.
- We will simulate the life & death of cells on the grid through a sequence of generations.
- In each generation, each cell is either alive or dead.
- At the start of a generation, a cell that was dead in the previous generation becomes alive if it had exactly 3
live cells among its 8 possible neighbors in the previous generation.
- At the start of a generation, a cell that was alive in the previous generation remains alive if and only if it had either 2 or 3 live cells among its 8 possible neighbors in the previous generation.  
  – With fewer than 2 neighbors, it dies of “loneliness”.
  – With more than 3 neighbors, it dies of “overcrowding”.
- Important note: all births & deaths occur simultaneously in all cells at the start of a generation.
- Other birth / death rules are possible, but these have proven to be a very interesting balance.
- Many online resources are available with simulation applets, patterns, and history. For example:
http://www.math.com/students/wonders/life/life.html
http://www.radicaleye.com/lifepage/patterns/contents.html
http://www.bitstorm.org/gameoflife/
http://en.wikipedia.org/wiki/Conway’s_Game_of_Life

### Applying the Problem Solving Strategies

In class we will brainstorm about how to write a simulation of the Game of Life, focusing on the representation of
the grid and on the actual birth and death processes.

### Understanding the Requirements

We have already been working toward understanding the requirements. This effort includes playing with small
examples by hand to understand the nature of the game, and a preliminary outline of the major issues.

### Getting Started

- What are the important operations?
- How do we organize the operations to form the flow of control for the main program?
- What data/information do we need to represent?
- What will be the main challenges for this implementation?

### Details

- New Classes? Which STL classes will be useful?

### Testing

- Test Cases?

