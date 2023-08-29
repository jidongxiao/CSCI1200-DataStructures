<?php


function makelinkb($directory,$file,$text) {
  if (isset($text)) { 
    print '<a href='.$directory.$file.'>'.$text.'</a><br>';
  } else {
    print '<a href='.$directory.$file.'>'.$file.'</a><br>';
  }
}


/*****************************************************************/
/*****************************************************************/
/*****************************************************************/
function schedule_misc($what,$rowspan=4,$colspan=1){
	print '<td class=schedule_orange rowspan='.$rowspan.' colspan='.$colspan.'>'.$what.'</td>';
}


function schedule_lab($which,$time,$room,$ta,$mentors,$colspan=1,$width="100%") {
//  print '<td class=schedule_yellow width='.$width.' rowspan=4 colspan='.$colspan.'><b>Lab&nbsp;Section&nbsp;'.$which.'</b><br>'.$time.'<br>'.$room.'<br>TA: '.$ta.'<br>mentors: '.$mentors.'</td>';
  print '<td class=schedule_yellow rowspan=4 colspan='.$colspan.'><b>Lab&nbsp;Section&nbsp;'.$which.'</b><br>'.$time.'<br>'.$room.'<br>TA: '.$ta.'<br>mentors: '.$mentors.'</td>';
}	

function schedule_lecture($time,$room,$rowspan=4) {
  print '<td class=schedule_green rowspan='.$rowspan.'><b>Lecture</b><br>'.$time.'<br>'.$room.'</td>';
}

function schedule_testblock($time,$room) {
  print '<td class=schedule_red rowspan=4><b>Test Block</b><br>'.$time.'<br>'.$room.'</td>';
}
  
function schedule_instructor_officehours($who,$room,$rowspan=1,$time=null) {
  if (isset($time)) {
    print '<td class=schedule_bluegreen rowspan='.$rowspan.'>'.$who.'<br>'.$time.'<br>'.$room.'</td>';
  } else {
    print '<td class=schedule_bluegreen rowspan='.$rowspan.'>'.$who.'<br>'.$room.'</td>';
  }
}

function schedule_alac_officehours($alac,$room,$time,$rowspan,$width="100%") {
   print '<td class=schedule_grey rowspan='.$rowspan.'>'.$alac.'<br>'.$room.'<br>'.$time.'</td>';
}


function schedule_ta_officehours($ta,$room,$rowspan,$time=null,$colspan=1,$width="12%") {
  if (isset($time)) {
    print '<td class=schedule_blue width='.$width.' rowspan='.$rowspan.' colspan='.$colspan.'>'.$ta.'<br>'.$time.'<br>'.$room.'</td>';
  } else { 
    print '<td class=schedule_blue width='.$width.' rowspan='.$rowspan.' colspan='.$colspan.'>'.$ta.'<br>'.$room.'</td>';
  }
}

function schedule_hybrid_ta_officehours($ta,$room,$rowspan,$time=null,$colspan=1,$width="12%") {
  if (isset($time)) {
    print '<td class=schedule_purple width='.$width.' rowspan='.$rowspan.' colspan='.$colspan.'>'.$ta.'<br>'.$time.'<br>'.$room.'</td>';
  } else { 
    print '<td class=schedule_purple width='.$width.' rowspan='.$rowspan.' colspan='.$colspan.'>'.$ta.'<br>'.$room.'</td>';
  }
}

function schedule_studyspace($room,$rowspan,$time,$colspan=1) {
  print '<td class=schedule_ltgrey rowspan='.$rowspan.' colspan='.$colspan.'>study space<br>'.$time.'<br>'.$room.'</td>';
}

function schedule_alac($startdate,$time,$room,$colspan=1,$width="100%",$title="ALAC Drop In Tutoring") {
   print '<td class=schedule_grey rowspan=4 colspan='.$colspan.'>';
   print '<a href="http://info.rpi.edu/advising-learning-assistance/learning-assistance/#TutoringServices">'.$title.'</a>';
   print '<br><em>Start date: '.$startdate.'</em>';
   print '<br>'.$time.'<br>'.$room.'</td>';
}



function blank($rowspan=1,$colspan=1,$width=null) {
  if (isset($width)) {
    print '<td class=schedule_white rowspan='.$rowspan.' colspan='.$colspan.' width='.$width.'>&nbsp;</td>';
  } else {
    print '<td class=schedule_white rowspan='.$rowspan.' colspan='.$colspan.'>&nbsp;</td>';
  }
}

function schedule_time($t) {
  print '<td class=schedule_white><b>'.$t.'</b></td>';
}

function schedule_day($d,$width,$colspan=1) {
  print '<td class=schedule_white width='.$width.' colspan='.$colspan.'>'.$d.'</td>';
}

function row_begin($time=null) {
  print '<tr height="5%">';
  if(isset($time))
    schedule_time($time);
  else
    blank(1,1,"1%");
}

function row_end() {
  print '</tr>';
}


?>
