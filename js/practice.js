$(document).ready(function() {
 $("form#animalselect").submit(function(event) {
   var animal = $("select#animal").val();

  if (animal === 'cheetah') {
    $("#penguin").hide();
    $("#bunny").hide();
    $("#cheetah").show();
  }

  if (animal === 'penguin') {
    $("#bunny").hide();
    $("#cheetah").hide();
    $("#penguin").show();
  }

  if (animal === 'bunny') {
    $("#cheetah").hide();
    $("#penguin").hide();
    $("#bunny").show();
  }

  event.preventDefault();
  });
});
