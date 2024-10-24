import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useAuth } from '../context/AuthenticationContext'
import { useNavigate } from "react-router-dom";
import CmsButton from "../base/Button"
import CmsTextInput from "../base/TextInput";
import CmsText from '../base/Text';

export default function Login() {
  const [enabled, setEnabled] = useState(true)
  const {login} = useAuth()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Login successful");
      login();
      navigate("/");
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://www.jagranimages.com/images/jagran-icon.svg"
            className="mx-auto h-16 w-auto"
          />
          <div className='text-center'>
          <CmsText text={"Sign in to your account"} preset='heading' weight={"bold"} size={"semiBold"}/> 
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <div className="mt-2">
                </div>
                <CmsTextInput  autoComplete="email" name="email" required inputType='email' labelText={"Email address"} />
              </div>

              <div>
                <CmsTextInput  autoComplete="current-password" name="password" required inputType='password' labelText={"Password"} />
              </div>


              <div>
                <CmsButton onClick={handleSubmit} buttonType='submit' buttonText={"Sign in"} classStyle={"flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white uppercase shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
