 
var firebaseConfig = 
{
	apiKey: "AIzaSyB3GZydX8zppzuImZfD2eQyY60j85Sq5as",
	authDomain: "hangrdatabase.firebaseapp.com",
	projectId: "hangrdatabase",
	storageBucket: "hangrdatabase.appspot.com",
	messagingSenderId: "277534831276",
	appId: "1:277534831276:web:1ecb8a057c0465af1ca509",
	measurementId: "G-RGQD8RJWTM"
};
	// initialize firebase

	 firebase.initializeApp(firebaseConfig);
	 firebase.analytics();
	 const database = firebase.database();

/* STOP FORM FROM SUBMITTING IF ERRORS IN VALIDATION */

function validateSubmission()
{
	var courseTitle = document.forms["indexForm"]["CourseTitle"].value;
	var sectionNumber = document.forms["indexForm"]["SectionNumber"].value;

	if ((courseTitle == "" || sectionNumber == ""))
	{
		document.getElementById("error3").innerHTML = "Fields cannot be blank";
		return false;
	}

	if (document.getElementById("error1").innerHTML != "" || document.getElementById("error2").innerHTML != "")
	{
		document.getElementById("error3").innerHTML = "Incorrect information";
		return false;
	}

	if (collegeChanged < 1)
	{
		document.getElementById("error3").innerHTML = "Select a university";
		return false;
	}
	submitData();
	return false;
}

function submitData() //stores user input and sees if matches with database
{
	/* grab user input */
	var courseTitleVal = ((((document.forms["indexForm"]["CourseTitle"].value).replace(/ /g, "")).replaceAll("-","")).toUpperCase());
	var collegeVal = document.getElementById("dropdown").value;
	var sectionNumberVal = ((document.forms["indexForm"]["SectionNumber"].value).replace(/^0+/, '')).replace(/ /g, "");

	/* declare database */
	var ref = database.ref(collegeVal);

	/* put user input into string */
	var inputAsString = courseTitleVal + "_" + sectionNumberVal;

	/* compare user input to database */
	firebase.database().ref(collegeVal).orderByChild("class").equalTo(inputAsString).once("value", snapshot => 
	{
		    var userData = snapshot.val();

		    //replace index page with form submit
		    document.getElementById("index").remove();

		    if (userData == null) //if no match 
		    {
			    doesNotMatch(courseTitleVal, collegeVal, sectionNumberVal);
			}
			else //if match
			{
				doesMatch(courseTitleVal, collegeVal, sectionNumberVal, userData);
			}

    });

} 

function doesMatch(courseTitleVal, collegeVal, sectionNumberVal, userData)
{
	document.getElementById("match").style.display = "block";
	document.getElementById("noMatch").remove();

	document.getElementById("collegeDisplay").innerHTML = collegeVal;
	document.getElementById("courseTitleDisplay").innerHTML = courseTitleVal;
	document.getElementById("sectionNumberDisplay").innerHTML = sectionNumberVal;

	/* show list */ 
	var userDataStr = JSON.stringify(userData); //turns data into string
	var userDataSplit = userDataStr.split("\"");
	document.getElementById("link").innerHTML = userDataSplit[9];
}

function doesNotMatch(courseTitleVal, collegeVal, sectionNumberVal)
{
	document.getElementById("noMatch").style.display = "block";
	document.getElementById("match").remove();

	document.getElementById("collegeDisplay").innerHTML = collegeVal;
	document.getElementById("courseTitleDisplay").innerHTML = courseTitleVal;
	document.getElementById("sectionNumberDisplay").innerHTML = sectionNumberVal;
}

function submitGroupClicked()
{
	var link = ((document.forms["linkForm"]["link"].value).replace(/ /g, "").toLowerCase());
	
	/* verify link is correct */
	if (link == "")
	{
		error4.innerHTML = "Enter a link";
		return false;
	}
	else if (!link.includes("groupme.com/join_group/"))
	{
		error4.innerHTML = "Enter groupme sharing links only";
		return false;
	}
	else
	{
		error4.innerHTML = "";
	}

	/* redeclare database */
	collegeVal = document.getElementById("collegeDisplay").innerHTML;
	var ref = database.ref(collegeVal);

	var data = // how data is held before it is pushed/submitted to entry
	{
		class: 
		document.getElementById("courseTitleDisplay").innerHTML + "_" +
		document.getElementById("sectionNumberDisplay").innerHTML,
		link:
		(document.forms["linkForm"]["link"].value).replace(/ /g, "").toLowerCase()
	}
	/* delete submission button and notify success */
	document.getElementById("submitGroup").remove();
	document.getElementById("notifySubmission").innerHTML = "Group made successfully!";
	ref.push(data); //upload data
}

