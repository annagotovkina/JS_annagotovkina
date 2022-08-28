// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    openStore() {
      this.amOnPage('http://automationpractice.com/index.php');
    },

    openProduct() {
      this.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product');
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
  });
}

