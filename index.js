let btn = document.getElementById("calculate");

let daysElem = document.querySelector("#days > span");
let monthsElem = document.querySelector("#months > span");
let yearsElem = document.querySelector("#years > span");

btn.addEventListener("click", function (event) {
	clearErrors();

	let currentDate = new Date();

	let year = years_inp.value;
	let month = months_inp.value;
	let day = days_inp.value;

	let birthDate = new Date(year, month - 1, day);

	let err = validateDates(day, month, year, currentDate.getFullYear());	

	if (err) {
		clearDates();
		return;
	}	

	let years = currentDate.getFullYear() - birthDate.getFullYear()
	let months = currentDate.getMonth() - birthDate.getMonth();

	if (months < 0) {
		years -= 1;
		months += 12
	}

	let days = currentDate.getDate() - birthDate.getDate();

	if (days < 0) {
		days = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - birthDate.getDate()  + currentDate.getDate();
	    
		if (months != 0) months -= 1;
		else months = 11;		
	}


	daysElem.innerHTML = days;
	monthsElem.innerHTML = months;
	yearsElem.innerHTML = years;
	
});


function validateDates(day, month, year, currentYear) {
	let err = false;

	let date = new Date(year, month, 0);

	if (!day) {
		day_error.innerHTML = "This field is required!";
		err = true;
	}

	if (!month) {
		month_error.innerHTML = "This field is required!";
		err = true;
	}

	if (!year) {
		year_error.innerHTML = "This field is required!";
		err = true;
	}

	if (day > date.getDate()) {
		day_error.innerHTML = "Must be a valid day!";
		err = true;
	}

	if (month > 12) {
		month_error.innerHTML = "Must be a valid month!";
		err = true;
	}

	if (year > currentYear) {
		year_error.innerHTML = "Must be a valid year!";
		err = true;
	}

	return err;
}


function clearErrors() {
	day_error.innerHTML = "";
	month_error.innerHTML = "";
	year_error.innerHTML = "";
}

function clearDates() {
	yearsElem.innerHTML = "- -";
	monthsElem.innerHTML = "- -";
	daysElem.innerHTML = "- -";
}