$(document).ready(function(){

$("#currentDay").text(moment().format("dddd, MMMM Do"))

$(".saveBtn").on("click",function(){
var textvalue = $(this).siblings(".description").val()
var hour = $(this).parent().attr("id")

localStorage.setItem(hour, textvalue)    
})



})