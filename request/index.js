const request = require('request');

module.exports = (context) => {
  const url = context.req.url || 'http://www.bing.com/';
  context.log.info(`Requesting ${url}`);
  context.log.info(arguments);
 
  request.get(url, (err, resp, body) => {
    if (err) {
      return context.done(err);
    }
    context.log.info(`Got HTTP ${resp.statusCode}`)
    context.res.body = { statusCode: resp.statusCode, length: body.length, headers: resp.headers };
    context.done();
  });
}