const path = require("path");
const glob = require("glob");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        loader: "babel-loader",
        options: {
          babelrc: false,
          extends: path.resolve(__dirname, "./.babelrc")
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              outputStyle: "compressed", // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );

    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config;
  },
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' },
  //     '/landing': { page: '/landing' },
  //     '/generic': { page: '/generic' },
  //     '/landing': { page: '/landing' }
  //   }
  // }
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/landing": { page: "/landing" },
      "/generic": { page: "/generic" },
      "/landing": { page: "/landing" }
    };
  },
  assetPrefix: !debug ? "/website-project/" : ""
};
