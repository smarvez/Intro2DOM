function changePic (){
  var main = document.getElementById('image');
    main.src = 'images/fallow-deer-602253__480.jpg';
}


//Change the headings text color to blue
//HINT: it's a class!
var headings = document.getElementsByClassName('headings');
for(var i = 0; i < headings.length; i++){
  headings[i].style.color = 'blue';
}

//Change the button's background-color to green
var button = document.getElementById('button');
button.style.backgroundColor = 'green';

//Change the paragraph font to 'Arial'
var paragraph = document.getElementsByClassName('paragraph')[0];
paragraph.style.fontFamily =  'Arial';

//Change the entire documents background color to yellow
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor= 'yellow';
