---
title: "Daylighting Design Analysis - Glasgow Residential Project"
category: Smart Building
description: "Comprehensive daylighting analysis for a 2-storey semi-detached house in Glasgow using manual calculations and Dialux simulations."
tech: [Dialux, Daylight Factor Calculations, BS EN 17037, Daylight Autonomy, BIM]
image: /assets/img/projects/daylight-design/dialux_daylight-1.png
importance: 1
---

<div class="daylight-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Daylighting Design Analysis</h1>
    <p class="project-subtitle">Glasgow Residential Project</p>
    <div class="project-meta">
      <span class="badge">Building Services</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <div class="project-visualization">
    <div class="visualization-description">
      <p>This project evaluates daylight performance for a semi-detached residential house in Glasgow, comparing manual Daylight Factor calculations with Dialux simulations to optimize natural lighting while meeting UK building standards.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/daylight-design/dialux_daylight-1.png" 
             alt="House Overview" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Diagram 01: House Overview</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/daylight-design/dialux_daylight-17.png" 
             alt="3D House Rendering" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">3D Overview of the Property</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>The project analyzes daylight performance for a newly constructed three-bedroom end-of-terrace house located at Market Road, Kirkintilloch, Glasgow (G66 3JL). The analysis includes both manual Daylight Factor calculations and computer simulations using Dialux to evaluate compliance with BS EN 17037 and other relevant standards.</p>
  </div>

  <!-- Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Project Overview
    </h2>
    
    <div class="project-description">
      <p>The daylight analysis covers eight primary spaces across two floors, evaluating both quantitative metrics (Daylight Factor, illuminance levels) and qualitative aspects (light distribution, glare potential). The methodology combines traditional manual calculations with advanced computer simulations to validate results.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/daylight-design/dialux_daylight-28.png" 
               alt="Ground Floor Plan" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Ground floor plan with dimensions</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/daylight-design/dialux_daylight-29.png" 
               alt="First Floor Plan" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">First floor plan with dimensions</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Key Project Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">2</span>
          <span class="spec-label">Floors</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">8</span>
          <span class="spec-label">Primary Spaces</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">10</span>
          <span class="spec-label">Window Openings</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">2.8m</span>
          <span class="spec-label">Ceiling Height</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Building Background Section -->
  <section class="project-section background-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Building Background
    </h2>
    
    <div class="building-details">
      <h3 class="subsection-header">Property Characteristics</h3>
      
      <div class="detail-grid">
        <div class="detail-item">
          <span class="detail-icon">🏠</span>
          <span class="detail-label">Address:</span>
          <span class="detail-value">Market Road, Kirkintilloch, Glasgow, G66 3JL</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">📏</span>
          <span class="detail-label">Type:</span>
          <span class="detail-value">Semi-detached house</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">🛏️</span>
          <span class="detail-label">Bedrooms:</span>
          <span class="detail-value">3</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">🌍</span>
          <span class="detail-label">Orientation:</span>
          <span class="detail-value">Primary facade faces North</span>
        </div>
      </div>
      
      <div class="location-images">
        <div class="location-card">
          <img src="/assets/img/projects/daylight-design/dialux_daylight-3.png" 
               alt="Property Location Map" 
               class="location-img"
               loading="lazy">
          <p class="location-caption">Location map of the property</p>
        </div>
        <div class="location-card">
          <img src="/assets/img/projects/daylight-design/dialux_daylight-4.png" 
               alt="Street View" 
               class="location-img"
               loading="lazy">
          <p class="location-caption">Street view of the property</p>
        </div>
      </div>
    </div>
    
    <div class="room-distribution">
      <h3 class="subsection-header">Room Distribution</h3>
      <img src="/assets/img/projects/daylight-design/dialux_daylight-30.png" 
           alt="Room Distribution Table" 
           class="distribution-img"
           loading="lazy">
    </div>
  </section>

  <!-- Standards & Requirements Section -->
  <section class="project-section standards-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Standards & Requirements
    </h2>
    
    <div class="standards-intro">
      <p>The daylighting design follows several key UK standards and guidelines to ensure adequate natural lighting while maintaining energy efficiency and visual comfort.</p>
    </div>
    
    <div class="standard-cards">
      <div class="standard-card">
        <h4>BS EN 17037: Daylight in Buildings</h4>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-11.png" 
             alt="Sunlight Exposure Recommendations" 
             class="standard-img"
             loading="lazy">
        <p>Defines three levels of compliance for daylight provision with minimum requirements for residential spaces.</p>
      </div>
      
      <div class="standard-card">
        <h4>SLL Code for Lighting 2022</h4>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-7.png" 
             alt="Corridor Lighting Requirements" 
             class="standard-img"
             loading="lazy">
        <p>Provides illuminance level recommendations for different spaces and activities.</p>
      </div>
      
      <div class="standard-card">
        <h4>BS EN 12464-1:2021</h4>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-8.png" 
             alt="Bathroom Lighting Requirements" 
             class="standard-img"
             loading="lazy">
        <p>Specifies maintained illuminance levels for visual comfort and effectiveness in interior spaces.</p>
      </div>
    </div>
    
    <div class="lighting-requirements">
      <h3 class="subsection-header">Key Lighting Requirements</h3>
      <div class="requirements-grid">
        <div class="requirement-item">
          <span class="req-icon">🛋️</span>
          <span class="req-area">Lounges</span>
          <span class="req-value">≥200 lux</span>
        </div>
        <div class="requirement-item">
          <span class="req-icon">🛏️</span>
          <span class="req-area">Bedrooms</span>
          <span class="req-value">≥100 lux</span>
        </div>
        <div class="requirement-item">
          <span class="req-icon">🍳</span>
          <span class="req-area">Kitchens</span>
          <span class="req-value">≥500 lux</span>
        </div>
        <div class="requirement-item">
          <span class="req-icon">🚿</span>
          <span class="req-area">Bathrooms</span>
          <span class="req-value">≥200 lux</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Methodology
    </h2>
    
    <div class="methodology-intro">
      <p>The daylight analysis was conducted using two complementary approaches: manual Daylight Factor calculations and computer simulations using Dialux software.</p>
    </div>
    
    <div class="methodology-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Data Collection</h4>
          <p>Gathered all architectural plans, window specifications, material reflectances, and site context information.</p>
          <img src="/assets/img/projects/daylight-design/dialux_daylight-33.png" 
               alt="Room Details Table" 
               class="step-img"
               loading="lazy">
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Manual Calculations</h4>
          <p>Performed Daylight Factor calculations for each room following BRE Digest 309/310 methods.</p>
          <img src="/assets/img/projects/daylight-design/dialux_daylight-59.png" 
               alt="Manual Calculation Example" 
               class="step-img"
               loading="lazy">
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Dialux Modeling</h4>
          <p>Created detailed 3D model in Dialux with accurate material properties and Glasgow climate data.</p>
          <img src="/assets/img/projects/daylight-design/dialux_daylight-18.png" 
               alt="Dialux Model" 
               class="step-img"
               loading="lazy">
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>Analysis & Comparison</h4>
          <p>Compared results from both methods and identified areas needing improvement.</p>
          <img src="/assets/img/projects/daylight-design/dialux_daylight-82.png" 
               alt="Comparison Table" 
               class="step-img"
               loading="lazy">
        </div>
      </div>
    </div>
    
    <div class="calculation-parameters">
      <h3 class="subsection-header">Calculation Parameters</h3>
      <div class="parameter-grid">
        <div class="parameter-card">
          <h5>Surface Reflectances</h5>
          <ul>
            <li>Ceiling: 0.8</li>
            <li>Walls: 0.65</li>
            <li>Floor: 0.4</li>
            <li>Window Glazing: 0.1</li>
          </ul>
        </div>
        <div class="parameter-card">
          <h5>Correction Factors</h5>
          <img src="/assets/img/projects/daylight-design/dialux_daylight-14.png" 
               alt="Dirt Correction Factors" 
               class="param-img"
               loading="lazy">
        </div>
        <div class="parameter-card">
          <h5>Climate Data</h5>
          <ul>
            <li>Location: Glasgow, UK</li>
            <li>Sky Condition: CIE Overcast</li>
            <li>Latitude: 55.86°N</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="project-section results-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Results
    </h2>
    
    <div class="results-intro">
      <p>The analysis revealed varying daylight performance across different spaces, with most rooms meeting minimum requirements but some areas needing improvement.</p>
    </div>
    
    <div class="results-tabs">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="daylight-factors">Daylight Factors</button>
        <button class="tab-button" data-tab="illuminance">Illuminance Levels</button>
        <button class="tab-button" data-tab="point-analysis">Point Analysis</button>
      </div>
      
      <div class="tab-content active" id="daylight-factors">
        <h3>Daylight Factor Comparison</h3>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-82.png" 
             alt="Daylight Factor Comparison Table" 
             class="result-img"
             loading="lazy">
        
        <div class="result-highlights">
          <div class="highlight-card good">
            <span class="highlight-icon">👍</span>
            <span class="highlight-text">Best Performance: Bedroom 1 (16.28% manual, 3.79% Dialux)</span>
          </div>
          <div class="highlight-card bad">
            <span class="highlight-icon">👎</span>
            <span class="highlight-text">Worst Performance: Cloak (0.76% manual, 0.72% Dialux)</span>
          </div>
        </div>
      </div>
      
      <div class="tab-content" id="illuminance">
        <h3>Illuminance Levels</h3>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-91.png" 
             alt="Illuminance Levels Table" 
             class="result-img"
             loading="lazy">
        
        <div class="illuminance-grid">
          <div class="illuminance-card">
            <img src="/assets/img/projects/daylight-design/dialux_daylight-92.png" 
                 alt="Lounge Illuminance" 
                 class="illuminance-img"
                 loading="lazy">
            <p>Ground Floor Lounge: 101 lux</p>
          </div>
          <div class="illuminance-card">
            <img src="/assets/img/projects/daylight-design/dialux_daylight-85.png" 
                 alt="Bedroom 1 Illuminance" 
                 class="illuminance-img"
                 loading="lazy">
            <p>First Floor Bedroom 1: 158 lux</p>
          </div>
        </div>
      </div>
      
      <div class="tab-content" id="point-analysis">
        <h3>Critical Point Analysis</h3>
        <div class="point-grid">
          <div class="point-card">
            <img src="/assets/img/projects/daylight-design/dialux_daylight-101.png" 
                 alt="Lounge Table DF" 
                 class="point-img"
                 loading="lazy">
            <p>Lounge Table: 0.82% DF (Below 2% target)</p>
          </div>
          <div class="point-card">
            <img src="/assets/img/projects/daylight-design/dialux_daylight-105.png" 
                 alt="Cloak Cleaning Area DF" 
                 class="point-img"
                 loading="lazy">
            <p>Cloak Cleaning Area: 3.96% DF (Meets target)</p>
          </div>
          <div class="point-card">
            <img src="/assets/img/projects/daylight-design/dialux_daylight-106.png" 
                 alt="Cloak Door Threshold DF" 
                 class="point-img"
                 loading="lazy">
            <p>Cloak Door Threshold: 0.36% DF (Safety concern)</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="energy-analysis">
      <h3 class="subsection-header">Energy Implications</h3>
      <img src="/assets/img/projects/daylight-design/dialux_daylight-158.png" 
           alt="Energy Efficiency Table" 
           class="energy-img"
           loading="lazy">
      
      <div class="energy-findings">
        <p>Automatic daylight-dependent controls could reduce lighting energy consumption by <strong>225.02 kWh/a</strong> (27.3%) compared to manual control.</p>
        <div class="energy-comparison">
          <div class="energy-value">
            <span class="energy-number">824.24</span>
            <span class="energy-label">Manual Control (kWh/a)</span>
          </div>
          <div class="energy-arrow">→</div>
          <div class="energy-value">
            <span class="energy-number">599.22</span>
            <span class="energy-label">Automatic Control (kWh/a)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section recommendations-section">
    <h2 class="section-header">
      <span class="section-number">06</span>
      Recommendations
    </h2>
    
    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">⚠️</div>
        <h3>Safety Improvements</h3>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-178.png" 
             alt="Safety Hazard Example" 
             class="rec-img"
             loading="lazy">
        <ul>
          <li>Install anti-slip strips in low-light threshold areas</li>
          <li>Add supplemental lighting in cloakroom and bathroom transition zones</li>
          <li>Consider motion-activated lighting for safety-critical areas</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">💡</div>
        <h3>Daylight Enhancement</h3>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-180.png" 
             alt="Light Shelf Example" 
             class="rec-img"
             loading="lazy">
        <ul>
          <li>Install light shelves in north-facing rooms to bounce light deeper</li>
          <li>Consider daylight redirecting film on select windows</li>
          <li>Use higher reflectance finishes (walls ≥0.65, ceilings ≥0.8)</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">⚡</div>
        <h3>Lighting Controls</h3>
        <img src="/assets/img/projects/daylight-design/dialux_daylight-181.png" 
             alt="Lighting Control Diagram" 
             class="rec-img"
             loading="lazy">
        <ul>
          <li>Implement photocell and presence sensor controls</li>
          <li>Use automatic daylight linking for perimeter zones</li>
          <li>Consider smart lighting systems with occupancy detection</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="project-section conclusion-section">
    <h2 class="section-header">
      <span class="section-number">07</span>
      Conclusion
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <p>The daylight analysis revealed that most spaces meet minimum Daylight Factor requirements, though some areas (particularly the cloakroom and certain task locations) fall below recommended levels. The comparison between manual calculations and Dialux simulations showed reasonable agreement, though manual methods tended to overestimate Daylight Factors in some cases.</p>
        
        <div class="key-findings">
          <h3>Key Findings</h3>
          <ul>
            <li>North-facing rooms benefit from consistent diffuse light but require careful design to achieve adequate illumination</li>
            <li>Automatic lighting controls could reduce energy consumption by over 25%</li>
            <li>Several safety-critical areas were identified needing supplemental lighting</li>
            <li>Bedroom 1 performed best while cloakroom performed worst in daylight metrics</li>
          </ul>
        </div>
        
        <div class="project-outcome">
          <h3>Project Outcome</h3>
          <p>The project successfully applied both traditional and modern daylight analysis methods, demonstrating their complementary value in building design. The recommendations provide actionable improvements to enhance both daylight performance and energy efficiency while addressing safety concerns.</p>
        </div>
      </div>
      
      <div class="conclusion-image">
        <img src="/assets/img/projects/daylight-design/dialux_daylight-17.png" 
             alt="Final 3D Rendering" 
             class="conclusion-img"
             loading="lazy">
        <p class="image-caption">Final 3D overview of the analyzed property</p>
      </div>
    </div>
  </section>
</div>

<style>
/* Base Styles */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --light-gray: #ecf0f1;
  --medium-gray: #bdc3c7;
  --dark-gray: #7f8c8d;
  --text-color: #34495e;
  --white: #ffffff;
  --good-color: #2ecc71;
  --bad-color: #e74c3c;
}

.daylight-project {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Typography */
.project-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.2rem;
}

.project-subtitle {
  font-size: 1.5rem;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
}

.section-header {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--secondary-color);
  border-left: 4px solid var(--primary-color);
  padding-left: 15px;
  margin: 40px 0 25px;
  display: flex;
  align-items: center;
}

.section-number {
  font-size: 1.2rem;
  background: var(--primary-color);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.subsection-header {
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin: 30px 0 20px;
}

/* Project Meta */
.project-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.badge {
  background: var(--primary-color);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.tech-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  background: var(--light-gray);
  color: var(--text-color);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid var(--medium-gray);
}

/* Project Visualization */
.project-visualization {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  border-left: 4px solid var(--primary-color);
}

.visualization-description {
  margin-bottom: 20px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.visualization-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.visualization-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.visualization-img {
  width: 100%;
  height: auto;
  display: block;
}

.visualization-caption {
  padding: 10px 15px;
  font-size: 0.85rem;
  color: var(--dark-gray);
  text-align: center;
  background: #f9f9f9;
}

/* Project Context */
.project-context {
  background: #f8f9fa;
  border-left: 4px solid var(--primary-color);
  padding: 15px 20px;
  margin-bottom: 25px;
  border-radius: 0 4px 4px 0;
}

/* Image Styles */
.image-comparison, .location-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 25px 0;
}

.image-card, .location-card {
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card:hover, .location-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-image, .location-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.zoom-icon {
  font-size: 2rem;
  color: white;
}

.image-meta, .location-caption {
  padding: 15px;
  background: var(--white);
  font-size: 0.9rem;
}

.image-fig {
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 8px;
}

.image-desc {
  color: var(--dark-gray);
}

/* Key Specs */
.key-specs {
  background: var(--light-gray);
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
}

.specs-title {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
  text-align: center;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.spec-item {
  background: var(--white);
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.spec-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.spec-label {
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Building Details */
.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--white);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.detail-icon {
  font-size: 1.5rem;
}

.detail-label {
  font-weight: 600;
}

.detail-value {
  color: var(--dark-gray);
}

/* Standards Section */
.standard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.standard-card {
  background: var(--white);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.standard-card h4 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.standard-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

/* Requirements Grid */
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.requirement-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--white);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.req-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.req-area {
  font-weight: 600;
  margin-bottom: 5px;
}

.req-value {
  color: var(--primary-color);
  font-size: 0.9rem;
}

/* Methodology Steps */
.methodology-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.step {
  display: flex;
  gap: 15px;
}

.step-number {
  background: var(--primary-color);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex-grow: 1;
}

.step-content h4 {
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.step-img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-top: 10px;
}

/* Calculation Parameters */
.parameter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.parameter-card {
  background: var(--white);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.parameter-card h5 {
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.parameter-card ul {
  padding-left: 20px;
}

.parameter-card li {
  margin-bottom: 8px;
}

.param-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
}

/* Results Tabs */
.results-tabs {
  margin-top: 30px;
}

.tab-buttons {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

.tab-button {
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--dark-gray);
  position: relative;
}

.tab-button.active {
  color: var(--primary-color);
  font-weight: 600;
}

.tab-button.active:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--primary-color);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

.result-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.result-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.highlight-card {
  padding: 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.highlight-card.good {
  background: rgba(46, 204, 113, 0.1);
  border-left: 4px solid var(--good-color);
}

.highlight-card.bad {
  background: rgba(231, 76, 60, 0.1);
  border-left: 4px solid var(--bad-color);
}

.highlight-icon {
  font-size: 1.5rem;
}

.highlight-text {
  font-size: 0.95rem;
}

/* Illuminance Grid */
.illuminance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.illuminance-card {
  background: var(--white);
  border-radius: 8px;
 
