import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tab }) => {
  const onTabSelected = (e) => {
    const { target } = e;

    document.querySelector('.tab-selected').className = 'tab';
    target.className = 'tab tab-selected';
    const tabindex = tab.find(title => title.title === e.target.innerText);
    const output = document.querySelector('.output');

    output.innerText = tabindex.content;
  };

  return (
    <section className="tabcontain">
      {
        tab.map((output, index) => (
          (index === 0)
            ? (
              <button
                type="button"
                key={output.title}
                className="tab tab-selected"
                onClick={onTabSelected}
              >
                {output.title}
              </button>
            ) : (
              <button
                type="button"
                key={output.title}
                className="tab"
                onClick={onTabSelected}
              >
                {output.title}
              </button>
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
