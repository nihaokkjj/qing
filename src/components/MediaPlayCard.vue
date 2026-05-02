<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="media-play-card">
    <div class="media-play-card-media">
      <img :src="image" :alt="alt || title" class="media-play-card-image" />
      <span class="media-play-card-icon" aria-hidden="true"></span>
    </div>
    <p class="media-play-card-title">{{ title }}</p>
  </article>
</template>

<style scoped>
.media-play-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border: 1px solid rgba(164, 67, 35, 0.12);
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(251, 245, 237, 0.94));
  box-shadow: var(--shadow-sm);
}

.media-play-card-media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
  padding: 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  cursor: pointer;
}

.media-play-card-image {
  display: block;
  width: 100%;
  height: 210px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.96);
}

.media-play-card-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  padding-left: 4px;
  border-radius: 999px;
  background: rgba(255, 246, 232, 0.94);
  box-shadow: 0 16px 28px rgba(63, 24, 12, 0.22);
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
}

.media-play-card-icon::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 18px solid #9f351c;
}

.media-play-card-media:hover .media-play-card-icon {
  transform: translate(-50%, -50%) scale(1.05);
}

.media-play-card-title {
  color: var(--text-strong);
  font-size: 17px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
}

@media (max-width: 640px) {
  .media-play-card {
    padding: 14px;
    border-radius: 16px;
  }

  .media-play-card-media {
    padding: 10px;
    border-radius: 14px;
  }

  .media-play-card-image {
    height: 190px;
  }

  .media-play-card-icon {
    width: 56px;
    height: 56px;
  }

  .media-play-card-icon::before {
    border-top-width: 10px;
    border-bottom-width: 10px;
    border-left-width: 16px;
  }

  .media-play-card-title {
    font-size: 16px;
  }
}
</style>
