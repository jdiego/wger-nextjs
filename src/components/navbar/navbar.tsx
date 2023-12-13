import {Navbar as NextUINavbar,	NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarItem} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import {  SearchIcon } from "@/components/icons";
import { SupportIcon } from "../icons/navbar/support-icon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";

export default function Navbar () {
	const searchInput = (
		<Input 
			startContent={<SearchIcon />} 
			isClearable className="w-full" 
			classNames={{input: "w-full", mainWrapper: "w-full",}} 
			placeholder="Search..."
		/>
	);
	return (
		<NextUINavbar isBordered className="w-full" classNames={{wrapper: "w-full max-w-full",}}>
			<NavbarContent className="md:hidden">
          		<BurguerButton />
        	</NavbarContent>
			<NavbarContent className="w-full max-md:hidden">
				{searchInput}
        	</NavbarContent>
			<NavbarContent justify="end" className="w-fit data-[justify=end]:flex-grow-0">
				<div className="max-md:hidden">
            		<SupportIcon />
          		</div>
			</NavbarContent>
			<NavbarContent justify="end" className="w-fit data-[justify=end]:flex-grow-0">
				 <NotificationsDropdown />
				 <NavbarContent>
            		<UserDropdown />
          		</NavbarContent>
			</NavbarContent>
		</NextUINavbar>
	);
};