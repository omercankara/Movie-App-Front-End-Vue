<template>
        <div class="container mx-auto  border-b border-gray-600 px-4 py-4">
                <h2 class="text-4xl text-gray-500 font-semibold mb-5">Cast</h2>

                <div class="grid grid-cols-1 sm: grid-cols-3 md:grid-cols-5  lg:grid-cols-8     ">
                        <div class="mr-2" v-for=" cast in casts" :key="cast.id">
                                <img class="hover:opacity-75 transition easy-in-out duration-150"
                                        :src="castProfileImage(cast)">
                                <span class="text-gray-300">{{ cast.name }}</span>
                        </div>
                        <P></P>
                </div>
        </div>
</template>



<script>
export default {
        props: {
                casts: {
                        required: true
                }
        },

        mounted() {

        },

        methods: {
                castProfileImage(cast) {
                        if (cast.profile_path) {
                                return "https://image.tmdb.org/t/p/w500" + cast.profile_path
                        } else {
                                return "https://via.placeholder.com/300x450"
                        }
                }
        }

}
</script>
