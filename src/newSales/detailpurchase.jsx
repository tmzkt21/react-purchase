import React, {Component, useRef, useState} from 'react';
import {Helmet} from 'react-helmet'
import Slider from 'react-slick';
import '../common/index.scss';
import {connect, useSelector} from "react-redux";

// import custom Components
import Service from "./common/service";
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from '../atomic/actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'



const Detailpurchase = (props) => {
    const [open,setopen] = useState(false)
    const [nav1,setnav1] = useState(null)
    //const [nav1,setnav1] = useState('slider1')
    const [nav2,setnav2] = useState(null)
    const item = useSelector(state => state.data.products.find(el => el.id == props.match.params.id)) //.find(el => el.id == ownProps.match.params.id))

    const symbol = useSelector(state => state.data.symbol)
    const slider = useRef('slider1')
    // document.getElementById('idOfElement').classList.add('newClassName');
    const  componentDidMount = () => {
        setnav1('slider1')
        setnav2('slider2')
    }
    const filterClick = () => {
        document.getElementById("filter").style.left = "-15px";
    }
    const backClick = () => {
        document.getElementById("filter").style.left = "-365px";
    }
    const { addToCart, addToCartUnsafe, addToWishlist} = props
    var products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    };
    var productsnav = {
        slidesToShow: 3,
        swipeToSlide:true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    };
    return (
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>MultiKart | {item.category} | {item.name}</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}
            <Breadcrumb  parent={'Product'} title={item.name} />
            {/*Section Start*/}
            {(item)?
                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter" id="filter">
                                    <div  className="collection-mobile-back pl-5">
                                        <span onClick={backClick}  className="filter-back">
                                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                        </span>
                                    </div>
                                    {/* <BrandBlock/> */}
                                    <Service/>
                                    {/*side-bar single product slider start*/}
                                    <NewProduct/>
                                    {/*side-bar single product slider end*/}
                                </div>
                                <div className="col-lg-9 col-sm-12 col-xs-12">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="filter-main-btn mb-2">
                                                    <span onClick={filterClick}  className="filter-btn" >
                                                        <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 product-thumbnail">
                                                <Slider {...products} asNavFor={nav2} ref={slider} className="product-slick">
                                                    {item.variants?
                                                        item.variants.map((vari, index) =>
                                                            <div key={index}>
                                                                <ImageZoom image={vari.images} />
                                                            </div>
                                                        ):
                                                        item.pictures.map((vari, index) =>
                                                            <div key={index}>
                                                                <ImageZoom image={vari} />
                                                            </div>
                                                        )}
                                                </Slider>
                                                <SmallImages item={item} settings={productsnav} navOne={nav1} />
                                            </div>
                                            <DetailsWithPrice symbol={symbol} item={item} navOne={nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} addToWishlistClicked={addToWishlist} />
                                        </div>
                                    </div>
                                    <DetailsTopTabs item={item} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''}
            {/*Section End*/}
        </div>
    )
}
// const mapStateToProps = (state, ownProps) => {
//     let productId = ownProps.match.params.id;
//     return {
//         item: state.data.products.find(el => el.id == productId),
//         symbol: state.data.symbol
//     }
// }
// export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist}) (LeftSideBar);
export default Detailpurchase

// export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist}) (Detailpurchase);