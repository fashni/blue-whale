function zoom(element) {
	document.getElementById("image").src = element.src;
		document.getElementById("zoom").style.display = "block";
}
function show_hide(id) {
	var x = document.getElementById(id);
	if (x.style.display == 'block') {
		x.style.display = 'none';
	} else { 
		x.style.display = 'block';
	}
}
function showDesc() {
	document.getElementById("slidena").style.display='none';
	document.getElementById("deskripsi").style.display='block';
	document.getElementById("habitat_").style.display='none';
	document.getElementById("taksonomi").style.display='none';
	document.getElementById("evolusi").style.display='none';
	document.getElementById("anatomi").style.display='none';
	document.getElementById("populasi").style.display='none';
}
function showHab() {
	document.getElementById("slidena").style.display='none';
	document.getElementById("deskripsi").style.display='none';
	document.getElementById("habitat_").style.display='block';
	document.getElementById("taksonomi").style.display='none';
	document.getElementById("evolusi").style.display='none';
	document.getElementById("anatomi").style.display='none';
	document.getElementById("populasi").style.display='none';
}
function showTaks() {
	document.getElementById("slidena").style.display='none';
	document.getElementById("deskripsi").style.display='none';
	document.getElementById("habitat_").style.display='none';
	document.getElementById("taksonomi").style.display='block';
	document.getElementById("evolusi").style.display='none';
	document.getElementById("anatomi").style.display='none';
	document.getElementById("populasi").style.display='none';
}
function showEvo() {
	document.getElementById("slidena").style.display='none';
	document.getElementById("deskripsi").style.display='none';
	document.getElementById("habitat_").style.display='none';
	document.getElementById("taksonomi").style.display='none';
	document.getElementById("evolusi").style.display='block';
	document.getElementById("anatomi").style.display='none';
	document.getElementById("populasi").style.display='none';
}
function showAnat() {
	document.getElementById("slidena").style.display='none';
	document.getElementById("deskripsi").style.display='none';
	document.getElementById("habitat_").style.display='none';
	document.getElementById("taksonomi").style.display='none';
	document.getElementById("evolusi").style.display='none';
	document.getElementById("anatomi").style.display='block';
	document.getElementById("populasi").style.display='none';
}
function showDep() {
	document.getElementById("slidena").style.display='none';
	document.getElementById("deskripsi").style.display='none';
	document.getElementById("habitat_").style.display='none';
	document.getElementById("taksonomi").style.display='none';
	document.getElementById("evolusi").style.display='none';
	document.getElementById("anatomi").style.display='none';
	document.getElementById("populasi").style.display='block';
}
function home() {
	document.getElementById("slidena").style.display='block';
	document.getElementById("deskripsi").style.display='none';
	document.getElementById("habitat_").style.display='none';
	document.getElementById("taksonomi").style.display='none';
	document.getElementById("evolusi").style.display='none';
	document.getElementById("anatomi").style.display='none';
	document.getElementById("populasi").style.display='none';				
}