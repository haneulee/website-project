const env = require("./env-config.js");

module.exports = {
  env: {
    development: {
      presets: ["next/babel", "@babel/preset-env"],
      plugins: [
        [
          "module-resolver",
          {
            root: ["."],
            alias: {
              styles: "./styles"
            },
            cwd: "babelrc"
          }
        ],
        [
          "wrap-in-js",
          {
            extensions: ["css$", "scss$"]
          }
        ],
        ["transform-define", env]
      ]
    },
    production: {
      presets: ["next/babel", "@babel/preset-env"],
      plugins: [
        [
          "module-resolver",
          {
            root: ["."],
            alias: {
              styles: "./styles"
            },
            cwd: "babelrc"
          }
        ],
        [
          "wrap-in-js",
          {
            extensions: ["css$", "scss$"]
          }
        ],
        ["transform-define", env]
      ]
    }
  }
};
