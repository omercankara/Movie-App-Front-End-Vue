<template>
    <div>
        <div>
            <router-link :to="`/actor/${this.actor.id}`">
            <img :src="profileImage" alt="">
            <h3 class="text-white">{{actor.name}}</h3>
            <p class="text-gray-500"> {{knownFor}}</p>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        actor:{
            required:true
        }
    },  


    computed:{
        profileImage(){
            return("https://image.tmdb.org/t/p/w235_and_h235_face/" + this.actor.profile_path) 
        },
        knownFor(){
            let knownStr = ""
            for( let i; i < this.actor.known_for.length - 1; i++){
                knownStr +=this.actor.knownFor[i].title
            }   
            return knownStr
        }
    }
    
}
</script>