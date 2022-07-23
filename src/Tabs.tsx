import React, { memo, useCallback } from 'react';
import { styled } from '@mui/system';
import classNames from 'classnames';
import { Tab } from './types';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onClick: (id: string) => void;
}

const Wrapper = styled('div')`
  display: flex;
  margin-bottom: 20px;
`;

const Button = styled('div')`
  height: 45px;
  width: 100px;
  text-align: center;
  padding: 13px;
  border-radius: 5px 5px 0 0;
  transition: transform 0.8s, background-color 0.8s;
  cursor: pointer;

  &:hover {
    background-color: #a6a564;
    transform: translateY(-3px);
  }
`;

const Tabs: React.FC<Props> = ({ tabs, selectedTab, onClick }) => {
  const onClickHandler = useCallback((id) => {
    onClick(id);
  }, [onClick]);

  return (
    <div>
      <Wrapper>
        {tabs.map(t => (
          <Button
            className={classNames('', {
              'is-active': t.id === selectedTab.id,
            })}
            key={t.id}
            onClick={() => onClickHandler(t.id)}
          >
            {t.title}
          </Button>
        ))}
      </Wrapper>
      <div data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};

export default memo(Tabs);
