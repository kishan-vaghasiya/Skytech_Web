import React, { useState, useEffect } from 'react';
import './Products.css';
import ScrollAnimation from './ScrollAnimation';

const Products = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className={`section-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">Exported to 50+ countries worldwide</p>
        </div>
        
        <div className="products-grid">
          <ScrollAnimation animation="fade-in-up" delay={0.1}>
            <div className="product-item">
              <div className="product-image">
                <div className="product-bg onion-bg"></div>
                <div className="product-icon-large">🧅</div>
                <div className="product-badge">Best Seller</div>
              </div>
              <div className="product-content">
                <h3>Onion Powder</h3>
                <p>Premium quality dehydrated onion powder with natural flavor and aroma. Perfect for food processing, seasoning, and culinary applications.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Moisture:</span>
                    <span className="spec-value">≤ 6%</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mesh Size:</span>
                    <span className="spec-value">40-60 mesh</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Shelf Life:</span>
                    <span className="spec-value">24 months</span>
                  </div>
                </div>
                <ul className="product-features">
                  <li>✓ 100% Natural & Organic</li>
                  <li>✓ No Preservatives Added</li>
                  <li>✓ ISO 22000 Certified</li>
                  <li>✓ Export Quality Standard</li>
                </ul>
                <div className="product-actions">
                  <button className="product-btn primary">Get Quote</button>
                  <button className="product-btn secondary">View Details</button>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={0.2}>
            <div className="product-item">
              <div className="product-image">
                <div className="product-bg garlic-bg"></div>
                <div className="product-icon-large">🧄</div>
                <div className="product-badge">Premium</div>
              </div>
              <div className="product-content">
                <h3>Garlic Powder</h3>
                <p>Finely ground garlic powder with intense flavor and health benefits. Rich in antioxidants and perfect for global food markets.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Moisture:</span>
                    <span className="spec-value">≤ 8%</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mesh Size:</span>
                    <span className="spec-value">40-80 mesh</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Shelf Life:</span>
                    <span className="spec-value">18 months</span>
                  </div>
                </div>
                <ul className="product-features">
                  <li>✓ Rich in Antioxidants</li>
                  <li>✓ Pure & Natural</li>
                  <li>✓ HACCP Compliant</li>
                  <li>✓ Global Export Ready</li>
                </ul>
                <div className="product-actions">
                  <button className="product-btn primary">Get Quote</button>
                  <button className="product-btn secondary">View Details</button>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={0.3}>
            <div className="product-item">
              <div className="product-image">
                <div className="product-bg chips-bg"></div>
                <div className="product-icon-large">🥔</div>
                <div className="product-badge">New</div>
              </div>
              <div className="product-content">
                <h3>Premium Food Chips</h3>
                <p>Crunchy and delicious food chips made from finest ingredients. Available in multiple flavors and bulk packaging options.</p>
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Flavors:</span>
                    <span className="spec-value">5+ Varieties</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Packaging:</span>
                    <span className="spec-value">Bulk & Retail</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Shelf Life:</span>
                    <span className="spec-value">12 months</span>
                  </div>
                </div>
                <ul className="product-features">
                  <li>✓ Crispy Texture</li>
                  <li>✓ Multiple Flavors</li>
                  <li>✓ Custom Packaging</li>
                  <li>✓ OEM Available</li>
                </ul>
                <div className="product-actions">
                  <button className="product-btn primary">Get Quote</button>
                  <button className="product-btn secondary">View Details</button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Products;
