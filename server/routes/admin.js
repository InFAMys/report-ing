module.exports = (app, db) => {
  let sql = ""

  app.post('/admin', (req,res) => {
    const{email, password} = req.body
    const tokenAdmin = Math.random() * (69 + 420);
    sql = `select * from admin where email=? and password=?`
    db.query(sql, [email,password], (err,data) => {
      if(err) {throw err}
        if(data.length > 0) {
          res.json({...data[0], tokenAdmin})
        } else {
          res.json({message: "Invalid credentials"})
        }
    })
  })

  app.post('/user', (req,res) => {
    const {email, password, username, telp} = req.body
    sql = `insert into user (email ,username, password, telp)
    values ('${email}', '${username}', '${password}', '${telp}');`
    db.query(sql, (err, res) => {
      if (err) throw err

    })
  })

  app.post('/user/auth', (req, res) => {
    const{email, password} = req.body
    console.log(req.body)
    const token = Math.random() * (24 + 4232);
    sql = `select * from user where email=? and password=?`
    db.query(sql, [email,password], (err,data) => {
      if(err) {throw err}
        if(data.length > 0) {
          res.json({...data[0], token})
        } else {
          res.json({message: "Invalid credentials"})
        }
    })
  })
}
