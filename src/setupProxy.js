const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(createProxyMiddleware('/auth', { target: 'http://localhost:5001' }));
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:5002' }));

  //   app.use(createProxyMiddleware('/api', { target: 'http://localhost:5001' }));
  // app.use(
  //   'ws://websocket',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8989',
  //     changeOrigin: true,
  //     ws: true,
  //     pathRewrite: {
  //       '^ws://websocket': '/',
  //     },
  //   }),
  // );
};
