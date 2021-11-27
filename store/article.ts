import { defineStore } from 'pinia'
import articles from '@/public/article.json'
import { Article } from '~~/model/Article'

export const useArticle = defineStore({
  id: 'article',

  state: () => ({
    articles: [],
    incrementedTimes: 0,
    decrementedTimes: 0,
    numbers: [] as number[],
  }),

  getters: {
  },

  actions: {
    getArticles() {
        const articlesData = JSON.parse(JSON.stringify(articles.data))   

        this.articles = articlesData.map(article => {
            let articleModel = new Article()
            articleModel.id = article.id
            articleModel.title = article.title
            articleModel.image = article.image
            articleModel.shortDescription = article.short_description
            articleModel.description = article.description
            articleModel.category = article.category
            articleModel.date = article.date
            articleModel.writer = article.writer
            articleModel.reviewer = article.reviewer

            return articleModel
        })
    }
  }
})
