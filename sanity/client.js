const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'q8j4bmr9',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skJC84h8yoYlFijpZqJt6Eohs1QQFGjNExpuY1QzpH0aEX6r0mf16It1CPAk5IhGfk0oak7tlAI6Li3V6UWNTOJynfOAr7CFXfurYe9ReMkzUosy2DBHxBYTanDTwThCXv0wlmusq0TRlk82AuPNrEpk94f1LO6u5qY7dwQmlj09Jou7H3p0', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;