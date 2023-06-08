import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { processResponse } from '../../../utils/processResponse'
import { useGoogleAuthMutation } from '../authApiSlice'
import { setCredentials } from '../authSlice'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Google = ({googleButtonWidth}) => {
  const [ googleAuth, { isLoading, isSuccess, error, isError } ] = useGoogleAuthMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      toast.success('signup and login successful')
    }

    if (isError) {
      const message = error.status === 'FETCH_ERROR' ?
        `Error occurred - server down`:
        'Login failed. Please try again!'
      toast.error(message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const handleGoogleLoginSuccess = async(credentialResponse) => {
    try {
      const response = await googleAuth(credentialResponse)
      const {data, status} = processResponse(response)
      if(status === 'success') { handleSuccessAuth(data) }
    } catch (error) {
      console.log(error)
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
