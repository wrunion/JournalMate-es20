$(document).ready(function() { 
  $("form").submit(function(event){
    let title = $("input#enterTitle").val();
    let post = $("#postArea").val();
    console.log(title);
    console.log(post);
    event.preventDefault();
  });
});