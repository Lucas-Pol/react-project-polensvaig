import Cart from "./cart";

function Navbar() {

    const style = {
      width: '50px',
      height: '50px', // Set the desired height here
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dkyxilgt9/image/upload/v1696879667/vecteezy_golden-logo-template_23654784_681_xlorc0.png" alt="Logo" style={style} />
          </a>
  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
          <Cart/>
        </div>
      </nav>
    );
  }
  
  export default Navbar;