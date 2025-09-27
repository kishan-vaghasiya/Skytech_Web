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
              </div>
              <div className="product-content">
                <h3>Onion Powder</h3>
                <p>Premium quality dehydrated onion powder with natural flavor and aroma</p>
                <ul className="product-features">
                  <li>✓ 100% Natural</li>
                  <li>✓ No Preservatives</li>
                  <li>✓ Long Shelf Life</li>
                </ul>
                <button className="product-btn">Learn More</button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={0.2}>
            <div className="product-item">
              <div className="product-image">
                <div className="product-bg garlic-bg"></div>
                <div className="product-icon-large">🧄</div>
              </div>
              <div className="product-content">
                <h3>Garlic Powder</h3>
                <p>Finely ground garlic powder with intense flavor and health benefits</p>
                <ul className="product-features">
                  <li>✓ Rich in Antioxidants</li>
                  <li>✓ Pure & Natural</li>
                  <li>✓ Export Quality</li>
                </ul>
                <button className="product-btn">Learn More</button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={0.3}>
            <div className="product-item">
              <div className="product-image">
                <div className="product-bg chips-bg"></div>
                <div className="product-icon-large">🥔</div>
              </div>
              <div className="product-content">
                <h3>Premium Chips</h3>
                <p>Crunchy and delicious food chips made from finest ingredients</p>
                <ul className="product-features">
                  <li>✓ Crispy Texture</li>
                  <li>✓ Multiple Flavors</li>
                  <li>✓ Bulk Packaging</li>
                </ul>
                <button className="product-btn">Learn More</button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Products;
