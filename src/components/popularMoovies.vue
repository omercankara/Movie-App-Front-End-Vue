<template>
        <div class="container">
                <h2 class=" uppercase  text-lg  font-semibold mt-5 text-yellow-500">Popular Movies</h2>
        </div>
        <div class="grid grid-cols-1  sm:grid-cols-5 md:grid-cols-3  lg:grid-cols-5 gap-10">
                <movieItem v-for="movie in movies" :key="movie.id" :movie="movie" :genres="genres" />
        </div>
</template>


<script>
import movieItem from "./items/movieItem.vue"
export default {
        components: {
                movieItem
        },
        data() {
                return {
                        movies: [],
                        genres: []
                }
        },
        async mounted() {
                this.fetchGenres()
                try {
                        const response = await this.$appAxios.get("movie/popular")
                        this.movies = response.data.results
                        //   console.log(this.movies)
                } catch (error) {
                        console.log(error)
                }
        },
        methods: {
                async fetchGenres() {
                        try {
                                const response = await this.$appAxios.get("/genre/movie/list")
                                this.genres = response.data.genres
                                // console.log(this.genres)
                                //console.log(this.genres)
                        } catch (error) {
                                console.log(error)
                        }
                }
        }

}
</script>