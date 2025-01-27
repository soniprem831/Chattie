import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='h-full p-4 w-full bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-teal-400'> Chattie  </span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							// value={username}
							// onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 '
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<a href='#' className='text-sm  hover:underline hover:text-teal-500 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						 <button className='btn btn-block btn-sm mt-2' > {/*disabled={loading}*/}
                            Login
							{/* {loading ? <span className='loading loading-spinner '></span> : "Login"} */}
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Login