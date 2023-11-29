# Homework 10 — Instagram Notifications

In this assignment you will develop a program to deliver notifications to users like Instagram does, let's call this program New York Notifications. Please read the entire handout before starting to code the assignment. As the main learning objective of this assignment is to practice using the C++ inheritance, in this assignment, we explicitly require you to define a class called Notification, and use this class as the base class to derive classes for various types of notifications.

## Learning Objectives

- Practice using C++ inheritance.
- Practice using C++ exceptions.

## Background

### Instagram Notifications

Instagram sends notifications to users in different situations, such as:
1. when someone follows you.
2. when someone likes or comments on one of your posts.
3. when someone mentions you in a comment.
4. when someone sends you a message.

And there are many more. In this assignment, your program will support five types of notifications: like, follow, comment, tag, and message request.

On Instagram, on the "Settings and privacy" page, users can choose to turn on or turn off each of these notifications, as shown in the following five screenshots:

To turn on or off like notifications:
![alt text](images/instagram_likes.png "Instagram Likes")

To turn on or off follow notifications:
![alt text](images/instagram_follows.png "Instagram Follows")

To turn on or off comment notifications:
![alt text](images/instagram_comments.png "Instagram Comments")

To turn on or off tag notifications:
![alt text](images/instagram_tags.jpg "Instagram Tags")

To turn on or off message request notifications:
![alt text](images/instagram_message_requests.png "Instagram Message Requests")

Users can also decide to pause all notifications:
![alt text](images/instagram_pause_all.png "Instagram Pause All")

## Supported Commands

Your program will be run like this:

```console
nynotifications.exe posts.json users.json events.txt output.txt username
```

Here:

- *nynotifications.exe* is the executable file name.
- posts.json contains data collected from Instagram. Each line in this json file represents one post on Instagram.
- users.json contains data collected from Instagram as well as simulated data for users' notification preferences. Each line in this json file represents one user on Instagram.
- events.txt defines all events which might trigger a notification. In this README we will refer to this file as the **events file**. Note that we have multiple events files, representing different test cases. These events files include events_tiny.txt, events_small.txt, events_medium.txt, events_large.txt, and events_huge.txt.
- output.txt is where to print your output to, and each line in this output file should represent one notification. In this README we will refer to this file as **the output file**.
- this argument would be a username. For each run of your program, **the output file** should contain notifications which are only supposed to be delivered to this user as specified by this **username**.

To summarize what your program does: your program reads data from the two json files, and parse events from the events file. Based on the events and users' notification preferences, your program display notifications for this user (as specified in the **username** command line argument) in the output file.

## Format of posts.json

posts.json stores posts we collected from Instagram. Each line of this json file represents one post, and each line has the same format. And below is an example, which describes a post by Taylor Swift.

```console
{"id":"3166098261500503829","type":"Image","caption":"Surprise!! 1989 (Taylor\u2019s Version) is on its way to you \ud83d\udd1c! The 1989 album changed my life in countless ways, and it fills me with such excitement to announce that my version of it will be out October 27th. To be perfectly honest, this is my most FAVORITE re-record I\u2019ve ever done because the 5 From The Vault tracks are so insane. I can\u2019t believe they were ever left behind. But not for long! Pre order 1989 (Taylor\u2019s Version) on my site \ud83e\ude75\ud83d\ude0e\ud83e\ude75\n\n\ud83d\udcf7: @bethgarrabrant","hashtags":[],"mentions":["bethgarrabrant"],"url":"https://www.instagram.com/p/CvwPZgYuCcV/","commentsCount":0,"displayUrl":"https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/366422100_147674528370406_9143482148277133418_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=1&_nc_ohc=rBcVFTxJPEYAX9clyr2&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=MzE2NjA5ODI2MTUwMDUwMzgyOQ%3D%3D.2-ccb7-5&oh=00_AfBuyZsouLs0N90G6dXlfhiUTKIFL3sJP3YUWQnqtBFXnQ&oe=656720E4&_nc_sid=8b3546","images":[],"likesCount":12532920,"timestamp":"2023-08-10T06:19:06.000Z","ownerUsername":"taylorswift","ownerId":"11830955","taggedUsers":[{"full_name":"Beth Garrabrant","id":"34234869","is_verified":false,"profile_pic_url":"https://scontent-ord5-2.cdninstagram.com/v/t51.2885-19/365905608_305188601913736_4756066331028114622_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_ohc=osCkZA1f-NYAX9uyTTV&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAmj-OGhpkJTUNN-jo_k-GOUu1PphuKjvAQJjtGPpAbcw&oe=65673C00&_nc_sid=8b3546","username":"bethgarrabrant"}]}
```

The line is enclosed with a pair of curly braces. And every line has these same fields:

- *id*: Instagram assigns each post an id.
- type: Instagram supports different types of posts. The two most common ones are "Image" type and "Video" type. This above post is an Image post. 
- caption: each post has its text content and its image/video content. The text content is known as *caption* and is stored here.
- *hashtags*: if hashtags are used in the caption, Instagram would store them here.
- *mentions*: if the post text content mentions some other users, the username of these users will be stored here. In this above example, Taylor Swift mentioned @bethgarrabrant, to thank her for shooting the photo.
- *url*: the URL of this post. You can open this url [https://www.instagram.com/p/CvwPZgYuCcV/](https://www.instagram.com/p/CvwPZgYuCcV/) in your browser so you will see which post we are talking about right now.
- *commentsCount*: how many comments users have made as a reaction to this video. Taylor Swift doesn't allow users to comment on this post, thus its commentCount for this specific post is 0.
- *displayUrl*: this URL takes you to the cover image of this post.
- *images*: some posts have multiple images, information about these images will be stored here.
- *likesCount*: how many times this post has been liked.
- *timestamp*: when this post was created.
- *ownerUsername*: the username of the owner who owns/created this post.
- *ownerId*: Instagram assigns each user an id.
- *taggedUsers*: whom the author of this post has tagged in the images of this post. This could include multiple items - if multiple users are tagged.

Each field is a key-value pair. As mentioned above, there are four fields which could include multiple items, and these four fields are: *authorMeta*, *musicMeta*, *videoMeta*, *mentions*. We will describe each of these four fields next.

## Format of users.json

users.json stores users we collected from Instagram, we also added some random data here to represent each user's notification preferences. Each line of this json file represents one user, and each line has the same format. And below is an example, which describes the user Taylor Swift.

```console
{"id": "11830955", "username": "taylorswift", "url": "https://www.instagram.com/taylorswift", "fullName": "Taylor Swift", "biography": "I’m the problem, it’s me", "notifications": [{"pauseAll": "false", "likes": "true", "tags": "true", "comments": "true", "newFollowers": "true", "messageRequests": "true"}]}
```

The line is enclosed with a pair of curly braces. And every line has these same fields:

- *id*: Instagram assign each user an id.
- *username*: when registering on Instagram, users can choose a username - if it's still available.
- *url*: this URL takes you to the user's profile page.
- *fullName*: the full name of this user.
- *biography*: users can briefly describe themselves here.
- *notifications*: this is the data we added. Since notification preferences are private data, we are not able to collect them from Instagram, thus we just randomly assign a *true* or *false* value to each of the five notification types we use in this assignment, and we also randomly set this *pauseAll* attributes to either *true* or *false*. When this *pauseAll* attribute is set to *true*, no notifications should be delivered to this user.

### Format of events.txt

events.txt contains events which may occur on Instagram, each line of this file describes one event, and each line has 3 columns, separated by a space. The first column is always a username, and the third column is always either a username, or a post id. The second column of each line defines what event it is. The events we use in our data set include:

1. likes

When the second column of a line is the string *likes*, it means that this line describes the event of *someone likes a post*. Here is an example:

```console
jasonevans likes 3241797774743415032
```

Here: jasonevans is a username. This user like the post which has an id of 3241797774743415032.

2. follows

When the second column of a line is the string *follows*, it means that this line describes the event of *someone follows another user*. Here is an example:

```console
carter_singh follows jaytatum0
```

Here: carter_singh is a username. This user starts following jaytatum0, which is the username of Boston Celtics' player Jayson Tatum.

3. tags

When the second column of a line is the string *tags*, it means that this line describes the event of *someone tags another user in a photo*. Here is an example:

```console
lilynguyen tags nicolekidman
```

Here: lilynguyen is a username. This user tags Nicole Kidman, whose username is nicolekidman, in a photo. (In which photo? That is not relevant to this assignment.)

4. comments_on

When the second column of a line is the string *comments_on*, it means that this line describes the event of *someone makes a comment on a post*. Here is an example:

```console
alexjones comments_on 3241978951060130582
```

Here: alexjones is a username. This user makes a comment on the post which has an id of 3241978951060130582.

5. messageRequests

When the second column of a line is the string *messageRequests*, it means that this line describes the event of *someone attempts to message someone else*. On Instagram, you can not message another user if the other user does not follow you. And if you do want to message another user who is not following you, you need to make this message request, and if the other user approves the request, then you will be able to send messages to the other user. Here is an example:

```console
brandon_wilson messageRequests jenniferaniston
```

Here: brandon_wilson is a username. This user attempts to send a message to Jennifer Aniston, whose username is jenniferaniston.

## Output File Format

All expected output files are provided.

When users run this command:

```console
nynotifications.exe posts.json users.json events_medium.txt output.txt taylorswift
```

your program should produce an output which contains notifications which should be delivered to taylorswift.

The format of these notification messages should be similar to (but not identical to) what Instagram does:

For like notifications:

![alt text](images/like_notifications.png "Someone liked your post")

For follow notifications:

![alt text](images/follow_notifications.png "Someone started following you")

**Note**: our follow notification messages will use the user's username, rather than the full name (first name, last name) format as Instagram does.

For tag notifications:

![alt text](images/tag_notifications.png "Someone tagged you in a post")

For comment notifications:

![alt text](images/comment_notifications.png "Someone commented on your post")

**Note**: our comment notification messages do not include the actual comments. Plus, our messages will use the user's username, rather than the full name (first name, last name) format as Instagram does.

For messageRequest notifications:

![alt text](images/messageRequest_notifications.png "Someone wants to send you a message")

## Useful Code

### getline

**Note**: this next paragraph is the same as that paragraph in homework 8, and you are once again recommended to read the whole file into a large string; but if you want to beat Jidong on the leaderboard, whether or not this is the most efficient way to read the file is a question for you to think about.

Unlike previous assignments where the input files only contain fields separated by spaces, in this assignment, fields are not separated by spaces, and therefore you may need a different way to read the input files. And the function *getline* will now come into play. To read the json file and store the whole json file into a std::string, you can use the following lines of code:

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

After these lines, the whole content of the json file will be stored as a string in the std::string variable *json_content*. And you can then parse it to get each individual post. In order to parse the *json_content*, which is a std::string, you will once again find that the std::string functions such as *std::string::find*(), and *std::string::substr*() to be very useful.

### Extract Hashtags from the Post Text

Assume you store the post text content in a std::string variable called *text*, the following code block will extract all hashtags from this text string.

```cpp
// the text of the post is given as a std::string, extract hashtags from the text.

    // define a regular expression to match hashtags
    std::regex hashtagRegex("#([\\w\\u0080-\\uFFFF]+)");

    // create an iterator for matching
    std::sregex_iterator hashtagIterator(text.begin(), text.end(), hashtagRegex);
    std::sregex_iterator endIterator;

    // iterate over the matches and extract the hashtags
    while (hashtagIterator != endIterator) {
        std::smatch match = *hashtagIterator;
        std::string hashtag = match.str(1);  // extract the first capturing group
	// this line will print each hash tag
	// if you want to do more with each hash tag, do it here. for example, store all hash tags in your container.
        std::cout << "Hashtag: " << hashtag << std::endl;

        ++hashtagIterator;
    }
}
```

In order to use this above code block, you need to include the regular expression library like this:

```cpp
#include <regex>
```

## Program Requirements & Submission Details

<!--In this assignment, you are required to use std::priority_queue. You can also use any other data structures we have already learned, such as std::string, std::vector, std::list, std::map, std::set, std::pair, std::unordered_map, std::unordered_set, std::stack, std::queue. It is okay if you decide not to use std::unordered_map or std::unordered_set, although they fit very well with this assignment.

**You must use try/throw/catch to handle exceptions in your code**. You do not need to do so everywhere in your code. You will only lose points if you do not use it at all.

Use good coding style when you design and implement your program. Organize your program into functions: don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your README.txt file.
-->
**Due Date**: 12/07/2023, Thursday, 23:59pm.

<!--## Instructor's Code

You can test (but not view) the instructor's code here: [instructor code](http://cs.rpi.edu/~xiaoj8/ds/trends/).
-->

## Rubric

To be added.

<!--17 pts
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
   - Uses global variables. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (6 pts)
   - Member variables are public. (-2)
 - Exceptions (2 pts)
   - Does not use try/throw/catch anywhere in the code. (-2)
-->
