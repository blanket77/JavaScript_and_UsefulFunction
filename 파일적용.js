var body = {
  setBackgroundColor: function(col) {
      document.querySelector('body').style.backgroundColor=col;
    },
  setColor: function(col){
    document.querySelector('body').style.color=col;
  }
}

var links = {
  setColor: function(col) {
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color = col;
      i = i+1;
  }
}
}

function night_day_button(self)
  {
    if(self.value === 'night'){
      body.setBackgroundColor("black");
      body.setColor("white");
      self.value="day";

      links.setColor("powderblue");
    }
    else{
      body.setBackgroundColor("white");
      body.setColor("black");
      self.value="night";

      links.setColor("blue");
    }
}
