module.exports = {
	name: "mycodebox",
	displayName: "myCodebox",
	theme: {
		background: {
			default:  "#2f1e2e", // Primary
			success:  "#48b685", // POST, 200 OK, parameter names
			notice:   "#fec418", // PATCH
			warning:  "#f99b15", // PUT
			danger:   "#ef6155", // DELETE
			surprise: "#e96ba8", // Dashboard link, GET, SEND button, branch button, add plugin button
			info:     "#7a4d77", // OPTIONS, HEAD
		},
		foreground: {
			default:  "#b29ab5", // Primary
			success:  "#e7e9db", // Secondary font color
			notice:   "#e7e9db", // Secondary font color
			warning:  "#e7e9db", // Secondary font color
			danger:   "#e7e9db", // Secondary font color
			surprise: "#e7e9db", // Secondary font color
			info:     "#b29ab5", // Secondary font color for info background
		},
		highlight: {
			default: "#7a4d77",  // Sidebar highlight color
			xxs:     "#231925",   // input background
			xs:      "#472c4540", // Hover sidebar and Butons
			sm:      "#472C45",   // Overlay border, Badges
			md:      "#472c45",   // input border
			lg:      "#e96ba880", // placeholder, Button border
			xl:      "#7A5F78cc"    // Gutter Number color, Key
		},

		// The styles object targets sub-components of the Insomnia application.
		styles: {
			sidebar: {
				background: {
					default: "#231925",
				},
			},
			dialog: {
				background: {
					default: "#2f1e2e",
				},
			},
			paneHeader: {
				background: {
					success:  "#2F9D6C",
					notice:   "#E5AB00",
					warning:  "#E08200",
					danger:   "#D6483C",
					surprise: "#D0528F",
					info:     "#61345E"
				}
			},
			transparentOverlay: {
				background: {
					default: "#2f1e2ee6"
				},
			},
		},
	},
};