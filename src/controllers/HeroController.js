const HeroService = require('../services/HeroService');

module.exports = {
  async index(req, res) {
    const heroes = await HeroService.getAll();
    return res.send(heroes);
  },

  async show(req, res) {
    return res.send('show details of the hero: '+req.params.id);
  },

  async store(req, res) {
    const hero = await HeroService.store(req.body);
    return res.send(hero);
  },

  async update(req, res) {
    return res.send('update a hero: '+req.params.id);
  },

  async delete(req, res) {
    return res.send('delete a hero: '+req.params.id);
  }
};
