module.exports = {
  index(req, res) {
    return res.send('list all heroes');
  },

  show(req, res) {
    return res.send('show details of the hero: '+req.params.id);
  },

  store(req, res) {
    return res.send('create a hero');
  },

  update(req, res) {
    return res.send('update a hero: '+req.params.id);
  },

  delete(req, res) {
    return res.send('delete a hero: '+req.params.id);
  }
};
