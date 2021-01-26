function validate()
{
	// document.getElementById("error").innerHTML = ""; //resets


	// /* Variables */


	// /* Patient info */
	// var f_name = document.forms["form_1"]["f_name"].value;
	// var l_name = document.forms["form_1"]["l_name"].value;
	// var month = document.getElementById("month").value;
	// var year = document.getElementById("year").value;
	// var day = document.getElementById("day").value;
	// var email = document.forms["form_1"]["email"].value;
	// var address_line = document.forms["form_1"]["address_line"].value;
	// var state = document.getElementById("state").value;;
	// var city = document.forms["form_1"]["city"].value;
	// var zip_code = document.forms["form_1"]["zip_code"].value;
 //  	var phone_number = document.forms["form_1"]["phone_number"].value;
 //  	var gender = document.getElementById("gender").value;

 //  	/* Referral info */
 //  	var ref_name = document.forms["form_1"]["ref_name"].value;
 //  	var ref_phone_number = document.forms["form_1"]["ref_phone_number"].value;
	// var ref_address_line = document.forms["form_1"]["ref_address_line"].value;
	// var ref_state = document.getElementById("ref_state").value;
	// var ref_city = document.forms["form_1"]["ref_city"].value;
	// var ref_zip_code = document.forms["form_1"]["ref_zip_code"].value;

	// /* Insurance info */
	// var relation = document.getElementById("relation").value;
	// var pol_name = document.forms["form_2"]["pol_name"].value;
	// var pol_month = document.getElementById("pol_month").value;
	// var pol_year = document.getElementById("pol_year").value;
	// var pol_day = document.getElementById("pol_day").value;
	// var pol_phone_number = document.forms["form_2"]["pol_phone_number"].value;
	// var employer = document.forms["form_2"]["employer"].value;
	// var group_number = document.forms["form_2"]["group_number"].value;
	// var ins_name = document.forms["form_2"]["ins_name"].value;
	// var ins_phone_number = document.forms["form_2"]["ins_phone_number"].value;
	// var ins_address_line = document.forms["form_2"]["ins_address_line"].value;
	// var ins_state = document.getElementById("ins_state").value;
	// var ins_city = document.forms["form_2"]["ins_city"].value;
	// var ins_zip_code = document.forms["form_2"]["ins_zip_code"].value;
	// var ins_pic = document.forms["form_2"]["ins_pic"].value;


	// /* Check if variables blank */
	// removeSpacesAndCheck(f_name);
	// removeSpacesAndCheck(l_name);
	// removeSpacesAndCheck(month);
	// removeSpacesAndCheck(year);
	// removeSpacesAndCheck(day);
	// removeSpacesAndCheck(email);
	// removeSpacesAndCheck(address_line);
	// removeSpacesAndCheck(state);
	// removeSpacesAndCheck(city);
	// removeSpacesAndCheck(zip_code);
	// removeSpacesAndCheck(phone_number);
	// removeSpacesAndCheck(gender);
	

	// removeSpacesAndCheck(ref_name);
	// removeSpacesAndCheck(ref_phone_number);
	// removeSpacesAndCheck(ref_address_line);
	// removeSpacesAndCheck(ref_state);
	// removeSpacesAndCheck(ref_city);
	// removeSpacesAndCheck(ref_zip_code);

	// removeSpacesAndCheck(relation);
	// removeSpacesAndCheck(pol_name);
	// removeSpacesAndCheck(pol_month);
	// removeSpacesAndCheck(pol_year);
	// removeSpacesAndCheck(pol_day);
	// removeSpacesAndCheck(pol_phone_number);
	// removeSpacesAndCheck(employer);
	// removeSpacesAndCheck(group_number);
	// removeSpacesAndCheck(ins_name);
	// removeSpacesAndCheck(ins_phone_number);
	// removeSpacesAndCheck(ins_address_line);
	// removeSpacesAndCheck(ins_state);
	// removeSpacesAndCheck(ins_city);
	// removeSpacesAndCheck(ins_zip_code);

	// if (ins_pic == "") //as remove spaces doesn't work
	// {
	// 	document.getElementById("error").innerHTML = "Submit picture of insurance card";
	// 	return false;
	// }


	// /* Check if variables meet certain conditions */


	// /* check for accurate DOB */

	// if (day > 30) //ensures date is correct 
	// {
	// 	if (month=="2" ||month=="4" || month=="6" || month=="9"|| month=="11")
	// 	{
	// 		document.getElementById("error").innerHTML = "Select a valid birthdate";
	// 		return false;
	// 	}
	// }

	// if (pol_day > 30) //ensures date is correct 
	// {
	// 	if (month=="2" ||month=="4" || month=="6" || month=="9"|| month=="11")
	// 	{
	// 		document.getElementById("error").innerHTML = "Select a valid policy holder birthdate";
	// 		return false;
	// 	}
	// }

	// /* check for accurate email */

	// if (!email.includes("@") || !email.includes(".") || email.length < 6) //ensures email includes "@"
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid email";
	// 	return false;
	// }
	
	// /* check for accurate phone number */

	// // get rid of spaces, dashes, and parenthesis
	// phone_number = phone_number.replace(/[- )(]/g,'');
	// ref_phone_number = ref_phone_number.replace(/[- )(]/g,'');
	// pol_phone_number = pol_phone_number.replace(/[- )(]/g,'');
	// ins_phone_number = ins_phone_number.replace(/[- )(]/g,'');

	// if(!phone_number.match(/^[0-9]+$/)) //ensures phone number is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid phone number";
	// 	return false;
	// }

	// if (phone_number.length != 10) //ensures phone number is 10 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 10 digit phone number only";
 //    	return false;
 //  	}

 //  	if(!ref_phone_number.match(/^[0-9]+$/)) //ensures phone number is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid referral phone number";
	// 	return false;
	// }

	// if (ref_phone_number.length != 10) //ensures phone number is 10 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 10 digit referral phone number only";
 //    	return false;
 //  	}

 // 	if(!pol_phone_number.match(/^[0-9]+$/)) //ensures phone number is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid policy holder phone number";
	// 	return false;
	// }

	// if (pol_phone_number.length != 10) //ensures phone number is 10 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 10 digit policy holder phone number only";
 //    	return false;
 //  	}

 //  	if(!ins_phone_number.match(/^[0-9]+$/)) //ensures phone number is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid insurance company phone number";
	// 	return false;
	// }

	// if (ins_phone_number.length != 10) //ensures phone number is 10 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 10 digit insuranc company phone number only";
 //    	return false;
 //  	}


 //  	/* check for accurate zip code */

 //  	//get rid of spaces
 //  	zip_code = zip_code.replace(/\s/g, '');
 //  	ref_zip_code = ref_zip_code.replace(/\s/g, '');
 //  	ins_zip_code = ins_zip_code.replace(/\s/g, '');


	// if(!zip_code.match(/^[0-9]+$/)) //ensures zip code is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid zip code";
	// 	return false;
	// }

	// if (zip_code.length != 5) //ensures zip code is 5 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 5 digit zip code only";
 //    	return false;
 //  	}

 //  	if(!ref_zip_code.match(/^[0-9]+$/)) //ensures zip code is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid referral zip code";
	// 	return false;
	// }

	// if (ref_zip_code.length != 5) //ensures zip code is 5 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 5 digit referral zip code only";
 //    	return false;
 //  	}

 //  	if (ins_zip_code.length != 5) //ensures zip code is 5 digits
 //  	{
 //   		document.getElementById("error").innerHTML = "Enter a 5 digit insurance company zip code only";
 //    	return false;
 //  	}

 //  	/* check for accurate group number */

 //  	//get rid of spaces
 //  	/*
 //  	group_number = group_number.replace(/\s/g, '');

 //  	if(!group_number.match(/^[0-9]+$/)) //ensures group number is only numbers
	// {
	// 	document.getElementById("error").innerHTML = "Enter a valid group number";
	// 	return false;
	// }
	// */

	//document.getElementById("form_1").submit();
	//document.getElementById("form_2").submit();

}


function checkIfSelf() //funciton to autofill if relation is self
{
	var relation = document.getElementById("relation").value;
	
	try
	{
		var f_name = document.forms["form_1"]["f_name"].value;
		var l_name = document.forms["form_1"]["l_name"].value;
		var month = document.getElementById("month").value;
		var year = document.getElementById("year").value;
		var day = document.getElementById("day").value;
		var phone_number = document.forms["form_1"]["phone_number"].value;

			if (relation == "Self")
			{
				document.forms["form_2"]["pol_name"].value = f_name + " " + l_name;
				document.getElementById("pol_month").value = month;
				document.getElementById("pol_day").value = day;
				document.getElementById("pol_year").value = year;
				document.forms["form_2"]["pol_phone_number"].value = phone_number;

			}
			else //clear if changed
			{
				document.forms["form_2"]["pol_name"].value = "";
				document.getElementById("pol_month").value = ""
				document.getElementById("pol_day").value = "";
				document.getElementById("pol_year").value = "";
				document.forms["form_2"]["pol_phone_number"].value = ""
			}
	}
	catch (e)
	{

	}
}

function removeSpacesAndCheck(str)
{
	str = str.replace(/\s/g, '');

	if (str == "") 
	{
		document.getElementById("error").innerHTML = "Cannot leave fields blank";
		return false;
	}
}
