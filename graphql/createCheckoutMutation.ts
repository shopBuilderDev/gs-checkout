export const createCheckoutMutation = gql`
mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
  checkoutCreate(input: { lineItems: $lineItems }) {
    checkout {
      webUrl
    }
  }
}

`;

// export const createCheckoutMutation = gql`
// mutation cartCreate($cartInput: CartInput!) {
//   cartCreate(input: $cartInput) {
//     cart {
//       id
//       checkoutUrl
//       lines(first: 5) {
//         edges {
//           node {
//             merchandise {
//               ... on ProductVariant {
//                 title
//               }
//             }
//             quantity
//           }
//         }
//       }
//     }
//   }
// }
// `;
