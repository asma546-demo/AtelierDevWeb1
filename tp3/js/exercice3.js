let age= Number(prompt("donner votre age:"));
let prix;
if(isNaN(age)|| age<0){
    alert("age invalide");
}
else{
    if(age<12 ){
        prix="3dt";
     } else if (age<18){
            prix="5dt";
        }else if(age>=65){
            prix="4dt";
        }else{
            prix="8dt";
        }
        alert(`${age}ans: ${prix}`);
    }
        