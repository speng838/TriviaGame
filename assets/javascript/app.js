  $("#main2").hide();
  $("#main3").hide();
  $("#main4").hide();
  $("#main5").hide();
  $("#main6").hide();
  $("#main7").hide();
  $("#main8").hide();
  $("#main9").hide();
  $("#finalMain").hide();
  $("#startOver").hide();

  $("#answer1").hide();
  $("#answer2").hide();
  $("#answer3").hide();
  $("#answer4").hide();
  $("#answer5").hide();
  $("#answer6").hide();
  $("#answer7").hide();
  $("#answer8").hide();

  var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

  


 var timerId = 0;
    
$("#start").on("click",  function(){
    
    theTime1();
});

function theTime1(){
timerId = setInterval(countdown, 1000);
    $("#main").hide();
    $("#main2").show();
     


    var timeLeft = 30;

    function countdown() {
        
      if (timeLeft == 0) {
        clearTimeout(timerId);
        //doSomething();
        result();
        } 
      else {
        $("#display").text("time remaining " + timeLeft + " seconds!");
        timeLeft--;
        }
    }
}

    function theTime2(){
    timerId = setInterval(countdown, 1000);
    
    var timeLeft = 30;
    
    function countdown() {
        
      if (timeLeft == 0) {
        clearTimeout(timerId);
        //doSomething();
        result2();
        } 
      else {
        $("#display").text("time remaining " + timeLeft + " seconds!");
        timeLeft--;
        }
    }
}


function theTime3(){
    timerId = setInterval(countdown, 1000);

    var timeLeft = 30;

    function countdown() {
    
      if (timeLeft == 0) {
        clearTimeout(timerId);
        //doSomething();
        result3();
        } 
      else {
        $("#display").text("time remaining " + timeLeft + " seconds!");
        timeLeft--;
        }
    }
}

function theTime4(){
    
    timerId = setInterval(countdown, 1000);

    var timeLeft = 30;

    function countdown() {
        
      if (timeLeft == 0) {
        clearTimeout(timerId);
        //doSomething();
        result4();
        } 
      else {
        $("#display").text("time remaining " + timeLeft + " seconds!");
        timeLeft--;
        }
    }
}

function theTime5(){
   
    timerId = setInterval(countdown, 1000);

    var timeLeft = 30;

    function countdown() {
        
      if (timeLeft == 0) {
        clearTimeout(timerId);
        //doSomething();
        result5();
        } 
      else {
        $("#display").text("time remaining " + timeLeft + " seconds!");
        timeLeft--;
        }
    }
}
function theTime6(){
   
   timerId = setInterval(countdown, 1000);

   var timeLeft = 30;

   function countdown() {
       
     if (timeLeft == 0) {
       clearTimeout(timerId);
       //doSomething();
       result6();
       } 
     else {
       $("#display").text("time remaining " + timeLeft + " seconds!");
       timeLeft--;
       }
   }
}
function theTime7(){
   
   timerId = setInterval(countdown, 1000);

   var timeLeft = 30;

   function countdown() {
       
     if (timeLeft == 0) {
       clearTimeout(timerId);
       //doSomething();
       result7();
       } 
     else {
       $("#display").text("time remaining " + timeLeft + " seconds!");
       timeLeft--;
       }
   }
}
function theTime8(){
   
   timerId = setInterval(countdown, 1000);

   var timeLeft = 30;

   function countdown() {
       
     if (timeLeft == 0) {
       clearTimeout(timerId);
       //doSomething();
       result8();
       } 
     else {
       $("#display").text("time remaining " + timeLeft + " seconds!");
       timeLeft--;
       }
   }
}
    
function testing(){
    timerId = setInterval(countdown, 1000);
    
    var timeLeft = 30;
    
    function countdown() {
        
      if (timeLeft == 0) {
        clearTimeout(timerId);
        //doSomething();
        } 
      else {
        $("#display").text("time remaining " + timeLeft + " seconds!");
        timeLeft--;
        }
    }
}

    $("#gw").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main2").hide();
        $("#answer1").show();
        $("#answer1a").text("Nope! The correct answer was Abraham Lincoln");
        incorrect++;
        resultPage();
    });
    
    $("#al").on("click",function(){
        clearInterval(timerId);
        $("#main2").hide();
        $("#answer1").show();
        $("#answer1a").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage();
    });
    
    $("#tj").on("click",function(){
        clearInterval(timerId);
        $("#main2").hide();
        $("#answer1").show();
        $("#answer1a").text("Nope! The correct answer was Abraham Lincoln");
        incorrect++;
        resultPage();
    });
    
    $("#dt").on("click",function(){
        clearInterval(timerId);
        $("#main2").hide();
        $("#answer1").show();
        $("#answer1a").text("Nope! The correct answer was Abraham Lincoln");
        incorrect++;
        resultPage();
    });

    //2===========================================================================
    $("#japan").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main3").hide();
        $("#answer2").show();
        $("#answer2b").text("Nope! The correct answer was Thailand");
        incorrect++;
        resultPage2();
    });
    
    $("#jamaca").on("click",function(){
        clearInterval(timerId);
        $("#main3").hide();
        $("#answer2").show();
        $("#answer2b").text("Nope! The correct answer was Thailand");
        incorrect++;
        resultPage2();
    });
    
    $("#thailand").on("click",function(){
        clearInterval(timerId);
        $("#main3").hide();
        $("#answer2").show();
        $("#answer2b").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage2();
    });
    
    $("#srilanka").on("click",function(){
        clearInterval(timerId);
        $("#main3").hide();
        $("#answer2").show();
        $("#answer2b").text("Nope! The correct answer was Thailand");
        incorrect++;
        resultPage2();
    });

//3============================================================================
    $("#two").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main4").hide();
        $("#answer3").show();
        $("#answer3c").text("Nope! The correct answer was Six");
        incorrect++;
        resultPage3();
    });
    
    $("#five").on("click",function(){
        clearInterval(timerId);
        $("#main4").hide();
        $("#answer3").show();
        $("#answer3c").text("Nope! The correct answer was Six");
        incorrect++;
        resultPage3();
    });
    
    $("#seven").on("click",function(){
        clearInterval(timerId);
        $("#main4").hide();
        $("#answer3").show();
        $("#answer3c").text("Nope! The correct answer was Six");
        incorrect++;
        resultPage3();
    });
    
    $("#six").on("click",function(){
        clearInterval(timerId);
        $("#main4").hide();
        $("#answer3").show();
        $("#answer3c").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage3();
    });
//4======================================================================================
    $("#elonMusk").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main5").hide();
        $("#answer4").show();
        $("#answer4d").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage4();
    });
    
    $("#billGates").on("click",function(){
        clearInterval(timerId);
        $("#main5").hide();
        $("#answer4").show();
        $("#answer4d").text("Nope! The correct answer was Elon Musk");
        incorrect++;
        resultPage4();
    });
    
    $("#jackMa").on("click",function(){
        clearInterval(timerId);
        $("#main5").hide();
        $("#answer4").show();
        $("#answer4d").text("Nope! The correct answer was Elon Musk");
        incorrect++;
        resultPage4();
    });
    
    $("#jeffBezos").on("click",function(){
        clearInterval(timerId);
        $("#main5").hide();
        $("#answer4").show();
        $("#answer4d").text("Nope! The correct answer was Elon Musk");
        incorrect++;
        resultPage4();
    });
//5======================================================================================
    $("#newYork").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main6").hide();
        $("#answer5").show();
        $("#answer5e").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage5();
    });
    
    $("#losAngelas").on("click",function(){
        clearInterval(timerId);
        $("#main6").hide();
        $("#answer5").show();
        $("#answer5e").text("Nope! The correct answer was New York");
        incorrect++;
        resultPage5();
    });
    
    $("#washingtonDC").on("click",function(){
        clearInterval(timerId);
        $("#main6").hide();
        $("#answer5").show();
        $("#answer5e").text("Nope! The correct answer was New York");
        incorrect++;
        resultPage5();
    });
    
    $("#chicago").on("click",function(){
        clearInterval(timerId);
        $("#main6").hide();
        $("#answer5").show();
        $("#answer5e").text("Nope! The correct answer was New York");
        incorrect++;
        resultPage5();
    });
//6======================================================================================
    $("#lebronJames").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main7").hide();
        $("#answer6").show();
        $("#answer6f").text("Nope! The correct answer was Michael Jordan");
        incorrect++;
        resultPage6();
    });
    
    $("#stephonMarbury").on("click",function(){
        clearInterval(timerId);
        $("#main7").hide();
        $("#answer6").show();
        $("#answer6f").text("Nope! The correct answer was Michael Jordan");
        incorrect++;
        resultPage6();
    });
    
    $("#michaelJordan").on("click",function(){
        clearInterval(timerId);
        $("#main7").hide();
        $("#answer6").show();
        $("#answer6f").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage6();
    });
    
    $("#steveNash").on("click",function(){
        clearInterval(timerId);
        $("#main7").hide();
        $("#answer6").show();
        $("#answer6f").text("Nope! The correct answer was Michael Jordan");
        incorrect++;
        resultPage6();
    });
//7======================================================================================
    $("#volkswagen").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main8").hide();
        $("#answer7").show();
        $("#answer7g").text("Correct!  Congratulations, You chose the right answer");
        correct++;
        resultPage7();
    });
    
    $("#ford").on("click",function(){
        clearInterval(timerId);
        $("#main8").hide();
        $("#answer7").show();
        $("#answer7g").text("Nope! The correct answer was Volkswagen");
        incorrect++;
        resultPage7();
    });
    
    $("#toyoda").on("click",function(){
        clearInterval(timerId);
        $("#main8").hide();
        $("#answer7").show();
        $("#answer7g").text("Nope! The correct answer is Volkswagen");
        incorrect++;
        resultPage7();
    });
    
    $("#volvo").on("click",function(){
        clearInterval(timerId);
        $("#main8").hide();
        $("#answer7").show();
        $("#answer7g").text("Nope! The correct answer was Volkswagen");
        incorrect++;
        resultPage7();
    });
//8======================================================================================
    $("#seven").on("click",function(){
        clearInterval(timerId); //stops the time from moving any further
        $("#main9").hide();
        $("#answer8").show();
        $("#answer8h").text("Nope! The correct answer was eight");
        incorrect++;
        resultPage8();
    });
    
    $("#nine").on("click",function(){
        clearInterval(timerId);
        $("#main9").hide();
        $("#answer8").show();
        $("#answer8h").text("Nope! The correct answer was eight");
        incorrect++;
        resultPage8();
    });
    
    $("#ten").on("click",function(){
        clearInterval(timerId);
        $("#main9").hide();
        $("#answer8").show();
        $("#answer8h").text("Nope! The correct answer was eight");
        incorrect++;
        resultPage8();
    });
    
    $("#eight").on("click",function(){
        clearInterval(timerId);
        $("#main9").hide();
        $("#answer8").show();
        $("#answer8h").text("Correct! Congratulations, You chose the right answer");
        correct++;
        resultPage8();
    });

    
//Result---------------------------------------------------------------------------------------
    function result(){
        $("#main2").hide();
        $("#main3").hide();
        $("#answer1").show();
        $("#answer1").text("Time is up! The correct answer was Abraham Lincoln");
        unanswered++;
        resultPage();
    }
    function result2(){
        $("#main2").hide();
        $("#main3").hide();
        $("#answer2").show();
        $("#answer2").text("Time is up! The correct answer was Thailand");
        unanswered++;
        resultPage2();
    }
    function result3(){
        $("#main3").hide();
        $("#main4").hide();
        $("#answer3").show();
        $("#answer3").text("Time is up! The correct answer was Six");
        unanswered++;
        resultPage3();
    }
    function result4(){
        $("#main4").hide();
        $("#main5").hide();
        $("#answer4").show();
        $("#answer4").text("Time is up! The correct answer was Elon Musk");
        unanswered++;
        resultPage4();
    }
    function result5(){
        $("#main5").hide();
        $("#main6").hide();
        $("#answer5").show();
        $("#answer5").text("Time is up! The correct answer was New York");
        unanswered++;
        resultPage5();
    }
    function result6(){
        $("#main6").hide();
        $("#main7").hide();
        $("#answer6").show();
        $("#answer6").text("Time is up! The correct answer was Michael Jordan");
        unanswered++;
        resultPage6();
    }
    function result7(){
        $("#main7").hide();
        $("#main8").hide();
        $("#answer7").show();
        $("#answer7").text("Time is up! The correct answer was Volkswagen");
        unanswered++;
        resultPage7();
    }
    function result8(){
        $("#main8").hide();
        $("#main9").hide();
        $("#answer8").show();
        $("#answer8").text("Time is up! The correct answer was Volkswagen");
        unanswered++;
        resultPage8();
    }

    //resultPage----------------------------------------------------------------------------
    var resultPageTime
    function resultPage(){
        
        resultPageTime = setTimeout(function() {
          question2();
        }, 5000);
        //clearTimeout();
    }
    function resultPage2(){
        
        resultPageTime = setTimeout(function() {
          question3();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").show();
          $("#answer2").hide();
        }, 5000);   
    }
    function resultPage3(){
        
        resultPageTime = setTimeout(function() {
          question4();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").hide();
          $("#main5").show();
          $("#answer3").hide();
        }, 5000);   
    }
    function resultPage4(){
        
        resultPageTime = setTimeout(function() {
          question5();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").hide();
          $("#main5").hide();
          $("#main6").show();
          
          $("#answer4").hide();
        }, 5000);
    }
    function resultPage5(){
        
        resultPageTime = setTimeout(function() {
          question6();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").hide();
          $("#main5").hide();
          $("#main6").hide();
          $("#main7").show();
          
          $("#answer5").hide();
        }, 5000);
    }
    function resultPage6(){
        
        resultPageTime = setTimeout(function() {
          question7();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").hide();
          $("#main5").hide();
          $("#main6").hide();
          $("#main7").hide();
          $("#main8").show();
          
          $("#answer6").hide();
        }, 5000);
    }
    function resultPage7(){
        
        resultPageTime = setTimeout(function() {
          question8();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").hide();
          $("#main5").hide();
          $("#main6").hide();
          $("#main7").hide();
          $("#main8").hide();
          $("#main9").show();

          $("#answer7").hide();
        }, 5000);
    }
    function resultPage8(){
        
        resultPageTime = setTimeout(function() {
          question9();
          $("#main2").hide();
          $("#main3").hide();
          $("#main4").hide();
          $("#main5").hide();
          $("#main6").hide();
          $("#main7").hide();
          $("#main8").hide();
          $("#main9").hide();

          $("#finalMain").show();
          $("#startOver").show();
          $("#correct").text("Correct answers: " + correct);
          $("#incorrect").text("Incorrect answers: " + incorrect);
          $("#unanswered").text("Unanswered: " + unanswered);
          $("#startOver").on("click", function(){
            $("#finalMain").hide();
            $("#main2").show();
            $("#startOver").hide();
            //theTime2();
            correct = 0;
            incorrect = 0;
            unanswered = 0;
          });

          $("#answer8").hide();
        }, 5000);
    }
//-----------------------------------------------------------------------------------------

    function question2(){
        theTime2();
        $("#answer1").hide();
        $("#main3").show();
        
    }
    function question3(){
        theTime3();
        $("#answer2").hide();
        $("#main3").show();
        
    }
    function question4(){
        theTime4();
        $("#answer3").hide();
        $("#main4").show();
        
    }
    function question5(){
        theTime5();
        $("#answer4").hide();
        $("#main5").show();
        
    }

    function question6(){
        theTime6();
        $("#answer5").hide();
        $("#main6").show();
        
    }
    function question7(){
        theTime7();
        $("#answer6").hide();
        $("#main7").show();
        
    }
    function question8(){
        theTime8();
        $("#answer7").hide();
        $("#main8").show();
        
    }
    function question9(){
        $("#answer8").hide();
        $("#main9").show();
        
    }
  