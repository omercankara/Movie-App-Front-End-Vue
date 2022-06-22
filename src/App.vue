<template>

        <div>

                <div class="flex justify-between border-b border-gray-500 container mx-auto">
                        <navbarComp />
                        <searchBarComp />
                </div>
                <router-view></router-view>

        </div>
</template>


<script>
import navbarComp from "./components/header/navbarComp.vue";
import searchBarComp from "./components/header/searchComp.vue";
export default {
        components: {
                navbarComp,
                searchBarComp
        }
}
</script>