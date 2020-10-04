import React, { Component } from 'react';

import {
    FaChevronRight
  } from 'react-icons/fa';

export default class SideMenuItem extends Component {
    render() {
        const {
            itemIcon,
            itemName,
            onClick
        } = this.props;
        return (
            <div 
                className="d-flex flex-row justify-content-between align-items-center" 
                style={{width: 180}} 
                onClick={onClick}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div 
                        className="d-flex flex-row justify-content-center align-items-center"  
                        style={{paddingRight:10}}>
                        {itemIcon}
                    </div>
                    <span>
                        {itemName}
                    </span>
                </div>
                <div>
                    <FaChevronRight style={{color:'#545454'}}/>
                </div>
            </div>      
        );
    }
}
