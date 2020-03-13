const express = require('express');
express.application.prefix = express.Router.prefix = function (path, configure) {
  const router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
};
const app = express();
const controllers = '../../src/controllers';

const HeroController = require(`${controllers}/HeroController`);

app.prefix('/heroes', (router) => {
  router.route('/').get(HeroController.index);
  router.route('/:id').get(HeroController.show);
  router.route('/').post(HeroController.store);
  router.route('/:id').put(HeroController.update);
  router.route('/:id').delete(HeroController.delete);
});

exports.router = app;
