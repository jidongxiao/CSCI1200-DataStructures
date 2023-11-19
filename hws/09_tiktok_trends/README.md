This README is still not complete.

# Homework 9 — TikTok Trends

In this assignment you will develop a program to display the trends page like TikTok does, let's call this program New York Trends. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice using std::priority_queue.
- Practice using std::unordered_map, std::unordered_set.
- Practice using C++ exceptions.

## Background

### TikTok Discover

According to [TikTok support](https://support.tiktok.com/en/using-tiktok/exploring-videos/discover-and-search): Discover is a page on TikTok that allows you to search and explore the wide variety of content in the TikTok community. In this feed you'll find trending videos, hashtags, creators, and sponsored content.

To access the Discover page via the mobile app, users just tap Discover, located at the bottom of phone screen.

To access the Discover page via your web browser, just go to [https://www.tiktok.com/discover](https://www.tiktok.com/discover).

![alt text](images/tiktok_discover.png "tiktok discover")

As can be seen from the above screenshot (taken on November 19th, 2023), on the Discover page, two lists of videos are displayed: trending hashtags (on the left) and trending sounds (on the right). And displaying these two lists of videos is the main task of this assignment.

## Special Requirements

To be added.

<!--As we are learning C++ exceptions, the input files in this assignment are made to include issues and you should not assume the format are completely correct. Rather, when your program find something abnormal in the input file, your program should print an error message into the output file:

```console
Exception Caught: The Field of xxx is Incorrect.
```

And in cases like this, exit your program, do not print anything else into the output file except the above message.-->

## Supported Commands

Your program will be run like this:

```console
nytrends.exe input.json output.txt hashtag
nytrends.exe input.json output.txt sound
```

Here:

- *nytrends.exe* is the executable file name.
- input.json contains data collected from TikTok. In this README we will refer to this file as **the json file**.
- output.txt is where to print your output to. In this README we will refer to this file as **the output file**.
- this field will be either hashtag or sound. When this field is *hashtag*, your program should display the top 10 trending hashtags to the output file. When this field is *sound*, your program should display the top 10 trending sounds to the output file.

To summerize what your program does: your program reads data from **the json file**, analyze the data and find out the top 10 trending hashtags, or the top 10 trending sounds, and display them in the output file.

## Format of input1.json

input1.json represents the json file. It stores posts we collected from TikTok. Each line of the json file represents one post, and each line **is supposed to** have the same format. And below is an example, which describes a post by Taylor Swift. (You can view her post [here](https://www.tiktok.com/@taylorswift/video/7216853341702278446).)

```console
{"id": "7301080543981096234", "text": "Never beating the sorcery allegations ✨🛬✨", "createTime": 1699915303, "createTimeISO": "2023-11-13T22:41:43.000Z", "locationCreated": "US", "authorMeta": {"id": "6881290705605477381", "name": "taylorswift", "nickName": "Taylor Swift", "verified": true, "signature": "This is pretty much just a cat account", "bioLink": "taylorswift.com", "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_720x720.jpeg?x-expires=1700456400&x-signature=jkLwlnqFUpLwoYe6TvlGXZs%2FhP8%3D", "privateAccount": false, "region": "US", "following": 0, "fans": 22900000, "heart": 200400000, "video": 61, "digg": 2161}, "musicMeta": {"musicName": "original sound", "musicAuthor": "Taylor Swift", "musicOriginal": false, "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-v-27dcd7-tx/o8fSJqV9lISAU8D0pBUFsRYEMSDGWxCKpgfSii/?a=1988&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&bti=ODszNWYuMDE6&ft=tlc-I-Inz7TfiVYZiyq8Z&mime_type=audio_mpeg&qs=6&rc=OTM0NTc4N2Y8NTxmZWZoOkBpank3bnQ5cmRkbzMzZzU8NEAzMzEzNl82XzExYTQxNTU0YSNeXjYyMmRjYDZgLS1kMS9zcw%3D%3D&btag=e00008000&expire=1700307894&l=202311180544290984F2C815B65729734D&ply_type=3&policy=3&signature=86fdf07638903cf00e885b900b5fe456&tk=0", "coverMediumUrl": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_720x720.jpeg?x-expires=1700456400&x-signature=jkLwlnqFUpLwoYe6TvlGXZs%2FhP8%3D", "musicId": "7301080633693735726"}, "webVideoUrl": "https://www.tiktok.com/@taylorswift/video/7301080543981096234", "videoMeta": {"height": 576, "width": 1024, "duration": 24, "coverUrl": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/06fe558eb09e460b8dd87c852dab1d64_1699915304?x-expires=1700456400&x-signature=e%2BxReps37YechC%2FN3YDMa5MW4Bs%3D", "definition": "540p", "format": "mp4", "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o4ISEQDQRpSUArDlMF5QfSPe8WrE0EDgSwqjBk/?a=1988&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C3&cv=1&br=2176&bt=1088&bti=ODszNWYuMDE6&cs=0&ds=3&ft=_rKBMBnZq8Zmoc_CKQ_vjFy.VAhLrus&mime_type=video_mp4&qs=0&rc=OTM6Z2k8NDZpO2hlNWg6OUBpM2xlOm85cmdkbzMzZzczNEBeYDQwMi5fNV8xNDU0NDMuYSNyLWZnMmQ0XzZgLS1kMS9zcw%3D%3D&btag=e00008000&expire=1700307894&l=202311180544290984F2C815B65729734D&ply_type=2&policy=2&signature=13889ecbdab6dd7518b441cb427600c9&tk=tt_chain_token"}, "diggCount": 2400000, "shareCount": 19900, "playCount": 9700000, "commentCount": 22900, "mentions": [], "hashtags": []}
```

The line is enclosed with a pair of curly braces. And every line **is supposed to** have these same fields:

- *id*: TikTok assigns each post an id.
- text: each post has its text content and its video/audio content. The text content is stored here. Keep in mind that on TikTok, a post can't just include text information, it must contain a video. Therefore, in the remainder of this section, when we say **the video** or **this video**, we mean the video which comes with this post.
- *createTime*: a timestamp indicating when this post was created. This is the timestamp in Unix epoch format. It represents the number of seconds that have passed since January 1, 1970 (the Unix epoch) until the specified date and time.
- *createTimeISO*: still a timestamp indicating when this post was created. This is the same timestamp but presented in the ISO 8601 date and time format, which is more human friendly. Here, *"T"* is a separator indicating the beginning of the time portion; and *"Z"* indicates that the time is in Coordinated Universal Time (UTC).
- *locationCreated*: where this post was created.
- *authorMeta*: the author's information, which includes multiple items.
- *musicMeta*:  information of the music used in the video. This also includes multiple items.
- *webVideoUrl*: the URL of this post.
- *videoMeta*: information of the video. This also includes multiple items.
- *diggCount*: how many likes this video gets.
- *shareCount*: how many times this video has been shared.
- *playCount*: how many times this video has been viewed.
- *commentCount*: how many comments users have made as a reaction to this video.
- *mentions*: whom the author of this post has mentioned in the post. This could include multiple items - if multiple users are mentioned.
- *hashtags*: the hashtags used in the text content of the post are also stored here separately. This could include multiple items - if multiple hashtags are used.

Each field is a key-value pair. As mentioned above, there are five fields which could include multiple items, and these five fields are: *authorMeta*, *musicMeta*, *videoMeta*, *mentions*, *hashtags*. We will describe each of these five fields next.

### Author Meta

The word *meta* means meta data. Let's extract the *authorMeta* field from this same Taylor Swift post and take a closer look.

```console
"authorMeta": {"id": "6881290705605477381", "name": "taylorswift", "nickName": "Taylor Swift", "verified": true, "signature": "This is pretty much just a cat account", "bioLink": "taylorswift.com", "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_720x720.jpeg?x-expires=1700456400&x-signature=jkLwlnqFUpLwoYe6TvlGXZs%2FhP8%3D", "privateAccount": false, "region": "US", "following": 0, "fans": 22900000, "heart": 200400000, "video": 61, "digg": 2161},
```

TikTok uses the following sub-fields to describe each author (i.e., user):

- *id*: TikTok assigns each author an id.
- *name*: the user name. Not necessarily the real name; but of course celebrities would use their real name for their official account.
- *nickName*: each user can also have nick name.
- *verified*: official accounts are usually verified.
- *signature*: users can put a few words introducin this account.
- *bioLink*: users can put a link in their bio section.
- *avatar*: link to the account's profile picture.
- *privateAccount*: is this a private account? Private accounts are only visible to users who have the permission from the account owner.
- *region*: where this user is located.
- *following*: how many accounts this user is following. Taylor Swift does not follow anyone. Hence her *following* is 0.
- *fans*: how many followers this account has.
- *heart*: how many likes (in total) this account received.
- *video*: how many videos this account has posted.
- *digg*: how many likes this user has pressed.

### Music Meta

```console
"musicMeta": {"musicName": "original sound", "musicAuthor": "Taylor Swift", "musicOriginal": false, "playUrl": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-v-27dcd7-tx/o8fSJqV9lISAU8D0pBUFsRYEMSDGWxCKpgfSii/?a=1988&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&bti=ODszNWYuMDE6&ft=tlc-I-Inz7TfiVYZiyq8Z&mime_type=audio_mpeg&qs=6&rc=OTM0NTc4N2Y8NTxmZWZoOkBpank3bnQ5cmRkbzMzZzU8NEAzMzEzNl82XzExYTQxNTU0YSNeXjYyMmRjYDZgLS1kMS9zcw%3D%3D&btag=e00008000&expire=1700307894&l=202311180544290984F2C815B65729734D&ply_type=3&policy=3&signature=86fdf07638903cf00e885b900b5fe456&tk=0", "coverMediumUrl": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13f2a0d585f3cd8578da0d18c36a18c4~c5_720x720.jpeg?x-expires=1700456400&x-signature=jkLwlnqFUpLwoYe6TvlGXZs%2FhP8%3D", "musicId": "7301080633693735726"},
```

### Video Meta

```console
"videoMeta": {"height": 576, "width": 1024, "duration": 24, "coverUrl": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/06fe558eb09e460b8dd87c852dab1d64_1699915304?x-expires=1700456400&x-signature=e%2BxReps37YechC%2FN3YDMa5MW4Bs%3D", "definition": "540p", "format": "mp4", "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/useast5/tos-useast5-pve-0068-tx/o4ISEQDQRpSUArDlMF5QfSPe8WrE0EDgSwqjBk/?a=1988&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C3&cv=1&br=2176&bt=1088&bti=ODszNWYuMDE6&cs=0&ds=3&ft=_rKBMBnZq8Zmoc_CKQ_vjFy.VAhLrus&mime_type=video_mp4&qs=0&rc=OTM6Z2k8NDZpO2hlNWg6OUBpM2xlOm85cmdkbzMzZzczNEBeYDQwMi5fNV8xNDU0NDMuYSNyLWZnMmQ0XzZgLS1kMS9zcw%3D%3D&btag=e00008000&expire=1700307894&l=202311180544290984F2C815B65729734D&ply_type=2&policy=2&signature=13889ecbdab6dd7518b441cb427600c9&tk=tt_chain_token"},
```

## Output File Format

All expected output files are provided. Among all the five operations mentioned above, only the *display a comment* operation would trigger a write to the output file.

When displaying the comments, we need to consider the displaying order of the comments. The rules are:

1. existing comments: comments which are included in **the json file** are existing comments. And when displaying existing comments, a parent comment should be displayed (i.e., printed to the output file) before its children comments are displayed (i.e., printed to the output file). Two children comments which have the same parent should stay in the order as they are in **the json file**. For example, both A and B are existing commens, if comment A appears in line 1 of **the json file**, and comment B appears in line 4 of **the json file**, then comment A should be displayed (i.e., printed to the output file) before comment B is displayed (i.e., printed to the output file). Also, two comments which are both responses to the original video, should stay in the same order as they appear in **the json file**.
2. newly added comments: for newly added comments, a parent comment should be displayed (i.e., printed to the output file) before its children comments are displayed (i.e., printed to the output file). Two children comments who have the same parent should stay in the same order as they are in **the second input file**.
3. if a newly added comment is a reply to an existing comment, then it should be displayed right below that existing comment.
4. if a newly added comment is a response to the original video, then this newly added comment should be displayed at the very bottom; in other words, it should be displayed after all existing comments are displayed.
5. if two newly added comments, let's say A and B, both are responses to the original video, then both A and B should be displayed at the very bottom; but the order between A and B themselves, should stay the same as they appear in **the second input file**.

To summarize the rules, in this homework, no sorting is needed, but you need to make sure that a newly added comment should always be below its all existing siblings.

## Useful Code

### getline

1. Unlike previous assignments where the input files only contain fields separated by spaces, in this assignment, fields are not separated by spaces, and therefore you may need a different way to read the input files. And the function *getline* will now come into play. To read the json file and store the whole json file into a std::string, you can use the following lines of code:

```cpp
	// assume inputFile is a std::string, containing the file name of the input file.
        std::ifstream jsonFile(inputFile);
        if (!jsonFile.is_open()) {
                std::cerr << "Failed to open the JSON file." << std::endl;
                exit(1);
        }

        std::string json_content;
        std::string line;
        while (std::getline(jsonFile, line)) {
                json_content += line;
        }
        // don't need this json file anymore, as the content is read into json_content.
        jsonFile.close();
```

After these lines, the whole content of the json file will be stored as a string in the std::string variable *json_content*. And you can then parse it to get each individual comment. In order to parse the *json_content*, which is a std::string, you will once again find that the std::string functions such as *std::string::find*(), and *std::string::substr*() to be very useful.

2. **The second input file** contains comments, which may have spaces, and that makes it hard for you to use the >> operator to read the content of the file. Once again, the *getline* function can come into play. Let's say you want to read a line like this:

```console
reply_to_comment UgxCAk2MEXaUMS8E5dx4AaABAg UgxCAk2MEXaUMS8E5dx4AaABAg.0 @user3 "I love this song!"
```

You can use the following lines of code:

```cpp
	// assuming opsFile is an std::ifstream object, which you use to open the second input file.
	// assuming command, parent_id, id, author, comment are all std::string objects.
	// read the command, the parent comment id, the child comment id, the user name.
	opsFile >> command;
	opsFile >> parent_id;
	opsFile >> id;
	opsFile >> user;
	// skip any whitespace to get to the next non-whitespace character
	opsFile >> std::ws;
	// now, read the comment
	if (opsFile.peek() == '"') {
		// if the field starts with a double quote, read it as a whole string
		opsFile.get();  // consume the opening double quote
		std::getline(opsFile, comment, '"');  // read until the closing double quote
		// opsFile >> comment;  // read the quoted field
		if (!comment.empty() && comment.back() == '"') {
			comment.pop_back();  // remove the closing double quote
		}
	}
```

After executing the above lines, your *command* will be "reply_to_comment", your *parent_id* will be "UgxCAk2MEXaUMS8E5dx4AaABAg", your *id* will be "UgxCAk2MEXaUMS8E5dx4AaABAg.0", your *user* will be "@user3", your *comment* will be "I love this song!".

## Program Requirements & Submission Details

In this assignment, you are required to use std::priority_queue. You can also use any other data structures we have already learned, such as std::string, std::vector, std::list, std::map, std::set, std::pair, std::unordered_map, std::unordered_set, std::stack, std::queue.

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.

**Due Date**: 11/30/2023, Thursday, 23:59pm.

## Instructor's Code

<!--You can test (but not view) the instructor's code here: [instructor code](http://cs.rpi.edu/~xiaoj8/ds/comments/). -->

## Rubric

To be added.

<!--
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
-->
