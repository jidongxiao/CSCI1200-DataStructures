# Lecture 15 --- Associative Containers (Maps), Part 1

Associative Containers (STL Maps)
- STL Maps: associative containers for fast insert, access and remove
- Example: Counting word occurrences
- STL Pairs
- Map iterators
- Map member functions: operator[], find, insert, erase.
- Efficiency
- STL maps vs. STL vectors vs. STL lists

## 15.1 STL Maps: Associative Containers

- STL maps store pairs of “associated” values.
 We will see several examples today, in Lab 9, and in Lecture 15:
- An association between a string, representing a word, and an int representing the number of times that
word has been seen in an input file.
- An association between a string, representing a word, and a vector that stores the line numbers from a
text file on which that string occurs (next lecture).
- An association between a phone number and the name of the person with that number (Lab 9).
- An association between a class object representing a student name and the student’s info (next lecture).
 A particular instance of a map is defined (declared) with the syntax:
std::map&lt;key_type, value_type&gt; var_name
In our first two examples above, key type is a string. In the first example, the value type is an int and in
the second it is a std::vector&lt;int&gt;.
- Entries in maps are pairs:
std::pair&lt;const key_type, value_type&gt;
- Map iterators refer to pairs.
- Map search, insert and erase are all very fast: O(log n) time, where n is the number of pairs stored in the map.
 Note: The STL map type has similarities to the Python dictionary, Java HashMap, or a Perl hash, but the
data structures are not the same. The organization, implementation, and performance is different. In a couple
weeks we’ll see an STL data structure that is even more similar to the Python dictionary.
- Map search, insert and erase are O(log n).
First, let’s see how this some of this works with a program to count the occurrences of each word in a file. We’ll look
at more details and more examples later.

## 15.2 Counting Word Occurrences

Here’s a simple and elegant solution to this problem using a map:

```cpp
#include <iostream>
#include <map>
#include <string>
int main() {
std::string s;
std::map<std::string, int> counters; // store each word and an associated counter
// read the input, keeping track of each word and how often we see it
while (std::cin >> s)
++counters[s];
// write the words and associated counts
std::map<std::string, int>::const_iterator it;
for (it = counters.begin(); it != counters.end(); ++it) {
std::cout << it->first << "\t" << it->second << std::endl;
}
return 0;
}
```

## 15.3 Maps: Uniqueness and Ordering

- Maps are ordered by increasing value of the key. Therefore, there
must be an operator< defined for the key.
- Once a key and its value are entered in the map, the key can’t be
changed. It can only be erased (together with the associated value).
- Duplicate keys can not be in the map.

## 15.4 STL Pairs

The mechanics of using std::pairs are relatively straightforward:
- std::pairs are a templated struct with just two members, called first and second. Reminder: a struct
is basically a wimpy class and in this course you aren’t allowed to create new structs. You should use classes
instead.
- To work with pairs, you must #include <utility>. Note that the header file for maps (#include <map>)
itself includes utility, so you don’t have to include utility explicitly when you use pairs with maps.
- Here are simple examples of manipulating pairs:
```cpp
std::pair<int, double> p1(5, 7.5);
std::pair<int, double> p2 = std::make_pair(8, 9.5);
p1.first = p2.first;
p2.second = 13.3;
std::cout << p1.first << " " << p1.second << std::endl;
std::cout << p2.first << " " << p2.second << std::endl;
p1 = p2;
std::pair<const std::string, double> p3 = std::make_pair(std::string("hello"), 3.5);
p3.second = -1.5;
// p3.first = std::string("illegal"); // (a)
// p1 = p3; // (b)
```
- The function std::make pair creates a pair object from the given values. It is really just a simplified
constructor, and as the example shows there are other ways of constructing pairs.
- Most of the statements in the above code show accessing and changing values in pairs.
The two statements at the end are commented out because they cause syntax errors:
- In (a), the first entry of p3 is const, which means it can’t be changed.
- In (b), the two pairs are different types! Make sure you understand this.
- Returning to maps, each entry in the map is a pair object of type:
std::pair&lt;const key_type, value_type&gt;
- The const is needed to ensure that the keys aren’t changed! This is crucial because maps are sorted by keys!

## 15.5 Maps: operator[]

- We’ve used the [] operator on vectors, which is conceptually very simple because vectors are just resizable
arrays. Arrays and vectors are efficient random access data structures.
- But operator[] is actually a function call, so it can do things that aren’t so simple too, for example:
++counters[s];
 For maps, the [] operator searches the map for the pair containing the key (string) s.
– If such a pair containing the key is not there, the operator:
1. creates a pair containing the key and a default initialized value,
2. inserts the pair into the map in the appropriate position, and
3. returns a reference to the value stored in this new pair (the second component of the pair).
This second component may then be changed using operator++.
– If a pair containing the key is there, the operator simply returns a reference to the value in that pair.
- In this particular example, the result in either case is that the ++ operator increments the value associated with
string s (to 1 if the string wasn’t already it a pair in the map).
- For the user of the map, operator[] makes the map feel like a vector, except that indexing is based on a
string (or any other key) instead of an int.
- Note that the result of using [] is that the key is ALWAYS in the map afterwards.
