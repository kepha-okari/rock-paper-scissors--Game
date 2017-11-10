
 //BUSINESS LOGIC


 var compChoice = function() {
 	var rand = Math.floor((Math.random()*3)+1);
 		return rand;
 }

var compare = function(choice1,choice2) {

 	 if (choice1 === choice2) {
                return "It's a tie!";
            }
            // ROCK
        	else if (choice1 === 1) {
	                if (choice2 === 3) {
	                    // rock wins
	                    return "You win!";
	                } else {
	                    // paper wins
	                    return "You lose! ";
	                }
	        }
            //PAPER
	        else if (choice1 === 2) {
	                if (choice2 === 1) {
	                    // paper wins
	                    return "You win!";
	                } else {
	                    // scissors wins
	                    return "You lose! ";
	                }
            }
            //SCISSOR
	        else if (choice1 === 3) {
	                if (choice2 === 1) {
	                    // rock wins
	                    return "You lose! ";
	                } else {
	                    // scissors wins
	                    return "You win!";
	                }
         }
 
 }


//to display what comp and user choose
function words(choice){
	if (choice===1){
		return "ROCK";
	} else if(choice===2) {
		return "PAPER";
	} else{
		return "SCISSORS";
	}

}

 // function to display the selected image
  function displayImage (chosen,chosen2) {
    $("#computerReplace").attr("src","images/" + chosen + ".jpg").hide().fadeIn();
    $("#replace").attr("src","images/" + chosen2 + ".jpg").hide().fadeIn();
   
  }

 //USER INTERFACE
 $(document).ready(function(){
 	// this is Rock button
 	$("button#rock").click(function(event){
 		event.preventDefault();

 		choice1 = compChoice();

 		console.log(choice1);
 		choice2 = 1;

 		$("#computerChose").text(words(choice1));
 		$("#youChoice").text(words(choice2));
 		 $("#resultsPanel").show(3000).fadeOut(3000);


 		var results = compare(choice2,choice1);
 		$("#resultColor").text(results).show(2000).fadeOut(5000);

 		displayImage (choice1,choice2);
 	});

 	// this is paper button
 	$("button#paper").click(function(event){
 		event.preventDefault();

 		choice1 = compChoice();

 		console.log(choice1);
 		choice2 = 2;

 		$("#computerChose").text(words(choice1));
 		$("#youChoice").text(words(choice2));
 		$("#resultsPanel").show(3000).fadeOut(3000);


 		var results = compare(choice2,choice1);
 		$("#resultColor").text(results).show(2000).fadeOut(5000);

 		displayImage (choice1,choice2);


 		//alert(results);
 	});

 	// this is Rock button
 	$("button#scissors").click(function(event){
 		event.preventDefault();

 		choice1 = compChoice();

 		console.log(choice1);
 		choice2 = 3;

 		$("#computerChose").text(words(choice1));
 		$("#youChoice").text(words(choice2));
 		$("#resultsPanel").show(3000).fadeOut(3000);

 		var results = compare(choice2,choice1);
 		$("#resultColor").text(results).show(2000).fadeOut(5000);

 		displayImage (choice1,choice2);

 		//alert(results);
 	});

 	// refresh the page for new game
    $('#refreshButton').click(function() {
    location.reload();

	});




 });

 