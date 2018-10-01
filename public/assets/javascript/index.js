/**
* Handles the post function when posting new burgers.
*/
$("#postSubmit").on("click",function(event){
  event.preventDefault();
  console.log($("#newBurgerInp").val());
  $.ajax({
    type:"POST",
    data: {burgerName: $("#newBurgerInp").val()}
  }).then(function(){
    $("#newBurgerInp").empty();
    location.reload(true);
  });
});
/**
* Handles the update function when updating undevoured burgers.
*/
$("#devourButton").on("click",function(){
  $.ajax({
    type: "PUT",
    data: {bool:true, id: $(this).attr("value")}
  }).then(function(){
    //refreshes the page
    location.reload(true);
  });
});
/**
* Handles the update function when updating devoured burgers.
*/
$("#regurgitate").on("click",function(){
  $.ajax({
    type: "PUT",
    data: {bool:false, id: $(this).attr("value")}
  }).then(function(){
    //refreshes the page
    location.reload(true);
  });
});
