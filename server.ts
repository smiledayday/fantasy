const env = process.env.NODE_ENV;
const dev = env === 'development';
const server_timeout = require('fastify-server-timeout');
type MyObj = {
  [key: string]: any;
};
const devProxy: MyObj = {
  '/napi': {
    target: `https://www.duitang.com`,
    changeOrigin: true,
  },
};

console.log('server running');


const fastify = require('fastify')({
  logger: { level: dev ? 'warn' : 'error' },
  ignoreTrailingSlash: true,
  pluginTimeout: 30000,
});

const Next = require('next');

const port = parseInt(process.env.PORT!, 10) || 3000;

fastify
  .register(server_timeout, {
    serverTimeout: 60000, //ms
  })
  .register((fastify: any, opts: any, next: any) => {
    const app = Next({ dev });
    app
      .prepare()
      .then(() => {
        if (dev) {
          const proxyMiddleware = require('http-proxy-middleware');
          Object.keys(devProxy).forEach(function(context) {
            fastify.use(proxyMiddleware(context, devProxy[context]));
          });
        }
        next();
      })
      .catch((err: any) => next(err));
  });

fastify.listen(port, dev ? '127.0.0.1' : '0.0.0.0', (err: any) => {
  if (err) throw err;
  console.log(`> Ready on http://dev.duitang.net:${port}`);
});

export {}
