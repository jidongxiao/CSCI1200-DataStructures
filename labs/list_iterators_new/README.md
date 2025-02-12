# Lab 4 — Reversing Data in Different Ways: STL Vectors vs. STL Lists

## Background - Introduction to GIF Formats and the Concept of Frames

## What is a GIF?

A **GIF** (Graphics Interchange Format) is a popular bitmap image format commonly used for its ability to support animations. It was introduced in 1987 by CompuServe and has since become widely used on the internet. GIFs support **256 colors** and are often used for simple graphics, icons, or short animations that loop seamlessly. The GIF format is best known for its lightweight nature and ability to be easily shared on social media platforms and websites.

## GIF Frames and Animation

A GIF image fileis composed of a sequence of **frames**. Each frame is a static image that, when displayed in sequence, creates the illusion of movement. The concept of frames in a GIF is similar to how traditional film or digital video works, where individual frames are shown at a rapid pace to simulate continuous motion.

### Key Concepts:

- **Frames**: Each individual image in a GIF sequence. Each frame may display a single static image or a portion of the animation.
- **Frame Duration**: Each frame in a GIF has a duration (in milliseconds), determining how long it is displayed before transitioning to the next frame. The timing of each frame is crucial in defining the speed of the animation.
- **Looping**: GIFs can be set to loop indefinitely or stop after a certain number of loops. This makes GIFs ideal for short animations that need to play continuously.

## Lab Tasks

In this lab, you will modify an existing C++ program. This program reverse a GIF image file.

Here are examples of reversing GIF.

Example 1:

This is the [original GIF](dog_good.gif). And this is the [reversed GIF](dog_bad.gif)

Example 2:

This is the [original GIF](door_break.gif). And this is the [reversed GIF](door_restore.gif)

Example 3:

This is the [original GIF](jump_real.gif). And this is the [reversed GIF](jump_fake.gif)

Example 4:

This is the [original GIF](brick_real.gif). And this is the [reversed GIF](brick_fake.gif)

## Starter Code

The starter code [main.cpp](main.cpp) defines a class named GifFrame to represents GIF frames. Each object of this class represents one frame.

```cpp
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
```

When given an input GIF image file, the starter code extracts all frames from this image file, and store these frames in a std::vector<GifFrame> named frames. This frames vector will then be passed to a function *reverseFrames* which reverses the vector. The *reverseFrames* function will return an std::vector<GifFrame> which contains the reversed frames. This reversed frames vector is then passed to a function writeGif(), which just writes all frames in a new GIF image file.

In this lab, multiple copies of the starter code will be provided, but you will only be working on the *reverseFrames* function - you will be required to re-write this function in different ways.

## Checkpoint 1: Reverse with STL Vector Swaps
*estimate: TBD*

Complete the *reverseFrames* function in [main_cp1.cpp](main_cp1.cpp). For this checkpoint, use indexing/subscripting/[] on the vector, not iterators (or pointers). You may not use a second vector or array or list. The trick is to step through the vector one location at a time, swapping values between the first half of the
vector and the second half. As examples, the value at location 0 and the value at location size()-1 must
be swapped, and the value at location 1 and the value at location size()-2 must be swapped.
Make sure your code works with even and odd length vectors. 

**To complete this checkpoint**, show a TA your debugged functions to reverse STL vectors by element swapping.

## Checkpoint 2: Reverse with STL List Swaps
*estimate: TBD*

Complete the *reverseFrames* function in [main_cp2.cpp](main_cp2.cpp). For this checkpoint, now the *reverseFrames* function takes an std::list as its parameter, and your task is to reverse this list.

You may want to use a straightforward concept we did not discuss in lecture: a reverse iterator. A reverse
iterator is designed to step through a list from the back to the front. An example will make the main
properties clear:

```cpp
std::list<int> a;
unsigned int i;
for ( i=1; i<10; ++i ){
	a.push_back( i*i );
}
std::list<int>::reverse_iterator ri;
for( ri = a.rbegin(); ri != a.rend(); ++ri ){
	std::cout << *ri << std::endl;
}
```

This code will print out the values 81, 64, 49, . . . , 1, in order, on separate lines. You can also compile and run this [example program](reverse_iterator.cpp).

Observe the type for the reverse iterator, the use of the functions rbegin and rend to provide iterators that delimit the bounds on
the reverse iterator, and the use of the ++ operator to take one step backwards through the list. It is very
important to realize that rbegin and end are NOT the same thing! One of the challenges here will be
determining when to stop (when you’ve reached the halfway point in the list). You may use an integer
counter variable to help you do this.

For this checkpoint you should not use *erase*, or *insert*, or the *push* or *pop* functions.
Note, you’ll probably need to add the keyword typename in front of your templated iterator types to unconfuse the compiler.

```cpp
typename std::list<T>::iterator itr = data.begin();
```

**To complete this checkpoint**, show a TA your debugged functions to reverse STL lists by element swapping.

## Checkpoint 3: Reverse with STL List Using Insert/Erase/Push/Pop
*estimate: TBD*

Form a team of 4. You may form a team of 2 or 3 only with approval from your graduate lab TA.

Each student should make a copy of their solution file for Checkpoint 2. And then, each student should
rewrite their STL list reverse function:
  - **STUDENT 1** Using only front(), pop_front(), and insert().  
  - **STUDENT 2** Using only back(), pop_back(), insert(), and iterator increment.  
  - **STUDENT 3** Using only erase(), push_front(), and iterator dereference.  
  - **STUDENT 4** Using only erase(), push_back(), iterator dereference, and iterator decrement.  
Each of these solutions is allowed to use a for or while loop and a temporary variable to store a single
element, but should not use any auxiliary data structures (no array, no vector, no additional list, etc.)

Note that these solutions are quite different than the algorithms that reverse a vector or list by swapping
values. Test and debug your own code before helping your teammates. Discuss the similarities and differences between
the solutions to each version of the reverse function.

**To complete this checkpoint**, as a team, present your debugged solutions to a TA or mentor.

<!-- ## Checkpoint 3: Reversing a Homemade Linked List
*estimate: TBD*

This checkpoint is an individual checkpoint. (But you can ask your teammates questions if you get stuck.)
Pull out some paper. Following the conventions from lecture, draw a picture of a “homemade” singly-linked
list that stores the values 1, 2, 3, and 4. Make a variable on the stack named my_list of type Node* that
points to the first node in the chain (the node storing the value 1). The 4 node objects should be separate
blobs of memory dynamically-allocated on the heap.

Now, modify this diagram to reverse the list – you can do this by only changing pointers! You should use the
existing node objects. Don’t copy the entire diagram or make any new nodes. You should not change the
values inside of any node – don’t swap values like we did for Checkpoint 1.
Then, write pseudo-code to reverse this list, just changing the pointers as you diagrammed above. You may
use helper variables (of type Node*) but no other data structures or variables. Remember that when we
directly manipulate homemade linked lists we don’t use iterators.

Finally, read the starter code of checkpoint 3: [checkpoint3.cpp](checkpoint3.cpp). Complete the reverse function using your diagram and pseudocode as a guide. Test and debug the code. Add a few additional test cases to the main function to ensure your code works with an empty list,
and lists with one or two values. Also add a test or two of a node chain with something other than ints.
If you have time, write 2 versions of this function, one version should be iterative (using a for or while loop)
and one version should be recursive.

**Note**: this reverse function takes a pointer as its argument, but we are passing this pointer by reference, because we want to modify this pointer. To understand the concept of passing a pointer by reference, you are recommended to read and run this [example program](reference_to_a_pointer.cpp).

**To complete this checkpoint**, show a TA or mentor your diagram and your debugged function(s) to
reverse a homemade singly-linked list.-->
