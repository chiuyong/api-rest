class HomeCrontroller {
  index(req, res) {
    res.json({ message: 'Hello World!' });
  }
}

export default new HomeCrontroller();
