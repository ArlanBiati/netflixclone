// arquivo que contem todos as informações pegas da api publica do TMDB

const API_KEY = "aca5d320621f001313e3a126b0b04e9b"
const API_BASE = "https://api.themoviedb.org/3"


// função que vai mandar o endpoint, receber o resultado no json e retornar os dados
const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`) // req api externa
    const json = await req.json() // espera a resposta
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFecth(`/movie/top_rated/?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFecth(`/discover/tv?with_network=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Horror",
                items: await basicFecth(`/discover/tv?with_network=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFecth(`/discover/tv?with_network=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFecth(`/discover/tv?with_network=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId) {
            switch(type) {
                case "movie":
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                case "tv":
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                default:
                    info = null
                break
            }
        }

        return info
    }
}