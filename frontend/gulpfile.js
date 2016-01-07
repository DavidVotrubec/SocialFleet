var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerfiles = require('main-bower-files');
var inject = require('gulp-inject');

var paths = {
    temp: 'temp',
    tempVendor: 'temp/vendor',
    index: 'app/index.html'
}

gulp.task('default', ['scripts', 'serve']);

gulp.task('scripts', function(){
    
    // copy the index file and get reference to it
    var tempIndexFile = gulp.src(paths.index).pipe(gulp.dest(paths.temp));
    
    // mainBowerfiles returns string (array) of installed bower components
    // each has a main files, as listed in the .bower.json
    var tempVendors = gulp.src(mainBowerfiles()).pipe(gulp.dest(paths.tempVendor));
    
    // inject vendor files (js and css) into index file
    tempIndexFile.pipe(inject(tempVendors))
    // then replace the index file with its updated version
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