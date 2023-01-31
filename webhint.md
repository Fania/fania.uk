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

- if running a project with a webserver 
  then run webhint with *puppeteer* connector 
  and the command `npm run webhint`
  or pipe to text file with
  `npm run webhint > webhint-report.txt`

- if running a project with local files only
  then run webhint with *local* connector
  which starts


## Customize

### Connectors

- *local* automatically installed.
  and add to both package.json and .hintrc
  ```
  {
      "connector": {
          "name": "local",
          "options": {
            "pattern": ["**", "!.git/**"],
            "watch": true
        }
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


## Extends

All four installed automatically by webhint.
- *development* analyze local file or directory to get hints on different file types that are not available on websites.
- *web-recommend* analyze local files or directories before you publishing to your website using http or https.
- *accessibility* enabling accessibility hints based on axe-core tool.
- *progressive-web-apps* use for checking progressive web apps (PWAs).
```
"extends": [
  "development",
  "web-recommended",
  "accessibility",
  "progressive-web-apps"
],
```


## Hints

Install with `npm i @hint/hint-` and the rest of the name of the hint package name. So e.g. `npm i -D @hint/hint-html-checker`.
See [WebHint User Guide](https://webhint.io/docs/user-guide/).

    // "content-type": [
    //   "error",
    //   {
    //     ".*\\.js": "application/javascript; charset=utf-8"
    //   }
    // ]