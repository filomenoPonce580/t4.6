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

function printCartInventory(cart){
  //create empty string
  let result = "";
  
  //for/in loop. grab quantity and name of items. add to result
  for(let keys in cart){
    result+=`${cart[keys].quantity}x${keys}\n`
  }
  
  //return the resulting string
  return result
}
