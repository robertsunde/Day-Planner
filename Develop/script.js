$(document).ready(function(){

$("#currentDay").text(moment().format("dddd, MMMM Do"))

$(".saveBtn").on("click",function(){
var textvalue = $(this).siblings(".description").val()
var hour = $(this).parent().attr("id")

localStorage.setItem(hour, textvalue)    
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))

function colorTime(){
var momentTime = moment().hours()
$(".time-block").each(function(){
var divTime = parseInt($(this).attr("id").split("-")[1]);

if (divTime<momentTime){
// $(this).removeClass("present future")
$(this).addClass("past")
}

else if (divTime===momentTime){
$(this).removeClass("past future")
$(this).addClass("present")
}

else {
$(this).removeClass("past present")
$(this).addClass("future")
}

})

}

colorTime()
})