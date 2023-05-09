import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { readFileSync } from "fs";

export const getDataFromJsonSync = (username: string) => {
    const buffer = readFileSync(`data/users/${username}.json`);
    const data = JSON.parse(buffer.toString());
    return data;
  };

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