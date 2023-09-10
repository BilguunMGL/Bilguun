// function --> dahij ashiglah bolomjtoi codnii tsugluulga
function restart(){
	console.log("game restarted");
}
restart();
function hello(name,age){
	console.log("snu minii neriig "+ name);
	console.log("Minii nas "+ age);
}
hello("Erdene-ochir",23);
hello("Bat",15);
hello("suvd",45)
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,150);
function too(i,d){
	if(i>d){
		console.log(i)
	}else{
		console.log(d)
	}
}
too(32,14);
var body = document.getElementsByTagName("body")[0];
console.log(body);
var Math,btn;
var colors = ["red","aqua","green","blue","yellow"]
random = Math.floor(Math.random()*6);
var btn = document.getElementsByTagName("button")[0];
console.log(btn);
var i=-1
function color(){
	random = Math.floor(Math.random()*(colors.legth-1));
	i++;
	body.style.backgroundColor=colors[i];
	btn.innerText = colors[i];
	if(i>=colors.length-1){
		i=-1;
	}
}