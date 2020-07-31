import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'


// Custom Components
import HeaderOne from './common/headers/header-one';
// import FooterTwo from "./common/footers/footer-two";

// ThemeSettings
// import ThemeSettings from "./common/theme-settings"

const App = (props) => {

        return (
            <div>
                <HeaderOne logoName={'logocar.png'}/>
                {/*{this.props.children}*/}
                {props.children}
                {/*<FooterTwo logoName={'logo.png'}/>*/}

                {/*<ThemeSettings />*/}

            </div>
        );

}

export default withTranslate(App);