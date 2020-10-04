import React, { Component } from 'react';

export default class RateItem extends Component {
    render() {
        const {
            rateItemName,
            rateItemValue,
            rateItemColor,
            rateItem,
            rateItemIcon,
        } = this.props;
        return (
            <div 
                className="col-sm-3" 
                style={{boxShadow: '2px 2px 2px 2px rgb(230, 230, 230)'}}>
                <div className="row">
                    <div className="mt-3 ml-4" style={{fontSize: 'xx-large', color: 'rgb(113, 187, 3)'}}>
                        {
                            rateItemIcon
                        }
                    </div>
                    <div className="col text-center">
                        <div 
                            className="mt-2" 
                            style={{fontSize: '12px'}}>
                                <strong>{rateItemName}</strong>
                        </div>
                        <div 
                            style={{
                                fontSize: '32px', 
                                color: rateItemColor}}>
                            <strong>{rateItemValue}</strong>
                        </div>
                        <div 
                            className="pb-2" 
                            style={{fontSize: '12px'}}>
                                <strong>{rateItem}</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
