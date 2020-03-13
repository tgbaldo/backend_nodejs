const HeroRepository = require('../repositories/HeroRepository');

module.exports = {
  async getAll() {
    return await HeroRepository.getAll();
  },

  async getById(id) {
    return await HeroRepository.getById(id);
  },

  async store(data) {

    data.created_at = new Date;
    data.updated_at = new Date;

    const heroId = await HeroRepository.store(data);
    const hero = await HeroRepository.getById(heroId);

    return hero;
  },

  async update(id, data) {
    return await HeroRepository.update(id, data);
  },

  async delete(id) {
    return await HeroRepository.delete(id);
  }
};
