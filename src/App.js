import React from 'react';
import './App.css';
import tabs from './box/tabs';

class App extends React.PureComponent {
  state = {
    id: 0,
  }

  switch = (event) => {
    event.preventDefault();
    const number = event.target.getAttribute('href');

    this.setState(() => ({
      id: number,
    }));
  }

  blur = event => event.target.classList.remove('active');

  focus = event => event.target.classList.add('active');

  render() {
    return (
      <>
        <section className="tab__tittle">

          {tabs.map((tab, index) => (
            <React.Fragment key={tab.title}>
              <a
                href={`${index}`}
                className="tab__element"
                onClick={this.switch}
                onBlur={this.blur}
                onFocus={this.focus}
              >
                {tab.title}
              </a>
            </React.Fragment>
          ))}
        </section>

        <section className="tab__content">
          <p>{tabs[this.state.id].content}</p>
        </section>
      </>
    );
  }
}

const tab = (event) => {
  if (event.key === 'Tab' || event.target.className === 'tab__element') {
    event.target.click();
  }
};

document.addEventListener('keyup', tab);

export default App;
