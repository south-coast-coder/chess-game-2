function clicked(piece,square){
	alert("Clicked")
	
	var piece=piece
	localStorage.setItem("piece",piece)
	var turn=localStorage.getItem("turn")
	var whiteCheck=localStorage.getItem("whiteCheck")
	var blackCheck=localStorage.getItem("blackCheck")
	if(piece[0]!=turn[0]){
		if(turn=="white" && whiteCheck=="true"){
			alert("testing check in click 10 pass")

		}
		else if(turn=="black" && blackCheck=="true"){
			alert("testing check in click 10 pass")

		}

		else{
		alert("select own piece!")
		localStorage.setItem('currentPiece', "");
	    localStorage.setItem('currentSquare', "");
		return
	}
      }
	
	try {
		var name =document.getElementById(piece).parentElement.id
		
		localStorage.setItem('currentPiece', piece);
	    localStorage.setItem('currentSquare', name);
	}
    catch{
	var name="no square"
	alert ("no square")
	console.log("name"+name)
	localStorage.setItem('currentPiece', piece);
	localStorage.setItem('currentSquare', name);
}
}

