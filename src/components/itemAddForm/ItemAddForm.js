import React from 'react';
import './ItemAddForm.css';


export default class ItemAddForm extends React.Component {
    render() {
        return (
            <div className='item-add-form'>
                <button 
                    className='btn btn-outline-secondary'
                    onClick={() => this.props.onClickAdd('random')}>
                    Add Item
                </button>
            </div>
        )
    }
}