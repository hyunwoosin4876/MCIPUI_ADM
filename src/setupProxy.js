// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api'
      , {
        target: 'http://192.168.11.12:8282/',
        changeOrigin: true,
      }
    ),
  );
};