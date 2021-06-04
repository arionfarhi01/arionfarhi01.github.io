
/* Begin Modal */
var modal = document.getElementById("feedback_modal");
var btn = document.getElementById("contactButton");
var span = document.getElementsByClassName("closeModal")[0];

function openModal()
{
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
			var input = document.getElementById("search_bar_index").value.toLowerCase();
			var college_list = document.getElementsByClassName("college");
			var college_list_length = college_list.length;

			for (var i= 0; i < college_list_length; i++)
			{
				if (college_list[i].id.toLowerCase().startsWith(input))
				{
					$(college_list[i]).show('1');
				}

				else
				{
					$(college_list[i]).hide('1');
				}
			}
			
		}