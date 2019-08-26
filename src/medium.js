const feed = require('feed-read')
const mediumProfileUrl = "https://medium.com/feed/@leandrovboas"

module.exports = () => {
    return new Promise((resolve, reject) => {
        feed(mediumProfileUrl, (error, article) => {
            if (error) {
                reject(error)
            }

            const resultado = article.map(({ title, published, link }) => ({ title, published, link }));
            return resolve(resultado)
        })
    })
}