# servicenow-scriped-rest-api-master

This project aims to provide a type-safe coding environment for ServiceNow Scripted REST API components. Enables vscode-driven development (CI), at present.

WIP: continuous deployment workflow (CD).


## Getting Started

Be sure to have Nodejs installed (locally or as part of Dockerfile image).

```terminal
git clone
npm install
```


## Commands

### 1. Run Tests

```terminal
npm run test
```

### 2. Generate Build Artifacts

```terminal
npm run build
```

Built javascript files will land in ./build/ -- the contents of which can be copy/pasted into a
ServiceNow Scripted REST API

