function toggleCP(){
	var cp = document.getElementById("cp");
	cp.style.height = window.innerHeight - 60+"px";
	if(cp.style.right == "0px"){
		cp.style.right = "-800px";
	} else {
		cp.style.right = "0px";
	}
}
