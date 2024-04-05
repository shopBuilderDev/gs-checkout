
export const getProductsCount = gql`
query collection($handle: String!) {
	collectionByHandle(handle:$handle) {
		productsCount
	}
}
`