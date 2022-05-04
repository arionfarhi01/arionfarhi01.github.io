if(window.innerWidth > window.innerHeight)
{
    alert("This website is designed only for mobile");
}

/* Begin Modal */
var modal = document.getElementById("feedback_modal");
var btn = document.getElementById("contactButton");
var span = document.getElementsByClassName("closeModal")[0];

function openModal()
{
    $(modal).fadeIn('slow');
    modal.style.display = "block";
}

function closeModal()
{
	modal.style.display = "none";
}

span.onclick = function() 
{
  modal.style.display = "none";
}

window.onclick = function(event) 
{
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}
/* End Modal */

function goToUpdates()
{
	location.href = "updates.html"
}


function searchCollege()
{
	var input = document.getElementById("search_bar").value.toLowerCase();
	var college_list = document.getElementsByClassName("college_div");

	for (var i= 0; i < college_list.length; i++)
	{
		if (college_list[i].getAttribute("name").toLowerCase().startsWith(input) || college_list[i].getAttribute("fullname").toLowerCase().startsWith(input))
		{
			$(college_list[i]).fadeIn('fast');
		}

		else
		{
			$(college_list[i]).fadeOut('fast');
		}
	}	
}
