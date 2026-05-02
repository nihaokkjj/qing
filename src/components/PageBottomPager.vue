<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 16,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
})

const pageCount = computed(() => {
  const safePageSize = Math.max(1, props.pageSize)
  const derivedPageCount = Math.max(1, Math.ceil(props.total / safePageSize))
  const explicitPageCount = Math.floor(props.pageCount)
  return explicitPageCount > 0 ? explicitPageCount : derivedPageCount
})

const activePage = computed(() => {
  return Math.min(Math.max(1, props.currentPage), pageCount.value)
})

const visiblePages = computed(() => {
  const count = pageCount.value
  const current = activePage.value

  if (count <= 7) {
    return Array.from({ length: count }, (_value, index) => index + 1)
  }

  const pages = [1]
  const left = Math.max(2, current - 2)
  const right = Math.min(count - 1, current + 2)

  if (left > 2) {
    pages.push('…')
  }

  for (let page = left; page <= right; page += 1) {
    pages.push(page)
  }

  if (right < count - 1) {
    pages.push('…')
  }

  pages.push(count)
  return pages
})
</script>

<template>
  <nav class="page-bottom-pager" aria-label="分页信息">
    <div class="page-bottom-pager-summary">
      <span class="page-bottom-pager-total">共 {{ total }} 条</span>
      <span class="page-bottom-pager-size" aria-hidden="true">
        <span class="page-bottom-pager-size-value">{{ pageSize }}</span>
        <span class="page-bottom-pager-size-caret"></span>
      </span>
    </div>

    <div class="page-bottom-pager-nav" aria-hidden="true">
      <span class="page-bottom-pager-arrow">‹</span>

      <template v-for="(page, index) in visiblePages" :key="`${page}-${index}`">
        <span v-if="page === '…'" class="page-bottom-pager-ellipsis">…</span>
        <span
          v-else
          :class="['page-bottom-pager-page', { 'is-active': page === activePage }]"
        >
          {{ page }}
        </span>
      </template>

      <span class="page-bottom-pager-arrow">›</span>
    </div>

    <div class="page-bottom-pager-jump">
      <span class="page-bottom-pager-jump-label">前往</span>
      <span class="page-bottom-pager-jump-input">{{ activePage }}</span>
      <span class="page-bottom-pager-jump-unit">页</span>
    </div>
  </nav>
</template>

<style scoped>
.page-bottom-pager {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px 18px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.page-bottom-pager-summary,
.page-bottom-pager-jump {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}

.page-bottom-pager-total,
.page-bottom-pager-jump-label,
.page-bottom-pager-jump-unit {
  color: var(--text);
  font-size: 14px;
}

.page-bottom-pager-size,
.page-bottom-pager-jump-input,
.page-bottom-pager-page,
.page-bottom-pager-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  border: 1px solid rgba(164, 67, 35, 0.12);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.96);
  color: var(--text-strong);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

.page-bottom-pager-size {
  width: 74px;
  justify-content: space-between;
  padding: 0 10px;
}

.page-bottom-pager-size-caret {
  width: 0;
  height: 0;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-top: 5px solid rgba(126, 74, 40, 0.72);
}

.page-bottom-pager-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  min-width: 0;
}

.page-bottom-pager-arrow {
  width: 34px;
  color: rgba(126, 74, 40, 0.8);
}

.page-bottom-pager-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  color: var(--muted);
  font-size: 14px;
}

.page-bottom-pager-page.is-active {
  color: #fff;
  border-color: transparent;
  background: linear-gradient(135deg, var(--orange), var(--gold));
  box-shadow: 0 10px 18px rgba(188, 60, 34, 0.18);
}

.page-bottom-pager-jump-input {
  width: 48px;
  padding: 0 10px;
  justify-content: center;
}

@media (max-width: 860px) {
  .page-bottom-pager {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .page-bottom-pager-summary,
  .page-bottom-pager-jump {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .page-bottom-pager {
    padding: 12px 12px;
    border-radius: 14px;
  }

  .page-bottom-pager-total,
  .page-bottom-pager-jump-label,
  .page-bottom-pager-jump-unit,
  .page-bottom-pager-size,
  .page-bottom-pager-jump-input,
  .page-bottom-pager-page,
  .page-bottom-pager-arrow,
  .page-bottom-pager-ellipsis {
    font-size: 13px;
  }

  .page-bottom-pager-size {
    width: 68px;
  }
}
</style>
