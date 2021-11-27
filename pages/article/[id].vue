<template>
    <main class="bg-white">
        <section class="py-5 container">
            <div class="row mb-3">
                <div class="col-12 text-center mb-4">
                    <img :src="article.image" class="img-fluid rounded" alt="article-detail-img">
                </div>
                <div class="col-12 mb-2">
                    <h1 class="text-uppercase text-primary fs-3"> {{article.title}} </h1>
                </div>
                <div class="col-12 mb-3">
                    <div class="row">
                        <div class="col-12">
                            <label>Ditulis Oleh: </label> <label class="text-secondary fw-bold"> {{article.writer}}</label>
                        </div>
                        <div class="col-12">
                            <label>Direview Oleh: </label> <label class="text-secondary fw-bold"> {{article.reviewer}}</label>
                        </div>
                        <div class="col-12">
                            <label class="text-secondary fw-bold">{{article.date}}</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 mb-3">
                    <div class="row">
                        <div class="col-12" v-html="article.description">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <label class="fs-3 text-secondary fw-bold">Artikel Terkait</label>
                </div>
            </div>

            <div class="row">
                <div class="col-12 mb-3" v-for="article in articles" :key="article.id">
                    <div class="card border-0 bg-transparent">
                        <div class="row g-0 align-items-stretch align-items-lg-start">
                            <div class="col-md-4">
                                <img :src="article.image" class="img-fluid rounded" alt="article-img">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body px-0 px-lg-3">
                                    <h5 class="card-title text-primary">{{ article.title }}</h5>
                                    <p class="card-text mb-4" v-html="article.shortDescription"></p>
                                    <label class="text-nowrap btn btn-warning btn-sm py-0 px-3 rounded-pill">
                                        <span class="text-light fs-sm text-capitalize">{{ article.category }}</span>
                                    </label>
                                    <label class="text-nowrap btn btn-outline-primary btn-sm py-0 px-3 rounded-pill ms-2">
                                        <span class="fs-sm text-capitalize">{{ article.date }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useArticle } from "~/store/article"

const articleStore = useArticle()
const route = useRoute()

// fetch API
articleStore.getArticles()

const articles = articleStore.articles
let article = articleStore.articles.find(article => article.id == route.params.id)
article = article ? article: articles[0]


</script>