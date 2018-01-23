var reqListener = function () {
  var response = JSON.parse(this.response);

  // console.log(response.country_name);
};

var xhr = new XMLHttpRequest();

xhr.addEventListener('load', reqListener);
xhr.open('GET', 'https://ipapi.co/json/');

xhr.send();