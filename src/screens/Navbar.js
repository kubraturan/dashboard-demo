import React, { Component } from 'react';
import {
    VscHome
} from 'react-icons/vsc';

import {
    BiSearch
} from 'react-icons/bi';

import {
    BsBellFill,
    BsFillCaretDownFill
} from 'react-icons/bs';

import {
    AiTwotoneAppstore
} from 'react-icons/ai';

export default class Navbar extends Component {
    render() {
        return (
            <div className="border-0">
                <div className="row">
                    {/* Logo-icons */}
                    <div className="col-md-2 d-flex">
                        <img 
                            src={require('../assets/rentificial.png')}
                            style={{
                                width: 237, 
                                border: "1px solid #f8f8f8"
                            }}/>
                    </div>
                    <div className="col-md-2 justify-content-center p-3 mt-1 ">
                        <AiTwotoneAppstore
                            size={20} 
                            style={{
                                color: '#e6e6e6',
                                marginRight: 10
                            }}
                        />
                        <VscHome 
                            size={20} 
                            style={{color: '#71bb03'}}/>
                    </div>
                    {/* search */}
                    <div 
                        className="col-md-5 pr-5 p-3 mt-2 text-light text-center justify-content-center" 
                        style={{
                            height: 50, 
                            backgroundColor: '#f8f8f8'
                        }} >
                        <div 
                            className="pr-2 d-flex align-items-center" 
                            style={{
                                color: 'rgb(218, 216, 216)',
                                fontSize: 'small',
                                background: '#f8f8f8'
                            }}>
                            <BiSearch size={20} style={{color: '#e6e6e6'}}/>
                            <input
                                style={{
                                    border: 'none', 
                                    background: '#f8f8f8',
                                    flex: 1,
                                    outline:'none',
                                    color: '#000'
                                }} 
                                placeholder="Search..." />
                        </div>
                    </div>
                    {/* user */}
                    <div className="col-md-3 pt-2 d-flex  justify-content-center">
                    <div className="col-md-3 pb-2 text-right">
                        <div 
                            className="text-center" 
                            style={{
                                backgroundColor: '#cceaa0',
                                color: '#3d5d0f',
                                width: 50,
                                height: 50,
                                borderRadius: 5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <BsBellFill/>
                        </div>
                    </div>
                    <div 
                        className="col-md-9 row border border-success mb-2 mr-3 ml-1" 
                        style={{borderRadius: '5px'}}>
                        <div className="col-md-3 mt-2">
                        <img 
                            className="rounded" 
                            src="https://randomuser.me/api/portraits/thumb/men/75.jpg" 
                            style={{
                                width: '25px', 
                                height: '25px'
                            }} />
                        </div>
                        <div className="col-md-6 mt-2">
                        <div className="row">
                            <small style={{fontSize: 'xx-small'}}>Welcome</small>
                        </div>
                        <div className="row">
                            <h5 style={{fontSize: 'small'}}>
                                Henry Johns Core
                            </h5>
                        </div>
                        </div>
                        <div className="col-md-2 mt-2 text-right">
                            <BsFillCaretDownFill style={{color: 'rgb(159, 214, 70)'}}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
