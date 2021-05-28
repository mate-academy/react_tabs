import React from 'react';

class Tabs extends React.Component {
  state = {
    selectedTabId: 'tab-1'
  }

  render() {
    const { selectedTabId } = this.state;
    const { tabs, onTabSelected } = this.props;

    return(
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={selectedTabId === tab.id
              ? "block__select"
              : "block"
            }
            onClick={() => {
              onTabSelected(tab.id)
              this.setState({
                selectedTabId: tab.id
              })
            }}
          >
            <h2
              className={selectedTabId === tab.id
                ? "title__select"
                : "title"
              }
            >
              {tab.title}
            </h2>

            <div className="paragraph">
              <p>
                {selectedTabId === tab.id
                  && tab.content
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Tabs;
