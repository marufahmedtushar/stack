import { useState, useEffect, useMemo } from 'react' 
import axios from "axios";
import '../../frontend/style.css';

function Users() {

 const [users, setUsers] = useState([]);

 const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
        const extraDetails = response.data.data.map((user) => ({
          ...user,
          
          extraDetails: {
            status: getRandomStatus(),
            about1: getRandomAbout1(),
            about2: getRandomAbout2(),
          },
        }));
        setUsers(extraDetails);
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentPage]);


  const getRandomAbout1 = () => {
    const about1 = ['Some dummy Content', 'Design software', 'Data prediction', 'Productivity app','Web app integrations','Sales CRM','Automation and workflow'];
    const randomIndex = Math.floor(Math.random() * about1.length);
    return about1[randomIndex];
  };
   const getRandomAbout2 = () => {
    const about2 = ['Brings all your news into one place', 'Super lightweight design app', 'AI and machine learning data', 'Time management and productivity','Connect web apps seamlessly','Web-based sales doc management','Time tracking invoicing and expenses'];
    const randomIndex = Math.floor(Math.random() * about2.length);
    return about2[randomIndex];
  }; 
   const getRandomStatus = () => {
    const status = ['Random Sticker Label', 'Churned', 'Customer'];
    const randomIndex = Math.floor(Math.random() * status.length);
    return status[randomIndex];
  };

    const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };


	return (
<div>
	<section className="section3">
		<div className=" lg:px-0">
			<div className=" isolate   bg-base-200 px-6  shadow-2xl  lg:gap-x-20  md:px-10 lg:px-24 lg:py-12">
				<div className="heading-sec3 flex items-center justify-between px-0 py-4 md:px-0 lg:px-8 md:py-4 lg:py-0">
					
					<div>
						<p className="text-[#101828] text-1xl md:text-2xl lg:text-2xl font-semibold">Users</p>
					</div>
					<div className="">
						<button type="button" class="mr-4 px-2 md:px-5 lg:py-5 py-2.5 mb-0 md:mb-2 lg:mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><i class="fa-solid fa-cloud-arrow-up"></i> Import</button>
						<button type="button" class="  focus:outline-none text-white bg-[#7F56D9]  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 md:px-5 lg:py-5 py-2.5 mb-0 md:mb-2 lg:mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><i class="fa-solid fa-plus"></i> Add User</button>
					</div>
				</div>
				
				<div class="mb-0 md:mb-4 lg:mb-20 relative overflow-x-auto shadow-md sm:rounded-lg mx-0 my-4 md:mx-0 lg:mx-8 md:my-4 lg:my-0">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-1 md:p-4 lg:p-4">
									<div class="flex items-center">
										<input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-[#7F56D9] bg-gray-100 border-gray-300 rounded focus:ring-[#7F56D9] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
										<label for="checkbox-all-search" class="sr-only">checkbox</label>
									</div>
								</th>
								<th scope="col" className="text-[#667085] px-1 md:px-1 lg:px-6  lg:py-3">
									User Info
								</th>
								<th scope="col" className="text-[#667085] px-1 md:px-1 lg:px-6  lg:py-3">
									About
								</th>
								<th scope="col" className="text-[#667085] px-1 md:px-1 lg:px-6  lg:py-3">
									Status
								</th>
								<th scope="col" className="text-[#667085] px-1 md:px-1 lg:px-6  lg:py-3">
									
								</th>
								
							</tr>
						</thead>

						<tbody>
							{users.map((item) => {
							return (
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-1 md:w-4 lg:w-4 p-1 md:p-2 lg:p-4">
									<div class="flex items-center">
										<input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-[#7F56D9] bg-gray-100 border-gray-300 rounded focus:ring-[#7F56D9] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
										<label for="checkbox-table-search-1" class="sr-only">checkbox</label>
									</div>
								</td>
								<th scope="row" class="px-1 md:px-2 lg:px-6 py-2 md:py-4 lg:py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									<div className="flex flex-col md:flex-row lg:flex-row">
										<div className="pr-2">
											<img src={item.avatar} className="" style={{height:'40px',width:'40px',borderRadius:'50%'}} alt=""/>
										</div>
										<div className="flex flex-col">
											<div>{item.first_name} {item.last_name}</div>
											<div>{item.email}</div>
										</div>
									</div>
									
									
								</th>
								<td class="px-1 md:px-2 lg:px-6 py-2 md:py-4 lg:py-2">
									<div className="flex flex-col">
										<div className="text-[#101828]">{item.extraDetails.about1}</div>
										<div className="text-[#667085]">{item.extraDetails.about2}</div>
									</div>
									
									
								</td>
								<td class="px-1 md:px-2 lg:px-6 py-2 md:py-4 lg:py-2">
									{
									item.extraDetails.status === 'Random Sticker Label' || item.extraDetails.status === 'Customer'?
									<span className=" bg-green-100 text-green-800 text-xs text-wrap md:text-nowrap lg:text-nowrap font-medium  px-0.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{item.extraDetails.status}</span>
									:
									<>
									<span class=" bg-gray-100 text-gray-800 text-xs  font-medium  px-0.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{item.extraDetails.status}</span>
									</>
									}

									
									
									
								</td>
								<td class="px-1 md:px-2 lg:px-6 py-2 md:py-4 lg:py-2">
									<div className="flex items-center justify-between">
										<i className="fa-solid fa-trash"></i>
										<i className="fa-solid fa-pen"></i>
									</div>
								</td>
							</tr>
							);
							})}
						</tbody>
					</table>

					<div className="flex items-center justify-between p-1 md:p-4 lg:p-4">
						<button onClick={handlePrevClick} disabled={currentPage === 1}
						type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev</button>
						<span> Page {currentPage} of 10</span>
						<button onClick={handleNextClick} disabled={currentPage === 10} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next</button>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
</div>
	)
}

export default Users