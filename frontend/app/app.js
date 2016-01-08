angular.module('app', ['satellizer'])
// configure $authProvider which is part of the satellizer module
.config(function($authProvider){
    $authProvider.twitter({
        // the url may be on another server (this is N-tiear app)
        // we could need to use CORS (more complex)
        // so instead we will use proxy for 'api/'
        
        // The example has /api but that does not work for me.
        //url: '/api/user/login'
        url: '/api/user/login'
    });
})
; 