<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{ name: string; src: string; href: string }>();

const is_error_active = ref(false);
</script>

<template>
    <RouterLink class="card" :to="props.href">
        <img v-if="!is_error_active" :src="props.src" class="profile_picture" :alt="props.name" @error="is_error_active = true" />
        <img v-else src="/media/coming_soon.png" class="profile_picture" alt="Coming Soon" />
        <h1>{{ props.name }}</h1>
        <div>
            <slot></slot>
        </div>
    </RouterLink>
</template>

<style scoped>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    width: 220px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: var(--gryphon-white);
    color: var(--gryphon-light-black);
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}

.profile_picture {
    width: 220px;
    height: 220px;
    image-rendering: crisp-edges;
    /* image-rendering: -webkit-optimize-contrast; */
    object-fit: cover;
    border-radius: 10px;
    padding-bottom: 5px;
}

h1 {
    margin: 0.1em;
    font-size: 1.3em;
}

h2 {
    margin: 0.1em;
    font-size: 1.1em;
}
</style>
