var nameofthestudents = [];
function submit(){
    var number1 = document.getElementById("student_1").value;
    var number2 = document.getElementById("student_2").value;
    var number3 = document.getElementById("student_3").value;
    var number4 = document.getElementById("student_4").value;
    nameofthestudents.push(number1);
    nameofthestudents.push(number2);
    nameofthestudents.push(number3);
    nameofthestudents.push(number4);
     console.log(nameofthestudents);
     document.getElementById("display").innerHTML=nameofthestudents;
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sorting").style.display="inline-block";
}
function change() {
    nameofthestudents.sort();
    console.log(nameofthestudents);
    document.getElementById("display").innerHTML=nameofthestudents;

}