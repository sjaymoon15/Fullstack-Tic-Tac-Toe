$(function(){

  /* Students: Add your code in this function. */
  var move = 0;
	function getAlternatingTurnSymbol() {
    move++;
    if (move % 2 === 0) {
        return "X";
    } else {
        return "O";
    }
	}

	function allLettersEqual(str) {
 	var val = str[0];
 	for (var i = 0; i < str.length; i++) {
   	if (val !== str[i]) {
     	return false;
   	}
 	}
 	return true;
	}


  $(document).on("keydown", function (event) {
  	var keys = [81,87,69,65,83,68,90,88,67];
  	var symbol = getAlternatingTurnSymbol() ;
  	for (var i = 0; i < keys.length; i++) {
  		if(event.which === keys[i]) {
  			$("#square"+(i+1)).text(symbol).addClass('cell-used');
  		}
  	}
  	if(symbol === "X"){
  				$("#nextPlayer").text("O");
  		}else {
   		    $("#nextPlayer").text("X");
    }
  	
  	// if (move % 2 === 0) {
   //      return $("#nextPlayer").text("O");
   //  } else {
   //      return $("#nextPlayer").text("X");
   //  }
   	checkWinner();
   	

  });

  function checkWinner() {
    if(allLettersEqual($('#square1, #square2, #square3').text()) ){
    	$('#square1, #square2, #square3').addClass('cell-winner');
    	 // if(symbol === "X"){
    	 // 	console.log("XXX");
    	 // }else{
    	 // 	console.log("YYY");
    	 // }
    }else if(allLettersEqual($('#square4, #square5, #square6').text()) ){
     	$('#square4, #square5, #square6').addClass("cell-winner");

    }else if(allLettersEqual($('#square7, #square8, #square9').text()) ){
    	$('#square7, #square8, #square9').addClass("cell-winner");

    }else if(allLettersEqual($('#square3, #square5, #square7').text()) ){
		 	$('#square3, #square5, #square7').addClass("cell-winner");

		}else if(allLettersEqual($('#square1, #square5, #square9').text()) ){
		 	$('#square1, #square5, #square9').addClass("cell-winner");

		}else if(allLettersEqual($('#square1, #square4, #square7').text()) ){
			$('#square1, #square4, #square7').addClass("cell-winner");

		}else if(allLettersEqual($('#square2, #square5, #square8').text()) ){
		 	$('#square2, #square5, #square8').addClass("cell-winner");

		}else if(allLettersEqual($('#square3, #square6, #square9').text()) ){
		 	$('#square3, #square6, #square9').addClass("cell-winner");
		}else if(move === 9){
		 	$(".cell").css("background-color", "#999");
		}
    	
  }
  

});