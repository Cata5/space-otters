export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Space Otters",
	logo: "logo.png",

	bg_dark: "bg-[#B4C8D8]",
	background_light: "bg-[#064F81]",
	text_on_dark: "bg-[#B4C8D8]",
	text_on_light:"bg-[#064F81]",


	navItems: [
		{
			label: "Obiective",
			href:"obiective",
		},
		{
			label: "Evenimente",
			href: "evenimente",
		},
		{
			label: "Sponsori",
			href: "sponsori",
		},
		{
			label: "Membrii Echipei",
			href: "members",
		},
	],
	evenimente:{
		// dacia_introd:'../text/dacia_introd.docx',
		// dacia_desf:'../text/dacia_desf.docx',
		// ipad_introd:'../text/ipad_introd.docx',
		// ipad_desf:'../text/ipad_desf.docx',
		// antidorg_introd:'../text/antidorg_introd.docx',
		// antidorg_desf:'../text/antidorg_desf.docx',
		// wild_tech_introd:'../text/wild_tech_introd.docx',
		// wild_tech_desf:'../text/wild_tech_desf.docx',
		// scoli_introd:'../text/scoli_introd.docx',
		// scoli_scop:'../text/scoli_scop.docx',
		// scoli_desf:'../text/scoli_desf.docx',
		// meet_and_code_introd:'../text/meet_and_code_introd.docx',
		// meet_and_code_scop:'../text/meet_and_code_scop.docx',
		// meet_and_code_desf:'../text/meet_and_code_desf.docx',
		dacia_introd:'../text/dacia_introd.txt',
		dacia_desf:'../text/dacia_desf.txt',
		
		ipad_introd:'../text/ipad_introd.txt',
		ipad_desf:'../text/ipad_desf.txt',

		donare_cadouri_introd:'../text/donare_cadouri_introd.txt',
		donare_cadouri_desf:'../text/donare_cadouri_desf.txt',

		antidorg_introd:'../text/antidorg_introd.txt',
		antidorg_desf:'../text/antidorg_desf.txt',

		roblod_introd:'../text/roblod_introd.txt',
		roblod_desf:'../text/roblod_scop.txt',

		liga_buc_introd:'../text/liga_buc_introd.txt',
		liga_buc_desf:'../text/liga_buc_desf.txt',

		demo_campulung1_introd:'../text/demo_campulung1_introd.txt',
		demo_campulung1_desf:'../text/demo_campulung1_desf.txt',

		demo_targoviste_introd:'../text/demo_targoviste_introd.txt',
		demo_targoviste_desf:'../text/demo_targoviste_desf.txt',

		wild_tech_introd:'../text/wild_tech_introd.txt',
		wild_tech_desf:'../text/wild_tech_desf.txt',

		scoli_introd:'../text/scoli_introd.txt',
		scoli_scop:'../text/scoli_scop.txt',
		scoli_desf:'../text/scoli_desf.txt',

		meet_and_code_introd:'../text/meet_and_code_introd.txt',
		meet_and_code_scop:'../text/meet_and_code_scop.txt',
		meet_and_code_desf:'../text/meet_and_code_desf.txt',

		cf_introd:'../text/cf_introd.txt',
		cf_scop:'../text/cf_scop.txt',
		cf_desf:'../text/cf_desf.txt',

		gradinita_introd:'../text/gradinita_introd.txt',
		gradinita_scop:'../text/gradinita_scop.txt',
		gradinita_desf:'../text/gradinita_desf.txt',

		nc_introd:'../text/nc_introd.txt',
		nc_scop:'../text/nc_scop.txt',
		nc_desf:'../text/nc_desf.txt',
		
	},	
	instagram_icon: {
		path: "instagram.512x512.png",
	},
	obiective:{
		file_path:"./text/obiective.txt",
	},
	ftc_description: {
		file_path: "./text/ftc.txt",
	},
	activity:[
		{
			title: "Dacia",
			href: "dacia",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Scoli",
			href: "scoli",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Drug-free-future",
			href: "anti-drog",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Vizita iPad",
			href: "vizita-ipad",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Meet And Code",
			href: "meet-and-code",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Wild Tech Meet",
			href: "wild-tech-meet",
			file_path: "./text/ftc.txt",
		},
		{
			title: "WATT's UP Challange",
			href: "demo-campulung",
			file_path: "./text/ftc.txt",
		},
		{
			title: "On stage",
			href: "liga-bucuresti",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Donare Cadouri",
			href: "donare-cadouri",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Chroma Fusion",
			href: "chroma-fusion",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Gradinita 'Sfanta elena'",
			href: "gradinita",
			file_path: "./text/ftc.txt",
		},
		{
			title: "RoBlood",
			href: "roblood",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Roboti pe bune",
			href: "demo-targoviste",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Noaptea Cercetatorilor",
			href: "noaptea-cercetatorilor",
			file_path: "./text/ftc.txt",
		},
		{
			title: "Regionala Bucuresti",
			href: "regionala",
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
			website_link:"https://frigostore.ro/",
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
			website: "rian-partners.com",
			website_link:"https://rian-partners.com/",
			width: 200,
			height:200,
		},
		{
			label: "TLD",
			description: "description",
			logo:"TLD.png",
			website: "",
			website_link:"",
			width: 150,
			height:150,
		},
		{
			label: "HAG",
			description: "description",
			logo:"HAG.png",
			website: "hidroarges.ro",
			website_link:"https://www.hidroarges.ro/",
			width: 150,
			height:150,
		},
		{
			label: "DUS",
			description: "description",
			logo:"DUS.png",
			website: "",
			website_link:"",
			width: 200,
			height:200,
		},

	],
};
