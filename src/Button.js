import React from 'react';

function Button(props) {
  const list = props.props.tabs;
  const buttonIndex = props.props.buttonIndex;

  return list.map( tab =>
    <button className={tab.key !== buttonIndex ? "button" : "isActiv " + "button"}
            onClick={() => props.cliked(tab.content, tab.key)}
            key={tab.key}>{tab.title}
    </button>
  )
}

export default Button;
