
var string = ""
var letter =  document.getElementById("letterDiv");

function alphabet_write(x)
{
  string=string+x;
  string = decodeURIComponent(string);
  letter.innerHTML = string;
  }


function number_c()
{
string = string.substr(0, string.length-1); 
 letter.innerHTML = string;
}



function number_write(x)
{
  
  if(x>=0 && x<=9)
  {
    letter.style.color= "maroon";
    if(isNaN(letter.value))
   letter.innerHTML = 0;
 letter.innerHTML = (letter.innerHTML * 10)+x;
  }
}

function google()
{
  var str = string;
  str=decodeURIComponent(str);
str="https://translate.google.com?hl=en&source=hp&q" + str + "&aq=f&oq=&aqi=";

popitup(str);

  
}

function popitup(url) {
  newwindow=window.open(url,'_blank', 'location=yes');
 if (window.focus) {newwindow.focus()}
 return false;
}

