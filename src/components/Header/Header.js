import { useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
function Header() {

const navigate = useNavigate()

const [isOpen, setIsOpen] = useState(false);

const withouSidebarRoutes = ["/login", "/register"];


const { pathname } = useLocation();
if (withouSidebarRoutes.some((item) => pathname.includes(item)))
  return null;

const handleLogout = () => {
	    
	localStorage.removeItem('token')

  return navigate('/login')
  		
};

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

	return (
<div>
	{/*<a href="login">login</a>
	<a href="register">register</a>*/}
	<nav className="bg-[#6941C6] md:px-10 lg:px-24">
		<div className="md:mx-0 lg:mx-8 px-4 sm:px-6 md:px-0 lg:px-0">
			<div className="relative flex h-16 items-center justify-between">
				<div className="absolute inset-y-0 left-0 flex  items-center sm:hidden ">
					
						
								
									<button type="button" onClick={toggleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
									<span className="absolute -inset-0.5"></span>
									<span className="sr-only">Open main menu</span>
									
									<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
									</svg>
									
									<svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
									</button>
								
								
						
				</div>
				<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div className="flex flex-shrink-0 items-center">
						<a href="/" className=" flex items-center justify-center"><img className=" h-10 w-8 mr-2" src="paper 1.png" alt="Your Company" /> <span className="font-bold text-[white]">Stack</span></a>
						
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4 text-[white]">
							
							<NavLink activeClassName="active" aria-current="page" to='/'><p className=" rounded-md px-3 py-3 text-sm font-medium">Home</p></NavLink>
							<NavLink activeClassName="active" to='users'><p className=" rounded-md px-3 py-3 text-sm font-medium">Users</p></NavLink>
							<NavLink activeClassName="active" to='projects'><p className=" rounded-md px-3 py-3 text-sm font-medium">Projects</p></NavLink>
							<NavLink  activeClassName="active" to='tasks'><p className="  rounded-md px-3 py-3 text-sm font-medium">Tasks</p></NavLink>
							<NavLink activeClassName="active" to='reporting'><p className=" rounded-md px-3 py-3 text-sm font-medium">Reporting</p></NavLink>
						</div>
					</div>
				</div>
				<div className="hidden lg:block md:block">
						<div class=" absolute inset-y-0 right-0 flex items-end pr-2 sm:static sm:inset-auto  sm:pr-0">
					<div className="relative ml-3 mb-2">
						<i className="md:px-0.5 lg:px-3 text-[white] fa-solid fa-magnifying-glass"></i>
						<i className="md:px-0.5 lg:px-3 text-[white] fa-solid fa-gear"></i>
						<i className="md:px-0.5 lg:px-3 text-[white] fa-solid fa-bell"></i>
					</div>
					<button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
					<span class="absolute -inset-1.5"></span>
					
					<img src="Avatar.png" className="h-8 w-8 rounded-full" style={{ height : '40px', width: '40px', borderRadius: '50%' }} alt="..." />
					
					
					</button>
					
					<div class="relative ml-3 mb-2">
						
						{localStorage.getItem('token')?
				
				<button type="button" onClick={handleLogout}  className="relative btn btn-sm btn-primary font-medium  text-[white] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Logout</button>
				:
				<>
				</>
			}
						
						
						
						
						
						
						
					</div>
				</div>
				</div>
				
			</div>
		</div>
		
		<div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu" >
			<div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
				
				<NavLink activeClassName="active" to="/" ><span className=" text-white px-3 py-2 text-base font-medium">Home</span></NavLink>
				<NavLink activeClassName="active" to="users" ><span className="text-gray-300 px-3 py-2 text-base font-medium">Users</span></NavLink>
				<NavLink activeClassName="active" to="#" ><span className="text-gray-300  px-3 py-2 text-base font-medium">Projects</span></NavLink>
				<NavLink activeClassName="active" to="#" ><span className="text-gray-300  px-3 py-2 text-base font-medium">Tasks</span></NavLink>
				<NavLink activeClassName="active" to="#" ><span className="text-gray-300  px-3 py-2 text-base font-medium">Reporting</span></NavLink>
				{localStorage.getItem('token')?
				<NavLink activeClassName="active" to="#" onClick={handleLogout}><span className="text-gray-300  block rounded-md px-3 py-2 text-base font-medium">Logout</span></NavLink>

				:
				<>
				</>
			}
				

			</div>
		</div>
	</nav>
</div>
	)
}

export default Header