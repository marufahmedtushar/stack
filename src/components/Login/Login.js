import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  console.log({ email, password })

  const [email_error, setEmail_error] = useState('');

  const [password_error, setPassword_error] = useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      localStorage.setItem('token',result.data.token)
      navigate('/');
    })
      .catch(error => {
        // alert('service error')
        console.log(error)


         if (email === '' && password === '') {
        	setEmail_error("The field is required"); 
        	setPassword_error("The field is required"); 		
        }
        else if (email === '' && password !== null) {
        	setEmail_error("The field is required"); 		
        }
        else if (email !== null && password === '') {
        	setPassword_error("The field is required"); 		
        }
        
      })
  }



  return (
    // <div className="App">
    //   Email : <input value={email} onChange={handleEmail} type="email" /> <br />
    //   Password : <input value={password} onChange={handlePassword} type="password" /> <br />
    //   <button onClick={handleApi} >Login</button>
    // </div>

<div className="flex justify-center items-center  h-screen ">
	
	<div className="max-w-md p-14 bg-white  rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
		<div>
			<div className="flex justify-start items-end">
				<div><img src="paper 1.png" alt=""/></div>
				<div><span className="pl-2 text-[#4E5D78] font-bold text-2xl">Stack</span></div>
			</div>
			<p className="text-[#404040] pt-4 font-semibold">Sign In to continue with Stack</p>
		</div>
		<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div className="sm:col-span-4">
				<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
					Email
				</label>
				<div className="mt-2">
					<div className="w-80 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
						
						<input
						type="email"
						name="email"
						id="username"
						autoComplete=""
						value={email} onChange={handleEmail}
						className="w-80 block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Enter Email"
						/>
					</div>
					<span className="text-[#dc2626] label-text text-error font-bold">{email_error}</span>
				</div>
			</div>
		</div>

		<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div className="sm:col-span-4">
				<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
					Password
				</label>
				<div className="mt-2">
					<div className="w-80 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
						
						<input
						type="password"
						name="password"
						id=""
						autoComplete=""
						value={password} onChange={handlePassword}
						className="w-80 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Enter Password"
						/>
					</div>
					<span className="text-[#dc2626] label-text text-error font-bold">{password_error}</span>
				</div>
			</div>
		</div>
		<div className="mt-5">
			<button type="button" onClick={handleApi} className="w-80 focus:outline-none text-white bg-[#6941C6] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sign In</button>
		</div>
		{<p className="text-[#64748b]"> Don’t have an account? <Link className="text-[#0f172a] underline underline-offset-1" to="/register">Sign Up</Link> </p>}
	</div>
</div>
  );
}

export default Login