export default function Nav () {
  const handleLogout = () => {
    sessionStorage.clear()
    window.location.assign('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light montfont">
      <div className="navbar-brand pmfont">
        <center>Report-S</center>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">
          <li className="nav-item ml-auto">
            <button className="btn btn-transparent text-light" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
