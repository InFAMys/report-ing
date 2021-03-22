export default function Nav () {
  const handleLogout = () => {
    sessionStorage.clear()
    window.location.assign('/')
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="ml-auto col-md-4">
          <button className="btn btn-transparent" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
