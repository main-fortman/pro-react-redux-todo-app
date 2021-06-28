import React from 'react';
import './SearchPanel.css';

export default function SearchPanel({onChangeFilter}) {
    return (
        <input 
          type='text'
          className="form-control search-input"
          placeholder='Type to search'
          onInput={(e) => onChangeFilter(e.target.value)}
        />
      )
};
