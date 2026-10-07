const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

const mobileNav = document.createElement("nav");
mobileNav.className = "mobile-nav";
mobileNav.setAttribute("aria-label", "Mobile navigation");
mobileNav.innerHTML = nav.innerHTML;
document.querySelector(".site-header").append(mobileNav);

themeToggle.addEventListener("click", () => {
	const isDark = document.body.dataset.theme !== "dark";
	document.body.dataset.theme = isDark ? "dark" : "light";
	themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

menuToggle.addEventListener("click", () => {
	const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
	mobileNav.classList.toggle("is-open", isOpen);
});

mobileNav.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		mobileNav.classList.remove("is-open");
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Open navigation");
	}
});

document.querySelector("#download-cv").addEventListener("click", () => {
	const cv = [
		"MARWAN GOMAA",
		"Computer Science Student | Full Stack .NET",
		"01208874200 | marwangomaa.cs@gmail.com | Zagazig, Egypt",
		"",
		"SUMMARY",
		"Computer Science student at Zagazig University with a strong foundation in C#, C++, SQL, and web development. Focused on Full Stack .NET development and continuously developing problem-solving and software development skills.",
		"",
		"EXPERIENCE",
		"Digital Egypt Pioneers Initiative (DEPI) | Full Stack .NET Trainee | 2026 - Present",
		"Hands-on training in C#, ASP.NET MVC, ASP.NET Web API, Entity Framework Core, and SQL Server. Applying OOP, database concepts, and problem-solving through practical tasks and projects.",
		"",
		"Self-Learning & Academic Training | 2025 - Present",
		"Developed practical knowledge of C#, C++, SQL, HTML, CSS, and JavaScript. Practiced building web applications and working with relational databases. Applied programming and problem-solving concepts through coding exercises and academic projects.",
		"",
		"EDUCATION",
		"Zagazig University - Faculty of Science",
		"B.Sc. in Computer Science | Expected Graduation: 2028",
		"",
		"TECHNICAL SKILLS",
		"Programming: C#, C++",
		"Web: HTML, CSS, JavaScript",
		"Backend: ASP.NET MVC, ASP.NET Web API",
		"Frameworks: Entity Framework Core, OOP",
		"Databases: SQL, SQL Server",
		"Core skills: Problem Solving, Data Structures"
	].join("\n");
	const file = new Blob([cv], { type: "text/plain;charset=utf-8" });
	const fileUrl = URL.createObjectURL(file);
	const link = document.createElement("a");
	link.href = fileUrl;
	link.download = "Marwan-Gomaa-CV.txt";
	link.click();
	URL.revokeObjectURL(fileUrl);
});
