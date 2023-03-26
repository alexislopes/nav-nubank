<template>
  <div class="nav__nb__container">
      <Transactions class="nav__nb__item" @click="setPage('transactions')" :class="{ 'active': isActive('transactions') }" />
      <DollarSign class="nav__nb__item" @click="setPage('investments')" :class="{ 'active': isActive('investments') }" />
      <Bag class="nav__nb__item" @click="setPage('store')" :class="{ 'active': isActive('store') }" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bag from "./icons/Bag.vue";
import DollarSign from './icons/DollarSign.vue';
import Transactions from './icons/Transactions.vue';

const page = ref('transactions');

function isActive(value) {
  return value === page.value;
}

function setPage(value) {
  page.value = value
}
</script>

<style>
.nav__nb__container {
  @apply flex p-1 rounded-full backdrop-blur-sm bg-white shadow-md
}

.nav__nb__item {
  @apply p-4 cursor-pointer
}

.nav__nb__item.active {
  @apply bg-surface rounded-full
}

.nav__nb__item.active svg {
  @apply text-primary animate-[pulse_0.3s_ease-in]
}

.nav__nb__item svg {
  @apply text-gray
}
</style>