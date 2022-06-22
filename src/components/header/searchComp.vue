<template>
        <div class="mt-5 flex relative">
                <input ref="searchBox" type="text" @input="deBounceSearch" v-model="searchTerm"
                        @focus="handleFocus"
                        class="rounded-full bg-gray-600 px-7 w-50 mb-1 mr-3  focus:outline-none"
                        placeholder="Search film">

                <div class="absolute top-0 ">
                        <i class='bx bx-search-alt-2 mt-3 ml-2 p'></i>
                </div>

                <div class="absolute mt-10 ml-2 rounded bg-gray-600 w-60 mt-5">
                        <ul class="mt-3" v-if="showSearchResult">
                                <li :key="index" v-for="(movie, index) in searchResult"
                                        >
                                       

                             
                                <router-link :to="`/movie/${movie.id}`" @click="showSearchResult = false" class="flex items-center border-b border-gray-500 p-1">
                                         <img :src="posterPath(movie.poster_path)" alt="" class="h-10  rounded-full">
                                        <span class="text-white ml-2">{{ movie.title }}</span>
                                </router-link>
                                   </li>
                        </ul>
                        <ul class="px-3" v-else>
                                <li v-if="noResultFound">{{ searchTerm }} Bulunamadı</li>
                        </ul>
                </div>

        </div>

</template>

<script>
export default {
        data() {
                return {
                        searchResult: [],

                        searchTerm: "",
                        showSearchResult: false
                }
        },
        mounted() {
                this.keyboardEvents()
        },
        methods: {
                deBounceSearch(event) {
                        clearTimeout(this.debounce)
                        this.debounce = setTimeout(() => {
                                if (event.target.value.length > 2) {
                                        this.fetchSearch(event.target.value)
                                }
                        }, 100)

                },
                async fetchSearch(term) {
                        try {
                                const response = await this.$appAxios.get("/search/movie?query=" + term)
                                this.searchResult = response.data.results
                                this.showSearchResult = response.data.results ? true : false
                        } catch (error) {
                                console.log(error)
                        }
                },
                keyboardEvents() {
                        window.addEventListener("click",()=> {
                                this.showSearchResult = false
                        })
                        window.addEventListener("keypress", (e) => {
                                let windowObj = this
                                if (e.keyCode == "47") {
                                        e.preventDefault()
                                        windowObj.$refs.searhBox.focus()
                                }

                        });


                        window.addEventListener("keydown", (e) => {
                                if (e.key == "Escape") {
                                        this.showSearchResult = false
                                }
                        })
                },
                handleFocus(){
                  if(this.searchTerm !=""){
                        this.searchResult = true
                  }      
                },
                posterPath(poster_path) {
                        if (poster_path) {
                                return "https://image.tmdb.org/t/p/w500" + poster_path
                        } else {
                                return "https://via.placeholder.com/50x75"
                        }

                },
        }
}
</script>