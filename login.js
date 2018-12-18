var attempt = 3; 
function validate(){
	var username = document.getElementById("user").value;
	var password = document.getElementById("pw").value;

	if (username == "KyezaMs" && password == "12345678") {
		alert ("Login successfully");
		window.location = "profile_home.html";
		return false;
	} else if (username == "admin" && password == "12345678"){
		alert ("Login successfully");
		window.location = "admin_view.html";
		return false;
	else {
		attempt --;
		alert("You have left "+attempt+" attempt;");
		
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("user").disabled = true;
			document.getElementById("pw").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}