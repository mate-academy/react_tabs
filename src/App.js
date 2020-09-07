import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    mainGameField: [[0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]],
    zeros: 16,
  }

  possibleAddNumbers = [2, 2, 2, 2, 2, 4, 2, 2, 2, 2]

  componentDidMount() {
    this.addNewField();
  }

  gameOver = () => {
    this.setState({
      mainGameField: [[0, 0, 0, 0],
        ['G', 'A', 'M', 'E'],
        ['O', 'V', 'E', 'R'],
        [0, 0, 0, 0]],
    });
    for (let i = 0; i < 6; i += 1) {
      setTimeout(() => {
        this.setState((prevState) => {
          const nextMainGameField = [...prevState.mainGameField];

          nextMainGameField[3][0] = 5 - i;

          return ({
            mainGameField: nextMainGameField,
          });
        });
      }, 1000 * i);
    }

    setTimeout(() => {
      this.setState({
        mainGameField: [[0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]],
        zeros: 16,
      });
      this.addNewField();
    }, 6000);
  }

  playerWins = () => {
    this.setState({
      mainGameField: [[0, 0, 0, 0],
        ['Y', 'O', 'U', 0],
        ['W', 'I', 'N', 0],
        [0, 0, 0, 0]],
    });
    for (let i = 0; i < 10; i += 1) {
      setTimeout(() => {
        this.setState((prevState) => {
          const nextMainGameField = [...prevState.mainGameField];

          nextMainGameField[3][0] = 10 - i;

          return ({
            mainGameField: nextMainGameField,
          });
        });
      }, 1000 * i);
    }

    setTimeout(() => {
      this.setState({
        mainGameField: [[0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]],
        zeros: 16,
      });
      this.addNewField();
    }, 10000);
  }

  handleKeyDown = (event) => {
    if (event.preventDefault) {
      event.preventDefault();
    }

    if (event.key === 'ArrowRight') {
      this.setState((prevState) => {
        let plusZeros = 0;
        const tempArr = [];

        for (let i = 0; i < 4; i += 1) {
          tempArr.push([...prevState.mainGameField[i]]);
          tempArr[i].sort((a, b) => {
            if (a === 0 && b !== 0) {
              return -1;
            }

            if (a !== 0 && b !== 0) {
              return 0;
            }

            if (a !== 0 && b === 0) {
              return 1;
            }

            return 0;
          });

          for (let i2 = 3; i2 > 0; i2 -= 1) {
            if (tempArr[i][i2] === tempArr[i][i2 - 1]
              && tempArr[i][i2] !== 0) {
              tempArr[i][i2] *= 2;
              if (tempArr[i][i2] === 2048) {
                this.playerWins();
              }

              tempArr[i].splice(i2 - 1, 1);
              tempArr[i].unshift(0);
              plusZeros += 1;
            }
          }
        }

        return ({
          mainGameField: [...tempArr],
          zeros: prevState.zeros + plusZeros,
        });
      });
      setTimeout(this.addNewField, 500);
    }

    if (event.key === 'ArrowLeft') {
      this.setState((prevState) => {
        let plusZeros = 0;
        const tempArr = [];

        for (let i = 0; i < 4; i += 1) {
          tempArr.push([...prevState.mainGameField[i]]);
          tempArr[i].sort((a, b) => {
            if (a === 0 && b !== 0) {
              return 1;
            }

            if (a !== 0 && b !== 0) {
              return 0;
            }

            if (a !== 0 && b === 0) {
              return -1;
            }

            return 0;
          });

          for (let i2 = 0; i2 < 3; i2 += 1) {
            if (tempArr[i][i2] === tempArr[i][i2 + 1]
              && tempArr[i][i2] !== 0) {
              tempArr[i][i2] *= 2;
              if (tempArr[i][i2] === 2048) {
                this.playerWins();
              }

              tempArr[i].splice(i2 + 1, 1);
              tempArr[i].push(0);
              plusZeros += 1;
            }
          }
        }

        return ({
          mainGameField: [...tempArr],
          zeros: prevState.zeros + plusZeros,
        });
      });
      setTimeout(this.addNewField, 500);
    }

    if (event.key === 'ArrowDown') {
      this.setState((prevState) => {
        let plusZeros = 0;
        const tempArr = [...prevState.mainGameField];

        for (let i = 0; i < 4; i += 1) {
          const tempColumnArr = [];

          for (let i3 = 0; i3 < 4; i3 += 1) {
            tempColumnArr.push(prevState.mainGameField[i3][i]);
          }

          tempColumnArr.sort((a, b) => {
            if (a === 0 && b !== 0) {
              return -1;
            }

            if (a !== 0 && b !== 0) {
              return 0;
            }

            if (a !== 0 && b === 0) {
              return 1;
            }

            return 0;
          });

          for (let i2 = 3; i2 > 0; i2 -= 1) {
            if (tempColumnArr[i2] === tempColumnArr[i2 - 1]
              && tempColumnArr[i2] !== 0) {
              tempColumnArr[i2] *= 2;
              if (tempColumnArr[i2] === 2048) {
                this.playerWins();
              }

              tempColumnArr.splice(i2 - 1, 1);
              tempColumnArr.unshift(0);
              plusZeros += 1;
            }
          }

          for (let i2 = 0; i2 < 4; i2 += 1) {
            tempArr[i2][i] = tempColumnArr[i2];
          }
        }

        return ({
          mainGameField: [...tempArr],
          zeros: prevState.zeros + plusZeros,
        });
      });
      setTimeout(this.addNewField, 500);
    }

    if (event.key === 'ArrowUp') {
      this.setState((prevState) => {
        let plusZeros = 0;
        const tempArr = [...prevState.mainGameField];

        for (let i = 0; i < 4; i += 1) {
          const tempColumnArr = [];

          for (let i3 = 0; i3 < 4; i3 += 1) {
            tempColumnArr.push(prevState.mainGameField[i3][i]);
          }

          tempColumnArr.sort((a, b) => {
            if (a === 0 && b !== 0) {
              return 1;
            }

            if (a !== 0 && b !== 0) {
              return 0;
            }

            if (a !== 0 && b === 0) {
              return -1;
            }

            return 0;
          });

          for (let i2 = 0; i2 < 3; i2 += 1) {
            if (tempColumnArr[i2] === tempColumnArr[i2 + 1]
              && tempColumnArr[i2] !== 0) {
              tempColumnArr[i2] *= 2;
              if (tempColumnArr[i2] === 2048) {
                this.playerWins();
              }

              tempColumnArr.splice(i2 + 1, 1);
              tempColumnArr.push(0);
              plusZeros += 1;
            }
          }

          for (let i2 = 0; i2 < 4; i2 += 1) {
            tempArr[i2][i] = tempColumnArr[i2];
          }
        }

        return ({
          mainGameField: [...tempArr],
          zeros: prevState.zeros + plusZeros,
        });
      });
      setTimeout(this.addNewField, 500);
    }
  }

  addNewField = () => {
    if (this.state.zeros === 0) {
      this.gameOver();
    } else {
      let countOfZeros = 0;
      const randomOfZeros = Math.ceil(Math.random() * this.state.zeros);

      for (let i = 0; i < 4; i += 1) {
        for (let i2 = 0; i2 < 4; i2 += 1) {
          if (this.state.mainGameField[i][i2] === 0) {
            countOfZeros += 1;
            if (countOfZeros === randomOfZeros) {
              const nextMainGameField = [...this.state.mainGameField];

              nextMainGameField[i][i2] = this
                .possibleAddNumbers[Math.floor(Math.random() * 10)];
              this.setState(prevState => ({

                mainGameField: [...nextMainGameField],
                zeros: prevState.zeros - 1,
              }
              ));
            }
          }
        }
      }
    }
  }

  handleTouchStart = (event) => {
    // event.nativeEvent.preventDefault()
    this.clientXStart = event.nativeEvent.changedTouches[0].clientX;
    this.clientYStart = event.nativeEvent.changedTouches[0].clientY;
  }

  handleTouchEnd = (event) => {
    // event.preventDefault()
    this.clientXEnd = event.nativeEvent.changedTouches[0].clientX;
    this.clientYEnd = event.nativeEvent.changedTouches[0].clientY;
    const deltaX = this.clientXStart - this.clientXEnd;
    const deltaY = this.clientYStart - this.clientYEnd;

    if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < -50) {
      this.handleKeyDown({ key: 'ArrowDown' });
    }

    if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 50) {
      this.handleKeyDown({ key: 'ArrowUp' });
    }

    if (Math.abs(deltaY) < Math.abs(deltaX) && deltaX < -50) {
      this.handleKeyDown({ key: 'ArrowRight' });
    }

    if (Math.abs(deltaY) < Math.abs(deltaX) && deltaX > 50) {
      this.handleKeyDown({ key: 'ArrowLeft' });
    }
  }

  render() {
    return (
      <div className="game2048">
        <h1 className="game2048__title">2048</h1>

        <p className="game2048__rulesUkr">
          <strong>ЯК ГРАТИ:</strong>
          {' '}
          Для переміщення блоків
          використовуйте клавіші зі стрілками
          (або свайп на сенсорних екранах). Коли два
          блоки з однаковим номером зтикаються, вони
          зливаються в один сумарний.

        </p>
        <p>
          Досягніть числа
          {' '}
          <strong>2048</strong>
          {' '}
          !!!
        </p>

        <button
          type="button"
          className="game2048__container"
          onKeyDown={this.handleKeyDown}
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.state.mainGameField.map((row, rowIndex) => (

            <ul className="game2048__row">
              {row.map((cell, columnIndex) => (
                <li
                  // key={`${rowIndex}, ${columnIndex}`}
                  className={`game2048__cell game2048__cell--${cell}`}
                >
                  {cell === 0 ? '' : cell}
                </li>
              ))

              }
            </ul>

          ))

          }
        </button>
      </div>
    );
  }
}

export default App;
