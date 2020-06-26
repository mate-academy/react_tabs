import React from 'react';
import tabs from '../../box/tabs';
/* eslint-disable */
class Switch extends React.Component {
  state = {};

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;

    if (id === prevProps.match.params.id) {
      return true;
    }

    return false;
  }

  render() {
    const { id } = this.props.match.params;

    return (
      <div className="tab__content">
        <p>{tabs[id].content}</p>
      </div>
    );
  }
}

const swich = (event) => {
  if (event.key === 'Tab' || event.target.className === 'tab__element') {
    event.target.click();
  }
};

let active;

setTimeout(() => {
  active = document.querySelector('.tab__tittle');
  active.addEventListener('keyup', swich);
}, 0);

export default Switch;
