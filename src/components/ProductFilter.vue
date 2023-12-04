<template>
  <div class="product-filter">
    <h2>Filter Products</h2>
    <hr />
    <h4>By Category</h4>
    <div v-if="props.categories.length" class="category-list">
      <div class="input-group">
        <input
          type="checkbox"
          name="all"
          id="all"
          value="all"
          v-model="selectedCategories"
          @change="updateCategories"
        />
        <label for="all" class="checkbox-label">Select All</label>
      </div>
      <div
        v-for="category in props.categories"
        :key="category"
        class="input-group"
      >
        <input
          type="checkbox"
          :id="category"
          :value="category"
          v-model="selectedCategories"
          @change="updateCategories"
        />
        <label :for="category" class="checkbox-label">{{
          capitalize(category)
        }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { capitalize } from "@/utilities/formatters";
const props = defineProps<{
  categories: string[];
}>();

const emit = defineEmits(["update:selectedCategories"]);

const selectedCategories = ref<string[]>(["all"]);

const updateCategories = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.value === "all") {
    if (selectedCategories.value.includes("all")) {
      selectedCategories.value = ["all"];
    } else {
      selectedCategories.value = [];
    }
  } else {
    const allIndex = selectedCategories.value.indexOf("all");
    if (allIndex !== -1) {
      selectedCategories.value.splice(allIndex, 1);
    }
  }
  emit("update:selectedCategories", selectedCategories.value);
};
</script>

<style scoped lang="scss">
.product-filter {
  min-width: 250px;
}
.checkbox-label {
  margin-left: 0.5rem;
}
</style>
