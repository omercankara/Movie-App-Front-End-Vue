<template>
        <div class="container mx-auto  border-b border-gray-600 px-4 py-4">
                <h2 class="text-4xl text-gray-500 font-semibold mb-5">İmages</h2>

                <div  class="grid grid-cols-1 sm: grid-cols-3 md:grid-cols-5  lg:grid-cols-3     ">
                        <div  v-for="(image, index) in images" :key="index" class="mr-2 mt-2">
                                <img @click="openModel(image)" class="hover:opacity-75 transition easy-in-out duration-150"
                                        :src="movieImage(image)">
                        </div>
                </div>
        </div>


</template>


<script>
export default {
        props: {
                images: {
                        required: true
                }
        },
        
        methods: {
                movieImage(image) {
                        if (image.file_path) {
                                return "https://image.tmdb.org/t/p/w500" + image.file_path;
                        } else {
                                return "https://via.placeholder.com/300x450"
                        }
                },

                
                openModel(image){
                      
                        let imageFullPath = ""
                        if(image.file_path){
                                imageFullPath = "https://image.tmdb.org/t/p/original" + image.file_path
                        }else{
                                imageFullPath =  "https://via.placeholder.com/300x450"
                        }
                        this.$emit("on-image-click",imageFullPath) 
                     
                },
               
        },
       


}
</script>

