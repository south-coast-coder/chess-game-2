//To DO
// Add list of pawns who made first move to local storage, check this before each pawn moves to see
function move(square){

	var nums = [1,2,3,4,5,6,7,8]
	var numsLet = ["One","Two","Three","Four","Five","Six","Seven",'Eight']
    var pieces =["black1","black2","black9"]
    function popSquares(){
	  var Squares=[]
      var Rows=["One","Two","Three","Four","Five","Six","Seven","Eight"]
      var Cols=["1","2","3","4","5","6","7","8"]
      for(var i=0;i<Cols.length;i++){
         for(var j=0;j<Rows.length;j++){
            Square=Rows[i]+Cols[j]
            Squares.push(Square)
         }
	      }
	      return Squares
	}
	// Squares=popSquares()
	Squares=["Three5","Two5","Four8"]

	

	alert("MOVE FUNCTION")  //when user clicks on square calls this plus passes its name as argument
	var current=localStorage.getItem('currentPiece')
	
	var row=current.length //check if piece is in pawns or other row
	if(row <=6){
		//alert("-1")
		var row=-1
	}
	else{
		var row=-2
		//alert("-2")
	}
	function checkPiece(row){    //first check which piece is being moved to determine how it can be moved  //HERE doesn't work - nums above 9 just return last number (i.e 10 = 0 11 =1)
            var num=current.slice(row) 
            
            if(num<9){
            	var piece ="pawn"
            	return piece
            }
            if (num ==9 || num==16){    //CHANGE THIS BACK TO 9
            	var piece ="rook"
            	return piece
            }
            if(num==11|| num==14){
            	var piece ="knight"
            	return piece
            }
            if(num==10||num==15){
            	var piece ="bishop"
            	return piece
            }
            if (num==12){
            	var piece ="queen"
            	return piece
            }
            if(num==13){
            	var piece ="king"
            	return piece
            }
	}
	var piece = checkPiece(row)  //change this to i.e var piece which will contain a string with current piece in it
	//alert("piece is a " + piece)
	var lastSquare=localStorage.getItem('currentSquare');
	var turn = localStorage.getItem("turn")
	var targetSquare=(square)   // load the last clicked piece (current), the square it was on and the target square
	//Check how far away target is (later will have different pieces)
	
	var targCol = targetSquare.slice(-1)
	var currentCol = lastSquare.slice(-1)
	var targRow = targetSquare.substr(0, targetSquare.length - 1)
	var currentRow = lastSquare.substr(0,lastSquare.length -1)
	//alert("value initially targCol"+ targCol+"targ Row "+targRow +"currentrow " +currentRow+"current Col"+currentCol)
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

   
   if (piece =="pawn"){
   	alert("pawn detected")
   	for(var i in nums){
                  if (targRow ==nums[i]){
			           var useRow=numsLet[i]
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			   }
			  }
	 for(var i in nums){
                  if (currentRow ==nums[i]){
			           var useRow2=numsLet[i]
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			   }
			  }
    	alert("in pawn")
    	if (turn=="white" && (targRow<currentRow)){
    		("invalid row")
    		return
    	}
    	if(turn=='black'&&(targRow>currentRow)){
    		alert("invalid row")
    		return
    	}
    	var num=current.slice(row) 
    	var fullPiece = turn+num
        const pawns = JSON.parse(localStorage.getItem('pawns'));
        var FoundPawn=false

         if(turn=="white"){
         	alert('white in pawn')
    	    	if(targRow<currentRow){
    	    		return
    	    	}
    	    	var checkRow=targRow-1

    	    }
    	    if (turn=="black"){
    	    	alert("black in pawn")
    	    	if(targRow>currentRow){
    	    		return
    	    	}
    	    	 var checkRow=targRow+1
    	    	 alert("here")
    	    }
    	alert("here2")
    	for(var i =0;i <pawns.length;i++){
    		
    		if(pawns[i]==fullPiece){
    			alert(pawns[i])
    			FoundPawn=true
    			alert(fullPiece)

    			alert("found piece!") 
    			break
    			}  //if is here give it two moves then remove from list
    		}
    		if (FoundPawn==true){
    		if(targRow>(currentRow+2)&& currentCol !=targCol){  // on first move can move two squares
    			alert("here!")
    			return 
    		}
    		if(Math.abs(targRow-currentRow)>2){
    			alert("invalid too many")
    			return 
    		}
    		
    		
    	   
    	    for(var i in nums){
                  if (checkRow ==nums[i]){
			           var useRow2=numsLet[i]
			alert("Test for doc get elem in bish func")

			   }
			  }
    		if((targRow-currentRow)>1){
    		var inbetweenSquare =document.getElementById((useRow2)+targCol)
    		alert("inbetweenSquare="+inbetweenSquare)
    		if(inbetweenSquare.firstElementChild!=null){  //should stop being able to jump over piece when have 2 moves

    			
    				alert("piece in between!")
    				return
    			}
    		}
    	    
    	}
        
    	//alert("foundpawn="+FoundPawn)
    	if(FoundPawn==false){   //i.e if already had two moves and been remvoed from pawn list
    		if(Math.abs(targRow-currentRow)>1){
    			alert("more than 1 row and already had 2")
    			return
    		}
    	}

    
    	
       if((targRow!=currentRow && currentCol !=targCol)){  //THIS WILL STOP DIAGONAL FROM WORKING
    		 alert("here5")
    		return
    	}  
    

    	alert("Here3")
    	
    		for(var i in nums){
            if (targRow ==nums[i]){
			var useRow=numsLet[i]
			alert("under Here3")
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			
		   }
		}
    		var col =parseInt(currentCol)
    		alert(col+1)
    		alert(targCol)
    		if(targCol == (col+1) || targCol ==(col-1)){
    			alert("diagonal")
    			var diagSquare=document.getElementById(useRow+targCol).firstElementChild
    			if(diagSquare==null){
    				alert("invalid empty square")
    				return
    			}
    		}
    		
    		if(targCol>currentCol && currentRow==targRow){
    			alert("invalid")
    			return
    		}
    		if(targCol==col){
    			var targSquare=document.getElementById(useRow+targCol).firstElementChild
    			if(targSquare!=null){
    				alert("invalid move from pawn")
    				return
    			}
    		}
}
    	 //ADD DIAGONAL CONDITION HERE ..ie tarCol (+ or -1 AND square not null (should throw anyway if OWN))
    

    function castleMove(targCol, currentCol){
    	  
    	  alert("targCol"+targCol+"currentCOl"+currentCol+"targRow"+targRow+"currentRow"+currentRow)
		    if ((Math.abs(targCol - currentCol) > 0 )&& (Math.abs(targRow - currentRow )>0)){  //testing change this and generalise once works - this is for pawns
		    	//alert("Invalid move ")  
		    	return false 
    	}
    	    if(Math.abs(targCol - currentCol) > 0 ){
    	    	alert("diff Col")
    	    	alert(Math.abs(targCol-currentCol)+"+<- difference between the Cols")
    	    	 for(var i in nums){
                  if (targRow ==nums[i]){
			           var useRow=numsLet[i]
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			   }
			  }
	    if(targCol>currentCol){
	    	alert("target Column greater")

             alert(currentCol)
             var startCol=parseInt(currentCol)+1
             var finishCol=parseInt(targCol)-1
             alert("start="+startCol+"finsih="+finishCol)
		for(var i=startCol;i<finishCol;i++){
			alert("moving up")
			alert(document.getElementsByTagName(useRow+i))
			if(document.getElementById(useRow+i)){
			if(document.getElementById(useRow+i).firstElementChild!=null){
				alert("square occupied")
				return false
                  
			}
		}
	}
	}
	else{
		alert("target Column less")
		for(var i=(currentCol-1);i>targCol;i--){
			
			if(document.getElementById(useRow+i)){
			if(document.getElementById(useRow+i).firstElementChild!=null){
				alert("square occupied")
				return false
                  
			}
		}
    }

	}
	}
		 alert("JERE IN CASTLE")
	       alert(Math.abs(targRow-currentRow))
    	    if(Math.abs(targRow - currentRow) > 0 ){
    	    	alert("diff Row")
    	    	alert(Math.abs(targRow-currentRow)+"+<- difference between the Rwos")
    	    	
    	    	 for(var i in nums){
                  if (targRow ==nums[i]){
                  	  alert("found")
			           var useRow=numsLet[i] //change this into numerical value to use 
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			   }
			  }

		if(targRow>currentRow){
			alert("targ Row greater")
	    for(var i=(currentRow+1);i<targRow;i++){ //i<4 (example) 
			

			for (var j =1;j<nums.length;j++){
				if(nums[j]==i){
					
					var useRow2=numsLet[j]

				}
			}
			

            if(document.getElementById(useRow2+targCol)){
			if(document.getElementById(useRow2+targCol).firstElementChild!=null){
				alert(document.getElementById(useRow2+targCol).firstElementChild.id)
				alert("square occupied")
				return false
                  
			}
		}
		}
	}
	if(targRow<currentRow){
		alert("targ Row less")
		 for(var i=(currentRow-1);i>targRow;i--){ //i<4 (example) 
			
			for (var j =1;j<nums.length;j++){
				if(nums[j]==i){
					
					var useRow2=numsLet[j]

				}
			}
			

            if(document.getElementById(useRow2+targCol)){
			if(document.getElementById(useRow2+targCol).firstElementChild!=null){
				alert(document.getElementById(useRow2+targCol).firstElementChild.id)
				alert("square occupied")
				return false
                  
			}
		}
		}

	}
	    

    	    
    	}
    }





    function knightMove(targCol, targRow){
    	    alert("in knightMove")
    	    currentCol=parseInt(currentCol)
    	    //alert("testing Five")
    	    //alert(targRow==currentRow-1)
    	    //alert(targCol==currentCol+2)
    	    //alert(targCol)
    	    //alert(currentCol)
    	    //alert(currentCol+2)
    	    //alert(5==3+2)
    	    //alert("targ Row == " +targRow+"currentRow=" +currentRow+"targ Col="+targCol +"current Col="+currentCol) //test this first
        	if((targRow==(currentRow-2))&& (targCol ==(currentCol-1))){
    		alert("valid One") //works
    		return
    	}
    	else if((targRow==(currentRow+2))&& (targCol ==(currentCol-1))){
    		alert("valid One") //works
    		return
    	}
    	else if ((targRow==(currentRow+2))&& (targCol ==(currentCol+1))){
    		alert("valid Two")
    		return
    }
    else if ((targRow==(currentRow-1)) && (targCol ==(currentCol+2))){ // < TEST THIS FIRST
    		alert("valid Three")
    		return
    	}
    else if ((targRow==(currentRow+1))&& (targCol ==(currentCol+2))){
    		alert("valid Four")
    		return
    	}
    else if ((targRow==(currentRow-1))&& (targCol ==(currentCol+2))){
    		alert("valid Five")
    		return
    	}
    else if ((targRow==(currentRow+1))&& (targCol ==(currentCol-2))){
    		alert("valid Six") //works
    		return
    	}
    else{
    	//alert("none of the abov")
    	return false
    }
    }
    function bishopMove (targCol,targRow){
    	
         if (currentCol ==targCol && currentRow==targRow){
         	//alert("ended bishopMove")
         	return 
         }
         if(!targRow || !targCol){
         	//alert("no targ")
         	return false
         }
         alert("currentRow"+currentRow+"targRow"+targRow)
         alert(currentRow==targRow)
         if(currentRow==targRow){
         	alert("invalid")
         	return false
         }
         //alert("current Row" +currentRow +"targ row"+targRow)
         //alert("row diff"+ (Math.abs(currentRow)-Math.abs(targRow)))
         if(Math.abs(currentRow-targRow)==1){ //this is to stop from evaluating false if only want to mvoe one square away
         	alert("only one away")
         	return true
         }
         //alert("targCol =" +targCol)
         //alert("targRow ="+targRow)
         //check if there is a piece on each square here ie if (targCol Tar Row ) !==(empty)return "invaldi move"

         if (targCol > currentCol){
         	targCol --
         }
         else{
         	targCol++
         }
         if(targRow >currentRow){
         	targRow --
         }
         else{
         	targRow++
         }

         //document.getElementById() - use this to check if squares in between are occupied or not - IMPORTANT
         //alert("targ Col now " + targCol +" Targ Row now " +targRow)
         for(var i in nums){
         if (targRow ==nums[i]){
			var useRow=numsLet[i]
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			
		}
	    }
	    var betweenSquare=document.getElementById(useRow+targCol)
	    alert("betweensquare="+betweenSquare)
	    if(betweenSquare.firstElementChild){
	    	    alert(betweenSquare.firstElementChild)
			    alert("suqare occupied")
			    var result=false
				return result

			}

         return bishopMove(targCol,targRow)
    }   //for queen try pawnMove bishopMove and castleMove as can do all three
    if (piece =="bishop"){

    	//first check if is a valid move (should be a maths way to do this)
    	if (targCol==currentCol){
    		alert("invalid move 1")
    		return
    	}
    	if (targRow==currentRow){
    		alert("invaldi move 2")
    		return 
    	}
    	//alert("math.abs current row - targ "+(Math.abs(currentRow-targRow)))
    	//alert("same for col"+ Math.abs(currentCol-targCol))
    	if (Math.abs(currentRow-targRow) != (Math.abs(currentCol-targCol))){
    		alert("Invalid move 3")
    			return 
    		}
    	

    	//Then check if piece on target is own then run the following code to check if there are pieces in the squares between 
    	result=bishopMove(targCol,targRow)
    	alert("result="+result)
    	if(result==false){
    		alert("invalid Move result==false!")
    		return   //Once this function works add it and castle check and pawn check to Queen - try all and have the others as catch 
    	}
    }
    function kingMove(targCol, targRow){
    	if((Math.abs(targCol-currentCol))>1 || Math.abs(targRow-currentRow)>1){
    		//alert("invalid move")
    		return false
    	}
    	else{
    		return 
    	}
    	}
    
    if (piece ==="king"){
    	result= kingMove(targCol, targRow)
    	if (result ===false){
    		//alert("invalid move!")
    		return
    	}
    }
    if (piece ==="rook"){
    	alert("IN ROOK HERE")
    	result = castleMove(targCol, currentCol)
    	alert("result="+result)
    	alert("HJAVE RUN CASTMOVE INSIDE ROOK")
    	if(result===false){
    		alert("invalid move!")
    		return 
    	}
    	if(turn=="white"&&whiteCheck==true){
    		alert("IN CHECK") //return? should allow opposite player to try and take first - have added this logic above - should all piece BACK IN HERE
    	}
    }
    if(piece =="queen"){
    	
    		result=castleMove(targCol, currentCol)
    		if(result==false){
    			alert("castle not worked in queen trying bishop")
    			result=bishopMove(targCol,targRow)
    			if(result==false){
    				alert("bishop failed too exiting...")
    				return 
    			}
    		}
    	}
    	
      if(piece=="knight"){
      	var result = knightMove (targCol,targRow)
      	if(result==false){
      		return
      	}
      }
    
    //if(piece =="queen"){//
    // try(i.e bishop move)
     //catch castle moe
     //catch pawnmove
     //catch invalid move return 
   // }//

	// One Two Thre Fou Fiv Six Sev Eig  
	// if target ....slice (1,3) == ""...= 1 }(i.e turn into numerical then check difference)
 
	if (turn == 'white'){  //maybe need to check if check here
		var firstLetter = "w"
		alert("piece =" + piece)
		if (piece==="rook"){
			//alert("rook")
			var piece="assets/rook.png"
		}
		else if (piece ==="knight"){
			var piece ="assets/knight.png"
		}
		else if (piece ==="bishop"){
			var piece = "assets/bishop.png"
        }
        else if (piece =="queen"){
        	var piece ="assets/queen.png"
        }
        else if(piece =="king"){
        	var piece ="assets/king.png"
        }
		else{
		var piece = "assets/pawn.png"
	    }
		}

	
	else{
		var firstLetter="b"
		alert("piece =" + piece)
		if (piece==="rook"){
			var piece="assets/rook2.png"
			alert("rook loaded")
		}
        else if (piece =="knight"){
        	var piece = "assets/knight2.png"
        }
        else if(piece =="bishop"){
          var piece = "assets/bishop2.png"
        }
        else if (piece =="queen"){
        	var piece ="assets/queen2.png"
        }
        else if(piece =="king"){
        	var piece ="assets/king2.png"
        }
		else{
		var piece = "assets/pawn2.png"
		//alert("pawn loaded")
	}
	}               //check whose turn it is 
	if (turn == "white" && current[0]!=="w"){   //check currently selected piece is of the right colour
		alert("select a piece first!")
		return false
	}
	if (turn == "black" && current[0]!=="b"){
		alert("select a piece first!")
		return false
	}
	
	
	
	alert("614 piece="+piece)
	alert("target suqare="+targetSquare)
	alert("current")
	alert("square"+square)

	
      
      
	if(document.getElementById(square).firstElementChild){
	if (document.getElementById(square).firstElementChild.id[0] ==firstLetter){   //if click on square with your own piece it will do nothing
		alert("Own")
		return

	}
	 }
       
	document.getElementById(square).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
   
    document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
    
     
	document.getElementById(square).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
    document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
    

        

        var num=current.slice(row) 
    	var fullPiece = turn+num
        var pawns = JSON.parse(localStorage.getItem('pawns'));
        

    	for(var i =0;i <pawns.length;i++){
    		
    		
    		if(pawns[i]==fullPiece){
    			
    			 alert("piece in pawns list")

    		     var newPawns =[]
    		     newPawns=pawns.splice(i,1)
    		     alert("newPawns="+newPawns)
    		     alert("pawns now" + pawns)
    		     localStorage.setItem('pawns', JSON.stringify(pawns));
    		     var pawnsNow=JSON.parse(localStorage.getItem('pawns'))
    		     alert("pawns list now=" +pawnsNow)

    		}
    	}
    
    alert("747")
    if(turn=="white"){
    	localStorage.setItem("turn","black")
    }
    if(turn=="black"){
    	localStorage.setItem("turn","white")
    }

    

}
   
   



