function confirmBook() {
    var day = document.getElementById("dateInput").value;
    var time = document.getElementById("timeInput").value.split(':'),hours, minutes, midi;
    hours = time[0];
    minutes = time[1];
    if (hours > 12) {
      midi = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      midi = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      midi = 'PM';
    }
    
    alert("Your appointment was taken with " + $("#doctors option:selected").text() +
    " on " + day + " at " + hours + ':' + minutes + ' ' + midi);
  }
  
  var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
  const setDateFormat = "mm/dd/yy";
  
  function disableDates(date) {
    if ((date.getDay() === 1 || date.getDay() === 5) && $("#doctors option:selected").text() === "Dr. Emad")
      return [false];
  
    else if((date.getDay() === 4 || date.getDay() === 6) && $("#doctors option:selected").text() === "Dr. George")
      return [false];
    else if((date.getDay() === 2 || date.getDay() === 3) && $("#doctors option:selected").text() === "Dr. Sara")
      return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) === -1];
  }
  
  function servicesSelect() {
    var form_data = new FormData(document.querySelector("form"));
  
    if (!form_data.has("service[]")) {
      document.getElementById("option_not_selected").style.visibility = "visible";
      return false;
    } else {
      document.getElementById("option_not_selected").style.visibility = "hidden";
      return true;
    }
  
  }
  
  function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
  
    var filter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (filter.test(a)) {
      return true;
    } else {
      return false;
    }
  }
  
  
  
  function validateCard(cardNum) {
    var a = document.getElementById(cardNum).value;
    var filter = /^[0-9]{16}$/;
    if (filter.test(a)) {
      return true;
    } else {
      return false;
    }
  }
  
  function confirme(){
    if (validatePhone() && validateCard()){
      return true;
    }
  }
  $(document).ready(function() {
  
   
    $("#phone").on("change", function() {
      if (!validatePhone("phone")) {
        alert("Wrong format for phone");
        $("#phone").val("xxxxxxxxxx");
        $("#phone").addClass("error");
      } else {
        $("#phone").removeClass("error");
      }
    });
  
  
    $("#debit").on("change", function() {
      if (!validateCard("debit")) {
        alert("Wrong credit card format");
        $("#debit").val("xxxxxxxxxxxxxxxx");
        $("#debit").addClass("error");
      } else {
        $("#debit").removeClass("error");
      }
    });
  
    $("#submit").on("change", function() {
      if (confirme("submit")) {
        alert("Success");
      }
    });
    
  $( "#dateInput" ).datepicker(
          {
              dateFormat: setDateFormat,
              minDate: new Date('06/01/2020'),
              maxDate: '+4M',
              beforeShowDay: $.datepicker.noWeekends,
              beforeShowDay: disableDates
          }
      );
  
    $("#debit").on("mouseenter", function() {
      $("#debit").addClass("showInput");
    });
  
    $("#debit").on("mouseleave", function() {
      $("#debit").removeClass("showInput");
    });
  
    $("#debit").tooltip({
      classes: {
        "ui-tooltip": "highlight"
      }
    });
  
  
    $("#fname").on("mouseenter", function() {
      $("#fname").addClass("showInput");
    });
  
    $("#fname").on("mouseleave", function() {
      $("#fname").removeClass("showInput");
    });
  
    $("#fname").tooltip({
      classes: {
        "ui-tooltip": "highlight"
      }
    });

  
      $("#lname").on("mouseenter", function() {
      $("#lname").addClass("showInput");
    });
  
    $("#lname").on("mouseleave", function() {
      $("#lname").removeClass("showInput");
    });
  
    $("#lname").tooltip({
      classes: {
        "ui-tooltip": "highlight"
      }
    });


    $("#petname").on("mouseenter", function() {
        $("#petname").addClass("showInput");
      });
    
      $("#petname").on("mouseleave", function() {
        $("#petname").removeClass("showInput");
      });
    
      $("#petname").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

      $("#petbreed").on("mouseenter", function() {
        $("#petbreed").addClass("showInput");
      });
    
      $("#petbreed").on("mouseleave", function() {
        $("#petbreed").removeClass("showInput");
      });
    
      $("#petbreed").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
  
   $("#email").on("mouseenter", function() {
      $("#email").addClass("showInput");
    });
  
    $("#email").on("mouseleave", function() {
      $("#email").removeClass("showInput");
    });
  
    $("#email").tooltip({
      classes: {
        "ui-tooltip": "highlight"
      }
    });
  
  $("#phone").on("mouseenter", function() {
      $("#phone").addClass("showInput");
    });
  
    $("#phone").on("mouseleave", function() {
      $("#phone").removeClass("showInput");
    });
  
    $("#phone").tooltip({
      classes: {
        "ui-tooltip": "highlight"
      }
    });
  
  
  });