function clicked(piece,square){
	alert("Clicked")
	alert(piece)
	var piece=piece
	alert("parent"+document.getElementById(piece).parentElement.id)
	try {
		var name =document.getElementById(piece).parentElement.id
		alert("Exists")
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

