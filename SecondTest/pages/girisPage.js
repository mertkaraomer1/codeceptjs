const { I } = inject();

module.exports = {
  fields:{},
  select:{},
  buttons:{
    HastaneRandevusuAlBtn:"//div[@class='randevu-turu-grup-content']",
    genelAramaBtn:"//div/button[@class='ant-btn.randevu-turu-button.genel-arama-button.ant-btn-lg']"
  },
 
  HastaneRandevusuAl: async function(){
    I.waitForElement(this.buttons.HastaneRandevusuAl);
    I.click(this.buttons.HastaneRandevusuAlBtn);
  },
  genelArama:async function(){
    I.waitForElement(this.buttons.genelAramaBtn);
    I.click(this.buttons.genelAramaBtn);
  }



  // insert your locators and methods here
}
