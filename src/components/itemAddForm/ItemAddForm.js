import React from 'react';
import './ItemAddForm.css';


export default class ItemAddForm extends React.Component {

    state = {
        text: ''
    }

    onLabelChange = (e) => {
        this.setState({text: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text) {
            this.props.onClickAdd(this.state.text);
            this.setState({text: ''});
            // e.target.reset();
        }
    }

    render() {
        return (
            <form 
                className='item-add-form d-flex'
                onSubmit={this.onSubmit}
            >
                <input 
                    type='text' 
                    placeholder='What needs to be done?'    
                    className='form-control' 
                    value={this.state.text}
                    onChange={this.onLabelChange}
                />
                <button disabled={!this.state.text} className='btn btn-outline-secondary'>
                    Add Item
                </button>
            </form>
        )
    }
}