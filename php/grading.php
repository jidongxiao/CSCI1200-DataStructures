<?php include 'global_colors.php'; ?>
<style>
.syllabus-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}

.syllabus-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<table>
<tr>
<td class="left-sidebox">
<h1>Course Grades</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="syllabus.php" class="nav-row">Syllabus</a></li>
<li><a href="grading.php" class="nav-row syllabus-selected sidebox">Course Grades</a></li>
<li><a href="lecture_polls.php" class="nav-row">Submini Lecture Polls</a></li>
<li><a href="homework_policies.php" class="nav-row">Homework Policies</a></li>
</ul>
</div>
</td>
</table>



<h2>Submini Lecture Polls</h2>

<p class=DS_P>
  Each lecture will include several multiple-choice polls that
  will help you gauge your understanding of new
  material and collect feedback for the teaching staff.  Participation
  and timely completion of these exercises is strongly encouraged;
  however, <a href="lecture_polls.php">Submini Lecture Polls</a>
  will not be directly factored into the semester average.
</p>


<h2>Lab Assignments</h2>

<p class=DS_P>
There will be a total of 14 programming labs, one each week.  Labs are
graded on a scale of 0-3, depending on the amount and quality of work
completed.  Labs are designed so that students who work diligently can
earn all 3 points.  You must attend your assigned lab section unless
prior arrangements have been made with the graduate TA for your lab
section (see <a href="schedule.php">Schedule</a>).  To receive credit
for the lab exercises, the work must be completed in lab and approved
by the lab TA before the end of lab -- <em> 10 minutes before the hour</em>.   TAs
and undergraduate programming mentors are available in lab to answer
your questions as well as check off your work.  Don't wait until the
end of lab to ask questions or show your work.</p>

<p class=DS_P> Lab instructions and a subset of the lab problems will be posted
on the course website by Tuesday early evening, before each
Wednesday lab.  Students are encouraged to read through the materials
and get started on the exercises before their assigned lab section.
Additional problems will be distributed at the start of the lab.
Students should bring their laptop, any optional references, and recent
lecture notes to lab.  </p>

<p class=DS_P> 
Internet access during labs is restricted to lab file downloads and
standard programming reference material only.  Reading or sending
email, instant messages, social media, text messages, cell phone use,
playing video games, etc. is disallowed during lab.  Students who
violate the policy will receive a 0 for the lab and be asked to leave.
</p>

<h2>Homeworks</h2>

<p class=DS_P>
There will be 10 homework assignments, one each week, except for weeks
when a test is scheduled.  Assignments will be submitted
electronically and are due on Thursdays by 11:59pm.  <em>Please do not
email your homework assignment to the instructor or graduate TA.</em>
Homework assignments will be made available on the course web site at
least one week before the deadline and all material for the homework
will be covered by the end of Friday's lecture.  Students are
encouraged to start the assignments over the weekend, and ask the
instructor and TAs questions about the homework on
the <a href="https://submitty.cs.rpi.edu/courses/f22/csci1200/forum">Discussion Forum</a> or in office hours early
in the week.
</p>

<p class=DS_P>
See the <a href="homework_policies.php">Homework Policies</a> page, the <a
href="academic_integrity.php">Collaboration Policy & Academic Integrity</a> page, the <a
href="good_programming.php">Good Programming Practices</a>, and the <a
href="advice_TAs.php">Programming Advice from TAs</a> page for more
information.
</p>

<h2>Tests and Final Exam</h2>

<p class=DS_P> Three tests will be given during the Thursday evening test block.
A cumulative final exam will be scheduled during finals week.  These
are pencil-and-paper tests that will focus on problem solving by
writing C++ code.  The exams will also include short answer and
diagram-based questions.  Sample exam problems from prior semesters
will be distributed about a week before each exam.  </p>

<p class=DS_P> The course material is cumulative and students should strive to
improve their performance on each subsequent test.  When a student
"beats" their previous test score, the previous test score will be
replaced with the average of the two scores.  For example, if a
student gets a 70 on Test 1 and an 82 on Test 2, the first test score
will be replaced by the average of Tests 1 & 2 = 76.  If the student
then earns an 88 on Test 3, the second test score will be replaced
with the average of 82 and 88 = 85.  (Note that we don't go back and
re-adjust Test 1).  And similarly, the score for Test 3 will be
adjusted if the student's performance on the final exam improves upon their
performance for Test 3.</p>

<p class=DS_P>
<em> Important Note: We will not provide a makeup exam unless the
absence is <a href="https://success.studentlife.rpi.edu/current-students/academic-and-personal-support/requesting-excused-absence"> officially excused by the appropriate office</a>.</em> </p>


<h2>Semester Average</h2>

<p class=DS_P> Your final grade in this class combines your performance on the
lab exercises, homeworks, and exams as follows:
</p>

<ul class=DS_UL>
<li class=DS_LI>Labs: 15% 
<li class=DS_LI>Homeworks: 35% 
<li class=DS_LI>Tests: 30% 
<li class=DS_LI>Final Exam: 20% 
</ul>

<p class=DS_P> All components of the class are graded on a curve.  What does
this mean? The homeworks and exams will contain challenging
problems and the grade breakdown will likely be lower than the typical
90%=A, 80%=B, etc.  We will announce the curve for each exam and
homework when the grades are returned.</p>

<p class=DS_P><em> Important Note: You must have a passing average on each component (labs,
homeworks, and exams) in order to pass the course.</em>
</p>

<h2>Rainbow Grades Summary</h2>

<p class=DS_P>Please regularly check the grades recorded in Rainbow
Grades on Submitty and let us know if you spot a data entry error.
This chart will allow you to gauge your overall performance relative
to the class average and the estimate for the grade boundaries.  Here
is a example of what the grade summary will look like: </p>

<img width=700 src="images/sample_student.png">

<p class=DS_P></p>

<p class=DS_P>
<em>Note: Because the exams and homeworks change from year-to-year,
the curve for each homework/exam and the final average will be
adjusted accordingly and will not be exactly the same as this
sample</em>.  </p>

<?php include 'template_after.php'; ?>
