module.exports = global.config = {
    urls: {
        baseUrl: "https://www.omdbapi.com/"
    },
    apiKey: {
      key: process.env.REACT_APP_API_KEY
    }
};