<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Logo Section -->
        <div class="footer-logo-section">
          <router-link to="/" class="footer-logo-link">
            <img src="@/assets/devfest-indore-header-logo.png" alt="GDG Indore" class="footer-logo-image" />
          </router-link>
          <span class="footer-location-tag">Indore</span>
          <p class="footer-tagline">Google Developer Group</p>
        </div>

        <!-- Links Section -->
        <div class="footer-links">
          <div class="links-column">
            <h4 class="links-title">Resources</h4>
            <ul class="links-list">
              <li>
                <a href="#" class="footer-link">Code of Conduct</a>
              </li>
              <li>
                <a href="#" class="footer-link">Community Guidelines</a>
              </li>
              <li>
                <router-link to="/faq" class="footer-link">FAQs</router-link>
              </li>
            </ul>
          </div>
          <div class="links-column">
            <h4 class="links-title">About</h4>
            <ul class="links-list">
              <li>
                <a href="https://developers.google.com/community/gdg" target="_blank" class="footer-link">About GDG Program</a>
              </li>
              <li>
                <a href="https://www.womentechmakers.com/" target="_blank" class="footer-link">About WTM Program</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="footer-social">
          <h4 class="links-title">Follow Us</h4>
          <div class="social-icons">
            <a href="#" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" target="_blank" class="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" target="_blank" class="social-link" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="mailto:gdgindore@gmail.com" class="social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} GDG Indore. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #F0F0F0;
  border-top: 1px solid #D0D0D0;
  margin-top: auto;
  padding: 3rem 1rem 1.5rem;
  display: flex;
  justify-content: center;
}

.footer-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo-link {
  display: inline-block;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-logo-link:hover {
  opacity: 0.8;
}

.footer-logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

.footer-location-tag {
  background-color: #ffffff;
  color: #333333;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  border: 1px solid #000000;
  font-size: 0.75rem;
  font-weight: normal;
  font-family: var(--font-sans);
  white-space: nowrap;
  display: inline-block;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #666666;
  font-family: var(--font-sans);
  margin: 0;
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 3rem;
  justify-content: center;
}

.links-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.links-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333333;
  margin: 0 0 0.5rem 0;
  font-family: var(--font-sans);
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #666666;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: var(--font-sans);
  transition: color 0.2s;
}

.footer-link:hover {
  color: #333333;
}

.footer-social {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
}

.social-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  color: #666666;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  color: #333333;
  transform: translateY(-2px);
}

.social-link svg {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  border-top: 1px solid #D0D0D0;
  padding-top: 1.5rem;
  text-align: center;
}

.copyright {
  font-size: 0.875rem;
  color: #666666;
  font-family: var(--font-sans);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-container {
    width: var(--content-width-tablet);
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-social {
    align-items: flex-start;
    grid-column: 1 / -1;
  }
  
  .footer-links {
    justify-content: flex-start;
  }
  
  .footer-logo-image {
    height: 35px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    width: var(--content-width-mobile);
  }
  
  .footer {
    padding: 2rem 1rem 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-social {
    align-items: flex-start;
  }
  
  .social-icons {
    flex-wrap: wrap;
  }
  
  .footer-logo-image {
    height: 32px;
  }
  
  .footer-location-tag {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
  }
}
</style>

