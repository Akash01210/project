document.getElementById("survey_click_button").addEventListener("click", () =>{
    var c = 0 ;
    var total = 0 ;
    var q1=document.survey.que1.value;
    var q2=document.survey.que2.value;
    var q3=document.survey.que3.value;
    var q4=document.survey.que4.value;
    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    if (q1=="5"){
        c++;console.log("q1",c);
        total++
    }
    else{
        total++;
    }
    if (q2=="10"){
        c++;console.log("q2",c);
        total++
    }
    else{
        total++;
    }
    if (q3=="4"){
        c++;console.log("q3",c);
        total++
    }
    else{
        total++;
    }
    if (q4=="3"){
        c++;console.log("q4",c);
        total++
    }
    else{
        total++;
    }
    document.write(c+"/"+total);
    
    localStorage.setItem('mark',c);
    
});



function openData() {
    var user_name = document.getElementById('username').value;
    localStorage.setItem('survey',JSON.stringify(user_name)); 
       // alert(user_name) 
}
