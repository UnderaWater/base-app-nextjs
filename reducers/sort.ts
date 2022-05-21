import { IProductModel } from './../interfaces/product.interface';
import { SortEnum } from "../components/Sort/Sort.props";

export type SortAction = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface ISortReducerState {
    sort: SortEnum;
    products: IProductModel[];
}

export const sortReducer = (state: ISortReducerState, action: SortAction): ISortReducerState => {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1 )
            };
        default:
            throw new Error('invalid sort type');
    }
};