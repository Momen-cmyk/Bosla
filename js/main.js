// Navbar scroll
const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 20)
})

// Mobile nav
const mobileToggle = document.getElementById("mobileToggle")
const mobileNav = document.getElementById("mobileNav")
mobileToggle?.addEventListener("click", () => {
  mobileNav?.classList.toggle("open")
  mobileToggle.textContent = mobileNav?.classList.contains("open") ? "✕" : "☰"
})
mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open")
    if (mobileToggle) mobileToggle.textContent = "☰"
  })
})

// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show")
    })
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
)
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))
