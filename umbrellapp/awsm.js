

jQuery('.navicon, .close').click(function() {
	jQuery('nav').toggleClass('off');
});

jQuery('button').click(function() {
	jQuery('.location').addClass('animate');
});


$(window).load(function(){
	$('.loader').addClass('roll');
});


// --- FIND LOCATION


$.get("http://ipinfo.io/geo", function (response) {
	$("#geoname").val(response.city);
	var cityName = $('#geoname').val();



	var todayUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=1e65321b7d769c18cc3b525d0b357ed3' ;
	var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&units=metric&appid=1e65321b7d769c18cc3b525d0b357ed3';  

	$.get( todayUrl, function (today) {


		text = today.name +" "+ today.sys.country + '<br/>';
		text += '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + today.weather[0].icon + '.svg"/><br/>';
		text += today.main.temp_max + ' <sup>o</sup>C<br/>';
		text += today.main.temp_min + ' <sup>o</sup>C<br/>';
		$('#today').append(text);

	});



	$.get( forecastUrl, function (fc) {


		text = '<div class="day">' + day1 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[0].weather[0].icon + '.svg"/></div>';
		text += fc.list[0].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[0].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast1').append(text);

		text = '<div class="day">' + day2 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[1].weather[0].icon + '.svg"/></div>';
		text += fc.list[1].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[1].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast2').append(text);

		text = '<div class="day">' + day3 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[2].weather[0].icon + '.svg"/></div>';
		text += fc.list[2].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[2].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast3').append(text);

		text = '<div class="day">' + day4 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[3].weather[0].icon + '.svg"/></div>';
		text += fc.list[3].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[3].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast4').append(text);

		text = '<div class="day">' + day5 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[4].weather[0].icon + '.svg"/></div>';
		text += fc.list[4].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[4].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast5').append(text);

	});



}, "jsonp");








$('#go').click(function(){

	$('.fc, #today').empty();

	var cityName = $('#name').val();

	$('#name').val('cityName');



	var todayUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=1e65321b7d769c18cc3b525d0b357ed3' ;
	var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&units=metric&appid=1e65321b7d769c18cc3b525d0b357ed3';


	$.get( todayUrl, function (today) {


		text = today.name +" "+ today.sys.country + '<br/>';
		text += '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + today.weather[0].icon + '.svg"/><br/>';
		text += today.main.temp_max + ' <sup>o</sup>C<br/>';
		text += today.main.temp_min + ' <sup>o</sup>C<br/>';
		$('#today').append(text);

	});



	$.get( forecastUrl, function (fc) {


		text = '<div class="day">' + day1 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[0].weather[0].icon + '.svg"/></div>';
		text += fc.list[0].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[0].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast1').append(text);

		text = '<div class="day">' + day2 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[1].weather[0].icon + '.svg"/></div>';
		text += fc.list[1].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[1].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast2').append(text);

		text = '<div class="day">' + day3 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[2].weather[0].icon + '.svg"/></div>';
		text += fc.list[2].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[2].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast3').append(text);

		text = '<div class="day">' + day4 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[3].weather[0].icon + '.svg"/></div>';
		text += fc.list[3].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[3].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast4').append(text);

		text = '<div class="day">' + day5 +'</div>';
		text += '<div class="icon">' + '<img src="http://www.awsm.codes/umbrellapp/w-svg/' + fc.list[4].weather[0].icon + '.svg"/></div>';
		text += fc.list[4].temp.max + ' <sup>o</sup>C<br/>';
		text += fc.list[4].temp.min + ' <sup>o</sup>C<br/>';
		$('#forecast5').append(text);



	});

});



// --- DAYS ---- OPENWEATHERMAP DOES NOT PROVIDE DATES FOR 5 DAYS DAILY FORECAST


var d = new Date();

var weekday = new Array(7);
weekday[1] = "MON";
weekday[2] = "TUE";
weekday[3] = "WED";
weekday[4] = "THU";
weekday[5] = "FRI";
weekday[6] = "SAT";
weekday[7] = "SUN";
weekday[8] = "MON";


var day1 = weekday[d.getDay()+1];
var day2 = weekday[d.getDay()+2];
var day3 = weekday[d.getDay()+3];
var day4 = weekday[d.getDay()+4];
var day5 = weekday[d.getDay()+5];

