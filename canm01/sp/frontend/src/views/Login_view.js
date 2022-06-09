import React,{useState,useContext} from 'react'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import { AppContext } from '../context'

export const Login_view = () => {

  const { state, dispatch } = useContext(AppContext)

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")

  const handleLogin = (e) => {
		e.preventDefault()
		axios({
			method: 'POST',
			url: 'http://localhost/www/canm01/sp/backend/api/auth.php',
			data: {
			  email,
			  password
			}
		  }).then(response => {
			if(!response.data.error)
        alert(response)
				//context.dispatch({type: 'LOADUSER', payload: response.data})
			else
				setError(response.data.error)
		  }).catch(error=>{
			setError(error)
		  })
	}

  return (
    <>
    <Col xs={{ span: 4, offset: 4 }}>
    <form>
        <h3>Přihlásit se</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Zadejte email"
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Heslo</label>
          <input
            type="password"
            className="form-control"
            placeholder="Zadejte heslo"
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button onClick={handleLogin} className="btn btn-primary">
            Přihlásit
          </button>
        </div>
        {error && <span className='text-danger'>{error}</span>}
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
      </Col>
      <Col xs = {3}></Col>
  </>
  )
}
