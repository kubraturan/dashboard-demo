import React, { Component } from 'react';
import BookingList from './BookingList';

export default class Bookings extends Component {
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
                    activeTab === 'bookingList' &&
                    <BookingList/>
                }
            </div>
        );
    }
}
