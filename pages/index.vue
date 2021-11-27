<template>
    <main>
        <section class="py-5 container">
            <div class="row mb-4 d-none d-lg-block">
                <div class="col-12">
                    <div class="row align-items-center">
                        <div class="col-12 col-lg-8 p-3 c-pointer" @click="$router.push({path: `/article/${articles[0].id}`})">
                            <img :src="articles[0].image" class="img-fluid w-100" />
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="row">
                                <div class="col-12 py-3 c-pointer" @click="$router.push({path: `/article/${articles[1].id}`})" >
                                    <img :src="articles[1].image" class="img-fluid"/>
                                </div>
                                <div class="col-12 pb-3 c-pointer" @click="$router.push({path: `/article/${articles[2].id}`})" >
                                    <img :src="articles[2].image" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <h3 class="text-primary">Artikel Terbaru</h3>
            </div>
            <div class="row"> 
                <div class="col-12 col-lg-8 bg-transparent">
                    <div class="row">
                        <div class="col-12 mb-3" v-for="article in articles" :key="article.id">
                            <div class="card border-0 bg-transparent">
                                <div class="row g-0 align-items-stretch align-items-lg-center">
                                    <div class="col-md-4">
                                        <img :src="article.image" class="img-fluid rounded" alt="article-img">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body px-0 px-lg-3">
                                            <h5 class="card-title text-primary c-pointer" @click="$router.push({path: `/article/${article.id}`})">{{ article.title }}</h5>
                                            <div class="card-text mb-4" v-html="article.shortDescription"></div>
                                            <label class="text-nowrap btn btn-warning btn-sm px-3 py-0 rounded-pill">
                                                <span class="text-light fs-sm text-capitalize">{{ article.category }}</span>
                                            </label>
                                            <label class="text-nowrap btn btn-outline-primary btn-sm px-3 py-0 rounded-pill ms-2">
                                                <span class="fs-sm text-capitalize">{{ article.date }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-lg-4">
                        <div class="row">
                        <div class="col-12 mb-3" v-for="article in articles" :key="article.id">
                            <div class="card border-0 bg-transparent">
                                <div class="row g-0 align-items-stretch align-items-lg-center">
                                    <div class="col-md-4">
                                        <img :src="article.image" class="img-fluid rounded" alt="article-img">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body px-0 px-lg-3">
                                            <h5 class="card-title text-primary c-pointer" @click="$router.push({path: `/article/${article.id}`})" >{{ article.title }}</h5>
                                            <div class="card-text mb-4 d-block d-lg-none" v-html="article.shortDescription"></div>
                                            <label class="text-nowrap btn btn-warning btn-sm py-0 px-3 rounded-pill">
                                                <span class="text-light fs-sm text-capitalize">{{ article.category }}</span>
                                            </label>
                                            <label class="text-nowrap btn btn-outline-primary btn-sm py-0 px-3 rounded-pill ms-2">
                                                <span class="fs-sm">{{ article.date }}</span>
                                            </label>
                                        </div>
                                    </div>
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
import { useArticle } from "~/store/article";

const articleStore = useArticle()

// fetch API
articleStore.getArticles()

const articles = articleStore.articles

</script>
