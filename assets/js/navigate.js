var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function home(){
   document.getElementById("home").style.display='block';
 document.getElementById("education").style.display='none';
 document.getElementById("skill").style.display='none';
  document.getElementById("project").style.display='none';
 document.getElementById("mywork").style.display='none';
 document.getElementById("contact").style.display='none';

}

function education(){
   document.getElementById("home").style.display='none';
 document.getElementById("education").style.display='block';
 document.getElementById("skill").style.display='none';
  document.getElementById("project").style.display='none';
 document.getElementById("mywork").style.display='none';
 document.getElementById("contact").style.display='none';

}
function skills(){
   document.getElementById("home").style.display='none';
 document.getElementById("education").style.display='none';
 document.getElementById("skill").style.display='block';
  document.getElementById("project").style.display='none';
 document.getElementById("mywork").style.display='none';
 document.getElementById("contact").style.display='none';

}
function projects(){
   document.getElementById("home").style.display='none';
 document.getElementById("education").style.display='none';
 document.getElementById("skill").style.display='none';
 document.getElementById("project").style.display='block';
 document.getElementById("mywork").style.display='none';
 document.getElementById("contact").style.display='none';

}
function myworks(){
   document.getElementById("home").style.display='none';
 document.getElementById("education").style.display='none';
 document.getElementById("skill").style.display='none';
  document.getElementById("project").style.display='none';
 document.getElementById("mywork").style.display='block';
 document.getElementById("contact").style.display='none';

}
function contact(){
   document.getElementById("home").style.display='none';
 document.getElementById("education").style.display='none';
 document.getElementById("skill").style.display='none';
  document.getElementById("project").style.display='none';
 document.getElementById("mywork").style.display='none';
 document.getElementById("contact").style.display='block';

}
