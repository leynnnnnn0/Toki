import LandingFormInput from '../../components/landingFormInput/LandingFormInput'
import './Login.css'

const Login = () => {
  return (
    <div className='login-page HW100'>
        <div className='login-box BORDER20 AUTHORIZATION_BOX'>
            <p className='P1'>Welcome to toki</p>
            <h1 className='sign-in H1'>Sign in</h1>
            <LandingFormInput placeholder="Username or email address" title="Enter your username or email address" className="login-username"/>
            <LandingFormInput placeholder="Password" title="Enter your password" className="login-username"/>
        </div>
    </div>
  )
}

export default Login