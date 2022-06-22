<template>
        <div>
                <div class="container mx-auto mt-20 flex border-b border-gray-600 pb-2">
                        <img :src="posterPath" class="w-64">
                        <div class="ml-24">
                                <h1 class="text-4xl font-semibold text-white">{{ this.movie.title }}</h1>
                                <span class="text-gray-500 text-sm flex">
                                        <i class='bx bxs-star mr-1' style='color:#fbd623'></i>{{ this.movie.vote_average
                                                        * 10
                                        }} |{{ this.movie.release_date }}


                                        <span class=" ml-2" v-for="(item, index) in movie.genres" :key="index">
                                                {{ item.name }},
                                                <span v-if="(movie.genres.length - 1 != index)"></span>
                                        </span>
                                </span>
                                <p class="mt-5 text-white">{{ this.movie.overview }}.</p>

                                <div class="mt-5">
                                        <span>Featured Cast</span>
                                        <div class="flex">
                                                <div v-for="(crew, index) in  crew" :key="index">
                                                        <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                                                                <span class="text-white">{{ crew.name }}</span>
                                                                <span class="text-gray-500">{{ crew.job }}</span>
                                                        </div>
                                                </div>
                                                <div></div>
                                        </div>
                                </div>

                                <div class="mt-5">
                                        <a @click.prevent="openYoutubeModel"
                                                class="rounded bg-yellow-500 px-5 py-3 inline-flex items-center text-black">
                                                <i class='bx bx-play-circle' style='color:#ffffff; font-size:20px;'></i>
                                                <span class="ml-3">Play Trailer</span>
                                        </a>
                                        <a href="" class="rounded bg-yellow-500 px-5 py-3 ml-5">
                                                <i class='bx bx-heart' style='color:#ffffff; font-size:20px;'></i>
                                                <span class="ml-3">Favourite</span>
                                        </a>
                                </div>


                        </div>
                </div>

                <Cast :casts="(casts)" />



                <images :images="(images)" @on-image-click="showImageModel($event)" />



                <modal :value="modalOpen" @newitem="modalOpen = $event" :mediaUrl="mediaURL" :isVideo="isVideo" />
        </div>
</template>     





<script>
import Cast from "./castComp.vue"
import images from "./imagesComp.vue"
import modal from "../Modals/modalView.vue"
export default {
        components: {
                Cast,
                images,
                modal
        },
        props: {

        },


        data() {
                return {
                        movie: [],
                        videos: [],
                        casts: [],
                        images: [],
                        crew: [],
                        modalOpen: false,
                        isVideo: false,
                        mediaURL: ""

                }
        },
        mounted() {
                this.fetchMovie(this.$route.params.id)
                //  console.log(this.images)
        },
        watch:{
                "$route.params.id":{
                        handler(){
                                this.fetchMovie(this.$route.params.id)
                        }
                }      
        },
        created() {

        },

        methods: {
                async fetchMovie(movieId) {
                        const response = await this.$appAxios.get("/movie/" + movieId + "?append_to_response=credits,videos,images")
                        this.movie = response.data
                        this.casts = response.data.credits.cast
                        this.images = response.data.images.backdrops
                        this.crew = response.data.credits.crew
                        this.videos = response.data.videos.results[0].key
                        //console.log(this.movie)
                        //console.log(this.images)
                        console.log(this.videos)
                },

                openImageModal() {
                        this.isVideo = true
                        this.modalOpen = true
                },
                openYoutubeModel() {
                        this.mediaURL = this.youtubeVideo()
                        this.isVideo = true
                        this.modalOpen = true
                },
                youtubeVideo() {
                        if (!this.videos) return
                        return ("https://www.youtube.com/embed/" + this.videos)

                },
                showImageModel(imageFullPath) {
                        // alert(imageFullPath)
                        this.mediaURL = imageFullPath
                        this.isVideo = false
                        this.modalOpen = true
                },

        },
        computed: {
                posterPath() {
                        return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path
                },

        },
}
</script>