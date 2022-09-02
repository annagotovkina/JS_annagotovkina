/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');
type registerPage = typeof import('./pages/register.js');
type productPage = typeof import('./pages/product.js');
type tryToHelper = typeof import('./helpers/tryTo.js');
type ChaiWrapper = import('codeceptjs-chai');
type PriceConverter = import('./helpers/priceConverter.js');
type EmailGenerater = import('./helpers/emailGenerater.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage, registerPage: registerPage, productPage: productPage, tryToHelper: tryToHelper }
  interface Methods extends Playwright, ChaiWrapper, PriceConverter, EmailGenerater, REST, JSONResponse, FileSystem {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<PriceConverter>, WithTranslation<EmailGenerater>, WithTranslation<JSONResponse>, WithTranslation<FileSystem> {}
  namespace Translation {
    interface Actions {}
  }
}
