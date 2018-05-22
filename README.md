# ts-jest-dynamic-imports
Micro-repo with the dynamic import issue, when using ts-jest

This repo is intended to demonstrate the error with ts-jest, when using dynamic imports in the files being tested.

The following error appears:

![error image](errorImage.png?raw=true "Error")

To reproduce the error, please run:

```
npm i
npm run test
```
