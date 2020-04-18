// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare module "*.json"
{
    const value: any;
   export default value;
}

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
        */
        signin(data: ISignIn): Chainable<Response>
        register(data: IRegister): Chainable<Response>
        verifyOTP(data: IVerifyOtp): Chainable<Response>
        approveAccount(data: IApproveAccount): Chainable<Response>
        createOrder(data: ICreateOrder): Chainable<Response>
        donwloadQRCode(data: IDownloadQRCode): Chainable<Response>

    }
}
