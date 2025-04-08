---
title: "Public Housing Plumbing Systems - Queen's Hill Development"
category: Building Systems
description: "Comprehensive plumbing design for 3,120-unit HK housing project, including hydraulic calculations and system schematics."
tech: [AutoCAD MEP, Hydraulic Calculations, BS EN 12845, Pump Sizing, BIM Coordination]
image: /assets/img/projects/plumbing_design-1.jpg
importance: 1
---

<div class="plumbing-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Public Housing Plumbing Systems</h1>
    <p class="project-subtitle">Queen's Hill Development</p>
    
    <div class="project-visualization">
      <div class="visualization-description">
        <p>The Queen's Hill Development will feature a modern architectural design with integrated plumbing systems carefully coordinated with the building facade. The exterior showcases clean lines with strategically placed service ducts and access points.</p>
      </div>
      <div class="visualization-images">
        <div class="visualization-card">
          <img src="/assets/img/projects/plumbing_design-2.jpg" 
               alt="Queen's Hill Building Daytime Rendering" 
               class="visualization-img"
               loading="lazy">
          <p class="visualization-caption">Overall architectural rendering</p>
        </div>
        <div class="visualization-card">
          <img src="/assets/img/projects/plumbing_design-3.jpg" 
               alt="Queen's Hill Building Evening Rendering" 
               class="visualization-img"
               loading="lazy">
          <p class="visualization-caption">Close-up architectural rendering</p>
        </div>
      </div>
    </div>
    
    <div class="project-context">
      <p>The Queen's Hill Development represents one of Hong Kong's most ambitious public housing projects, designed to accommodate 3,120 families across eight residential towers. This plumbing system design addresses the unique challenges of high-density vertical living while ensuring sustainable water management and maintenance accessibility.</p>
    </div>
    
    <div class="project-meta">
      <span class="badge">Building Systems</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Project Overview
    </h2>
    
    <div class="project-description">
      <p>The plumbing infrastructure was designed to serve eight 40-story residential towers with a total floor area of 286,000 m². The system incorporates dual water supply lines (fresh and flush), centralized hot water generation, and stormwater management to meet Hong Kong's stringent building codes while optimizing for energy efficiency and water conservation.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/plumbing_design-1.jpg" 
               alt="Queen's Hill Development Overview" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Site aerial view showing all eight residential towers and central plant location</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/plumbing_design-4.jpg" 
               alt="Site Location Plan" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Location plan highlighting water main connections and elevation challenges</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Key System Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">3,120</span>
          <span class="spec-label">Residential Units</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">8.5 km</span>
          <span class="spec-label">Total Pipe Length</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">12</span>
          <span class="spec-label">Booster Pump Sets</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">45 L/s</span>
          <span class="spec-label">Peak Water Demand</span>
        </div>
      </div>
    </div>
  </section>

  <!-- System Design Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
      System Design
    </h2>
    
    <div class="system-intro">
      <p>The plumbing system was designed using a zoned approach to address the 120m height differential across the site. The design incorporates pressure-reducing valves at strategic intervals to maintain optimal pressure throughout the vertical distribution network while preventing pipe erosion and water hammer effects.</p>
    </div>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
        </svg>
        Schematic Diagrams
      </h3>
      
      <div class="diagram-description">
        <p>The system schematics were developed using AutoCAD MEP with BIM coordination to identify and resolve clashes with structural and MEP components during the design phase. All diagrams comply with Hong Kong Water Supplies Department standards for public housing projects.</p>
      </div>
      
      <div class="diagram-grid">
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/plumbing_design-7.png" 
                 alt="Fresh Water System Process Flow" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">Process Flow</span>
            <span class="diagram-fig">Fig 3. Fresh water supply process from mains to rooftop tanks with intermediate boosting</span>
          </div>
        </div>
        
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/plumbing_design-6.jpg" 
                 alt="Vertical Plumbing Line Diagram" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">Distribution</span>
            <span class="diagram-fig">Fig 4. Block 1 vertical distribution showing pipe sizing transitions every 15 floors</span>
          </div>
        </div>
      </div>
    </article>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
        </svg>
        System Arrangement
      </h3>
      
      <div class="system-arrangement">
        <div class="arrangement-image">
          <img src="/assets/img/projects/plumbing_design-8.jpg" 
               alt="Fresh Water System Arrangement" 
               class="arrangement-img"
               loading="lazy">
          <div class="arrangement-caption">
            <span class="arrangement-fig">Fig 5.</span>
            <span class="arrangement-desc">Domestic Block 1 fresh water system showing pressure zones and valve locations</span>
          </div>
        </div>
        <div class="arrangement-notes">
          <p><strong>Design Notes:</strong> The system maintains water pressure between 2.5-4.5 bar at all fixtures. Pressure reducing valves are installed at the base of each zone to prevent over-pressurization of lower floors. Air chambers are provided at all vertical-to-horizontal transitions to absorb water hammer.</p>
        </div>
      </div>
    </article>
  </section>

  <!-- Engineering Calculations Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Engineering Calculations
    </h2>
    
    <div class="calculations-intro">
      <p>All hydraulic calculations were performed in accordance with BS EN 12845 and Hong Kong Water Supplies Department requirements. The design accommodates peak demand factors of 3.0 for morning surge periods while maintaining adequate pressure during normal operation.</p>
    </div>
    
    <div class="calculation-gallery">
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-9.jpg" 
               alt="Booster Pump Calculation" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Booster Pump</span>
            <span class="calc-detail">150kW pump set for Zone 4 (floors 25-35)</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-10.jpg" 
               alt="Main Pipe Sizing" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Main Pipe Sizing</span>
            <span class="calc-detail">DN200 primary feeders with velocity <2.5m/s</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-11.jpg" 
               alt="Upfeed Pump Calculation" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Upfeed Pump</span>
            <span class="calc-detail">85kW units with VFD control</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-12.jpg" 
               alt="Flush Water Calculation" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Flush Water</span>
            <span class="calc-detail">Seawater system with corrosion-resistant fittings</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-13.jpg" 
               alt="Pipe Sizing Analysis" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Pipe Sizing</span>
            <span class="calc-detail">Hazen-Williams C=140 for all PVC lines</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-14.jpg" 
               alt="Pressure Analysis" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Pressure Analysis</span>
            <span class="calc-detail">Worst-case fixture pressure verification</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="calculation-summary">
      <h3 class="summary-title">Design Safety Factors</h3>
      <ul class="safety-factors">
        <li>20% capacity margin on all pumping equipment</li>
        <li>15% additional pipe sizing for future demand</li>
        <li>Simultaneous use factor of 0.65 applied to fixture units</li>
        <li>2.0 safety factor on pipe wall thickness calculations</li>
      </ul>
    </div>
  </section>

  <!-- Design Methodology Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Design Methodology
    </h2>
    
    <div class="methodology-intro">
      <p>The pipe sizing methodology follows a three-phase approach: initial sizing based on fixture units, velocity verification, and finally pressure loss validation. This ensures compliance with both performance requirements and water conservation objectives.</p>
    </div>
    
    <h3 class="methodology-subheader">
      <svg class="methodology-icon" viewBox="0 0 24 24">
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" />
      </svg>
      Pipe Sizing Procedure
    </h3>
    
    <div class="methodology-steps">
      <div class="step-item">
        <div class="step-number">Step 1</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-16.jpg" 
               alt="Pipe Sizing Step 1" 
               class="step-img"
               loading="lazy">
        </div>
        <div class="step-description">
          <p>Fixture unit tabulation using WSD standard values for public housing</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 2</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-17.jpg" 
               alt="Pipe Sizing Step 2" 
               class="step-img"
               loading="lazy">
        </div>
        <div class="step-description">
          <p>Demand weight calculation with diversity factors applied</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 3</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-18.jpg" 
               alt="Pipe Sizing Step 3" 
               class="step-img"
               loading="lazy">
        </div>
        <div class="step-description">
          <p>Preliminary pipe sizing based on flow rate tables</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 4</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-19.jpg" 
               alt="Pipe Sizing Step 4" 
               class="step-img"
               loading="lazy">
        </div>
        <div class="step-description">
          <p>Velocity verification (target 1.5-2.5 m/s for copper lines)</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 5</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-20.jpg" 
               alt="Pipe Sizing Step 5" 
               class="step-img"
               loading="lazy">
        </div>
        <div class="step-description">
          <p>Pressure loss calculation using Hazen-Williams equation</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 6</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-21.jpg" 
               alt="Pipe Sizing Step 6" 
               class="step-img"
               loading="lazy">
        </div>
        <div class="step-description">
          <p>Final adjustment to maintain minimum 1.5 bar at highest fixture</p>
        </div>
      </div>
    </div>
    
    <div class="methodology-conclusion">
      <h3 class="conclusion-title">Design Validation</h3>
      <p>The completed design was validated through hydraulic modeling software (Bentley WaterGEMS) to simulate various demand scenarios. The model confirmed adequate pressure at all fixtures during peak morning demand while maintaining pipe velocities below erosional thresholds during low-flow periods.</p>
    </div>
  </section>

  <!-- Supplementary Information Section -->
  <section class="project-section supplementary-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Supplementary Information
    </h2>
    
    <div class="supplementary-grid">
      <div class="supplementary-card">
        <h3 class="supplementary-title">Water Consumption Analysis</h3>
        <div class="supplementary-image">
          <img src="/assets/img/projects/plumbing_design-15.jpg" 
               alt="Water Consumption Analysis" 
               class="supplementary-img"
               loading="lazy">
        </div>
        <div class="supplementary-content">
          <p><strong>Daily Consumption:</strong></p>
          <ul>
            <li>Fresh water: 2,017,676 liters</li>
            <li>Flush water: 597,180 liters</li>
          </ul>
          <p>Calculated using WSD standard consumption rates with peak demand factors.</p>
        </div>
      </div>
      
      <div class="supplementary-card">
        <h3 class="supplementary-title">Pressure Management</h3>
        <div class="supplementary-content">
          <ul>
            <li>PRV zoning calculations for each block</li>
            <li>Static head and flow rate analyses</li>
            <li>Two-stage PRVs for high incoming pressures</li>
            <li>Minimum 1.5 bar maintained at highest fixtures</li>
          </ul>
        </div>
      </div>
      
      <div class="supplementary-card">
        <h3 class="supplementary-title">Design Team</h3>
        <div class="supplementary-image">
          <img src="/assets/img/projects/plumbing_design-5.jpg" 
               alt="Design Team Working" 
               class="supplementary-img"
               loading="lazy">
        </div>
        <div class="supplementary-content">
          <p>The plumbing design team included:</p>
          <ul>
            <li>2 Lead Plumbing Engineers</li>
            <li>3 CAD Technicians</li>
            <li>1 BIM Coordinator</li>
            <li>1 Hydraulics Specialist</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
/* Add these new styles to your existing CSS */

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

/* Responsive Adjustments */
@media (max-width: 768px) {
  .visualization-images {
    grid-template-columns: 1fr;
  }
  
  .project-visualization {
    padding: 15px;
  }
}
</style>

<style>
/* Add these new styles to your existing CSS */

/* Supplementary Information Section */
.supplementary-section {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  margin-top: 40px;
}

.supplementary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.supplementary-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.supplementary-title {
  background: var(--primary-color);
  color: white;
  padding: 15px;
  font-size: 1.2rem;
}

.supplementary-image {
  padding: 15px;
}

.supplementary-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.supplementary-content {
  padding: 0 15px 15px;
}

.supplementary-content ul {
  padding-left: 20px;
}

.supplementary-content li {
  margin-bottom: 8px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .supplementary-grid {
    grid-template-columns: 1fr;
  }
  
  .supplementary-section {
    padding: 20px;
  }
}
</style>

<style>
/* Add these new styles to your existing CSS */

/* Highlights Section */
.project-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.highlight-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.highlight-icon {
  font-size: 1.5rem;
  margin-right: 12px;
}

.highlight-content {
  display: flex;
  flex-direction: column;
}

.highlight-value {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.highlight-label {
  font-size: 0.8rem;
  color: var(--dark-gray);
}

/* Facilities Overview */
.facilities-overview {
  margin-bottom: 25px;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.facility-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.facility-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.facility-name {
  font-weight: 600;
  margin-bottom: 4px;
}

.facility-detail {
  font-size: 0.85rem;
  color: var(--dark-gray);
}

/* Water Supply System */
.water-supply-system {
  background: #f8fbfe;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.system-details {
  margin-bottom: 25px;
}

.system-features {
  padding-left: 20px;
}

.system-features li {
  margin-bottom: 8px;
}

.system-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.system-type-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.system-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.system-type-card h5 {
  margin: 10px 0;
  color: var(--secondary-color);
}

/* Technical Specifications */
.technical-specs {
  margin-top: 30px;
}

.specs-title {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.specs-accordion {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.spec-group {
  border-bottom: 1px solid #e0e0e0;
}

.spec-group:last-child {
  border-bottom: none;
}

.spec-group summary {
  padding: 15px;
  background: #f5f9ff;
  cursor: pointer;
  font-weight: 500;
  list-style: none;
}

.spec-group summary::-webkit-details-marker {
  display: none;
}

.spec-group summary:after {
  content: '+';
  float: right;
  font-weight: bold;
  transition: transform 0.3s;
}

.spec-group[open] summary:after {
  content: '-';
}

.spec-group ul {
  padding: 0 15px 15px 45px;
  margin: 0;
}

.spec-group li {
  margin-bottom: 8px;
}

/* Calculation Tabs */
.calculation-tabs {
  margin-top: 20px;
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

.consumption-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.consumption-item {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.consumption-value {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.consumption-label {
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Recommendations */
.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.recommendation-card {
  background: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.rec-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.recommendation-card h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.recommendation-card ul {
  padding-left: 20px;
}

.recommendation-card li {
  margin-bottom: 8px;
}

/* Reflection Section */
.reflection-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.reflection-text {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.skill-development {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
}

.skill-category h4 {
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.skill-category ul {
  padding-left: 20px;
}

.skill-category li {
  margin-bottom: 6px;
  font-size: 0.95rem;
}

.project-outcome {
  background: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.reflection-image {
  display: flex;
  flex-direction: column;
}

.reflection-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .reflection-content {
    grid-template-columns: 1fr;
  }
  
  .reflection-image {
    order: -1;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .project-highlights {
    grid-template-columns: 1fr 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .system-types-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .project-highlights {
    grid-template-columns: 1fr;
  }
  
  .system-types-grid {
    grid-template-columns: 1fr;
  }
  
  .tab-buttons {
    flex-direction: column;
    border-bottom: none;
  }
  
  .tab-button {
    border-bottom: 1px solid #e0e0e0;
  }
  
  .tab-button.active:after {
    display: none;
  }
}
</style>

<script>
// Simple tab functionality
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Remove active class from all buttons and content
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

// Accordion functionality
document.querySelectorAll('.spec-group').forEach(details => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      details.style.backgroundColor = '#f5f9ff';
    } else {
      details.style.backgroundColor = '';
    }
  });
});
</script>

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
}

.plumbing-project {
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
  display: flex;
  align-items: center;
}

.subsection-icon, .methodology-icon {
  width: 24px;
  height: 24px;
  fill: var(--primary-color);
  margin-right: 10px;
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

/* Image Styles */
.image-comparison, .diagram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 25px 0;
}

.image-card, .diagram-card {
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card:hover, .diagram-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.image-wrapper, .diagram-wrapper {
  position: relative;
  overflow: hidden;
}

.project-image, .diagram-image {
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

.image-meta, .diagram-meta {
  padding: 15px;
  background: var(--white);
}

.image-fig, .diagram-fig {
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 8px;
}

.image-desc, .diagram-desc {
  color: var(--dark-gray);
}

.diagram-label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

/* System Arrangement */
.system-arrangement {
  margin: 30px 0;
}

.arrangement-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.arrangement-img {
  width: 100%;
  height: auto;
  display: block;
}

.arrangement-caption {
  padding: 12px 15px;
  background: var(--light-gray);
  font-size: 0.9rem;
}

.arrangement-fig {
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 8px;
}

/* Calculations Gallery */
.calculation-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.calculation-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.calc-image-container {
  position: relative;
  overflow: hidden;
}

.calc-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.calc-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(46, 64, 83, 0.8);
  color: white;
  padding: 12px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.calculation-item:hover .calc-overlay {
  transform: translateY(0);
}

.calculation-item:hover .calc-image {
  transform: scale(1.05);
}

.calc-title {
  font-weight: 500;
  font-size: 0.95rem;
}

/* Methodology Steps */
.methodology-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.step-item {
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.step-number {
  background: var(--primary-color);
  color: white;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 0.9rem;
}

.step-image {
  padding: 10px;
}

.step-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .project-title {
    font-size: 1.9rem;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .image-comparison, .diagram-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .plumbing-project {
    padding: 0 15px;
  }
  
  .project-title {
    font-size: 1.7rem;
  }
  
  .section-header {
    font-size: 1.4rem;
    margin: 30px 0 20px;
  }
  
  .calculation-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .project-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .calculation-gallery, .methodology-steps {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    font-size: 1.3rem;
  }
  
/* Add these new styles to your existing CSS */

.project-context {
  background: #f8f9fa;
  border-left: 4px solid var(--primary-color);
  padding: 15px 20px;
  margin-bottom: 25px;
  border-radius: 0 4px 4px 0;
}

.project-description, .system-intro, .calculations-intro, .methodology-intro {
  margin-bottom: 25px;
  line-height: 1.7;
}

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

.diagram-description, .arrangement-description {
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 2px solid var(--medium-gray);
}

.arrangement-notes {
  background: #f0f7ff;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
  font-size: 0.95rem;
}

.calc-detail {
  display: block;
  font-size: 0.85rem;
  margin-top: 5px;
  opacity: 0.9;
}

.calculation-summary {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
}

.summary-title {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.safety-factors {
  padding-left: 20px;
}

.safety-factors li {
  margin-bottom: 8px;
}

.step-description {
  padding: 12px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.methodology-conclusion {
  background: #f5fbf5;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  border-left: 4px solid #2ecc71;
}

.conclusion-title {
  font-size: 1.2rem;
  color: #27ae60;
  margin-bottom: 15px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .step-item {
    margin-bottom: 20px;
  }
}
</style>
