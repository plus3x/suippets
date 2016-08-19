<img width=100 src="https://dl.dropboxusercontent.com/s/f90hi2k99xxw5xn/suippets-logo.png?dl=0">

# Suippets

Micro front-end snippets

[Live project](https://c4co.github.io/suippets/)

### Dependencies
Node / Npm

### Install
```
$ npm install && npm run globals
```

### Run
```
npm start
```

### Run unit tests Karma + Jasmine
```
npm test
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

Registre page in routes.js

````
"page": {
  "entry": "./app/views/components/page/page.html",
  "output": "./pages"
}
````
Registre page

### License

Licensed under the MIT License

2016 - C4co
