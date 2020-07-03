const cloud = '<img src = "image/cloudy.png"/>'
const cloudNight = '<img src = "image/cloudyNight.png"/>'
const fog = '<img src = "image/foggy.png"/>'
const fogNight = '<img src = "image/foggyNight.png"/>'
const heavyRain = '<img src = "image/heavyrain.png"/>'
const lightRain = '<img src = "image/lightrain.png"/>'
const lightning = '<img src = "image/lightning.png"/>'
const lightningNight = '<img src = "image/lightning_night.png"/>'
const night = '<img src = "image/night.png"/>'
const snow = '<img src = "image/snow.png"/>'
const snowSun = '<img src = "image/snowAndSun.png/>'
const snowCloud = '<img src = "image/snowAndCloud.png"/>'
const sun = '<img src = "image/sunny.png"/>'
const rainNight = '<img src = "image/rainNight.png"/>'
const sandstorm = '<img src = "image/sandstorm.png"/>'
const sandstormNight = '<img src = "image/sandstormNight.png"/>'
const drizzle = '<img src = "image/drizzle.png"/>'
const cloudSun = '<img src = "image/sunAndCloud.png"/>'

const weatherMap = new Map([
    [200, 'add_thunder'], 
    [201, 'add_thunder'],
    [202, 'add_thunder'],
    [210, 'add_thunder'],
    [211, 'add_thunder'],
    [212, 'add_thunder'],
    [221, 'add_thunder'],
    [230, 'add_thunder'],
    [231, 'add_thunder'],
    [232, 'add_thunder'],
    [300, 'add_drizzle'],
    [301, 'add_drizzle'],
    [302, 'add_drizzle'],
    [310, 'add_drizzle'],
    [311, 'add_drizzle'],
    [312, 'add_drizzle'],
    [313, 'add_drizzle'],
    [314, 'add_drizzle'],
    [321, 'add_drizzle'],
    [500, 'add_light_rain'],
    [501, 'add_light_rain'],
    [502, 'add_heavy_rain'],
    [503, 'add_heavy_rain'],
    [504, 'add_heavy_rain'],
    [511, 'add_snow'],
    [520, 'add_light_rain'],
    [521, 'add_heavy_rain'],
    [522, 'add_heavy_rain'],
    [531, 'add_heavy_rain'],
    [701, 'add_fog'],
    [711, 'add_fog'],
    [721, 'add_fog'],
    [731, 'add_fog'],
    [741, 'add_fog'],
    [751, 'add_sandstorm'],
    [761, 'add_fog'],
    [762, 'add_fog'],
    [771, 'add_fog'],
    [781, 'add_tonardo'],
    [800, 'add_clear'],
    [801, 'add_sun_cloud'],
    [802, 'add_cloud'],
    [803, 'add_cloud'],
    [804, 'add_cloud'],
])

function toggle_thunder() {
 
}

function toggle_heavy_rain() {
  
}

function toggle_light_rain() {
  
}

function toggle_snow() {
 
}

function toggle_tornado() {
 
}

function toggle_clover() {

}

function setIcon(weather) {
  let time = new Date()
  let hour = time.getHours()
  switch(weather) {
    case 'add_thunder':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(lightningNight)
      else $(".weather .icon").html(lightning)
      toggle_thunder()
      toggle_heavy_rain()
      break;
    case 'add_drizzle':
      $(".weather .icon").html(drizzle)
      toggle_light_rain()
      break;
    case 'add_light_rain':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(rainNight)
      else $(".weather .icon").html(lightRain)
      toggle_light_rain()
      break;
    case 'add_heavy_rain':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(rainNight)
      else $(".weather .icon").html(heavyRain)
      toggle_heavy_rain()
      break;
    case 'add_fog':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(fogNight)
      else $(".weather .icon").html(fog)
      toogle_fog()
      break;
    case 'add_tornado':
      $(".weather .icon").html(tonardo)
      toggle_tornado()
      break;
    case 'add_clear':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(night)
      else $(".weather .icon").html(sunny)
      break;
    case 'add_cloud':
      $(".weather .icon").html(cloud)
      break;
    case 'add_sun_cloud':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(cloudNight)
      else $(".weather .icon").html(cloudSun)
      break;
    case 'add_sandstorm':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(sandstormNight)
      else $(".weather .icon").html(sandstorm)
      toggle_tornado()
      break;
    case 'snow':
      if(hour >= 18 || hour <= 3) $(".weather .icon").html(snow)
      else $(".weather .icon").html(snowSun)
      toggle_snow()
      break;
    default: toggle_clover()
  }
}

function addIcon(weather) {
  let type = weatherMap.get(weather)
  setIcon(type)
}

let pre = -1

setInterval(function() {  
  $.ajax({
    type: "GET",
    dataType: "json",
    data: {name: name},
    url: "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=c27e356b263e8f4724fb144ce5645f86&units=metric",
    success: function(data) {
      if(pre != data.weather[0].id) {
        if(pre != -1) addIcon(pre)
        $(".weather .cur_temp span").html(data.main.temp)
        $(".weather .description").html(data.weather[0].description)
        $(".weather .humidity").html(data.main.humidity)
        $(".weather .wind").html(data.wind.speed)
        $(".weather .feel").html(data.main.feels_like)
        $(".weather .min a").html(data.main.temp_min)
        $(".weather .max a").html(data.main.temp_max)
        addIcon(data.weather[0].id)
        pre = data.weather[0].id
      }
    }
  });
  let dt = new Date()
  $(".date").html(dt.toLocaleString())
  if(dt.getHours() >= 18 || dt.getHours <= 5) {
    $("body").css("background-image", "url('image/background_4.jpg')")
  } else {
    $("body").css("background-image", "url('image/background_2.png')")
  }
}, 1000);
