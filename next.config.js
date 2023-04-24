/** @type {import('next').NextConfig} */
const httpProxy = require('http-proxy');
const proxyMiddleware = require('http-proxy-middleware');

const devProxy = {
  '/napi': {
    target: 'www.duitang.com',
    changeOrigin: true,
  },
};

const proxy = httpProxy.createProxyServer();
const proxyMiddlewareWrapper = (req, res, next) => {
  const handle = proxy.web(req, res, { target: devProxy['/napi'].target });
  handle.on('error', (err) => next(err));
};
const nextConfig = {
  reactStrictMode: true,
  // serverRuntimeConfig: {
  //   // 在服务器端添加 http-proxy 中间件
  //   devProxy: proxyMiddleware('/napi', devProxy['/napi']),
  // },
  // publicRuntimeConfig: {
  //   // 在客户端添加 http-proxy 中间件
  //   devProxy: proxyMiddlewareWrapper,
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
