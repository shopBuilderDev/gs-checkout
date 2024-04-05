export const getBroncoInteriorQuery = gql`
query products($query: String!) {
  products(first: 200, sortKey:PRODUCT_TYPE query: $query) {
	  edges {
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
  }
}
`
