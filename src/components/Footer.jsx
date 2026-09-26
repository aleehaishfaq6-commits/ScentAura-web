
import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="site-footer">
          <div className="footer-container">

            <div className="footer-grid">

              {/* Brand */}
              <div className="footer-col brand-col">
                <a href="#" className="footer-logo">
                  <span className="logo-accent">Scent</span>Aura
                </a>

                <p className="brand-desc">
                  Discover captivating fragrances curated to complement
                  your unique style. Premium scents, secure shopping, and
                  fast delivery.
                </p>

                <div className="trust-badges">
                  <span className="badge badge-secure">
                    <svg
                      className="badge-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    SSL Secure
                  </span>

                  <span className="badge badge-shipping">
                    <svg
                      className="badge-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    Fast Delivery
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div className="footer-col">
                <h4 className="col-title">Shop Categories</h4>

                <ul className="footer-links">
                  <li><a href="#">Men's Perfumes</a></li>
                  <li><a href="#">Women's Perfumes</a></li>
                  <li><a href="#">Unisex Fragrances</a></li>
                  <li><a href="#">Oud Collection</a></li>
                  <li><a href="#">Gift Sets</a></li>
                </ul>
              </div>

              {/* Customer Care */}
              <div className="footer-col">
                <h4 className="col-title">Customer Care</h4>

                <ul className="footer-links">
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Shipping Policy</a></li>
                  <li><a href="#">Returns & Exchanges</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="footer-col newsletter-col">
                <h4 className="col-title">Stay Updated</h4>

                <p className="newsletter-desc">
                  Subscribe for new fragrances, special discounts,
                  and exclusive offers.
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                  <button type="submit" className="btn-subscribe">
                    Subscribe
                  </button>
                </form>
              </div>

            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">

              <p className="copyright-text">
                &copy; 2026 ScentAura. All rights reserved.
              </p>
              <a
                href="https://github.com/aleehaishfaq6-commits/ScentAura-web"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-watermark"
              >
                Designed & Developed by <strong>Aleeha Ishfaq</strong>
              </a>
              <div className="social-links">

                <a href="#" aria-label="Facebook" className="social-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                <a href="#" aria-label="Instagram" className="social-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a href="#" aria-label="Twitter" className="social-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;