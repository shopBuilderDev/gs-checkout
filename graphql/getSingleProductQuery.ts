export const getSingleProductQuery = gql`
	query Product($handle: String!) {
		productByHandle(handle: $handle) {
			id 
			title 
			productType 
			description 
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
			variants(first: 5) {
				edges {
					node {
						id
						sku
						image {
							id
							url
						}
					}
				}
			}
		}
	}
`