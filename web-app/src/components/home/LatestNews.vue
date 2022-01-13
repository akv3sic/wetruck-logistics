<template>
    <v-container class="mb-5">
        <v-row justify="center">
            <v-col>
                <v-row justify="center">
                <p class="subtitle-1 secondary--text mb-0">
                    Savjeti i novosti
                </p>
                </v-row>
                <v-row justify="center">
                    <h2
                        class="display-1 primary--text">
                        Zadnje s našeg bloga
                    </h2> 
                </v-row>
            </v-col>
           
        </v-row>
        <v-row class="mt-8">
                <LatestNewsItem 
                    v-for="post in posts"
                    :post=post
                    :key="post.id"
                />
        </v-row>
    </v-container>
</template>

<script>
import LatestNewsItem from './LatestNewsItem.vue'

export default {
    name: "LatestNews",
    components: {LatestNewsItem},
    data: () => ({
        posts: [
            {id: 1, title:"Post title", content: "Adipiscing elit duis tristique sollicitudin nibh. Sed faucibus turpis in eu mi bibendum. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Eu non diam phasellus vestibulum lorem sed. Maecenas volutpat blandit aliquam etiam erat velit.", img: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"}, 
            {id: 2, title:"Post title", content: "Adipiscing elit duis tristique sollicitudin nibh. Sed faucibus turpis in eu mi bibendum. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Eu non diam phasellus vestibulum lorem sed. Maecenas volutpat blandit aliquam etiam erat velit.", img : "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"}, 
            {id: 3, title:"Post title", content: "Adipiscing elit duis tristique sollicitudin nibh. Sed faucibus turpis in eu mi bibendum. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Eu non diam phasellus vestibulum lorem sed. Maecenas volutpat blandit aliquam etiam erat velit.", img : "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"}, 
            {id: 4, title:"Post title", content: "Adipiscing elit duis tristique sollicitudin nibh. Sed faucibus turpis in eu mi bibendum. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Eu non diam phasellus vestibulum lorem sed. Maecenas volutpat blandit aliquam etiam erat velit.", img: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"}       
            ]
    })
}
</script>