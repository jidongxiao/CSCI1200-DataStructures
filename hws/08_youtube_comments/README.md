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

input1.json represents the json files, it stores all existing comments. Each line of the .json file has this same format:

```console
{"video_id": "PMootRNTC-A", "author": "@tedybossu98", "comment_id": "UgwRfodAvGV1UOSQHhN4AaABAg", "like_count": 145, "reply_count": 51, "is_reply": false, "parent_comment_id": "", "published_date": "11 years ago", "crawled_date": "2023-10-31T22:35:37.499265", "is_video_owner": false, "comment": "Great Lord. Every time i hear this song i picture myself calling my ex and having the most romantic conversation on Earth. (her crying ..me crying) but when the song ends i never call her. I go play MW3 ..lame"}
```

The line is enclosed with a pair of curly braces. And every line has these same fields:

- *video_id*: youtube assign each video an id.
- author: username of the author.
- *comment_id*: youtube assign each comment an id.
- *like_count*: how many likes this comment gets.
- *reply_count*: how many comments are a reply to this comment.
- *is_reply*: is this a reply to an existing comment? If not, then it's a comment to the video; in other words, every comment, is either a reply to an existing comment (*is_reply* will be true), or is a comment to the original video (*is_reply* will be false).
- *parent_comment_id*: if comment A is a reply to comment B, then we define comment B as the parent of comment A.
- *published_date*: when this comment was made, for all the new comments we are going to make this assignment, please set the published date to be "0 seconds ago".
- *crawled_date*: when the comment data was collected, you won't really use this field in this assignment.
- *is_video_owner*: indicates if this comment is made by the video owner.
- comment: the actual comment.

Each field is a key-value pair.

Please note that all existing comments which are direct responses to the original video, are considered as sibilings. And they do not have a parent. The *parent_comment_id* field of these comments is empty. The following is such an example:

```console
{"video_id": "zz42pQ-2ytI", "author": "@user-ek5tl4nu7p", "comment_id": "UgwELiGkULP-8OvPOAZ4AaABAg", "like_count": 826, "reply_count": 33, "is_reply": false, "parent_comment_id": "", "published_date": "7 hours ago (edited)", "crawled_date": "2023-10-29T23:00:47.300265", "is_video_owner": false, "comment": "I am a Man City fan, but I have to ask the Man United players, how could they leave Haaland so wide open on the second goal."}
```

As can be seen from this above example, a comment which is a direct response to the original video, has this field *parent_comment_id* as an empty string, and also has this field *is_reply* as **false**; in contrast, a comment which is not a direct response to the original video, but rather is a response to an existing comment, will have the id of that existing comment as its *parent_comment_id*, and will also have the *is_reply* field as **true**. The following is an example of such comments:

```console
{"video_id": "zz42pQ-2ytI", "author": "@abelendecody1", "comment_id": "UgwELiGkULP-8OvPOAZ4AaABAg.9wTA3njI9fp9wTE98Q3wqB", "like_count": 83, "reply_count": 0, "is_reply": true, "parent_comment_id": "UgwELiGkULP-8OvPOAZ4AaABAg", "published_date": "6 hours ago", "crawled_date": "2023-10-29T23:00:47.300265", "is_video_owner": false, "comment": "Because they don’t know what they’re doing out there. It’s so sad to see."}
```

see the *is_reply* field is true here.

Our data set includes 6 json files, just to satisfiy your curiosity, they include comments corresponding to the following 6 youtube videos:

hold_me_closer.json is corresponding to this video titled [Elton John, Britney Spears - Hold Me Closer (Official Video)](https://www.youtube.com/watch?v=qExVlz3zb0k).
manchester_derby.json is corresponding to this video titled [Manchester United v. Manchester City | PREMIER LEAGUE HIGHLIGHTS](https://www.youtube.com/watch?v=zz42pQ-2ytI).
need_you_now.json is corresponding to this video titled [Lady Antebellum - Need You Now (Official Music Video)](https://www.youtube.com/watch?v=PMootRNTC-A).
remembering_matthew_perry.json is corresponding to this video titled ["Remembering Matthew Perry, Part 1: The 'Friend' who made us laugh"](https://www.youtube.com/watch?v=riyOeTLGWHw).
should_you_go_to_rpi.json is corresponding to this video titled [Should You Go To RPI? - Opinions from a Rensselaer Polytechnic Institute Graduate](https://www.youtube.com/watch?v=5RSsr-MagHw).
rpi_admissions.json is corresponding to this video titled [Welcome to Rensselaer!](https://www.youtube.com/watch?v=9tsirvC4sSQ).

## Format of input2.txt 

input2.txt contains operations we want to perform, each line of this file describes one operation. These operations include:

1. reply to a video

When a line starts with the string *reply_to_video*, it means that this line describes the operation of *reply to a video*. Here is an example:

```console
reply_to_video Ugw2rL586Lv-OZNS6E94AaABAH @user2 "Friends marks my childhood."
```

Here:

- reply_to_video is the operation name. Lines describing the operation of *reply to a video* has 4 fields: operation name, id of this comment, user name of the author who is making this replying comment (to the video), and the content of the replying comment.
- Ugw2rL586Lv-OZNS6E94AaABAH is the id of this current comment 
- user2 is the user name of this author who is now making the comment, and there is always an @ symbol in front of the user name.
- "Friends marks my childhood." is the content of the comment.

2. reply to a comment

A line which starts with the string *reply_to_comment" means this line describes the operation of "reply to a comment". Here is an example:

```console
reply_to_comment Ugzsyj0jivPUQdfy_Y94AaABAg Ugzsyj0jivPUQdfy_Y94AaABAg.0 @user1 "Britney is back!"
```

Here:

- reply_to_comment is the operation name. Lines describing the operation of *reply to a comment* has 5 fields: operation name, id of the parent comment, id of this comment, user name of the author who is making this replying comment (to another comment), and the content of the replying comment.
- Ugzsyj0jivPUQdfy_Y94AaABAg is the parent comment id.
- Ugzsyj0jivPUQdfy_Y94AaABAg.0 is the id of this current comment.
- user1 is the user name of this author who is now making the comment, and there is always an @ symbol in front of the user name.
- "Britney is back!" is the content of the comment.

This whole lines means that this user *user1* is making a comment with the content of "Britney is back!", and the id of this comment is Ugzsyj0jivPUQdfy_Y94AaABAg.0, and this comment is a reply to the comment whose id is Ugzsyj0jivPUQdfy_Y94AaABAg.

3. like a comment

A line which starts with the string *like_comment" means this line describes the operation of "like a comment". Here is an example:

```console
like_comment Ugzsyj0jivPUQdfy_Y94AaABAg.0.1.5.8.888
```

Here:

- like_comment is the operation name. Lines describing the operation of *like a comment* has just 2 fields: the operation name, and the id the of comment which is being liked.
- Ugzsyj0jivPUQdfy_Y94AaABAg.0.1.5.8.888 is the id of the comment which is being liked.

4. delete comments

A line which starts with the string *delete_comment" means this line describes the operation of "delete a comment". Here is an example:

```console
delete_comment Ugw2rL586Lv-OZNS6E94AaABAF
```

Here:

- delete_comment is the operation name. Lines describing the operation of *delete a comment* has just 2 fields: the operation name, and the id the of comment which is being deleted.
- Ugw2rL586Lv-OZNS6E94AaABAF is the id of the comment which is now being deleted.

**Definition of deleting a comment**:  in this assignment, the definition of "deleting a comment" means delete this current comment, as well as all its descendants. For example, if A is a comment, B is a reply to A, C is a reply to B, D is also a reply to B, E is a reply to D, F is a reply to E, then the operation of "deleting A" means deleting A, B, C, D, E, and F, i.e., deleting A, and all of its descendant.

5. display comments

A line which starts with the string "display_comment" means this line describes the operation of "display a comment". Here is an example:

```console
display_comment Ugw2rL586Lv-OZNS6E94AaABAH
```

Here:

- display_comment is the operation name. Lines describing the operation of *display a comment* has just 2 fields: the operation name, and the id the of comment which is being displayed.
- Ugw2rL586Lv-OZNS6E94AaABAH is the id of the comment which is now being displayed.

**Definition of display a comment**:  in this assignment, the definition of "display a comment" means display this current comment, as well as all its descendants. For example, if A is a comment, B is a reply to A, C is a reply to B, D is also a reply to B, E is a reply to D, F is a reply to E, then the operation of "displaying A" means displaying A, B, C, D, E, and F, i.e., displaying A, and all of its descendant. And display means display the comments into the output file.

## Output File Format

All expected output files are provided. Among all the five operations mentioned above, only the *display a comment* operation would trigger a write to the output file.

When displaying the comments, we need to consider the displaying order of the comments. The rules are:

1. existing comments: comments which are included in the json file are existing comments. And when displaying existing comments, a parent comment should be displayed (i.e., printed to the output file) before its children comments are displayed (i.e., printed to the output file). Two children comments who have the same parent should stay in the order as they are in the json file. For example, both A and B are existing commens, if comment A appears in line 1 of the json file, and comment B appears in line 4 of the json file, then comment A should be displayed (i.e., printed to the output file) before comment B is displayed (i.e., printed to the output file).
2. newly added comments: for newly added comments, a parent comment should be displayed (i.e., printed to the output file) before its children comments are displayed (i.e., printed to the output file). Two children comments who have the same parent should stay in the same order as they are in the input2.txt file.

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
