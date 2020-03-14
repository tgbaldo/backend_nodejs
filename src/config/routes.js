const express = require('express');
express.application.prefix = express.Router.prefix = function (path, configure) {
  const router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
};
const app = express();
const controllers = '../../src/controllers';

const CharacterController = require(`${controllers}/CharacterController`);

app.get('/', (req, res, next) => {
  res.send({
    app: 'Hero Fintech',
    status: 'up',
    version: '1.0',
    homepage: 'https://heroway.com.br'
  });
})

app.prefix('/characters', (router) => {
  router.route('/').get(CharacterController.index);
  router.route('/:id').get(CharacterController.show);
  router.route('/').post(CharacterController.store);
  router.route('/:id').put(CharacterController.update);
  router.route('/:id').delete(CharacterController.delete);
});

exports.router = app;
