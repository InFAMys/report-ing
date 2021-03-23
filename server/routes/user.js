module.exports = (app, db) => {
  let sql = ""
  app.get('/user', (req, res) => {
    res.send('User API')
  })

  app.post('/user', (req, res) => {
    const {
      email,
      password,
      username,
      telp
    } = req.body
    sql = `insert into user (email ,username, password, telp)
    values ('${email}', '${username}', '${password}', '${telp}');`
    db.query(sql, (err, res) => {
      if (err) {
        throw err
      }
      if (data.length > 0) {
        res.json({
          success: true,
          message: "Your Account Succesfully Registered!"
        })
      } else {
          res.json({
            message: "Something Is Wrong"
          })
      }
    })
  })

  app.post('/user/auth', (req, res) => {
    const {
      email,
      password
    } = req.body
    console.log(req.body)
    const token = Math.random() * (24 + 4232);
    sql = `select * from user where email=? and password=?`
    db.query(sql, [email, password], (err, data) => {
      if (err) {
        throw err
      }
      if (data.length > 0) {
        res.json({
          ...data[0],
          token
        })
      } else {
        res.json({
          message: "Invalid credentials"
        })
      }
    })
  })
}
