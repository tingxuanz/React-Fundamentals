var Raven = require('raven-js')

function logCustomException (exception, context) {
  Raven.captureException(exception, {
    extra: context
  });

  window && window.console && console.error && console.error(exception)
}

module.exports = logCustomException