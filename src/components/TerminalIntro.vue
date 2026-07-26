<template>
  <div class="terminal" role="img" :aria-label="fullLine">
    <span class="prompt">{{ eyebrow }}</span>
    <span class="typed">{{ displayed }}</span><span class="cursor" :class="{ blink: doneTyping }">_</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  eyebrow: string;
  fullLine: string;
}>();

const displayed = ref('');
const doneTyping = ref(false);

onMounted(() => {
  let i = 0;
  const speed = 45; // ms 每字符
  const timer = setInterval(() => {
    displayed.value = props.fullLine.slice(0, i + 1);
    i++;
    if (i >= props.fullLine.length) {
      clearInterval(timer);
      doneTyping.value = true;
    }
  }, speed);
});
</script>

<style scoped>
.terminal {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--color-signal);
  background: var(--color-ink);
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
.prompt {
  color: var(--color-accent-soft);
  margin-right: 0.5rem;
}
.cursor {
  opacity: 1;
}
.cursor.blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
