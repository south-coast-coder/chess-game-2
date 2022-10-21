function move(square){

	var nums = [1,2,3,4,5,6,7,8]
	var numsLet = ["One","Two","Three","Four","Five","Six","Seven",'Eight']

	alert("MOVE FUNCTION")  //when user clicks on square calls this plus passes its name as argument
	var current=localStorage.getItem('currentPiece')
	function checkPiece(current){    //first check which piece is being moved to determine how it can be moved
            num=current.slice(-1)
            if(num < 9){
            	return
            }
            else{
            	
            	alert("current piece is a castle")
            	return true
            }
	}
	var isCastle=checkPiece(current)
	var lastSquare=localStorage.getItem('currentSquare');
	var turn = localStorage.getItem("turn")
	var targetSquare=(square)   // load the last clicked piece (current), the square it was on and the target square
	//Check how far away target is (later will have different pieces)
	
	var targCol = targetSquare.slice(-1)
	var currentCol = lastSquare.slice(-1)
	var targRow = targetSquare.substr(0, targetSquare.length - 1)
	var currentRow = lastSquare.substr(0,lastSquare.length -1)
	alert("currentRow now" + currentRow)
	for (var i in numsLet){   //Convert column name from string to number so can compare difference
		
		if (targRow ==numsLet[i]){
			var targRow=nums[i]
           
	}
    }
    for (var i in numsLet){   //Convert column name from string to number so can compare difference
		
		if (currentRow ==numsLet[i]){
			var currentRow=nums[i]
           
    }
     }  

   
    alert("Targ Row" + targRow + "TargCol"+targCol+"current Row"+currentRow +"Current Col"+currentCol)
    alert("Col diff" + (targCol-currentCol))

    alert("Row diff" + (targRow - currentRow))
    if (isCastle){
    	alert("IsCastle")
    	if((targRow!=currentRow && currentCol !=targCol)){
    		alert("Not Same row or col")
    		return
    	}
    }
    if ((targCol-currentCol) > 1){
    	alert("Greater")
    	return

    }
    if ((isCastle===false) && ((targCol - currentCol) > 1 || (targRow - currentRow > 1)|| (targRow-currentRow < 0))){  //testing change this and generalise once works - this is for pawns
    	alert("Invalid move ")  //above last means cant's move'bkacwards' IS THIS
    	return
    	
    }

	// One Two Thre Fou Fiv Six Sev Eig  
	// if target ....slice (1,3) == ""...= 1 }(i.e turn into numerical then check difference)
 
	if (turn == 'white'){
		alert("White's turn")
		var firstLetter = "p"
		if (isCastle){
			var piece="castle.png"
		}
		else{
		var piece = "rook.png"
	    }
	}
	else{
		alert("Black's turn")
		var firstLetter="b"
		if (isCastle){
			var piece="castle.png"
		}
		else{
		var piece = "rook2.png"
	}
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
		document.getElementById(targetSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
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
	
	
	document.getElementById(targetSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
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

