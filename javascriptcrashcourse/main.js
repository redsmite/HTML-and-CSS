console.log('hello');


function changeText(){
	var heading = document.getElementById('heading');
	heading.innerHTML='You clicked!';
}

function changeBackground(x){
	console.log(x.value);
	var body = document.getElementById('body');
	body.style.backgroundColor=x.value;
}

function validateForm(){
	var firstName = document.forms["myForm"]["firstName"].value;
	if(firstName == null || firstName == ""){
		alert("First name is required");
		return false;
	}
	if(firstName.length <8){
		alert("First name must be at least 8 chars");
		return false;
	}

}