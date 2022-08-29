const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  productShipping: { css: '#total_shipping' },
  productTotalPrice: { css: '#total_price' },
  addToCartButton: { css: '#add_to_cart' },
  proceedToCheckoutButton: { xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'},
  proceedToCheckoutButton2: { xpath: '//*[@id="center_column"]/p[2]/a[1]'},
  proceedToCheckoutButton3: { xpath: '//button[@name="processAddress"]'},
  selectCheker: { css: '#cgv'},
  proceedToCheckoutButton4: { xpath: '//button[@name="processCarrier"]'},
  payByBankWireButton: { xpath: '//a[@class="bankwire"]'},
  confirmButton: { xpath: '//*[@id="cart_navigation"]/button'},
  //orderReference: { xpath: '/html/body/div/div[2]/div/div[3]/div/div/text()[6]'},

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  clickAddToCart() {
    I.click(this.addToCartButton);
  },

  clickProceedToCheckout() {
    I.waitForText('Proceed to checkout');
    I.click(this.proceedToCheckoutButton);
  },

  async getProductShipping() {
    return await I.grabTextFrom(this.productShipping);
  },

  async getProductTotalPrice() {
    return await I.grabTextFrom(this.productTotalPrice);
  },

  clickProceedToCheckout2() {
    I.waitForText('Proceed to checkout');
    I.click(this.proceedToCheckoutButton2);
  },

  clickProceedToCheckout3() {
    I.waitForText('Proceed to checkout');
    I.click(this.proceedToCheckoutButton3);
  },

  checkSelectCheker() {
    I.waitForText('I agree to the terms of service and will adhere to them unconditionally.');
    I.checkOption(this.selectCheker);
  },

  clickProceedToCheckout4() {
    I.click(this.proceedToCheckoutButton4);
  },

  clickPayByBankWire() {
    I.waitForText('Pay by bank wire');
    I.click(this.payByBankWireButton);
  },

  clickConfirmButton() {
    I.waitForText('I confirm my order');
    I.click(this.confirmButton);
  },

  verifyPage(){
    I.waitForText('Your order on My Store is complete.');
    I.see('Your order on My Store is complete.');
  // insert your locators and methods here
},

/*async getOrderReference() {
  return await I.grabTextFrom(this.orderReference);
},*/

}
