import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { TabsPropTypes } from './TabsPropTypes';
import { ChangeTabs } from '../ChangeTabs/ChangeTabs';
import './Tabs.scss';

export class Tabs extends React.PureComponent {
    state={
      id: 'tab-1',
      title: 'Tab 1',
    }

    render() {
      const { list } = this.props;

      return (
        <div
          className="block"
        >
          <h1>
            Selected tab is&nbsp;
            {this.state.title}
          </h1>
          <Nav
            variant="tabs"
            className="Nav"
          >
            {list.map(x => (
              <ChangeTabs
                key={x.id}
                onClick={() => this.setState(
                  {
                    id: x.id,
                    title: x.title,
                  },
                )
                }
                stateId={this.state.id}
                {...x}
              />
            ))}
          </Nav>
        </div>
      );
    }
}
Tabs.propTypes = TabsPropTypes;
