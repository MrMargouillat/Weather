window.onload = function(){
	var getHttpRequest = function () {
		var httpRequest = false;

		if (window.XMLHttpRequest) { // Mozilla, Safari,...
		httpRequest = new XMLHttpRequest();
		if (httpRequest.overrideMimeType) {
			httpRequest.overrideMimeType('text/xml');
		}
		}
		else if (window.ActiveXObject) { // IE
		try {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try {
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {}
		}
		}

		if (!httpRequest) {
		alert('Abandon :( Impossible de créer une instance XMLHTTP');
		return false;
		}

		return httpRequest
}

function requestWeater(elem , str){
	var xhr = getHttpRequest();
	xhr.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+ str +"&appid=bb2ca672d35f1428507d1b4907c03cfa&units=metric&&lang=fr", true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4)
		{
			if(xhr.status === 200)
			{
				 parse = JSON.parse(xhr.responseText);

				 elem.querySelector(".card-title").innerText = parse.name

				 elem.querySelector(".card-temperature").innerText = parse.main.temp + " °C";

				 elem.querySelector(".card-word").innerText = parse.weather[0].description;	


				var id = parse.weather[0].id;
				/*
				https://openweathermap.org/weather-conditions
				api infos 
				*/
				if(id >= 200 && id <300 || id >= 520 && id < 600)
				{
					elem.querySelector(".card-logo-weather").innerText = "Q"	
				}
				else if(id >= 300 && id < 400)
				{
					elem.querySelector(".card-logo-weather").innerText = "U"	
				}
				else if(id >= 500 && id < 505)
				{
					elem.querySelector(".card-logo-weather").innerText = "J"
				}
				else if(id == 511 || id >= 600 && id < 700)
				{
					elem.querySelector(".card-logo-weather").innerText = "I"
				}
				else if(id >= 700 && id < 800	)
				{
					elem.querySelector(".card-logo-weather").innerText = "B"
				}
				else if(id === 800)
				{
					elem.querySelector(".card-logo-weather").innerText = "1"
				}
				else if(id === 801)
				{
					elem.querySelector(".card-logo-weather").innerText = "A"
				}
				else if(id === 802)
				{
					elem.querySelector(".card-logo-weather").innerText = "3"
				}
				else if(id === 803|| id === 804)
				{
					elem.querySelector(".card-logo-weather").innerText = "3"
				}
				else
				{
					elem.querySelector(".card-logo-weather").innerText = ":"
				}
			}
			else
			{
				alert("Erreur");
			}
		}
		else
		{
			//elem.innerText += "Chargement...";
		}
  }
}

var NC = document.getElementById('newcastle')
var NCjson = requestWeater(NC, "Newcastle,uk");
var paris = document.getElementById('paris')
var parisjson  = requestWeater(paris, "Paris,fr");
var mar = document.getElementById('marseille')
var marjson  = requestWeater(mar, "Marseille,fr");
var krk = document.getElementById('krakow')
var krkjson = requestWeater(krk, "Krakow,pl")	;
var norden = document.getElementById('norden')
var nordenjson = requestWeater(norden, "Norden,de");
}