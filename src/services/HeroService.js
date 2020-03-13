const HeroRepository = require('../repositories/HeroRepository');
const { DataNotFoundException } = require('../exceptions/DataNotFoundException');

module.exports = {
  async getAll() {
    return await HeroRepository.getAll();
  },

  async getById(id) {
    const hero = await HeroRepository.getById(id);
    if (!hero) {
      throw new DataNotFoundException('Hero not found');
    }

    return hero;
  },

  async store(data) {
    data.created_at = new Date;
    data.updated_at = new Date;

    const hero = await HeroRepository.store(data);

    return await HeroRepository.getById(hero[0].id);
  },

  async update(id, data) {
    const hero = await HeroRepository.getById(id);
    if (!hero) {
      throw new DataNotFoundException('Hero not found');
    }

    await HeroRepository.update(id, data);
    return await HeroRepository.getById(id);
  },

  async delete(id) {
    const hero = await HeroRepository.getById(id);
    if (!hero) {
      throw new DataNotFoundException('Hero not found');
    }

    await HeroRepository.delete(id);

    return {
      message: `Hero ${id} deleted!`
    };
  }
};
