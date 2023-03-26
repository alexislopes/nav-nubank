<template>
  <div class="nav__nb__container">
    <div class="nav__nb__item" @click="page = 'transactions'" :class="{'active': page === 'transactions'}">
      <Transactions class="text-gray" />
    </div>
    <div class="nav__nb__item" @click="page = 'investments'" :class="{'active': page === 'investments'}">
      <DollarSign class="text-gray" />
    </div>
    <div class="nav__nb__item" @click="page = 'store'" :class="{'active': page === 'store'}">
      <Bag class="text-gray" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bag from "./icons/Bag.vue";
import DollarSign from './icons/DollarSign.vue';
import Transactions from './icons/Transactions.vue';

const page = ref('transactions')
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
  @apply text-primary
}

.nav__nb__item.active svg { 
  @apply animate-[pulse_0.3s_ease-in]
}
</style>