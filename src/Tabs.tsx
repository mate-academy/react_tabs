import React from 'react';
import './Tabs.scss';

type Props = {
  propTabs: Tab[],
  selectedTabId: string,
  onSelected: (...arg: string[]) => void,
};

export const Tabs: React.FC<Props> = ({ propTabs, selectedTabId, onSelected }) => (
  <div className="tabs-block">
    {propTabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        className="tab-btn"
        onClick={() => {
          onSelected(tab.id, selectedTabId);
        }}
      >
        {tab.title}
      </button>
    ))}

    <p className="tab-content">
      {propTabs.find((tab) => tab.id === selectedTabId)?.content}
    </p>

  </div>
);

// export const Tabs: React.FC<Props> = ({ propTabs, selectedTabId, onSelected }) => (
//   <div className="tabs-block">
//     {propTabs.map((tab) => (
//       <div
//         key={tab.id}
//         className="tab"
//       >
//         <button
//           type="button"
//           className="tab-btn"
//           onClick={() => {
//             onSelected(tab.id, selectedTabId);
//           }}
//         >
//           {tab.title}
//         </button>

//         {(selectedTabId === tab.id) ? (
//           <div>
//             {/* <h1>{`Selected tab is ${selectedTabId}`}</h1> */}
//             <span className="tab-content">{tab.content}</span>
//           </div>
//         ) : ('')}
//       </div>
//     ))}
//   </div>
// );
