import React from 'react';
import { TabProps } from '../../props/TabProps';

export const Tab = props => <p className="text-monospace">{props.children}</p>;

Tab.propTypes = TabProps;
