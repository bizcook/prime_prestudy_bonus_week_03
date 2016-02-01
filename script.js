function A (a) {
	return a*a;
}

function B (b) {
	return b+30;
}

function C (c) {
	return c-3;
}

A (B (C (2)));

//returns 841
//also, not sure if i'm doing this right.