 <template>
  <section class="page-content">
    <div class="page-content-container">
      <h2 class="title">Organizing Team</h2>
      <p class="subtitle">
        Our mission is to equip our community members with practical skills, enabling them to
        communicate their insights and drive innovative solutions effectively. Whatever your
        challenge, these leaders on the front line of transformation, innovation, and exploration
        helped solve it with you.
      </p>

      <!-- Team Grid -->
      <div class="team-grid">
        <div
          v-for="member in team"
          :key="member.name"
          class="member no-select"
          @click="openModalHandler(member)"
        >
          <img :src="member.image" :alt="member.name" class="photo" />
          <h3 class="name">{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>

    <!-- Popup Modal -->
    <transition name="fade">
      <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-card">
          <img :src="selected.image" :alt="selected.name" class="modal-photo" />
          <div class="modal-content">
            <h2 class="modal-name">{{ selected.name }}</h2>
            <div class="modal-role">{{ selected.role }}</div>
            <div class="modal-desc">{{ selected.description }}</div>

            <!-- Social Icons -->
            <div class="modal-social">
              <!-- LinkedIn -->
              <a v-if="selected.linkedin" :href="selected.linkedin" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#202124"
                    d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                  />
                </svg>
              </a>

              <!-- Twitter -->
              <a v-if="selected.twitter" :href="selected.twitter" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 384">
                  <path
                    fill="#202124"
                    d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <button class="modal-close" @click="closeModal">CLOSE</button>
        </div>
      </div>
    </transition>
    </div>
  </section>
</template>

 <script setup>
import { ref, onMounted } from "vue";
import teamData from "@/data/teamData.js"; // ✅ relative import

const modalOpen = ref(false);
const selected = ref({});
const team = ref(teamData); // ✅ imported data

function openModalHandler(member) {
  selected.value = member;
  modalOpen.value = true;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOpen.value = false;
  document.body.style.overflow = "";
}

onMounted(() => {
  document.querySelectorAll(".member").forEach((el) => {
    el.addEventListener("touchstart", () => {
      el.click();
    });
  });
});
</script>


<style scoped>
* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.title {
  font-size: var(--text-4xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
  text-align: left;
}

.subtitle {
  font-size: var(--text-base);
  color: var(--color-text-body);
  line-height: 1.55;
  max-width: 1150px;
  margin-bottom: var(--space-2xl);
  text-align: left;
}

/* Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3xl) var(--space-2xl);
  justify-items: center;
  margin-top: var(--space-md);
}

.member {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.member:active {
  transform: scale(0.97);
}

.photo {
  width: 220px;
  height: 220px;
  border-radius: var(--radius-full);
  object-fit: cover;
  margin-bottom: var(--space-md);
  background: var(--color-bg-light);
}
.name {
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-xs);
  }
  .role {
    font-size: var(--text-xs);
    color: var(--color-text-secondary);
    font-weight: 400;
  }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(35, 38, 40, 0.68);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.modal-card {
  background: #fff;
  border: 2px solid #000;
  border-radius: var(--radius-2xl);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-start;
  max-width: 900px;
  width: 90%;
  padding: var(--space-3xl);
  position: relative;
}

.modal-photo {
  width: 210px;
  height: 210px;
  border-radius: var(--radius-full);
  object-fit: cover;
  margin-right: var(--space-2xl);
}

.modal-content {
  flex: 1;
  text-align: left;
}

.modal-name {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.modal-role {
  font-size: var(--text-sm);
  color: #444;
  margin-bottom: var(--space-md);
}

.modal-desc {
  font-size: var(--text-base);
  color: var(--color-text-primary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

/*  Popup animation */
.fade-enter-active,
.fade-leave-active {
  transition: none !important;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 1 !important;
}

/* Overlay stays neutral */
.modal-overlay {
  background: rgba(35, 38, 40, 0.68);
  backdrop-filter: blur(5px);
  transition: background 0.3s ease;
}

/* Modal default: invisible transform (not opacity) */
.modal-card {
  opacity: 1;
  transform: scale(0.96) translateY(12px);
  transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  backface-visibility: hidden;
}

/* When visible: softly open */
.modal-overlay[style*="display: flex"] .modal-card {
  transform: scale(1) translateY(0);
}

/* Close button still normal */
.modal-close {
  transition: opacity 0.3s ease;
}

/* Prevent overlay flash */
.modal-overlay {
  opacity: 1;
}

/* Extra polish for mobile smoothness */
@media (max-width: 600px) {
  .modal-card {
    transform: scale(0.97) translateY(8px);
    transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  }
}

/* Social icons */
.modal-social {
  display: flex;
  gap: 18px;
}

.modal-social svg {
  width: 18px;
  height: 26px;
  fill: #202124;
  transition: 0.3s ease;
}

.modal-social a:hover svg {
  fill: #0a66c2;
}

.modal-close {
  position: absolute;
  right: 32px;
  bottom: 22px;
  background: none;
  border: none;
  font-size: 15px;
  color: #444;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1.2px;
}

/* Responsive */
@media (max-width: 1000px) {
  .modal-card {
    max-width: 96vw;
    min-width: 96vw;
    padding: 22px 10vw 18px 10vw;
  }
  .modal-photo {
    width: 150px;
    height: 150px;
    margin-right: 32px;
  }
}

@media (max-width: 600px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 14px;
  }
  .photo {
    width: 110px;
    height: 110px;
  }
  .name {
    font-size: var(--text-sm);
    font-weight: 700;
    color: #202124;
    margin-bottom: 2px;
  }
  .role {
    font-size: var(--text-xs);
    color: #5f6368;
    font-weight: 400;
  }
  .modal-card {
    flex-direction: column;
    align-items: center;
    padding: 22px 5vw 20px 5vw;
    border-radius: 22px;
  }
  .modal-photo {
    width: 110px;
    height: 110px;
    margin: 0 0 13px 0;
  }
  .modal-content {
    text-align: center;
  }
  .modal-name {
    font-size: var(--text-xl);
  }
  .modal-role {
    font-size: var(--text-xs);
  }
  .modal-desc {
    font-size: var(--text-xs);
  }
  .modal-close {
    position: static;
    margin: 20px auto 0 auto;
  }
  .subtitle {
    max-width: 100%;
    font-size: var(--text-sm);
    line-height: 1.7;
  }
  .title {
    font-size: var(--text-3xl);
  }

  /* ✅ Social icons centered only in mobile */
  .modal-social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    width: 100%;
    margin-top: 16px;
  }
}
</style>
