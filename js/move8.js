//To DO
// Add list of pawns who made first move to local storage, check this before each pawn moves to see
function move(square){

	var nums = [1,2,3,4,5,6,7,8]
	var numsLet = ["One","Two","Three","Four","Five","Six","Seven",'Eight']
	var turn = localStorage.getItem("turn")
    if(turn=="white"){ 
    var pieces =[]
       for(var i=1;i<20;i++){
       	var addPiece="black"+(i.toString())
       	pieces.push(addPiece)
       
        }
    }
       
    

   if(turn=="black"){
    var pieces=[]
     for(var i=1;i<20;i++){
       	var addPiece="white"+(i.toString())
       	pieces.push(addPiece)
      
       }  
    } 
    
    
    function popSquares(){
	  var Squares=[]
      var Rows=["One","Two","Three","Four","Five","Six","Seven","Eight"]
      var Cols=["1","2","3","4","5","6","7","8"]
      var whiteCheck=localStorage.getItem("whiteCheck")
      var blackCheck=localStorage.getItem("blackCheck")
      for(var i=0;i<Cols.length;i++){
         for(var j=0;j<Rows.length;j++){
            Square=Rows[i]+Cols[j]
            Squares.push(Square)
         }
	      }
	      return Squares
	}
	Squares=popSquares()

	// Squares=["Six1","Four6","Four2","Five4","Seven5","Four5","Four4","Five8","Three4","Two5","Two6"] // "Seven5","Three5","Two5","Four8","Three5","Three4",


	

	
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
            if (num==12 || num>16){
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
	var testPiece=localStorage.getItem("piece")
	var lastSquare=localStorage.getItem('currentSquare');
	
	var whiteCheck=localStorage.getItem("whiteCheck")
    var blackCheck=localStorage.getItem("blackCheck")
	
	if(testPiece[0]!=turn[0]){
		if(whiteCheck=="true"||blackCheck=="true"){
			
		}

		else{
		localStorage.setItem('currentPiece', "");
	    localStorage.setItem('currentSquare', "");

		return
	}
      }
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
    	
    	if (turn=="white" && (targRow<currentRow) &&whiteCheck=="false"){
    		
    		
    		return
    	}
    	if(turn=='black'&&(targRow>currentRow)){
    		
    		return
    	}
    	if(currentRow==targRow){
    		return
    	}

    	
    	
    	var num=current.slice(row) 
    	var fullPiece = turn+num
        const pawns = JSON.parse(localStorage.getItem('pawns'));
        var FoundPawn=false

         if(turn=="white" &&whiteCheck=="false"){
         	
    	    	if(targRow<currentRow){
    	    		
    	    		return
    	    	}
    	    	var checkRow=targRow-1

    	    }
    	    if (turn=="black" &&blackCheck=="false"){
    	    	
    	    	if(targRow>currentRow){
    	    		return
    	    	}
    	    	 var checkRow=targRow+1
    	    	 
    	    }
    	
    	for(var i =0;i <pawns.length;i++){
    		
    		if(pawns[i]==fullPiece){
    			
    			FoundPawn=true
    			
    			break
    			}  //if is here give it two moves then remove from list
    		}
    		if (FoundPawn==true){
    			
    		if(targRow>(currentRow+2)&& currentCol !=targCol){  // on first move can move two squares
    			
    			return 
    		}
    		if(Math.abs(targRow-currentRow)>2){
    			
    			return 
    		}
    		
    		
    	   
    	    for(var i in nums){
                  if (checkRow ==nums[i]){
			           var useRow2=numsLet[i]
			

			   }
			  }
    		if((targRow-currentRow)>1){
    		var inbetweenSquare =document.getElementById((useRow2)+targCol)
    		if(inbetweenSquare.firstElementChild!=null){  //should stop being able to jump over piece when have 2 moves

    			
    				
    				return
    			}
    		}
    	    
    	}
       
    	//alert("foundpawn="+FoundPawn)
    	if(FoundPawn==false){   //i.e if already had two moves and been remvoed from pawn list
    		if(Math.abs(targRow-currentRow)>1){
    			alert("pawn only has one move")
    			return
    		}
    	}

    
    	
       //if((targRow!=currentRow && currentCol !=targCol)){  //THIS WILL STOP DIAGONAL FROM WORKING
    	//	 alert("here5")
    	//	return
    	//}  
    

    	
    	
    		for(var i in nums){
            if (targRow ==nums[i]){
			var useRow=numsLet[i]
			
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			
		   }
		}
    		var col =parseInt(currentCol)
    		
    		if(Math.abs(targCol-currentCol)>1){
    			alert("too far")
    			return
    		}
    		if(targCol == (col+1) || targCol ==(col-1)){
    			
    			var diagSquare=document.getElementById(useRow+targCol).firstElementChild
    			if(diagSquare==null){
    				
    				return
    			}
    			if(targRow==currentRow){
    				
    				return
    			}
    			if(Math.abs(targRow-currentRow)>1){
    				
    				return
    			}
    		}
    		
    		if(targCol>currentCol && currentRow==targRow){
    			
    			return
    		}
    		if(targCol==col){
    			var targSquare=document.getElementById(useRow+targCol).firstElementChild
    			if(targSquare!=null){
    				
    				return
    			}
    		}
    		
}
    	 //ADD DIAGONAL CONDITION HERE ..ie tarCol (+ or -1 AND square not null (should throw anyway if OWN))
    

    function castleMove(targCol, currentCol){
    	    
    	 
		    if ((Math.abs(targCol - currentCol) > 0 )&& (Math.abs(targRow - currentRow )>0)){  //testing change this and generalise once works - this is for pawns
		    	
		    	return false 
    	}
    	    if(Math.abs(targCol - currentCol) > 0 ){
    	    	
    	    	 for(var i in nums){
                  if (targRow ==nums[i]){
			           var useRow=numsLet[i]
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			   }
			  }
	    if(targCol>currentCol){
	    	

             
             var startCol=parseInt(currentCol)+1
             var finishCol=parseInt(targCol)-1
             
		for(var i=startCol;i<finishCol;i++){
			
			if(document.getElementById(useRow+i)){
			if(document.getElementById(useRow+i).firstElementChild!=null){
				
				return false
                  
			}
		}
	}
	}
	else{
		
		for(var i=(currentCol-1);i>targCol;i--){
			
			if(document.getElementById(useRow+i)){
			if(document.getElementById(useRow+i).firstElementChild!=null){
				
				return false
                  
			}
		}
    }

	}
	}
		 
    	    if(Math.abs(targRow - currentRow) > 0 ){
    	    	
    	    	
    	    	 for(var i in nums){
                  if (targRow ==nums[i]){
                  	 
			           var useRow=numsLet[i] //change this into numerical value to use 
			//alert("Test for doc get elem in bish func" + useRow + targCol)

			   }
			  }

		if(targRow>currentRow){
			
	    for(var i=(currentRow+1);i<targRow;i++){ //i<4 (example) 
			

			for (var j =1;j<nums.length;j++){
				if(nums[j]==i){
					
					var useRow2=numsLet[j]

				}
			}
			

            if(document.getElementById(useRow2+targCol)){
			if(document.getElementById(useRow2+targCol).firstElementChild!=null){
				
				return false
                  
			}
		}
		}
	}
	if(targRow<currentRow){
		
		 for(var i=(currentRow-1);i>targRow;i--){ //i<4 (example) 
			
			for (var j =1;j<nums.length;j++){
				if(nums[j]==i){
					
					var useRow2=numsLet[j]

				}
			}
			

            if(document.getElementById(useRow2+targCol)){
			if(document.getElementById(useRow2+targCol).firstElementChild!=null){
				
				return false
                  
			}
		}
		}

	}
	    

    	    
    	}
    }



/// 

    function knightMove(targCol, targRow){
    	    
    	    currentCol=parseInt(currentCol)
    	    
        	if((targRow==(currentRow-2))&& (targCol ==(currentCol-1))){
    		
    		return
    	}
    	else if((targRow==(currentRow+2))&& (targCol ==(currentCol-1))){
    		
    		return
    	}
    	else if ((targRow==(currentRow+2))&& (targCol ==(currentCol+1))){
    		
    		return
    }
    else if ((targRow==(currentRow-1)) && (targCol ==(currentCol+2))){ // < TEST THIS FIRST
    		
    		return
    	}
    	else if ((targRow==(currentRow-2)) && (targCol ==(currentCol+2))){ // < TEST THIS FIRST
    		
    		return
    	}
    else if ((targRow==(currentRow+1))&& (targCol ==(currentCol+2))){
    		
    		return
    	}
    else if ((targRow==(currentRow-1))&& (targCol ==(currentCol+2))){
    		
    		return
    	}
    else if ((targRow==(currentRow-1))&& (targCol ==(currentCol-2))){
    		
    		return
    	}

    else if ((targRow==(currentRow+1))&& (targCol ==(currentCol-2))){
    		
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
         	return false
         }
         if(!targRow || !targCol){
         	//alert("no targ")
         	return false
         }
         if(Math.abs(targRow-currentRow) != Math.abs(targCol-currentCol)){
            
         	return false
         }
         
         if(currentRow==targRow){
         	
         	return false
         }
         //alert("current Row" +currentRow +"targ row"+targRow)
         //alert("row diff"+ (Math.abs(currentRow)-Math.abs(targRow)))
         if(Math.abs(currentRow-targRow)==1){ //this is to stop from evaluating false if only want to mvoe one square away
         	
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
	    
	    if(betweenSquare.firstElementChild){
	    	    
			    var result=false
				return result

			}

         return bishopMove(targCol,targRow)
    }   //for queen try pawnMove bishopMove and castleMove as can do all three
    if (piece =="bishop"){
        
    	//first check if is a valid move (should be a maths way to do this)
    	if (targCol==currentCol){
    		
    		return
    	}
    	if (targRow==currentRow){
    		
    		return 
    	}
    	//alert("math.abs current row - targ "+(Math.abs(currentRow-targRow)))
    	//alert("same for col"+ Math.abs(currentCol-targCol))
    	
    	if (Math.abs(currentRow-targRow) != (Math.abs(currentCol-targCol))){
    		
    			return false
    		}
    	

    	//Then check if piece on target is own then run the following code to check if there are pieces in the squares between 
    	result=bishopMove(targCol,targRow)
    	
    	if(result==false){
    		
    		
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
    		
    		return
    	}
    }
    if (piece ==="rook"){
    	
    	result = castleMove(targCol, currentCol)
    	
    	if(result===false){
    		
    		return 
    	}
    	
    }
    if(piece =="queen"){
    	
    		result=castleMove(targCol, currentCol)
    		if(result==false){
    			
    			result=bishopMove(targCol,targRow)
    			if(result==false){
    			
    				
    				return false
    			}
    		}
    	}
    	
      if(piece=="knight"){
      	var result = knightMove (targCol,targRow)
      	if(result==false){
      		return
      	}
      }
    
    
 
	if (turn == 'white'){  
		var firstLetter = "w"
		
		if (piece==="rook"){
			
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
        	var kingPiece = "true"
        	
        }
		else{
		var piece = "assets/pawn.png"
		var pawnPiece="true"
	    }
		}

	
	else{
		var firstLetter="b"
		
		if (piece==="rook"){
			var piece="assets/rook2.png"
			
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
        	var kingPiece = "true"
        }
		else{
		var piece = "assets/pawn2.png"
		var pawnPiece="true"
		//alert("pawn loaded")
	}
	}               //check whose turn it is 
	if (turn == "white" && current[0]!=="w" && whiteCheck=="false"){   //check currently selected piece is of the right colour
		
		return false
	}
	if (turn == "black" && current[0]!=="b" && blackCheck=="false"){
		
		return false
	}
	var whiteCheck=localStorage.getItem("whiteCheck")
	var blackCheck=localStorage.getItem("blackCheck")
	
	if((turn =="white" && whiteCheck=="false")||(turn=="black" && blackCheck=="false")){
	for(var i=0;i<Squares.length;i++){
		    	
         	var testKing=document.getElementById(Squares[i])
         	
        	if(testKing.firstElementChild!=null){
        		var test=testKing.firstElementChild.id
        		
        		if(turn=="white"){
        	    if(test=="white13"){
        	    var kingSquare=Squares[i]
                
        	}
        }
               if(turn=="black"){
               	if(test=="black13"){
        	    var kingSquare=Squares[i]
                
        	}

               }

         }
     }
    
             if(document.getElementById(targetSquare).firstElementChild){
             	
             	
                  var removePiece=document.getElementById(targetSquare).firstElementChild
                 
                  for(var i=0;i<pieces.length;i++){
                  	if(pieces[i]==removePiece.id){
                  		
                  		var spliceIndex=i
                  	    break
                  		 
                  	}
                  }
                 pieces.splice(spliceIndex,1)
                  
             }
	
	
	
	
    }
	
    // HERE need to run move against king - when you do set blackCheck to true (in local storage before running -won't run on last pass and will reset to false)
    if((turn=="white"&& whiteCheck=="false")||(turn="black" && blackCheck=="false")){
	if(document.getElementById(square).firstElementChild){
	if (document.getElementById(square).firstElementChild.id[0] ==firstLetter){   //if click on square with your own piece it will do nothing
		// alert("Own Piece")
		return

	}
	 }
	}


    var prevHTML=document.getElementById(square).innerHTML
    
    var turn2 = localStorage.getItem("turn")


    
    if(turn2=="white"&&whiteCheck=="true"){
    	
    	var check="true"
    	localStorage.setItem("whiteCheck","false")
    	localStorage.setItem("blackCheck","false")
    	return check
    }
    if(turn2=="black"&&blackCheck=="true"){
    	alert("739 in check")
    	var check="true"
    	localStorage.setItem("whiteCheck","false")
    	localStorage.setItem("blackCheck","false")
    	return check
    }
	document.getElementById(square).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
   
    document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
    
    
    
    for(var i=0;i<Squares.length;i++){
            localStorage.setItem("blackCheck","true")
            localStorage.setItem("whiteCheck","true")
            
    	    
         	
        	if(document.getElementById(Squares[i]).firstElementChild){  //trying to take king with each piece UNLESS HAS JUST BEEN TAKEN i.e so isn't in pieces
                
        		var tryPiece=document.getElementById(Squares[i]).firstElementChild.id
        	    
        	    
        	    
        	    for(var j=0;j<pieces.length;j++){

        	    if(tryPiece==pieces[j]){
        	    	clicked(tryPiece,Squares[i])
        	    	
        	    	
                    var whiteCheck=localStorage.getItem("whiteCheck")
                    var blackCheck=localStorage.getItem("blackCheck")
                    
                   
                    if( kingPiece=="true"){
                    	
                    	kingSquare=square
                    }
                    localStorage.setItem("whiteCheck","true")
                    localStorage.setItem("blackCheck","true")
                   
	        	    var result=move(kingSquare)
	        	 
	        	    
	        	    if (result=="true"){
	        	    	alert("747 in check typiece="+tryPiece)
	        	    	document.getElementById(lastSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+lastSquare+'\')">'; //puts piece back where it was if in check
                        document.getElementById(targetSquare).innerHTML=prevHTML
                         localStorage.setItem("whiteCheck","false")
                       localStorage.setItem("blackCheck","false")
	        	    	

	        	    	return
	        	    	
	        	    }
        	}
        	}
        }

         }
     
	
    
    if(turn =="white" && result=="true"){ //This will allow to make the move and see if would put you in check (or not get you out of it)
    	alert("in check")
    	alert("put in check by"+tryPiece)
        document.getElementById(lastSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+lastSquare+'\')">'; //puts piece back where it was if in check
        document.getElementById(targetSquare).innerHTML=prevHTML
        localStorage.setItem("whiteCheck","false")
         localStorage.setItem("blackCheck","false")
        return
    }
    if(turn=="black" && result=="true"){
    	 //This will allow to make the move and see if would put you in check (or not get you out of it)
    	alert("in check")
    	alert("put in check by"+tryPiece)
        document.getElementById(lastSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+lastSquare+'\')">'; //puts piece back where it was if in check
        document.getElementById(targetSquare).innerHTML=prevHTML
        localStorage.setItem("blackCheck","false")
        localStorage.setItem("whiteCheck","false")
        return
    }
       
    
        

        var num=current.slice(row) 
        var turn2 = localStorage.getItem("turn")
        
    	var fullPiece = turn2+num
        var pawns = JSON.parse(localStorage.getItem('pawns'));
        
       
        localStorage.setItem("blackCheck","false")
        localStorage.setItem("whiteCheck","false")
    	for(var i =0;i <pawns.length;i++){
    		
    		
    		if(pawns[i]==fullPiece){
    			
    			 

    		     var newPawns =[]
    		     newPawns=pawns.splice(i,1)
    		     
    		     localStorage.setItem('pawns', JSON.stringify(pawns));
    		     var pawnsNow=JSON.parse(localStorage.getItem('pawns'))
    		     

    		}
    	}
    
    
    for(var i=0;i<Squares.length;i++){
    	if(document.getElementById(Squares[i]).firstElementChild){
    		var try2=document.getElementById(Squares[i]).firstElementChild.id
    	    if(try2== fullPiece){
    	    	
    	    	newSquare=Squares[i]
    	    }
    	}
    }
    
    var turn2 = localStorage.getItem("turn")
    
    if(turn2=="white" && square.charAt(0)=="E" || turn2=="black" && square.charAt(0)=="O"){
    
    if(pawnPiece=="true"){
    	
    	if(turn2=="white"){
    		piece="assets/queen.png"
    	}
    	if(turn2=="black"){
    		piece="assets/queen2.png"
    	}
    
    var queens = JSON.parse(localStorage.getItem('queens'));
    if(queens.length==0){
    	current=turn2+"17"
    	queens.push(17)
    	

    }else{
    var lastQueen=queens.slice(-1)
    
    var newQueen=(parseInt(lastQueen))+1
    current=turn2+(newQueen.toString())
    queens.push(newQueen)

     localStorage.setItem('queens', JSON.stringify(queens));
     
 }
    }
}
    document.getElementById(square).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
   
    document.getElementById(lastSquare).innerHTML = ""
    
    if(turn2=="white"){
    	alert("changing turn to black")
    	localStorage.setItem("turn","black")
    	 localStorage.setItem("whiteCheck","false")
    	 localStorage.setItem("blackCheck","false")
    }
    if(turn2=="black"){
    	alert("changing turn to white")
    	localStorage.setItem("turn","white")
    	 localStorage.setItem("whiteCheck","false")
    	 localStorage.setItem("blackCheck","false")
    }
}
   


   
   


