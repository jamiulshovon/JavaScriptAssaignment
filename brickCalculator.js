function brickCalculator(tala) {
        // 1ft-1000 brick

     if (tala >=1 && tala <=10) {
         let feet = 15*1000*tala;
         console.log(feet);
     }
  else if (tala >10 &&  tala<=20) {
    let extra= tala-10;
    let feet1=extra*12*1000;
    let feet = 15*1000*10;
    let doserbesi= feet+feet1;
    console.log(doserbesi);
}

else if(tala>20){
   let forUpToTen=10*1000*15;
   let forUpToTwenty=10*1000*12;
   let upthirty=forUpToTen+forUpToTwenty;

   let extra3=tala-20;
   let extratala=extra3*1000*10;
   let result=upthirty+extratala;

   console.log(result);}

    
}

let another = brickCalculator(1);
