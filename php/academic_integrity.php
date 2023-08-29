<?php include 'global_colors.php'; ?>
<style>
.academic-integrity-selected {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
.academic-integrity-selected .icon-title {
    background-color: var(--sidebar-highlight-color);
    font-weight: bold;
    color: #000000;
}
</style>

<?php include 'template_before.php'; ?>

<?php include 'calendar_data.php'; ?>

<p class=DS_P>
<font style="font-weight:bold; color:var(--special-text-color);">
Important: Please read the following statement thoroughly.
<br>
If you
have any questions, contact the instructor or the TAs immediately.
</font>
</p>

<p class=DS_P>
  <font style="font-weight:bold; color:var(--special-text-color);">
    Complete the short online quiz about the

<?php 
 //if (0) {
 if (lecturereleased(1)) {
   print '<a href="https://submitty.cs.rpi.edu/courses/f23/csci1200/gradeable/academic_integrity">Syllabus and Collaboration Policy</a>';
 } else {
   print 'Syllabus and Collaboration Policy';
 }
?>
 <br>before starting the first homework.
</font>
</p>


<h1>Collaboration Policy & Academic Integrity</h1>

<h2>Lecture Participation Polls</h2>

<p class=DS_P>
Responses to lecture participation polls will be used to earn incentives
for the Data Structures course.  Discussion of collaborative lecture participation polls
with those seated around you is encouraged.
However, if we find anyone submitting answers for or using the account of
another individual, we will zero the lecture participation points of all involved students
and report the incident to the Dean of Students.
</p>


<h2>Academic Integrity for Tests and Final Exam</h2>

<p class=DS_P>
The tests and final exam for this course will be completed
individually.  Copying, communicating, or using disallowed materials
during a test is cheating, of course.  Students caught cheating on a
test will receive an F in the course and will be reported to the Dean
of Students for further disciplinary action.
</p>

<h2>Collaboration Policy for Programming Labs</h2>

<p class=DS_P>
Collaboration is encouraged during the weekly programming labs.
Students are allowed to talk through and assist each other with these
programming exercises.  Students may ask for help from each other, the
graduate lab TA, and undergraduate programming mentors.  But each
student must write up and debug their own lab solutions on their own
laptop and be prepared to individually present and discuss this work
with the TA to receive credit for each checkpoint.
</p>

<p class=DS_P>
As a general guideline, students may look over each other's shoulders
at their labmate's laptop screen during lab &mdash; this is the best
way to learn about IDEs, code development strategies, testing, and
debugging.  However, looking should not lead to line-by-line copying.
Furthermore, each student should retain control of their own keyboard.
While being assisted by a classmate or a TA, the student should remain
fully engaged on problem solving and ask plenty of questions.
Finally, other than the specific files provided by the instructor,
electronic files or file excerpts should not be shared or copied (by
email, text, Dropbox, GitHub, or any other means).
</p>


<h2>Homework Collaboration Policy</h2>

<p class=DS_P>
Academic integrity is a complicated issue for individual programming
assignments, but one we take very seriously.  Students naturally want
to work together, and it is clear they learn a great deal by doing so.
Getting help is often the best way to interpret error messages and
find bugs, even for experienced programmers.  Furthermore, in-depth
discussions about problem solving, algorithms, and code efficiency are
invaluable and make us all better software engineers.  In response to
this, the following rules will be enforced for programming
assignments:
</p>

<ul class=DS_UL> 

<li class=DS_LI>
<p class=DS_P>
Students may read through the homework assignment together and discuss
what is asked by the assignment, examples of program input & expected
output, the overall approach to tackling the assignment, possible high
level algorithms to solve the problem, and recent concepts from
lecture that might be helpful in the implementation.
</p>

<li class=DS_LI> 
<p class=DS_P>
Students are not allowed to work together in writing code or
pseudocode.  Detailed algorithms and implementation must be done
individually.  Students may not discuss homework code in detail
(line-by-line or loop-by-loop) while it is being written or
afterwards.  In general, students should not look at each other's
computer screen (or hand-written or printed assignment design notes)
while working on homework.  As a guideline, if an algorithm is too
complex to describe orally (without dictating line-by-line), then
sharing that algorithm is disallowed by the homework collaboration
policy.
</p>

<li class=DS_LI>
<p class=DS_P>
Students are allowed to ask each other for help in interpreting error
messages and in discussing strategies for testing and finding bugs.
First, ask for help orally, by describing the symptoms of the problem.
For each homework, many students will run into similar problems and
after hearing a general description of a problem, another student
might have suggestions for what to try to further diagnose or fix the
issue.  If that doesn't work, and if the compiler error message or
flawed output is particularly lengthy, it is okay to ask another student
to briefly look at the computer screen to see the details of the error
message and the corresponding line of code.  Please see a TA during office
hours if a more in-depth examination of the code is necessary.
</p>

<li class=DS_LI> 
<p class=DS_P>
Students may not share or copy code or pseudocode.  Homework files or
file excerpts should never be shared electronically (by email, text,
LMS, Dropbox, GitHub, etc.).  Homework solution files from previous years
(either instructor or student solutions) should not be used in any
way.  Students must not leave their code (either electronic or
printed) in publicly-accessible areas.  Students may not share
computers in any way for the duration of this course.  Each
student is responsible for securing their homework materials using all
reasonable precautions.  These precautions include: Students should
password lock the screen when they step away from their computer.
Homework files should only be stored on private accounts/computers
with strong passwords.  Homework notes and printouts should be stored
in a locked drawer/room.
</p>

<li class=DS_LI> 
<p class=DS_P>
The software you write for your Data Structures homework assignments
may never be published in a public repository on GitHub or on any
other software sharing site.  Contributing to open source projects and
publishing personal software projects are excellent ways to
demonstrate your skills to future employers.  We encourage you to join
the Rensselaer Center for Open Source Software (RCOS) and build an
online portfolio of amazing work.  However, your Data Structures
homework assignments may not be part of that portfolio.  Your Data
Structures homework solutions will not impress recruiters.  A strong
semester grade in Data Structures, contributions to open-source
software, independent non-course projects, undergraduate research, and
acing the coding interview will land you a great summer internship!
</p>

<li class=DS_LI> 
<p class=DS_P>
Students may not show their code or pseudocode to other students as a
means of helping them.  Well-meaning homework help or tutoring can
turn into a violation of the homework collaboration policy when
stressed with time constraints from other courses and
responsibilities.  Sometimes good students who feel sorry for
struggling students are tempted to provide them with "just a peek" at
their code.  Such "peeks" often turn into extensive copying, despite
prior claims of good intentions.
</p>


<li class=DS_LI> 
<p class=DS_P>
Students may not receive detailed help on their assignment code or
pseudocode from individuals outside the course.  This restriction
includes tutors, students from prior terms, friends and family
members, internet resources, etc.
</p>

<li class=DS_LI>
<p class=DS_P>
All collaborators (classmates, TAs, ALAC tutors, upperclassmen,
students/instructor via LMS, etc.), and all of the resources (books,
online reference material, etc.) consulted in completing this
assignment must be listed in the README.txt file submitted with the
assignment.
</p>

</ul>



<h2>Homework Plagiarism Detection and Academic Dishonesty Penalty</h2>

<p class=DS_P>
We use an automatic code comparison tool to help spot homework
assignments that have been submitted in violation of these rules.  The
tool takes all assignments from all sections and all prior terms and
compares them, highlighting regions of the code that are similar.  The
plagiarism tool looks at core code structure and is not fooled by
variable and function name changes or addition of comments and
whitespace.
</p>

<p class=DS_P>
The instructor checks flagged pairs of assignments very carefully, to
determine which students may have violated the rules of collaboration
and academic integrity on programming assignments.  When the
instructor believes that an incident of academic dishonesty has
occurred, the involved students are contacted and a meeting is
scheduled.  All students caught cheating on a programming assignment
(both the copier and the provider) will be punished.  <em>For
undergraduate students, the standard punishment for the first offense
is a 0 on the assignment and a full letter grade reduction on the
final semester grade.  Furthermore, students with academic integrity
violations will lose all late days and may not earn additional late
days or early submission assignment extension incentives for future
assignments.</em>  Students whose violations are more flagrant will
receive a higher penalty.  Undergraduate students caught a second time
will receive an immediate F in the course, regardless of
circumstances.  Each incident will be reported to the Dean of
Students.
</p>

<p class=DS_P>
<em>
Graduate students found to be in violation of the academic integrity
policy for homework assignments on the first offense will receive an F
in the course</em> and will be reported both to the Dean of Students and to
the chair of their home department with the strong advisement that
they be ineligible to serve as a teaching assistant for any other
course at RPI.
</p>

<p class=DS_P>
<em>You are not allowed to publicly post or privately share your Data
Structures code even after you complete the course.</em>  If code from
students is ever found in a public repository (e.g., GitHub) or other
online source or if that code matches the code submission of another
student in a later term, all involved students will be reported to the
Dean of Students and the Computer Science Department Head -- even if
they are not currently registered for Data Structures, or not
currently enrolled at RPI, or have graduated from RPI.  The instructor
may file a retroactive change of semester grade with the registrar for
the Data Structures course.  The instructor may also submit a takedown
notice and violation of terms of service or copyright to the website
host of the public repository.  The students will also forfeit any
opportunity for a positive reference or recommendation letter from the
instructor.
</p>


<h2>Academic Dishonesty in the Student Handbook</h2>

<p class=DS_P>
  Refer to the
  <A HREF="https://info.rpi.edu/dean-students/student-rights-responsibilities-and-judicial-affairs">
    The Rensselaer Handbook of Student Rights and Responsibilities </A>
for further discussion of academic dishonesty.  Note that: "Students
found in violation of the academic dishonesty policy are prohibited
from dropping the course in order to avoid the academic penalty."
</p>

<h2>Number of Students Found in Violation of the Policy</h2>

<p class=DS_P>
Historically, 5-10% of students are found to be in violation of the
academic dishonesty policy each semester.  Many of these students
immediately admit to falling behind with the coursework and violating
one or more of the rules above and if it is a minor first-time offense
may receive a reduced penalty.
</p>

<?php include 'template_after.php'; ?>
