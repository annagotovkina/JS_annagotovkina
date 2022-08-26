const { I } = inject();

module.exports = {

  verifyPage(){
    I.waitForText('My account');
    I.see('My account');
  }
}