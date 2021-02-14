
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

			var course_name_val = (((document.forms["add_group"]["course_name"].value).replace(/ /g, "")).toUpperCase());

			var course_common_name_val = ((document.forms["add_group"]["course_common_name"].value).toLowerCase());
			toTitleCase(course_common_name_val);
			var course_professor_val = (((document.forms["add_group"]["course_professor"].value).replace(/ /g, "")).toLowerCase());
			var course_time_val = (((document.forms["add_group"]["course_time"].value).replace(/ /g, "")).toLowerCase());
			var course_dates_val = (((document.forms["add_group"]["course_dates"].value).replace(/ /g, "")).toUpperCase());
			var course_link_val = (((document.forms["add_group"]["course_link"].value).replace(/ /g, "")).toLowerCase());

			var recitation_val = document.getElementById("recitation").value;
			if (recitation_val == "no")
			{
				recitation_val = "";
			}
			else
			{
				recitation_val = " (recitation)";
			}

			var college_selection_val = document.getElementById("college_selection").value;


			var ref = database.ref(college_selection_val);

			var data = // how data is held before it is pushed/submitted to entry
			{
		 		name: 
		 		course_name_val,

		 		common_name:
		 		course_common_name_val,

		 		professor:
		 		course_professor_val + recitation_val,

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
			var i = 0;

			database.ref(collegeName).once('value', function(snapshot)
			{
       			if(snapshot.exists())
       		 	{
          			var content = '';
          			snapshot.forEach(function(data){
             		var val = data.val();

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
             		val.common_name + " <br> <span class= 'heading2'> <span class= 'w'> </span> " +
              		val.professor + "</span> </span> <br> <span class= 'info'> " +
              		val.name + " </span> <br> " + "<span class = 'info2'>" +
              		val.dates + " | " +
              		val.time +
              		'</div> </a> </span>'

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

		function search() 
		{
			var i = 0;
			var numberOfClasses = document.getElementsByClassName("heading").length;
			var classDiv = document.getElementsByClassName("courseBackground");
			var classDivCount = document.getElementsByClassName("courseBackground").length;
			var input = document.getElementById("search_bar").value.toLowerCase();
			var headingArray = document.getElementsByClassName("heading");
			var infoArray = document.getElementsByClassName("info");

			while (numberOfClasses > i)
			{
				if (headingArray[i].innerHTML.toLowerCase().includes(input) || infoArray[i].innerHTML.toLowerCase().includes(input))
				{
					$(classDiv[i]).show();
				}

				else
				{
					$(classDiv[i]).hide();
					classDivCount--;
				}

				i++;
			}

			if (classDivCount == 0)
			{
				document.getElementById("no_matches").innerHTML = "There are no matches";
			}
			else
			{
				document.getElementById("no_matches").innerHTML = "";
			}
		} 

		function openForm() 
		{
			document.getElementById("mySidenav").style.width = "32%";
			//document.getElementById("push").style.marginLeft = "32%";
			  //document.getElementById("menuButton").style.display = "none";
			 // document.getElementById("titleText").style.display = "none";
		}

		function closeForm() 
		{
			document.getElementById("mySidenav").style.width = "0";
			//document.getElementById("push").style.marginLeft = "0";
			//document.getElementById("menuButton").style.display = "inline";
			//document.getElementById("titleText").style.display = "block";
		}




