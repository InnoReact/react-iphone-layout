벤치마킹 할 자료 탐색 중..

```
{
  "name": "react-iphone-layout",
  "version": "1.0.0",
  "description": "iPhone layout in browser on web",
  "author": "bangdori <bangdori8865@gmail.com>",
  "contributors": [],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/BangDori/iPhone-layout"
  },
  "bugs": {
    "url": "https://github.com/BangDori/iPhone-layout/issues",
    "email": "bangdori8865@gmail.com"
  },
  "homepage": "https://github.com/BangDori/iPhone-layout",
  "keywords": [
    "iPhone",
    "webview",
    "webapp"
  ],
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "npm run build:typescript && npm run build:babel",
    "build:typescript": "tsc",
    "build:babel": "babel lib --out-dir dist --extensions \".ts,.tsx\" --source-maps inline",

    "test": "npm run build && npm run test:lint && npm run test:lib && npm run test:express && npm run test:dist",
    "test:lib": "mocha -r ts-node/register test/lib/**/*.spec.ts",
    "test:express": "mocha -r ts-node/register test/express/**/*.spec.ts",
    "test:dist": "mocha -r ts-node/register test/dist/**/*.spec.ts",
    "test:lint": "eslint --fix",

    "prepublishOnly": "npm run build"
  }
}
```
