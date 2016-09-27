/*SEARCH*/
function getjson(word){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag='+word+'&limit=10', true);
	request.onreadystatechange = function(){
		if (request.status === 200 && request.readyState === 4){
			var jText = JSON.parse(request.responseText);
			for( var i = 0; i < 3; i++){
				$('.img'+i).attr('src', jText.results[i].url);
			};
		} else if ( request.status != 200){
			console.log('error');
		};
	};
	request.send();
};

$(function(){
	
$('#search').on('click', function(){
	var inputValue = $('.searchField').val();
	getjson(inputValue);
	});
$('.searchField').keyup(function(){
	if (event.keyCode == 13) {
	var inputValue = $('.searchField').val();
	getjson(inputValue);    
    }
	});
});

/*PROTOTYPE*/

function human(){
	this.name ='Вася';
	this.age = 20;
	this.weight = 80;
	this.height = 180;
};
function student(){
	this.study = 'Кружок Очумелые ручки';
	this.money = 500;
	this.happines = 80;
	this.watchSerials = function(time){
		this.happines += time/10;
	};
};
function worker(){
	this.job = 'Расхититель социалистической собственности';
	this.cash = 1000;
	this.work = function(time){
		this.cash += time*50;
	};

};

worker.prototype = new human();
student.prototype = new human();
var newWorker = new worker();
var newStudent = new student();
newWorker.work(8);
newStudent.watchSerials(8);
console.log(newWorker);
console.log(newStudent);
console.log('Деньги, отложенные на мотоцикл:',newWorker.cash);
console.log('Радость от просмотренного сериала:',newStudent.happines);




































