$(document).ready(function () {

    //--global variable--//
    var timeleft = 60;

    //  Click event to start the game.
    window.onload = function () {
        $("#start").click(downloadTimer.start);
    };

    // Click event to tally results after the game.
    window.onload = function () {
        $("#validate").click(results);
    };

    // Function to calculate results.
    function results() {
        // Answer variables.
        correct = 0;
        incorrect = 0;
        unanswered = 0;

        for (var i = 1; i < 11; i++) {

            if ($("input[name='q" + i + "']:checked").val() == "x") {

                correct++;
            } else if ($("input[name='q" + i + "']:checked").val() === undefined) {

                unanswered++;
            } else {

                incorrect++;
            }

            // Display results and hide unwanted elements.
            $("#title").hide();
            $("#quiz").hide();
            $("#whichState").hide();
            $("#validate").hide();
            $("#score").html("Correct: " + correct + "<br/>Incorrect: " + incorrect + "<br/>Unanswered: " + unanswered);
            $("#timer").hide();
            $("#tally").show();
            $("#clear").show();
            $("#jack").show();

        }

    };
    // If time runs out, run results function.
    setTimeout(results, 60000);

    // Hide these elements during quiz.
    $("#clear").hide();
    $("#jack").hide();
    $("#tally").hide();
    $("#alert").hide();


    //--main countdown timer--//
    var downloadTimer = setInterval(function () {
        timeleft--;
        $("#timer").text(timeleft);
        if (timeleft <= 0) {
            alert("Time's Up!!!"); // alert when time is up.
            clearInterval(downloadTimer);
        }

        //--Get the current time, pass that into the timer.timeConverter function,
        //  and save the result in a variable.
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