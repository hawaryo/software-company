import styles from "./HomeHeader.module.scss";

export default function HomeHeader() {
  return (
    <header>
      <section className={styles.headerContentSection}>
        <div className={styles.headerIntro}>
          <div className={styles.headerIntroText}>
            <h1>Use Data &amp; AI, Responsibly</h1>
            <p className={styles.headerDescription}>
              Unlock your productivity potential with our intuitive and powerful
              to-do app. Manage tasks, set priorities, collaborate with your
              team, and track progress effortlessly.
            </p>
            <form action="#">
              <input
                className={styles.email}
                type="email"
                placeholder="Enter your email"
              />
              <button className={styles.getDemoBtn} type="submit">
                Get Demo
              </button>
              <p>
                We care about your data in our <a href="#">privacy policy.</a>
              </p>
            </form>
            <div className={styles.userReviews}>
              <div className={styles.reviewerAvatars}>
                <img
                  src="/images/home-page/Header-images/reviewer-1.jpg"
                  alt="reviewer one"
                  width="50px"
                />
                <img
                  src="/images/home-page/Header-images/reviewer-2.png"
                  alt="reviewer two"
                  width="50px"
                />
                <img
                  src="/images/home-page/Header-images/reviewer-3.png "
                  alt="reviewer three"
                  width="50px"
                />
                <img
                  src="/images/home-page/Header-images/reviewer-4.jpg"
                  alt="reviewer four"
                  width="50px"
                />
              </div>
              <div className={styles.rating}>
                <img
                  src="/images/home-page/Header-images/star-rating.svg"
                  alt="one star rating"
                />
                <img
                  src="/images/home-page/Header-images/star-rating.svg"
                  alt="two star rating"
                />
                <img
                  src="/images/home-page/Header-images/star-rating.svg"
                  alt="three star rating"
                />
                <img
                  src="/images/home-page/Header-images/star-rating.svg"
                  alt="four star rating"
                />
                <img
                  src="/images/home-page/Header-images/star-rating.svg"
                  alt="five star rating"
                />
                <p>Based on 200+ reviews</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImgContainer}>
            <img
              className={styles.heroImg}
              src="/images/home-page/Header-images/hero.jpg"
              alt="hero image"
              width="500px"
            />
            <img
              className={styles.accountImg}
              src="/images/home-page/Header-images/account.png"
              alt="account sample"
              width="250px"
            />
            <img
              className={styles.countriesImg}
              src="/images/home-page/Header-images/countries.png"
              alt="multiple countries image"
              width="250px"
            />
          </div>
        </div>

        <div className={styles.brands}>
          <p>
            14,000+ customers large and small rely on us for trust
            transformation
          </p>
          <div className={styles.brandLogos}>
            <img
              src="/images/home-page/Header-images/brand-01.svg"
              alt="capsule brand logo"
            />
            <img
              src="/images/home-page/Header-images/brand-02.svg"
              alt="layers barnd logo"
            />
            <img
              src="/images/home-page/Header-images/brand-03.svg"
              alt="polymath brand logo"
            />
            <img
              src="/images/home-page/Header-images/brand-04.svg"
              alt="segment brand logo"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
