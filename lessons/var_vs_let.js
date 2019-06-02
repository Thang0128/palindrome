/*
	"var" scopes a variable to the local function
	it is defined in. Notice how the i still exists outside the for-loop
	and how the i is assigned the value from the last
	iteration.
*/
function discountPrices(prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
discountPrices([100, 200, 300], .5) // [50, 100, 150]

/*
	"let" scopes a variable to the local code block it's defined in.
	Therefore this function throws an error because "i" does not
	exist outside the code block of the for loops.
*/
function discountPrices2(prices, discount) {
  var discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
discountPrices2([100, 200, 300], .5) // [50, 100, 150]
