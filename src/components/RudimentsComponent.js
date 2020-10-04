import React, { Component } from 'react';

import RateItem from './RateItem';
import BottomContainerItem from './BottomContainerItem';
import DoughnutChart from './DoughnutChart';
import CiroChart from './CiroChart';
import OperationChart from './OperationChart';

import {
    BiFile,
    BiCoinStack
} from 'react-icons/bi';

import {
    HiOutlineLocationMarker
} from 'react-icons/hi'

import classNames from 'classnames';

export default class RudimentsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rateItems : [
                {   
                    rateItemName: 'Toplam kontrat sayısı',
                    rateItemValue: '1249',
                    rateItemColor: 'rgb(113, 187, 3)',
                    rateItem: 'adet',
                    rateItemIcon: <BiFile size={45} />,
                },
                {
                    rateItemName: 'Toplam bölge sayısı',
                    rateItemValue: '17',
                    rateItemColor: 'rgb(113, 187, 3)',
                    rateItem: 'adet',
                    rateItemIcon: <HiOutlineLocationMarker size={45}/>,
                },
                {   
                    rateItemName: 'İptal Oranı',
                    rateItemValue: '23',
                    rateItemColor: 'rgb(233, 83, 83)',
                    rateItem: 'adet toplam iptal',
                    rateItemIcon: <DoughnutChart palette={'Office'}  value={'%35'}/>,
                },
                {   
                    rateItemName: 'Upsell Oranı',
                    rateItemValue: '8',
                    rateItemColor: 'rgb(118, 177, 214)',
                    rateItem: 'adet toplam upsell',
                    rateItemIcon: <DoughnutChart palette={'Soft Blue'} value={'%8'} />,
                },
            ],
            bottomContainerItems: [
                {
                    bottomContainerItemTitle: 'Tarife Kodu',
                    bottomContainerItemValue: 'RTC9327'
                },
                {
                    bottomContainerItemTitle: 'Tarife Adı',
                    bottomContainerItemValue: 'C Segment'
                },
                {
                    bottomContainerItemTitle: 'Tarife Tipi',
                    bottomContainerItemValue: 'Tek Yön'
                },
                {
                    bottomContainerItemTitle: 'Ek Süre',
                    bottomContainerItemValue: '3 Saat'
                },
                {
                    bottomContainerItemTitle: 'Min kullanım',
                    bottomContainerItemValue: '1 Gün'
                },
                {
                    bottomContainerItemTitle: 'Maks kullanım',
                    bottomContainerItemValue: '45 Gün'
                }
            ],
        };
    };

    render() {
        const {
            rateItems,
            bottomContainerItems,
        } = this.state;

        return (
            <div className="col">
                <div className="container">
                    {/* grid top */}
                    <div className="row ">
                        {
                            rateItems.map(x => (
                                <RateItem
                                    rateItemName={x.rateItemName}
                                    rateItemValue= {x.rateItemValue}
                                    rateItemColor= {x.rateItemColor}
                                    rateItem= {x.rateItem}
                                    rateItemIcon={x.rateItemIcon}
                                />
                            ))
                        }
                    </div>
                    {/* grid bottom */}
                    <div className="row mt-4">
                        <div className="col-3" style={{height: '130px', boxShadow: '2px 2px 2px 2px rgb(230, 230, 230)'}}>
                            <div className="row">
                                <div className="mt-4 ml-4" style={{fontSize: 'xx-large', color: 'rgb(113, 187, 3)'}}>
                                    <BiCoinStack size={45} />
                                </div>
                                <div className="col text-center">
                                    <div className="mt-2" style={{fontSize: '12px'}}><strong>Ortalama günlük ücret</strong></div>
                                    <div style={{fontSize: '32px', color: 'black'}}><strong>₺234</strong></div>
                                </div>
                            </div>
                        </div>
                        {/* ciro chart */}
                        <div className="col-6" style={{fontSize: 'xx-small', boxShadow: '2px 2px 2px 2px rgb(230, 230, 230)'}}>
                            <div className="row d-flex justify-content-between mr-2">
                                <div className="ml-3 mt-1" style={{height: '30px', marginBottom: '10px'}}>
                                    <strong className="mr-1 text-left" style={{fontSize: '12px'}}>Ciro</strong><strong style={{fontSize: '10px', color: 'rgb(113, 187, 3)', marginTop: '3px'}}>Temmuz
                                        2020</strong>
                                </div>
                                <div className="mt-1 text-left" style={{marginLeft: '210px'}}>
                                    <strong style={{fontSize: '10px', color: 'rgb(113, 187, 3)', marginTop: '3px'}}>Toplam</strong><br />
                                    <strong style={{fontSize: '12px'}}>₺1.639.382,00</strong>
                                </div>
                            </div>
                            <div >
                                <CiroChart/>
                            </div>
                        </div>
                        {/* operation chart */}
                        <div className="col-3" style={{fontSize: 'xx-small', boxShadow: '2px 2px 2px 2px rgb(235, 235, 235)'}}>
                            <div className="text-center" style={{height: '30px', marginBottom: '10px'}}>
                                <strong style={{fontSize: '32px', color: 'rgb(113, 187, 3)'}}>1.823</strong>
                            </div>
                            <div className="text-center">
                                <strong style={{fontSize: '12px'}}>Toplam işlem adedi</strong>
                            </div>
                            <div className="text-center">
                                <strong style={{fontSize: '10px', color: 'rgb(113, 187, 3)'}}>Temmuz 2020</strong>
                            </div>
                            <div>
                                <OperationChart/>
                            </div>
                        </div>
                    </div>
                    {/* bottom list */}
                    <div className="row mt-4 justify-content-end">
                        <div 
                            className="col-md-9 p-4 row" 
                            style={{
                                marginRight: '0px', 
                                boxShadow: '2px 2px 2px 2px rgb(230, 230, 230)'
                            }}>
                            {
                                bottomContainerItems.map(x => (
                                    <BottomContainerItem
                                        bottomContainerItemTitle={x.bottomContainerItemTitle}
                                        bottomContainerItemValue={x.bottomContainerItemValue}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
