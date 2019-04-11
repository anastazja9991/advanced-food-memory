var cards = ["1.png", "1.png", "2.png", "2.png", "3.png", "3.png"];

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 3;

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');

c0.addEventListener("click", function(){ revealCard(0); });
c1.addEventListener("click", function(){ revealCard(1); });
c2.addEventListener("click", function(){ revealCard(2); });
c3.addEventListener("click", function(){ revealCard(3); });
c4.addEventListener("click", function(){ revealCard(4); });
c5.addEventListener("click", function(){ revealCard(5); });

function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
	if ( opacityValue != 0 && lock == false && nr != visible_nr )
	{
		lock = true;
		var obraz = "url(img/" + cards[nr] + ")";
		$('#c'+nr).css('background-image', obraz);
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');
	
	if(oneVisible == false)
	{
		oneVisible = true;
		visible_nr = nr;
		lock = false;
	}
	else
	{
		if(cards[visible_nr] == cards[nr])
		{
			setTimeout(function(){ hide2Cards(nr, visible_nr) }, 750);
			
		}
		else
		{
			setTimeout(function(){ restore2Cards(nr, visible_nr) }, 1000);
		}
		
		turnCounter++;
		$('.score').html('ruchy: '+turnCounter);
		oneVisible = false;
			}
		}
	}
	
function hide2Cards(nr1, nr2)
{
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		window.location.href = "index2.html";
	}
	
	lock = false;
}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/karta.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');
	
	$('#c'+nr2).css('background-image', 'url(img/karta.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
	
	lock = false;
}

function fisherYates()
	{
		for(var flips = 0; flips < 100; flips++)
		{
			var i = Math.floor(Math.random() * cards.length);
			var j = Math.floor(Math.random() * cards.length);
			var temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
		}
	}