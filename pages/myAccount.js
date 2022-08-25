const { I } = inject();

module.exports = {

  verifyPage(){
    I.see('MY ACCOUNT', '.page-heading');
  }
}