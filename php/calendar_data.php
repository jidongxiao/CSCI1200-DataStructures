<?php

/*****************************************************************/
/*****************************************************************/
/*****************************************************************/

function lecturereleased($which)
{

    //if ($which <= 0) return TRUE; return FALSE;

    // -------------------------------------
    // END OF TERM, LEAVE ALL LECTURE HANDOUTS
    // -------------------------------------

    $current_day = date('Y m d H i');
    //                                     YYYY MM DD HH minutes
    if ($which == 1 && $current_day > "2023 01 05 00 00") return TRUE;
    if ($which == 2 && $current_day > "2023 01 12 12 00") return TRUE;
    if ($which == 3 && $current_day > "2023 01 16 12 00") return TRUE;
    if ($which == 4 && $current_day > "2023 01 19 11 00") return TRUE;
    if ($which == 5 && $current_day > "2023 01 23 11 00") return TRUE;
    if ($which == 6 && $current_day > "2023 01 26 11 00") return TRUE;
    if ($which == 7 && $current_day > "2023 01 30 11 00") return TRUE;
    if ($which == 8 && $current_day > "2023 02 02 11 00") return TRUE;
    if ($which == 9 && $current_day > "2023 02 06 11 00") return TRUE;
    if ($which == 10 && $current_day > "2023 02 09 11 00") return TRUE;
    if ($which == 11 && $current_day > "2023 02 13 11 00") return TRUE;
    if ($which == 12 && $current_day > "2023 02 16 11 00") return TRUE;
    if ($which == 13 && $current_day > "2023 02 23 11 00") return TRUE;
    if ($which == 14 && $current_day > "2023 02 27 11 00") return TRUE;
/*
Probably cancel Problem Solving 2, which will make Operators lec 14, and then
leaves us free to not hold lecture on March 3rd (Friday before spring break).
Students like this (good for semester performance review), and lets us grade
Exam 2 a little more quickly, which is good since we're up against the drop
deadline. If we DON'T do this, need to add a new statement
    if ($which == 15 && $current_day > "2023 03 02 12 00") return TRUE;
and renumber everything below 16....28
*/
    if ($which == 15 && $current_day > "2023 03 13 11 00") return TRUE;
    if ($which == 16 && $current_day > "2023 03 16 11 00") return TRUE;
    if ($which == 17 && $current_day > "2023 03 20 11 00") return TRUE;
    if ($which == 18 && $current_day > "2023 03 23 11 00") return TRUE;
    if ($which == 19 && $current_day > "2023 03 27 11 00") return TRUE;
    if ($which == 20 && $current_day > "2023 03 30 11 00") return TRUE;
    if ($which == 21 && $current_day > "2023 04 03 11 00") return TRUE;
    if ($which == 22 && $current_day > "2023 04 06 11 00") return TRUE;
    if ($which == 23 && $current_day > "2023 04 10 11 00") return TRUE;
    if ($which == 24 && $current_day > "2023 04 13 11 00") return TRUE;
    if ($which == 25 && $current_day > "2023 04 17 11 00") return TRUE;
    if ($which == 26 && $current_day > "2023 04 20 11 00") return TRUE;
    if ($which == 27 && $current_day > "2023 04 24 11 00") return TRUE;
    //if ($which ==  26  &&  $current_day > "2022 04 29 12 00") return TRUE;
    return FALSE;
}

function lecturenotesreleased($which)
{

    // -------------------------------------
    // END OF TERM, REMOVE ALL ADDITIONAL LECTURE MATERIALS
//  return false;
    // -------------------------------------

    //if ($which <= 28) return TRUE; return FALSE;
    return lecturereleased($which);
}


function labreleased($which)
{

    // -------------------------------------
    // END OF TERM, LEAVE ALL LAB MATERIALS
    // -------------------------------------

    $current_day = date('Y m d H i');
    //                                     YYYY MM DD HH minutes
    if ($which == 1 && $current_day > "2023 01 10 16 00") return TRUE;
    if ($which == 2 && $current_day > "2023 01 17 16 00") return TRUE;
    if ($which == 3 && $current_day > "2023 01 24 16 00") return TRUE;
    if ($which == 4 && $current_day > "2023 01 31 16 00") return TRUE;
    if ($which == 5 && $current_day > "2023 02 07 16 00") return TRUE;
    if ($which == 6 && $current_day > "2023 02 14 16 00") return TRUE;
    if ($which == 7 && $current_day > "2023 02 21 16 00") return TRUE;
    if ($which == 8 && $current_day > "2023 02 28 16 00") return TRUE;
    if ($which == 9 && $current_day > "2023 03 14 16 00") return TRUE;
    if ($which == 10 && $current_day > "2023 03 28 16 00") return TRUE;
    if ($which == 11 && $current_day > "2023 04 04 16 00") return TRUE;
    if ($which == 12 && $current_day > "2023 04 11 16 00") return TRUE;
    if ($which == 13 && $current_day > "2023 04 17 16 00") return TRUE;
    if ($which == 14 && $current_day > "2023 04 25 16 00") return TRUE;
    return FALSE;
}

function labsolutionsreleased($which)
{
    // -------------------------------------
    // END OF TERM, REMOVE ALL LAB SOLUTIONS
    return false;
    // -------------------------------------

    if ($which <= 0) return TRUE;
    return FALSE;
}


function homeworkreleased($which)
{

    // -------------------------------------
    // END OF TERM, LEAVE ALL HOMEWORK ASSIGNMENTS
    // -------------------------------------

    $current_day = date('Y m d H i');
//		print "THING ".$which." ".$current_day;

    if ($which == 1 && $current_day > "2023 01 13 10 00") return TRUE;
    if ($which == 2 && $current_day > "2023 01 20 10 00") return TRUE;
    if ($which == 3 && $current_day > "2023 02 03 10 00") return TRUE;
    if ($which == 4 && $current_day > "2023 02 10 10 00") return TRUE;
    if ($which == 5 && $current_day > "2023 02 17 10 00") return TRUE;
    if ($which == 6 && $current_day > "2023 03 03 10 00") return TRUE;
    if ($which == 7 && $current_day > "2023 03 17 10 00") return TRUE;
    if ($which == 8 && $current_day > "2023 03 24 10 00") return TRUE;
    if ($which == 9 && $current_day > "2023 04 07 10 00") return TRUE;
    if ($which == 10 && $current_day > "2023 04 14 10 00") return TRUE;

    return false;

}

function homeworksolutionsreleased($which)
{

    if ($which <= 0) return TRUE;
    return FALSE;
}


function reviewproblemsreleased($which)
{

    // -------------------------------------
    // END OF TERM, REMOVE ALL TEST REVIEW MATERIALS
//    return false;
    // -------------------------------------

    $current_day = date('Y m d H i');
//		print "THING ".$which." ".$current_day;

    if ($which == 1 && $current_day > "2023 01 27 10 00") return TRUE;
    if ($which == 2 && $current_day > "2023 02 24 10 00") return TRUE;
    if ($which == 3 && $current_day > "2023 03 31 10 00") return TRUE;
    if ($which == 4 && $current_day > "2023 04 21 10 00") return TRUE;

//  if ($which <= 4) return TRUE; return FALSE;
    return false;
}


/*
We don't usually make use of this anymore, because we just post the review
solutions on Submitty under Course Materials.
*/
function reviewsolutionsreleased($which)
{

    // -------------------------------------
    // END OF TERM, REMOVE ALL TEST REVIEW MATERIALS
    return false;
    // -------------------------------------

    if ($which <= 4) return TRUE;
    return FALSE;
}

/*
We don't usually make use of this anymore, because we just post the test
solutions on Submitty under Course Materials.
*/
function testsolutionsreleased($which)
{

    // -------------------------------------
    // END OF TERM, REMOVE ALL TEST REVIEW MATERIALS
    return false;
    // -------------------------------------

    if ($which <= 3) return TRUE;
    return FALSE;
}


/*****************************************************************/

function makelink($directory, $file, $text = "", $note = "")
{
    if (isset($text) && $text != "") {
        if (isset($note)) {
            print '<a style="text-decoration:underline" href="' . $directory . $file . '">' . $text . '</a> <em>' . $note . '</em><br>';
        } else {
            print '<a style="text-decoration:underline" href="' . $directory . $file . '">' . $text . '</a><br>';
        }
    } else if (isset($text) && $text == "") {
        if (isset($note)) {
            print '<a style="text-decoration:underline" href="' . $directory . $file . '">' . $file . '</a> <em>' . $note . '</em><br>';
        } else {
            print '<a style="text-decoration:underline" href="' . $directory . $file . '">' . $file . '</a><br>';
        }
    } else {
        print '<a style="text-decoration:underline" href="' . $directory . $file . '">' . $file . '</a><br>';
    }
}


function makelink2($link, $text)
{
    print '<a style="text-decoration:underline" href=' . $link . '>' . $text . '</a><br>';
}

function video($link, $text)
{
	print "";
    /*if ($link == "") {
        print '<br><em>live</em>:&nbsp;<i class="fas fa-video-slash"></i>&nbsp;' . $text . '</a><br>';
    } else {
        print '<br><a style="text-decoration:underline" href=' . $link . '><i class="fas fa-video"></i>&nbsp;' . $text . '</a><br>';
    }*/
}

function old_video($link, $text)
{
    //print "";
    print '<br><a style="color:#008844;text-decoration-color:#008844;text-decoration:underline" href=' . $link . '><i class="fas fa-video"></i>&nbsp;2020 ' . $text . '</a>';
}

/*****************************************************************/
/*****************************************************************/
/*****************************************************************/


function lecturename($which)
{
    //if      ($which == 1)  return "Introduction to C++"; //<br>& Install Fest";
    if ($which == 1) return "Introduction to C++ & Strings";
    else if ($which == 2) return "Strings & Vectors";
    else if ($which == 3) return "C++ Classes, part 1";
    else if ($which == 4) return "C++ Classes, part 2";
    else if ($which == 5) return "Pointers and Arrays";
    else if ($which == 6) return "Dynamic Memory";
    else if ($which == 7) return "Big O Notation & Basic Recursion";
    else if ($which == 8) return "Vector Implementation";
    else if ($which == 9) return "Iterators & STL Lists";
    else if ($which == 10) return "Iterators & Linked Lists";
    else if ($which == 11) return "Doubly Linked Lists & List Implementation";
    else if ($which == 12) return "Advanced Recursion";
    else if ($which == 13) return "Problem Solving, part 1";
    //else if ($which == 14) return "Problem Solving, part 2";
    else if ($which == 14) return "Operators";
    else if ($which == 15) return "Associative Containers, part 1";
    else if ($which == 16) return "Associative Containers, part 2";
    else if ($which == 17) return "Trees, part 1";
    else if ($which == 18) return "Trees, part 2";
    else if ($which == 19) return "Trees, part 3";
    //else if ($which == 21) return "Trees, part 4";
    else if ($which == 20) return "Hash Tables, part 1";
    else if ($which == 21) return "Hash Tables, part 2";
    else if ($which == 22) return "Priority Queues";
    else if ($which == 23) return "Hybrid / Variant Data Structures";
    else if ($which == 24) return "C++ Exceptions";
    else if ($which == 25) return "Garbage Collection & Smart Pointers";
    else if ($which == 26) return "Inheritance & Polymorphism";
    else if ($which == 27) return "Concurrency & Asynchronous Computing";
    else                   return "UNKNOWN LECTURE " . $which;
}


function lectureurl($which)
{
    if ($which == 1) return "lectures/01_introduction.pdf";
    else if ($which == 2) return "lectures/02_strings_vectors.pdf";
    else if ($which == 3) return "lectures/03_classes_I.pdf";
    else if ($which == 4) return "lectures/04_classes_II.pdf";
    else if ($which == 5) return "lectures/05_pointers.pdf";
    else if ($which == 6) return "lectures/06_memory.pdf";
    else if ($which == 7) return "lectures/07_order_notation_recursion.pdf";
    else if ($which == 8) return "lectures/08_vector_implementation.pdf";
    else if ($which == 9) return "lectures/09_lists_and_iterators.pdf";
    else if ($which == 10) return "lectures/10_linked_lists.pdf";
    else if ($which == 11) return "lectures/11_list_implementation.pdf";
    else if ($which == 12) return "lectures/12_advanced_recursion.pdf";
    else if ($which == 13) return "lectures/13_problem_solving_I.pdf";
    //else if ($which == 14) return "lectures/14_problem_solving_II.pdf";
    else if ($which == 14) return "lectures/14_operators.pdf";
    else if ($which == 15) return "lectures/15_maps_I.pdf";
    else if ($which == 16) return "lectures/16_maps_II.pdf";
    else if ($which == 17) return "lectures/17_trees_I.pdf";
    else if ($which == 18) return "lectures/18_trees_II.pdf";
    else if ($which == 19) return "lectures/19_trees_III.pdf";
    //else if ($which == 21) return "lectures/21_trees_IV.pdf";
    else if ($which == 20) return "lectures/20_hash_tables_I.pdf";
    else if ($which == 21) return "lectures/21_hash_tables_II_priority_queues_I.pdf";
    else if ($which == 22) return "lectures/22_priority_queues_II.pdf";
    else if ($which == 23) return "lectures/23_hybrid_data_structures.pdf";
    else if ($which == 24) return "lectures/24_exceptions.pdf";
    else if ($which == 25) return "lectures/25_garbage_collection.pdf";
    else if ($which == 26) return "lectures/26_inheritance.pdf";
    else if ($which == 27) return "lectures/27_concurrency.pdf";

    else                   return "UNKNOWN LECTURE " . $which;
}


function makelecturehelper($which)
{
    if (lecturereleased($which)) {
        print '<a style="text-decoration:underline" href=' . lectureurl($which) . '>';
    }
    print 'Lecture ' . $which . ':<br>' . lecturename($which);
    if (lecturereleased($which)) {
        print '</a>';
    }

    if (lecturenotesreleased($which)) {
        print '<p class=DS_P><em>';
        if ($which == 1) {
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/2c4c8d17c3044705aed620191c14a7741d", "Lecture&nbsp;1 (Covers our Lec 1 & 2)");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/2b0f98a358ba4b3493b7af1c07ed72ad1d", "FALL 2020 (be careful!) Syllabus Q&A");
        } else if ($which == 2) {
            makelink("lectures/", "framed_diagonal.cpp");
        } else if ($which == 3) {
            makelink("lectures/", "date_main.cpp");
            makelink("lectures/", "date.h");
            makelink("lectures/", "date.cpp");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/0a852d9f558b4996ae68e3a1a13301b01d", "Lecture&nbsp;2 (Our Lec 3)");
            //old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/392d5e6aacdc4634a7122775e6dfcb3e1d", "Fall 2020 FAQ and Q&A");
        } else if ($which == 4) {
            makelink("lectures/", "students.txt");
            makelink("lectures/", "student.h");
            makelink("lectures/", "student.cpp");
            makelink("lectures/", "student_main.cpp");
            makelink("lectures/", "stats.h");
            makelink("lectures/", "stats.cpp");
            makelink("lectures/", "name.h", "");
            makelink("lectures/", "name.cpp", "");
            makelink("lectures/", "name_main.cpp");
            makelink("lectures/", "assert_demo.cpp");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/0e7d75f3f21f4385a8933a0c3617bb071d", "Lecture&nbsp;3 (Our Lec 4)");

        } else if ($which == 5) {
 			old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/842f2171ae6f4e72930f9caca7a5b6a41d", "Lecture 4A: Pointers");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/9033565fcc2c4cf387d17efe51894ad41d", "Lecture 4B: Pointer Arithmetic & Arrays");
        } else if ($which == 6) {
 			old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/7f650508d4274b8db1f114f3e8e4afe01d", "Lecture 5A: Dynamic Memory Intro");
            old_video("https://mediasite.mms.rpi.edu/mediasite/Channel/rpi_csci_1200_data_structures/watch/f1e2518ed2b0473b992550a01643cc141d", "Lecture 5B: Dynamic Memory Examples");
			print("<br>");
			makelink("lectures/", "f23_scrap.cpp", "DCC 308 notes");
        } else if ($which == 7) {
            //makelink("lectures/", "buggy.cpp");
            
            //After lecture
            /*
            makelink("lectures/", "binsearch.cpp");
            */
			print("<br>");
			old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/80abdcccee834d0ba4a5ed6af952325a1d", "Lecture 7A: Algorithm Analysis Introduction");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/ec256d8a7750496ca66db24002df08681d", "Lecture 7B: Basic Recursion (we may finish in Lecture 12)");
        } else if ($which == 8) {
            makelink("lectures/", "vec.h");
            makelink("lectures/", "vec_xiao.h");
            makelink("lectures/", "vec_main.cpp");
            //After lecture
            //makelink("lectures/", "vec_sol.h"); //Includes erase(), but we aren't writing erase() during lab 5 anyway.
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/2374e7449a5542ffb05ee2fad637c8251d", "Lecture 6A: Vec Implementation");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/9996be03deef4425a70bb551207b1a9c1d", "Lecture 6B: Vec Implementation");
            
        } else if ($which == 9) {
            makelink("lectures/", "classlist_ORIGINAL.cpp");
            makelink("lectures/", "data.txt");
            //After lecture
            //makelink("lectures/", "classlist_ITER.cpp");
            //makelink("lectures/", "classlist_LIST.cpp");
            //makelink("lectures/","lec_9_notes.cpp");		  // Uncomment after Lec 10 release
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/6087b00fdd544f3aab2872837841021e1d", "Lecture 8A: Iterator & STL List");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/44411e37d1314b6ba8c78652b84871481d", "Lecture 8B: Example of List & Iterator");
           
        } else if ($which == 10) {
            //makelink("lectures/", "lec10_ex.cpp");
            //After lecture
            /*
            makelink("lectures/", "lec10_ex_more.cpp");
            */
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/49b8d53093394e079da084f5aaf577851d", "Lecture 9A: Iterators continued");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/4af59ddcde814a16bb6263758df1b4251d", "Lecture 9B: Singly-Linked Lists");
            
        } else if ($which == 11) {
            makelink("lectures/", "dslist_handout.h");
            //After lecture

            makelink("lectures/", "list.h");
            makelink("lectures/", "list_main.cpp");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/839a5040044148f29f1028835826f2b91d", "Lecture 10A: doubly-linked lists");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/a3dbd287b2f74f6785aae622726a4e671d", "Lecture 10B: dslist implementation");
        } else if ($which == 12) {
            makelink("lectures/", "letters.txt");
            //After lecture
            //makelink("lectures/", "binsearch.cpp", "", "Same as Lecture 7 version");
            makelink("lectures/", "binsearch.cpp");
            makelink("lectures/", "merge_sol.cpp");
            makelink("lectures/", "word_search_sol.cpp");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/0e73374e45c64b06867335f09518683b1d", "Lecture 11: Advanced Recursion");
        } else if ($which == 13) {
            //makelink2("https://www.cs.rpi.edu/academics/courses/fall20/csci1200/lectures/13_problem_solving_II.pdf","Fall 2020 Problem Solving Part 2 PDF");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/33f5f84ee8e946e49cce016a491105941d","Lecture 12: Problem Solving I");
            //old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/de9be8276d864731a8cc7ac8b65262741d","Lecture 13: Problem Solving II");
        } else if ($which == 14) {
            makelink("lectures/", "complex_lec.cpp");
            makelink("lectures/", "complex_lec.h");
            //After lecture
            makelink("lectures/","concatenation_array.cpp");
            //makelink("lectures/","merge_intervals.cpp");
            makelink("lectures/","boomerang.cpp");
            makelink("lectures/","square.cpp");
            //makelink("lectures/","complex_soln.cpp");
            //makelink("lectures/","complex_soln.h");
			print("<br>");
           old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/e1d3346022214c908bcd0302ce5c085d1d", "Lecture 14: Operators & Friends");
        } else if ($which == 15) {
            makelink("lectures/", "word_count.cpp");

            //After lecture
            makelink("lectures/","search_demo.cpp");
            //makelink("lectures/","word_count_sol.cpp");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/7e617cf2376840fcb08b1baaab5ff8d11d", "Lecture 15: Maps, part 1");
	} else if ($which == 16) {
		makelink("lectures/","stl_sets.pdf","stl_sets.pdf","For HW7");
            //After lecture
            makelink("lectures/","two_sum.cpp");
            makelink("lectures/","word_pattern.cpp");
            //makelink("lectures/","odd_count.cpp");
            makelink("lectures/","coursegrades.cpp");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/f6640d49157046eea1b391e4d16f364f1d", "Lecture 16: Maps, part 2");
        } else if ($which == 17) {
            makelink("lectures/", "ds_set_starter.h"); ///Before lecture
            //After lecture
            makelink("lectures/","ds_set_lec17.h"); ///After lecture
            makelink("lectures/","lec17_exercises.cpp"); ///After lecture
            makelink("lectures/","unique_occurences.cpp"); ///After lecture
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/c90d9578adc54db0b93f914275c7af4a1d", "Lecture 17: Trees, part 1");

            //print("<br><br>(Optional) Old Bonus Lecture<br>");
            //makelink2("https://www.cs.rpi.edu/academics/courses/fall21/csci1200/lectures/drmemoryuncovered.pdf", "Dr Memory Slides");
            //old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/efe35ac83339417a9a49126b9528b0061d", "Dr. Memory Uncovered");
        } else if ($which == 18) {
            makelink("lectures/", "ds_set_lec18_starter.h"); ///Before lecture
            makelink("lectures/","ds_set_lec18_moresoln.h"); //After lecture
            makelink("lectures/","bst_search.cpp"); //After lecture
            makelink("lectures/","bst_insert.cpp"); //After lecture
            //makelink("lectures/","lec18_split_solutions.pdf"); //After lecture
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/3105f1fe8fc6402b8a95e959a17c61511d", "Lecture 18: Trees, part 2 (Our Lec 18)");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/bfeaa816db6c40f29b5938b1fe68b0791d", "Lecture 19: Trees, part 3 (also Our Lec 18)");
			print("<br>");
			print("<br>");
            makelink("", "https://mediasite.mms.rpi.edu/mediasite/Play/e159b3c64b8047618fdefa9c4d489fd81d", "HW8 Meeting Recording");
        } else if ($which == 19) {
            //After lecture
            makelink("lectures/","ds_set_soln.h"); ///After lecture
            makelink("lectures/","breadth_first_search.cpp"); ///After lecture
            makelink("lectures/","erase_node.cpp"); ///After lecture
            makelink("lectures/","height.cpp"); ///After lecture
            makelink("lectures/","shortest_path.cpp"); ///After lecture
            //makelink("lectures/","ds_set_soln.h"); ///After lecture
            //makelink("lectures/","lec19_ex1.cpp"); ///After lecture
            //makelink("lectures/","lec19_ex2.cpp"); ///After lecture
            //makelink("lectures/","bfs_code.cpp"); ///After lecture 
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/65124520994a41e288a3eb23e214f8791d", "Lecture 20: Trees, part 4 (Our Lec 19)");           
        } else if ($which == 20) {
            makelink("lectures/", "google_interview.txt");
            makelink("lectures/", "ds_hashset_start.h");
            //After lecture
            makelink("lectures/","hash_phonebook_code.cpp"); 
            makelink("lectures/","two_sum_hash_table.cpp"); 
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/39372c0a188d4d34a1419e596deaa57a1d", "Lecture 22: Hash Tables, part 1 (Our Lec 20)");           
        } else if ($which == 21) {
            //makelink("lectures/","stacksnqueues.cpp");
            //makelink("lectures/","ds_hashset_soln.h","","Added after Lab 11"); //After lec only if we're not doing this in lab, otherwise pop this up after lab on hash tables      
			print("<br>");      
            //After lecture
            makelink("lectures/","most_freq_subtree_sum.cpp");
            makelink("lectures/","max_average_subarray.cpp");
            makelink("lectures/","rearrange_words_in_a_sentence.cpp");
            makelink("lectures/","good_substrings_of_size_3.cpp");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/0a0f7d9e12444b548cdf7de38d9b77c51d", "Lecture 23: Hash Tables, part 2 (Our Lec 21");
        } else if ($which == 22) {
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/63c91484d96646b2bc6fd1cfa2dc93d61d", "Lecture 25: Priority Queues (Our Lec 22)");
        } else if ($which == 23) {
            makelink("lectures/","queue_using_stacks.cpp");
            makelink("lectures/","stack_using_queues.cpp");
            makelink("lectures/","trie.cpp");
			print("<br>");      
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/af0ad643f4e84862ad689d84306f4e211d", "Lecture 21: Hybrid / Variant Data Structures (Our Lec 23)");
        } else if ($which == 24) {
            makelink("lectures/","longest_common_prefix.cpp");
            makelink("lectures/","reverse_integer.cpp");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/4538503dbe074122b17f0637995f69ec1d", "Lecture 26: Exceptions");
        } else if ($which == 25) {
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/7c619d2b57e44f4d8d7b311bdbcc25711d", "Lecture 27: Garbage Collection & Smart Pointers");
        } else if ($which == 26) {
            makelink("lectures/", "virtual_inheritance_nesting_dolls.pdf");
			print("<br>");
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/ae92bf4c25804db894df18676159d4661d", "Lecture 24: (not our) HW9 Discussion & Inheritance");
        } else if ($which == 27) {
            old_video("https://mediasite.mms.rpi.edu/Mediasite5/Channel/rpi_csci_1200_data_structures/watch/22ee6f5d2b2d4fa9a63b2bacc7696b291d", "Lecture 28: Concurrency & Asynchronous Computing");
        } /*else if ($which == 28) {
        }*/


        //print '</em>';
    }
    /*if ($which == 0) {
      print '<br><b>Location:DCC 308<br>Time: 6-7:50pm</b>';
    }*/
}

/*****************************************************************/
/*****************************************************************/
/*****************************************************************/

function labname($which)
{
    if ($which == 1) return "C++ Development, & Strings";
    else if ($which == 2) return "Classes";
    else if ($which == 3) return "Debugging with the Command Line Debugger";
    //else if ($which == 4)  return "Vector Implementation & Memory Debugging";
    else if ($which == 4) return "Memory Diagramming and Debugging";
    else if ($which == 5) return "Vector Implementation";
    else if ($which == 6)  return "Reversing Data: STL Vectors vs. STL Lists";
    else if ($which == 7) return "List Implementation";
    else if ($which == 8) return "Recursion";
    //else if ($which == 8) return "Operators";
    else if ($which == 9) return "Maps";
    //else if ($which == 9) return "Binary Search Trees &<br> Tree Implementation, part 1";
    //else if ($which == 10) return "Tree Implementation, part 2";
    else if ($which == 10) return "Tree Implementation";
    else if ($which == 11) return "Hash Tables";
    //else if ($which == 11) return "Operators";
    //else if ($which == 13) return "Big O Notation & Performance";
    else if ($which == 12) return "Priority Queues";
    else if ($which == 13) return "Garbage Collection & Smart Pointers";
    else if ($which == 14) return "Multiple Inheritance & Exceptions";
    else                   return "UNKNOWN LAB " . $which;
}

function laburl($which)
{
    if ($which == 1) return "labs/01_getting_started/";
    else if ($which == 2) return "labs/02_classes/";
    else if ($which == 3) return "labs/03_debugging/";
    else if ($which == 4) return "labs/04_memory_debugging/";
    else if ($which == 5) return "labs/05_vectors/";
    else if ($which == 6)  return "labs/06_lists_iterators/";
    else if ($which == 7) return "labs/07_list_implementation/";
    else if ($which == 8) return "labs/08_recursion/";
    //else if ($which == 8)  return "labs/08_operators/";
    else if ($which == 9) return "labs/09_maps/";
    //else if ($which == 9) return "labs/09_trees_I/";
    else if ($which == 10) return "labs/10_trees_I/";
    //else if ($which == 10) return "labs/10_trees_II/";
    //else if ($which == 11) return "labs/11_operators/";
    else if ($which == 11) return "labs/11_hash_tables/";
    //else if ($which == 13) return "labs/13_big_o_notation/";
    else if ($which == 12) return "labs/12_priority_queues/";
    else if ($which == 13) return "labs/13_smart_memory/";
    else if ($which == 14) return "labs/14_exceptions_inheritance/";
    else                   return "UNKNOWN LAB " . $which;
}

function makelabhelper($which)
{
    if (labreleased($which)) {
        print '<a style="text-decoration:underline" href="' . laburl($which) . 'lab_post.pdf">';
    }
    //if (labreleased($which) && $which != 9) { print '<a style="text-decoration:underline" href="'.laburl($which).'lab_post.pdf">'; }
    //if (labreleased($which) && $which == 9) { print '<a style="text-decoration:underline" href="'.laburl($which).'lab_post_real.pdf">'; }
    print 'Lab ' . $which . ':<br>' . labname($which);
    if (labreleased($which)) {
        print '</a>';
    }
    print '<p class=DS_P>';

    if (labreleased($which)) {
        if ($which == 1) {
            print '<br>';
            makelink(laburl($which), "quadratic.cpp");
            makelink(laburl($which), "README.txt");
        } else if ($which == 2) {
            print '<br>';
            makelink(laburl($which), "main.cpp");
        } else if ($which == 3) {
            print("<br>");
            makelink(laburl($which), "point.h");
            makelink(laburl($which), "point.cpp");
            makelink(laburl($which), "line.h");
            makelink(laburl($which), "line.cpp");
            makelink(laburl($which), "roads.cpp");

            makelink(laburl($which), "input_a.txt");
            makelink(laburl($which), "input_b.txt");
            makelink(laburl($which), "input_c.txt");
            makelink(laburl($which), "input_d.txt");

            /*  if (labsolutionsreleased($which)) {
                    print("<br>");
                    makelink("https://submitty.cs.rpi.edu/courses/s21/csci1200/display_file?dir=course_materials&path=%2Fvar%2Flocal%2Fsubmitty%2Fcourses%2Ff20%2Fcsci1200%2Fuploads%2Fcourse_materials%2Flabs%2F03_pointers_and_debugging%2Fdiagram.cpp","","Checkpoint 1 Problems - diagram.cpp");
                    makelink("https://submitty.cs.rpi.edu/courses/s21/csci1200/display_file?dir=course_materials&path=%2Fvar%2Flocal%2Fsubmitty%2Fcourses%2Ff20%2Fcsci1200%2Fuploads%2Fcourse_materials%2Flabs%2F03_pointers_and_debugging%2Fdiagram.pdf","","Checkpoint 1 Solutions - diagram.pdf");
            }*/


        } else if ($which == 4) {
            makelink(laburl($which), "buggy_lab4.cpp");
            makelink(laburl($which), "first.txt");
            makelink(laburl($which), "middle.txt");
            makelink(laburl($which), "last.txt");
            //print("<br>");
            //makelink(laburl($which),"vec.h");
            //makelink(laburl($which),"test_vec.cpp");

        } else if ($which == 5) {
            makelink(laburl($which), "vec.h");
            makelink(laburl($which), "test_vec.cpp");
        } else if ($which == 6) {
            makelink(laburl($which),"checkpoint1.cpp");
            makelink(laburl($which),"checkpoint3.cpp");
        } else if ($which == 7) {
            makelink(laburl($which), "dslist.h", "dslist.h (partial)");
            makelink(laburl($which), "checkpoint1.cpp");
            makelink(laburl($which), "checkpoint2.cpp");
        } else if ($which == 8) {
            makelink(laburl($which), "grid1.txt");
            makelink(laburl($which), "grid2.txt");
            makelink(laburl($which), "grid3.txt");
            makelink(laburl($which), "grid4.txt");
            makelink(laburl($which), "start.cpp", "", "");
/*        } else if ($which == 8) {
            // operators lab
            makelink(laburl($which),"main_checkpoint_1_and_2.cpp");

            //makelink(laburl($which), "phonebook.cpp");
*/
        } else if ($which == 9) {
            makelink(laburl($which), "phonebook.cpp");

        } else if ($which == 10) {

            makelink(laburl($which), "ds_set.h");
            makelink(laburl($which), "test_ds_set.cpp");


        } else if ($which == 11) {

            makelink(laburl($which),"ds_hashset.h");
            makelink(laburl($which),"test_ds_hashset.cpp");

            // operators lab
            //makelink(laburl($which), "main_checkpoint_1_and_2.cpp");

        } else if ($which == 12) {
            //makelink(laburl($which), "heapsort.cpp");
            makelink(laburl($which),"priority_queue.h");
            makelink(laburl($which),"test_pq.cpp");



        } else if ($which == 13) {

            makelink(laburl($which), "stop_and_copy.h");
            makelink(laburl($which), "stop_and_copy.cpp");
            makelink(laburl($which), "main_stop_and_copy.cpp");
            makelink(laburl($which), "ds_smart_pointers.h");
            makelink(laburl($which), "main_smart_pointers.cpp");

            //makelink(laburl($which),"performance.cpp");
//      makelink(laburl($which),"generate_input.cpp");
            //     makelink(laburl($which),"test_input.txt");
            //   makelink(laburl($which),"test_sort.txt");
            // makelink(laburl($which),"test_mode.txt");
            //     m//akelink(laburl($which),"test_remove_dups.txt");

//
//      makelink(laburl($which),"ds_hashset.h");
//      makelink(laburl($which),"test_ds_hashset.cpp");
            //makelink(laburl($which),"heapsort.cpp");

        } else if ($which == 14) {
            makelink(laburl($which), "input.txt");
            makelink(laburl($which), "simple_main.cpp");
            makelink(laburl($which), "utilities.h");
            makelink(laburl($which), "simple.txt");
            makelink(laburl($which), "output_simple.txt");
        }
    }


    if (labsolutionsreleased($which)) {
        if ($which == 1) {
        } else if ($which == 2) {
        } else if ($which == 3) {
        } else if ($which == 4) {
        } else if ($which == 5) {
        } else if ($which == 6) {
        } else if ($which == 7) {
            print '<p class=DS_P><em>solutions:<br>';
            makelink(laburl($which), "dslist_soln.h");
            print '</em>';
        } else if ($which == 8) {
        } else if ($which == 9) {
        } else if ($which == 10) {
        } else if ($which == 11) {
//      print '<p class=DS_P><em>solutions:<br>';
            //     makelink(laburl($which),"ds_hashset_soln.h");
            //    print '</em>';
        } else if ($which == 12) {
        } else if ($which == 13) {
        } else if ($which == 14) {
        }
    }
}

/*****************************************************************/
/*****************************************************************/
/*****************************************************************/

function homeworkname($which)
{
    if ($which == 1) return "Text Justification";
    else if ($which == 2) return "Hockey Classes";
    else if ($which == 3) return "Matrix Class";
    else if ($which == 4) return "Tool Rental Lists";
    else if ($which == 5) return "Linked Train Cars";
    else if ($which == 6) return "Inverse Word Search";
    else if ($which == 7) return "Smash Frames";
    else if ($which == 8) return "B+ Trees";
    else if ($which == 9) return "Miniblast Hash Maps";
    else if ($which == 10) return "Distance Fields & Priority Queues";
    else                   return "UNKNOWN HOMEWORK " . $which;
}

function homeworkurl($which)
{
    if ($which == 1) return "hw/01_text_justification/";
    else if ($which == 2) return "hw/02_hockey_classes/";
    else if ($which == 3) return "hw/03_matrix_class/";
    else if ($which == 4) return "hw/04_tool_rental/";
    else if ($which == 5) return "hw/05_linked_train_cars/";
    else if ($which == 6) return "hw/06_word_search/";
    else if ($which == 7) return "hw/07_smash_frames/";
    else if ($which == 8) return "hw/08_bplus_trees/";
    else if ($which == 9) return "hw/09_miniblast_hash/";
    else if ($which == 10) return "hw/10_level_sets/";
    else                   return "UNKNOWN HOMEWORK " . $which;
}

function homeworksolutionsurl($which)
{
    return preg_replace('/hw/', 'hw_solns', homeworkurl($which));
}


function makehomeworkhelper($which)
{
    //$current_day = date('Y m d H i');

    //print $current_day;

    if (homeworkreleased($which)) {
        print '<a style="text-decoration:underline" href="' . homeworkurl($which) . 'hw.pdf">';
    }
    if (homeworkreleased($which)) {
        print 'Homework ' . $which . ':<br>' . homeworkname($which);
    } else {
        print 'Homework ' . $which;
    }
    if (homeworkreleased($which)) {
        print '</a>';
        /*if ($which == 7) {
            //print '<em> update 10/28</em>';
        }*/
    }
    print '<br>due @ 11:59pm<p class=DS_P>';

    if (homeworkreleased($which)) {
        makelink(homeworkurl($which), "README.txt");
        if ($which == 1) {
            makelink(homeworkurl($which), "example.txt");
            makelink(homeworkurl($which), "gettysburg_address.txt");
            makelink(homeworkurl($which), "long_word.txt");
            makelink(homeworkurl($which), "example_16_flush_left.txt");
            makelink(homeworkurl($which), "example_16_flush_right.txt");
            makelink(homeworkurl($which), "example_16_full_justify.txt");
            makelink(homeworkurl($which), "gettysburg_address_70_flush_left.txt");
            makelink(homeworkurl($which), "gettysburg_address_70_flush_right.txt");
            makelink(homeworkurl($which), "gettysburg_address_70_full_justify.txt");
            makelink(homeworkurl($which), "long_word_15_full_justify.txt");
        } else if ($which == 2) {
            makelink(homeworkurl($which), "no_penalties_or_overtime.txt");
            makelink(homeworkurl($which), "no_penalties_or_overtime_output.txt");
            makelink(homeworkurl($which), "2012_small.txt");
            makelink(homeworkurl($which), "2012_small_output.txt");
            makelink(homeworkurl($which), "2012_ecac.txt");
            makelink(homeworkurl($which), "2012_ecac_output.txt");
            makelink(homeworkurl($which), "2012_all.txt");
            makelink(homeworkurl($which), "2011_all.txt");
        } else if ($which == 3) {
            makelink(homeworkurl($which), "matrix_main.cpp");
            makelink(homeworkurl($which), "sample_output.txt");
        } else if ($which == 4) {
			makelink(homeworkurl($which), "inventory_small.txt");
			makelink(homeworkurl($which), "customer_small.txt");
			makelink(homeworkurl($which), "output_inventory_small.txt");
			makelink(homeworkurl($which), "output_customer_small.txt");
			makelink(homeworkurl($which), "inventory_medium.txt");
			makelink(homeworkurl($which), "customer_medium.txt");
			makelink(homeworkurl($which), "output_inventory_medium.txt");
			makelink(homeworkurl($which), "output_customer_medium.txt");
			makelink(homeworkurl($which), "inventory_large.txt");
			makelink(homeworkurl($which), "customer_large.txt");
			makelink(homeworkurl($which), "output_inventory_large.txt");
			makelink(homeworkurl($which), "output_customer_large.txt");
        } else if ($which == 5) {
			makelink(homeworkurl($which), "main.cpp");
			makelink(homeworkurl($which), "traincar.h");
			makelink(homeworkurl($which), "traincar.cpp");
			makelink(homeworkurl($which), "traincar_prototypes.h");
			makelink(homeworkurl($which), "sample_output.txt");
			makelink(homeworkurl($which), "mtrand.h");
			makelink(homeworkurl($which), "mtrand.cpp");
        } else if ($which == 6) {
			makelink(homeworkurl($which), "puzzle1.txt");
			makelink(homeworkurl($which), "puzzle2.txt");
			makelink(homeworkurl($which), "puzzle3.txt");
			makelink(homeworkurl($which), "puzzle4.txt");
			makelink(homeworkurl($which), "puzzle5.txt");
			makelink(homeworkurl($which), "puzzle6.txt");
			makelink(homeworkurl($which), "puzzle7.txt");
			makelink(homeworkurl($which), "puzzle8.txt");
			makelink(homeworkurl($which), "out1_onesol.txt");
			makelink(homeworkurl($which), "out1.txt");
			makelink(homeworkurl($which), "out2.txt");
			makelink(homeworkurl($which), "out3.txt");
			makelink(homeworkurl($which), "out4.txt");
			makelink(homeworkurl($which), "out5.txt");
			makelink(homeworkurl($which), "out6.txt");
			makelink(homeworkurl($which), "out7.txt");
			makelink(homeworkurl($which), "out8.txt");
        } else if ($which == 7) {
			makelink(homeworkurl($which), "main.cpp");
			makelink(homeworkurl($which), "mini_ult_frame_data.txt");
			makelink(homeworkurl($which), "large_ult_frame_data.txt");
			makelink(homeworkurl($which), "queries1_mini.txt");
			makelink(homeworkurl($which), "queries1_large.txt");
			makelink(homeworkurl($which), "queries2_mini.txt");
			makelink(homeworkurl($which), "queries2_large.txt");
			makelink(homeworkurl($which), "output1_mini.txt");
			makelink(homeworkurl($which), "output1_large.txt");
			makelink(homeworkurl($which), "output2_mini.txt");
			makelink(homeworkurl($which), "output2_large.txt");
        } else if ($which == 8) {
			makelink(homeworkurl($which), "hw8_test.cpp");
			makelink(homeworkurl($which), "BPlusTree.h");
			makelink(homeworkurl($which), "output_all.txt");
        } else if ($which == 9) {
			makelink(homeworkurl($which), "input_small.txt");
			makelink(homeworkurl($which), "output_small.txt");
			makelink(homeworkurl($which), "genome_small.txt");
			makelink(homeworkurl($which), "input_medium.txt");
			makelink(homeworkurl($which), "output_medium.txt");
			makelink(homeworkurl($which), "genome_medium.txt");
			makelink(homeworkurl($which), "genome_large.txt");
			makelink(homeworkurl($which), "input_large.txt");
			makelink(homeworkurl($which), "genome_larger.txt");
			makelink(homeworkurl($which), "input_larger.txt");
        } else if ($which == 10) {
			makelink(homeworkurl($which), "data_structures_300x300.ppm");
			makelink(homeworkurl($which), "dots_1000x1000.ppm");
			makelink(homeworkurl($which), "image.cpp");
			makelink(homeworkurl($which), "image.h");
			makelink(homeworkurl($which), "lines_100x100.ppm");
			makelink(homeworkurl($which), "main.cpp");
			makelink(homeworkurl($which), "priority_queue.h");
			makelink(homeworkurl($which), "small_10x10.ppm");
			makelink(homeworkurl($which), "squiggle_30x30.ppm");
			makelink(homeworkurl($which), "tiny_5x5.ppm");
        }

        makelink(homeworkurl($which), "provided_files.zip");
        //if ($which != 4) {

        // } else {
        //print '<em><a style="text-decoration:underline" href="https://submitty.cs.rpi.edu/courses/f20/csci1200">See Submitty for materials</a></em>';
//		}
	//if ($which == 6){
		//print '<br><b><a style="text-decoration:underline" href="HW6_word_search_contest.php">'."Homework 6 Contest Results".'</a></b><br>';
	//}

    }


    if (homeworksolutionsreleased($which)) {
        print '<p class=DS_P><em>solutions:<br>';
        print '</em>';
    }

}

/*****************************************************************/
/*****************************************************************/
/*****************************************************************/

function maketesthelper($which)
{

    if ($which == 4) {
        print 'Data Structures Final Exam';
        print '<br><b>6:30-9:30pm America/New York</b><br><br>';
        //print '<br>location: Sage 3303, 3510, & 3101';
        //print '<br>location: TBA';
        //West Hall Auditorium';
        //print '<br>Location: <a style="text-decoration:underline" href="submitty.php">See Submitty</a></
        print '<p class=DS_P><a style="text-decoration:underline" 
      href="https://info.rpi.edu/registrar/grades/#FinalExamScheduleandConflicts">Fall 2023 Final Exams Schedule</a>';
    } else {
        print 'Test ' . $which;
        print '<br><b>6:00-7:50pm</b>';
    }

    if (reviewproblemsreleased($which)) {
        print '<p class=DS_P>';
        makelink("reviews/", 'problems' . $which . '.pdf', 'practice problems');
        print '</p>';
        if (reviewsolutionsreleased($which)) {
            print '<p class=DS_P><em>Don\'t look at the solutions until you have fully worked the problems</em><br>';
            //makelink("reviews/",'solutions'.$which.'.pdf','practice problem solutions');
            makelink("https://submitty.cs.rpi.edu/courses/s21/csci1200/display_file?dir=course_materials&path=%2Fvar%2Flocal%2Fsubmitty%2Fcourses%2Ff20%2Fcsci1200%2Fuploads%2Fcourse_materials%2Ftest_reviews%2Fsolutions" . $which . "_out.pdf", "", "practice problem solutions");
        } else {

            if ($which == 4) {
                //print '<p class=DS_P><em>Sample solutions to the practice problems will be posted later.</em>';
            } else {
                print '<p class=DS_P><em>Sample solutions to the practice problems will be posted to Course Materials on Monday morning.</em>';
            }
        }
    }
    if (testsolutionsreleased($which)) {
        print '<p class=DS_P>';
        /*makelink("tests/",'test_solutions'.$which.'.pdf', 'Test '.$which.' Solutions');*/
        makelink("https://submitty.cs.rpi.edu/courses/s21/csci1200/display_file?dir=course_materials&path=%2Fvar%2Flocal%2Fsubmitty%2Fcourses%2Ff20%2Fcsci1200%2Fuploads%2Fcourse_materials%2Ftest_solutions%2Ftest0" . $which . "_solution.pdf", '', "Test " . $which . " Solutions");
    }
}


/*****************************************************************/
/*****************************************************************/
/*****************************************************************/


function message($msg)
{
    print '<font class="italics">' . $msg . "</font>";
}

function extramessage($msg = null)
{
    if (isset($msg)) {
        print "<p class=DS_P>";
        message($msg);
    }
}

/*****************************************************************/

function blank($numdays = 1)
{
    print '<td class=calendar_white colspan=' . $numdays . '>&nbsp;</td>';
}

function makeday($date, $msg, $numdays = 1, $color = "white")
{
    print '<td class=calendar_' . $color . ' colspan=' . $numdays . '>' . $date . ',<br>';
    message($msg);
    print "</td>";
}


function makeinstallfest($date, $msg, $numdays = 1)
{


    print '<td class=calendar_green colspan=' . $numdays . '>' . $date . ',<br>';
    message($msg);


    print '<br>&nbsp;<br><b>Lecture 0: Install Fest</b><br><b>6-8pm</b><br><b>Location: DCC 308</b><br>';

    // makelink("lectures/","temperature.cpp");
    // makelink("lectures/","memory_debugger_test.cpp");

    print "</td>";
}


function makelecture($date, $msg = null)
{
    static $which = 1;
    print "<td class=calendar_green>" . $date . ", ";
    makelecturehelper($which);
    extramessage($msg);
    print "</td>";
    $which++;
}

function makelab($date, $msg = null)
{
    static $which = 1;
    print "<td class=calendar_yellow>" . $date . ", ";
    makelabhelper($which);
    extramessage($msg);
    print "</td>";
    $which++;
}

function makehomework($date, $msg = null)
{
    static $which = 1;
    print "<td class=calendar_blue>" . $date . ", ";
    makehomeworkhelper($which);
    extramessage($msg);
    print "</td>";
    $which++;
}

function maketest($date, $msg = null)
{
    static $which = 1;
    print "<td class=calendar_red>" . $date . ", ";
    maketesthelper($which);
    extramessage($msg);
    print "</td>";
    $which++;
}

/*****************************************************************/

?>

