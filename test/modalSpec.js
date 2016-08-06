import $ from "jquery-slim";
import modal from "../app/js/components/modal.js";

describe( "Modal spec" , () => {

  const modalTargetMarkup = $(`
    <button modal-target="1"> </button>
    <button modal-target="2"> </button>
  `);

  const modalWrapperMarkup = $(`
    <div modal-wrapper="1" class="modal-wrapper">
      <div modal-content class="modal-content">
        <button modal-close type="button"> </button>
      </div>
    </div>

    <div modal-wrapper="2" class="modal-wrapper">
      <div modal-content class="modal-content">
        <button modal-close type="button"> </button>
      </div>
    </div>
  `);

  modal.wrappers = modalWrapperMarkup;
  modal.targets = modalTargetMarkup;

  it( "Initial state, add {modal-hidden} class", () => {
    expect( modal.wrappers ).not.toHaveClass( "modal-hidden" );

    modal.init();

    expect( modal.wrappers ).toHaveClass( "modal-hidden" );
  });

  it( "Open modal, add {modal-active} class and remove {modal-hidden} class", () => {
    expect( modal.wrappers ).not.toHaveClass( "modal-actived" );
    expect( modal.wrappers ).toHaveClass( "modal-hidden" );

    modal.open( modal.wrappers );

    expect( modal.wrappers ).toHaveClass( "modal-actived" );
    expect( modal.wrappers ).not.toHaveClass( "modal-hidden" );
  });

  it( "Hidden modal, remove {modal-actived} class and add {modal-hidden} class", () => {
    expect( modal.wrappers ).toHaveClass( "modal-actived" );
    expect( modal.wrappers ).not.toHaveClass( "modal-hidden" );

    modal.hide( modal.wrappers );

    expect( modal.wrappers ).not.toHaveClass( "modal-actived" );
    expect( modal.wrappers ).toHaveClass( "modal-hidden" );
  });

});
