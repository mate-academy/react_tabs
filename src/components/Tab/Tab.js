import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const idTab = Number(event.nativeEvent.target.id);

    this.props.handleActiveIndex(idTab);
  }

  render() {
    const { tab, activeIndex, currentIndex } = this.props;
    const classActive = (
      activeIndex === currentIndex ? `nav-link active` : 'nav-link'
    );

    return (
      <li className="nav-item">
        <a
          id={currentIndex}
          onClick={this.handleClick}
          className={classActive}
          href="# "
        >
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
  activeIndex: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  handleActiveIndex: PropTypes.func.isRequired,
};

export default Tab;
