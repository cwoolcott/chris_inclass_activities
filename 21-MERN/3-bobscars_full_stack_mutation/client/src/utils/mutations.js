import {gql} from '@apollo/client';
/// addCar(id: Int!, make: String!, model: String!, price: Int!, image: String, sold: Boolean! ): Cars
export const ADD_CAR = gql`
    mutation ($id: Int!, $year: String!, $make: String!, $model: String!, $price: Int!, $sold: Boolean!) {
        addCar(id: $id, year: $year, make: $make, model: $model, price: $price,  sold: $sold) {
            id
            year
            make
            model
            price
            sold
            year
        }
    }
`;


export const EDIT_CAR = gql`
    mutation ($id: Int!, $year: String!, $make: String!, $model: String!, $price: Int!, $sold: Boolean!) {
        editCar(id: $id, year: $year, make: $make, model: $model, price: $price,  sold: $sold) {
            id
            year
            make
            model
            price
            sold
            year
        }
    }
`;