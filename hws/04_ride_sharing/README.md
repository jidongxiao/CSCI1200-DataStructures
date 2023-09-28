# Homework 4 — Designing a Simple Uber

In this assignment you will develop a simple ride sharing application called New York Ride. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Get familiar with a commonly used data structure - linked lists.
- Practice using std::list.
- Practice overloading operator<<, and understand why it is a bad idea to make it a member function.

## Specification

The New York Ride application should support 2 different roles: drivers, users (also known as riders). Users can perform two tasks:

- Request a ride
- Cancel a ride request 

Drivers can perform one task:

- Cancel a ride request

*Note*: A commercial ride sharing product like Uber or Lyft of course allows users and drivers to perform more tasks, but let's be honest, Uber/Lyft has thousands of software engineers, but you only have one person and only have one week to work on this assignment, so let's simplify the tasks.

## Input Files

Companies like Uber and Lyft maintains all drivers and uers information in their database, but database is way beyond the scope of this course, and therefore we will just store drivers information and users information in two simple text files, [drivers.txt](drivers.txt) and [users.txt](users.txt). Like previous assignments, in this assignment you will once again read these files as the input of your program, parse them so as to retrieve drivers and/or users information, and store them in your own data structures. In this assignment, you are not allowed to use *std::vector*, or any data structures we have not discussed in this class. Instead, you must use *std::list* to store drivers and users. You are recommended to use one *std::list* instance to store all drivers, use another *std::list* instance to store all users.

### Driver Information

The [drivers.txt](drivers.txt) has a format like this:

```console
Sandra Huang Female 25 853-977-5304 3.1 40.4269 -73.0753 Standard On_the_way_to_pickup Michael Richard 445-915-1645
Susan Li Female 51 997-217-1025 3.7 40.5863 -73.8684 Premium On_the_way_to_pickup Lucia Kenneth 829-477-7963
Mary Zhang Female 47 765-620-6297 4.5 40.6988 -73.3988 Economy On_the_way_to_pickup Amy Lee 545-639-2924
William David Male 37 324-571-7028 3.8 40.2445 -73.5073 Premium Available null null null
Christopher Javier Male 25 218-980-8846 4.5 40.5784 -73.5479 Economy During_the_trip Daniel Chen 820-327-7312
Dorothy Daniel Female 21 332-586-7858 4 40.6672 -73.2472 Premium During_the_trip Juan Carlos 204-752-4660
Mateo Andres Male 55 201-564-6348 3.8 40.8771 -73.6288 Standard During_the_trip Karen Michael 534-197-2988
Dorothy Liu Female 41 507-944-8147 4.5 40.4938 -73.9905 Economy On_the_way_to_pickup Amy Christopher 601-148-3144
Mateo Robert Male 49 592-397-3458 3.5 40.4106 -73.3736 Economy On_the_way_to_pickup William David 693-200-8952
Valentina Andres Female 40 299-602-1498 3.3 40.3159 -73.8891 Standard On_the_way_to_pickup Susan Edward 809-345-5043
```

The above is the first 10 lines of the [drivers.txt](drivers.txt) file. It has 13 fields, separated by a space. And these 13 fields are:

- Driver's first name
- Driver's last name
- Driver's gender
- Driver's age
- Driver's phone number
- Driver's rating
- Driver's current latitude
- Driver's current longitude
- Driver's vehicle type
- Driver's current state
- Rider's first name
- Rider's last name
- Rider's phone number

The last 3 fields will only be meaningful if a ride request is assigned to this driver. In this assignment, we assume that drivers will accept the request whenever it is assigned to this driver.

A driver can be in one of the following states:

- Available (waiting for a request)
- On the way to a pickup location (request accepted)
- During a trip

When the driver is in an Available state, it means this driver is not assigned a ride request, and therefore is not associated with any rider, and as such, the last 3 fields of this driver will just be 
```console
null null null
```

### Rider Information

The [users.txt](users.txt) has a format like this:

```console
Isabella Richard Female 39 301-144-6533 3.2 Top_of_the_Rock 40.7593 -73.979 Gowanus 40.6733 -73.99 Economy Ready_to_request null null null
Juan James Male 47 717-480-4710 3.2 Forest_Hills 40.7196 -73.8448 Park_Slope 40.6728 -73.9778 Standard Driver_on_the_way Melissa Kim 435-773-6289
Deborah Thomas Female 45 501-380-7736 5 Park_Slope 40.6728 -73.9778 Flatiron_Building 40.7411 -73.9897 Economy Driver_on_the_way Paul Daniel 815-649-6492
Sofia Steven Female 28 780-650-6240 3 Bay_Ridge 40.635 -74.019 High_Line_Park 40.748 -74.0048 Premium During_the_trip Thomas Edward 557-939-8060
Anthony Thomas Male 58 302-206-4102 4.3 Prospect_Heights 40.6775 -73.9692 East_River_Park 40.7135 -73.9756 Economy During_the_trip Juan Timothy 471-264-9092
Lucia Andres Female 59 256-799-3283 3.1 Grand_Central_Terminal 40.7527 -73.9772 Central_Park_Zoo 40.7678 -73.9718 Economy Driver_on_the_way Camila Mark 939-309-5453
Melissa Christopher Female 28 392-390-8218 4.6 The_High_Line 40.748 -74.0048 The_Vessel 40.7536 -74.0023 Standard Driver_on_the_way Brian Luis 845-708-1986
William Timothy Male 46 808-688-3264 3.7 Broadway_Theater_District 40.7589 -73.9851 Coney_Island 40.5749 -73.9859 Economy Driver_on_the_way Brenda Christopher 886-285-9845
Linda Chen Female 60 320-807-7264 4.6 Bushwick 40.6944 -73.9213 Columbia_University 40.8075 -73.9642 Premium Ready_to_request null null null
Brenda Thomas Female 45 470-325-3275 3.2 Bay_Ridge 40.635 -74.019 High_Line_Park 40.748 -74.0048 Premium Driver_on_the_way John Javier 446-656-6614
```

The above is the first 10 lines of the [users.txt](users.txt) file. It has 17 fields, separated by a space. And these 13 fields are:

- User's first name
- User's last name
- User's gender
- User's age
- User's phone number
- User's rating
- The name of the user's pickup location
- The latitude of the user's pickup location
- The longitude of the user's pickup location
- The name of the user's dropoff location
- The latitude of the user's dropoff location
- The longitude of the user's dropoff location
- User's vehicle type
- User's current state
- Driver's first name
- Driver's last name
- Driver's phone number

A rider can be in one of the following states:

- Ready to request
- Driver on the way (to pickup)
- During a trip

Ideally, there should be four states, and this other state would be: Ride requested but not yet accepted by any driver. However, as we mentioned, in this assignment, we assume that when a user issues a request, it will be accepted by a driver, and thus we can exclude this state from our consideration.

When the user is in Ready_to_request state, it means no driver is now assigned to this ride request, and therefore, the last 3 fields of this user will just be 

```console
null null null
```

## Commands to Support

<!--- Driver Removal
- Rides Monitoring-->
Your program only needs to support two commands:

### Ride Request

The first command allows the user can to send a ride request.

```console
nyride.exe drivers.txt users.txt output0.txt output1.txt output2.txt phoneNumber request
```

Here

- drivers.txt is the input file which contains all drivers' information. Your program should never change this file.
- users.txt is the input file which contains all users' information. Your program should never change this file.
- output0.txt is the output file where you print messages to user or driver.
- output1.txt is the output file where you print the updated drivers information.
- output2.txt is the output file where you print the updated users information.
- phoneNumber will be corresponding to one of the users in the users.txt whose state is "Ready_to_request".
- request indicates this is a ride request.

When this command is run, and

1. if a driver is found, your program should  

1.1 print the following information into the output0.txt file:
```console
Ride requested for user Rebecca, looking for an Economy vehicle.
Pick Up Location: Williamsburg, Drop Off Location: Statue_of_Liberty.
We have found the closest driver Elena(4.7) for you.
Elena is now 12.8 miles away from you.
```
Replace *Rebecca* with the user's first name, replace *Economy* with the user's preferred vehicle type, replace *Williamsburg* with the user's pickup location, and replace *Statue_of_Liberty* with the user's drop off location. Replace *Elena* with the driver's first name, replace *4.7* with the driver's rating. Replace *12.8* with the driver's distance from the user.  

1.2 print an updated version of drivers.txt into output1.txt.  

1.3 print an updated version of users.txt into output2.txt.

2. if a driver can not be found, your program should print the following message into the output0.txt file:
```console
Ride requested for user Isabella, looking for a Luxury vehicle.
Pick Up Location: Williamsburg, Drop Off Location: Boerum_Hill.
Sorry we can not find a driver for you at this moment.
```

Replace *Isabella* with the user's first name, replace *Luxury* with the user's preferred vehicle type, replace Williamsburg with the user's pickup location, and replace Boerum_Hill with the user's drop off location.

3. if the phone number provided from the command line is not in the format of xxx-xxx-xxxx, your program should print the following message to the output0.txt file:
```console
phone number is invalid.
```

4. if the phone number provided from the command line does not match with any of the users' phone numbers, your program should print the following message to the output0.txt file:
```console
account does not exist.
```

### Canceling a Request

The second command allows a user or a driver to cancel the request. Keep in mind that both the user and the driver has the right to cancel the request.

```console
nyride.exe drivers.txt users.txt output0.txt output1.txt output2.txt phoneNumber cancel
```

The only difference between this command and the first command is the last argument here is *cancel*, whereas in the first command, the last argument is *request*.

When a user cancels a request, you should just cancel the request; when a driver cancels a request, you should cancel the request, but at the same time, find another closest driver for this user.

Only drivers who are on the way to a pickup location, or users whose driver is on the way, should be allowed to cancel a request. 

When this second command is run, and

1. if the phone number provided from the command line does not match with any of the users' phone numbers, and does not match with any of the drivers' phone numbers, your program should print the following message to the output0.txt file:
```console
account does not exist.
```

2. if the canceling request is issued by a user whose state is NOT Driver_on_the_way, your program should print the following message to the output0.txt file:
```console
You can only cancel a ride request if your driver is currently on the way to the pickup location.
```

3. if the canceling request is issued by a driver whose state is NOT On_the_way_to_pickup, your program should print the following message to the output0.txt file:
```console
You can only cancel a ride request if you are currently on the way to the pickup location.
```

4. if the canceling request is issued by a user whose state is Driver_on_the_way, your program should:

4.1 print the following message to the output0.txt file:
```console
Ride request for user Brenda is now canceled by the user.
```
4.2 print an updated version of drivers.txt into output1.txt: driver's state should be changed from On_the_way_to_pickup to Available.

4.3 print an updated version of users.txt into output2.txt: the user should be removed.

5. if the canceling request is issued by a driver whose state is On_the_way_to_pickup, your program should:

5.1 print the following message to the output0.txt file:
```console
Your driver Edward has cancelled the ride request. We will now find a new driver for you.
Ride requested for user Angela, looking for a Standard vehicle.
Pick Up Location: The_Met_Cloisters, Drop Off Location: Brooklyn_Navy_Yard.
We have found the closest driver Robert(3.2) for you.
Robert is now 3.5 miles away from you.
```

Replace *Edward* with the driver's first name. Replace *Angela* with the user's first name, replace *Standard* with the user's preferred vehicle type. Replace *The_Met_Cloisters* with the user's pickup location, and replace *Brooklyn_Navy_Yard* with the user's drop off location. Replace *Robert* with the new driver's first name. Replace *3.2* with the new driver's rating. Replace *3.5* with the new driver's distance to the user.

5.2 print an updated version of drivers.txt into output1.txt: the old driver's state should be changed from On_the_way_to_pickup to Available. A new driver should be assigned and that new driver's state should be updated accordingly. Also the old driver should no longer be associated with this user, and the new driver should now be associated with this user.

5.3 print an updated version of users.txt into output2.txt: the user should now be associated with the new driver.

## Finding the Driver

When finding the driver, you must always find the closest driver. And in this section, we describe how to achieve this goal. To be added here.

<!--### Driver Removal

Your program should allow the ride sharing company to remove drivers whose rating is below a certain threshold. For example, if they want to remove drivers whose rating is lower than 3.5, they should be able to run this command to do so:

```console
nyride.exe drivers.txt out_drivers.txt remove 3.5
```

And if they want to remove drivers whose rating is lower than 3.2, they can run:
```console
nyride.exe drivers.txt out_drivers.txt remove 3.2
```

When the above commands are executed, the input file should remain unchanged, and you just need to write all drivers whose rating is equal to or higher than the threshold into the output file.

Once they run the removal command, drivers whose rating is lower than the threshold will be removed, and drivers whose rating is equal to or higher than the threshold will be written into the second argument, in the above commands, that is *out_drivers.txt*.

### Rides Monitoring

Your program should allow the ride sharing company to track all requests, and search

```console
nyride.exe drivers.txt users.txt search all
nyride.exe drivers.txt users.txt search user_id
nyride.exe drivers.txt users.txt search driver_id
```
-->

## Program Requirements & Submission Details

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/fall23/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file. 

**Due Date**: 10/05/2023, Thursday, 23:59pm.
