<template>
        <div class="flex items-center">
                <router-link  to="/">
                        <img src="./logo2.png" class="object-cover h-16 w-70">
                </router-link>
                <ul class="flex justify-center align-center">
                        <li class="text-white ml-5">
                                <router-link to="/" >  Movies</router-link>
                              
                        </li>
                         
                        <li  class="text-white  ml-5" @click="this.$router.push({name:'actors'})">
                                Actors
                        </li>

                             <li  class="text-white  ml-5 " @click="this.$router.push({name:'profile'})">
                                Profile
                        </li>

                   

                </ul>
        </div>
</template>