# Homework 5 — Design and Implementation of a Simple Tinder

In this assignment you will develop a simple online dating application which mimics some of the features provided by Tinder. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Get familiar with a commonly used data structure - linked lists.
- Practice creating and manipulating linked lists without using the std::list library.

## Background

Tinder allows users to view other users' profiles, and users can swipe right or swipe left. Swipe right means like or accept someone, whereas swipe left means reject them. When two users both express interest by swiping right, the app establishes a match between them, allowing them to initiate conversations and interact further.

In addition, users will only see nearby users, and they can filter whom they want to see, based on age, height, and distance.

In this assignment you will be implementing these two features.

## Input File

The input file [users.txt](users.txt) has a format like this:

```console
Valentina 60 Female 400-404-7221 Historian University_of_California_Santa_Cruz 40.5605 -71.3767 true 64 70 20 Both null
Emma 33 Female 768-906-2374 Environmental_Lawyer Undisclosed 41.1516 -72.3557 true 55 56 200 Both 497-618-2463_490-951-6635_846-731-3677_410-789-7985_867-566-5583_307-413-2859_533-814-7851_254-263-3774_231-183-5784_697-329-9174_499-888-6951_683-920-9932_571-110-8223_229-528-6616_538-763-4821_837-714-1770_488-798-8805_707-275-5554_674-384-5525_414-795-1819_863-945-8380_670-361-6253_482-570-4529_225-346-2181_549-298-1822_291-587-6600_573-300-5580_658-390-5370_497-101-7210_896-357-6566_523-138-8228_993-183-9670_530-768-7718_526-617-9270_269-207-8287_603-321-5435_360-585-1792
Ying 49 Female 915-331-9244 Dental_Hygienist University_of_California_San_Francisco 41.3034 -82.9104 false 34 67 130 Male 958-816-3806_308-444-7702_308-541-7111_507-714-9305_385-270-1090_250-788-4291_677-308-6355_881-697-3822_905-898-3311_611-824-8864_501-410-2118_610-792-6064_596-153-6105_448-260-7015_238-741-8503_286-193-2527_282-248-8824_795-473-2539_648-490-2499_420-101-2920_968-934-9116_438-190-7769_742-997-6492_665-463-1835_796-466-7853_936-640-5013_834-215-8272_427-102-8071_904-238-8639_468-417-2351_906-323-7943_376-392-1048_886-668-1900_226-994-7506_353-314-8714_490-667-5163_904-520-6343_655-929-9908_453-793-9907_810-935-6637_973-561-9938_853-209-5188_758-974-6071_525-530-3280_914-397-5106_794-665-6490_319-267-2685_707-955-6522_879-321-7310_542-699-7018_390-327-1180_429-397-5047_302-504-2335_571-680-2678_238-606-6721_364-700-9236_397-602-7961_265-792-2797_270-215-3495_610-869-3662_630-852-3331_557-491-2662_693-105-1354_203-355-2685_451-769-3688_911-448-2088_215-948-3529_918-914-7595_848-800-6209_943-549-2858_934-522-8699_323-433-8723_721-300-4701_570-461-9529_406-833-3773_209-236-5065_578-378-4085_267-347-1617_971-341-5566_658-961-8402_471-649-6404_274-720-5634_463-829-3746_438-537-5326_476-564-8440_690-850-9629_648-277-2190_706-915-4858_208-986-5038_997-612-4451_297-112-7705_950-728-1218_638-652-4682_268-254-2285_477-526-1558_508-567-5195_792-728-5852_990-421-1071_240-579-1423_578-968-2451_556-303-7311_946-494-5912_740-479-4442_287-316-1874_740-252-5294_336-232-1361_405-721-8046_767-499-3573_779-226-9306_444-374-1591_838-990-7979_442-641-1294_506-321-8211_616-544-8480_427-766-5141_460-457-5236_269-992-7860_799-222-8037_352-351-2695_448-129-2874_840-645-3483_510-417-7474_322-621-9689_717-617-3016_574-316-1063_216-447-4000_845-251-9541_728-524-6049_641-298-2693_743-587-2860_266-893-6626_578-331-6389_867-298-5412_624-620-8608_509-901-6174_767-364-4936
Carlos 59 Male 599-886-3816 Firefighter University_of_South_Carolina 43.7929 -73.747 true 69 75 200 Female null
```

The above is the first 4 lines of the [users.txt](users.txt) file. It has 14 fields, separated by a space. And these 14 fields are:

- User's name
- User's age
- User's gender
- User's phone number
- User's profession
- User's school
- User's current latitude
- User's current longitude
- Is Premium User or not: this field will be either *true* or *false*.
- User's preference on age: minimum age
- User's preference on age: maximum age
- User's preference on max distance (in miles).
- User's preference on interested gender: this field can be one of these three: *Male*, *Female*, *Both*.
- Users whom this user liked (i.e., users whom this user has swiped right on): here users are represented by phone numbers. If this user does not like anyone, then this field will be displayed as *null*.

In case you are not familiar with these dating apps or have not used Tinder, two randomly selected Tinder pictures (downloaded from the Internet, sorry Samantha!) are given below.

![alt text](profile.png "profile")

![alt text](preference.png "preference")

These two images will give you a better understanding on some of the above fields.

## Specification

Your program will support four commands.

1. show profiles match with a user's preference.
2. show all matches to a user.
3. show all users who swiped right on this user - this feature is only available to premium users.

More details about each of these four commands are given below.

### Show Profiles

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe input.txt output.txt phoneNumber show
```

your program should show all profiles which match with this user's preference on age, gender, and distance. All these profiles should be printed into the output file.

### Show Matches

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe input.txt output.txt phoneNumber match
```

your program should show profiles of all users who match with this user. All these profiles should be printed into the output file. The definition of match is when two users both express interest by swiping right on each other.

### Show All Users Who Swiped Right on This User

When the user (here, *phoneNumber* is this user's phone number) runs this command:

```console
nydate.exe input.txt output.txt phoneNumber like
```

your program should show profiles of all users who likes this user. All these profiles should be printed into the output file. The definition of like is when a user swipes right on another user. Just like on Tinder, this feature is only available to premium users who pays a monthly membership fee. Thus, if this user is not a premium user, your program should just print this message to the output file:

```console
Only premium users can view who liked you.
```

## Program Requirements & Submission Details

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file.

**Due Date**: 10/12/2023, Thursday, 23:59pm.
