function countDown () {
 let startDate = new Date(document.getElementById("startDate").value); //put the user input in global scope, as a reault we can work on diffrent function.
 let endDate = new Date(document.getElementById("endDate").value);
 // console.log(endDate); //User put end date
 let diff = Math.abs(endDate - startDate); //substract days
 let remDays = Math.round(diff/(1000*60*60*24));
    let futureDate = new Date(
        new Date().setDate(new Date().getDate() + remDays)
);
    let timer = setInterval(function () {
    let finalCountdown= futureDate- new Date().getTime();

    //  days, hours, minutes and seconds conversion
        let days = Math.floor(finalCountdown / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (finalCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor((finalCountdown % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((finalCountdown % (1000 * 60)) / 1000);

    
        document.getElementById('timer_value').innerHTML =
            days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ' + " Remaining";

        //after countdown it will show below argument
        if (finalCountdown < 0) {
            clearInterval(timer);
            document.getElementById('finish').innerHTML =
                'Your countdown is over';
        }
    }, 100);
};