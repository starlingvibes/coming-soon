var countDownDate = new Date("April 30 ,2019 00:00:00").getTime();
    var x = setInterval(function(){
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);                         
      document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("launch").innerHTML = "EXPIRED";
      }
    }, 1000);

function subscribed() {
    alert("Hello, you've successfully subscribed to our Newsletter. You'll be notified when we launch!");
}
