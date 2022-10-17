function move(square){
	var turn = localStorage.getItem("turn")
	alert (turn)
	if (turn == 'white'){
		var firstLetter = "p"
	}
	else{
		var firstLetter="b"
	}
	alert(firstLetter)
	var name=document.getElementById(square).firstElementChild
	//alert(name)
	if (name.id[0]=='b'){

	var current=localStorage.getItem('currentPiece');
	//alert(current)
	var lastSquare=localStorage.getItem('currentSquare');
	//alert("Last Square"+lastSquare);
	var targetSquare=(square)
	//alert("Target Square" +targetSquare)
	document.getElementById(targetSquare).innerHTML = '<img src="rook.png" alt="" class="piece" id='+ current +' onclick="clicked(current,"One1")>';
    document.getElementById(lastSquare).innerHTML = ''
    if (turn =="white"){
    	localStorage.setItem("turn","black")
    }
    if (turn =="black"){
    	localStorage.setItem("turn","white")
    }
   }
   else{
   	alert("Square occupied")
   }
}