const https = require('https')
const axios = require('axios')

module.exports = async () => {
    const result = await axios.get('https://collectednotes.com/ksidhpuri.json',
        {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        })
    return {
        posts: result.data.notes
    }
}
