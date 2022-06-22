<template>

    <div id="example">
        <carousel-3d :controls-visible="true" :clickable="false">
            <Slide v-for="(slide, i) in this.upcoming" :key="i">
                <figure>
                    <img src="https://placehold.it/360x270">
                    <figcaption>
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!

                    </figcaption>
                </figure>
            </Slide>
        </carousel-3d>
    </div>



</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';

export default {
       components: {
        Carousel3d,
        Slide
    },
    data(){
        return{
            upcoming:[]
        }
    },
 
    mounted(){
        this.fetchUpComingMovies()
    },
    methods:{
        async fetchUpComingMovies(){
         const response = await this.$appAxios.get("https://api.themoviedb.org/3/movie/upcoming");
         this.upcoming = response.data.results.slice(1,6)
        }
    }
}
</script>