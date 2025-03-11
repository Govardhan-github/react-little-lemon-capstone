import React, { useState } from 'react';

const BookingForm = (props) => {
   

    const [date, setDate] = useState('');
    const [times, setTime] = useState('');
    const [guests, setGuests] = useState
    const [ocassion, Setocassion] = useState('');

    const handleChange = (e) => {
       setDate(e);
       props.dispatch(e)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e)
        // Handle form submission logic here
    };

    return (
      <header className='header'>
        <section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                    </div>

                    <div>
                        <label htmlFor='book-time'>Choose Time</label>
                        <select id='book-time' value={times} onChange={(e) => setTime(e.target.value)} required>
                            <option value=''>Select Time</option>
                           {props.availableTimes?.availableTimes.map((time, index) => {
                            return <option key={index} value={time}>{time}</option>
                           })}	
                        </select>
                    </div>

                    <div htmlFor="book-guests">
                        <label>Number of Guests</label>
                        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />    
                    </div>

                    <div>
                        <label htmlFor='book-occasion'>Occasion</label>

                        <select id='book-occasion' value={ocassion} onChange={(e) => Setocassion(e.target.value)} required>
                            <option value=''>Select Occasion</option>
                            <option value='Birthday'>Birthday</option>
                            <option value='Anniversary'>Anniversary</option>
                            <option value='Wedding'>Wedding</option>
                            <option value='Other'>Other</option>
                        </select>
                    </div>
                    <div className='btnReceive'>
                        <button type='submit'>Reserve Table</button>
                    </div>

                </fieldset>
            </form>
        </section>

        </header>
    );
};

export default BookingForm;