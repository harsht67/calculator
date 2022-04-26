// styles
import './App.scss'

// components
import Key from './Key'

import { useState } from 'react'

const keys = [
  7,
  8,
  9,
  'del',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  'x',
  'reset',
  '=',
]

function App() {

  const [input, setInput] = useState([])

  const [d, setD] = useState(10)

  const [dAns, setDAns] = useState("n")

  const [theme, setTheme] = useState('theme_1')

  // changes current theme
  const changeTheme = () => {
    let newTheme = theme == 'theme_1' ? 'theme_2' : (theme == 'theme_2' ? 'theme_3' : 'theme_1') 
    
    setTheme(newTheme)
  }  

  // handles key press 
  const inputFunc = (val) => {
    let l = input.length 
    
    if(l == 0){ 
        if(typeof(val) == "number"){
            setInput([val]) 
        }
    }
    else {
      let num = input[l-1]
      let updatedStr = input
      
      if(typeof(val) == "number"){
        
          if(typeof(num) == "number"){
              let n = num*d+val  
              if(dAns == "y"){
                  n/=d
                  setD(prev => prev*10) 
              } 
              updatedStr[l-1] = n
          }
          else {
              if(num == "."){
                  updatedStr[l-2] = (updatedStr[l-2]*d+val)/d
                  setDAns("y")
                  setD(prev => prev*10)
                  updatedStr.pop()
              }
              else{
                  updatedStr[l] = val
              }
          }                
      
      }
      else {
          setD(10) 
          setDAns("n") 

          if(typeof(num) == "number"){
              updatedStr[l] = val
          }
          else {
              updatedStr[l-1] = val
          }

      }

      setInput([...updatedStr])
    }

  } 

  // calculate logic 
  const calcFunc = () => {
    let input2 = input
    let ops = ['/', 'X', '+', '-']
    typeof(input2[input2.length-1]) == "string" && input2.pop() 

    for(let op of ops){
        let i = 0, j = 0    
        let updatedStr = []

        while(i < input2.length) {

            if(input2[i] == op){ 
                if (op == '/') {updatedStr[j-1] = input2[i-1]/input2[i+1]}
                if (op == 'X') {updatedStr[j-1] = input2[i-1]*input2[i+1]} 
                if (op == '+') {updatedStr[j-1] = input2[i-1]+input2[i+1]} 
                if (op == '-') {updatedStr[j-1] = input2[i-1]-input2[i+1]}  
                i+=2
            }
            else {
                updatedStr[j] = input2[i]
                ++i
                ++j
            }

        }

        input2 = updatedStr
    
    }

    setInput([...input2])
  
  }

  // clear display 
  const clearFunc = () => {
    setInput([]) 
  } 

  // delete 
  const delFunc = () => {
    let l = input.length
    let updatedStr = input
    let num = updatedStr[l-1]
    if (typeof(num) == "number" && num > 10) { 
        updatedStr[l-1] = Math.floor(num/10) 
    }
    else {
        updatedStr.pop()
    }
    setInput([...updatedStr])
  }


  return (
    <div className={`app ${theme}`}>

      <div className="calculator">

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
                  onClick={changeTheme}
                >
              
                    <div className="themeBtn__switch"></div>
              
                </div>
            
            </div>
        
        </section>

        <section className="display">
          
          <div>
        
              {input}
        
          </div>
        
        </section>
        
        <section className="keys">

          <Key n={7} inputFunc={inputFunc} />
          <Key n={8} inputFunc={inputFunc} />
          <Key n={9} inputFunc={inputFunc} />

          <button 
            className="del" 
            onClick={delFunc}
          >
            del
          </button>
          
          <Key n={4} inputFunc={inputFunc} />
          <Key n={5} inputFunc={inputFunc} />
          <Key n={6} inputFunc={inputFunc} />
          
          <Key n='+' inputFunc={inputFunc} />
          
          <Key n={1} inputFunc={inputFunc} />
          <Key n={2} inputFunc={inputFunc} />
          <Key n={3} inputFunc={inputFunc} />
          
          <Key n='-' inputFunc={inputFunc} />
          <Key n='.' inputFunc={inputFunc} />
          
          <Key n={0} inputFunc={inputFunc} />
          
          <Key n='/' inputFunc={inputFunc} />
          <Key n='x' inputFunc={inputFunc} />

          <button 
            className="reset"
            onClick={clearFunc}
          >
            reset
          </button>

          <button 
            className="equal" 
            onClick={calcFunc}
          >
              =
          </button>

        </section>

      </div>

    </div>
  )
}

export default App