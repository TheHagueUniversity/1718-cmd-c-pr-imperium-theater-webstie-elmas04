var images = [	"images/agendastate1.jpg",
				"images/agendastate2.jpg"];

var i=0;

function slides(){
document.getElementById("slideimage").src = images[i];
if(i<(images.length-1))
	i++;

else
	i=0;

	
}

setInterval(slides,5000)
				