const HeroService = require('../services/HeroService');

module.exports = {
  async index(req, res) {
    const heroes = await HeroService.getAll();
    return res.send(heroes);
  },

  async show(req, res, next) {
    try {
      return res.send(
        await HeroService.getById(req.params.id)
      );
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      return res.send(
        await HeroService.store(req.body)
      );
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      return res.send(
        await HeroService.update(req.params.id, req.body)
      );
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      return res.send(
        await HeroService.delete(req.params.id)
      );
    } catch (error) {
      next(error);
    }
  }
};
