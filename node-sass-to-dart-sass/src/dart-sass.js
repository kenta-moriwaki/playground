const sass = require('sass');
const result = sass.renderSync({
    file: './fixtures/example.scss'
  });

console.log(result.css.toString())