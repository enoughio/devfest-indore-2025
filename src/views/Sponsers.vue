 <template>
  <div>
    <!-- PUZZLE STATISTICS SECTION -->
    <section class="statistics-section">
      <div class="statistics-container">
        <div class="statistics-left">
          <img src="@/assets/details-element.svg" alt="Details" class="details-element" />
        </div>

        <div class="statistics-blocks">
          <div class="stat-block stat-block-blue">
            <div class="stat-number">35+</div>
            <div class="stat-label">Speakers</div>
          </div>
          <div class="stat-block stat-block-pink">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Participants</div>
          </div>
          <div class="stat-block stat-block-green">
            <div class="stat-number">25+</div>
            <div class="stat-label">Sessions</div>
          </div>
          <div class="stat-block stat-block-yellow">
            <div class="stat-number">1</div>
            <div class="stat-label">Day(s)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- BECOME A SPONSOR SECTION -->
    <section class="sponsor-section">
      <div class="sponsor-container">
        <div class="sponsor-left">
          <h2 class="sponsor-title">Become a Sponsor</h2>
          <p class="sponsor-text">
            DevFest Pune is India's largest community driven tech conference,
            hosted by Google Developer Groups Pune, bringing together industry
            experts for an in-depth exploration of emerging technologies, best
            practices, and innovative solutions.
          </p>
          <p class="sponsor-text">
            Now in its 12th edition, DevFest Pune continues to attract passionate
            professionals from diverse industries, including developers,
            architects, product owners, team leaders, coaches, and managers, all
            eager to expand their knowledge and stay ahead of the curve.
          </p>
        </div>

        <div class="sponsor-right">
          <p class="sponsor-text">
            As a DevFest Pune Sponsor, you’ll gain direct access to a highly
            engaged audience of technology professionals, providing the perfect
            opportunity to:
          </p>

          <ul class="sponsor-list">
            <li>✅ Connect with top-tier talent and decision-makers</li>
            <li>✅ Showcase your technology and thought leadership</li>
            <li>✅ Generate meaningful leads in a dynamic, innovation-driven environment</li>
          </ul>

          <p class="sponsor-text">
            With flexible sponsorship options tailored to your company’s goals,
            we’ll help you maximize your presence and impact.
          </p>

          <p class="sponsor-text">
            Join us in shaping the future of software development at DevFest Pune! 🚀
          </p>

          <p class="sponsor-text">
            Interested in becoming a DevFest Pune 2025 partner?<br />
            Write us an email at
            <a href="mailto:connect@gdgpune.in" class="sponsor-link">connect@gdgpune.in</a>
          </p>
        </div>
      </div>
    </section>

    <!-- PREVIOUS YEAR SPONSORS SECTION -->
    <section class="previous-sponsors">
      <div class="previous-container">
        <h2 class="previous-title">Previous year sponsors</h2>
        <p class="previous-subtitle">
          Sponsors dedicated to building a remarkable experience!
        </p>

        <div class="sponsor-category">
          <h3 class="sponsor-level">Title Sponsor</h3>
          <div class="sponsor-logo placeholder-box">Logo Placeholder</div>
        </div>

        <div class="sponsor-category">
          <h3 class="sponsor-level">Diamond</h3>
          <div class="sponsor-logo placeholder-box">Logo Placeholder</div>
        </div>

        <div class="sponsor-category">
          <h3 class="sponsor-level">Platinum</h3>
          <div class="sponsor-logo placeholder-box">Logo Placeholder</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "StatisticsAndSponsorSection",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap");

.statistics-section {
  width: 100%;
  padding: 110px 0 40px 0;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  font-family: "Google Sans", sans-serif;
}

.statistics-container {
  max-width: 1300px;
  width: 78%;
  background-color: #e5e5e5;
  border-radius: 16px;
  padding: 1.8rem 1.8rem 1rem 0;
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  min-height: 230px;
}

.statistics-left {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 95%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.details-element {
  height: auto;
  max-height: 240px;
  width: auto;
  object-fit: contain;
}

.statistics-blocks {
  display: flex;
  gap: 0.8rem;
  flex: 1;
  justify-content: space-between;
  margin-left: 340px;
}

.stat-block {
  flex: 1;
  min-width: 110px;
  border-radius: 12px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat-block-blue {
  background-image: url("@/assets/blue.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.stat-block-pink {
  background-image: url("@/assets/pink.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.stat-block-green {
  background-image: url("@/assets/green.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.stat-block-yellow {
  background-image: url("@/assets/yellow.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: bold;
  color: #1e1e1e;
}

.stat-label {
  font-size: 0.9rem;
  color: #1e1e1e;
}

.sponsor-section {
  width: 100%;
  padding: 55px 0 45px 0;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.sponsor-container {
  max-width: 1200px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.sponsor-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.sponsor-text {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #1f2022ff;
}

.sponsor-list {
  list-style: none;
  padding: 0;
}

.sponsor-list li {
  font-size: 1rem;
  line-height: 1.8;
}

.sponsor-link {
  color: #1a73e8;
  text-decoration: none;
}
.sponsor-link:hover {
  text-decoration: underline;
}

.previous-sponsors {
  width: 100%;
  padding: 50px 0 40px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.previous-container {
  max-width: 1200px;
  width: 80%;
}

.previous-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.previous-subtitle {
  color: #5f6368;
  margin-bottom: 1.8rem;
}

.sponsor-category {
  margin-bottom: 1.8rem;
}

.sponsor-level {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.9rem;
}

.sponsor-logo {
  background-color: #f5f5f5;
  border: 1px solid #000;
  border-radius: 14px;
  width: 210px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-box {
  color: #666;
  font-size: 0.85rem;
  font-style: italic;
  background-color: #f9f9f9;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  width: 160px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .statistics-container {
    flex-direction: column;
    width: 90%;
  }

  .statistics-blocks {
    margin-left: 0;
  }

  .statistics-left {
    position: relative;
    height: auto;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  .details-element {
    max-height: 180px;
  }

  .sponsor-container {
    grid-template-columns: 1fr;
    width: 90%;
  }
}

@media (max-width: 600px) {
  .statistics-section {
    padding: 90px 0 30px 0;
  }

  .statistics-container {
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 1.5rem;
    border-radius: 18px;
  }

  .statistics-blocks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 1.2rem;
    margin-left: 0;
    width: 100%;
    justify-items: center;
  }

  .stat-block {
    width: 100%;
    max-width: 180px;
    height: 150px;
  }

  .stat-number {
    font-size: 1.9rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .statistics-left {
    position: relative;
    order: 2;
    margin-top: 1.5rem;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .details-element {
    width: 80%;
    max-width: 200px;
    height: auto;
    object-fit: contain;
  }

  .previous-container {
    width: 90%;
  }

  .sponsor-logo {
    width: 180px;
    height: 90px;
  }
}
</style>
