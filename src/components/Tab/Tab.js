import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const titleTab = event.nativeEvent.target.innerText;

    this.props.handleIndex(titleTab);
  }

  render() {
    const { tab, index, idx } = this.props;
    const classActive = (index === idx ? `nav-link active` : 'nav-link');

    return (
      <li className="nav-item">
        <a onClick={this.handleClick} className={classActive} href="# ">
          {tab.title}
        </a>
      </li>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  handleIndex: PropTypes.func.isRequired,
};

export default Tab;
