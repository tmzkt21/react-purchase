import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Breadcrumb from '../common/breadcrumb';
import {toast} from "react-toastify";
import {addToCart} from "../cart/cartReducer";

/* types */
const ADD_TO_COMPARE = 'ADD_TO_COMPARE'
const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE'

/* actions */
export const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
export const addToCompareUnsafe= (product) => ({
    type: ADD_TO_COMPARE,
    product
});
export const removeFromCompare = product_id => ({
    type: REMOVE_FROM_COMPARE,
    product_id
});

/* reducer */
export const compareReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_TO_COMPARE:
            const productId = action.product.id
            if (state.items.findIndex(product => product.id === productId) !== -1) {
                const items = state.items.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, items }
            }

            return { ...state, items: [...state.items, action.product] }

        case REMOVE_FROM_COMPARE:
            return {
                items: state.items.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}

/* component */
export const Compare = () => {
    const [quantity, setQuantity] = useState('')
    const {Items, symbol} = useSelector(state=>({
        Items: state.compare.items,
        symbol: state.data.symbol
    }))

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const changeQty = e => {
        setQuantity(parseInt(e.target.value))
    }

    return <>
        <div>
            <Breadcrumb title={'Compare'} />
            {Items.length>0 ?
                <section className="compare-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider {...settings} className="slide-4">
                                    {Items.map((item,index) =>
                                        <div key={index}>
                                            <div className="compare-part">
                                                <button type="button" className="close-btn" onClick={removeFromCompare(item)}>
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                <div className="img-secton">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.pictures[0]} className="img-fluid" alt="" />
                                                        <h5>{item.name}</h5></Link>
                                                    <h5>{symbol}{(item.price*item.discount/100)}
                                                        <del><span className="money">{symbol}{item.price}</span></del></h5>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>discription</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.shortDetails}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>Brand Name</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.tags}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>size</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>color</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.colors}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>availability</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>In stock</p>
                                                    </div>
                                                </div>
                                                <div className="btn-part">
                                                    <a className="btn btn-solid" onClick={addToCart(item, 1)}>add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-compare.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Compare List is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    </>
}
export default compareReducer