# luga-jest-preset
A preset to use as a base for Jest's configuration inside React projects

npm install luga-jest-preset --save-dev

Place a jest.config.js at the root of your project containing:

```
module.exports = {
  "preset": "luga-jest-preset"
};
```

You can override configuration settings like this:

```
module.exports = {
  "preset": "luga-jest-preset",
  "verbose": false
};
```

For a complete list of available configuration options see:
[Jest documentation](https://jestjs.io/docs/en/configuration.html)