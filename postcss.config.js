const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss({
            content: ["./*.html"]
          }),
          require("cssnano")
        ]
      : [])
  ]
};
