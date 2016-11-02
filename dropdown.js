	var cp = document.getElementById("cp");
cp.style.left = "-1200px";

function toggleCP(){

	cp.style.height = window.innerHeight - 60+"px";
	if(cp.style.left == "-1200px"){
		cp.style.left = "5px";
	} else {
		cp.style.left = "-1200px";
	}
}








function slideOpen(el){
el.style= "-webkit-transition: width 0.5s ease-in 0s";
el.style.width="300px";
el.style.visibility="visible";
}

function slideClose(el){
el.style.transition="width 1.0s linear 0s";
el.style.width="0px";
el.style.border="none";
}

