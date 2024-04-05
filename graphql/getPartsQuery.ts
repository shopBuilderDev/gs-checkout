export const getPartsQueryAfter = gql`
  query products($query: String!, $after: String) {
    products(first: 24, sortKey: PRODUCT_TYPE, query: $query, after: $after) {
      edges {
        cursor
        node {
          id
          title
          handle
          description
          productType
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                sku
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const getPartsQueryBefore = gql`
  query products($query: String!, $before: String) {
    products(last: 24, sortKey: PRODUCT_TYPE, query: $query, before: $before) {
      edges {
        cursor
        node {
          id
          title
          handle
          description
          productType
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                sku
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const getPartQty = gql`
  query products($query: String!) {
    products(first: 1,query: $query) {
      edges {
        node {
          id
          title
          handle
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

