/* types */
const FILTER_BRAND = 'FILTER_BRAND'
const FILTER_COLOR = 'FILTER_COLOR'
const FILTER_PRICE = 'FILTER_PRICE'
const SORT_BY = 'SORT_BY'


/* actions */
export const filterBrand = (brand) => ({
    type: FILTER_BRAND,
    brand
});
export const filterColor = (color) => ({
    type: FILTER_COLOR,
    color
});
export const filterPrice = (value) => ({
    type: FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: SORT_BY,
    sort_by
});

/* reducer */
const filtersReducerDefaultState = {
    brand: ["현대", "테슬라", "벤츠"],
    value: { min: 250, max: 5000 },
    sortBy: ""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    // console.log('Action Result');
    // console.log(action);
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            };
        case FILTER_COLOR:
            return {
                ...state,
                color: action.color
            };
        case FILTER_PRICE:
            return {
                ...state,
                value: {min: action.value.value.min, max: action.value.value.max }
            };
        case SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        default:
            return state;
    }
}

export default filtersReducer;