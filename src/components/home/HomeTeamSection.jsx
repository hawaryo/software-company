import styles from "./HomeTeamSection.module.scss";

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamIntro}>
        <p className="icon">Our team</p>
        <h2>People you’ll be working with</h2>
        <p className="description">
          We’re a 100% remote team spread all across the world.
        </p>
      </div>
      <div className={styles.teamMembers}>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/01.webp"
            width="280px"
            className={styles.memberImg}
            alt="ceo"
          />
          <h6 className={styles.memberName}>Nilson Laurent</h6>
          <p className={styles.memberRole}>Founder &amp; CEO</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/02.webp"
            width="280px"
            className={styles.memberImg}
            alt="José Gibbons Engineering Manager"
          />
          <h6 className={styles.memberName}>José Gibbons</h6>
          <p className={styles.memberRole}>Engineering Manager</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/03.webp"
            width="280px"
            className={styles.memberImg}
            alt="John Hewitt product manager"
          />
          <h6 className={styles.memberName}>John Hewitt</h6>
          <p className={styles.memberRole}>Product Manager</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/04.webp"
            width="280px"
            className={styles.memberImg}
            alt=" Jason Chedjou Frontend Developer"
          />
          <h6 className={styles.memberName}>Jason Chedjou</h6>
          <p className={styles.memberRole}>Frontend Developer</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/05.webp"
            width="280px"
            className={styles.memberImg}
            alt=" Zouhir Christensen Backend Developer"
          />
          <h6 className={styles.memberName}>Zouhir Christensen</h6>
          <p className={styles.memberRole}>Backend Developer</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/06.webp"
            width="280px"
            className={styles.memberImg}
            alt="Zaid Schwartz Product Designer"
          />
          <h6 className={styles.memberName}>Zaid Schwartz</h6>
          <p className={styles.memberRole}>Product Designer</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/07.webp"
            width="280px"
            className={styles.memberImg}
            alt="Sarah Mandella UX Researcher"
          />
          <h6 className={styles.memberName}>Sarah Mandella</h6>
          <p className={styles.memberRole}>UX Researcher</p>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/images/home-page/team/08.webp"
            width="280px"
            className={styles.memberImg}
            alt="Marco Kelly Customer Success"
          />
          <h6 className={styles.memberName}>Marco Kelly</h6>
          <p className={styles.memberRole}>Customer Success</p>
        </div>
      </div>
      <div className={styles.hiringCard}>
        <h3 className="hiringTitle">We’re hiring</h3>
        <p className={styles.hiringDescription}>
          We are looking for people that share our vision. Are you adaptable,
          driven, and friendly?
        </p>
        <button className={styles.hiringBtn} type="button">
          Submit application
        </button>
      </div>
    </section>
  );
}
