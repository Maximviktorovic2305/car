import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-us-west-2.hygraph.com/v2/clteyvb2k4irr07uzsagoufjt/master"

export const getCarsList = async () => {
   const query = gql`
      query CarLists {
         carLists {
            carAvg
            createdAt
            id
            name
            price
            publishedAt
            updatedAt
            carBrand
            carType
            image {
               url
            }
         }
      }
   `;

   const result = await request(
      MASTER_URL,
      query
   );
   return result;
};

export const getStoreLocations = async () => {
   const query = gql`
      query storesLocation {
         storesLocations {
            address
         }
      }
   `;

   const result = await request(
      MASTER_URL,
      query
   );
   return result;
};   
