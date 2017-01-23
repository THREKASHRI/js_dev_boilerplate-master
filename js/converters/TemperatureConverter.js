let log4js = require('log4js');
let logger = log4js.getLogger();

module.exports = function(celsius)
{
  if(isNaN(celsius))
  {
    return NaN;
  }
  let cToFahr = celsius * 9 / 5 + 32;
  let result = Math.round(cToFahr);
    logger.debug(result);
    return result;
}
