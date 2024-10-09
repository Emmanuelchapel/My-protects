// selected element to malupota
var calcBtn = document.getElementById("btn");
var openSlid = document.querySelector("#nav button");
var slid = document.querySelector("div .show");
var closeSlid = document.querySelector(".close");
var navDot = document.querySelector("#nav .nav_dot");
// disabled view button
openSlid.disabled = true;
openSlid.addEventListener("click", () =>{
   slid.classList.add("open");
   navDot.classList.add("navdot"); 
   // disable the view button when the user click on it
   openSlid.disabled = true
   
});

closeSlid.addEventListener("click",()=>{
   slid.classList.add("close1");
});

calcBtn.addEventListener("click",() =>{
    // the inputbox
    var p = document.getElementById("loanamount").value;
    var r = document.getElementById("interestrate").value;
    var t = document.getElementById("range").value;
    var navDot = document.querySelector("#nav .nav_dot");
    
    var i = 0;
    while ( i < 5) {
        loanCalc(p,r,t);
        i++;
        console.log(i)
    }
    

});

function loanCalc(principle,rate,time) {
    //var interestRate = rate /100;
    var simpleInterest = (principle * rate * time)/100;
    var totalAmount = Math.floor(simpleInterest + principle);
    document.getElementById("TotalAmount").innerHTML = "$" + (parseInt(principle) + parseInt(simpleInterest));
    // loop for the dot
    

        navDot.classList.add("active2");
        // active the view button when the navdot arev
        openSlid.disabled = false;




     
        
    // to run an alert

    if(principle == 0 && rate == 0 && time == 0){
        document.getElementById("TotalAmount").innerHTML = "$" + Intl.NumberFormat("en-US").format(totalAmount*0);
        document.getElementById("alert").innerHTML = "fill the field above";
        navDot.classList.remove("active2");
        openSlid.disabled = false;
    }
    else{
        document.getElementById("alert").innerHTML = " ";  
        
    }

 }   

 var openSlid = document.querySelector("#nav button");
 var slid = document.querySelector("div .show");
 var closeSlid = document.querySelector(".close");
 var navDot = document.querySelector("#nav .nav_dot");
 // disabled view button
 openSlid.disabled = true;
 openSlid.addEventListener("click", () =>{
    slid.classList.add("open");
    navDot.classList.add("navdot"); 
    // disable the view button when the user click on it
    openSlid.disabled = true;  
    

   
   
 });

closeSlid.addEventListener("click",()=>{
    slid.classList.remove("open");
})
 