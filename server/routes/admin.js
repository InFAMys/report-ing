const jwt = require('jsonwebtoken');
module.exports = (app, db) => {
  let sql = ""
  const adminKey = "?5*SR82;)tbJ;Jm{hxH17oJU{qE8kmNb*KC~>Be6b~S^=NO6<}8YKR8BKW6<mN."

  app.post('/admin', (req, res) => {
    const {
      email,
      password
    } = req.body
    const tokenAdmin = jwt.sign({
      email,
      password
    }, adminKey)
    sql = `select * from admin where email=? and password=?`
    db.query(sql, [email, password], (err, data) => {
      if (err) {
        throw err
      }
      if (data.length > 0) {
        res.json({
          ...data[0],
          tokenAdmin
        })
      } else {
        res.json({
          message: "Invalid credentials"
        })
      }
    })
  })
}
