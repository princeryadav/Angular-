/**
 * Javascript 'this' keyword
 * Fun with this keywords
 */

//what is 'this' kyeword in javascript
//Here 'this' and 'window' are refere as global object
console.log(this);// window {}
console.log(window);// window {}
console.log(this === window);// true
console.log("this and window are same if this refer as global object");

var product = {
  Name: 'bat',
  size: 5,
  price: 0,
  getPrice: function (num) {  //Here 'this' refer to current object that is 'Porduct'.
    console.log(this.price = num)
    console.log(this === window);// false
  }
}
product.getPrice(10);
