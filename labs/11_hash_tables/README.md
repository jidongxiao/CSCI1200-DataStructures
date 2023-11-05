# Lab 11 — Hash Tables

In this lab, you will first experiment with our hash table implementation of a set. The key differences between the ds_set class (based on a binary search tree) and the ds_hashset class (based on a hash table, of course), are the performance of insert/find/erase: O(log n) vs. O(1), and the order that the elements are traversed using iterators: the set was in order, while the hashset is in no apparent order.

And then you will practice using std::unordered_map.

Provided code for checkpoint 1 and checkpoint 2: [ds_hashset.h](ds_hashset.h) and [test_ds_hashset.cpp](test_ds_hashset.cpp).

## Checkpoint 1

*estimate: 15-30 minutes*

For the first part of this checkpoint, implement and test the *insert* function for the hashset. The *insert* function must first determine in which bin the new element belongs (using the hash function), and then insert the element into that bin but only if it isn’t there already. The *insert* function returns a pair containing an iterator pointing at the element, and a bool indicating whether it was successfully inserted (true) or already there (false).

For the second part of this checkpoint, experiment with the hash function. In the provided code we include the implementation of a good hash function for strings. Are there any collisions for the small example? Now write some alternative hash functions. First, create a trivial hash function that is guaranteed to have many, many collisions. Then, create a hash function that is not terrible, but will unfortunately always place anagrams (words with the same letters, but rearranged) in the same bin. Test your alternate functions and be prepared to show the results to your TA.

**To complete this checkpoint**: Show a TA your debugged implementation of *insert* and your experimentation with alternative hash functions.

## Checkpoint 2

*estimate: 20-40 minutes*

Next, implement and test the *begin* function, which initializes the iteration through a hashset. Confirm that the elements in the set are visited in the same order they appear with the *print* function (which we have implemented for debugging purposes only).

Finally, implement and test the *resize* function. This function is automatically called from the *insert* function when the set gets “too full”. This function should make a new top level vector structure of the requested size and copy all the data from the old structure to the new structure. Note that the elements will likely be shuffled around from the old structure to the new structure.

**To complete this checkpoint**: Show a TA these additions and the test output.

## Checkpoint 3: Using std::unordered_map

*estimate: 20-30 minutes*

Complete the *isHappy* function in this [program](test_happy_number.cpp). This function determines if a number n is happy or not. You can assume 1&lt;=n&lt;50000. Do not include extra libraries.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not. Here are some examples:

```console
Example 1:

Input: n = 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

```console
Example 2:

Input: n = 2
Output: false
```

**To complete this checkpoint**: Show a TA your program and the test results.
