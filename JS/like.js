var count = 12;
var voted = false;
function like(x){
	if (voted == false){
		count += x;
		voted = true;
	document.getElementById("buttonLike").style.backgroundColor = "grey";
		document.getElementById("buttonDisLike").style.backgroundColor = "grey";
	}
	else{
		count =count
	}
	document.getElementById("counter").innerHTML = count;
}
