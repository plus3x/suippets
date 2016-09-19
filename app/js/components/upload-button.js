import $ from "jquery-slim";

// ES5 Support

var uploadButton = {
  buttons: $( "[upload-button]" ),
};

uploadButton.count = function( counter, length ) {
  if ( length == 0 ) {
    counter.text( "Nenhum arquivos selecionado" );
  } else if ( length == 1 ) {
    counter.text( length + " Arquivo selecionado" );
  } else {
    counter.text( length + " Arquivos selecionados" );
  }
};

uploadButton.createFile = function( button, file, index ) {
  var fileSize = Math.round( ( file.size / 1024 / 1024 ) * 1000 ) / 1000;
  var newFile = $( "<div class='form-up-button-file'> </div>" );
  var fileReference = index + 1 + " - " + file.name + " - " + file.type + " - <b>" + fileSize + " MB</b>";

  newFile.html( fileReference );
  newFile.appendTo( button );

  return newFile;
};

uploadButton.showFiles = function( button, files ) {
  Array
    .prototype
    .forEach
    .call( files, function( file, index ) {
      uploadButton.createFile( button, file, index );
    });
};

uploadButton.clearFiles = function( button ) {
  button
    .find( ".form-up-button-file" )
    .each( function( index, element ) {
      $( element ).remove();
    });
};

uploadButton.clearInput = function( inputFile, button, counter ) {
  inputFile.val( "" );
  uploadButton.clearFiles( button );
  uploadButton.count( counter, 0 );
};

uploadButton.init = function() {
  uploadButton.buttons.each( function( index, element ) {
    var button = $( element );
    var inputFile = button.find( "input[type=file]" );
    var counter = button.find( "[up-counter]" );
    var reset = button.find( "[up-reset]" );

    inputFile.on( "change", function() {
      var files = inputFile[ 0 ].files;

      uploadButton.count( counter, files.length );
      uploadButton.clearFiles( button );
      uploadButton.showFiles( button, files );
    });

    reset.on( "click", function() {
      uploadButton.clearInput( inputFile, button, counter );
    });
  });
};

// Usage - uploadButton.init()

export default uploadButton;
