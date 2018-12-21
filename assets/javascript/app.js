$(document).ready(function () {

    //--global variable--//

    var timeleft = 90;

    //  Click event to start the game.
    window.onload = function () {
        $("#start").click(downloadTimer.start);
    };

    // I replaced these js .onclick functions with jquery below...but they didn't seem to work...
   //window.onload = init;

    //function init() {
        //document.getElementById("validate").onclick = results; 
        
        //document.getElementById("clear").onclick = clear;

        //document.getElementById("quiz").getElementsByTagName("input").onclick = userInput;
    //};

    // Click event to tally results after the game.
    window.onload = function() {
        $("#validate").click(results);
        
    };

    // Click event to show the answers on another page.
    //window.onload = function() {
         //showResults = newPage;
    //};
    
    function results() {

         correct = 0;
         incorrect = 0;
         unanswered = 0;
        
        
        for (var i = 1; i < 11; i++) {
            
            if ($("input[name='q" + i + "']:checked").val() == "x")  {
            
                correct++;
            }
            else if ($("input[name='q" + i + "']:checked").val() === undefined) {
                unanswered++;
            }
            else {

                incorrect++;
            }
            //if (timeleft <= 0) {
                //unanswered = ("unchecked");
                //window.location.href="index3.html";
            //}
            
            //return results; 
        }
    
        $("#score").append("Correct: " + correct + "<br/>Incorrect: " + incorrect + "<br/>Unanswered: " + unanswered);
        //window.location.href = "index3.html";
       //newPage;
    };

    
       var delay = 90000;
       setTimeout(function(){
            //alert("Correct: " + correct + "<br/>Incorrect: " + incorrect + "<br/>Unanswered: " + unanswered);
            $("#score").append("Correct: " + correct + "<br/>Incorrect: " + incorrect + "<br/>Unanswered: " + unanswered);
            console.log("Correct: " + correct + "<br/>Incorrect: " + incorrect + "<br/>Unanswered: " + unanswered);
            window.location.href = "index3.html"; 
            
       },delay);
        
       
    

    //function clear() {

        //$("#score").html("");
    //};

    //--main countdown timer--//

    var downloadTimer = setInterval(function () {
        timeleft--;
        $("#timer").text(timeleft);
        if (timeleft <= 0)
            clearInterval(downloadTimer);
            
        //--Get the current time, pass that into the timer.timeConverter function,
        //       and save the result in a variable.
        var converted = timeConverter(timeleft);

        //--Use the variable we just created to show the converted time in the "timer" div.
        $("#timer").text(converted);

        //--Set up the countdown timer to read minutes and seconds correctly on the page. 
        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }

    }, 1000);


});