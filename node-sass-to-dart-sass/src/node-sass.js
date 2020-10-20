const sass = require('node-sass');
const result = sass.renderSync({
    file: './fixtures/example.scss'
  });

console.log(result.css.toString())