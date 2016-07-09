import $ from "jquery-slim";

// Components
import expander from "./components/expander.js";
import modal from "./components/modal.js";
import tabs from "./components/tabs.js";
import dropdown from "./components/dropdown.js";
import offcanvas from "./components/offcanvas.js";
import alert from "./components/alert.js";
import superagent from 'superagent';
import hljs from "highlight.js";

$(() => {
	expander();
	dropdown();
	modal();
	tabs();
	offcanvas();
	alert();
});

// Mobile menu
$('.open-menu').on('click', function(){
	$('.sidebar').toggleClass('toggle-sidebar');
});

hljs.configure({
  'languages': ['js', 'html', 'css', 'scss', 'xml'],
  'useBR': 'true'
});

hljs.initHighlightingOnLoad();

const insertCode = () => {
  let codeWrapper = $('[code]');

  codeWrapper.each((index, obj) => {
    let element = $(obj); 
    let path = element.attr('code');
    let type = element.attr('type');

    superagent.get(path).end((err, res) => {
      element.html(hljs.highlightAuto(res.text).value);
    });
  });
}

insertCode();
