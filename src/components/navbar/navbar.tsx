import {Navbar as NextUINavbar,	NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarItem} from "@nextui-org/react";
import { Kbd, Input } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import {  SearchIcon } from "@/components/icons";
import { SupportIcon } from "../icons/navbar/support-icon";

export default function Navbar () {
	return (
		<NextUINavbar isBordered className="w-full" classNames={{wrapper: "w-full max-w-full",}}>
			<NavbarContent className="w-full max-md:hidden">
				<Input startContent={<SearchIcon />} isClearable className="w-full" classNames={{input: "w-full", mainWrapper: "w-full",}} placeholder="Search..."/>
        	</NavbarContent>
			<NavbarContent justify="end" className="w-fit data-[justify=end]:flex-grow-0">
				<div className="max-md:hidden">
            		<SupportIcon />
          		</div>
			</NavbarContent>
		</NextUINavbar>
	);
};