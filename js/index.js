function spinChoice(){
    animation_time = 4;
    n_items = 5;
    i = 0;
    spin = 0;
    console.log(methods.length);

    var refreshId = setInterval(function() {
      if (i < methods.length){
        color = getRandomColor();
        document.getElementById('choice-button').innerHTML = methods[i].description;
        document.getElementById('choice-button').style.backgroundColor = color;
        i++;
      } else if (i >= methods.length){
          i = 0;
          spin++;
      };
      if (spin > 5){
        random = Math.floor(Math.random() * methods.length);
        console.log(random);
        color = getRandomColor();
        document.getElementById('choice-button').innerHTML = methods[random].description;
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