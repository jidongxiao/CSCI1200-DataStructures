This README is still incomplete.

# Homework 8 — Managing Youtube Comments

In this assignment you will develop a program to manage youtube comments, let's call this program New York Comments. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice using tree data structures.
- Practice writing recursive programs.

## Background

A reddit user complained about this: [Why are YouTube comments not threaded like reddit comments? Why is there only one level of nestedness?](https://www.reddit.com/r/youtube/comments/8uei3n/why_are_youtube_comments_not_threaded_like_reddit/).

The complaint is saying that on reddit you will get a nested comment chain like this:

```
A: This video is fake
    B: No, it's not!
        C: How can you be so dumb?
```

and it's clear that C is replying to B.

But on YouTube you will only get something like this:

```
A: This video is fake
    B: No, it's not!
    C: How can you be so dumb?
```

Now, is C replying to B or to A? In fact, on YouTube, even if C relies to B, you will still get something like this. The problem is, YouTube does manage their comments in trees, but they only allow the trees to have two levels: parent and children, but there are no grandchildren, and that's what this user refers to as "only one level of nestedness". In order to support multiple level of nestedness, we need to create trees with more than two levels, and that is what you do in this assignment, your goal is to write a program to make youtube display comments the better way, so users can see which comment is a reply to which comment.

If you are still not clear about this problem, try to reply to a comment on youtube, and make sure you reply to a comment which is already a reply to another comment.

## Supported Commands

Your program will be run like this:

```console
nycomments.exe input1.json input2.txt output.txt
```

Here:

- *nycomments.exe* is the executable file name.
- input1.json contains existing comments to a youtube video.
- input2.txt contains operations we want to perform.
- output.txt is where to print your output to.

## Format of input1.json

input1.json represents the json files. Each line of the .json file has this same format:

```console
{"video_id": "PMootRNTC-A", "author": "@tedybossu98", "comment_id": "UgwRfodAvGV1UOSQHhN4AaABAg", "like_count": 145, "reply_count": 51, "is_reply": false, "parent_comment_id": "", "published_date": "11 years ago", "crawled_date": "2023-10-31T22:35:37.499265", "is_video_owner": false, "comment": "Great Lord. Every time i hear this song i picture myself calling my ex and having the most romantic conversation on Earth. (her crying ..me crying) but when the song ends i never call her. I go play MW3 ..lame"}
```

The line is enclosed with a pair of curly braces. And every line has these same fields:

- video id: youtube assign each video an id.
- author: username of the author.
- comment id: youtube assign each comment an id.
- like count: how many likes this comment gets.
- reply count: how many comments are a reply to this comment.
- is reply: is this a reply to an existing comment? (if not, then it's a reply to the video)
- parent comment id: if comment A is a reply to comment B, then we define comment B as the parent of comment A.
- published date: when this comment was made, for all the new comments we are going to make this assignment, please set the published date to be "0 seconds ago".
- crawled date: when the comment data was collected, you won't really use this field in this assignment.
- is video owner: indicates if this comment is made by the video owner.
- comment: the actual comment.

Each field is a key-value pair.

## Format of input2.txt 

input2.txt contains operations we want to perform. These operations include:

1. reply to a video
2. reply to a comment

Here is a sample:
```console
reply_to_comment Ugzsyj0jivPUQdfy_Y94AaABAg Ugzsyj0jivPUQdfy_Y94AaABAg.0 @user1 "Britney is back!"
```
Here:

- reply_to_comment is the operation.
- Ugzsyj0jivPUQdfy_Y94AaABAg is the parent comment id.
- Ugzsyj0jivPUQdfy_Y94AaABAg.0 is the id of this current comment.
- user1 is the user name of this author who is now making the comment, and there is always an @ symbol in front of the user name.
- "Britney is back!" is the content of the comment.

This whole lines means that this user *user1* is making a comment with the content of "Britney is back!", and the id of this comment is Ugzsyj0jivPUQdfy_Y94AaABAg.0, and this comment is a reply to the comment whose id is Ugzsyj0jivPUQdfy_Y94AaABAg.

3. like a comment
4. delete comments
5. display comments

## Output File Format

All expected output files are provided.

## Program Requirements & Submission Details

In this assignment, you are required to maintain the comments in tree nodes, each comment should be stored in one tree node. You are NOT allowed to use any data structures we have not learned so far, but feel free to use any data structures we have already learned, such as std::string, std::vector, std::list, std::map, std::set, std::pair. **You must use recursion in your program in at least one of your functions.**

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 11/09/2023, Thursday, 23:59pm.

## Rubric

17 pts
 - README.txt Completed (2 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
 - IMPLEMENTATION AND CODING STYLE (Good class design, split into a .h and .cpp file.  Functions > 1 line are in .cpp file.  Organized class implementation and reasonable comments throughout. Correct use of const/const& and of class method const. ) (7 pts)
   - No credit (significantly incomplete implementation) (-7)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Missing include guards in the .h file. (Or does not declare them correctly) (-1)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Improper uses or omissions of const and reference. (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor variable names. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (6 pts)
   - Uses data structures which have not been covered in this class. (-6)
   - Does not use tree data structures to store the comments. (-6)
   - Member variables are public. (-2)
 - RECURSION (2 pts)
   - Does not use recursion at all. (-2)
