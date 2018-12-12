const notifier = require('node-notifier');
const path = require('path');
const every = require('every-moment');

every(20, 'seconds', function() {
   
    notifier.notify(
        {
          title: 'Hello Friend',
          message: 'You need some Break !!!!',
          icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
          sound: true, // Only Notification Center or Windows Toasters
          wait: true // Wait with callback, until user action is taken against notification
        },
        function(err, response) {
          // Response is response from notification
        }
      );
      
      notifier.on('click', function(notifierObject, options) {
        // Triggers if `wait: true` and user clicks notification
      });
      
      notifier.on('timeout', function(notifierObject, options) {
        // Triggers if `wait: true` and notification closes
      });

});

