module.exports = (app) => {
  app.get('/report', (req,res) => {
    res.send('Report API')
  })
}
