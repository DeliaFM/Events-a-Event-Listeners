$(document).ready(function(){
    console.log('ready!');  

    let my1Button = document.getElementById('btn1');

    my1Button.addEventListener('click', function btn1Function() {
        console.log('Yeah, you clicked me'); 
        });
    
         
  });

/*
Exercise 1
Create a webpage
Add a button to the body
Insert jQuery
Add a script at the end of the body
Add an event listener to the button
Log 'Yeah, you clicked me' to the console when the user clicks on the button

Exercise 2
Add another button to the webpage
When the user clicks on the second button change the first button's text

Exercise 3
Add a third button to the webpage
When the user clicks on the last button, change the background-color of each button
*/