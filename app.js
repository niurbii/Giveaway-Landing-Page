//create variable to store the date we waant the countdown to be over at
var finalDate = new Date("Apr 1, 2021 12:12:12").getTime();

//update countdown by 1 sec
var t = setInterval(function() {
    // get present date and time
    var present = new Date().getTime();

    //calculate the difference between present date and final date
    var diff = finalDate - present;
    
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds} `;
})