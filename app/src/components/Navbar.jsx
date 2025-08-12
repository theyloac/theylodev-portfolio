import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    // Attach a ref to the <nav> to toggle the 'scrolled' class on it
    const navRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // onScroll: add/remove 'scrolled' class based on window.scrollY
        const onScroll = () => {
            const nav = navRef.current;
            if (!nav) return;
            if (window.scrollY > 50) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        };

        // Run once on mount to set initial state (in case loads scrolled)
        onScroll();

        // Listen for scrolls; clean up on unmount
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Handle mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav ref={navRef} className="navbar fixed-top">
            <div className="nav-container">
                {/* Left: brand text */}
                <a className="navbar-brand" href="#home">
                    TheyLoDev
                </a>

                {/* Desktop navigation links */}
                <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                    <li>
                        <a
                            className="nav-link"
                            href="#home"
                            onClick={handleLinkClick}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            href="#about"
                            onClick={handleLinkClick}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            href="#projects"
                            onClick={handleLinkClick}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            href="#contact"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Custom mobile menu button (matches original design) */}
                <button
                    className={`mobile-menu ${
                        isMobileMenuOpen ? "active" : ""
                    }`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
