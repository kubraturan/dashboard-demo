import React, { Component } from 'react';
import OfferList from './OfferList';

export default class Offers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            activeTab
        } = this.props;

        return (
            <div>
                {
                    activeTab === 'offerList' &&
                    <OfferList/>
                }
            </div>
        );
    }
}