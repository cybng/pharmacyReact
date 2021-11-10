import React from 'react'

export default function Header() {
	return (
		<div>
			<header className="flex justify-between items-center bg-gray-600 p-4">
						<div className="flex text-white">Admin Panel</div>
						{/*<div className="flex">Search Box</div>*/}
						<div className="flex ">  
								 <span className="px-2 text-white">Login</span>
								 {/*<span className="px-2 text-white">Login</span>
								 <span className="px-2 text-white">Login</span>
								 <span className="px-2 text-white">Login</span>*/}  
						</div>
					</header>
		</div>
	)
}