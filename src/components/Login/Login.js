import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })

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
        alert('service error')
        console.log(error)
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
			<img src="paper 1.png" alt=""/>
			<span>Stack</span>
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
						className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Enter Email"
						/>
					</div>
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
						className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						placeholder="Enter Password"
						/>
					</div>
				</div>
			</div>
		</div>
		<div className="mt-5">
			<button type="button" className="w-80 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
		</div>
		{<p className="text-[#64748b]"> Don’t have an account? <Link className="text-[#0f172a] underline underline-offset-1" to="/register">Sign Up</Link> </p>}
	</div>
</div>
  );
}

export default Login