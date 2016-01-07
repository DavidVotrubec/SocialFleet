var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerfiles = require('main-bower-files');

var paths = {
    temp: 'temp',
    index: 'app/index.html'
}

gulp.task('default', ['tempSetup', 'serve']);

gulp.task('scripts', function(){
    
    // mainBowerfiles returns string (array) of installed bower components
    // each has a main files, as listed in the .bower.json
    gulp.src(mainBowerfiles())
    .pipe(gulp.dest())
});

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