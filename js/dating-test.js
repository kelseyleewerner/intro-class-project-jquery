$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var trait = $("select#trait").val();

    if (age) {

    if (age <= 15 ) {
      $('#bieber').show();
      $('#leo').hide();
      $('#hamm').hide();
    }

      else {
        if (trait === 'smart') {
          $('#leo').show();
          $('#bieber').hide();
          $('#hamm').hide();
        }
        if (trait === 'rich') {
          $('#leo').show();
          $('#bieber').hide();
          $('#hamm').hide();
        }
        if (trait === 'sexy') {
          $('#hamm').show();
          $('#bieber').hide();
          $('#leo').hide();
        }
        if (trait === 'funny') {
          $('#hamm').show();
          $('#bieber').hide();
          $('#leo').hide();
        }
      }
    }

    else {
      alert('Please enter your age.')
    }

    event.preventDefault();

  });
});
