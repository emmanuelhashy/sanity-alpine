const sanityClient =  require('@sanity/client')

sanityClient({
    projectId: "gs4cz6ia",
    dataset: "starsh",
    useCdn: false
})

let products = []
const fetchApi = () => {
    sanityClient.fetch(
        `*[_type == "product"]{
            name,
            slug
        }`
    )
    .then( data => {
        products = data
        console.log("products", products)
    })
    .catch(console.error)
}

module.exports = {
    fetchApi
}