import React, {useState} from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'

const LoginForm = ({role, title, subtitle}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError]= useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    setLoading(true)
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />
      <div className='flex-1 flex items-center justify-center p-6 sm:p-12 bg-white'> 
        <div className='w-full max-w-md animate-fade-in'>

          <Link to='/login' className='inline-flex items-center gap-2 text-sm text-slate-400 mb-10 transition-colors hover:text-slate-700'>
            <ArrowLeftIcon size={16} /> Back to portals
          </Link>

          <div className='mb-8'>
            <h1 className='text-2xl sm:text-3xl font-medium text-zinc-800'>{title}</h1>
            <p className='text-slate-500 text-sm sm:text-base mt-2'>{subtitle}</p>
          </div>

          {error && <div className='bg-red-100 text-red-700 p-3 rounded mb-4'>{error}</div>}

          <form className='space-y-5' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>Email Address</label>
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
              required placeholder='john@example.com' />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
              <div className='relative'>
                <input type={showPassword ? "text" : "password"} name="password" id="password" value={password} 
              onChange={(e) => setPassword(e.target.value)} required className='pr-11' placeholder='••••••••'/>
              <button type='button' onClick={() => setShowPassword(!showPassword)} 
              className='absolute right-3 top-[calc(50%-12px)] text-slate-400 hover:text-slate-600 transition-colors'>
                {showPassword ? <EyeOffIcon size={18}/> : <EyeIcon size={18} />}
              </button> 
              </div>
             
            </div>
            <button type='submit' disabled={loading} className='w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors disabled:bg-indigo-300'>
              {loading && <Loader2Icon className='animate-spin h-4 w-4 mr-2'/>} Sign In
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default LoginForm
