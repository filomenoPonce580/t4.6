//part 1

function calculateCartTotal(cart){
  //empty array
  let prices = [];
  
  //loop through objects to grab price in cents
  for(let keys in cart){
    prices.push(cart[keys].quantity * cart[keys].priceInCents)
  }
  
  //reduce and return
  return prices.reduce((a,c)=>a+c, 0)
}


//part 2
function printCartInventory(cart){}
