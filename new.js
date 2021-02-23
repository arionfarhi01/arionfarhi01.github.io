
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

		function pushInfo() //for form
		{
	
			// get variables

			var college_selection_val = document.getElementById("titleText").innerHTML.substring(77).split("<")[0].toUpperCase();

			var course_name_val = (((document.forms["add_group"]["course_name"].value).replace(/ /g, "")).toUpperCase());
			var course_common_name_val = ((document.forms["add_group"]["course_common_name"].value).toLowerCase());
			var course_professor_val = (((document.forms["add_group"]["course_professor"].value).replace(/ /g, "")).toLowerCase());
			var course_time_val = (((document.forms["add_group"]["course_time"].value).replace(/ /g, "")).toLowerCase());
			var course_dates_val = (((document.forms["add_group"]["course_dates"].value).replace(/ /g, "")).toUpperCase());
			var course_link_val = (((document.forms["add_group"]["course_link"].value).replace(/ /g, "")).toLowerCase());

			var recitation_val = document.getElementById("recitation").value;
			var recitation_placeholder = "";
			if (recitation_val == "no")
			{
				recitation_val = "Prof. ";
			}
			else
			{
				recitation_val = "";
				recitation_placeholder = " (Recitation)";
			}


			var ref = database.ref(college_selection_val);

			var data = // how data is held before it is pushed/submitted to entry
			{
		 		name: 
		 		course_name_val,

		 		common_name:
		 		course_common_name_val,

		 		professor:
		 		recitation_val + course_professor_val + recitation_placeholder,

		 		time:
		 		course_time_val,

		 		dates:
		 		course_dates_val,

		 		link:
		 		course_link_val
			}

			ref.push(data);
		}


		function displayInfo(collegeName)
		{
			getColorTitleText(collegeName);

			var i = 0;
			var group_title_array = [];
			var course_name_beginning = "";


			database.ref(collegeName).orderByChild("name").once('value', function(snapshot)
			{
       			if(snapshot.exists())
       		 	{
          			var content = '';
          			snapshot.forEach(function(data){
             		var val = data.val();

             		course_name_beginning = val.name.split("-")[0];

             		/* Make sure no overlapping group titles */

             		if (group_title_array.includes(course_name_beginning)) //if duplicate
             		{
             			group_title_array.push(course_name_beginning);
             			//content += "<span class= 'group_title'></span>";
             		}
             		else
             		{
             			group_title_array.push(course_name_beginning);

             			if (i == 0) //if first occurance
             			{
             				//content += "<span class= 'group_title'>" + val.name.split("-")[0] + "</span>";
             			}
             			else
             			{
             				//content += "<br> <span class= 'group_title'>" + val.name.split("-")[0] + "</span>";
             			}
             		}


             		content += '<a href= "' + val.link + '" >';

             		/* alternate colors */
      				if (i==0)
      				{
             			content += '<div class= "courseBackground" style= "background-color: rgb(217,151,52)">';
      				}

             		if (i==1)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #E2F5BF">';
             		}

             		if (i==2)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #FDD451">';
             		}

             		if (i==3)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #F6B8DB">';
             		}

             		if (i==4)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #BEDEF4">';
             		}

             		if (i==5)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #DEDBF9">';
             		}

             		if (i==6)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #F4BFBE">';
             		}

             		if (i==7)
             		{
             			content += '<div class= "courseBackground" style= "background-color: #C4F1EB">';
             		}
             		

             		content +='<tr>';

              		content += '<td>' + '<span class= "heading"> ' + 
             		val.common_name + " <br> <span class= 'heading2'>" +
              		val.professor + "</span> </span> <br> <span class= 'info'> " +
              		val.name + " </span> <br> <span class = 'info2'>" +
              		val.dates + "; <span class = 'time'> " +
              		val.time +
              		'</span> </div> </a> </span> </td>'

             		content += '</tr>';

             		i++;

             		if (i > 7)
             		{
             			i= 0;
             		}

           		 });

            		$('#table').append(content);

        		}
    		});

		}

		function getColorTitleText(collegeName) 
		{
			if (collegeName == "NYU")
			{
				document.getElementsByTagName("small")[0].style.color = "#" + 330662;
			}
		}

		function search() 
		{
			var i = 0;
			var numberOfClasses = document.getElementsByClassName("heading").length;
			var classDiv = document.getElementsByClassName("courseBackground");
			var classDivCount = document.getElementsByClassName("courseBackground").length;
			var input = document.getElementById("search_bar").value.toLowerCase();
			var headingArray = document.getElementsByClassName("heading");
			var infoArray = document.getElementsByClassName("info");
			var groupTitleArray = document.getElementsByClassName("group_title");

			while (numberOfClasses > i)
			{
				if (headingArray[i].innerHTML.toLowerCase().includes(input) || infoArray[i].innerHTML.toLowerCase().includes(input))
				{
					$(classDiv[i]).show();
					$(groupTitleArray[i]).show();
				}

				else
				{
					$(classDiv[i]).hide();
					$(groupTitleArray[i]).hide();
					classDivCount--;
				}

				i++;
			}

			if (classDivCount == 0)
			{
				document.getElementById("no_matches").innerHTML = "This Class' GroupMe Is Not Yet Created. Make It Yourself Then Press The Plus Button To Add It!";
			}
			else
			{
				document.getElementById("no_matches").innerHTML = "";
			}
		} 


		function openForm() 
		{
			document.getElementById("my_form").style.width = "100%";
			document.getElementById("push").style.marginLeft = "105%";
			  //document.getElementById("menuButton").style.display = "none";
			 // document.getElementById("titleText").style.display = "none";
		}

		function closeForm() 
		{
			document.getElementById("my_form").style.width = "0";
			document.getElementById("push").style.marginLeft = "0";
			//document.getElementById("menuButton").style.display = "inline";
			//document.getElementById("titleText").style.display = "block";
		}

		function goBack()
		{
			location.href = "index.html";
		}






