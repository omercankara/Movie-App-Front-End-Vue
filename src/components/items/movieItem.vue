<template>
        <div >
        <router-link :to="`/movie/${movie.id}`">  
          <img  :src="posterPath"/>
                 </router-link> 
                <h3 class="text-white">{{movie.title}}</h3>
              <div class="text-white flex">
                  <span><i class='bx bxs-star mr-1' style='color:#fbd623'  ></i>  {{movie.vote_average * 10}} |{{movie.release_date}}</span>  
                  
              </div>
              <span class="text-sm text-gray-500"> <span v-for="(genre,index) in  movie.genre_ids" :key="genre">{{   genreTypeName(genre,index) }}</span>  </span>
        </div>
     
</template>

<script>
export default {
        props:{
                movie:{
                        required:true
                },
                genres:{
                        required:true
                }
        },
        computed:{
                 posterPath(){ 
                        return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path
                } 
        },
        methods:{
                genreTypeName(genraId,index){
                for (const item  of this.genres){
                       if(item.id == genraId){
                          if(this.movie.genre_ids.length - 1  == index){
                                 return item.name
                          }else{
                                return item.name + ","
                         }
                              
                       }
                }
    
                     
                }
        }
  
}
</script>