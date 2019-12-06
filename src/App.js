import React, {Component} from 'react';
import TabsContent from './Components/TabsContent';

class App extends Component {
  state = {
    tabs: [
      {
        title: 'PropTypes',
        content: 'PropTypes експортує ряд валідаторів,'
          + ' які можуть бути використані'
          + ' щоб впевнитись, що ви отримали '
          + 'вірні дані. В наведеному вище '
          + 'прикладі ми використовуємо PropTypes.string.'
          + 'Якщо якийсь проп '
          + 'отримає невірне значення, в консолі '
          + 'JavaScript буде показано попередження.'
          + ' З міркувань продуктивності propTypes '
          + 'перевіряються лише в режимі розробки.\n'
          + '\n',
      },
      {
        title: 'Context',
        content: 'In a typical React application,'
          + ' data is passed '
          + 'top-down (parent to child) via props,'
          + ' but this can be cumbersome for certain '
          + 'types of props (e.g. locale preference, '
          + 'UI theme) that are '
          + 'required by many components '
          + 'within an application. Context '
          + 'provides a way to share values like '
          + 'these between '
          + 'components without having to '
          + 'explicitly pass a prop through '
          + 'every level of the tree.',
      },
      {
        title: 'Запобіжники',
        content: 'Запобіжники – це React-компоненти, '
          + 'які відслідковують помилки JavaScript'
          + 'в усьому дереві своїх '
          + 'дочірніх компонентів, логують їх,'
          + ' а також відображають запасний '
          + 'UI замість дерева компонентів, що зламалось. '
          + 'Запобіжники можуть ловити'
          + ' помилки під час рендеру, в методах життєвого '
          + 'циклу та в конструкторах '
          + 'компонентів, що знаходяться в дереві під ними.',
      },
    ],
  };

  render() {
    const {tabs} = this.state;

    return (
      <div className="App">
        <TabsContent tabs={tabs}/>
      </div>
    );
  }
}

export default App;
