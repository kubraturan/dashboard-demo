import React, { Component } from 'react';
import SideMenuItem from '../components/SideMenuItem';

import {
    BiFile,
    BiBookmark,
    BiBriefcase,
    BiLineChart,
    BiCar,
    BiPieChartAlt2,
    BiSearch
} from 'react-icons/bi';

import {
    FaExchangeAlt,
    FaUsers
} from 'react-icons/fa';

import {
    FiSettings
} from 'react-icons/fi';

import {
    RiCalendarCheckLine
} from 'react-icons/ri';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideMenus : [
                {   
                    itemKey: 'offers',
                    itemName: 'Offers',
                    itemIcon: <BiFile />,
                    subMenuActive: false,
                    subMenuItems: [
                        {
                            sideItemKey: 'offers',
                            sideItemName: 'Offers',
                            itemName: 'Offer List',
                            itemIcon: <BiFile />,
                            itemKey: 'offerList',
                        },
                    ]
                },
                {
                    itemKey: 'bookings',
                    itemName: 'Bookings',
                    itemIcon: <BiBookmark />,
                    subMenuActive: false,
                    subMenuItems:[
                        {
                            sideItemName: 'Bookings',
                            sideItemKey: 'bookings',
                            itemName: 'Booking List',
                            itemIcon: <BiBookmark />,
                            itemKey: 'bookingList',
                        },
                    ]
                },
                {   
                    itemKey: 'rentals',
                    itemName: 'Rentals',
                    itemIcon: <FaExchangeAlt/>,
                },
                {
                    itemKey: 'rates',
                    itemName: 'Rates/Policies',
                    itemIcon: <RiCalendarCheckLine/>,
                    subMenuActive: false,
                    subMenuItems:[
                        {
                            sideItemName: 'Rates/Policies',
                            sideItemKey: 'rates',
                            itemName: 'RT22553 Rate Detail',
                            itemIcon: <BiBookmark />,
                            itemKey: 'rateDetail',
                        },
                    ]
                },
                {
                    itemKey: 'customers',
                    itemName: 'Customers',
                    itemIcon: <FaUsers/>
                },
                {
                    itemKey: 'financials',
                    itemName: 'Financials',
                    itemIcon: <BiLineChart/>
                },
                {
                    itemKey: 'fleet',
                    itemName: 'Fleet',
                    itemIcon: <BiCar/>
                },
                {
                    itemKey: 'company',
                    itemName: 'Company',
                    itemIcon: <BiBriefcase/>
                },
                {
                    itemKey: 'reports',
                    itemName: 'Reports',
                    itemIcon: <BiPieChartAlt2/>
                },
                {
                    itemKey: 'settings',
                    itemName: 'Settings',
                    itemIcon: <FiSettings/>
                },
            ],
            search: false,
            searchList: [],
        };

        this.searchSideMenu = this.searchSideMenu.bind(this);
        this.subMenuActiveSelect = this.subMenuActiveSelect.bind(this);
    }

    /**
     * Menüden arama yapmak için kullanılan metod.
    */
    searchSideMenu(e) {
        var word = e.target.value;
        var elemanList = this.state.searchList || [];

        word = (word || '').trim();

        if (this.state.search === false && word !== '') {
            this.setState({
                search: true,
            });
        }

        if (word === '' || word.length < 3) {
            this.setState({
                search: false,
                searchList: []
            })
            return;
        }
        
        this.state.sideMenus.map(x => {
            if (x.itemName.toLowerCase().includes(word)) {
                var index = elemanList.indexOf(x);
                if (index === -1)
                    elemanList.push(x);
            }
                
            if (x.subMenuItems) {
                var subEleman = x.subMenuItems.filter(y => y.itemName.toLowerCase().includes(word) && y );
                if (subEleman.length > 0) {
                    var index = elemanList.indexOf(x);
                    if (index === -1) {
                        x.subMenuActive = !x.subMenuActive;
                        elemanList.push(x);
                    }
                }
            }

        })
           
        this.setState({
            searchList: elemanList
        })

    }

    /**
     * Seçilen menüyü açmak için kullanılır.
     * @param {object} subMenuItems - Seçilen menü
     */
    subMenuActiveSelect(subMenuItems) {
        if (subMenuItems.subMenuActive != undefined) {
            this.setState(prevState => {
                var index = prevState.sideMenus.indexOf(subMenuItems);
                if (index !== -1) {
                    prevState.sideMenus[index].subMenuActive = !prevState.sideMenus[index].subMenuActive;
                };
                return prevState;
            })
        }
    }

    /**
     * Aktif olan listeyi döndürür
     * @param {object} list - Aktif olan liste
     */
    activeList(list) {
        return (
            list.map(x => (
                <li className="list-group-item border-0 text-muted" style={{fontSize: 'small'}}>
                    <SideMenuItem
                        itemName={x.itemName}
                        itemIcon={x.itemIcon}
                        onClick={() => this.subMenuActiveSelect(x)}
                    />
                    {
                        x.subMenuItems && 
                        x.subMenuActive &&
                        <ol 
                            className="list-group" 
                            style={{
                                border: 'none', 
                                background: 'green'
                            }}>    
                            {
                                x.subMenuItems.map(x => (
                                    <li 
                                        className="list-group-item border-0 text-muted" 
                                        style={{fontSize: 'small'}}>
                                        <SideMenuItem
                                            itemName={x.itemName}
                                            itemIcon={x.itemIcon}
                                            onClick={() => this.props.openSubMenuItems(x)}
                                        />
                                    </li>
                                ))
                            }
                        </ol>
                    }
                </li>
            ))
        )
    }

    render() {
        const {
            searchList,
            sideMenus,
            search
        } = this.state;

        return (
            <div className="d-flex flex-column align-items-center">
                <div 
                    className="m-4 p-1 rounded d-flex justify-content-center" 
                    style={{ 
                        height: 40, 
                        background: '#f8f8f8',
                        color: 'rgb(218, 216, 216)',
                        fontSize: 'small',
                        background: '#f8f8f8'
                    }}>
                    <div 
                        className="d-flex align-items-center mr-2 ml-4" 
                        style={{
                            color: 'rgb(218, 216, 216)', 
                            fontSize: 'small'
                        }}>
                        <BiSearch size={18} style={{color: '#e6e6e6'}}/>
                    </div>
                    <input 
                        style={{
                            border: 'none', 
                            width: '130px', 
                            fontSize: 12, 
                            background: '#f8f8f8',
                            color: '#000',
                            outline:'none'
                        }} 
                        type="text" 
                        placeholder="Quick menu search..." 
                        aria-label="Search"  
                        onChange={this.searchSideMenu}/>
                </div>
                <div 
                    style={{
                        border: 'none', 
                        margin: 0
                    }}>
                    <ol 
                        className="list-group" 
                        style={{
                            border: 'none', 
                            background: 'green'
                        }}>
                        {   
                            search === true ? this.activeList(searchList) : this.activeList(sideMenus)
                        }
                    </ol>
                </div>
            </div>
        );
    }
}
