import React, { Component } from 'react';

export default class BottomContainerItem extends Component {
    render() {
        const {
            bottomContainerItemTitle,
            bottomContainerItemValue,
        } = this.props;
        return (
            <div className="col mt-2 mb-2 border-right">
                <div style={{fontSize: 'xx-small'}}>
                    <strong style={{color: '#76b1d6'}}>
                        {bottomContainerItemTitle}
                    </strong>
                </div>
                <div style={{fontSize: 'x-small'}}>
                    <strong>{bottomContainerItemValue}</strong>
                </div>
            </div>
        );
    }
}
