module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : /app/,
        loader : "babel"
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};

// module.exports = config;
