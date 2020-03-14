const CharacterRepository = require('../repositories/CharacterRepository');
const { DataNotFoundException } = require('../exceptions/DataNotFoundException');

module.exports = {
  async getAll() {
    return await CharacterRepository.getAll();
  },

  async getById(id) {
    const character = await CharacterRepository.getById(id);
    if (!character) {
      throw new DataNotFoundException('data not found');
    }

    return character;
  },

  async store(data) {
    data.created_at = new Date;
    data.updated_at = new Date;

    const character = await CharacterRepository.store(data);

    return await CharacterRepository.getById(character[0].id);
  },

  async update(id, data) {
    const character = await CharacterRepository.getById(id);
    if (!character) {
      throw new DataNotFoundException('character not found');
    }

    await CharacterRepository.update(id, data);
    return await CharacterRepository.getById(id);
  },

  async delete(id) {
    const character = await CharacterRepository.getById(id);
    if (!character) {
      throw new DataNotFoundException('character not found');
    }

    await CharacterRepository.delete(id);

    return {
      message: `character ${id} deleted!`
    };
  }
};
