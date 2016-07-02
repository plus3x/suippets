import $ from "jquery-slim";

function alert(){
  var AlertCloses = $('[alert-close]');

  AlertCloses.each(function( index, element ){
    var close = $(element);

    close.on("click", function(){
      close.parent().addClass('alert-remove');
      setTimeout(function(){
        close.parent().hide();
      }, 200);
    });
  });
}

export default alert;