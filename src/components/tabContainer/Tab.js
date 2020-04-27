import React from 'react';

class Tab extends React.Component {
  render() {
    const { tab, active, event } = this.props;
    const { title, id } = tab;

    const handleTab = () => event(tab);

    this.classList = id === active
      ? `tab__item tab__active`
      : `tab__item`;

    this.classForLink = id === active
      ? `tab__link--active tab__link`
      : `tab__lind--disabled tab__link`;

    return (
      <li className={this.classList} id={id} onClick={handleTab}>
        <a href="#" className={this.classForLink}>
          {title}
        </a>
      </li>
    );
  }
}

export default Tab;
