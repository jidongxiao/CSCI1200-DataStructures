<?php include 'global_colors.php'; ?>
<style>
.schedule-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
.schedule-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<?php include 'schedule_format.php'; ?>



<h1>Weekly Lab & Office Hours Schedule</h1>


<p class=DS_P>
Please attend your assigned lab section and get to know your lab TA,
the undergraduate mentors, and the other students in your lab section.
Contact your graduate lab TA in advance to re-schedule if you
can't make your lab section for a particular week.

<em>NOTE: Requests for extensions for homework assignments or makeup exams
  must be 
<a href="https://success.studentlife.rpi.edu/current-students/academic-and-personal-support/requesting-excused-absence">verified
by the appropriate office</a>, who will send a written note to
the course instructor. 
</em></p>

<p class=DS_P>
Your graduate lab TA is your first point of contact for this course.
You may also attend the office hours of any other TA or the instructor
for questions about the course material or the homework.  If you have
questions about the grading of your homework, please see the TA who
graded your assignment during their regular office hours or make an
appointment.  Please also check the <a href="https://submitty.cs.rpi.edu/courses/f23/csci1200/forum">Discussion Forum</a> for announcements of schedule changes.
</p>

<p class=DS_P> When you seek help on a programming assignment from a TA or from
the instructor during office hours, you must arrive prepared with a
list of problems and questions.  Students who are not prepared will be
turned away.
</p>

<p class=DS_P>
During busy office hours (Wednesday and Thursday office hours tend to
be the most crowded) we will be using the
<a href="https://submitty.cs.rpi.edu/courses/f23/csci1200/office_hours_queue">
  Submitty Office Hours Help Queue</a>
to ensure that
everyone has a fair turn getting help.
</p>

<br>

<p class=DS_P>
  <b>All times below are the
    <a href="https://www.google.com/search?q=america+newyork+time+zone">America/New York timezone</a>.</b>
</p>

<br>

<table width="100%" border=1 cellpadding=0 cellspacing=0>

<?php

/* -------------------------------------------------------------------------------------- */
/* -------------- DAY HEADINGS ---------------------------------------------------------- */

row_begin();
schedule_day("Monday","12.5%");
schedule_day("Tuesday","12.5%");
schedule_day("Wednesday","37.5%",3);
//schedule_day("Thursday","25%",2);
schedule_day("Thursday","25%",2);
schedule_day("Friday","12.5%");
row_end();


/* -------------- 10 AM ----------------------------------------------------------------- */

row_begin("10am");
//schedule_misc("Autograding Released",2);
blank(4);
blank(4);

/*schedule_lab("1","10-11:50am","Lally 104","Maur&iacute;cio","Alec, Eric&nbsp;P.,<br>Nate, & Osama",1,"11%");
schedule_lab("2","10-11:50am","J-ROWL 2C30","Weiran","Youssef, Ethan,<br>Frank, & Marisa",1,"11%");
schedule_lab("15","10-11:50am","PITTS 4114","Cameron","Paul, George,<br>Victor, & Wendy",1,"11%");
blank(4);*/

schedule_lab("1","10-11:50am","Lally 102","Conor","Anthony, Daniel & Ryon",1,"11%");   //35
schedule_lab("2","10-11:50am","Lally 104","Ron"," Sharat, Chaitanya & Xenia",1,"11%"); //35
//schedule_lab("15","10-11:50am","Sage 4101","Connor","Evan, Niels & Ryon",1,"11%"); //35
blank(4);
//schedule_alac("1/23","Wed 10:00-11:50am","ALAC tutoring space, 1st floor Library");

blank(4);
blank(4);
blank(4);
row_end();

row_begin();
row_end();

/* -------------- 11 AM ----------------------------------------------------------------- */

row_begin("11am");

//schedule_misc("Homework Released",2);
row_end();

row_begin();
row_end();

/* --------------  NOON ----------------------------------------------------------------- */

row_begin("12pm");

blank(4);

/*
schedule_lab("3","noon-1:50pm","Lally 102","Cameron","Paul, Tyler,<br>George, & Abby(50%)",1,"11%");
schedule_lab("4","noon-1:50pm","Lally 104","Tim","Eric&nbsp;P., Matt,<br>Vikram, & Abby(50%)",1,"11%");
schedule_lab("11","noon-1:50pm","JROWL 2C30","Josh","Brian, Yang,<br>Ryan, & Wendy",1,"11%");
blank(4);

// Thursday
schedule_ta_officehours("12-2pm<br>TA: Tim<br>mentors: Hayes<br>& Osama<br><br>2-4pm<br>TA: Farhad<br>mentors: Abby,<br>Coen, & Matt<br>&nbsp;<br>4-6pm<br>TA: Milo<br>mentors: Alex,<br>Grace, & Wendy","&nbsp;<br>Folsom&nbsp;Library<br>ALAC Tutoring&nbsp;Space<br>(SE&nbsp;corner&nbsp;of<br>lower&nbsp;level)",12);
*/

blank(4);
//Fu, Anthony,
schedule_lab("3","12-1:50pm","Lally 102","Conor","Jessica, Ronin & Ryon",1,"11%"); //35
schedule_lab("4","12-1:50pm","Lally 104","Ron","Anthony, Amelia & Kiron",1,"11%"); //35 TBD1
//schedule_lab("11","noon-1:50pm","Sage 4101","Connor & Xiaoyu","Amelia, Eleanor & Yash",1,"11%"); //18
blank(4);

// Thursday
//schedule_ta_officehours("12-1:50pm<br>mentors: Jack & Kajsa","VCC 208",8);
schedule_ta_officehours("12-1:50pm<br>mentors: Jack & Kajsa<br>VCC 208<br>&nbsp;<br>2-3:50pm<br>mentors: Charles, Anna & Nicole<br>JEC 3210<br>&nbsp<br>4-5:50pm<br>TA: Ron<br>mentors: Jack & Nikul & Samir<br>JEC 4309<br>&nbsp<br>6-7:50pm<br>TA: Yuxuan<br>mentors: Braeden & Nicole & Kaelan<br>JEC 4309","&nbsp;<br>",16);

//Folsom&nbsp;Library<br>ALAC Tutoring&nbsp;Space<br>(SE&nbsp;corner&nbsp;of<br>lower&nbsp;level)

blank(4);
blank(4);

row_end();

// 12:30
row_begin();
row_end();

/* --------------  1 PM ----------------------------------------------------------------- */

row_begin("1pm");
//schedule_instructor_officehours("Prof Cutler", "Lally 302","4","1-3pm");
row_end();

row_begin();
//schedule_instructor_officehours("Prof Plum", "Eaton 205","4","1-3pm");
row_end();

/* --------------  2 PM ----------------------------------------------------------------- */

row_begin("2pm");
schedule_instructor_officehours("Jidong", "AE 206","4","2-3:50pm");

//schedule_lecture("2-3:50pm","DCC 308");
//schedule_lecture_split("9-16","2-3:50pm","DCC 308");
//schedule_instructor_officehours("Prof&nbsp;Plum*","See footnote",1,"1:45-2:15pm");
//schedule_lecture("2-3:50pm","ONLINE");
schedule_lecture("2-3:50pm","West Hall Auditorium");

/*schedule_lab("5","2-3:50pm","Lally 102","Milo","Alex, Anshul,<br>Tyler, & Sinclair(50%)",1,"11%");
schedule_lab("6","2-3:50pm","Lally 104","Tim","Julian, Terry,<br>Victor, & Sinclair(50%)",1,"11%");
schedule_lab("12","2-3:50pm","Eaton 216","Jianhui","Coen, Grace & Andrea",1,"11%");

schedule_ta_officehours("4-6pm<br>TA: Maur&iacute;cio<br>mentors: Hayes,<br>Sinclair, & Winona<br>&nbsp;<br>6-8pm<br>TA: Milo<br>mentors: Cass,<br>Eric W., & Jakob","&nbsp;<br>J-ROWL 2C30<br>",8);
*/

//Tyler B., Ryon, Yash, Ali, Maryellen, Theodore, Jody, Jessica
schedule_lab("5","2-3:50pm","Lally 102","Shuhang","Alexander, Quinn & Eleanor",1,"11%"); //35
schedule_lab("6","2-3:50pm","Lally 104","Yuxuan","Ronin, Shimu & Nikul",1,"11%"); //35
//schedule_lab("12","2-3:50pm","Sage 4101","Abby & Nia","David, Samir, & Xenia",1,"11%"); //34

blank(4);
blank(4);

//schedule_lecture_split("9-16","2-3:50pm","DCC 308");
//schedule_lecture_split_andrew("9-16","2-3:50pm","DCC 308","Andrew A.","2-2:50pm","DCC 235");
//schedule_instructor_officehours("Prof&nbsp;Plum*","See footnote",1,"1:45-2:15pm");
//schedule_lecture("2-3:50pm","ONLINE");
schedule_lecture("2-3:50pm","West Hall Auditorium");
row_end();

row_begin();
//blank(1);
//blank(1);
row_end();

/* --------------  3 PM ----------------------------------------------------------------- */

row_begin("3pm");
//blank(2);
//schedule_instructor_officehours("Prof Xiao", "Eaton 206","4","3-5pm");
//schedule_early_officehours("9-16","2-3:50pm","DCC 308","Andrew A.","2-2:50pm","DCC 235");
//blank(2);
//blank(2);
row_end();

row_begin();
//blank(1);
row_end();

/* --------------  4 PM ----------------------------------------------------------------- */

row_begin("4pm");

//monday 4-6
//blank(4);

//schedule_instructor_officehours("Prof&nbsp;Cutler","DCC 308/Lobby");
blank(4);

/*
schedule_lab("7","4-5:50pm","Lally 102","Milo","Jakob,<br>Nick, Zixiang,<br>& Eric&nbsp;W.(50%)",1,"11%");
schedule_lab("8","4-5:50pm","Lally 104","Farhad","Coen,<br>Julian, Vikram,<br>& Eric&nbsp;W.(50%)",1,"11%");
schedule_lab("13","4-5:50pm","Sage 3101","Jianhui","Coen, Ruijie,<br>Grace & Jared",1,"11%");

schedule_ta_officehours("TA: Cameron<br>mentors:<br>Alec & Rutvik","J-ROWL 2C30",4,"4-6pm");*/

blank(4);
//Aditya, Ryon, Yash, Joyce, Nia, Jack, Jessica
schedule_lab("7","4-5:50pm","Lally 102","Shuhang","Kaelan, Quinn & Xenia",1,"11%"); //35
schedule_lab("8","4-5:50pm","Lally 104","Matthew","Daniel, Kiron & Charles",1,"11%"); //35
//schedule_lab("13","4-5:50pm","Sage 4101","Mike","Aaryaman, Aleksander & Charles",1,"11%"); //34

//schedule_ta_officehours("4-5:50pm<br>TA: Abby & Bishwajit<br>mentors: Jaeseok, Sophia & Terry<br>&nbsp;<br>6-7:50pm<br>TA: Kacy<br>mentors: Kaelan & Nyx","<br>Folsom&nbsp;Library<br>ALAC Tutoring&nbsp;Space<br>(SE&nbsp;corner&nbsp;of<br>lower&nbsp;level)",8);
schedule_ta_officehours("4-5:50pm<br>mentors: Smayan & Kajsa & Samir <br>AE 216<br>&nbsp;<br>6-7:50pm<br>TA: Shuhang & Conor <br>mentors: Braeden","AE 216",8);

blank(4);
schedule_ta_officehours("4-5:50pm<br>mentors:<br>Shimu & Amelia","Sage 4510",4);

row_end();

row_begin();
row_end();

/* --------------  5 PM ----------------------------------------------------------------- */

row_begin("5pm");
row_end();

row_begin();
row_end();


/* --------------  6 PM ----------------------------------------------------------------- */

row_begin("6pm");

//schedule_alac_officehours("ALAC Review Session<br><em>Start date: TBD</em>","6-8pm","Sage 3101",4);

/*
schedule_ta_officehours("TA: Tim<br>mentors:<br>Andrew & Nate","J-ROWL 2C30",4,"6-8pm");
schedule_ta_officehours("TA: Cameron<br>mentors:<br>Grace & Rutvik","J-ROWL 2C30",4,"6-8pm");

schedule_lab("9","6-7:50pm", "Lally 102","Maur&iacute;cio","Nick,<br>Terry, & Zixiang",1,"11%");
schedule_lab("14","6-7:50pm", "Lally 104","Farhad","Anshul,<br>Ryan, & Andrew",1,"11%");
schedule_lab("10","6-7:50pm","Sage 3101","Ayushi","Greg, Wilson G. & Ritz",1,"11%");
schedule_lab("16","6-7:50pm", "Eaton 216","Maur&iacute;cio","Nick,<br>Terry, & Zixiang",1,"11%");

schedule_ta_officehours("TAs: Farhad & Maur&iacute;cio<br>mentors: Cass,<br>Ryan, & Winona",
"&nbsp;<br>6-8pm<br>J-ROWL 2C30",4);
*/

schedule_ta_officehours("TA: Matthew<br>mentors:<br>Anna & Alexander","AE 215",4,"6-7:50pm");
schedule_ta_officehours("TA: Yuxuan<br>mentors:<br>Eleanor & Smayan","AE 216",4,"6-7:50pm");

//Justin, Joyce, Nia, Spencer
schedule_lab("9","6-7:50pm", "Lally 102", "Matthew","Jessica, Chaitanya & Sharat",1,"11%");
//schedule_lab("10 & 14 & 16","6-7:50pm", "Lally 104","TBD","TBD",2,"11%"); //22+7+10 = 39
//schedule_lab("10","6-7:50pm", "Lally 104","James","David, Jody & Veevek",1,"11%");
//schedule_lab("14 & 16","6-7:50pm","14: Sage 5101<br>16: Sage 4101","14: Mike<br>16:Yizhou","14:Justin, Rohan & Sophia<br>16:Aaryaman, Henry & Xenia",1,"11%");
//schedule_lab("16","6-7:50pm", "Eaton 216","TBD","TBD",1,"11%");
//schedule_ta_officehours("6-7:50pm<br>TA: Shuhang<br>mentors: Braeden & Samir","AE 216",8);

blank(4);
schedule_testblock("Location: TBA<br>","6-7:50pm<br><em>exam weeks only</em>","12%");
//blank(4);

//schedule_ta_officehours("TA: TBD<br>mentors: TBD<br>","Folsom Library<br>Lower Level<br>ALAC Tutoring",4,"6-7:50pm",1,"12%");
blank(4);

row_end();

row_begin();
row_end();


/* --------------  7 PM ----------------------------------------------------------------- */

row_begin("7pm");
row_end();

row_begin();
row_end();

/* --------------  8 PM ----------------------------------------------------------------- */

//row_begin("8pm");
/*schedule_alac("start date","8-10pm","location");*/

//schedule_alac("1/19","8pm-10pm","Lally 102 (ALAC), AE 118 (CS Mentoring)");
//blank(4);

//schedule_alac("1/19","8pm-10pm","Lally 102 (ALAC), Lally 104 (CS Mentoring)");
//blank(4);

//schedule_alac("1/20","8pm-10pm","ONLINE (Office Hours Queue)", 4);
//schedule_ta_officehours("mentors: TBD<br>","Lally 104",4,"8-9:50pm",1,"20%");
//schedule_alac("1/19","8pm-10pm","Lally 102 (ALAC), AE118 (CS Mentoring)",4);
//blank(4,4);

//schedule_alac("1/20","8pm-10pm","ONLINE (Office Hours Queue)", 2);
//schedule_ta_officehours("mentors: TBD<br>","Amos Eaton 118",4,"8-9:50pm",1,"12%");
//schedule_alac("1/19","8pm-10pm","Lally 102 (ALAC), AE118 (CS Mentoring)",2	);
//blank(4,2);

//blank(4);
//row_end();

//row_begin();
//row_end();

/* --------------  9 PM ----------------------------------------------------------------- */

//row_begin("9pm");
//row_end();

//row_begin();
//row_end(); 

/* -------------------------------------------------------------------------------------- */


?>


</table>

<?php include 'template_after.php'; ?>
