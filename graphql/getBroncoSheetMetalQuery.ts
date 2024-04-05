export const getBroncoSheetMetalQuery = gql`
query products {
  products(first: 200, sortKey:PRODUCT_TYPE query: "tag:bronco AND tag:sheet-metal") {
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
