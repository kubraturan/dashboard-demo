import React, { Component } from 'react';

import {RudimentsComponent} from '../../components/';

import {
    FaPlus
} from 'react-icons/fa';

import {
    GoCalendar
} from 'react-icons/go';

import {
    TiPencil
} from 'react-icons/ti';

import {
    BsCaretDown
} from 'react-icons/bs';

import classNames from 'classnames';

function Tariffs(props) {
    return <h1>Araç Tarifleri</h1>;
} 

function Services(props) {
    return <h1>Dahil Ek Hizmetler</h1>;
}

export default class RT2553Tarife extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: 'rudiments',
            rateSideMenuItem: [
                {
                    key: 'rudiments',
                    value: 'Temel Bilgiler'
                },
                {
                    key: 'tariffs',
                    value: 'Araç Tarifeleri'
                },
                {
                    key: 'services',
                    value: 'Dahil Ek Hizmetler'
                }
            ]
        };
    };

    // aktif olan menüyü set etmek için
    rateSideMenuItemClick(key){
        this.setState({
            activeMenu: key,
        })
    }

    render() {
        const {
            activeMenu,
            rateSideMenuItem
        } = this.state;
        return (
            <div 
                className="d-flex" 
                style={{flex: 1, width: '100%', margin: 15}}>
                <div style={{backgroundColor: '#f8f8f8', flex:1}}>
                    {/* rate details */}
                    <div className="m-3">
                        <div className="row">
                            <div className="col-md-3 mt-1">
                                <strong>#RT2553</strong> nolu tarife detayı
                            </div>
                            <div className="col-md-5 mt-1">
                                <strong className="text-success">Tarife önizleme</strong>
                            </div>
                            <div className="col-md-4 text-right d-flex justify-content-end">
                                <button type="button" className="btn d-flex btn-lg btn-secondary mr-1" style={{fontSize: 'x-small', backgroundColor: 'rgb(113, 187, 3)', border: 'none'}}>
                                    <div className="pr-1">
                                        <FaPlus/>
                                    </div>
                                    Yeni Tarife
                                </button>
                                <button type="button" className="btn d-flex btn-lg btn-secondary mr-1" style={{fontSize: 'x-small', backgroundColor: 'white', color: 'rgb(177, 176, 176)'}}>
                                    <div className="pr-1">
                                        <GoCalendar/>
                                    </div>
                                    <strong style={{color: 'black'}}>Bu Ay</strong> 
                                        Temmuz
                                    <div className="pl-1">
                                        <BsCaretDown/>
                                    </div>
                                </button>
                                <button type="button" className="btn d-flex btn-lg btn-secondary" style={{fontSize: 'x-small', backgroundColor: 'white', color: 'rgb(177, 176, 176)'}}>
                                    <div className="pr-1">
                                        <TiPencil/>
                                    </div>
                                    Düzenle
                                </button>
                            </div>
                        </div>
                        <div className="row mt-4">
                            {/* bottom list */}
                            <div className="col-md-3">
                                <ul className="list-group">
                                    {
                                        rateSideMenuItem.map(x => (
                                            <li className={classNames(
                                                "list-menu list-group-item text-muted",
                                                {'active': activeMenu === x.key})
                                            } 
                                            style={{border:'none', fontSize: 'small'}}
                                            onClick={() => this.rateSideMenuItemClick(x.key)}>
                                                {x.value}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {/* tariffs content */}
                            {
                                activeMenu === 'rudiments' &&
                                <RudimentsComponent/>
                            }
                            {
                                activeMenu === 'tariffs' &&
                                <Tariffs/>
                            }
                            {
                                activeMenu === 'services' &&
                                <Services/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
