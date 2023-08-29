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
<h1>Submini Lecture Polls</h1>
</td>
<td class="right-sidebox">
<div id="side-nav-buttons" class="my_sidebox">
<ul class="sidebox">
<li><a href="syllabus.php" class="nav-row">Syllabus</a></li>
<li><a href="grading.php" class="nav-row">Course Grades</a></li>
<li><a href="lecture_polls.php" class="nav-row syllabus-selected sidebox">Submini Lecture Polls</a></li>
<li><a href="homework_policies.php" class="nav-row">Homework Policies</a></li>
</ul>
</div>
</td>
</table>


<p class=DS_P>
We will use Submitty to collect answers to simple multiple-choice
questions during lecture (Tuesdays & Fridays).  These lecture
participation polls help increase engagement in lectures and allow the
instructor to gauge student understanding & absorption of the
material.  You are encouraged to discuss the questions with the
classmates sitting around you.
</p>

<h2>Participation Incentives</h2>

<p class=DS_P>
Lecture participation polls will not be directly factored into the
semester grade. However, as an incentive for participation and correct
answers to these exercises, students will be able to earn extra
<a href="homework_policies.php">
homework late days</a>.
</p>


<p class=DS_P>
We will generally have 4-6 lecture participation poll questions per lecture.
Participation in a poll question (no correct answer) is worth 1.0
points.  A correct answer on a non-poll question is worth 1.0 points.
An incorrect answer on a non-poll question is worth 0.5 points.  No
answer on either a poll or non-poll question is 0.0 points.
</p>

<p class=DS_P>
After earning your first 15.0 lecture participation points, you will receive
an extra homework late day.  And for every 30.0 lecture participation points after
that you will receive one additional homework late day.  Earned late
days may not be applied to previous homeworks.  You must have earned
the late day before the homework deadline in order to use the late day
on that assignment.  Specifically, if your poll participation during a Friday
lecture earn you a late day, you may not use that late day on the
assignment that was due the night before.
</p>


<h2>Academic Dishonesty</h2>

<p class=DS_P>
Responding to lecture poll questions with another
individual's account
constitutes <a href="academic_integrity.php">academic dishonesty</a>.
If we find anyone submitting answers or using the account of another
individual we will zero the lecture participation points of all
involved students and report the incident to the Dean of Students.
</p>



<?php include 'template_after.php'; ?> 
