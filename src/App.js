// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};



// function App() {
//   return (
//         <div>
//           <h1>{user.name}</h1>
//           <img
//             className="avatar"
//             src={user.imageUrl}
//             alt={'Photo of ' + user.name}
//             style={{
//               width: user.imageSize,
//               height: user.imageSize
//             }}
//           />
//           <h1>Welcome to my app</h1>
//           <MyButton />
//           <h1>About</h1>
//           <p>Hello there.<br />How do you do?</p>
//         </div>
//       );
//     }

    // 

    function App() {
      function handleClick() {
        setCount(count + 1);
      }
      const [count, setCount] = useState(0);

      return (
        <div>
            <h1>{user.name}</h1>
           <img
             className="avatar"
             src={user.imageUrl}
             alt={'Photo of ' + user.name}
             style={{
               width: user.imageSize,
               height: user.imageSize
             }}
           />
           <h1>Welcome to my app</h1>
           <MyButton />
           <h1>About</h1>
           <p>Hello there.<br />How do you do?</p>
        
          <h1>Counters that update separately</h1>
          <MyButton />
          <MyButton />

          <h1>Counters that update together</h1>
          <MyButton1 count={count} onClick={handleClick} />
          <MyButton1 count={count} onClick={handleClick} />

        </div>
      );
    }
    
    function MyButton() {
      const [count, setCount] = useState(0);
    
      function handleClick() {
        setCount(count + 1);
      }
    
      return (
        <button onClick={handleClick}>
          Clicked {count} times
        </button>
      );
    }    

    function MyButton1({ count, onClick }) {
      return (
        <button onClick={onClick}>
          Clicked {count} times
        </button>
      );
    }    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
