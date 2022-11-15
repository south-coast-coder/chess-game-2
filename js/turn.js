function turn(){
	localStorage.setItem("whiteCheck","false")
	localStorage.setItem("blackCheck","false")
    
    var queens=[]
    localStorage.setItem("queens",JSON.stringify(queens));
	var pawns=[]
	for(var i =1; i <17;i++){
		var piece ="white"+i
		pawns.push(piece)
	}
	for(var i =1; i <17;i++){
		var piece ="black"+i
		pawns.push(piece)
	}
	
	
	localStorage.setItem("turn","white")
	localStorage.setItem('pawns', JSON.stringify(pawns));
	var turn = localStorage.getItem("turn")
	
	var lastPiece = localStorage.getItem("currentPiece") 
	if(lastPiece !=null){
		localStorage.setItem("currentPiece","")
	}
	

}