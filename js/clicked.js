function clicked(piece,square){
	alert("Clicked")
	
	var piece=piece
	
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

