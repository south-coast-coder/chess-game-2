function move(square){
	var name=document.getElementById(square).firstElementChild
	alert(name)
	if (name){
	var current=localStorage.getItem('currentPiece');
	alert(current)
	var lastSquare=localStorage.getItem('currentSquare');
	alert("Last Square"+lastSquare);
	var targetSquare=(square)
	alert("Target Square" +targetSquare)
	document.getElementById(targetSquare).innerHTML = '<img src="rook.png" alt="" class="piece" id="piece2"onclick="clicked("piece2","One1")>';
    document.getElementById(lastSquare).innerHTML = ''
   }
   else{
   	alert("Empty Square")
   }
}