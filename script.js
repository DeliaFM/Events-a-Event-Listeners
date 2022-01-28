$(document).ready(function(){
    console.log('ready!');  

    let my1Button = document.getElementById('btn1');

    my1Button.addEventListener('click', function btn1Function() {
        console.log('Yeah, you clicked me'); 
    
        });
    
    let my2Button = document.createElement('button');
        $('.btn-container').append(my2Button);
        $(my2Button).attr('id', 'btn2');
        $(my2Button).html('Click me! Click me!').click (function btn2Function(){
        $('#btn1').text("Look, you clicked the magic button");

    });

    let my3Button = document.createElement('button');
        $('.btn-container').append(my3Button);
        $(my3Button).attr('id', 'btn3');
        $(my3Button).html('And now have a FUN').click (function btn3Function(){
        {
            $('#btn1').css('background-color', '#872d6c');   
            $('#btn2').css('background-color', '#62439c');
            $('#btn3').css('background-color', '#178391');  
        }
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

//My notes
 //$(my2Button).html('Click me! Click me!');
 //body > div > button:nth-child(2)