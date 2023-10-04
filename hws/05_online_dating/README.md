# Homework 5 — Design and Implementation of a Simple Tinder

In this assignment you will develop a simple online dating application called New York Date. Your program will mimic some of the features provided by Tinder. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Get familiar with a commonly used data structure - linked lists.
- Practice creating and manipulating linked lists without using the std::list library.
- Practice overloading the output operator (&lt;&lt;).

## Background

Tinder allows users to view other users' profiles, and users can filter whom they want to view, based on age, gender, and distance.

As users browse another user's profile, users can swipe right or swipe left. Swiping right means like or accept someone, whereas swiping left means reject someone. When two users both express interest by swiping right, the app establishes a match between them, allowing them to initiate conversations and interact further. After the match is established, users have the option to unmatch their match if they are no longer interested or for other reasons.

## Input File

The input file [users_medium1.txt](users_medium1.txt) and [users_medium2.txt](users_medium2.txt) have a format like this:

```console
Lisa 25 Female 318-125-5013 Undisclosed Undisclosed 41.5833 -83.9274 false 37 45 135 Both 663-979-6253_953-451-3708_410-750-5502_750-260-3152_688-574-6330_915-954-4073
Daniel 27 Male 210-612-4370 Athlete University_of_Pennsylvania 39.0742 -75.9063 true 25 37 85 Both 599-599-3894_841-884-8891_787-782-2239
Brandon 29 Male 580-492-5098 Anesthesiologist University_of_Georgia 42.7252 -72.7156 true 24 43 110 Both 708-384-3942_880-576-5917_973-349-7421_285-513-6312_458-254-2452_414-579-4416_214-444-5696_449-154-3706_524-919-2860_845-641-3730_321-571-9270_673-789-1929
Edward 32 Male 778-799-8211 Firefighter University_of_California_Western_Islands 38.9078 -70.4912 false 52 52 135 Both null
Pedro 27 Male 639-312-6466 Undisclosed University_of_California_Desert 40.306 -84.6312 true 51 54 160 Female 542-656-3532_431-468-1840
Rebecca 30 Female 878-162-8033 Electrician University_of_Kansas 39.6714 -80.2924 false 55 57 115 Female 551-750-9367
Isla 33 Female 884-822-9387 Dental_Hygienist Undisclosed 41.2521 -74.7712 false 46 50 125 Male 432-972-8593
Brandon 56 Male 357-422-7135 Undisclosed University_of_Chicago 43.5828 -75.3686 false 43 55 110 Male 432-972-8593_986-939-5870_732-887-1203_487-545-4465_488-106-7341
Isaac 36 Male 446-205-6456 Chemist University_of_Colorado_Boulder 42.8806 -81.55 true 42 56 60 Both 558-674-9564_517-754-5977
Timothy 46 Male 600-635-3948 Biomedical_Engineer Undisclosed 38.154 -71.3301 true 32 50 50 Male null
```

The above is the first 10 lines of the [users_medium1.txt](users_medium1.txt) file. It has 14 fields, separated by a space. And these 14 fields are:

- User's name
- User's age
- User's gender
- User's phone number
- User's profession: A user can choose not to disclose their profession, and if so, this field will be *Undisclosed*.
- User's school: A user can choose not to disclose his/her school, and if so, this field will be *Undisclosed*.
- User's current latitude
- User's current longitude
- Is Premium User or not: this field will be either *true* or *false*.
- User's preference on age: minimum age
- User's preference on age: maximum age
- User's preference on max distance (in miles). **Note**: this is an integer number.
- User's preference on interested gender: this field can be one of these three: *Male*, *Female*, *Both*.
- Users whom this user liked (i.e., users whom this user has swiped right on): here users are represented by phone numbers. If this user does not like anyone, then this field will be displayed as *null*. If this user liked multiple users, the phone numbers of these users will be displayed in this field, and these phone numbers are separated by an underscore.

In case you are not familiar with these dating apps or have not used Tinder, two randomly selected Tinder pictures (downloaded from the Internet, sorry Samantha! Hope you have found your true love!) are given below.

![alt text](profile.png "profile")

![alt text](preference.png "preference")

These two images will give you a better understanding on some of the above fields.

## Specification

Your program will support four commands.

1. show profiles match with a user's preference.
2. show all matches to a user.
3. show all users who swiped right on this user - this feature is only available to premium users.
4. unmatch someone.
<!--5. delete account.-->

More details about each of these four commands are given below. For all four commands, *users.txt* represents the input file, and *output.txt* represents the output file, please do not hardcode the file names into your program, as the actual input/output file may have a different name. You should just use the *argv[]* array to retrieve the name of the input and the output file.

### Show Profiles

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe users.txt output.txt phoneNumber profile
```

your program should show all profiles which match with this user's preference on age, gender, and distance. All these profiles should be printed into the output file. See [profile.txt](profile.txt) for the format of this file. In the case where there are no users match with this user's preference, your program should just print this one message to the output file:

```console
There are no users matching with your preference at this moment.
```


### Show Matches

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe users.txt output.txt phoneNumber match
```

your program should show profiles of all users who match with this user. All these profiles should be printed into the output file. The definition of match is when two users both express interest by swiping right on each other.

See [match.txt](match.txt) for the format of the output file. In the case where this user has no matches at all, you should just print this one message to the output file:

```console
You do not have any matches at this moment.
```

### Show All Users Who Swiped Right on This User

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe users.txt output.txt phoneNumber like
```

your program should show profiles of all users who liked this user. All these profiles should be printed into the output file. The definition of like is when a user swipes right on another user. Just like on Tinder, this feature is only available to premium users who pays a monthly subscription fee. Thus, if this user is not a premium user, your program should just print this message to the output file:

```console
Only premium users can view who liked you.
```

When the user is indeed a premium user, see [like.txt](like.txt) for the format of the output file. In the case where this user has not received any likes at all, which is really sad, your program should just print this one message to the output file:

```console
You have not received any likes so far.
```

### Unmatch Someone

According to [Tinder's guide](https://www.help.tinder.com/hc/en-us/articles/115003360106-Unmatching-and-reporting):"When you unmatch someone, they'll disappear from your match list and you'll disappear from theirs."

When the user (here, *phoneNumber* is this user's phone number and *phoneNumberOther* represents the other user whom this user wants to unmatch with) runs this command:

```console
nydate.exe users.txt output.txt phoneNumber unmatch phoneNumberOther
```

your program should first show profiles of all users who match with this user; and then show profiles of all users who match with this other user. All these profiles should be printed into the output file. Clearly, these two users should not be considered as a match anymore.

See [unmatch.txt](unmatch.txt) for the format of the output file.

<!--### Delete Account

Users can delete their accounts.

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe input.txt output.txt phoneNumber delete
```
-->

## Program Requirements & Submission Details
In this assignment, you are required to create linked lists, **but you are not allowed to use the std::list library. In addition, you are NOT allowed to use std::vector, or any data structures we have not learned so far.**

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file.

**Due Date**: 10/12/2023, Thursday, 23:59pm.
