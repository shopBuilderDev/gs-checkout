export const createCheckoutMutation = gql`
 mutation checkoutCreate($variantId: ID!) {
   checkoutCreate(
     input: { lineItems: { variantId: $variantId, quantity: 1 } }
   ) {
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
