import React, { useCallback, useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  // eslint-disable-next-line max-len
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus veniam at eaque ipsa error odio voluptates repellendus maxime ullam, laborum aliquid quia, beatae quis ipsum esse unde reprehenderit in. Dolore, quasi minus dignissimos nihil fuga libero corporis eius ipsa a blanditiis accusantium voluptate hic commodi atque. Neque sed officiis ipsam illo facilis pariatur atque, itaque dolorem inventore, deleniti eveniet dolore odit eius placeat numquam sequi tenetur est maxime, sunt consectetur alias rem amet! Sequi odit non porro alias? Aliquam nam illum fugiat perspiciatis excepturi libero nobis magni, saepe harum cum voluptate. Saepe ex assumenda maxime quasi. Laboriosam vero dolore modi assumenda cupiditate velit ipsam esse neque eius maxime! Numquam accusamus dolores tenetur distinctio, atque aspernatur repellat hic. Harum illum doloremque est ipsum? Consectetur quis, ea ipsa fuga accusantium atque debitis dicta molestiae nemo cumque ullam unde molestias. Debitis nobis delectus autem eaque nam non qui odit maiores rem recusandae?' },
  // eslint-disable-next-line max-len
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium consectetur assumenda necessitatibus! Molestias, eveniet veniam quam consectetur saepe adipisci! Fuga, tempora libero. Illo dicta fuga odit corporis cumque harum perferendis adipisci autem voluptatibus? Labore dicta minima, ab ut porro tempore sit voluptatum cumque mollitia fugiat optio dolor minus unde ipsam ratione veritatis quas sequi expedita odit modi voluptas. Quam, ipsum excepturi voluptate eos deserunt ab rem! Doloremque odit distinctio perspiciatis, nobis velit in mollitia ex nemo delectus! Et totam sapiente nesciunt cum a veritatis autem deleniti ea dolorum dolore necessitatibus voluptate, quisquam facilis corrupti sunt, illo provident nulla voluptatem nihil, ut assumenda dolor. Quae accusamus nam obcaecati modi pariatur, voluptatibus dolores omnis eaque incidunt. Sint odit cupiditate reiciendis expedita minus sapiente, esse labore accusamus ipsam earum aliquid voluptates, quidem atque pariatur maiores. Vero vitae minus culpa, ex iure voluptate, nemo cumque minima delectus soluta sint omnis vel voluptatibus alias dolores voluptas quo labore quidem odio? Sequi accusamus unde modi. Libero iusto nobis corporis harum placeat in quis dignissimos enim, natus cumque! Molestias consequatur impedit soluta ratione, expedita porro explicabo odio assumenda, libero distinctio quo reprehenderit ea quam. Aspernatur aliquid pariatur ipsam harum fuga illum sequi dignissimos doloribus doloremque voluptatem.' },
];

export const App: React.FC = () => {
  const [selectedTab, setActiveTab] = useState<Tab>(tabs[0]);
  const selectTab = useCallback((tab: Tab) => {
    setActiveTab(tab || tabs[0]);
  }, []);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        <span className="selected-tab">{`${selectedTab.title}`}</span>
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        selectTab={selectTab}
      />
      <span>{selectedTab.content}</span>
    </div>
  );
};
