var gulp = require('gulp');
var webserver = require('gulp-webserver');

var paths = {
    temp: 'temp',
    index: 'app/index.html'
}

gulp.task('default', ['tempSetup', 'serve'])

/**
 * prepare temp directory
 */
gulp.task('tempSetup', function(){
    gulp.src(paths.index)
    .pipe(gulp.dest(paths.temp));
});

/**
 * servers static files
 */
gulp.task('serve', function(){
    
    gulp.src(paths.temp)
    .pipe(webserver({
        // open browser?
        open: true,
        
        // if falsy then it opens the index file located in the .src()
        //directoryListing: true
    }));
    
});