/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'demo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    // set content security policy
    contentSecurityPolicy:{
    'default-src': "'none'",
    // Allow scripts from list
    'script-src': "'self'  http://127.0.0.1:35729 http://app:35729", 
    // Allow fonts to be loaded from http://fonts.gstatic.com
    'font-src': "'self' http://fonts.gstatic.com", 
    // Allow data (ajax/websocket) from list
    'connect-src': "'self' http://127.0.0.1 http://app ws://app:35729 ws://127.0.0.1:35729 ", 
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
    'media-src': "'self'"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
