<img width=100 src="https://dl.dropboxusercontent.com/s/f90hi2k99xxw5xn/suippets-logo.png?dl=0">

[![Build Status](https://travis-ci.org/C4co/suippets.svg?branch=master)](https://travis-ci.org/C4co/suippets)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/250b64a0bb6b48858fc33a26eaf3f421)](https://www.codacy.com/app/carllos-nc/suippets?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=C4co/suippets&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/777cd172e4f34886a25a01e57d9d77f7)](https://www.codacy.com/app/carllos-nc/suippets?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=C4co/suippets&amp;utm_campaign=Badge_Coverage)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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

### Unit tests with Karma + Jasmine
```
$ npm test
```

### End to End tests with NightWatch

install
```
$ npm install -g selenium-standalone
$ selenium-standalone install
$ npm install -g nigthwatch
```

and run (start selenium server before)
```
$ selenium-standalone start
$ npm run e2e
```

### Generate new component
```
$ cd generator
$ node generator.js "component-name"
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
