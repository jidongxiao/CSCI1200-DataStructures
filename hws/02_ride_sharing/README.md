# Homework 2 — Designing a Simple Uber

In this assignment you will develop a simple ride sharing application called New York Ride. Please read the entire handout before starting to code the assignment.

## Learning Objectives

- Practice implementing and working with C++ classes.
- Practice using std::string, std::vector.
<!--- Practice overloading operator<<, and understand why it is a bad idea to make it a member function.-->

## Specification

The New York Ride application should support 2 different roles: drivers, riders. Riders can perform two tasks:

- Request a ride
- Cancel a ride request 

Drivers can perform one task:

- Cancel a ride request

*Note*: A commercial ride sharing product like Uber or Lyft of course allows riders and drivers to perform more tasks, but let's be honest, Uber/Lyft has thousands of software engineers, but you only have one person and only have one week to work on this assignment, so let's simplify the tasks.

## Input Files

Companies like Uber and Lyft maintain all drivers and riders information in their database, but database is way beyond the scope of this course, and therefore we will just store drivers information and riders information in two simple text files, [drivers.txt](drivers.txt) and [riders.txt](riders.txt). In this assignment you will once again read these files as the input of your program, parse them so as to retrieve drivers and/or riders information, and store them in your own data structures. In this assignment, you must use *std::vector* to store drivers and riders. You are recommended to use one *std::vector* instance to store all drivers, use another *std::vector* instance to store all riders.

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

The [riders.txt](riders.txt) has a format like this:

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

The above is the first 10 lines of the [riders.txt](riders.txt) file. It has 17 fields, separated by a space. And these 17 fields are:

- Rider's first name
- Rider's last name
- Rider's gender
- Rider's age
- Rider's phone number
- Rider's rating
- The name of the rider's pickup location
- The latitude of the rider's pickup location
- The longitude of the rider's pickup location
- The name of the rider's dropoff location
- The latitude of the rider's dropoff location
- The longitude of the rider's dropoff location
- Rider's vehicle preference
- Rider's current state
- Driver's first name
- Driver's last name
- Driver's phone number

A rider can be in one of the following states:

- Ready to request
- Driver on the way (to pickup)
- During a trip

Ideally, there should be four states, and this other state would be: Ride requested but not yet accepted by any driver. However, as we mentioned, in this assignment, we assume that when a rider issues a request, it will be accepted by a driver, and thus we can exclude this state from our consideration.

When the rider is in Ready_to_request state, it means no driver is now assigned to this ride request, and therefore, the last 3 fields of this rider will just be 

```console
null null null
```

## Commands to Support

<!--- Driver Removal
- Rides Monitoring-->
Your program only needs to support two commands:

### Ride Request

The first command allows the rider can to send a ride request.

```console
nyride.exe drivers.txt riders.txt output0.txt output1.txt output2.txt phoneNumber request
```

Here

- drivers.txt is the input file which contains all drivers' information. Your program should never change this file.
- riders.txt is the input file which contains all riders' information. Your program should never change this file.
- output0.txt is the output file where you print messages to rider or driver.
- output1.txt is the output file where you print the updated drivers information, thus this file should have the same format as drivers.txt.
- output2.txt is the output file where you print the updated riders information, thus this file should have the same format as riders.txt.
- phoneNumber. Ideally this should be a phone number which corresponds to one of the riders in the riders.txt whose state is "Ready_to_request"; but life is not always ideal, and how your program should cope with various phone number cases will be described in this section.
- request indicates this is a ride request.

When this command is run, and

1. if a driver is found, your program should  

1.1 print the following information into the output0.txt file:
```console
Ride requested for rider Rebecca, looking for an Economy vehicle.
Pick Up Location: Williamsburg, Drop Off Location: Statue_of_Liberty.
We have found the closest driver Elena(4.7) for you.
Elena is now 7.9 miles away from you.
```
Replace *Rebecca* with the rider's first name, replace *Economy* with the rider's preferred vehicle type, replace *Williamsburg* with the rider's pickup location, and replace *Statue_of_Liberty* with the rider's drop off location. Replace *Elena* with the driver's first name, replace *4.7* with the driver's rating. Replace *7.9* with the driver's distance from the rider.  

1.2 print an updated version of drivers.txt into output1.txt.  

1.3 print an updated version of riders.txt into output2.txt.

2. if a driver can not be found, your program should print the following message into the output0.txt file:
```console
Ride requested for rider Isabella, looking for a Luxury vehicle.
Pick Up Location: Williamsburg, Drop Off Location: Boerum_Hill.
Sorry we can not find a driver for you at this moment.
```

Replace *Isabella* with the rider's first name, replace *Luxury* with the rider's preferred vehicle type, replace Williamsburg with the rider's pickup location, and replace Boerum_Hill with the rider's drop off location.

3. if the phone number provided from the command line is not in the format of xxx-xxx-xxxx, your program should print the following message to the output0.txt file:
```console
Phone number is invalid.
```

4. if the phone number provided from the command line does not match with any of the riders' phone numbers, your program should print the following message to the output0.txt file:
```console
Account does not exist.
```

5. if the rider who is issuing this request is in a state of "Driver_on_the_way", your program should print the following message to the output0.txt file:
```console
You have already requested a ride and your driver is on the way to the pickup location.
```

6. if the rider who is issuing this request is in a state of "During_the_trip", your program should print the following message to the output0.txt file:
```console
You can not request a ride at this moment as you are already on a trip.
```

### Canceling a Request

The second command allows a rider or a driver to cancel the request. Keep in mind that both the rider and the driver has the right to cancel the request.

```console
nyride.exe drivers.txt riders.txt output0.txt output1.txt output2.txt phoneNumber cancel
```

The only difference between this command and the first command is the last argument here is *cancel*, whereas in the first command, the last argument is *request*.

When a rider cancels a request, you should just cancel the request; when a driver cancels a request, you should cancel the request, but at the same time, find another closest driver for this rider.

Only drivers who are on the way to a pickup location, or riders whose driver is on the way, should be allowed to cancel a request. 

When this second command is run, and

1. if the phone number provided from the command line does not match with any of the riders' phone numbers, and does not match with any of the drivers' phone numbers, your program should print the following message to the output0.txt file:
```console
Account does not exist.
```

2. if the canceling request is issued by a rider whose state is NOT Driver_on_the_way, your program should print the following message to the output0.txt file:
```console
You can only cancel a ride request if your driver is currently on the way to the pickup location.
```

3. if the canceling request is issued by a driver whose state is NOT On_the_way_to_pickup, your program should print the following message to the output0.txt file:
```console
You can only cancel a ride request if you are currently on the way to the pickup location.
```

4. if the canceling request is issued by a rider whose state is Driver_on_the_way, your program should:

4.1 print the following message to the output0.txt file:
```console
Ride request for rider Brenda is now canceled by the rider.
```
4.2 print an updated version of drivers.txt into output1.txt: the driver's state should be changed from On_the_way_to_pickup to Available, and the last 3 fields of the driver should be reset to null, meaning that this driver is now not associated with any rider.

4.3 print an updated version of riders.txt into output2.txt: the rider's state should be changed from Driver_on_the_way to Ready_to_request, and the last 3 fields of the rider should be reset to null, meaning that no driver is now associated with this rider.

5. if the canceling request is issued by a driver whose state is On_the_way_to_pickup, your program should:

5.1 print the following message to the output0.txt file:
```console
Your driver Edward has canceled the ride request. We will now find a new driver for you.
Ride requested for rider Angela, looking for a Standard vehicle.
Pick Up Location: The_Met_Cloisters, Drop Off Location: Brooklyn_Navy_Yard.
We have found the closest driver Robert(3.2) for you.
Robert is now 2.1 miles away from you.
```

Replace *Edward* with the driver's first name. Replace *Angela* with the rider's first name, replace *Standard* with the rider's preferred vehicle type. Replace *The_Met_Cloisters* with the rider's pickup location, and replace *Brooklyn_Navy_Yard* with the rider's drop off location. Replace *Robert* with the new driver's first name. Replace *3.2* with the new driver's rating. Replace *2.1* with the new driver's distance to the rider.

5.2 print an updated version of drivers.txt into output1.txt: the old driver's state should be changed from On_the_way_to_pickup to Available. A new driver should be assigned and that new driver's state should be updated accordingly. Also the old driver should no longer be associated with this rider, and the new driver should now be associated with this rider.

5.3 print an updated version of riders.txt into output2.txt: the rider should now be associated with the new driver.

## Calculate Distance Based on Haversine Formula

When finding the driver, you must always find the closest driver whose vehicle type matches with the rider's preference. And when the closest driver is found, you also need to print the distance between this driver and the rider. Thus, you need a way to calculate the distance between two coordinates, and for that purpose, in this assignment, you will use the Haversine Formula, and the code of using the Haversine formula is given below:

```cpp
// calculate the distance between two coordinates using Haversine formula
double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
    const double radiusOfEarth = 6371.0; // Earth's radius in kilometers

    // convert latitude and longitude from degrees to radians
    lat1 *= M_PI / 180.0;
    lon1 *= M_PI / 180.0;
    lat2 *= M_PI / 180.0;
    lon2 *= M_PI / 180.0;

    // Haversine formula
    double dLat = lat2 - lat1;
    double dLon = lon2 - lon1;
    double a = sin(dLat / 2.0) * sin(dLat / 2.0) + cos(lat1) * cos(lat2) * sin(dLon / 2.0) * sin(dLon / 2.0);
    double c = 2.0 * atan2(sqrt(a), sqrt(1.0 - a));
    // distance in kilometers
    double distanceKM = radiusOfEarth * c;
    // convert it to distance in miles
    double distanceMiles = distanceKM * 0.621371;

    return distanceMiles;
}
```

This function takes four parameters, which are the latitude and longitude of two geographical locations, and this function returns the distance (in miles) between these two locations. This function calls several math library functions, and therefore you need to include the *cmath* library:

```cpp
#include <cmath>
```

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
nyride.exe drivers.txt riders.txt search all
nyride.exe drivers.txt riders.txt search rider_id
nyride.exe drivers.txt riders.txt search driver_id
```
-->

## Include Guards

If you are writing more than one class, you may run into strange compiler errors when you compile everything. This may be due to a problem with including your class files, which can be solved as follows: for a header file called myclass.h add these two lines at the very top of the header file:

```cpp
#ifndef __MYCLASS_H
#define __MYCLASS_H
```

and at the very bottom of your .h file, add this line:

```cpp
#endif
```

This technique is known as the "Include Guards". Include guards ensure that the compiler will process a header file only once, no matter how many times it is included.

## FAQs

1. Q: Is the requested vehicle type from a rider's perspective a strict requirement for finding a matching driver? Or is it just a preference. Essentially, if a rider requests Economy and there is no available drivers for Economy, but available drivers with other vehicle types, should we output that no driver could be found, or match the nearest driver with different vehicle type?

A: It is a strict requirement. Do not pick a different vehicle type for the rider.

2. Q: What is the precision of the output distance? Is it one decimal place or significant figures or holding a certain number of spaces? Do we round up round down or simply trim it down?

A: Same as Uber. One decimal place. Just trim it. For example, if the distance is 11.4571 miles, you should output 11.4 miles, instead of 11.5 miles.

## Program Requirements & Submission Details

In this assignment, you are required to use a vector to store all drivers, and use a vector to store all riders. You are NOT allowed to use any data structures we have not learned so far, especially std::list.

Use good coding style when you design and implement your program. Organize your program into functions:
don’t put all the code in main! Be sure to read the [Homework Policies](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/homework_policies.php) as you put the finishing touches on your solution. Be sure to make up new test cases to fully debug your program and don’t forget
to comment your code! Use the provided template [README.txt](./README.txt) file for notes you want the grader to read.
You must do this assignment on your own, as described in the [Collaboration Policy & Academic Integrity](https://www.cs.rpi.edu/academics/courses/spring24/csci1200/academic_integrity.php) page. If you did discuss the problem or error messages, etc. with anyone, please list their names in your
README.txt file. 

**Due Date**: 01/25/2024, Thursday, 10pm.

## Rubric

14 pts

 - README.txt Completed (3 pts)
   - One of name, collaborators, or hours not filled in. (-1)
   - Two or more of name, collaborators, or hours not filled in. (-2)
   - No reflection. (-1)
 - OVERALL CLASS DECLARATION & IMPLEMENTATION AND CODING STYLE (Good class design, split into a .h and .cpp file.  Functions > 1 line are in .cpp file.  Organized class implementation and reasonable comments throughout. Correct use of const/const& and of class method const. ) (6 pts)
   - No credit (significantly incomplete implementation) (-6)
   - Putting almost everything in the main function. It's better to create separate functions for different tasks. (-2)
   - Improper uses or omissions of const and reference. (-1)
   - Function bodies containing more than one statement are placed in the .h file. (okay for templated classes) (-2)
   - Functions are not well documented or are poorly commented, in either the .h or the .cpp file. (-1)
   - Overly cramped, excessive whitespace, or poor indentation. (-1)
   - Poor file organization: Puts more than one class in a file (okay for very small helper classes) (-1)
   - Poor choice of variable names: non-descriptive names (e.g. 'vec', 'str', 'var'), single-letter variable names (except single loop counter), etc. (-2)
   - Uses global variables. (-1)
   - Contains useless comments like commented-out code, terminal commands, or silly notes. (-1)
 - DATA REPRESENTATION (Must use vectors for the implementation.) (5 pts)
   - No credit (significantly incomplete implementation). (-5)
   - Does not use std::vector to store drivers or riders. (-5)
   - Uses std::list or data structures which have not been covered in this class. (-5)
   - Member variables are public. (-2)
<!-- - OUTPUT OPERATOR OVERLOADING (2 pts)
   - Does not overload the output (&lt;&lt;) operator. (-2)
   - Incorrect syntax (wrong return type, wrong arguments). (-1)
-->
