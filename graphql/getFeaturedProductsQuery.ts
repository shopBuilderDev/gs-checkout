export const getFeaturedProductsQuery = gql`
query getCollectionIdFromHandle($handle: String!) {
	collectionByHandle(handle: $handle) {
	  id
	  title
	  description
	  products(first: 9) {
		edges {
			node {
				id
				title
				handle
				description
				images(first: 1) {
					edges {
						node {
							src
						}
					}
				}
			}
		}
	  }
	}
  }
  `
