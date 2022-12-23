const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '6putk55p',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'sk4misOd4oox9TgNMHYBoqXM9bXw7E0eDkjhs7vaQwXr7nJm0m7prw6qkIPCFRo5EjN0FyOCQog9PhrJtaEwjVS1RsO1lxArojOH4sQHDCsgIZ0YH4qnAA3x9uszYYJtWWRnS2j6BgBZmEYFSDlXjcWcph4tuJO4RAvMqbZxgA19eJCoojIC', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;