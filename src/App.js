import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './redux/actions/index'

function App() {
  const data = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className='container'>
        <h1>Increment / Decrement Counter</h1>
        <h4>Using React Redux</h4>
        <div className='quantity'>
          <button
            className='quantity__minus'
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </button>
          <input type='text' value={data} />
          <button
            className='quantity__minus'
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
