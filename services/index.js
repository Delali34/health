import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
        posts(
            orderBy: createdAt_ASC
            last:2
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
    }
    
    
    
    `;
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 2
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { categories, slug });
    return result.posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.categories;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post details");
  }
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comment", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};
