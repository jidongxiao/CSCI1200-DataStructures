# Lab 12 — Hash Tables

<!--In this lab, you will first experiment with our hash table implementation of a set. The key differences between the ds_set class (based on a binary search tree) and the ds_hashset class (based on a hash table, of course), are the performance of insert/find/erase: O(log n) vs. O(1), and the order that the elements are traversed using iterators: the set was in order, while the hashset is in no apparent order.-->

In this lab, you will practice using std::unordered_set, std::unordered_map, and construct your own separate-chaining-based hash table.

<!--Provided code for checkpoint 1 and checkpoint 2: [ds_hashset.h](ds_hashset.h) and [test_ds_hashset.cpp](test_ds_hashset.cpp).-->

## Checkpoint 1: Using std::unordered_set and std::unordered_map

*estimate: 15-30 minutes*

Complete the *isGood* function in this [program](good_number.cpp). This function determines if a number n is good or not. You can assume 1&lt;=n&lt;50000. You must write two versions of the function, one version uses std::unordered_set, the other version uses std::unordered_map.

A good number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are good.

Return true if n is a good number, and false if not. Here are some examples:

```console
Example 1:

Input: n = 19
Output: true

Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

```console
Example 2:

Input: n = 2
Output: false
```

<!--For the first part of this checkpoint, implement and test the *insert* function for the hashset. The *insert* function must first determine in which bin the new element belongs (using the hash function), and then insert the element into that bin but only if it isn’t there already. The *insert* function returns a pair containing an iterator pointing at the element, and a bool indicating whether it was successfully inserted (true) or already there (false).

For the second part of this checkpoint, experiment with the hash function. In the provided code we include the implementation of a good hash function for strings. Are there any collisions for the small example? Now write some alternative hash functions. First, create a trivial hash function that is guaranteed to have many, many collisions. Then, create a hash function that is not terrible, but will unfortunately always place anagrams (words with the same letters, but rearranged) in the same bin. Test your alternate functions and be prepared to show the results to your TA.

**To complete this checkpoint**: Show a TA your debugged implementation of *insert* and your experimentation with alternative hash functions.-->

**To complete this checkpoint**: Show a TA the two versions of your program and the test results.

## Checkpoint 2: Separate Chaining Hash Table

*estimate: 30-40 minutes*

<!--Next, implement and test the *begin* function, which initializes the iteration through a hashset. Confirm that the elements in the set are visited in the same order they appear with the *print* function (which we have implemented for debugging purposes only).

Finally, implement and test the *resize* function. This function is automatically called from the *insert* function when the set gets “too full”. This function should make a new top level vector structure of the requested size and copy all the data from the old structure to the new structure. Note that the elements will likely be shuffled around from the old structure to the new structure.-->

Complete the *isGood* function using separate chaining. Do not use any of these: std::unordered_map, std::unordered_set, std::map, std::set.

**To complete this checkpoint**: Show a TA these additions and the test output.

<!--## Checkpoint 3,4,5,6: Separate Chaining Hash Table (Yes, it's Checkpoint 3,4,5,6, as there are 3 extra credits for making this program work.)-->
## Checkpoint 3

*estimate: 30-40 minutes*

Form a team of two members. Complete the *longestConsecutive* function in this [program](test_longest_consecutive_sequence.cpp). You must use a separate-chaining-based hash table. Do not use any of these: std::unordered_map, std::unordered_set, std::map, std::set.

The *longestConsecutive* function takes an unsorted std::vector of integers, and returns the length of the longest consecutive elements sequence.

```console
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

```console
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Explanation: The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.
```

**To complete this checkpoint**: Show a TA your program and the test results.
<!--**To complete checkpoint (3,4,5,6)**: Show a TA your program and the test results.-->

<!--**Note**: checkpoint (3,4,5,6) is very challenging, if you can't get it work during your lab period, make sure you understand it completely after the lab period, because one of the four problems on Test 3, will be about separate-chaining-based hash tables. It's 100% certain.-->
