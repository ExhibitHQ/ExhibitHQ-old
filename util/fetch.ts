import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export const getHashnodeBlogInfo = async (username: string) => {
    const client = new ApolloClient({
        uri: "https://api.hashnode.com/",
        cache: new InMemoryCache()
    })

    const query = gql`
    {
        user(username: "${username}") {
            numFollowing
            numFollowers
            numPosts
    
            publication {
                posts {
                    slug
                    title
                    popularity
                    dateAdded
                    tags {
                        name
                        slug
                    }
                    contentMarkdown
                    coverImage
                }
            }
        }
    }
    `
    return client.query({query});
}