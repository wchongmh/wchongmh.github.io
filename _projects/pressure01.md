---
title: "Pressure Loss Analysis in Piping Systems"
category: Research
description: "Experimental analysis of pressure losses in pipes and fittings using HM 150.11 module at Glasgow Caledonian University"
tech: [Pressure Measurement, Fluid Dynamics, HM 150.11 Module, Hydraulic Calculations, Data Analysis]
image: /assets/img/projects/lab/pressure-drop-1.jpg
importance: 2
---

<div class="pressure-drop-report">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Pressure Loss Analysis in Piping Systems02</h1>
    <p class="project-subtitle">Casework and Engineering Laboratory - 22/23 B</p>
    <div class="project-meta">
      <span class="badge">Laboratory Reports</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <div class="project-visualization">
    <div class="visualization-description">
      <p>The experimental setup at Glasgow Caledonian University's laboratory features the HM 150.11 Losses in a Pipe System module, designed to measure pressure drops across various piping components under controlled flow conditions.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/lab/pressure-drop-2.jpg" 
             alt="HM 150.11 Module Overview" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">HM 150.11 base module experimental setup</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/lab/pressure-drop-3.jpg" 
             alt="Pipe System Components" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Various piping components tested</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>This laboratory investigation conducted on 30th March 2023 examined pressure losses in a closed-loop piping system containing elbows, reducers, tees, and straight pipe sections. The study provides critical data for optimizing fluid systems in building services engineering applications.</p>
  </div>

  <!-- Introduction Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Introduction
    </h2>
    
    <div class="project-description">
      <p>The experiment analyzed pressure losses in a 1-inch diameter steel piping system using the HM 150.11 module. Pressure gauges measured drops across components while a magnetic flow meter recorded flow rates from 0.2 to 2 m/s. This data helps engineers design more efficient fluid systems by quantifying component-specific resistance.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/lab/pressure-drop-4.jpg" 
               alt="Experimental Setup Diagram" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Schematic of HM 150.11 closed-loop system</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/lab/pressure-drop-5.jpg" 
               alt="Pressure Measurement Points" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Pressure gauge installation points</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">System Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">1"</span>
          <span class="spec-label">Pipe Diameter</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">10m</span>
          <span class="spec-label">Total Length</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">0.2-2 m/s</span>
          <span class="spec-label">Flow Range</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">20°C</span>
          <span class="spec-label">Water Temp</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Laboratory Setup Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Laboratory Setup
    </h2>
    
    <div class="system-intro">
      <p>The HM 150.11 module features a complete PVC piping system with various components to simulate real-world conditions. The centrifugal pump with variable frequency drive allows precise flow control while twin tube manometers measure pressure differentials.</p>
    </div>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
        </svg>
        System Components
      </h3>
      
      <div class="system-types-grid">
        <div class="system-type-card">
          <div class="system-icon">🔄</div>
          <h5>Pipe Sections</h5>
          <p>20×1.5mm PVC, 800mm length</p>
        </div>
        <div class="system-type-card">
          <div class="system-icon">↔️</div>
          <h5>Diameter Changes</h5>
          <p>Sudden contraction/enlargement sections</p>
        </div>
        <div class="system-type-card">
          <div class="system-icon">⎾</div>
          <h5>Fittings</h5>
          <p>Y-pieces, T-pieces, 45°/90° elbows</p>
        </div>
        <div class="system-type-card">
          <div class="system-icon">📊</div>
          <h5>Measurement</h5>
          <p>Twin tube manometers (0-1000mmWC)</p>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Technical Parameters</h4>
        
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Physical Dimensions</summary>
            <ul>
              <li>1550×640×1300mm (L×W×H)</li>
              <li>Approx. 58kg total weight</li>
              <li>PVC piping material</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Measurement Ranges</summary>
            <ul>
              <li>Pressure: 0-0.1 bar</li>
              <li>Flow rate: 0.2-2 m/s</li>
              <li>Water temperature: 20°C</li>
            </ul>
          </details>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
        </svg>
        Experimental Methodology
      </h3>
      
      <div class="methodology-steps">
        <div class="step-item">
          <div class="step-number">Step 1</div>
          <div class="step-image">
            <img src="/assets/img/projects/lab/method-1.jpg" 
                 alt="System Preparation" 
                 class="step-img"
                 loading="lazy">
          </div>
          <div class="step-description">System assembly and instrument calibration</div>
        </div>
        <div class="step-item">
          <div class="step-number">Step 2</div>
          <div class="step-image">
            <img src="/assets/img/projects/lab/method-2.jpg" 
                 alt="Flow Rate Adjustment" 
                 class="step-img"
                 loading="lazy">
          </div>
          <div class="step-description">Gradual flow rate increase using VFD</div>
        </div>
        <div class="step-item">
          <div class="step-number">Step 3</div>
          <div class="step-image">
            <img src="/assets/img/projects/lab/method-3.jpg" 
                 alt="Data Collection" 
                 class="step-img"
                 loading="lazy">
          </div>
          <div class="step-description">Pressure drop measurements at components</div>
        </div>
        <div class="step-item">
          <div class="step-number">Step 4</div>
          <div class="step-image">
            <img src="/assets/img/projects/lab/method-4.jpg" 
                 alt="Data Analysis" 
                 class="step-img"
                 loading="lazy">
          </div>
          <div class="step-description">Pressure-flow curve generation</div>
        </div>
      </div>
    </article>
  </section>

  <!-- Results Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Experimental Results
    </h2>
    
    <div class="calculations-intro">
      <p>The study revealed significant variations in pressure drops across different components, with control valves showing the highest resistance and straight pipes the lowest. The data enables calculation of resistance coefficients for system optimization.</p>
    </div>
    
    <article class="design-subsection calculations">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,19H20V21H4V19M7.73,12.27L9.15,13.68C10.05,12.8 11.31,12.24 12.66,12.24C15.5,12.24 17.75,14.5 17.75,17.34C17.75,18.69 17.19,19.95 16.31,20.85L17.72,22.26C19,21 19.74,19.25 19.74,17.34C19.74,13.36 16.64,10.26 12.66,10.26C10.75,10.26 9,11 7.73,12.27M12.66,4C16.64,4 19.74,7.1 19.74,11.08C19.74,12.93 19,14.68 17.72,15.93L16.31,14.5C17.19,13.62 17.75,12.36 17.75,11.08C17.75,8.25 15.5,6 12.66,6C11.39,6 10.13,6.56 9.24,7.45L7.73,5.94C9,4.68 10.75,4 12.66,4M4,9.08C4,11.93 6.25,14.17 9.09,14.17C10.44,14.17 11.7,13.61 12.6,12.73L11.19,11.32C10.31,12.2 9.05,12.76 7.7,12.76C4.86,12.76 2.61,10.5 2.61,7.67C2.61,6.32 3.17,5.06 4.05,4.16L2.64,2.75C1.39,4 0.61,5.75 0.61,7.67C0.61,11.65 3.72,14.75 7.7,14.75C9.61,14.75 11.36,14 12.63,12.72L11.12,11.21C10.24,12.09 8.98,12.65 7.7,12.65C4.86,12.65 2.61,10.39 2.61,7.57H4V9.08Z" />
        </svg>
        Key Findings
      </h3>
      
      <div class="calculation-tabs">
        <div class="tab-buttons">
          <button class="tab-button active" data-tab="pressure-drops">Pressure Drops</button>
          <button class="tab-button" data-tab="resistance-coefficients">Resistance Coefficients</button>
          <button class="tab-button" data-tab="flow-characteristics">Flow Characteristics</button>
        </div>
        
        <div class="tab-content active" id="pressure-drops">
          <h4>Component Pressure Loss Comparison</h4>
          <div class="consumption-grid">
            <div class="consumption-item">
              <span class="consumption-value">Highest</span>
              <span class="consumption-label">Control Valve</span>
            </div>
            <div class="consumption-item">
              <span class="consumption-value">Medium</span>
              <span class="consumption-label">Elbows & Reducers</span>
            </div>
            <div class="consumption-item">
              <span class="consumption-value">Negligible</span>
              <span class="consumption-label">Straight Pipes</span>
            </div>
          </div>
          <p>Pressure drops followed quadratic relationship with flow rate as predicted by Bernoulli's principle</p>
        </div>
        
        <div class="tab-content" id="resistance-coefficients">
          <h4>Calculated Resistance Coefficients (ζ)</h4>
          <ul>
            <li>90° elbow: 0.9-1.1</li>
            <li>45° elbow: 0.4-0.5</li>
            <li>Sudden contraction: 0.3-0.4</li>
            <li>Sudden enlargement: 0.6-0.8</li>
            <li>Control valve: 2.5-10 (depending on opening)</li>
          </ul>
        </div>
        
        <div class="tab-content" id="flow-characteristics">
          <h4>Flow Rate Observations</h4>
          <ul>
            <li>Linear relationship between valve position and flow rate</li>
            <li>Turbulent flow regime observed (Re > 4000)</li>
            <li>System head curve developed for pump selection</li>
          </ul>
        </div>
      </div>
    </article>
    
    <div class="calculation-gallery">
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/lab/result-1.jpg" 
               alt="Pressure Drop Curves" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Pressure Curves</span>
            <span class="calc-detail">Component-specific Δp vs flow rate</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/lab/result-2.jpg" 
               alt="Resistance Coefficients" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">ζ Values</span>
            <span class="calc-detail">Calculated resistance coefficients</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/lab/result-3.jpg" 
               alt="System Head Curve" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">System Curve</span>
            <span class="calc-detail">Total head vs flow rate</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="calculation-summary">
      <h3 class="summary-title">Critical Calculations</h3>
      <div class="formula-card">
        <h4>Local Pressure Drop Equation</h4>
        <div class="formula">
          $$\Delta p_M = \frac{\rho v^2}{2}$$
        </div>
        <p>Where:<br>
        Δp<sub>M</sub> = local pressure drop (Pa)<br>
        ζ = resistance coefficient<br>
        ρ = fluid density (998.2 kg/m³ at 20°C)<br>
        v = flow velocity (m/s)</p>
      </div>
    </div>
  </section>

  <!-- Conclusions Section -->
  <section class="project-section recommendations-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Conclusions & Recommendations
    </h2>
    
    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">📊</div>
        <h3>Key Findings</h3>
        <ul>
          <li>Control valves account for 45-60% of total system pressure drop</li>
          <li>Elbows contribute significantly to energy losses in piping networks</li>
          <li>Straight pipe sections show minimal pressure loss</li>
          <li>Experimental data validates theoretical predictions</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🛠️</div>
        <h3>Design Implications</h3>
        <ul>
          <li>Minimize unnecessary fittings in high-flow systems</li>
          <li>Consider gradual diameter changes instead of sudden transitions</li>
          <li>Proper valve selection critical for energy efficiency</li>
          <li>Accurate ζ values enable better pump sizing</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🔮</div>
        <h3>Future Enhancements</h3>
        <ul>
          <li>Incorporate ultrasonic flow measurement</li>
          <li>Test with variable fluid viscosities</li>
          <li>Integrate CFD simulation validation</li>
          <li>Expand component library (e.g., different valve types)</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- References Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      References
    </h2>
    
    <div class="references-list">
      <ol>
        <li>HM 150.11 Module Technical Documentation - GUNT Hamburg</li>
        <li>Density of Water at Various Temperatures - BYJU'S Physics</li>
        <li>Fluid Mechanics Fundamentals - Glasgow Caledonian University</li>
      </ol>
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

.arrangement-notes {
  background: #f0f7ff;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
  font-size: 0.95rem;
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

/* Supplementary Information */
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

.image-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
  text-align: center;
}

/* Responsive Design */
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
  .project-title {
    font-size: 1.9rem;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .image-comparison, .diagram-grid {
    grid-template-columns: 1fr;
  }
  
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
  
  .calculation-gallery, .methodology-steps {
    grid-template-columns: 1fr;
  }
  
  .project-meta {
    flex-direction: column;
    gap: 8px;
  }
  
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
