import {gql} from '@apollo/client';

export const CAR_LIST = gql`
    query {
        allCars {
            id
            make
            model
            sold
            price
            year
        }
    }
`;

export const CAR_SINGLE = gql`
    query GetCarById($singleCarId: ID!) {
        getCarById(id: $singleCarId) {
            id
            make
            model
            price
            sold
            year
        }
}
`