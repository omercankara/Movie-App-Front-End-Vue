<template>
    <div style="background-color: rgba(0, 0, 0, .5);"
        class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto  z-50" tabindex="0"
        v-show="value">
        <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
            <div class="bg-gray-900 rounded">
                <div class="flex justify-end pr-4 pt-2">
                    <button @click="$emit('newitem', modalOpen)" class="text-3xl leading-none hover:text-gray-300">
                        &times;
                    </button>
                </div>
                <div class="modal-body px-8 py-8">
                    <div class="responsive-container overflow-hidden relative"
                        :style="isVideo ? {'padding-top': '56.25%'} : {}">
                        <img :src="mediaUrl" v-if="!isVideo" />

                        <iframe class="responsive-iframe absolute top-0 left-0 w-full h-full" 
                            allow="autoplay; encrypted-media" allowfullscreen :src="mediaUrl" v-if="isVideo"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        value: {
            required: true,
            type: Boolean
        },
        mediaUrl: {
            required: true
        },
        isVideo: {
            required: true
        }
    },

    data() {
        return {
            data: {
                modalOpen: false
            }
        }

    }
}

</script>