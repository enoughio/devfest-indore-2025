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
            <img src="@/assets/elements-expect-section/element1.svg" alt="Decorative" />
          </div>
          <h3 class="box-title">Technical content</h3>
          <p class="box-text">
            Worldwide events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Mobile development, AI, Blockchain, AI/VR, Cybersecurity, Machine Learning and so much more!
          </p>
        </div>

        <div class="content-box">
          <div class="box-decorative graphic-2">
            <img src="@/assets/elements-expect-section/element2.svg" alt="Decorative" />
          </div>
          <h3 class="box-title">Panel Discussions</h3>
          <p class="box-text">
            Full-day panel-discussions, all centered on your favorite trending technologies.
          </p>
        </div>

        <div class="content-box">
          <div class="box-decorative graphic-3">
            <img src="@/assets/elements-expect-section/element3.svg" alt="Decorative" />
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
            <div class="tech-logo" title="Android">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Flutter">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Firebase">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Kotlin">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Google Cloud">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Google Maps">
              <img src="https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg" alt="Google Maps" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Google Play">
              <img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="TensorFlow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Google Analytics">
              <img src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" alt="Google Analytics" @error="handleImageError" />
            </div>
            <div class="tech-logo" title="Google Assistant">
              <img src="https://www.vectorlogo.zone/logos/google_assistant/google_assistant-icon.svg" alt="Google Assistant" @error="handleImageError" />
            </div>
          </div>
        </div>

        <div class="devfest-branding-box">
          <img src="@/assets/elements-expect-section/block-img.png" alt="DevFest Indore" class="block-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatToExpectSection',
  methods: {
    handleImageError(event) {
      // Fallback to a simple colored circle if image fails to load
      const fallbackColors = {
        'Android': '#3DDC84',
        'Flutter': '#02569B',
        'Firebase': '#FFCA28',
        'Kotlin': '#7F52FF',
        'Google Cloud': '#4285F4',
        'Google Maps': '#34A853',
        'Google Play': '#008FF7',
        'TensorFlow': '#FF6F00',
        'Google Analytics': '#FFC107',
        'Google Assistant': '#4285F4'
      };
      
      const alt = event.target.alt;
      const color = fallbackColors[alt] || '#CCCCCC';
      
      // Try alternative source first
      const alternativeSources = {
        'Android': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg',
        'Flutter': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.svg',
        'Firebase': 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
        'Kotlin': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
        'Google Cloud': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Google_Cloud_logo.svg',
        'Google Maps': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg',
        'Google Play': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
        'TensorFlow': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
        'Google Analytics': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Google_Analytics_logo.svg',
        'Google Assistant': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
      };
      
      // If this is the first error, try alternative source
      if (!event.target.dataset.retried) {
        event.target.dataset.retried = 'true';
        event.target.src = alternativeSources[alt] || event.target.src;
        return;
      }
      
      // If alternative also failed, show colored fallback
      event.target.style.display = 'none';
      const parent = event.target.parentElement;
      if (parent && !parent.querySelector('.fallback-text')) {
        parent.style.backgroundColor = color;
        parent.style.border = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'fallback-text';
        fallback.style.cssText = 'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px; font-weight: bold; text-align: center; padding: 5px;';
        fallback.textContent = alt.substring(0, 2);
        parent.appendChild(fallback);
      }
    }
  }
}
</script>

<style scoped>
.what-to-expect-section {
  width: 100%;
  padding: var(--space-4xl) var(--padding-section-x) var(--space-xl);
  display: flex;
  justify-content: center;
}

.what-to-expect-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-xl), 5vw, var(--space-3xl));
}

/* Top Section */
.top-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.main-title {
  font-size: var(--text-4xl);
  font-weight: bold;
  color: var(--color-text-body);
  margin: 0;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.tag {
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-xl);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-body);
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
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-body);
  margin: 0;
}

/* Content Boxes */
.content-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.content-box {
  background-color: var(--color-bg-lighter);
  border: 1px solid #000000;
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  position: relative;
  overflow: hidden;
}

.box-decorative {
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 1;
}

.box-decorative img {
  width: auto;
  height: 40px;
  display: block;
}

.box-title {
  font-size: var(--text-xl);
  font-weight: bold;
  color: var(--color-text-body);
  margin: 0 0 var(--space-md) 0;
}

.box-text {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-text-body);
  margin: 0;
}

/* Bottom Section */
.bottom-section {
  display: grid;
  grid-template-columns: 2.5fr 0.8fr;
  gap: var(--space-lg);
}

.stay-updated-box {
  background-color: var(--color-bg-lighter);
  border: 1px solid #000000;
  border-radius: var(--radius-md);
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  justify-content: space-between;
}

.stay-updated-title {
  font-size: var(--text-2xl);
  font-weight: bold;
  color: var(--color-text-body);
  margin: 0;
  line-height: 1.3;
}

.stay-updated-text {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-body);
  margin: 0;
}

.tech-logos {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: 0.5rem;
  justify-content: flex-start;
  overflow-x: auto;
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
  flex-shrink: 0;
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
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 200px;
  max-height: 300px;
}

.block-image {
  max-width: 95%;
  max-height: 95%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .what-to-expect-container {
    width: var(--content-width-tablet);
  }
  
  .content-boxes {
    grid-template-columns: 1fr;
  }

  .bottom-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .what-to-expect-section {
    padding: 3rem var(--padding-section-x) 1.5rem;
  }
  
  .what-to-expect-container {
    width: var(--content-width-mobile);
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
    padding: 2rem;
    gap: 1.5rem;
  }
  
  .stay-updated-title {
    font-size: 1.5rem;
  }
  
  .stay-updated-text {
    font-size: 0.95rem;
  }

  .devfest-branding-box {
    padding: 1rem;
    min-height: 200px;
  }

  .tech-logos {
    gap: 0.75rem;
    flex-wrap: wrap;
    overflow-x: visible;
  }

  .tech-logo {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .what-to-expect-section {
    padding: 2.5rem 0.75rem var(--padding-section-x);
  }
  
  .what-to-expect-container {
    width: var(--content-width-mobile);
  }
  
  .box-decorative img {
    height: 35px;
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

  .stay-updated-box {
    padding: 1.5rem;
    gap: 1.25rem;
  }
  
  .stay-updated-title {
    font-size: 1.35rem;
  }

  .stay-updated-text {
    font-size: 0.9rem;
  }

  .tech-logos {
    gap: 0.6rem;
    flex-wrap: wrap;
    overflow-x: visible;
  }

  .tech-logo {
    width: 45px;
    height: 45px;
  }
}
</style>

