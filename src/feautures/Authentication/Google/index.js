import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { processResponse } from '../../../utils/processResponse'
import { useGoogleAuthMutation } from '../authApiSlice'
import { setAuthStatus, setCredentials } from '../authSlice';

const Google = ({googleButtonWidth}) => {
  const [ googleAuth ] = useGoogleAuthMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async(credentialResponse) => {
    try {
      const response = await googleAuth(credentialResponse);
      const {data, status} = processResponse(response);
      if(status !== 'success') return handleFailedAuth(data, status)
      return handleSuccessAuth(data)
    } catch (error) {
      console.log(error)
      handleFailedAuth(null, error)
    }
  }

  const handleFailedAuth = (data, error) => {
    const status = 'failed'
    if(error===401 && data){
      dispatch(setAuthStatus({status, message: 'Unauthorized. Access Denied!'}))
    }
    else if(!error?.originalStatus){
      dispatch(setAuthStatus({status, message: 'No Server Response'}))
    }
    else{
      dispatch(setAuthStatus({status, message: 'Login Failed'}))
    }
  }

  const handleSuccessAuth = profile => {
    dispatch(setCredentials({user: profile, accessToken: 'coming soon'}))
    navigate('/user/signup/auth-username')
  }

  return (
    <GoogleLogin
        onSuccess={ handleGoogleLoginSuccess }
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
        auto_select
        text="continue_with"
        shape="pill"
        width={`${googleButtonWidth}px`}
        logo_alignment='center'
        prompt='consent'
    />
  )
}

export default Google;
