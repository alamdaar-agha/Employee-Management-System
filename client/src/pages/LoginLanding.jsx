import LoginLeftSide from '../components/LoginLeftSide'
import { ArrowRightIcon, ShieldIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginLanding = () => {
  const portals = [
    {
      to: '/login/admin',
      title: 'Admin Portal',
      description: 'Manage employees, attendance, payroll, and system settings.',
      icon: ShieldIcon
    },
    {
      to: '/login/employee',
      title: 'Employee Portal',
      description: 'View your profile, track attendance, request time off, and access payslips. ',
      icon: UserIcon
    }
  ]
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center 
      p- 6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen'>
        <div className='w-full max-w-md animate-fade-in relative z-10'>

          {/* Header */}
          <div>
            <h2 className='text-3xl font-medium text-slate-900 tracking-tight mb-3'>
              Welcome Back</h2>
            <p className='text-slate-500'>
              Select your portal to securely access the system.</p>
          </div>
          {/* Portals List */}
          <div className='space-y-4 mt-8'>
            {portals.map((portal) => (
              <Link key={portal.to} to={portal.to} className='group block bg-slate-50 border border-slate-200 
              p-5 rounded-lg sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50'>
                <div className='relative z-10 flex items-center justify-between gap-4 sm:gap-5'>
                  <h3 className='text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors'>
                    {portal.title}</h3>
                  <ArrowRightIcon className='w-4 h-4 text-slate-400 group-hover:text-indigo-600 
                  group-hover:translate-x-1 transition-all duration-300' />
                </div>
                
              </Link>
            ))}
          </div>
          {/* Footer */}
            <div>
              <p className='text-slate-400 text-sm mt-12 text-center md:text-left'>
                © 2026 Your Company. All rights reserved.
              </p>
            </div>

        </div>

      </div>
    </div>
  )
}

export default LoginLanding
