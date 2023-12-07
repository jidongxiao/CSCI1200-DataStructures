# Lecture 28 --- Concurrency & Asynchronous Computing

## Final Exam General Information

- The final exam will be held: Friday December 15th 6:30pm - 9:30pm.
- Coverage: Lectures 1-27, Labs 1-14, and HW 1-10.
- OPTIONAL: you are allowed two physical pieces of 8.5x11” paper, that’s four “sides”. We will not collect these electronically and we will not pre-print them, you will have to bring these notes pages yourself if you want them. We will check at the start of the exam that you do not have more than two pieces of paper for your notes!
- Bring to the exam room:  
  – Your Rensselaer photo ID card.  
  
  – Pencil(s) & eraser.  
  
  - Computers, cell-phones, smart watches, calculators, music players, etc. are not permitted. Please do not bring your laptop, books, backpack, etc. to the exam room – leave everything in your dorm room. Unless you are coming directly from another class or sports/club meeting.

## Today’s Lecture

- Computing with multiple threads/processes and one or more processors
- Shared resources & mutexes/locks

## 28.1 Concurrency Example: Joint Bank Account

- Consider the following bank account implementation:

```cpp
class Account {
public:
	Account(int amount) : balance(amount) {}
	void deposit(int amount) {
		int tmp = balance; // A
		tmp += amount; // B
		balance = tmp; // C
	}
	void withdraw(int amount) {
		int tmp = balance; // D
		if (amount > tmp){
			cout << "Error: Insufficient Funds!" << endl; // E1
		} else {
			tmp -= amount; // E2
		}
		balance = tmp; // F
	}
private:
	int balance;
};
```

- We create a joint account that will be used by two people (threads/processes):

```cpp
Account account(100);
```

- Now, enumerate all of the possible interleavings of the sub-expressions (A-F) if the following two function calls were to happen concurrently. What are the different outcomes?

```cpp
account.deposit(50);
account.withdraw(125);
```

- What if instead the actions were:

```cpp
account.deposit(50);
account.withdraw(75);
```

## 28.2 Correct/Acceptable Behavior of Concurrent Programs

- No two operations that change any shared state variables may occur at the same time.

  – Certain low-level operations are guaranteed to execute atomic-ly (from start to finish without interruption), but this varies based on the hardware and operating system. We need to know which operations are atomic on our hardware.

  – In the bank account example we cannot assume that the deposit and withdraw functions are atomic.
- The concurrent system should produce a result of the threads/processes running sequentially in some order.

  – We do not require that the threads/processes run sequentially, only that they produce results as if they had run sequentially.

  – Note: There may be more than one correct result!
- Exercise: What are the acceptable outcomes for the bank account example?

## 28.3 Serialization via a Mutex

- We can serialize the important interactions using a primitive, atomic synchronization method called a mutex.
- Once one thread has acquired the mutex (locking the resource), no other thread can acquire the mutex until it has been released.

In the example below we use the STL mutex object (#include &lt;mutex&gt;). If the mutex is unavailable, the
call to the mutex member function lock() blocks (the thread pauses at that line of code until the mutex is
available).

```cpp
class Chalkboard {
public:
	Chalkboard() { }
	void write(Drawing d) {
		board.lock();
		drawing = d;
		board.unlock();
	}
	Drawing read() {
		board.lock();
		Drawing answer = drawing;
		board.unlock();
		return answer;
	}
private:
	Drawing drawing;
	std::mutex board;
};
```

- What does the mutex do in this code?

## 28.4 The Professor & Student Classes

Here are two simple classes that can communicate through a shared Chalkboard object:

```cpp
class Professor {
public:
	Professor(Chalkboard *c) { chalkboard = c; }
	virtual void Lecture(const std::string &notes) {
		chalkboard->write(notes);
	}
protected:
	Chalkboard* chalkboard;
};
class Student {
public:
	Student(Chalkboard *c) { chalkboard = c; }
	void TakeNotes() {
		Drawing d = chalkboard->read();
		notebook.push_back(d);
	}
private:
	Chalkboard* chalkboard;
	std::vector<Drawing> notebook;
};
```

## 28.5 Launching Concurrent Threads

- So how exactly do we get multiple streams of computation happening simultaneously? There are many choices
(may depend on your programming language, operating system, compiler, etc.).
- We’ll use the STL thread library (#include &lt;thread&gt;). The new thread begins execution in the provided
function (student thread, in this example). We pass the necessary shared data from the main thread to the
secondary thread to facilitate communication.

```cpp
#define num_notes 10
void student_thread(Chalkboard *chalkboard) {
	Student student(chalkboard);
	for (int i = 0; i < num_notes; i++) {
		student.TakeNotes();
	}
}

int main() {
	Chalkboard chalkboard;
	Professor prof(&chalkboard);
	std::thread student(student_thread, &chalkboard);
	for (int i = 0; i < num_notes; i++) {
		prof.Lecture("blah blah");
	}
	student.join();
}
```

- The join command pauses to wait for the secondary thread to finish computation before continuing with the
program (or exiting in this example).
- What can still go wrong? How can we fix it?

## 28.6 Topics Covered

- Algorithm analysis: big O notation; best case, average case, or worst case; algorithm running time or additional
memory usage
- STL classes: string, vector, list, map, & set, (we talked about but did not practice using STL stack,
queue, unordered_set, unordered_map, & priority_queue)
- C++ Classes: constructors (default, copy, & custom argument), assignment operator, & destructor, classes
with dynamically-allocated memory, operator overloading, inheritance, polymorphism
- Subscripting (random-access, pointer arithmetic) vs. iteration
- Recursion & problem solving techniques
- Memory: pointers & arrays, heap vs. stack, dynamic allocation & deallocation of memory, garbage collection,
smart pointers
- Implementing data structures: resizable arrays (vectors), linked lists (singly-linked, doubly-linked, circularlylinked, dummy head/tail nodes), trees (for sets & maps), hash sets
- Binary Search Trees, tree traversal (in-order, pre-order, post-order, depth-first, & breadth-first), ropes
- Hash tables (hash functions, collision resolution), priority queues, heap as a vector
- Exceptions, concurrency & asynchronous computing

## 28.7 Course Summary

- Approach any problem by studying the requirements carefully, playing with hand-generated examples to understand them, and then looking for analogous problems that you already know how to solve.
- STL offers container classes and algorithms that simplify the programming process and raise your conceptual level of thinking in designing solutions to programming problems. Just think how much harder some of the homework problems would have been without generic container classes!
- When choosing between algorithms and between container classes (data structures) you should consider:  
  – efficiency,  
  – naturalness of use, and  
  – ease of programming.
- Use classes with well-designed public and private member functions to encapsulate sections of code.
- Writing your own container classes and data structures usually requires building linked structures and managing memory through the big three:  
  – copy constructor,  
  – assignment operator, and  
  – destructor.  
- When testing and debugging:  
  – Test one function and one class at a time,
  – Figure out what your program actually does, not what you wanted it to do,  
  – Use small examples and boundary conditions when testing, and  
  – Find and fix the first mistake in the flow of your program before considering other apparent mistakes.  
- Above all, remember the excitement and satisfaction when your hard work and focused debugging is rewarded with a program that demonstrates your technical mastery and realizes your creative problem solving skills!

<!--## 28.8 Leetcode Exercises

- [Leetcode problem 208: Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/). Solution: [p208_trie.cpp](../../leetcode/p208_trie.cpp).-->
