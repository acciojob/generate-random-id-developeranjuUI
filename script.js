function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for(let i=0;i<l;i++){
		const randomIn = Math.floor(Math.random() * characters.length);
		result += characters[randomIn];
	}
	return result;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
