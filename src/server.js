import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import { middleware } from '@sapper/server';

const { PORT, NODE_ENV } = process.env;

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev: NODE_ENV === 'development' }),
    middleware(),
  )
  .listen(PORT, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('error', err);
    }
  });
