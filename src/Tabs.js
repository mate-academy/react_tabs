import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tab }) => {
  const onTabSelected = (e) => {
    const { target } = e;

    document.querySelector('.tab-selected').className = 'tab';
    target.className = 'tab tab-selected';
    const tabindex = tab.find(title => title.title === e.target.value);
    const output = document.querySelector('.output');

    output.innerText = tabindex.content;
  };

  return (
    <section className="tabcontain">
      {
        tab.map((output, index) => (
          (index === 0)
            ? (
              <input
                type="button"
                key={output.title}
                className="tab tab-selected"
                onClick={onTabSelected}
                value={output.title}
              />
            ) : (
              <input
                type="button"
                key={output.title}
                className="tab"
                onClick={onTabSelected}
                value={output.title}
              />
            )
        ))
      }
      <hr className="hr" />
      <div className="output">{tab[0].content}</div>
    </section>
  );
};

Tabs.propTypes = { tab: PropTypes.arrayOf(PropTypes.any).isRequired };
export default Tabs;
