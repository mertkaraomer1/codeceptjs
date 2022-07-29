// in this file you can append custom step methods to 'I' object

module.exports = function() {

  let parameters=require('./Parameters/Hasta1.json');
  return actor({
    fields:{
      TCKimlikNo:"//input[@id='LoginForm_username']",
      Password:"//input[@id='LoginForm_password']"

    },
    buttons:{
      GirisYapBtn:"//div[@class='ant-form-item-control']"

    },



    getEnvironmetParameters:function(key){
      return parameters[key];

    },
    RandevuClick:function(){
      this.amOnpage(this.getEnvironmetParameters("url"));
      this.waitForElement(this.fields.TCKimlikNo);
      this.waitForElement(this.fields.pas);
      this.fillField(this.fields.TCKimlikNo,this.getEnvironmetParameters("TCKimlikNo"));
      pause();
      this.fillField(this.fields.Password,this.getEnvironmetParameters("Pasword"));
      this.waitForElement(this.buttons.GirisYapBtn);
      this.click(this.buttons.GirisYapBtn); 
    },
    generateTCKimlikNo:function(){
      const generateTCKN=require('tcidgen');
      return tckn=generateTCKN();
      }
  });

}
