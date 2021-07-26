        const calcy = () =>{
        let wd = document.getElementById('wd').value;
        let maths = document.getElementById('maths').value;
        let comp = document.getElementById('comp').value;
        let his = document.getElementById('his').value;
        let phy = document.getElementById('phy').value;
        let grades = "";
      
      
        let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(his) + parseFloat(phy);
        alert(totalGrades);
      
        let perc = (totalGrades/500) * 100;
        alert(perc);
      
        debugger;
      
        if(perc <= 100  && perc >= 80){
          grades = 'A';
        }
        else if(perc <= 79  && perc >= 60){
           grades = 'B';
        }
        else if(perc <= 59  && perc >= 40){
           grades = 'C';
        }
        else if(perc <= 49  && perc >= 30){
            grades = 'D';
         }
        else{
           grades = 'F';
        }
      
        if(perc >= 39.5){
          document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
        }
        else{
          document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
        }
      
        
      }
      
      