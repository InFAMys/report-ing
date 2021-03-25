// import logo from "../assets/logo64.png";
//
// export default function NavAdmin() {
//   const handleLogout = () => {
//     sessionStorage.clear();
//     window.location.assign("/");
//   };
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light montfont">
//       <div className="navbar-brand navbar-brand d-flex flex-row align-items-center">
//         <img width="45" src={logo} alt="Logo" />
//         <div className="margin-left__1rem display-5 larger-font-size">Lapor</div>
//       </div>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav w-100">
//           <li className="nav-item ml-auto">
//             <button
//               className="btn btn-transparent text-light"
//               onClick={handleLogout}
//             >
//               Keluar
//             </button>
//             <a className="btn btn-transparent text-light" href="/reportindexadmin">Daftar Laporan</a>
//             <a className="btn btn-transparent text-light" href="/admindex">Beranda</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
//
// import logo from "../assets/logo64.png";

export default function NavAdmin() {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.assign("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light montfont">
      <div className="navbar-brand navbar-brand d-flex flex-row align-items-center">
        {/*<img width="45" src={logo} alt="Logo" />*/}
        <div className="margin-left__1rem display-5 larger-font-size">Lapor</div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">
          <li className="nav-item ml-auto">
            <button
              className="btn btn-transparent text-light"
              onClick={handleLogout}
            >
              Keluar
            </button>
            <a className="btn btn-transparent text-light" href="/reportindexadmin">Daftar Laporan</a>
            <a className="btn btn-transparent text-light" href="/admindex">Beranda</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
