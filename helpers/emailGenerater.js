const Helper = require('@codeceptjs/helper');

class EmailGenerater extends Helper {

  async getRandomEmail() {
    return Date.now() + '@test.com';
  }

}

module.exports = EmailGenerater;
