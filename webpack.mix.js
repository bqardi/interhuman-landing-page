const mix = require("laravel-mix");

mix
  .js("src/index.js", "app.js")
  .postCss("src/input.css", "style.css", [require("tailwindcss")])
  .setPublicPath("build")
  .browserSync({
    server: "./",
    files: ["./build/**/*"],
  })
  .sourceMaps();
