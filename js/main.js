function greeting() {
				var greet = prompt("Hello, my name Dr. Frasier Crane, would you like to have a conversation?");
				if (greet === "yes") {
					alert("Let's start our chat then")
					var greetTrue = true;
				} else {
					alert("We are supposed to be civilized, be civilized with me.")
				}
				if (greetTrue) {
				var answerOne = prompt("What would you like to speak about?");
				var answerTwo = answerOne.toLowerCase(answerOne);
					if (answerTwo === "family") {
						var answerThree = prompt("I love that topic, how is your family?");
						answerThree = answerThree.toLowerCase(answerThree);
						var answerFour;
							if (answerThree === "good") {
								answerFour = prompt("Oh yeah?, what's good about them?");
							}
							if (answerThree === "bad") {
								answerFour = prompt("I'm sorry to hear that, why aren't they doing well?");
							}
							if (answerThree === "ok") {
								answerFour = prompt("'OK' is the lazy man's bad, what's going on, really?");
							} else {
								alert("Try again, I didn't get that");
							}
					} else {
						alert("I don;t know what you're talking about");
					}
				}
			}	
window.onload = greeting();		
