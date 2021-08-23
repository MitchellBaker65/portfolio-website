const darkTheme = window.matchMedia("(prefers-color-scheme: dark)")

var icon = ""

if (darkTheme.matches) {
	icon = "images/faviconLight.svg"
} else {
	icon = "images/faviconDark.svg"
}

document.getElementById("browserIcon").attributes.getNamedItem("href").value =
	icon
