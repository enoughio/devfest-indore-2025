<template>
  <div class="what-to-expect-section">
    <div class="what-to-expect-container">
      <!-- Top Section: Title, Tags, and Intro -->
      <div class="top-section">
        <h2 class="main-title">What to Expect</h2>
        
        <div class="topic-tags">
          <span class="tag tag-blue">Technology</span>
          <span class="tag tag-pink">Product</span>
          <span class="tag tag-yellow">Innovation</span>
          <span class="tag tag-green">Startups</span>
          <span class="tag tag-blue">AI</span>
          <span class="tag tag-pink tag-rounded">Learning</span>
        </div>
        
        <p class="intro-text">
          An annual event hosted by the Google Developers Group across the world to bring the technology closer to the developers. It is an all day developer conference where we aim to focus on multiple technologies through lightning talks, sessions, workshops, etc.
        </p>
      </div>

      <!-- Three Content Boxes -->
      <div class="content-boxes">
        <div class="content-box">
          <div class="box-decorative graphic-1">
            <img src="@/assets/elements-expect-section /element1.svg" alt="Decorative" />
          </div>
          <h3 class="box-title">Technical content</h3>
          <p class="box-text">
            Worldwide events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Mobile development, AI, Blockchain, AI/VR, Cybersecurity, Machine Learning and so much more!
          </p>
        </div>

        <div class="content-box">
          <div class="box-decorative graphic-2">
            <img src="@/assets/elements-expect-section /element2.svg" alt="Decorative" />
          </div>
          <h3 class="box-title">Panel Discussions</h3>
          <p class="box-text">
            Full-day panel-discussions, all centered on your favorite trending technologies.
          </p>
        </div>

        <div class="content-box">
          <div class="box-decorative graphic-3">
            <img src="@/assets/elements-expect-section /element3.svg" alt="Decorative" />
          </div>
          <h3 class="box-title">Networking</h3>
          <p class="box-text">
            Meet and connect with other developers in your community.
          </p>
        </div>
      </div>

      <!-- Bottom Section: Stay Updated and DevFest Branding -->
      <div class="bottom-section">
        <div class="stay-updated-box">
          <h3 class="stay-updated-title">Stay updated on the technologies you love</h3>
          <p class="stay-updated-text">
            This DevFest we are focusing on the technologies that are trending in the market and are in demand. Let's come together and learn about these technologies from industry leading experts.
          </p>
          <div class="tech-logos">
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg" alt="Android" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.svg" alt="Flutter" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Google_Cloud_logo.svg" alt="Google Cloud" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg" alt="Google Maps" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Google_Analytics_logo.svg" alt="Google Analytics" />
            </div>
            <div class="tech-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Assistant" />
            </div>
          </div>
        </div>

        <div class="devfest-branding-box">
          <h3 class="devfest-title">{ DevFest }</h3>
          <p class="devfest-subtitle">Indore</p>
          <div class="devfest-logo-section">
            <div class="gdg-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Left circle (blue/orange) -->
                <circle cx="20" cy="30" r="12" fill="#4285F4"/>
                <circle cx="20" cy="30" r="12" fill="#EA4335" opacity="0.7"/>
                <!-- Right circle (yellow/green) overlapping -->
                <circle cx="40" cy="30" r="12" fill="#FBBC04"/>
                <circle cx="40" cy="30" r="12" fill="#34A853" opacity="0.7"/>
              </svg>
            </div>
            <p class="gdg-text">Google Developer<br/>Groups</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatToExpectSection'
}
</script>

<style scoped>
.what-to-expect-section {
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.what-to-expect-container {
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Top Section */
.top-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.main-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  border: 1px solid #000000;
}

.tag-blue {
  background-color: #B3E5FC;
}

.tag-pink {
  background-color: #FFB3D9;
}

.tag-yellow {
  background-color: #FFF9C4;
}

.tag-green {
  background-color: #C8E6C9;
}

.tag-rounded {
  border-radius: 25px;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Content Boxes */
.content-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.content-box {
  background-color: #E5E5E5;
  border: 1px solid #000000;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: visible;
}

.box-decorative {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
}

.box-decorative img {
  width: auto;
  height: 60px;
  display: block;
}

.box-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
  margin: 0 0 1rem 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.box-text {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Bottom Section */
.bottom-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.stay-updated-box {
  background-color: #E5E5E5;
  border: 1px solid #000000;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stay-updated-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.stay-updated-text {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #000000;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.tech-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.tech-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #CCCCCC;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 8px;
}

.tech-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.devfest-branding-box {
  background-color: #E5E5E5;
  border: 1px solid #000000;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.devfest-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.devfest-subtitle {
  font-size: 1.25rem;
  color: #000000;
  margin: 0;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.devfest-logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.gdg-logo {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gdg-logo svg {
  width: 100%;
  height: 100%;
}

.gdg-text {
  font-size: 0.875rem;
  color: #000000;
  margin: 0;
  line-height: 1.4;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-boxes {
    grid-template-columns: 1fr;
  }

  .bottom-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .what-to-expect-section {
    padding: 1.5rem 1rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .content-boxes {
    gap: 1rem;
  }

  .content-box {
    padding: 1.25rem;
  }

  .stay-updated-box {
    padding: 1.5rem;
  }

  .devfest-branding-box {
    padding: 1.5rem;
  }

  .tech-logos {
    gap: 0.75rem;
  }

  .tech-logo {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .what-to-expect-section {
    padding: 1rem 0.75rem;
  }

  .main-title {
    font-size: 1.75rem;
  }

  .tag {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .intro-text {
    font-size: 0.9rem;
  }

  .box-title {
    font-size: 1.1rem;
  }

  .box-text {
    font-size: 0.8rem;
  }

  .stay-updated-title {
    font-size: 1.25rem;
  }

  .stay-updated-text {
    font-size: 0.8rem;
  }

  .tech-logo {
    width: 40px;
    height: 40px;
  }
}
</style>

