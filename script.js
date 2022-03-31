/* Troll Game Project 3/22/2022 */
// definition of the troll battle() function which runs the game 
function trollBattle() {
	// initial prompt for the user that gets stored in a variable 
	let action = window.prompt("You're walking throught the forest minding your own business
		and a troll suddenly appears!\n\n Do you FIGHT the troll?\n\n Do you RUN from the troll?\n\n Do you BRIBE the troll?").toUpperCase();

		// switch statement to handle the players initial choice 
		switch(action) {
			case "FIGHT":{
				let skill = window.prompt("Are you a skilled fighter? (YES OR NO) ?").toUpperCase();
				let strong = window.prompt(). toUpperCase();
				// if statement that analyzes the user responses
				if (skill === "YES" || strong === "YES") {
					// the user said YES to at least one of those prompts
					// write the winning result to the document 
					document.getElementById("result").innerHTML = "You can either be more skilled or stronger than a troll to survive!<br/>You live another day!";
					// clear any losing messages from  the document 
					document.getElementById("death").innerHTML ="";
					// play the winning audio file
					document.getElementById("win").play();

				} else {
					// the user said NO to both prompts
					// write the negative result to the document
					document.getElementById("death").innerHTML = "You are not skilled or strong? why did you fight a troll?<br/>You have died!";
					// play the losing audio file 
					document.getElementById("lose").play();
				}
				break;


			} end of case FIGHT
			case "RUN": {
				let fast = window.prompt().toUpperCase();
				if ( fast === "YES") {
					// write the positive result to the document 
					document.getElementById("result").innerHTML =
					your speed has saved you! <br/> But can you live with your cowardice?;
					// play the winning audio file
					document.getElementById("win").play();

				} else {
					// write the negative result to the document 
					document.getElementById("death").innerHTML = "If you are going to be a coward, at least be fast!<br/>You have died!";
					// play the losing audio file 
					document.getElementById("lose").play();
				}
			} end of the case RUN
			case "BRIBE": {

			let money = window.prompt(" You have to pay the troll-troll./nDo you have any money?(YES or NO)").toUpperCase();
			// only ask if they have a certain amount if they respond YES to first prompt
			if(money == "YES")
				let amount = window.prompt(how much money do you have?/n Please enter a NUMERIC VALUE");
					// convert the string to an integer
					amount = parseInt(amount);
					// check the amount against our condition
					if ( amount > 50) {
						// write the positive result to the document 
						document.getElementById("result").innerHTML =
						"Great Job! The troll is happy.<br/>You may pass!";
						// play the winning audio file
						document.getElementById("win").play();

					} else {
						// user had money, just not enough
						// write the negative result to the document
						document.getElementById("death").innerHTML = "the troll needs more money than that!<br/>You have died!";
						// play the losing audio file
						document.getElementById("lose").play();


					}
					break;
			} // end of the case BRIBE
			default:{
				// the user has not entered a valid choice at the original prompt
				window.alert("You entered:" + action + ". That is not a valid choice! Please try again!");
				// run the trollBattle() function again from the beginning troll battle ();
				break;
			} // end of default case


		} // end of the switch statement


} // end of the trollBattle() function

} // end of trollBattle() function