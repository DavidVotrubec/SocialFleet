/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Twit = require('twit');
var config = require('../services/config');

module.exports = {
    
    tweet: function(req, res){
        console.log('twwiiiiit');

        // todo make use of promise

        User.findOne(req.userId, function(err, user) {
            var T = new Twit({
                consumer_key:  config.TWITTER_KEY,
                consumer_secret: config.TWITTER_SECRET,
                //TODO: Make it dynamic
                access_token: '121057351-n0AZ8ZleS68zbAkowbqGlhoiQ0SgREbfNEqV3hFU',
                access_token_secret:  'SOFNu7q2e5pawjzGcvWvUBmV82RV7xuphIaI3aVhSbsCH'
            });
            
            T.post('statuses/update', { status: '2 Hello Twitter API - https://app.pluralsight.com/library/courses/two-tier-enterprise-app-api-development-angular-sails/table-of-contents' }, function(err, data, response) {
                // console.log('data', data);
                // console.log('err', err);
                // console.log('response', response);
            });    
        });

        
    }	
};

