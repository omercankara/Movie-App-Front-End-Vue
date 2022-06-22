<template>
    <div class="container mx-auto py-16 px-4 flex">
        <div class="flex-none">
            <img :src="'https://image.tmdb.org/t/p/w300/' + this.actor.profile_path" alt="">
            <ul class="flex items-center mt-4">
                <li>
                    <a href="'https://facebook.com/'" title="Facebook">
                        <i class='bx bxl-facebook-square text-white' style="font-size:25px;"></i>
                    </a>
                </li>

                <li class="ml-6">
                    <a href="'https://facebook.com/'" title="Facebook">
                        <i class='bx bxl-instagram text-white' style="font-size:25px;"></i>
                    </a>
                </li>

                <li class="ml-6">
                    <a href="'https://facebook.com/'" title="Facebook">
                        <i class='bx bxl-twitter text-white' style="font-size:25px;"></i>
                    </a>
                </li>

                <li class="ml-6">
                    <a href="'https://facebook.com/'" title="Facebook">
                        <i class='bx bx-globe text-white' style="font-size:25px;"></i>
                    </a>
                </li>


            </ul>
        </div>

        <div class="ml-20">
            <h2 class=" text-4xl font-semibold text-white">
                {{ this.actor.name }}
            </h2>
            <span class="text-white">1998-12-36</span>

            <p class="text-gray-300 mt-8">{{ this.actor.biography }}</p>
            <h4 class="mt-12 font-semibold text-white">Known For</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                <div :key="movie.id" v-for="movie in this.knownFor">
                    <router-link :to="`/movie/${movie.id}`"
                        class="text-gray-400 text-sm leading-normal hover:text-white">
                        <img :src="movieImage(movie)" class="hover:opacity-75 transition ease-in-out duration-150"
                            alt="">
                    </router-link>
                </div>

            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialDetails: [],
            actor: {

            },
            knownFor: []
        }
    },
    mounted() {
        this.fetchActor(this.$route.params.id)
        this.fetchCredits(this.$route.params.id)
    },
    methods: {
        async fetchActor(actorId) {
            const response = await this.$appAxios.get("https://api.themoviedb.org/3/person/" + actorId)
            this.actor = response.data

        },
        async fetchCredits(actorId) {
            const response = await this.$appAxios.get("https://api.themoviedb.org/3/person/" + actorId + "/combined_credits")

            this.knownFor = response.data.cast.filter((x)=> x.media_type=='movie').slice(1,6)
        },
        movieImage(ımage) {
            const posterPath = ımage.poster_path
            if (!posterPath) {
                return "https://via.placeholder.com/185x278"

            }
            return "https://image.tmdb.org/t/p/w185" + posterPath

        }
    }
}
</script>