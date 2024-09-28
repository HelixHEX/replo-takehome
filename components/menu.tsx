import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";

const Menu = () => {
	return (
		<>
			<Menubar className="ml-8 h-full bg-[#FCFCFC]  p-0 pl-[2px] mt-0 py-0">
				<MenubarMenu>
					<MenubarTrigger className="">Product</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Share</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</>
	);
};

export default Menu;

// // type Section = {
// //   label: string;
// //   colSpan?: number;
// //   children: ChildMenu[];
// // };

// // type ChildItem = {

// // }

// // type ChildMenu = {
// //   label: string;
// //   href: string;
// //   type: "default" | "section"
// //   icon?: React.ReactNode;
// //   description?: string;
// // };

// // type MenuItem = {
// //   label: string;
// //   href?: string;
// //   children?: ChildMenu[];
// //   sections?: Section[];
// //   footer?: string | React.ReactNode;
// // };

// type MenuItem = {
//   label: string;
//   href?: string;
//   cols?: number;
//   type: "default" | "cols" | "label";
//   width?: number | string;
//   height?: number | string;
//   children?: MenuItem[];
//   icon?: React.ReactNode;
//   description?: string;
//   colSpan?: number;
//   tag?: "New";
//   tagType?: "secondary";
// };

// const menu: MenuItem[] = [
//   {
//     label: "Product",
//     type: "cols",
//     cols: 2,
//     children: [
//       {
//         label: "AI",
//         type: "default",
//         description: "Integrated AI assistant",
//         href: "/product/ai",
//       },
//       {
//         label: "Docs",
//         type: "default",
//         description: "Simple & powerful",
//         href: "product/docs",
//       },
//       {
//         label: "Wikis",
//         type: "default",
//         description: "Centralize your knowledge",
//         href: "product/wikis",
//       },
//       {
//         label: "Projects",
//         type: "default",
//         description: "Connected, flexible workflows",
//         href: "product/projects",
//       },
//       {
//         label: "Calendar",
//         type: "default",
//         description: "Time and work, together",
//         href: "product/calendar",
//       },
//       {
//         label: "Sites",
//         type: "default",
//         description: "Publish anything, fast",
//         href: "product/sites",
//       },
//       {
//         label: "Template Gallery",
//         type: "default",
//         description: "Setups to get you started",
//         href: "/templates",
//       },
//       {
//         label: "Customer Stories",
//         type: "default",
//         description: "See how teams use Notion",
//         href: "/customers",
//       },
//       {
//         label: "Connections",
//         type: "default",
//         description: "Connect your tools to Notion",
//         href: "/connections",
//       },
//     ],
//   },
//   {
//     label: "Download",
//     type: "default",
//     children: [
//       {
//         label: "Notion",
//         type: "label",
//         href: "/download",
//       },
//       {
//         label: "Calendar",
//         type: "label",
//         href: "/product/calendar/download",
//       },
//       {
//         label: "Web Clipper",
//         type: "label",
//         href: "/web-clipper",
//       },
//     ],
//   },
//   {
//     label: "Solutions",
//     type: "cols",
//     cols: 3,
//     children: [
//       {
//         label: "By team size",
//         type: "default",
//         colSpan: 2,
//         children: [
//           {
//             label: "Enterprise",
//             type: "default",
//             description: "Advanced features for your org",
//             href: "/enterprise",
//           },
//           {
//             label: "Small business",
//             type: "default",
//             description: "Run your team on one tool",
//             href: "/teams",
//           },
//           {
//             label: "Personal",
//             type: "default",
//             description: "Free for individuals",
//             href: "/personal",
//           },
//         ],
//       },
//       {
//         label: "By Team Function",
//         type: "default",
//         colSpan: 1,
//         children: [
//           {
//             label: "Design",
//             type: "default",
//             href: "/product/notion-for-design",
//           },
//           {
//             label: "Engineering",
//             type: "default",
//             href: "/product/notion-for-engineering",
//           },
//           {
//             label: "Product",
//             type: "default",
//             href: "/product/notion-for-product",
//           },
//           {
//             label: "Managers",
//             type: "default",
//             href: "/product/notion-for-managers",
//           },
//         ],
//       },
//       {
//         label: "Notion For",
//         type: "default",
//         colSpan: 1,
//         children: [
//           {
//             label: "Startups",
//             type: "default",
//             href: "/startups",
//           },
//           {
//             label: "Remote work",
//             type: "default",
//             href: "/remote",
//           },
//           {
//             label: "Students",
//             type: "default",
//             href: "/product/notion-for-education",
//           },
//           {
//             label: "Nonprofits",
//             type: "default",
//             href: "/nonprofits",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     type: "default",
//     children: [
//       {
//         label: "Blog",
//         type: "default",
//         href: "/blog",
//       },
//       {
//         label: "Notion Academy",
//         type: "default",
//         href: "/help/notion-academy",
//       },
//       {
//         label: "Guides & tutorials",
//         type: "default",
//         href: "/help/guides",
//       },
//       {
//         label: "Webinars",
//         type: "default",
//         href: "/webinars",
//       },
//       {
//         label: "Help Center",
//         type: "default",
//         href: "/help",
//       },
//       {
//         label: "API docs",
//         type: "default",
//         href: "https://developers.notion.com",
//       },
//       {
//         label: "Community",
//         type: "default",
//         href: "https://www.notion.so/notion/Notion-Community-04f306fbf59a413fae15f42e2a1ab029",
//       },
//       {
//         label: "Hire a consultant",
//         type: "default",
//         href: "/consulting-partners",
//       },
//       {
//         label: "Become a partner",
//         type: "default",
//         href: "/become-a-partner",
//       },
//     ],
//   },
//   {
//     label: "Pricing",
//     type: "default",
//     href: "/pricing",
//   },
// ];

// const Menu = () => {
//   return (
//     <div className="ml-[34px] w-[600] flex h-full">
//       {menu.map((item, index) => (
//         <MenuItem item={item} key={index} />
//       ))}
//     </div>
//   );
// };

// const MenuItem = ({ item }: { item: MenuItem }) => {
//   return (
//     <div className="flex flex-col w-full h-full">
//       {item.type === "default" ? (
//         <div className="py-[3px] px-[10px] rounded-md hover:bg-gray-100 hover:cursor-pointer">
//           {item.label}
//           {item.children ? item.children.map((child, index) => <>{}</>) : null}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default Menu;

// (
//   <div className="py-1 px-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
//     {item.label}
//   </div>
// )
