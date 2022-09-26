import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '리액트';
  const name2 = '뤼액트';
  const name3 = undefined;
  const style = {
    // background-color는 backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }

  return (
    // <Fragment> => <> </>로 바꿀 수 있다.
    <>
      {/* 2.4.3 */}
      {name === '리액트' ? (
        <h1>{name} 입니다.0</h1>
      ) : (
        <h2>{name}가 아닙니다.</h2>
      )}
      {/* 2.4.4 */}
      <div>{name2 === '리액트' ? <h1>리액트입니다.1</h1> : null}</div>
      <div>{name2 === '리액트' && <h1>리액트입니다.2</h1>}</div>
      {/* 2.4.5 */}
      <div>{name3 || '리액트'}</div>
      {/* 2.4.6 */}
      <div style={style}>{name}</div>
      {/* 2.4.7 */}
      <div className='react'>{name}</div>
      {/* 2.4.8 */}
      <input/>
    </>
    // </Fragment>
  );
}

export default App;
