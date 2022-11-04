function turn(){
	localStorage.setItem("whiteCheck",true)
	localStorage.setItem("blackCheck",true)
	var pawns=[]
	for(var i =1; i <17;i++){
		var piece ="white"+i
		pawns.push(piece)
	}
	for(var i =1; i <17;i++){
		var piece ="black"+i
		pawns.push(piece)
	}
	alert(pawns)
	//alert(pawns[0])
	//alert(pawns[1])
	localStorage.setItem("turn","white")
	localStorage.setItem('pawns', JSON.stringify(pawns));
	var turn = localStorage.getItem("turn")
	//alert("it is " + turn + "s turn")
	var lastPiece = localStorage.getItem("currentPiece") //clear current piece from local storage
	if(lastPiece !=null){
		localStorage.setItem("currentPiece","")
	}
	//alert(localStorage.getItem("currentPiece"))

}