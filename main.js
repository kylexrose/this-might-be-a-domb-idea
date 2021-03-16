document.querySelector('p').style.color = 'lightblue';

document.querySelector('h1').style.fontSize = "48px";

document.querySelector('p').innerHTML = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

document.querySelector('#item-13').style.opacity = .5;
document.querySelector('#item-3').innerHTML = "I say, \"Hi!\"";

const image = document.querySelectorAll('img');
image[0].src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
image[0].style.height = "300px";
image[1].style.height = "300px";

document.querySelector("ul").innerHTML += "<li class=\"item\" id=\"item-16\">16</li>";
// I know how to do this the other way, this just seems like the easier way to target it. 

document.querySelector('#item-16').innerHTML = "Won't get fooled again."