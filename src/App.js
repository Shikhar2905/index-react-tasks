import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repository Link</th>
            <th>Deployment Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>my-react-app</td>
            <td>
              <a href="https://github.com/Shikhar2905/my-react-app">Link 1</a>
            </td>
            <td>
              <a href="https://my-react-app-main.vercel.app/">Link 1</a>
            </td>
          </tr>
          <tr>
            <td>react-calculator-app</td>
            <td>
              <a href="https://github.com/Shikhar2905/react-calculator-app">Link 2</a>
            </td>
            <td>
              <a href="https://react-calculator-app-opal.vercel.app/">Link 2</a>
            </td>
          </tr>
          <tr>
            <td>color-picker-react-app</td>
            <td>
              <a href="https://github.com/Shikhar2905/color-picker-react-app">Link 3</a>
            </td>
            <td>
              <a href="https://color-picker-react-app.vercel.app/">Link 3</a>
            </td>
          </tr>
          <tr>
            <td>usertable-react-app</td>
            <td>
              <a href="https://github.com/Shikhar2905/usertable-react-app">Link 4</a>
            </td>
            <td>
              <a href="https://usertable-react-app-puce.vercel.app/">Link 4</a>
            </td>
          </tr>
          <tr>
            <td>age-calculator-react-app</td>
            <td>
              <a href="https://github.com/Shikhar2905/age-calculator-react-app">Link 5</a>
            </td>
            <td>
              <a href="https://age-calculator-react-app-tau.vercel.app/">Link 5</a>
            </td>
          </tr>
          <tr>
            <td>portfolio</td>
            <td>
              <a href="https://github.com/Shikhar2905/portfolio-react-app">Link 6</a>
            </td>
            <td>
              <a href="https://portfolio-react-app-umber.vercel.app/">Link 6</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
