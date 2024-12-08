/*
How to use this component:
1- import the component file in your html put it in the buttom of your body :
    <script type="module" src="./component/navbar.js"></script>

2- use the component in your html :
    <navbar-component></navbar-component>
*/

class navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<link rel="stylesheet" href="./styles/css/navbar.css">
              <header>
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/index.html">
            <img
              src="./Assets/images/home-page-images/Header-images/logo.svg"
              alt="logo"
              width="100"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto ms-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contactPage.html"
                  >Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/insights.html">Insights</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/our-team.html">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/careers.html">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Buy Now</a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <i class="bi bi-globe"></i>
              <span class="ms-2">EN</span>
              <button
                class="btn btn-success d-flex align-items-center ms-2"
                type="button"
              >
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </nav>
        `;
  }
}


customElements.define("navbar-component", navbar);