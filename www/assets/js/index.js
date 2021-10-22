$(document).ready(function () {
  $("#searchDiv").hide();

  $("#home").on("click", function (event) {
    $("#homeDiv").show();
    $("#searchDiv").hide();
    $("#locationDiv").hide();
  });

  $("#search").on("click", function (event) {
    $("#searchDiv").show();
    $("#homeDiv").hide();
    $("#locationDiv").hide();
  });

  $("#btnSearch").on("click", function (event) {
    event.preventDefault();
    var input = $("input").val();
    var div = $("#tiempo");
    var div2 = $("#dias");
    var currentW = $.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input +
        "&appid=52491955a9da7a186b16403a91f21e8c",
      function (data) {
        var grados = $("#tiempo").children().remove();
        switch (data.weather[0].main) {
          case "Clear":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/sunny.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Thunderstorm":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/thunderstorm.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Drizzle":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/drizzle.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Rain":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/rain.jpg' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Snow":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/snow.jpg' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Atmosphere":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/atmos.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Clouds":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<img src='assets/img/cloudy.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
        }
      }
    );
    var weather4 = $.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        input +
        "&appid=52491955a9da7a186b16403a91f21e8c",
      function (data) {
        $("#dias").children().remove();
        for (let index = 0; index < 4; index++) {
          switch (data.list[index].weather[0].main) {
            case "Clear":
              div2.append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/sunny.png' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
            case "Thunderstorm":
              div2.append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/thunderstorm.png' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
            case "Drizzle":
              div2.append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/drizzle.png' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
            case "Rain":
              div2.append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/rain.jpg' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
            case "Snow":
              div2.append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/snow.jpg' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
            case "Atmosphere":
              div2.append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/atmos.png' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
            case "Clouds":
              div2.append(
                "<div class='mb-4 col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                  "<div class='card'>" +
                  "<img src='assets/img/cloudy.png' class='card-img-top' alt='card-group-image'>" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>" +
                  (data.list[index].main.temp - 273.15).toFixed() +
                  "°C" +
                  "</h5>" +
                  "<p class='card-text'>" +
                  data.list[index].weather[0].description +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div>"
              );
              break;
          }
        }
      }
    );
  });

  var latitud;
  var longitud;

  var onSuccess = function (position) {
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
  };

  function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);

  $("#location").on("click", function () {
    var titulo = $("#locationCity");
    var div = $("#tiempoLoc");
    $("#homeDiv").hide();
    $("#searchDiv").hide();
    $("#locationDiv").show();
    $.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitud +
        "&lon=" +
        longitud +
        "&appid=52491955a9da7a186b16403a91f21e8c",
      function (data) {
        $("#tiempoLoc").children().remove();

        var nombre = data.name;
        titulo.append("Weather of your location: " + nombre);
        switch (data.weather[0].main) {
          case "Clear":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                "<img src='assets/img/sunny.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "Tiempo de tu localizacion: " +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Thunderstorm":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                "<img src='assets/img/thunderstorm.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Drizzle":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                +"<img src='assets/img/drizzle.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Rain":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                "<img src='assets/img/rain.jpg' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Snow":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                "<img src='assets/img/snow.jpg' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Atmosphere":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                "<img src='assets/img/atmos.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
          case "Clouds":
            div.append(
              "<div class='mt-4 mx-auto col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                "<div class='card'>" +
                "<h5 class='card-title text-center'> " +
                nombre +
                "</h5>" +
                "<img src='assets/img/cloudy.png' class='card-img-top' alt='card-group-image'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" +
                (data.main.temp - 273.15).toFixed() +
                "°C" +
                "</h5>" +
                "<p class='card-text'>" +
                data.weather[0].description +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            break;
        }
      }
    );
  });
});
