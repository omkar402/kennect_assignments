
function isPrime(n)
{
	// Corner cases
	if (n <= 1) return false;
	if (n <= 3) return true;
	
	// This is checked so that we can skip
	// middle five numbers in below loop
	if (n%2 == 0 || n%3 == 0) return false;
	
	for (let i=5; i*i<=n; i=i+6)
		if (n%i == 0 || n%(i+2) == 0)
		return false;
	
	return true;
}

// Function to return the smallest
// prime number greater than N

function nextPrime(N)
{

	// Base case
	if (N <= 1)
		return 2;

	let prime = N;
	let found = false;

	// Loop continuously until isPrime returns
	// true for a number greater than n
	while (!found) {
		prime++;

		if (isPrime(prime))
			found = true;
	}

	return prime;
}

// Driver code

	let N = 1;
	if(!isPrime(N))
	{
		++N;
	}
	
    var a=nextPrime(N);
	console.log(N);
	console.log(a);
	console.log(a-N);


