"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
interface SidebarProps {
	children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({ children }) => {

	const pathName = usePathname();

	const routes = useMemo( () => [
		{
			label: 'Home',
			active: pathName !== '/search',
			href: '/',
			icon: HiHome
		},
		{
			label: 'Search',
			active: pathName === '/search',
			href: '/search',
			icon: BiSearch
		}
	], []);

	return (
		<div className="">
			Sidebar!
		</div>
	);
}

export default Sidebar;