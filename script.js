
let count = 0;
function countBs(s) {
	for (let i = 0; i >= s.length - 1; i++) {
		if (s[i] === "B") {
			count ++;
		}
	}
	return count;
}
console.log(countBs("BBQSoucebro"));
console.log("GIT");