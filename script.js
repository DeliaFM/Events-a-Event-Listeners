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

        let run = true;
        $(my3Button).html('And now have a FUN').click (function btn3Function(){
        {
            if (run == true) {

                let colInput = document.getElementById('colorInput').value;
                //console.log(colInput);
                if (colInput === "") {
               
                    $('.btn-container #btn1').css('background-color', '#872d6c');   
                    $('.btn-container #btn2').css('background-color', '#62439c');
                    $('.btn-container #btn3').css('background-color', '#178391'); 
                    
                } else {
                    /**
                     * using query to change each button in collection
                     * of buttons limited by btn-container
                     */
    
                    $('.btn-container button').css('background-color', colInput);
                    
                }
                run = false;
                
            } else {
                alert("locked")
            }
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

/* Add some fun excercises 1 and 2
Exercise 1
Add an input to your previous webpage
Its default value should be "blue"
When the user clicks on the last button
Read the desired color from the input
Change the buttons' background-color to the given color
Try it with different colors

Exercise 2 (Optional)
Now your previous application changes the buttons' color whenever the input vale has changed and you clicked on the last button
Change the behavior by ignoring all the clicks after the first one. So even if the input has changed, keep the previous color if it has already changed once.

*/
