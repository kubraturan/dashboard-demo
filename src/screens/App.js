import React, { Component } from 'react';

import {
    Navbar,
    SideMenu,
    Offers,
    Bookings,
    Rates,
} from './index';

import {
    RiCloseCircleLine
} from 'react-icons/ri';

import {
    MdClose
} from 'react-icons/md';

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sideItemTab: 'rates',
            activeTab: 'rateDetail',
            activeTabList: [{
                itemKey: "rateDetail",
                itemName: "RT22553 Rate Detail",
                sideItemKey: "rates",
                sideItemName: "Rates/Policies",
            }],
            activeTabName:'RT22553 Rate Detail',
            activeSideItemTabName: 'Rates/Policies',
            visibleAlert: false,
        };

        this.deleteAllTabs = this.deleteAllTabs.bind(this);
        this.openSubMenuItems = this.openSubMenuItems.bind(this);
    }

    componentDidMount(){
        // Uygulama ilk açılınca aktif olan tabı söylemek için uyarı veririz.
        this.visibleAlert();
    }

    // Uyarı vermek için
    visibleAlert() {
        var self = this;
        var cb = () =>{
            self.setState({
                visibleAlert: !self.state.visibleAlert
            })
        }
        cb();
        setTimeout(() => (
            cb()
        ), 3000);
    }

    /**
     * Side menüde seçilen componentin gösterilmesi işlemini yapan fonksiyondur.
     * @param {object} item - Tıklanan menü elemanı 
    */
    openSubMenuItems(item) {
        const {
            activeTabList,
            activeTab
        } = this.state;

        var index = activeTabList.findIndex(tab => tab.itemKey === item.itemKey);
        if (index === -1 || item.itemKey !== activeTab) {
            this.setState({
                sideItemTab : item.sideItemKey,
                activeTab: item.itemKey,
                activeTabName: item.itemName,
                activeSideItemTabName: item.sideItemName,
                activeTabList: index === -1 ? [...activeTabList, item] : activeTabList,
            })
        }
    }

    /**
     * Side menüde seçilen componentin gösterilmesi işlemini yapan fonksiyondur.
     * @param {object} item - Tıklanan menü elemanı 
    */
    openActiveTab(item) {
        if (item.itemKey !== this.state.activeTab) {
            this.setState({
                sideItemTab : item.sideItemKey,
                activeTab: item.itemKey,
                activeTabName: item.itemName,
                activeSideItemTabName: item.sideItemName,
            })
        }
    }

    /**
     * Tüm side menü ile açılan componentlerin kapanmasına yarayan fonksiyondur fakat aktif olan tab kalmalı.
    */
    deleteAllTabs(){
        this.setState({
            activeTabList: [],
            sideItemTab: 'rates',
            activeTab: 'rateDetail',
            activeTabList: [{
                itemKey: "rateDetail",
                itemName: "RT22553 Rate Detail",
                sideItemKey: "rates",
                sideItemName: "Rates/Policies",
            }],
            activeTabName:'RT22553 Rate Detail',
            activeSideItemTabName: 'Rates/Policies',
        }, () => this.visibleAlert())
    }

    /**
     *  side menü ile açılan componentin kapanmasına yarayan fonksiyondur.
    */
    deleteSubItems(x) {
        var index = this.state.activeTabList.indexOf(x);
        // element kaçıncı indisdeyse ondan bir önceki varsa onu yoksa bir sonrakini aktif etmesi için
        var newActiveTab = index === 0 ? this.state.activeTabList[index+1] : this.state.activeTabList[index-1]
        this.state.activeTabList.splice(index, 1);

        if (this.state.activeTabList.length > 0) {
            this.setState({
                activeTabList: this.state.activeTabList,
                sideItemTab : newActiveTab.sideItemKey,
                activeTab: newActiveTab.itemKey,
                activeTabName: newActiveTab.itemName,
                activeSideItemTabName: newActiveTab.sideItemName,
            })
        }
        else {
            // eğer tüm tabları sildiyse aktif olan tabı ilk tab yap
            this.deleteAllTabs();
        }
    }

    render() {
        console.log('render');
        const {
            activeTab,
            sideItemTab,
            activeTabName,
            activeSideItemTabName,
            activeTabList,
            visibleAlert
        } = this.state;

        return (
            <div className="border m-3">
               <Navbar/>
               {    
                    visibleAlert &&
                    <div class="alert alert-primary" role="alert">
                        Varsayılan tab "RT22553 Rate Detail" yapıldı
                    </div>
               }
                <div className="d-flex flex-wrap">
                    <SideMenu 
                        openSubMenuItems={(x) => this.openSubMenuItems(x)}
                    />
                    <div 
                        className="d-flex" 
                        style={{
                            flex: 1, 
                            width: '100%'
                        }}>
                        <div style={{backgroundColor: '#f8f8f8', flex:1}}>
                            <div className="test row mb-4">
                                {/* top active menü list */}
                                <div className="col-md-3 mt-1">
                                    <nav aria-label="breadcrumb">
                                        <ol 
                                            className="breadcrumb" 
                                            style={{
                                                backgroundColor: '#f8f8f8', 
                                                fontSize: 'x-small'
                                            }}>
                                            <li className="breadcrumb-item text-muted">Home</li>
                                            <li className="breadcrumb-item text-muted">{activeSideItemTabName}</li>
                                            <li className="breadcrumb-item text-dark">{activeTabName}</li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* active tab list */}
                                <div className="col-md-9">
                                    <ul 
                                        className="nav nav-tabs justify-content-end" 
                                        style={{
                                            border: 'none', 
                                            marginRight: '7px'}}>
                                        {
                                            activeTabList.map(x => (
                                                <div onClick={() => {this.openActiveTab(x)}}>
                                                    <li 
                                                        className="nav-item" 
                                                        style={{
                                                            backgroundColor: x.itemKey === this.state.activeTab ? 'white' : 'rgb(230, 230, 230)', 
                                                            borderBottomLeftRadius: '3px', 
                                                            borderBottomRightRadius: '3px', 
                                                            fontSize: 'x-small'
                                                        }}>
                                                        <span 
                                                            className="nav-link d-flex flex-row" 
                                                            style={{color: x.itemKey === this.state.activeTab ? '#71bb03' : 'rgb(145, 145, 145)'}} >
                                                                {x.itemName}
                                                            <div className='ml-1' onClick={() => this.deleteSubItems(x)}>
                                                                <MdClose/>
                                                            </div>
                                                        </span>
                                                    </li>
                                                </div>
                                            ))
                                        }
                                        <li 
                                            className="nav-item pt-1" 
                                            style={{
                                                backgroundColor: 'rgb(218, 104, 104)', 
                                                borderBottomLeftRadius: '3px', 
                                                borderBottomRightRadius: '3px'}}>
                                            <div 
                                                onClick={this.deleteAllTabs} 
                                                className="text-white text-center" style={{width: 30}}>
                                                <RiCloseCircleLine color='white' />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="d-flex" 
                                    style={{
                                        flex: 1, 
                                        width: '100%'
                                    }}>
                                    {
                                        activeTab === 'offerList' &&
                                        <Offers
                                            activeTab = {activeTab}
                                        />
                                    }
                                    {
                                        activeTab === 'bookingList' &&
                                        <Bookings
                                            activeTab = {activeTab}
                                        />
                                    }
                                    {
                                        activeTab === 'rateDetail' &&
                                        <Rates
                                            activeTab = {activeTab}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container"></div>
            </div>
        );
    }
}
