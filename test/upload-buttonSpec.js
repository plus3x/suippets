import $ from "jquery-slim";
import uploadButton from "../app/js/components/upload-button.js";

describe( "upload-button spec", () => {

  uploadButton.buttons = $(
    `
      <div class="form-up-button" upload-button>
        <div class="form-up-button-wrapper">
          <div class="form-up-button-select">
          </div>

          <div class="form-up-button-counter" up-counter>
            Nenhum arquivos selecionado
          </div>

          <input type="file" multiple >

          <div class="form-up-button-reset" up-reset> Reset </div>
        </div>
      </div>
    `
  );

  let button = $( uploadButton.buttons[ 0 ] );
  let inputFile = button.find( "input[type=file]" );
  let counter = button.find( "[up-counter]" );
  let reset = button.find( "[up-reset]" );

  uploadButton.init();
  inputFile.change();

  let file = {
    name: "File name",
    type: "image/png",
    size: 118450
  }

  it( "Modify number of counter" , () => {
    expect( counter ).toContainText( "Nenhum arquivos selecionado" );

    uploadButton.count( counter, 10 );
    expect( counter ).toContainText( "10 Arquivos selecionados" );

    uploadButton.count( counter, 1 );
    expect( counter ).toContainText( "1 Arquivo selecionado" );

    uploadButton.count( counter, 0 );
    expect( counter ).toContainText( "Nenhum arquivos selecionado" );
  });

  it( "Create new file(viewer)", () => {
    let newFile = uploadButton.createFile( button, file, 0 );

    expect( newFile ).toHaveClass( "form-up-button-file" );
    expect( newFile ).toContainText( "image/png" );
    expect( newFile ).toContainText( "MB" );
    expect( newFile ).toContainText( "1" );
  });

  it( "Add file(viewer) in button", () => {
    let newFile = uploadButton.createFile( button, file, 0 );
    let files = newFile[ 0 ];

    uploadButton.showFiles( button, files );

    expect( button ).toContainElement( ".form-up-button-file" );
  });

  it( "Remove file(viewer) of buttons", () => {
    expect( button ).toContainElement( ".form-up-button-file" );
    uploadButton.clearFiles( button );
    expect( button ).not.toContainElement( ".form-up-button-file" );
  });

  const addingFiles = () => {
    let file1 = uploadButton.createFile( button, file, 0 );
    let file2 = uploadButton.createFile( button, file, 0 );
    let files = [file1[ 0 ], file2[ 0 ]];

    uploadButton.showFiles( button, files );
    uploadButton.count( counter, 10 );
  }

  it( "Clear input file", () => {
    addingFiles();

    expect( button ).toContainElement( ".form-up-button-file" );
    expect( counter ).toContainText( "10 Arquivos selecionados" );

    uploadButton.clearInput( inputFile, button, counter );

    expect( button ).not.toContainElement( ".form-up-button-file" );
    expect( counter ).not.toContainText( "10 Arquivos selecionados" );
  });

  it( "Click at reset button and clear input file", () => {
    addingFiles();

    expect( button ).toContainElement( ".form-up-button-file" );
    expect( counter ).toContainText( "10 Arquivos selecionados" );

    reset.click();

    expect( button ).not.toContainElement( ".form-up-button-file" );
    expect( counter ).not.toContainText( "10 Arquivos selecionados" );
  });

});
