import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';
import store from "./atomic/store";
import translations from './atomic/constants/translations'
import Layout from './App'
import Basket from './newSales/shopping-basket'
import Payment from './newSales/payment'
import Purchase from "./newSales/purchase";
import Compare from "./newSales/comparison";
import Prices from "./newSales/prices";
import Registration from "./newSales/registration";
import Detailpurchase from "./newSales/detailpurchase";


const Root = () => {

        // store.dispatch(getAllProducts());

        return (
            <Provider store={store}>
                <IntlProvider translations={translations} locale='ko'>
                    <BrowserRouter basename={'/'}>
                        <ScrollContext>
                            <Switch>
                                <Layout>
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Purchase}/>
                                    <Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={Detailpurchase}/>
                                    <Route path={`${process.env.PUBLIC_URL}/payment`} component={Payment}/>
                                    <Route path={`${process.env.PUBLIC_URL}/basket`} component={Basket}/>
                                    <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
                                    <Route exact path={`${process.env.PUBLIC_URL}/prices`} component={Prices} />
                                    <Route exact path={`${process.env.PUBLIC_URL}/registration`} component={Registration}/>
                                </Layout>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>

        )

}

ReactDOM.render(<Root />, document.getElementById('root'));
