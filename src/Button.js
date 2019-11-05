import React from 'react';

function Button(props) {
  const button = [];
  const list = props.props.tabs;
  const buttonIndex = props.props.buttonIndex;

  for (const tab of list) {
    button.push(<button className={tab.key !== buttonIndex ? "button" : "isActiv " + "button"}
                        onClick={() => props.cliked(tab.content, tab.key)}
                        key={tab.key}>{tab.title}
                </button>)
  }
  return button;
}

export default Button;
