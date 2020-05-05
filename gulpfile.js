const svgSprite = require('gulp-svg-sprites');
const gulp = require('gulp');

gulp.task('svgSprite', function () {
  return gulp.src('./public/img/icons/*.svg') // svg files for sprite
    .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg"  //sprite file name
          }
        },
      }
    ))
    .pipe(gulp.dest('./public/'));
});
