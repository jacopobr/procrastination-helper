function giveSuggestion(){
    animation_time = 2;
    n_items = 5;
    i = 0;
    spin = 0;

    var refreshId = setInterval(function() {
      if (i < suggestions.length){
        color = getRandomColor();
        document.getElementById('choice-button').innerHTML = suggestions[i].description[lang];
        document.getElementById('choice-button').style.backgroundColor = color;
        i++;
      } else if (i >= suggestions.length){
          i = 0;
          spin++;
      };
      if (spin > 5){

        random = Math.floor(Math.random() * (suggestions.length));
        console.log(random);
        color = getRandomColor();
        document.getElementById('choice-button').innerHTML = suggestions[random].description[lang];
        document.getElementById('choice-button').style.backgroundColor = color;
        
        clearInterval(refreshId);
      }

    }, animation_time/n_items *50);

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}