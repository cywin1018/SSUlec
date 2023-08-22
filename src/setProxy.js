const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/user", {
      target: "http://10.14.4.187:8080",
      changeOrigin: true,
    })
  );
};
