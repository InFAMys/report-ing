module.exports = (app, db) => {
  let sql = ""
  app.get('/report', (req,res) => {
    res.send('Report API')
  })

  app.post('/report', (req, res) => {
    const {content, status, id_user} = req.body
    sql = `insert into report (content, status, id_user)
    values ("${content}", 'Pending', '${id_user}')`
    db.query(sql, (err, res) => {
      if (err) throw err
    })
  })
}
