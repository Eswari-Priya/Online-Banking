import "bootstrap/dist/css/bootstrap.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import './navbar.css'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Nesla bank</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
      </ul>
      <div className="lang">
      <p className="px-2">EN</p>
      </div>
      <form class="d-flex">
        <button class="btn btn-sm btn-outline-secondary" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
