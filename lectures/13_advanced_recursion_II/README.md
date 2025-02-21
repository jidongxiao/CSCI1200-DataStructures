# Test 2 Information

Students will be randomly assigned to a test room and seating zone – will be on Submitty soon.
<!--  – If you haven’t filled out the “Left or Right Handed” gradeable by Tuesday night, we will assume you are
right handed. This is used for seating assignments.-->
- Test 2 will be held **Thursday, 02/27/2025 from 6-7:50pm**.
<!--  – No make-ups will be given except for pre-approved absence or illness, and a written excuse from the Dean
of Students or the Student Experience office or the RPI Health Center will be required. -->
– If you have a letter from Disability Services for Students and you have not already emailed it to
ds_instructors@cs.rpi.edu, please do so ASAP. Meredith Widman will be in contact with you about
your accommodations for the test.
- Coverage: Lectures 1-13, Labs 1-5, and Homeworks 1-5.
- Practice problems from previous exams are available on the course website. The best way to prepare is to completely work through and write out your solution to each problem, before looking at the answers.
- OPTIONAL: you are allowed to bring one physical piece of 8.5x11” paper, that’s two “sides”. We will check at the start of the exam that you do not have more than one piece of paper for your notes!
<!-- - OPTIONAL: Prepare a 2 page, black & white, 8.5x11”, portrait orientation .pdf of notes you would like to have during the exam. This may be digitally prepared or handwritten and scanned or photographed. The file may be no bigger than 2MB. You will upload this file to Submitty (“Test 1 Notes Upload”) before Wednesday night @11:59pm. We will print this and attach it to your exam. Make sure you get credit for test case 2 and that you view the details to verify your sheet looks correct. You cannot bring your own cribsheet, you must submit one electronically. IMPORTANT: Using third party websites to make a PDF may generate an invalid PDFs that prints weird. Your word processor’s -> save as/export to PDF, or Google Docs -> Download -> PDF should be safe. -->
- Bring to the exam room:
  – Your Rensselaer photo ID card.
  – Pencil(s) & eraser (pens are ok, but not recommended). The exam will involve handwriting code on paper (and other short answer problem solving). Neat legible handwriting is appreciated.
  – Computers, cell-phones, smart watches, calculators, music players, etc. are not permitted. Please do not bring your laptop, books, backpack, etc. to the exam room – leave everything in your dorm room. Unless you are coming directly from another class or sports/club meeting.
<!-- – Do not bring your own scratch paper. We will provide scratch paper.-->

# Lecture 13 --- Advanced Recursion, Part II

- Advanced Recursion — problems that cannot be easily solved using iteration (for or while loops):  
  – Non-linear maze search

## 13.1 Example: Word Search

- Take a look at the following grid of characters.
```console
heanfuyaadfj
crarneradfad
chenenssartr
kdfthileerdr
chadufjavcze
dfhoerpadlfc
neicoetrtlkf
paermpuohtrr
diofetaycrhg
daldruetryrt
```
- If you can start from any location of this grid, and go forward, backward, up and down. Can you find the word **computer** in this grid?  (**Note**: The same letter cell may not be used more than once.)
- A sketch of the solution is as follows:
  – The grid of letters is represented as vector&lt;vector&lt;char&gt;&gt; grid; Each vector&lt;char&gt; represents a row. We can treat this as a two-dimensional array.  
  – A word to be sought, such as “computer” is read as a string.  
  – A pair of nested for loops searches the grid for occurrences of the first letter in the string. Call such a location (r, c).  
  - At each location where the first letter is found, a search of the second letter is initiated in the 4 neighboring locations of location (r, c).  
  - Make this process recursive: at each location where the *ith* letter is found, a search of the *(i+1)th* letter is initiated in the 4 neighboring locations. 
  - The search can stop when all letters of the string are found - this is the base case of the recursion.
  - Question: how to make sure we do not use the same letter more than once on our success path?

## 13.2 Exercise: Complete the implementation

- [Leetcode problem 79: Word Search](https://leetcode.com/problems/word-search/). Solution: [p79_wordsearch.cpp](../../leetcode/p79_wordsearch.cpp).
- [Leetcode problem 212: Word Search II](https://leetcode.com/problems/word-search-ii/). Solution: To be added. (it won't be added until we learn Trie).

## 13.3 Summary of Nonlinear Word Search Recursion

- Recursion starts at each location where the first letter is found.
- Each recursive call attempts to find the next letter by searching around the current position. When it is found,
a recursive call is made.
- The current path is maintained at all steps of the recursion.
- The “base case” occurs when the path is full or all positions around the current position have been tried.
