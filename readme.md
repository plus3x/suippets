<img width=100 src="https://dl.dropboxusercontent.com/s/f90hi2k99xxw5xn/suippets-logo.png?dl=0">

[![Build Status](https://travis-ci.org/C4co/suippetss.svg?branch=master)](https://travis-ci.org/C4co/suippetss)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/250b64a0bb6b48858fc33a26eaf3f421)](https://www.codacy.com/app/carllos-nc/suippets?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=C4co/suippets&amp;utm_campaign=Badge_Grade)

# Suippets

Micro front-end snippets

[Live project](https://c4co.github.io/suippets/)

### Dependencies
Node / Npm

### Install
```
$ npm install && npm run globals
```

### Run project
```
$ npm start
```

### Unit tests Karma + Jasmine
```
$ npm test
```

### Eslint
```
$ npm lint
$ npm lint-test

or to fix erros

$ npm lint-fix
$ npm lint-test-fix
```

### Run CSScomb
```
npm run csscomb
```

### Page structure
```
  views
  |
  ├─ components
  | |
  | ├─ page1
  | ├─ page2
  | ├─ page3
  | ├─ pageN
  | | |
  | | ├─ page.html
  | | ├─ example.html
  | | ├─ code.html
```

Registre new page in routes.js

````
"page": {
  "entry": "./app/views/components/page/page.html",
  "output": "./pages"
}
````

### License

Licensed under the MIT License

2016 - C4co
