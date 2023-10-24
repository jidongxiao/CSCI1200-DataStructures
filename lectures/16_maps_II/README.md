# Lecture 16 --- Associative Containers (Maps), Part 2

## 16.1 More Complicated Values

- Let’s look at the example:
```cpp
map<string, vector<int> > m;
map<string, vector<int> >::iterator p;
```

Note that the space between the &gt; &gt; is required (by many compiler parsers). Otherwise, &gt;&gt; is treated as an operator

- Here’s the syntax for entering the number 5 in the vector associated with the string "hello":

```cpp
m[string("hello")].push_back(5);
```

- Here’s the syntax for accessing the size of the vector stored in the map pair referred to by map iterator p:

```cpp
p = m.find(string("hello"));
p->second.size()
```

Now, if you want to access (and change) the ith entry in this vector you can either using subscripting:

```cpp
(p->second)[i] = 15;
```

(the parentheses are needed because of precedence) or you can use vector iterators:

```cpp
vector<int>::iterator q = p->second.begin() + i;
*q = 15;
```

Both of these, of course, assume that at least i+1 integers have been stored in the vector (either through the
use of push back or through construction of the vector).
- We can figure out the correct syntax for all of these by drawing pictures to visualize the contents of the map
and the pairs stored in the map. We will do this during lecture, and you should do so all the time in practice.

## 16.2 Typedefs

- One of the painful aspects of using maps is the syntax. For example, consider a constant iterator in a map
associating strings and vectors of ints:

```cpp
map < string, vector<int> > :: const_iterator p;
```

- Typedefs are a syntactic means of shortening this. For example, if you place the line:

```cpp
typedef map < string, vector<int> > map_vect;
```

before your main function (and any function prototypes), then anywhere you want the map you can just use
the identifier map_vect:

```cpp
map_vect :: const_iterator p;
```

The compiler makes the substitution for you.

## 16.3 Standard Library Sets

- STL sets are ordered containers storing unique “keys”. An ordering relation on the keys, which defaults to
operator<, is necessary. Because STL sets are ordered, they are technically not traditional mathematical sets.
- Sets are like maps except they have only keys, there are no associated values. Like maps, the keys are constant.
This means you can't change a key while it is in the set. You must remove it, change it, and then reinsert it.
- Access to items in sets is extremely fast! O(log n), just like maps, but sets do not have the [] operator, and
you shouldn't use [] to access elements in a set.
- To use sets, you need to include the set library:

```cpp
#include <set>
```

## 16.4 Leetcode Exercises (Maps)

- [Leetcode problem 49: Group Anagrams](https://leetcode.com/problems/group-anagrams/). Solution: [p49_group_anagrams.cpp](../../leetcode/p49_group_anagrams.cpp).
- [Leetcode problem 290: Word Pattern](https://leetcode.com/problems/word-pattern/). Solution: [p290_word_pattern.cpp](../../leetcode/p290_word_pattern.cpp).

## 16.5 Leetcode Exercises (Sets)

- [Leetcode problem 414: Third Maximum Number](https://leetcode.com/problems/third-maximum-number/). Solution: [p414_third_max_number.cpp](../../leetcode/p414_third_max_number.cpp).
- [Leetcode problem 1207: Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/). Solution: [p1207_unique_number_occurrences.cpp](../../leetcode/p1207_unique_number_occurrences.cpp).

