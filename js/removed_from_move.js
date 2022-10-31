for(var i=0;i<pieces2.length;i++){ //not working yet THIS IS to build CHECK
    		    var piece =pieces2[i]
    		    alert(piece)
    		
    			for (var square in squares){
    			try{
    			var trySquare=document.getElementById(square)
    				if(trySquare.firstElementChild==piece){
    					alert("piece found")
    					try {
    						clicked(piece, square)
    					}
    					catch(error){
    						alert("not check")
    					}

    				}
    			}
    			catch(error){
    				console.log(error)
    			}