# Webhint 


## Install

- prepare .hintrc and package.json

- webhint needs node and npm, so check both exist:
  `node -v && npm -v`

- install hint
  `npm install hint`

- install devDependency
  `npm i -D hint`

- if running via localhost server put this in your package.json  
  and adjust port so that it matches your port:
  ```
  {
      ...
      "scripts": {
          "webhint": "hint http://localhost:8080"
      }
  }
  ```


## Run 

- run webhint with
  `npm run webhint`

- or pipe to text file with
  `npm run webhint > webhint-report.txt`


## Customize

### Connectors

- *local* install with `npm i @hint/connector-local`
  and add to both package.json and .hintrc
  ```
  {
      "connector": {
          "name": "local"
      }
  }
  ```

- *puppeteer* install with `npm i @hint/connector-puppeteer`
  and add to both package.json and .hintrc
  and install puppeteer with `npm i puppeteer`
  ```
  {
      "connector": {
          "name": "puppeteer"
      }
  }
  ```

## Formatters

Install with `npm i @hint/formatter-stylish` etc
and add to both package.json and .hintrc
```
{
    "formatters": [
        "html",
        "stylish",
        "summary",
        "excel", 
        "codeframe",
        "json"
    ]
}
```

## Parsers

Install with `npm i @hint/parser-html` etc and add to both
package.json and .hintrc
```
{
    "parsers": [
        "@hint/parser-html",
        "@hint/parser-css",
        "@hint/parser-javascript",
        "@hint/parser-manifest"
    ],
}
```


## Hints

Install with `npm i @hint/hint-` and the rest of the name of the hint package name. So e.g. `npm i -D @hint/hint-html-checker`.
See [WebHint User Guide](https://webhint.io/docs/user-guide/).

