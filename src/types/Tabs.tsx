export interface Tab {
  id: string,
  title: string,
  content: string,
}



// import React from 'react';
// import classNames from 'classnames';
// import { TabType } from '../../types/Tabs';

// type Props = {
//   tabs: TabType[],
//   selectedTabId: string,
//   onTabSelected: (tab: TabType) => void,
// };

// export const Tabs: React.FC<Props> = ({
//   tabs,
//   onTabSelected,
//   selectedTabId,
// }) => {
//   const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

//   const clickHandler = (tab: TabType) => {
//     if (tab.id !== selectedTabId) {
//       onTabSelected(tab);
//     }
//   };

//   return (
//     <div data-cy="TabsComponent">
//       <div className="tabs is-boxed">
//         <ul>
//           {tabs.map(tab => (
//             <li
//               key={tab.id}
//               className={classNames({ 'is-active': selectedTabId === tab.id })}
//               data-cy="Tab"
//             >
//               <a
//                 href={`#${tab.id}`}
//                 data-cy="TabLink"
//                 onClick={() => clickHandler(tab)}
//               >
//                 {tab.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="block" data-cy="TabContent">
//         {selectedTab.content}
//       </div>
//     </div>
//   );
// };