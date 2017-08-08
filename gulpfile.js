"use strict";

var gulp = require("gulp"),
  gutil = require("gulp-util"),
  gcached = require("gulp-changed"),
  babel = require("gulp-babel"),
  browserify = require("browserify"),
  watchify = require("watchify"),
  bs = require("browser-sync").create(),
  fs = require("fs");

const SOURCE = "src/",
  TEMP = "temp/",
  DIST = "dist/",
  JS = "js/",
  HTML = "html/";

gulp.task("transpile", function(){
  return gulp.src(SOURCE + JS + "**/*.js")
    .pipe(gcached(TEMP + JS))
    .pipe(babel())
    .pipe(gulp.dest(TEMP + JS));
});

gulp.task("bundle", ["transpile"], function(done){
  watchify(browserify(TEMP + JS + "main.js"))
    .on("error", gutil.log)
    .bundle()
    .pipe(fs.createWriteStream(DIST + JS + "bundle.js"))
    .on("finish", function(){
      bs.reload();
      done();
    });
});

gulp.task("publish_html", function(){
  return gulp.src(SOURCE + HTML + "**/*.html")
    .pipe(gulp.dest(DIST + HTML))
    .pipe(bs.stream());
});

gulp.task("server", ["bundle", "publish_html"], function(done){
  bs.init({
    server: {
      baseDir: DIST,
      index: HTML + "base.html"
    }
  }, done);
});

gulp.task("default", ["server"], function(){
  gulp.watch(SOURCE + HTML + "**/*.html", ["publish_html"]);
  gulp.watch(SOURCE + JS + "**/*.js", ["bundle"]);
});
