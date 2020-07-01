const cloudy = '<img src = "cloudy.png"/>'
const cloudyNight = '<img src = "cloudyNight.png"/>'
const foggy = '<img src = "foggy.png"/>'
const foggyNight = '<img src = "foggyNight.png"/>'
const heavyrain = '<img src = "heavyrain.png"/>'
const lightrain = '<img src = "lightrain.png"/>'
const lightning = '<img src = "lightning.png"/>'
const lightningNight = '<img src = "lightning_night.png"/>'
const night = '<img src = "night.png"/>'
const snow = '<img src = "snow.png"/>'
const snowSun = '<img src = "snowAndSun.png/>'
const snowCloud = '<img src = "snowAndCloud.png"/>'
const sunny = '<img src = "sunny.png"/>'
const sunrise = '<img src = "sunrise.png"/>'
const sunset = '<img src = "sunset.png"/>'
const rainNight = '<img src = "rainNight.png"/>'

setInterval(function() {  
  $.ajax({
    type: "GET",
    dataType: "json",
    data: {name: name},
    url: "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=c27e356b263e8f4724fb144ce5645f86&units=metric",
    success: function(data) {
      $(".weather .cur_temp span").html(data.main.temp)
      $(".weather .description").html(data.weather[0].description)
      $(".weather .humidity").html(data.main.humidity)
      $(".weather .wind").html(data.wind.speed)
      $(".weather .feel").html(data.main.feels_like)
      $(".weather .min a").html(data.main.temp_min)
      $(".weather .max a").html(data.main.temp_max)
    }
  });
}, 1000);
