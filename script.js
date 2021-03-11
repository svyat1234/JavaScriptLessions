// 5

var tab;
var tabContent;

window.onload = function(){
	tabContent = document.getElementsByClassName('tabContent');
	tab = document.getElementsByClassName('tab');
	hideTabsContent(1);	
}

function hideTabsContent(a){
	for(var i = a; i < tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');		
	}	
}

document.getElementById('tabs').onclick = function(event){
	var target = event.target;
	if(target.className == 'tab'){
		for(var i = 0; i < tab.length; i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}


// 6

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// 7


function myMove() {
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame() {
	  if (pos == 350) {
		clearInterval(id);
	  } else {
		pos++;
		elem.style.top = pos + 'px';
		elem.style.left = pos + 'px';
	  }
	}
  }



//   8

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}