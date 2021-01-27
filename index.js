/* FIELD VARIABLES */


var courseTitleMinimizedFinal = "";
var sectionNumberMinimizedFinal = "";
var collegeSelected = ""; 

var collegeChanged = 0;


/* END OF FIELD VARIABLES */




/* PLACEHOLDER EDITING */


/* FINDS WHAT COLLEGE YOU SELECTED IN DROPDOWN  */

function getCollegeSelection()
{
	collegeSelected = document.getElementById("dropdown").value;
	checkIfCollegeChanged();
	changePlaceholders();
}

/* SEES IF USER PICKED A COLLEGE */

function checkIfCollegeChanged()
{
	if (collegeSelected == "")
	{
		document.getElementById("input1").setAttribute("placeholder","");
		document.getElementById("input2").setAttribute("placeholder","");
		collegeChanged = 0; //false
	}
	else
	{
		collegeChanged = 1; //true
	}
}

/*  !!! ADD TO THIS ONE WHEN ADDING COLLEGES !!! */
/* EDITS PLACEHOLDERS IN DROPDOWN */

function changePlaceholders()
{
	if (collegeSelected == "")
	{
		document.getElementById("input1").setAttribute("placeholder","");
		document.getElementById("input2").setAttribute("placeholder","");
	}

	if (collegeSelected == "New York University")
	{
		document.getElementById("input1").setAttribute("placeholder","i.e. ACCT-UB 1");
		document.getElementById("input2").setAttribute("placeholder","i.e. 001");
	}

	if (collegeSelected == "Georgetown University")
	{
		document.getElementById("input1").setAttribute("placeholder","i.e. ECON 001");
		document.getElementById("input2").setAttribute("placeholder","i.e. 01");
	}

  if (collegeSelected == "Penn State University")
  {
    document.getElementById("input1").setAttribute("placeholder","i.e. ART 10");
    document.getElementById("input2").setAttribute("placeholder","i.e. 001");
  }

  /* CLEARS INPUTS AFTER CHANGING COLLEGES */
  document.forms["indexForm"]["CourseTitle"].value = "";
  document.forms["indexForm"]["SectionNumber"].value = "";
}


/* END OF PLACEHOLDER EDITING */




/* NAV */


function openNav() 
{
  if (window.matchMedia('(min-width: 1000px)').matches)
  {
    document.getElementById("mySidenav").style.width = "16%";
    document.getElementById("push").style.marginLeft = "16%";
    document.getElementById("push1").style.marginLeft = "16%";
  }
  else
  {
    document.getElementById("mySidenav").style.width = "32%";
    document.getElementById("push").style.marginLeft = "32%";
  }
  document.getElementById("menuImage").style.display = "none";
  document.getElementById("titleText").style.display = "none";
}

function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("push").style.marginLeft = "0";
  document.getElementById("menuImage").style.display = "inline";
  document.getElementById("titleText").style.display = "block";
}


/* END OF NAV */



/* FIELD VALIDATION */


/* ENSURES FORM IS ENTERED CORRECTLY TO MINIMIZE ERRORS */

function validateFormTitle() 
{
  var courseTitle = document.forms["indexForm"]["CourseTitle"].value;
  var courseTitleNoSpace = courseTitle.replace(/ /g, "");

  /* CHECKS IF BLANK */

  if (courseTitleNoSpace == "") 
  {
    document.getElementById("error1").innerHTML = "Course Title cannot be blank";
  }
  else
  {
  	document.getElementById("error1").innerHTML = "";
  }

  /* CHECKS IF HAS NUMBERS */
  var regex = /\d/g;
  if (!regex.test(courseTitleNoSpace) && !(courseTitleNoSpace == ""))
  {
  	document.getElementById("error1").innerHTML = "Course Title requires letters and numbers";
  }

  /* CHECKS IF HAS LETTERS */
  var regExp = /[a-zA-Z]/g;
  if(!(regExp.test(courseTitle)) && !(courseTitleNoSpace == ""))
  {
    document.getElementById("error1").innerHTML = "Course Title requires letters and numbers";
  }

  /* CHECKS IF HAS LETTERS AND NUMBERS AND DASH ONLY */
  var letterNumber = /^[0-9a-zA-Z-]+$/;
  if(!courseTitleNoSpace.match(letterNumber) && !(courseTitleNoSpace == ""))
  {
   document.getElementById("error1").innerHTML = "Course Title may consist of letters, numbers, and a dash only";
 }

 /* CONDENSE INPUT FULLY */
 var courseTitleMinimized = courseTitleNoSpace.toLowerCase();
 courseTitleMinimizedFinal = courseTitleMinimized.replaceAll("-","");

}

function validateFormSection()
{
  var sectionNumber = document.forms["indexForm"]["SectionNumber"].value;
  var sectionNumberNoSpace = sectionNumber.replace(/ /g, "");

  /* CHECKS IF BLANK */

  if (sectionNumberNoSpace == "") 
  {
    document.getElementById("error2").innerHTML = "Section Number cannot be blank";
    return false;
  }
  else
  {
  	document.getElementById("error2").innerHTML = "";
  }

  /* CHECKS IF HAS NUMBERS ONLY */
  var numbers = /^[0-9]+$/;

  /* CHECKS IF NUMBER IS GREATER THAN 999 */
  if (sectionNumberNoSpace > 999 || sectionNumberNoSpace < 1)
  {
    document.getElementById("error2").innerHTML = "Section Number must be between 1-999";
    return false;
  }

  if(!sectionNumberNoSpace.match(numbers) && !(sectionNumberNoSpace == "") )
  {
  	document.getElementById("error2").innerHTML = "Section Number may consist of numbers only";
    return false;
  }


  /* CONDENSE INPUT FULLY */
  sectionNumberMinimizedFinal = sectionNumberNoSpace.replace(/^0+/, ''); /* deletes leading zeroes */
}

/* END OF FIELD VALIDATION */

screen.lockOrientation("portrait-primary");

if(window.innerWidth > window.innerHeight){
    document.getElementsByTagName("body")[0].style.transform = "rotate(90deg)";
}


