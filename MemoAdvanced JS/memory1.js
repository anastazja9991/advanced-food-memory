
var oneVisible = false;
var lock = false;
var nextLevel;
var cards;
var pairsLeft;
var visible_nr;
var c0;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var c10;
var c11;
var c12;
var c13;
var c14;
var c15;
var c16;
var c17;

function initLevel1() {
	cards = ["1.png", "1.png", "2.png", "2.png", "3.png", "3.png"];
	fisherYates();
	pairsLeft = 3;
	nextLevel = "index2.html";
	c0 = document.getElementById('c0');
	c1 = document.getElementById('c1');
	c2 = document.getElementById('c2');
	c3 = document.getElementById('c3');
	c4 = document.getElementById('c4');
	c5 = document.getElementById('c5');
	c0.addEventListener("click", function(){ revealCard(0); });
	c1.addEventListener("click", function(){ revealCard(1); });
	c2.addEventListener("click", function(){ revealCard(2); });
	c3.addEventListener("click", function(){ revealCard(3); });
	c4.addEventListener("click", function(){ revealCard(4); });
	c5.addEventListener("click", function(){ revealCard(5); });
}

function initLevel2() {
	cards = ["one.png", "two.png", "four.png", "one.png", "five.png", "two.png", "six.png", "six.png", "four.png", "three.png", "five.png", "three.png"];
	fisherYates();
	pairsLeft = 6;
	nextLevel = "index3.html";
	c0 = document.getElementById('c0');
	c1 = document.getElementById('c1');
	c2 = document.getElementById('c2');
	c3 = document.getElementById('c3');
	c4 = document.getElementById('c4');
	c5 = document.getElementById('c5');
	c6 = document.getElementById('c6');
	c7 = document.getElementById('c7');
	c8 = document.getElementById('c8');
	c9 = document.getElementById('c9');
	c10 = document.getElementById('c10');
	c11 = document.getElementById('c11');
	c0.addEventListener("click", function(){ revealCard(0); });
	c1.addEventListener("click", function(){ revealCard(1); });
	c2.addEventListener("click", function(){ revealCard(2); });
	c3.addEventListener("click", function(){ revealCard(3); });
	c4.addEventListener("click", function(){ revealCard(4); });
	c5.addEventListener("click", function(){ revealCard(5); });
	c6.addEventListener("click", function(){ revealCard(6); });
	c7.addEventListener("click", function(){ revealCard(7); });
	c8.addEventListener("click", function(){ revealCard(8); });
	c9.addEventListener("click", function(){ revealCard(9); });
	c10.addEventListener("click", function(){ revealCard(10); });
	c11.addEventListener("click", function(){ revealCard(11); });
}

function initLevel3() {
	cards = ["a.png", "a.png", "b.png", "b.png", "c.png", "c.png", "d.png", "d.png", "f.png", "f.png", "aa.png", "aa.png", "bb.png", "bb.png", "cc.png", "cc.png", "dd.png", "dd.png"];
	fisherYates();
	pairsLeft = 9;
	nextLevel = "end.html";
	c0 = document.getElementById('c0');
	c1 = document.getElementById('c1');
	c2 = document.getElementById('c2');
	c3 = document.getElementById('c3');
	c4 = document.getElementById('c4');
	c5 = document.getElementById('c5');
	c6 = document.getElementById('c6');
	c7 = document.getElementById('c7');
	c8 = document.getElementById('c8');
	c9 = document.getElementById('c9');
	c10 = document.getElementById('c10');
	c11 = document.getElementById('c11');
	c12 = document.getElementById('c12');
	c13 = document.getElementById('c13');
	c14 = document.getElementById('c14');
	c15 = document.getElementById('c15');
	c16 = document.getElementById('c16');
	c17 = document.getElementById('c17');
	c0.addEventListener("click", function(){ revealCard(0); });
	c1.addEventListener("click", function(){ revealCard(1); });
	c2.addEventListener("click", function(){ revealCard(2); });
	c3.addEventListener("click", function(){ revealCard(3); });
	c4.addEventListener("click", function(){ revealCard(4); });
	c5.addEventListener("click", function(){ revealCard(5); });
	c6.addEventListener("click", function(){ revealCard(6); });
	c7.addEventListener("click", function(){ revealCard(7); });
	c8.addEventListener("click", function(){ revealCard(8); });
	c9.addEventListener("click", function(){ revealCard(9); });
	c10.addEventListener("click", function(){ revealCard(10); });
	c11.addEventListener("click", function(){ revealCard(11); });
	c12.addEventListener("click", function(){ revealCard(12); });
	c13.addEventListener("click", function(){ revealCard(13); });
	c14.addEventListener("click", function(){ revealCard(14); });
	c15.addEventListener("click", function(){ revealCard(15); });
	c16.addEventListener("click", function(){ revealCard(16); });
	c17.addEventListener("click", function(){ revealCard(17); });
}

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
