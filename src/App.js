// styles
import './App.scss'

const keys = [
  '7',
  '8',
  '9',
  'del',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '/',
  'x',
  'reset',
  '=',
]

function App() {
  return (
    <div className="app">

      <section className="header">

          <span className="title">
            calc
          </span>
        
          <span className="theme">
              theme
          </span>
        
          <div className="themeBtn">

              <div 
                className="themeBtn__container" 
                // onClick={changeTheme}
              >
            
                  <div className="themeBtn__switch"></div>
            
              </div>
          
          </div>
      
      </section>

      <section className="display">
        
        <div>
      
            99 {/* {inputStr} */}
      
        </div>
      
      </section>
      
      <section className="keys">

        {
          keys.map(key => (
            <button
              key={key}
              className={key=='=' ? 'equal' : key}
              data-val={key}
            >
              {key}
            </button>
          ))
        }
        
      </section>

    </div>
  )
}

export default App
