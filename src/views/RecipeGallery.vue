<template>
  <div class="space-y-12">
    <div class="gradient-bg rounded-3xl p-10 text-center text-white">
      <p class="mb-3 text-sm font-medium uppercase tracking-wide text-white/80">
        Labelled mock · T-284
      </p>
      <h1 class="mb-4 text-4xl font-bold md:text-5xl">
        <span class="text-gradient">食譜／原物料 Gallery</span>
      </h1>
      <p class="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
        Vue lab 靜態 mock JSON 展示。不是 dishes REST、不是活動站、也不是
        Module Federation。
      </p>
    </div>

    <section aria-labelledby="recipes-heading">
      <h2
        id="recipes-heading"
        class="mb-6 text-center text-3xl font-bold text-gradient"
      >
        Recipes
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="recipe in recipes"
          :key="recipe.id"
          class="card hover:scale-105"
        >
          <h3 class="mb-2 text-center text-2xl font-bold text-gray-800">
            {{ recipe.titleZh }}
          </h3>
          <p class="mb-1 text-center text-sm text-indigo-600">
            {{ recipe.title }}
          </p>
          <p class="mb-4 text-center leading-relaxed text-gray-600">
            {{ recipe.summaryZh }}
          </p>
          <p class="mb-4 text-center text-sm text-gray-500">
            ~{{ recipe.timeMinutes }} min
          </p>
          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="mat in materialsFor(recipe)"
              :key="mat.id"
              class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
            >
              {{ mat.nameZh }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="materials-heading" class="card">
      <h2
        id="materials-heading"
        class="mb-8 text-center text-3xl font-bold text-gradient"
      >
        Materials
      </h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="mat in materials"
          :key="mat.id"
          class="rounded-xl bg-gradient-to-br from-indigo-50 to-pink-50 p-4 text-center transition-shadow hover:shadow-lg"
        >
          <p class="font-semibold text-gray-800">{{ mat.nameZh }}</p>
          <p class="text-sm text-gray-500">{{ mat.name }}</p>
          <p class="mt-1 text-xs uppercase tracking-wide text-indigo-500">
            {{ mat.kind }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue"

import catalog from "../data/recipes.json"

export default {
  name: "RecipeGallery",
  setup() {
    const recipes = computed(() => catalog.recipes)
    const materials = computed(() => catalog.materials)
    const byId = computed(() =>
      Object.fromEntries(catalog.materials.map(m => [m.id, m]))
    )

    const materialsFor = recipe =>
      (recipe.materialIds || [])
        .map(id => byId.value[id])
        .filter(Boolean)

    return {
      recipes,
      materials,
      materialsFor,
    }
  },
}
</script>
