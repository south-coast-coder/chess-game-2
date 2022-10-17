function turn(){
	localStorage.setItem("turn","white")
	var turn = localStorage.getItem("turn")
	alert("it is " + turn + "s turn")
	var lastPiece = localStorage.getItem("currentPiece") //clear current piece from local storage
	if(lastPiece !=null){
		localStorage.setItem("currentPiece","")
	}
	alert(localStorage.getItem("currentPiece"))

}