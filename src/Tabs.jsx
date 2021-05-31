import React from 'react';

class Tabs extends React.Component {
  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    return (
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={selectedTabId.id === tab.id
              ? 'block__select'
              : 'block'
            }
            onClick={() => {
              onTabSelected(tab.id);
            }}
          >
            <h2
              className={selectedTabId.id === tab.id
                ? 'title__select'
                : 'title'
              }
            >
              {tab.title}
            </h2>

            <div className="paragraph">
              <p>
                {selectedTabId.id === tab.id
                  && tab.content
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Tabs;
