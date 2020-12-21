function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function myal(title,msg,type){
swal({
     title: title,
     text: msg,
     icon: type,
	 buttons: false,
	 closeOnClickOutside: false,
     timer: 3000
     });
}

function countdown(time, min, sec){
    $('#clock').countdown(time).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%M</span> '+min
        + '<span class="h1 font-weight-bold">%S</span> '+sec));
    }).on('finish.countdown', function(){
		$("#countdown_area").addClass("hidden")
		$("#form_area").removeClass("hidden")
	});
}

$.ajaxSetup({crossDomain: true});