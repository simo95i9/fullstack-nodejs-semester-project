const articles = new Map()

import {article as npm_article} from "./npm.js"
articles.set(npm_article.slug, npm_article)

import {article as express_article} from "./express.js"
articles.set(express_article.slug, express_article)

import {article as javascript_article} from "./javascript.js"
articles.set(javascript_article.slug, javascript_article)

export default articles
export function addArticle(article) {
    articles.set(article.slug, article)
}