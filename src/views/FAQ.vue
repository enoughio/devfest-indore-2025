<template>
  <section class="page-content">
    <div class="page-content-container">
      <div class="faq-header">
        <h1>Frequently asked questions</h1>
        <p>Need Answers? Everything you need to know</p>
        <hr />
      </div>

      <div class="faq-container">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
      >
        <!-- button ensures large tappable area on mobile -->
        <button
          type="button"
          class="faq-question"
          @click="toggle(index)"
          @touchstart.prevent="toggle(index)"
          :aria-expanded="openIndex === index"
        >
          <span class="q-text">{{ faq.question }}</span>
          <span class="arrow" :class="{ open: openIndex === index }" aria-hidden="true">⌄</span>
        </button>

        <!-- keep in DOM with v-show for reliable mobile behavior -->
        <div
          class="faq-answer"
          :class="{ open: openIndex === index }"
          v-show="openIndex === index"
          role="region"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQView",
  data() {
    return {
      openIndex: null,
      faqs: [
        { question: "What is DevFest?", answer: "DevFests are community-led developer events hosted by Google Developers Groups around the globe." },
        { question: "What are GDGs?", answer: "GDGs (Google Developer Groups) are local tech communities that organize meetups, talks, and hackathons." },
        { question: "Who can register for DevFest?", answer: "Anyone passionate about technology, coding, or community learning can register and attend DevFest." },
        { question: "Is it mandatory to register to participate in the event?", answer: "Yes, registration is required to get entry passes and receive updates about sessions and activities." },
        { question: "I’m a beginner in programming. Can I still register?", answer: "Absolutely — DevFest welcomes beginners, students and professionals." },
        { question: "What will attendees get by participating in the event?", answer: "Participants get learning, networking, hands-on sessions and community perks." },
        { question: "How can I become a member of GDG?", answer: "Join your nearest GDG chapter from the GDG website or attend a local meetup." },
        { question: "How can I communicate my queries?", answer: "Use the contact form on the website, email, or our social channels." }
      ]
    };
  },
  methods: {
    toggle(index) {
      // toggles the index (open/close). Works for click and touchstart
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
/* Base */
* { box-sizing: border-box; }
/* All layout handled by .page-content parent */

/* Header */
.faq-header {
  width: 100%;
  text-align: left;
  margin-bottom: 18px;
}
.faq-header h1 { font-size: var(--text-4xl); margin: 0 0 var(--space-sm); font-weight: 700; color: var(--color-text-primary); line-height: 1.15; }
.faq-header p { margin: 0 0 var(--space-md); color: var(--color-text-secondary); }
.faq-header hr { height: 2px; background: var(--color-border); border: none; border-radius: 2px; }

/* Container (single unified card) */
.faq-container {
  width: 100%;
  background: var(--color-bg-light);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

/* Item separator */
.faq-item { border-bottom: 1px solid #ddd; }
.faq-item:last-child { border-bottom: none; }

/* Question (button) */
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: var(--space-lg) var(--space-xl);
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.faq-question:active,
.faq-question:focus { outline: none; background: #ececec; }
.q-text { flex: 1; font-size: var(--text-base); font-weight: 600; color: var(--color-text-primary); }

/* Arrow */
.arrow { font-size: 1.4rem; color: var(--color-text-secondary); transition: transform .24s ease, color .24s ease; margin-left: var(--space-md); }
.arrow.open { transform: rotate(180deg); color: #f6b500; }

/* Answer panel - v-show + CSS open class for transition */
.faq-answer {
  background: #fff;
  padding: 0 var(--space-xl);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.33s ease, padding 0.28s ease, opacity 0.28s ease;
  opacity: 0;
}
.faq-answer.open {
  padding: var(--space-md) var(--space-xl);
  max-height: 600px;
  opacity: 1;
}
.faq-answer p { margin: 0; font-size: var(--text-base); line-height: 1.6; color: #333; }

/* Responsive tweaks */
@media (max-width: 900px) {
  .faq-header h1 { font-size: var(--text-3xl); }
  .faq-question { padding: 16px 18px; }
  .faq-answer.open { max-height: 700px; }
}

@media (max-width: 600px) {
  .faq-header h1 { font-size: var(--text-2xl); }
  .q-text { font-size: var(--text-sm); }
  .arrow { font-size: 1.2rem; }
  .faq-question { padding: 14px 14px; }
  .faq-answer.open { padding: 12px 14px; }
}

@media (max-width: 420px) {
  .faq-header h1 { font-size: var(--text-xl); }
  .q-text { font-size: var(--text-sm); }
  .faq-answer p { font-size: var(--text-sm); }
  .faq-answer.open { max-height: 900px; } /* allow taller answers on small screens */
}
</style>
