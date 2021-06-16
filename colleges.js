if(window.innerWidth > window.innerHeight)
{
	alert("This website is designed only for mobile");
}

/* begin firebase init */

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

/* end firebase init */

function goBack()
{
	window.location.href = 'index.html'
}

function displayInfo(collegeName)
{
	var group_title_array = [];
	var course_name_beginning = "";
	var color_theme = document.getElementById("header").getAttribute("style").substring(18);

	database.ref(collegeName).orderByChild("name").once('value', function(snapshot)
	{
		if(snapshot.exists())
		{
			var content = '';
			snapshot.forEach(function(data){
			var val = data.val();

			/* Ensure format of val.professor is correct */

			if (val.professor.includes("recitation"))
			{
				val.professor = val.professor.substring(0,1).toUpperCase() + val.professor.substring(1);
			}
			else
			{
				val.professor = val.professor.substring(0,6) + val.professor.substring(6,7).toUpperCase() + val.professor.substring(7);
			}

			/* content of button */

            content+= '<button onclick="location.href=\'' + val.link +'\'"; class= "class_display_individual" style= "color: ' + color_theme + '">';

            content += '<div class= "code_nickname">' +
            '<span class= "class_code">' + val.name.toUpperCase() + '</span> <br>' +
            '<span class= "class_nickname">' + val.nickname.toUpperCase() + "</span> <br> " +
            '</div>' +

            '<div class="prof_date_time">' +
            '<span class= "prof">' + val.professor + "</span> <br> " +
            val.days_of_week + "<br>" +
            val.start_time + "-" + val.end_time + 
            '</div>' +

            '</button>'

            });

			$('#class_display_wrapper').append(content);
		}
	});
}

function search() 
{
	var i = 0;
	var input = document.getElementById("search_bar").value.toLowerCase();
	var numberOfClasses = document.getElementsByClassName("class_display_individual").length;
	var individualClasses = document.getElementsByClassName("class_display_individual");
	var class_code = document.getElementsByClassName("class_code");
	var class_nickname = document.getElementsByClassName("class_nickname");
	var prof = document.getElementsByClassName("prof");

	while (numberOfClasses > i)
	{
		if (class_code[i].innerHTML.toLowerCase().includes(input) || class_nickname[i].innerHTML.toLowerCase().includes(input) || prof[i].innerHTML.toLowerCase().includes(input))
		{
			$(individualClasses[i]).fadeIn('slow');

			/*
			if (headingArray[i].innerHTML.toLowerCase().includes(input))
			{
				headingArray[i].style.fontWeight = 700;
			}
			else
			{
				headingArray[i].style.fontWeight = 500;
			}

			if (headingArray2[i].innerHTML.toLowerCase().includes(input))
			{
				headingArray2[i].style.fontWeight = 700;
			}
			else
			{
				headingArray2[i].style.fontWeight = 500;
			}

			if (infoArray[i].innerHTML.toLowerCase().includes(input))
			{
				infoArray[i].style.fontWeight = 700;
			}
			else
			{
				infoArray[i].style.fontWeight = 500;
			}
			*/
		}
		else
		{
			$(individualClasses[i]).fadeOut('slow');
		}

		/*
		if (input == "")
		{
			headingArray[i].style.fontWeight = 500;
			headingArray2[i].style.fontWeight = 400;
			infoArray[i].style.fontWeight = 400;
		}
		*/

		i++;
	}

	/*
	if (classDivCount == 0)
	{
		document.getElementById("no_matches").innerHTML = "This Class' GroupMe Is Not Yet Created. Make It Yourself Then Press The Plus Button To Add It!";
	}
	else
	{
		document.getElementById("no_matches").innerHTML = "";
	}
	*/
} 

function pushInfo() //upload info from form to database
{
	var submission_error = document.getElementById("submission_error");

	/* get variables */

	var college_selection_val = document.getElementById("college_name").innerHTML.substring(2).toUpperCase().trim();


	var course_name_val = (((document.forms["add_group"]["course_name"].value).replace(/ /g, "").replaceAll("-","").toLowerCase()));

	var nums = course_name_val.match(/\d/);
	var first_num_occurance = course_name_val.indexOf(nums);
	var last_alphabet_occurance = -1;

	var last_alphabet_occurance = "";
	var i = 0;
	var contains_letters = "false";

			//finds last alphabet occurance
			for (i=0; i< course_name_val.length; i++)
			{
				if (course_name_val[i].match(/^[a-z]+$/))
				{
					last_alphabet_occurance = i;
					contains_letters = "true";
				}
			}


			//if first number comes before last letter
			if (first_num_occurance < last_alphabet_occurance)
			{
				submission_error.innerHTML = "Please fix formatting of Course Name";
				return 0; //exit 
			}
			

			//if course name has no alphabetic characters
			if (contains_letters == "false")
			{
				submission_error.innerHTML = "Please fix formatting of Course Name";
				return 0; //exit 
			}

			//if numbers span over 4 in length
			if ((course_name_val.substring(last_alphabet_occurance+1)).length > 4)
			{
				submission_error.innerHTML = "Please do not include section number";
				return 0; //exit 
			}

			
			//if course name is too long
			if (course_name_val.length > 20)
			{
				submission_error.innerHTML = "Please shorten the Course Name";
				return 0; //exit 
			}

			//if course name is too short
			if (course_name_val.length < 3)
			{
				submission_error.innerHTML = "Course Name is too short";
				return 0; //exit 
			}


			// if course contains extraneous characters
			if(!(course_name_val.match(/^[0-9a-zA-Z ]+$/)))
			{
				submission_error.innerHTML = "Course Name may contain only letters, numbers, and dashes";
 				return 0; //exit
 			}

 			//if doesn't contain numbers
 			if(!(/\d/.test(course_name_val))) 
 			{
 				submission_error.innerHTML = "Course Name must contain numbers";
 				return 0; //exit
 			}



 			var course_nickname_val = ((document.forms["add_group"]["course_nickname"].value).trim().toLowerCase());

			if (course_nickname_val.length > 42) //will go onto other line otherwise
			{
				submission_error.innerHTML = "Course Nickname is too long";
				return 0; //exit 
			}

			if (course_nickname_val.length < 3)
			{
				submission_error.innerHTML = "Course Nickname is too short";
				return 0; //exit 
			}


			var course_professor_val = (((document.forms["add_group"]["course_professor"].value).trim()).toLowerCase());
			course_professor_val = course_professor_val.replace("professor", "").trim();


			if (course_professor_val.length < 2)
			{
				submission_error.innerHTML = "Course Professor name is too short";
				return 0; //exit 
			}

			if (course_professor_val.length > 20)
			{
				submission_error.innerHTML = "Course Professor name is too long. Just include last name.";
				return 0; //exit 
			}


			var course_days_of_week = "";


			if (document.getElementById("weekday-mon").checked)
			{
				course_days_of_week += "M, "
			}
			if (document.getElementById("weekday-tue").checked)
			{
				course_days_of_week += "Tu, "
			}
			if (document.getElementById("weekday-wed").checked)
			{
				course_days_of_week += "W, "
			}
			if (document.getElementById("weekday-thu").checked)
			{
				course_days_of_week += "Th, "
			}
			if (document.getElementById("weekday-fri").checked)
			{
				course_days_of_week += "F, "
			}
			if (document.getElementById("weekday-sat").checked)
			{
				course_days_of_week += "Sa, "
			}
			if (document.getElementById("weekday-sun").checked)
			{
				course_days_of_week += "Su, "
			}

			if (course_days_of_week == "")
			{
				submission_error.innerHTML = "Please select the days of the week the class occurs";
				return 0; //exit 
			}

			/* get rid of ending comma and space */
			course_days_of_week = course_days_of_week.substring(0, course_days_of_week.length - 2);


			var course_start_time_val = document.forms["add_group"]["time_begin"].value;
			var course_end_time_val = document.forms["add_group"]["time_end"].value;
			
			if (course_start_time_val == "" || course_end_time_val == "")
			{
				submission_error.innerHTML = "Both the beginning and end time of the course must be filled out";
				return 0; //exit
			}

			if (course_end_time_val <= course_start_time_val) //end cannot be before start
			{
				submission_error.innerHTML = "Course start time must before course end time";
				return 0; //exit
			}

			if ((course_end_time_val.substring(0,2) - course_start_time_val.substring(0,2)) > 5) //if longer than 5 hours
			{
				submission_error.innerHTML = "Course time cannot be longer than 5 hours";
				return 0; //exit
			}

			if (course_start_time_val.substring(0,2) < 12) //AM
			{
				course_start_time_val += "AM";
			}
			else
			{
				course_start_time_val += "PM";
				if (course_start_time_val.substring(0,2) >= 13)
				{
					course_start_time_val = (course_start_time_val.substring(0,2) -12) + course_start_time_val.substring(2);
				}
			}

			if (course_start_time_val.substring(0,2) < 10) //before 10 AM
			{
				course_start_time_val = course_start_time_val.substring(1); //get rid of trailing zero
			}


			if (course_end_time_val.substring(0,2) < 12) //AM
			{
				course_end_time_val += "am";
			}
			else
			{
				course_end_time_val += "pm";
				if (course_end_time_val.substring(0,2) >= 13)
				{
					course_end_time_val = (course_end_time_val.substring(0,2) -12) + course_end_time_val.substring(2);
				}
			}

			if (course_end_time_val.substring(0,2) < 10) //before 10 AM
			{
				course_end_time_val = course_end_time_val.substring(1); //get rid of trailing zero
			}


			var course_link_val = (document.forms["add_group"]["course_link"].value).replace(/ /g, "");
			
			var codeIndex = course_link_val.indexOf("join_group");

			if (codeIndex == -1) //does not contain
			{
				submission_error.innerHTML = "Link is not correct";
				return 0; //exit
			}

			course_link_val = course_link_val.substring(codeIndex+11);
			
			if (course_link_val.length < 16) //if code is shorter than 16 characters
			{
				submission_error.innerHTML = "Link is not correct";
				return 0; //exit
			}

			course_link_val = "https://www.groupme.com/join_group/" + course_link_val;


			var recitation_val = "";
			var recitation_placeholder = "";

			if (document.getElementById("recitation_check").checked)
			{
				recitation_placeholder = " (recitation)";
			}
			else
			{
				recitation_val = "Prof. ";
			}


			/* If group works: */
			/* add later -- close modal, refresh page, leave message */
			


			var ref = database.ref(college_selection_val);

			var data = // how data is held before it is pushed/submitted to entry
			{
				name: 
				course_name_val,

				nickname:
				course_nickname_val,

				professor:
				course_professor_val,

				start_time:
				course_start_time_val,

				end_time:
				course_end_time_val,

				days_of_week:
				course_days_of_week,

				link:
				course_link_val
			}

	ref.push(data);
}
