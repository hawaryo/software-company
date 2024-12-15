/*
How to use this component:
1- import the component file in your html :
    <script type="module" src="./component/footer.js"></script>

2- use the component in your html :
    <footer-component></footer-component>
*/

class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<link rel="stylesheet" href="./assets/styles/css/footer.css">
    <link
      rel="stylesheet"
      href="node_modules/bootstrap-icons/font/bootstrap-icons.css"
    />
                <footer>
      <div class="footerhead">
        <div class="footerIntro">
          <h2 class="footerIntroTitle">Sign up now or never!</h2>
          <p class="footerIntroDescription">
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <form action="#" class="newsLetterForm">
          <input
            class="newsLetterEmail"
            type="text"
            placeholder="Your email.."
          />
          <button class="newsLetterBtn" type="submit">Subscribe</button>
        </form>
      </div>
      <hr />
      <div class="footBody">
        <div class="bodyCard">
          <img
            src="./assets/images/home-page/footer/logo-dark.svg"
            alt="logo"
          />
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <a href="#"
            ><i class="bi bi-globe-americas"></i> English
            <i class="bi bi-caret-down-fill"></i
          ></a>
        </div>
        <div class="linkListsContainer">
          <ul class="ProductList">
            <li><a href="#" class="listTitle">Product</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Releases</a></li>
          </ul>
          <ul class="ProductList">
            <li><a href="#" class="listTitle">Company</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Media kit</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul class="ProductList">
            <li><a href="#" class="listTitle">Resources</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
          <ul class="ProductList">
            <li><a href="#" class="listTitle">Social</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">AngelList</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
          <ul class="ProductList">
            <li><a href="#" class="listTitle">Legal</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="footButtom">
        <p>Lexend © 2024, All rights reserved.</p>

        <div class="socailLink">
          <a href="#"> <i class="bi bi-linkedin"></i></a>
          <a href="#"> <i class="bi bi-facebook"></i></a>
          <a href="#"> <i class="bi bi-twitter"></i></a>
          <a href="#"> <i class="bi bi-instagram"></i></a>
          <a href="#"> <i class="bi bi-youtube"></i></a>
          <a href="#"> <i class="bi bi-dribble"></i></a>
        </div>
      </div>
    </footer>
        `;
  }
}


customElements.define("footer-component", footer);