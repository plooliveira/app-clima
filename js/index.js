$(document).ready(function(){
    let fTemp
    let cTemp
    let changeTemp = false
    
$.getJSON("https://freegeoip.net/json/",             function(data) {
    
    let latitude = data.latitude
    let longitude = data.longitude
    let url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&" + "lon=" + longitude
    $.getJSON(url, function(response){
    
      let cidade = "City: " + response.name + " "  +response.sys.country 
      $("#city").text(cidade)
      cTemp  = response.main.temp
      fTemp = (+cTemp * 9)/5 + 32
      $("#temp").text(cTemp)
      
      $("#icon").attr('src',response.weather[0].icon)
      $("#condition").text(response.weather[0].description)
      console.log(response)
      
  })
  
})
  
  
  $("#tempClick").on('click', function(e){
    e.preventDefault()
    if (changeTemp === false){
      $("#tempClick").text('ºF')
      $("#temp").text(fTemp)
      changeTemp = !changeTemp
    } else{
      $("#temp").text(cTemp);
      $("#tempClick").text('ºC')
    }  
  })
})