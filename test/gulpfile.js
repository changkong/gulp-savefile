// 当前目录, 调用时设置到项目根目录
//
var gulp = require('gulp');
var rename = require('gulp-rename');
var savefile = require('./../index.js');

gulp.task('default', function() {
  return gulp.src('gulpfile.js')
        .pipe(rename('file.test'))
        .pipe(savefile());
});
