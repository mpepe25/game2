$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var u
    var timeLeft = 15;
    var timerInterval
    var questionList = [
        {
            question: 'Which of these is NOT a name of the Distney Child group',
            answers: ['Beyonce knowlege', 'Kelly Price', 'Michelle William', 'Kelly Roland'],
            rightAnswer: "Kelly Price",
            userAnswer: ""
        },
        // Console.log (question1.correctAnswer) = B. Kelly Price
        {

            question: "Which singer released the hit song.'In Da Club'?",
            answers: ['Eminem', 'Lil wayne', '50 cent', 'Kanye West'],
            rightAnswer: "50 cent",
            userAnswer: ""
        },
        {
            question: "Which popular Distney Movie featured the song, 'breaking free'?",
            answers: ['High School Musincal', 'You can fly', 'Friend like me', 'A whole new World'],
            rightanswer: "High School Musical",
            userAnswer: ""
        },
        {
            question: "Finsish this line from that so Raven theme song: 'Let’s go, if you can gaze into the future:'?",
            answers: ['future, future', 'Where Everybody Knows Your Name', 'Moonlighting', 'Leave It All To Me'],
            rightAnswer: "future,future",
            userAnswer: ""
        },
        {
            question: "what was christ Rock best friend's name?",
            answers: ['Jerome', 'grey', 'James', 'Drew'],
            rightAnswer: "grey",
            userAnswer: ""
        },

    ]

    $('#start').on("click", function () {
        $("#start").hide()
        $("#time").show()

        for (var i = 0; i < questionList.length; i++) {
            var div = $("<div>")
                .addClass("questiondiv");
            var p = $("<p>")
                .text(questionList[i].question)
            $("#questionaires").append(p)
            for (var j = 0; j < questionList[i].answers.length; j++) {

                // print out radio buttons 
                $("#questionaires").append(`
                <div class="form-check form-check-inline my-2">
                    <input class="form-check-input" name="${i}" type="radio" value="${questionList[i].answers[j]}">
                    <label class="form-check-label answers" for="${questionList[i].answers[j]}">${questionList[i].answers[j]}</label>
                 </div>`)

            }
            $("#questionaires").append(div)


        }
        timerInterval = setInterval(runTimer, 1000)
    });






    $("#questionaires").on("change", '.form-check-input', function () {
        console.log(this)

        var questionIndex = $(this).attr('name')
        var answer = $(this).val()

        questionList[questionIndex].userAnswer = answer

        console.log(questionList)
    })



    // create a function that checks if user answer equals the correct answer

    function checkQuiz() {

        var unAnswered = 0
        
        // you need to use a loop here
        for (var i = 0; i < questionList.length; i++) {
            console.log(questionList[i].rightAnswer + "this is the user's " + questionList[i].userAnswer)
            if (questionList[i].rightAnswer == questionList[i].userAnswer) {
                correctAnswers++
            }
            if (questionList[i].userAnswer === "") {
                unAnswered ++
            }
            else {
                incorrectAnswers++
            }

        }

       
        $("#correct").text(correctAnswers)
        $("#incorrect").text(incorrectAnswers)
        $("#unanswers").text(unAnswered)

        $("#resultsMessage").show()
        $("#questionaires").hide()
        $("#submit").hide()
        $("#time").hide()
        clearInterval(timerInterval)

    }
    function runTimer() {
        timeLeft -= 1;
        $("#timer").text(timeLeft);
        if (timeLeft === 0) {
            checkQuiz()

        }

    }
    // create a click function that runs the checkQuiz function when pressed
    $('#submit').on("click", function () {
        checkQuiz()
        // var quBox = $('#questionaires')
        // quBox.append(`Name: <input type="text" name="fname">
        // <input type="submit" value="Submit"></input>`)

    })

    // this closes the document.ready do not remove everything goes inside of it
})
