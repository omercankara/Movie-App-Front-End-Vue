<template>
        <div class="container mx-auto ">
                <popularMovies />
               <!--   <upcomingMoovies/> -->
        </div>
</template>


<script>

import popularMovies from "./popularMoovies.vue";/* 
 import upcomingMoovies from "./upcomingMovies.vue"  */

export default {
        components: {

                popularMovies,
                /*  upcomingMoovies  */
        }
};
</script>