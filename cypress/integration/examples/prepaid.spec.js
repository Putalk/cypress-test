/// <reference types="Cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("https://account.youzan.com/login?product=retail");
  });

  it("储值规则", () => {
    cy.get(".js-tab-password-login").click();
    cy.get(".js-tab-captcha-login").click();
    cy.get('input[name="phoneInfo"]').type("13084926848");
    cy.get('input[name="smsCaptcha"]').type("123456");
    cy.get('button[type="submit"] span').click();
    const targetKdtId = "19424649";
    const url = "https://www.youzan.com/v4/assets/prepaid/card/template/create";
    const changeKdtUrl = `https://www.youzan.com/v2/account/team/change.html?kdt_id=${targetKdtId}&redirect=${url}`;
    cy.visit(changeKdtUrl);
    // 卡名称
    cy.get('input[name="templateName"]').type("测试储值卡");
    //  卡封面
    cy.get(".card-upload-txt").click();
    cy.get(".color-item:first").click();
    cy.get(".card-upload-dialog-footer button:nth-child(2)").click();
    // 卡面额
    cy.get(".add-btn").click();
    cy.get('input[placeholder="请输入卡面额"]').type("1");
    cy.get(".zent-pop-buttons button:nth-child(2)").click();
    // 适用商品
    cy.get(".zent-form__control-group:nth-child(6) label:nth-child(2)").click();
    cy.get(".zent-dialog-r-footer button:nth-child(2)").click();
    cy.get(".goods-groups-btn button").click();
    cy.get('.thead input[type="checkbox"]').click();
    cy.get(".dialog-footer__btns button:nth-child(2)").click();
    cy.get(
      ".zent-form__control-group:nth-child(7) .zent-radio-wrap:nth-child(1)"
    ).click();
    cy.get(
      ".zent-form__control-group:nth-child(8) .zent-radio-wrap:nth-child(1)"
    ).click();
    cy.get(".design-footer button").click();
    cy.get(".zent-dialog-r-footer a:nth-child(1)").click();
  });
});
