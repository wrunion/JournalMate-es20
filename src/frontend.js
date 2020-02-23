import { Entry } from './backend';

$(document).ready(function() { 
  $("form").submit(function(event){
    let userName= $("input#userName").val();
    let title = $("input#enterTitle").val();
    let post = $("#postArea").val();

    let entry = new Entry(userName, title, post);
    console.log(entry.countWords());
    console.log(entry.countVowels());
    console.log(entry.countConsonants());
    console.log(entry.getTeaser());

    entry.displayEntry();

    event.preventDefault();
  });
});


