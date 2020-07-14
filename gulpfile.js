var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");


// add your js processing here, uglify etc.
gulp.task(
  "js",
  gulp.series(function () {
    return gulp.src("js/*js");
  })
);

gulp.task(
  "js-watch",
  gulp.series("js", function (done) {
    browserSync.reload();
    done();
  })
);

gulp.task("sass", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
});

gulp.task(
  "watch",
  gulp.series(function () {
    browserSync.init({
      server: ["src", "build"],
      ui: {
        port: 3000,
      },
    });

    gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js", gulp.series("js-watch"));
  })
);
