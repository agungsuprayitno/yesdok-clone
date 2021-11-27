<template>
    <div class="container-fluid px-0 bg-light">
        <TheHeader />
         <slot />
        <TheFooter />
    </div>
</template>
<script lang="ts">
import TheHeader from './../components/TheHeader.vue'
import TheFooter from './../components/TheFooter.vue'
export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>