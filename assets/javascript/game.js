

 $(document).ready(function() {

    //--global variable--//

    var timeleft = 90;

        //  Click event to start the game.
    window.onload = function() {
        $("#start").click(downloadTimer.start);
    };

            // I replaced these js .onclick functions with jquery below...but they didn't seem to work...
        window.onload = init;function init() {
        document.getElementById("validate").onclick = results;
        document.getElementById("btnclr").onclick = clear;
    }

        // Click event to tally results after the game.
    //window.onload = function() {
        //$("#validate").click(results);
        //alert("Hello");
    //};

        // Click event to clear the answers and start again.
    //window.onload = function() {
        //$("#btnclr").click(clear);
    //};

    function results() {
        var radios = $("input");
        var correct = 0;
        var incorrect = 0;
        //var unanswered = 0;
        
        for(var i = 0; i < radios.length;  i++) {  
      
        if(radios[i].checked) {
            userInput = radios[i].value;
        }
        }

        for (var i = 0; i < radios.length; i++) {

        if (userInput == "x") {
            correct++;

        }else {
            incorrect++;

        }
        }
        $("#score").html("Correct: " + correct + "<br/>Incorrect: " + incorrect);
    }

       //Displays Answer Choices
       //for (var i = 0; i < 10; i++) {
            //var className = (i + 1).toString();
            //var answerDiv = $("<div>").addClass(className).attr("value", className);
            //answerDiv.addClass("btn d-block button");
            //answerText = currentQuestion["choice" + (i + 1)];
            //answerDiv.text(answerText);
            //$("#answerCol").append(answerDiv);
            //}
            //On Click functionality
        //$(".button").on("click", function () {
            //var buttonNumber = $(this).attr("value");
            //if (buttonNumber == "x") {
                    //trigger win
                //correct++;

            //} else {
                //incorrect++;
            //}
            
        //})

    

    
      function clear(){

        var radios = document.getElementById("quiz").getElementsByTagName("INPUT");
      
        for(var i=0; i < radios.length; i++) {
            radios[i].checked = false;
      
        if (radios[i].value == "x"){
            radios[i].parentNode.parentNode.className = "";
    }
    }
        $("#score").html("");

        $("#btnclr").click(downloadTimer.start);
    }

    //--main countdown timer--//

    var downloadTimer = setInterval(function() {
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
    }   
        else if (minutes < 10) {
        minutes = "0" + minutes;
    }

        return minutes + ":" + seconds;
    }   
            

    },1000);

    

    


});