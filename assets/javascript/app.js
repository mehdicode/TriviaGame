var q = 0;
var qCounter = 0;
var Qstion = "";
var correctA = 0;
var iCorrectA = 0;
var uAnsQ = 0;
var time = 15;
var qArray = [{
    question: "what is 2*7 ?",
    answers: [15, 12, 14, 16],
    cAnswer: 14
}, {
    question: "what is 7*7 ?",
    answers: [36, 48, 64, 49],
    cAnswer: 49
}, {
    question: "what is 4*12 ?",
    answers: [48, 36, 53, 46],
    cAnswer: 48
}, {
    question: "what is 12*43 ?",
    answers: [467, 516, 272, 547],
    cAnswer: 516
}, {
    question: "what is 6*9 ?",
    answers: [54, 48, 36, 56],
    cAnswer: 54
}, {
    question: "what is 8*7 ?",
    answers: [57, 52, 56, 64],
    cAnswer: 56
}, {
    question: "what is 11*11 ?",
    answers: [128, 133, 111, 121],
    cAnswer: 121
}];

var count = function() {
    time--;

    if (time > 0) {

        $("#Time").html("Time Left: " + time + " Sec");
    } else {
        $("#Time").html("Out Of Time");
        uAnsQ++;

        nextQ();
    }

};

var timer = function() {
    setInterval(count, 1000);

};


var QandA = function() {
    $("#result").hide();
    $("#qst").html(qArray[q].question);
    $("#btn1").html(qArray[q].answers[0]);
    $("#btn2").html(qArray[q].answers[1]);
    $("#btn3").html(qArray[q].answers[2]);
    $("#btn4").html(qArray[q].answers[3]);
};

var nextQ = function() {
    time = 16;
    if (q < qArray.length - 1) {
        q++;
        QandA();

    } else if (q == qArray.length - 1) {
        $("#contain").hide();
        $("#Ca").html("Correct Answer: " + correctA);
        $("#Ia").html("Incorrect Answer: " + iCorrectA);
        $("#Ua").html("Unanswered: " + uAnsQ);
        $("#result").show();



    }


};

$(document).ready(function() {
    $("button").button();

    QandA();
    timer();




    $("#btn1").on("click", function() {
        $("#btn2, #btn3, #btn4").hide(500);
        if (qArray[q].answers[0] === qArray[q].cAnswer) {
            correctA++;

            $(this).append(" <i class='glyphicon glyphicon-ok'></i>");



            setTimeout(function() {
                nextQ();
                $("#btn2, #btn3, #btn4").show();
            }, 1000);

        } else {
            iCorrectA++;
            $("#btn1").append(" <i class='glyphicon glyphicon-remove'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn2, #btn3, #btn4").show();
            }, 1000);
        }

        $("#btn1").attr("disabled", true);
        setTimeout(function() {
            $("#btn1").attr("disabled", false);
        }, 1000)


    });

    $("#btn2").on("click", function() {
        $("#btn1, #btn3, #btn4").hide(500);
        if (qArray[q].answers[1] === qArray[q].cAnswer) {
            correctA++;

            $(this).append(" <i class='glyphicon glyphicon-ok'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn1, #btn3, #btn4").show();
            }, 1000);

        } else {
            iCorrectA++;
            $("#btn2").append(" <i class='glyphicon glyphicon-remove'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn1, #btn3, #btn4").show();
            }, 1000);
        }
        $("#btn2").attr("disabled", true);
        setTimeout(function() {
            $("#btn2").attr("disabled", false);
        }, 1000)


    });

    $("#btn3").on("click", function() {
        $("#btn2, #btn1, #btn4").hide(500);
        if (qArray[q].answers[2] === qArray[q].cAnswer) {
            correctA++;

            $(this).append(" <i class='glyphicon glyphicon-ok'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn2, #btn1, #btn4").show();
            }, 1000);

        } else {
            iCorrectA++;
            $("#btn3").append(" <i class='glyphicon glyphicon-remove'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn2, #btn1, #btn4").show();
            }, 1000);
        }
        $("#btn3").attr("disabled", true);
        setTimeout(function() {
            $("#btn3").attr("disabled", false);
        }, 1000)


    });

    $("#btn4").on("click", function() {
        $("#btn2, #btn3, #btn1").hide(500);
        if (qArray[q].answers[3] === qArray[q].cAnswer) {
            correctA++;

            $(this).append(" <i class='glyphicon glyphicon-ok'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn2, #btn3, #btn1").show();
            }, 1000);

        } else {
            iCorrectA++;
            $("#btn4 ").append(" <i class='glyphicon glyphicon-remove'></i>");

            setTimeout(function() {
                nextQ();
                $("#btn2, #btn3, #btn1").show();
            }, 1000);
        }
        $("#btn4").attr("disabled", true);
        setTimeout(function() {
            $("#btn4").attr("disabled", false);
        }, 1000)

    });

    $("#Start").on("click", function() {
        correctA = 0;
        iCorrectA = 0;
        uAnsQ = 0;
        q = 0;
        QandA();
        $("#contain").show();


    });

});