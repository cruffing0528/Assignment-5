var {src, dest} = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');
// var cleanCSS = require('gulp-clean-css');

function css() {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
    }

// function minifyCSS() {
//     return src('src/*.scss')
//         .pipe(cleanCSS())
//         .pipe(dest("minified"))
// }

// src.task("minify-css", minifyCSS);

// src.task("watch", () => {
//   src.watch("src/*.scss", minifyCSS);
// });

// src.task('default', src.series('minify-css', 'watch'));

exports.default = function () {
    watch('src/*.scss', css);
};

