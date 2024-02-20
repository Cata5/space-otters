export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Space Otters",
	logo: "logo.png",
	navItems: [
		{
			label: "About FTC",
			href: "about_ftc",
		},
		{
			label: "Obiective",
			href:"obiective",
		},
		{
			label: "Activity",
			href: "activity",
		},
		{
			label: "Sponsors",
			href: "sponsors",
		},
		{
			label: "Team Members",
			href: "members",
		},
	],	
	instagram_icon: {
		path: "instagram.512x512.png",
	},
	obiective:{
		file_path:"/text/obiective.txt",
	},
	ftc_description: {
		file_path: "/text/ftc.txt",
	},
	activity:[
		{
			title: "Activitate",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Activitate2",
			file_path: "./text/ftc.txt",
		},
	],
	members_img_sizes:{
		width: 300,
		height:300,
	},
	members_items:[
		{
			name:"Daniela Ionica",
			image:"Daniela Ionica.jpg",
			link:"https://www.facebook.com/ionica.dana.5?locale=ro_RO",
			status: "Mentor",
		},
		{
			name:"Anca Andreescu",
			image:"Anca Andreescu.jpg",
			link:"https://www.instagram.com/andreescuanca/",
			status: "Mentor",
		},
		{
			name:"Alexandra Runceanu",
			image:"Alexandra Runceanu.jpg",
			link:"https://www.instagram.com/alexandra_runceanu/",
			status: "Mentor",
		},
		{
			name:"Alexandru Florea",
			image:"Alexandru Florea.jpg",
			link:"https://www.instagram.com/alexandruflorea13/",
			status: "Mentor",
		},
		{
			name:"Catalina Enescu",
			image:"Catalina Enescu.jpg",
			link:"https://www.facebook.com/catalina.enescu.50?locale=ro_RO",
			status: "Mentor",
		},
		{
			name:"Daria Perja",
			image:"Daria Perja.jpg",
			link:"https://www.instagram.com/_damnitsdaria/",
			status: "Mentor",
		},
		{
			name:"Ianis Perja",
			image:"Ianis Perja.jpg",
			link:"https://www.instagram.com/__ianis27__/",
			status:"Team Leader"
		},
		{
			name:"Mihai Diaconescu",
			image:"Mihai Diaconescu.jpg",
			link:"https://www.instagram.com/mihai.276/",
			status:"Head Software"
		},
		{
			name:"Ovidiu Burtan",
			image:"Ovidiu Burtan.jpg",
			link:"https://www.instagram.com/ovo.py/",
			status:"Head Hardware"
		},
		{
			name:"Andra Bancescu",
			image:"Andra Bancescu.jpg",
			link: "https://www.instagram.com/andra_22.6/",
			status:"PR & Marketing",
		},
		{
			name:"Antonio Dumitru",
			image:"Antonio Dumitru.jpg",
			link:"https://www.instagram.com/antonio_dumitru_/",
			status:"Software"
		},
		{
			name:"Cosmin Gava",
			image:"Cosmin Gava.jpg",
			link:"https://www.instagram.com/gava.cosmin/",
			status:"PR & Marketing"
		},
		{
			name:"Eduard Ionescu",
			image:"Eduard Ionescu.jpg",
			link:"https://www.instagram.com/edy4ever78/",
			status:"Hardware"
		},
		{
			name:"Emanuel Zaharia",
			image:"Emanuel Zaharia.jpg",
			link:"https://www.instagram.com/temy.05/",
			status:"Software"
		},
		{
			name:"Iannis Gardin",
			image:"Iannis Gardin.jpg",
			link:"https://www.instagram.com/just_iannis/",
			status:"Hardware"
		},
		{
			name:"Marius-Serug Nicolae",
			image:"Marius-Serug Nicolae.jpg",
			link:"https://www.instagram.com/serug_ser/",
			status:"PR & Marketing"
		},
		{
			name:"Razvan Chineata",
			image:"Razvan Chineata.jpg",
			link:"https://www.instagram.com/eptius/",
			status:"Software"
		},
		{
			name:"Robert Ghita",
			image:"Robert Ghita.jpg",
			link:"https://www.instagram.com/robert._.ghita/ ",
			status:"Hardware",
		},
	],	

	sponsors_items:[
		{
			label: "Ipad",
			description: "description",
			logo:"Ipad.png",
			website: "ipad.ro",
			website_link:"https://ipad.ro/",
			width: 200,
			height:200,
		},
		{
			label: "Frigo Store",
			description: "description",
			logo:"Frigo Store.png",
			website: "firgostore.ro",
			website_link:"",
			width: 200,
			height:200,
		},
		{
			label: "Promote Auto Exclusive",
			description: "description",
			logo:"PAE.png",
			website: "",
			website_link:"",
			width: 200,
			height:200,
		},
		{
			label: "Rian & Partners",
			description: "descripti",
			logo:"Rian.png",
			website: "",
			website_link:"",
			width: 200,
			height:200,
		},
		{
			label: "TLD",
			description: "description",
			logo:"TLD.png",
			website: "",
			website_link:"",
			width: 200,
			height:200,
		},

	],
};
