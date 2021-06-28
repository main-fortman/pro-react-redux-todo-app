import React from 'react';
import './ItemStatusFilter.css';

export const statusFilters = ['All', 'Active', 'Done'];

export default class ItemStatusFilter extends React.Component {

   onClickGroup = (e) => {
    if (e.target && e.target.tagName === 'BUTTON') {
      this.props.onClickStatusFilter(e.target.textContent);
    }
  }

  render() {
    return (
      <div className="btn-group" onClick={this.onClickGroup}>
        {
          statusFilters.map(filter => {
            const style = "btn " + (filter === this.props.filter ? 'btn-info' : 'btn-outline-secondary');
            return <button 
                type="button"
                key={filter}
                className={style}>
                {filter}
              </button>
          })
        }
      </div>
    );
  }
};