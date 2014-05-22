gulp-savefile
=============

gulp plugin, write file to disk

Usage
=====

```javascript
var gulp = require('gulp');
var rename = require('gulp-rename');
var savefile = require('gulp-savefile');

gulp.task('default', function() {
  return gulp.src('gulpfile.js')
        .pipe(rename('file.test'))
        .pipe(savefile());
});
```

License
=======

MIT License