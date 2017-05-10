const request = require('request');

module.exports = (context, req, res) => {
  const url = req.url || 'http://www.bing.com/';
  context.log.info(`Requesting ${url}`);
 
  request.get(url, (err, resp, body) => {
    if (err) {
      return context.done(err);
    }
    context.log.info(`Got HTTP ${resp.statusCode}`)
    res.body = { statusCode: resp.statusCode, length: body.length, headers: resp.headers };
    context.done();
  });
}