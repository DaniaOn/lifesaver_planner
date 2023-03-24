// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//showing the current day
var currentDay = $ ("#currentDay");
currentDay.text (dayjs().format("MM/DD/YYYY"));

//showing the current hour
var currenthour = moment().hour();

$(".time-block").each(function(){
    var blockTime = $(this).attr("id").split("-")[1];
    var textEntry = localStorage.getItem(blockTime);
    var textArea = $(this).find(".description");
    textArea.val(textEntry);

    if (blockTime<currenthour){
      $(this).find("description").addClass("pass");
    }else if(blockTime == currenthour){
      $(this).find("description").addClass("present");
    }else{
      $(this).find("description").addClass("future");
    }
});

//Locastorage botton
$(".saveBtn").on("click",function(){
  var key = $(this).parent().atrr("id").split("-")[1];
  var text = $(this).parent().find(".description").val();
  localStorage.setItem(key,text);
});