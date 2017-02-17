$(document).ready(function() {
  let burger = $('#burgerButton');
  let iceCream = $('#iceCreamButton')
  let pizza = $('#pizzaButton');
  let ribs = $('#ribButton');
  let burgerPrice = 8.99;
  let pizzaPrice = 11.99;
  let ribsPrice = 14.99;
  let icPrice = 7.99;
  let itemPrice=$('#itemPrice');
  let itemName=$('#itemName');
  let burgerName = 'Royale With Cheese';
  let icName = 'Ice Cream Biscuit';
  let pizzaName = 'Arugula Pie';
  let ribsName = "Smoked Swine";
  let sub = $('#sub_numb');
  let currentSubtotal = Number(sub.text());
  let taxes = $('#tax_numb');
  let currentTx = Number(taxes.text());
  let totes = $('#total_numb');
  let currentTotes = Number(totes.text());
  let total = 0;
  // let newNameLi = $('<li class="newNameLi"></li>')
  // let newPriceLi = $('<li class="newPriceLi"></li>')
function order() {
  burger.click(function(){
    itemName.append('<li class="name">'+burgerName+"</li>");
    itemPrice.append('<li>'+"$"+burgerPrice+'</li>')
    let currentSubtotal = Number(sub.text());
    let currentTx = Number(taxes.text());
    sub.text((currentSubtotal += burgerPrice).toFixed(2));
    console.log(currentSubtotal);
    taxes.text((currentTx += (burgerPrice*.088)).toFixed(2))
    console.log(currentTx);
    total = parseFloat((currentTx + currentSubtotal).toFixed(2));
    console.log(total);
    $('#total_numb').text(total);
    // total += (parseFloat(currentSubtotal)+parseFloat(currentTx));
    // console.log("sub=",currentSubtotal)
    // console.log("tax=",currentTx)
    // console.log(total)

  })
  pizza.click(function(){
    itemName.append('<li class="name">'+pizzaName+"</li>");
    itemPrice.append('<li class="price">'+"$"+pizzaPrice+'</li>')
    let currentSubtotal = Number(sub.text());
    sub.text((currentSubtotal + pizzaPrice).toFixed(2));
    let currentTx = Number(taxes.text());
    taxes.text((currentTx+(pizzaPrice*.088)).toFixed(2))
  })
  iceCream.click(function(){
    itemName.append('<li class="name">'+icName+"</li>");
    itemPrice.append('<li class="price">'+"$"+icPrice+'</li>')
    let currentSubtotal = Number(sub.text());
    sub.text((currentSubtotal + icPrice).toFixed(2));
    let currentTx = Number(taxes.text());
    taxes.text((currentTx+(icPrice*.088)).toFixed(2))
  })
  ribs.click(function(){
    itemName.append('<li class="name">'+ribsName+"</li>");
    itemPrice.append('<li class="price">'+"$"+ribsPrice+'</li>')
    let currentSubtotal = Number(sub.text());
    sub.text((currentSubtotal + ribsPrice).toFixed(2));
    let currentTx = Number(taxes.text());
    taxes.text((currentTx+(ribsPrice*.088)).toFixed(2))
  })
  let currentTx = Number(taxes.text());
  taxes.text((currentTx*(.088)).toFixed(2));
}
sub.text((currentSubtotal).toFixed(2));
taxes.text((currentSubtotal * 0.088).toFixed(2));
// totes.text((currentTotes+(currentTx+currentSubtotal)).toFixed(2))

order();
})
