export const cartCreate = gql`
mutation cartCreate {
    cartCreate {
        cart {
            id
            checkoutUrl
        }
    }
}`