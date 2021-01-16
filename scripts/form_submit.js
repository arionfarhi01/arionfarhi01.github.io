/* FIELD VARIABLES */

var queryString = location.search.substring(1);
var a = queryString.split("=");
var x = a[1].split("&"); /* COMPRESS THESE */
var y = a[2].split("&"); /* COMPRESS THESE */
var z = a[3].split("&"); /* COMPRESS THESE */


var college = x[0]; 
var courseTitle01 = y[0];
var courseTitle02 = courseTitle01.toLowerCase();
var courseTitle03 = courseTitle02.replaceAll("-","");
var courseTitle = courseTitle03.replaceAll("+","");

var sectionNumber01 = z[0];
var sectionNumber = sectionNumber01.replace(/^0+/, '');

if (college == "georgetown_university")
{
	if (courseTitle == "a1")
	{
		if (sectionNumber == "1")
		{
			 document.getElementById("matchResults").innerHTML = "MATCH!";
			 document.getElementById("joinOrMake").innerHTML = "Click here to join group";
		}
	}
}



/* NAV */


function openNav() 
{
  document.getElementById("mySidenav").style.width = "32%";
  document.getElementById("push").style.marginLeft = "32%";
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