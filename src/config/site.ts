export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Block",
	description: "Your premium propery discovery platform",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "listings",
      href: "/listings",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
	twitter: "https://twitter.com/green-block",}
	,
};
