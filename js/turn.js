function turn(){
	localStorage.setItem("turn","white")
	var turn = localStorage.getItem("turn")
	alert("it is " + turn + "s turn")
}