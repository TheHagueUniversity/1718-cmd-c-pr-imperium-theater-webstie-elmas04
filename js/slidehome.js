var images = [	"images/home1.jpg",
				"images/home2.jpg",
				"images/home3.jpg",
				"images/home4.jpg"];

var i=0;

function slides(){
document.getElementById("slideimage").src = images[i];
if(i<(images.length-1))
	i++;

else
	i=0;

	
}

setInterval(slides,5000)
				