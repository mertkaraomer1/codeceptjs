Feature('HastaneRandevu');
Before((I)=>{
I.RandevuClick
});
Scenario('HastaRandevu', async({ I,girisPagePage }) => {
    await girisPagePage.HastaneRandevusuAl();
    await girisPagePage.genelArama();
 


});