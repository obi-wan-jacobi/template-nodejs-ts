# servicenow-scriped-rest-api-master

This project aims to provide a type-safe coding environment for ServiceNow Scripted REST API components. Enables vscode-driven development (CI), at present.

TODO: continuous deployment workflow (CD).


## Getting Started

Be sure to have Nodejs installed (locally or as part of Dockerfile image).

```terminal
git clone
npm install
```


## Commands

### Generate build artifacts

```terminal
npm run build
```

Built javascript files will land in ./build/ -- the contents of which can be copy/pasted into a
ServiceNow Scripted REST API

### Run tests

```terminal
npm run test
```
