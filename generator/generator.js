let fs = require( "fs" );
let componentTemplate = require( "./component.template.js" );
let codeTemplate = require( "./code.template.js" );
let styleTemplate = require( "./style.template.js" );

const name = process.argv[2];
const viewPath = "../app/views/components";
const sassPath = "../app/sass/components";
const jsPath = "../app/js/components"

const newDir = () => {
  if ( !fs.existsSync( name ) ) {
    fs.mkdirSync(`${viewPath}/${name}`);
  }
}

const newFile = (path, file, template="Default template") => {
  fs.writeFile(`${path}/${file}`, template, (err) => {
    if (err){
      return console.log(err);
    }

    console.log(`${file} was created!`);
  });
}

newDir();
newFile( `${viewPath}/${name}`, `${name}.html`, componentTemplate( name ) );
newFile( `${viewPath}/${name}`, "code.html", codeTemplate( name ) );
newFile( `${viewPath}/${name}`, "example.html", "<!-- example -->" );
newFile( sassPath, `${name}.scss`, styleTemplate( name ) );
newFile( jsPath, `${name}.js`, "//javascript" );