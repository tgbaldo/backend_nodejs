const CharacterService = require('../services/CharacterService');

module.exports = {
  async index(req, res) {
    const characters = await CharacterService.getAll();
    return res.send(characters);
  },

  async show(req, res, next) {
    try {
      return res.send(
        await CharacterService.getById(req.params.id)
      );
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      return res.send(
        await CharacterService.store(req.body)
      );
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      return res.send(
        await CharacterService.update(req.params.id, req.body)
      );
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      return res.send(
        await CharacterService.delete(req.params.id)
      );
    } catch (error) {
      next(error);
    }
  }
};
