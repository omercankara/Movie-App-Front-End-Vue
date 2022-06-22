<template>
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-yellow-500 text-lg font-semibold">
            Popular Actors
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <actorItem v-for="actor in actors" :key="actor.id" :actor="actor"/>
        </div>
        <div>
            <div class="spinner"></div>
        </div>
    </div>
</template>


<script>
import actorItem from "../items/actorItem.vue"
export default {
    components: {
        actorItem
    },

    mounted() {
        this.fetchActors()
    },
    data() {
        return {
            actors: []
        }
    },
    methods: {
        async fetchActors(page) {
            try {
                const response = await this.$appAxios.get("https://api.themoviedb.org/3/person/popular?page=" + page)
                this.actors = response.data.results
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>