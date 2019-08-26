const axios = require('axios')
const urlGitHub = "https://api.github.com/users/leandrovboas/repos";

module.exports = async () => {
    return new Promise(async (resolve, reject) => {
        const response = await axios.get("https://api.github.com/users/leandrovboas/repos")
        if(response.error){
            reject(error)
        }
        const result = response.data.map(({name, url}) => ({name, url}))
        
        return resolve(result)
    })
}
