// $(document).ready(function() {
 

//     $("#stream1_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream');
//        $(".stream2").removeClass('highlight_stream');
//        $(".stream3").removeClass('highlight_stream');
//          $(".stream1").addClass('highlight_stream');
//    });
//    $("#stream2_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream');
//        $(".stream2").removeClass('highlight_stream');
//        $(".stream3").removeClass('highlight_stream');
//          $(".stream2").addClass('highlight_stream');
//    });
//    $("#stream3_btn").on("click", function() {
//        $(".stream1").removeClass('highlight_stream');
//        $(".stream2").removeClass('highlight_stream');
//        $(".stream3").removeClass('highlight_stream');
//          $(".stream3").addClass('highlight_stream');
//    });


// }); 

//another variant

// $(document).ready(function() {
 

//   $("#stream1_btn").click(function() {
//       $(".stream1").removeClass('highlight_stream');
//      $(".stream2").removeClass('highlight_stream');
//      $(".stream3").removeClass('highlight_stream');
//        $(".stream1").addClass('highlight_stream');
//  });
//  $("#stream2_btn").on("click", function() {
//      $(".stream1").removeClass('highlight_stream');
//      $(".stream2").removeClass('highlight_stream');
//      $(".stream3").removeClass('highlight_stream');
//        $(".stream2").addClass('highlight_stream');
//  });
//  $("#stream3_btn").on("click", function() {
//      $(".stream1").removeClass('highlight_stream');
//      $(".stream2").removeClass('highlight_stream');
//      $(".stream3").removeClass('highlight_stream');
//        $(".stream3").addClass('highlight_stream');
//  });


// }); 


// $(document).ready(function() {
 

//   $("p").click(function() {
//     $("p").css('color', 'red');
//  });
 
//    $("h2").hover(function() {
//     $("h2").css('background', 'lightblue');
//  });

//   $(".card-panel").mouseenter(function() {
//     $("body").css('background-color', 'black');
//  });
 
//    $(".card-panel").mouseleave(function() {
//     $("body").css('background-color', '#e1e2e2');
//  });

// }); 


// show//hide

// $(document).ready(function() {
 

//   $("#stream1_btn").click(function() {
//       $(".stream1").hide();
//       $(".stream1").show('slow');
      // $(".stream1").show('medium');
      // $(".stream1").show('fast');
      // $(".stream1").show(1000);
    
//  });


// }); 


// $(document).ready(function() {
 

//   $("#card-panel-1").click(function() {
//       $("#card-panel-1").hide('slow');
//  });
 
//  $("#card-panel-2").click(function() {
//       $("#card-panel-2").hide('medium');
//  });
 
//  $("#card-panel-3").click(function() {
//       $("#card-panel-3").hide('fast');
//  });
 
//  $("#card-panel-4").click(function() {
//       $("#card-panel-4").hide(3000);
//  });
 
// }); 


//  $("#myButton").removeClass("blueBox").addClass("border");
//     $("p").css("color", "blue").slideUp(2000).slideDown(2000);
//     $("a").attr("href", "http://www.example.com");



//     $(document).ready(function() {
 
//       $("button").mouseenter(function() {
//       $("button").removeClass('make-red').addClass('make-border');
//    });
  
//       $("button").mouseleave(function() {
//       $("button").removeClass('make-border').addClass('make-red');
//    });
  
//   }); 


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// $('p').click(function() {
// 	$(this).slideToggle('slow');
// });

//!!!!!!!!!!!!!!!!!!!!!!
// $('button').mouseenter(function() {
// 	$(this).removeClass('makeRed').addClass('makeBlue');
// });

// $('button').mouseleave(function() {
// 	$(this).removeClass('makeBlue').addClass('makeRed');
// });


//!!!!!!!!!!!!!!!!!!
$(document).ready(function() {
  $(".box").on("click", function() {
    /**
     * When we click on an element that has
     * a 'box' class, this event will be fired.
     */
    var classNames = $(this).attr("class").split(" ");
    var boxClass = classNames[0];
    var className = classNames[1];
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      // If this object is already red, turn it black
      $("." + className).css("background-color", "#000"); 
    } else {
      // Else turn all elements with a box class black
      // and then change the color of all elements
      // with the same class name as the clicked element
      // to red.
      $("." + boxClass).css("background-color", "#000");
      $("." + className).css("background-color", "red");
    }
  });
})

$('p').click(function() {
	$(this).text('Changed only the text for this paragraph');
});

$(".card").mouseenter(function() {
     $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
});

$(".module-nav").on("click", function(){
 
  let allModulesCardsSelector = ".card";
  let thisModuleCardsSelector = "." + this.id + "-card";
 
 $(allModulesCardsSelector).removeClass("card-highlight");
 
  $(thisModuleCardsSelector).addClass("card-highlight");
});

$("p").click(function(){
  $(this).children().css("background-color","yellow");
});


//TOGGLE !!!!
$("button").click(function() {
  $(this).next().slideToggle("slow");
});

// Братья и сестры — это все элементы, кроме самого себя, внутри того же родителя, что и данный элемент HTML.
// Эта функция перемещается вперед и назад по родственным элементам элементов DOM.


$('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function(){
	$(this).siblings('span').addClass('yellow')
});

$('#card-btn-2').click(function(){
	$(this).siblings('#card-par-1').addClass('red')
});

$('#card-btn-3').click(function(){
	$(this).siblings().addClass('large-font')
});




let bookCharacter = {
  name: "Reginald Jeeves",
  employer: "Bertram Wilberforce Wooster",
  novels: 11,
  shortStories: 35,
  printStatus: function () {
      console.log(this.name + " works for " + this.employer);
  },
}

console.log(bookCharacter.employer);
console.log(bookCharacter["novels"]);
console.log(bookCharacter.printStatus());