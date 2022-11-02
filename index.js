

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let RandomBtn = document.querySelector("#generate_pass");
let RandomPasswordOne = document.querySelector("#random_pass1");
let RandomPasswordTwo = document.querySelector("#random_pass2");

let PasswordLength = 15;

RandomBtn.addEventListener('click', () => {
		for(let i=0; i < PasswordLength; i++){
			 let randomIndexOne = Math.floor(Math.random() * characters.length)+1;
			 let randomIndexTwo = Math.floor(Math.random() * characters.length)+1;
			 //if(i === 15){
				//break;
			//}
			RandomPasswordOne.textContent += characters[randomIndexOne];
			RandomPasswordTwo.textContent += characters[randomIndexTwo];
		}
		
		
});

function clearPassword(){
		RandomPasswordOne.textContent = "";
		RandomPasswordTwo.textContent = "";
}

/* To be able to copy the text inside a button;
Basically, since you can't use button.select(), you want to create an element that you can select in order to copy to clipboard. So by creating a temporary input element with the same content as your button, you bypass that. You can now select the input element and simply copy it. You can test this by using "paste" directly after running the code.
*/

let CopyFirstPassword = () => {
		var input = document.createElement('input');
		input.value = RandomPasswordOne.innerHTML;
		input.id = 'inputID';
		document.body.appendChild(input);
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input);
		alert("Copied the text: " + input.value);
}


let CopySecondPassword = () => {
		var input = document.createElement('input');
		input.value = RandomPasswordTwo.innerHTML;
		input.id = 'inputID';
		document.body.appendChild(input);
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input);
		alert("Copied the text: " + input.value);
}






