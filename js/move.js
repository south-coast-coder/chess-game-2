function move(square){

	alert("MOVE FUNCTION")  //when user clicks on square calls this plus passes its name as argument
	var current=localStorage.getItem('currentPiece')
	var lastSquare=localStorage.getItem('currentSquare');
	var turn = localStorage.getItem("turn")
	var targetSquare=(square)   // load the last clicked piece (current), the square it was on and the target square
	if (turn == 'white'){
		alert("White's turn")
		var firstLetter = "p"
		var piece = "rook.png"
	}
	else{
		alert("Black's turn")
		var firstLetter="b"
		var piece = "rook2.png"
	}               //check whose turn it is 
	alert("current=" + current)
	if (turn == "white" & current[0]!=="p"){   //check currently selected piece is of the right colour
		alert("current "+current)
		alert("select a piece first!")
		return
	}
	if (turn == "black" & current[0]!=="b"){
		alert("current "+current)
		alert("select a piece first!")
		return
	}
	if (document.getElementById(square).firstElementChild == null){ // !!!! Broken here - code runs but piece simply vanishes - problem must be in inner HTML call
		alert("empty")
		alert("current" + current)
		var targ=(document.getElementById(targetSquare))
		alert("target" +targ.id)
		document.getElementById(targetSquare).innerHTML = '<img src="'+piece+'"alt="" class="piece" id='+ current +' onclick="clicked('+current +','+targ+')>'; //puts piece in new square
        document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
         if (turn =="white"){
    	localStorage.setItem("turn","black")
    	return
    }
    if (turn =="black"){
    	localStorage.setItem("turn","white")
    }
        return   //if square is empty add a piece to it then switch turns

	}
	if (document.getElementById(square).firstElementChild.id[0] ==firstLetter){   //if click on square with your own piece it will do nothing
		alert("Own")
		return

	}
	else{
	alert("MOVE")
	alert (turn)
	alert(firstLetter)
	var name=document.getElementById(square).firstElementChild
	alert("Black or White: " + name.id[0] )
	if (name.id[0]==firstLetter) //check if trying to take own piece!
	{
		alert("Own Piece!")
		return 
	}
	
	
	document.getElementById(targetSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id='+ current +' onclick="clicked(current,"One1")>'; //puts piece in new square
    alert("to replace" + lastSquare)
    document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
    if (turn =="white"){
    	localStorage.setItem("turn","black")
    }
    if (turn =="black"){
    	localStorage.setItem("turn","white")
    }
   }
   
}
