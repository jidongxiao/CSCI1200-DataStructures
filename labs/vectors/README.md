# Lab 5 — Vec Implementation

## Checkpoint 1
*estimate: 20 minutes*

- Team up with one student in your lab section. MEET SOMEONE NEW! You may not work
with someone who was on your team for Lab 4. Ask a TA or mentor to help you find a partner.
If the number of students in the room is not even, the graduate TA will approve a single team with 3
members.
- Introduce yourself to your teammate. Ask them to share something about themselves (e.g. hobbies,
sports, favorite music, etc.) Learn something new about your teammate (even if you already know
them).
- There are two sets of functions below. Each student in your team takes one set and working on it.

For each function below, assign different letters to each of the data sizes that at first glance might have impact
on the running time of the function. Be sure to consider integer value, size of vector, and length of string.
Then give the big O notation of the function in terms of those variables.

### Student 1

```cpp
int foobar (const std::vector<std::string> &a, int b) {
    int answer = 0;
    for (int i = 0; i < a.size(); i+=b) {
        answer++;
    }
    return answer;
}
```

```cpp
void foo2 (const std::vector<int> &a, std::string &b) {
    b.clear();
    for (int i = 0; i < a.size(); i++)
    {
        if (a[i] > 0)
            b.push_back('+');
        else
            b.push_back('-');
    }
}
```

```cpp
std::vector<int> foo3 (const std::vector<int> &a, const std::string &b) {
    return std::vector<int>(b.size(),a.size());
}
```

```cpp
int foo3 (const std::vector<std::string> &a, const std::string& b) {
    int ret = 0;
    for (int i=0; i<a.size(); i++){
        ret += (a[i] == b);
    }
    return ret;
}
```

```cpp
std::vector<int> foo4 (const std::vector<int> &a) {
    std::vector<int> answer = a;
    for (int i = 0; i < a.size(); i++) {
        if(a[i] < (a[a.size()-1]*a[a.size()-1])){
            answer.erase(answer.end()-1);
        }
    }
    return answer;
}
```

```cpp
std::vector<int> foo5 (const std::vector<int> &a, int b) {
    std::vector<int> ret;
    for(int i=0; i<a.size(); i++){
        if(a[i] < b){
            ret.insert(ret.end(),a[i]);
        }
    }
    return ret;
}
```

### Student 2

```cpp
int foobar (const std::vector<std::string> &a, int b) {
    int answer = 0;
    for (int i = 0; i < a.size(); i+=b) {
        answer++;
    }
    return answer;
}
```

```cpp
std::vector<int> bar2 (const std::vector<std::string> &a) {
    std::vector<int> answer;
    for (int i = 0; i < a.size(); i++) {
        answer.push_back(a[i].size());
    }
    return answer;
}
```

```cpp
std::vector<std::string> bar3 (const std::vector<int> &a) {
    std::vector<std::string> answer;
    for (int i = 0; i < a.size(); i++) {
        answer.push_back(std::string(a[i],'+'));
    }
    return answer;
}
```

```cpp
void bar3 (std::vector<std::string> &a, const std::string &b) {
    for (int i = 0; i < a.size(); i++) {
        a[i] = b;
    }
}
```

```cpp
std::vector<int> bar4 (const std::vector<std::string> &a) {
    std::vector<int> answer;
    if(!a.empty()){
        for (int i = 0; i < std::min(a[0].size(), a.size()); i++) {
            answer.insert(answer.begin(),a[i].size());
        }
    }
    return answer;
}
```

```cpp
void bar5 (std::vector<int> &a) {
    for (int i = 0; i < a.size(); i++){
        if (a[i] > 0){
            a.erase(a.begin() + i);
            i--;
        }
    }
}
```

When you finish, discuss these problems with your teammate. If your teammate hasn’t finished, please help
them (but without just doing the problems for them).

Once you are both finished, type these examples into your C++ editor, add print statements, and confirm your answers are correct. What print statements will be most helpful? In your terminal, instead of running just

```console
./a.out
```

try running

```console
time ./a.out
```

and reading the real time, which is how long your program took to run. How does this change as you increase or decrease each of the data size variables you identified above?

**To complete this checkpoint**, as a team, present your work to a TA/mentor.

## Checkpoint 2
*estimate: 30-40 minutes*

Write a templated non-member function named remove_matching_elements that takes in two arguments,
a vector of type Vec&lt;T&gt; and an element of type T, and returns the number of elements that matched the
argument and were successfully removed from the vector. The order of the other elements should stay
the same. For example, if v, a Vec&lt;int&gt; object contains 6 elements: 11 22 33 11 55 22 and you call
remove_matching_elements(v,11), that call should return 2, and v should now contain: 22 33 55 22.
You should not create a new vector in your function.
Add several test cases to test_vec.cpp to show that the function works as expected. What is the order
notation of your solution in terms of n the size of the vector, and e the number of occurences of the input
element in the vector?

*Note*: when you are in a non-member function, and you want to use the iterator, which is a member type of the Vec&lt;T&gt; class, you have to use the *typename* keyword before the Vec&lt;T&gt;:: scope. For example, if you want to define an iterator named *itr*, you can do it like this:

```console
typename Vec<T>::iterator itr
```

without this *typename* keyword, if you define the iterator *itr* like this:

```console
Vec<T>::iterator itr
```

you will get a compiler error saying:

```console
error: need ‘typename’ before ‘Vec<T>::iterator’ because ‘Vec<T>’ is a dependent scope
```

And the reason that this keyword *typename* is needed, is because without it, the compiler would think that Vec&lt;T&gt;::iterator is a member variable of the Vec&lt;T&gt; class, but this *typename* explicitly tells the compiler that Vec&lt;T&gt;::iterator is a type, rather than a member variable.

**To complete this checkpoint**, show a TA your debugged solution for remove_matching_elements and
be prepared to discuss the order notation of the function.

## Checkpoint 3
*estimate: 30 minutes*

Add a print member function to Vec to aid in debugging. (Note, neither remove_matching_elements nor
print are part of the STL standard for vector). You should print the current information stored in the
variables capacity, m_size, and m_data. Use the print function to confirm your remove_matching_elements
function is debugged. Also, write a test case that calls push_back many, many times (hint, use a for loop!)
and observe how infrequently re-allocation of the m_data array is necessary.
To verify your code does not contain memory errors or memory leaks, use Valgrind and/or Dr. Memory on
your local machine – see instructions on the course webpage: Memory Debugging. Also, submit your code
to the homework server (in the practice space for lab 4), which is configured to run the memory debuggers
for this exercise. To verify that you understand the output from Valgrind and/or Dr. Memory, temporarily
add a simple bug into your implementation to cause a memory error or memory leak.

**To complete this checkpoint**, show a TA your tested & debugged program. Be prepared to demo and
discuss the Valgrind and/or Dr. Memory output: with and without memory errors and memory leaks AND
on your local machine and on the homework server.
