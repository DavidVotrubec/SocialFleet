angular.module('app', ['satellizer'])
// configure $authProvider which is part of the satellizer module
.config(function($authProvider){
    
    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = true;
    $authProvider.tokenRoot = null;
    $authProvider.cordova = false;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';
    //     
    // $authProvider.twitter({
    //     // the url may be on another server (this is N-tiear app)
    //     // we could need to use CORS (more complex)
    //     // so instead we will use proxy for 'api/'
    //     
    //     // The example has /api but that does not work for me.
    //     //url: '/api/user/login'
    //     url: '/api/user/login'
    // });
    
    // Twitter
    $authProvider.twitter({
        //url: '/auth/twitter',
        url: '/api/user/login',
        authorizationEndpoint: 'https://api.twitter.com/oauth/authorize',
        redirectUri: window.location.origin,
        type: '1.0',
        popupOptions: { width: 495, height: 645 }
    });
})
; 