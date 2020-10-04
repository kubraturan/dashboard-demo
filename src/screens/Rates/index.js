import React, { Component } from 'react';
import RT2553Tarife from './RT2553Tarife';

export default class Rates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            activeTab
        } = this.props;

        return (
            <div className="d-flex" style={{flex: 1, width: '100%'}}>
                {
                    activeTab === 'rateDetail' &&
                    <RT2553Tarife/>
                }
            </div>
        );
    }
}