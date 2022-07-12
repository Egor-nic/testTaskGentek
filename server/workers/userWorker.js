class UserWorker {
  async addUser(req, res) {
    const { name, lastname, login, email, phone } = req.body
    try {
      const newUser = await User.create(name, lastname, login, email, phone)
      if (newUser) {
        res.json(newUser)
      } else {
        res.json({ message: 'Что то пошло не так.' })
      }
    } catch (error) {
      console.log(error)
      res.status(505)
    }
  }

  async updateUser(req, res) {
    const { id, name, lastname, login, email, phone } = req.body
    try {
      await User.update({ name, lastname, login, email, phone }, { where: { id: id } })
      res.status(203)
    } catch (error) {
      res.status(503)
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.body
      const user = await User.findOne({ where: { id: id } })
      if (user) {
        res.json(user)
      } else {
        res.json({ message: 'Что то пошло не так.' })
      }
    } catch (error) {
      res.status(506)
    }
  }

  async getListUser(req, res) {
    try {
      const users = await User.findAll()
      if (users) {
        res.json(users)
      } else {
        res.json({ message: 'Что то пошло не так.' })
      }
    } catch (error) {
      res.status(507)
    }
  }
}
