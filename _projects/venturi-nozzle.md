---
title: "Venturi Nozzle Flow Measurement Analysis"
category: Research
description: "Experimental analysis of flow rate measurement using Venturi nozzle principles at Glasgow Caledonian University"
tech: [Bernoulli's Equation, Hydraulic Calculations, HM 150.13 Module, Data Analysis]
image: /assets/img/projects/nozzle-lab/venturi_nozzle-6.png
importance: 2
---

<div class="venturi-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Venturi Nozzle Flow Measurement</h1>
    <p class="project-subtitle">Laboratory Experiment - Glasgow Caledonian University</p>
    <div class="project-meta">
      <span class="badge">Fluid Dynamics</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <div class="project-visualization">
    <div class="visualization-description">
      <p>The laboratory experiment investigated flow rate measurement using Bernoulli's principle with a Venturi nozzle. The HM 150.13 module provided precise pressure differential measurements across the constricted flow path.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-4.png" 
             alt="Venturi Nozzle Laboratory Setup" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">HM 150.13 experimental setup</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-3.png" 
             alt="Venturi Nozzle Schematic" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Venturi nozzle pressure curve</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>This experiment conducted on 6th April 2023 evaluated the accuracy of Venturi nozzle flow measurement for Building Services Engineering applications. The study included four measurement trials with comprehensive hydraulic calculations to determine discharge coefficients and validate Bernoulli's equation.</p>
  </div>

  <!-- Experiment Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">1</span>
      Experiment Overview
    </h2>
    
    <div class="project-description">
      <p>The investigation employed a Venturi nozzle with an inlet area of 338 mm², narrowing to 84 mm² at the throat, to measure water flow rates at 20 °C. Pressure readings were recorded at three key locations using the manometer system of the HM 150.13 module. Water flow rates were regulated within the range of 0.00031 to 0.00042 m³/s.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-5.png" 
               alt="Venturi Nozzle Technical Specifications" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">HM 150.13 module technical specifications</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-21.png" 
               alt="Sample Calculation Sheet" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">The hydraulic calculation worksheet highlights the lowest value with 🟦 and the highest value with 🟨</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Key Experimental Parameters</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">338→84mm²</span>
          <span class="spec-label">Area Reduction</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">4°</span>
          <span class="spec-label">Outlet Angle</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">998.2 kg/m³</span>
          <span class="spec-label">Water Density</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">4</span>
          <span class="spec-label">Measurement Trials</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Equipment Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">2</span>
      Experimental Apparatus
    </h2>
    
    <div class="system-intro">
      <p>The HM 150.13 base module provided a complete laboratory station for flow measurement, incorporating a Venturi nozzle, manometer system, and flow control valves. The system measured pressure differentials up to 390mmWC with ±1% accuracy.</p>
    </div>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Key Components
      </h3>
      
      <div class="system-types-grid">
        <div class="system-type-card">
          <div class="system-icon">📏</div>
          <h5>Venturi Nozzle</h5>
          <p>10.5° inlet / 4° outlet angles</p>
        </div>
        <div class="system-type-card">
          <div class="system-icon">💧</div>
          <h5>Manometer</h5>
          <p>6× 0-390mmWC range</p>
        </div>
        <div class="system-type-card">
          <div class="system-icon">🔄</div>
          <h5>Flow Meter</h5>
          <p>1700L/h capacity</p>
        </div>
        <div class="system-type-card">
          <div class="system-icon">🎚️</div>
          <h5>Control Valve</h5>
          <p>Precision flow adjustment</p>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Technical Specifications</h4>
        
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Venturi Nozzle</summary>
            <ul>
              <li>Inlet area: 338mm² (0.000338m²)</li>
              <li>Throat area: 84mm² (0.000084m²)</li>
              <li>Inlet angle: 10.5°</li>
              <li>Outlet angle: 4°</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>HM 150.13 Module</summary>
            <ul>
              <li>Dimensions: 1100×87×900mm</li>
              <li>Weight: 30kg</li>
              <li>Pressure range: 6× 0-390mmWC</li>
              <li>Flow meter: Ø14mm orifice plate</li>
            </ul>
          </details>
        </div>
      </div>
    </article>

    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-2.png" 
             alt="Venturi Nozzle Close-up" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Venturi nozzle cross-section</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-9.png" 
             alt="Venturi Nozzle Installation" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Venturi nozzle installation</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-7.png" 
             alt="Manometer Measurement" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Pressure measurement with manometer</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-8.png" 
             alt="Pipeline Connection" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Connected pipeline with measuring tube</p>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">3</span>
      Experimental Methodology
    </h2>
    
    <div class="methodology-intro">
      <p>The experimental procedure followed a rigorous three-phase approach: equipment calibration, controlled flow rate measurements, and statistical data analysis. The HM 150.13 module's manometer measured pressure differentials across the Venturi nozzle at varying flow rates.</p>
    </div>

    <div class="methodology-steps">
      <div class="step-item">
        <div class="step-number">Step 1</div>
        <div class="step-content">
          <h4>Equipment Setup</h4>
          <p>Calibrated HM 150.13 module with Venturi nozzle (A₁=338mm², A₂=84mm²) connected to water supply system</p>
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-10.png" alt="Nozzle measurement part 1" class="step-image">
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">Step 2</div>
        <div class="step-content">
          <h4>Flow Regulation</h4>
          <p>Adjusted control valve to establish four distinct flow rates while ensuring laminar flow conditions</p>
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-11.png" alt="Nozzle measurement part 2" class="step-image">
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">Step 3</div>
        <div class="step-content">
          <h4>Data Collection</h4>
          <p>Recorded pressure differentials (p₁-p₂) using U-tube manometer at each flow condition</p>
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-12.png" alt="Water density diagram" class="step-image">
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">Step 4</div>
        <div class="step-content">
          <h4>Velocity Calculation</h4>
          <p>Applied Bernoulli's equation to determine flow velocities at nozzle inlet and throat</p>
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-13.png" alt="Measurement points diagram" class="step-image">
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">Step 5</div>
        <div class="step-content">
          <h4>Analysis</h4>
          <p>Calculated theoretical vs actual flow rates and determined Venturi discharge coefficients</p>
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-14.png" alt="Area calculation diagram" class="step-image">
        </div>
      </div>
    </div>

    <div class="project-description">
      <h3>Calculation Methodology</h3>
      <div class="image-comparison">
        <div class="image-card">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-15.png" 
               alt="Bernoulli Equation Application" 
               class="project-image"
               loading="lazy">
          <p class="image-caption">Bernoulli's equation application</p>
        </div>
        <div class="image-card">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-16.png" 
               alt="Velocity Calculation" 
               class="project-image"
               loading="lazy">
          <p class="image-caption">Velocity calculation methodology</p>
        </div>
        <div class="image-card">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-17.png" 
               alt="Pressure Calculation" 
               class="project-image"
               loading="lazy">
          <p class="image-caption">Pressure calculation methodology</p>
        </div>
        <div class="image-card">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-18.png" 
               alt="Pressure Head Calculation" 
               class="project-image"
               loading="lazy">
          <p class="image-caption">Pressure head calculation</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">4</span>
      Results & Analysis
    </h2>
    
    <div class="results-grid">
      <div class="results-card">
        <h3>Flow Rate Measurements</h3>
        <div class="results-table">
          <table>
            <thead>
              <tr>
                <th>Trial</th>
                <th>Qa (m³/s)</th>
                <th>Qt (m³/s)</th>
                <th>C<sub>D</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0.00042</td>
                <td>0.000293</td>
                <td>1.422</td>
              </tr>
              <tr>
                <td>2</td>
                <td>0.00035</td>
                <td>0.000259</td>
                <td>1.351</td>
              </tr>
              <tr>
                <td>3</td>
                <td>0.00033</td>
                <td>0.000237</td>
                <td>1.406</td>
              </tr>
              <tr>
                <td>4</td>
                <td>0.00031</td>
                <td>0.000266</td>
                <td>1.159</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="results-card">
        <h3>Flow Velocity Measurements</h3>
        <div class="results-table">
          <table>
            <thead>
              <tr>
                <th>Trial</th>
                <th>u₁ (m/s)</th>
                <th>u₂ (m/s)</th>
                <th>u₃ (m/s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0.866</td>
                <td>3.485</td>
                <td>1.319</td>
              </tr>
              <tr>
                <td>2</td>
                <td>0.767</td>
                <td>3.086</td>
                <td>1.168</td>
              </tr>
              <tr>
                <td>3</td>
                <td>0.701</td>
                <td>2.821</td>
                <td>1.067</td>
              </tr>
              <tr>
                <td>4</td>
                <td>0.788</td>
                <td>3.171</td>
                <td>1.120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="key-findings">
      <h3>Key Findings</h3>
      <ul>
        <li>Linear relationship between pressure drop and flow rate confirmed</li>
        <li>Strong linear correlation between pressure differential and flow velocity (R² = 0.98)</li>
        <li>Discharge coefficients (C<sub>D</sub>) ranged 1.159-1.422 across trials</li>
        <li>Maximum velocity achieved: 3.485 m/s at throat</li>
        <li>Maximum flow rate recorded: 0.00042 m³/s (Trial 1)</li>
        <li>Measurement 1 showed highest pressure differential (9319.5-3629.7 Pa)</li>
        <li>Measurement 3 showed lowest velocity values (u₁=0.701 m/s)</li>
      </ul>
    </div>

    <div class="results-graphs">
      <div class="graph-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-22.png" 
             alt="Theoretical vs Actual Flow Rate" 
             class="graph-image"
             loading="lazy">
        <p class="graph-caption">Fig 3. Theoretical vs actual flow rate correlation</p>
      </div>
      <div class="graph-card">
        <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-23.png" 
             alt="Discharge Coefficient Trends" 
             class="graph-image"
             loading="lazy">
        <p class="graph-caption">Fig 4. Discharge coefficient variation across trials</p>
      </div>
    </div>

    <div class="project-description">
      <h3>Detailed Calculations</h3>
      <div class="image-comparison">
        <div class="image-card">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-19.png" 
               alt="Theoretical Flow Rate Calculation" 
               class="project-image"
               loading="lazy">
          <p class="image-caption">Theoretical flow rate calculation</p>
        </div>
        <div class="image-card">
          <img src="/assets/img/projects/nozzle-lab/venturi_nozzle-20.png" 
               alt="Discharge Coefficient Calculation" 
               class="project-image"
               loading="lazy">
          <p class="image-caption">Discharge coefficient calculation</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
      Conclusions
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <h3>Experimental Validation</h3>
        <p>The experiment validated Venturi nozzle effectiveness for flow measurement, with discharge coefficients consistently exceeding 1.0 due to compressibility effects. The HM 150.13 module demonstrated reliable performance in capturing pressure differentials and calculating flow parameters.</p>
        
        <h3>Engineering Applications</h3>
        <ul>
          <li>Pipeline flow monitoring systems</li>
          <li>HVAC fluid distribution networks</li>
          <li>Industrial process control</li>
          <li>Building services water management</li>
        </ul>
      </div>
      
      <div class="recommendations">
        <h3>Improvement Recommendations</h3>
        <div class="recommendation-card">
          <div class="rec-icon">🔧</div>
          <p>Implement advanced calibration protocols for manometer zeroing</p>
        </div>
        <div class="recommendation-card">
          <div class="rec-icon">📊</div>
          <p>Incorporate digital pressure sensors for improved accuracy</p>
        </div>
        <div class="recommendation-card">
          <div class="rec-icon">🔄</div>
          <p>Conduct additional trials at intermediate flow rates</p>
        </div>
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
}

.venturi-project {
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

.subsection-icon {
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
.image-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 25px 0;
}

.image-card {
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-image {
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

.image-meta {
  padding: 15px;
  background: var(--white);
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

/* System Types Grid */
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
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.step-number {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.step-content h4 {
  margin: 10px 0 5px;
  color: var(--secondary-color);
}

.step-image {
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 4px;
}

/* Results Section */
.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 25px 0;
}

.results-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.results-table table {
  width: 100%;
  border-collapse: collapse;
}

.results-table th, .results-table td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.results-table th {
  background: #f5f9ff;
}

.key-findings {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  margin: 25px 0;
}

.key-findings h3 {
  margin-top: 0;
  color: var(--secondary-color);
}

.key-findings ul {
  padding-left: 20px;
}

.key-findings li {
  margin-bottom: 10px;
  position: relative;
}

.key-findings li:before {
  content: "•";
  color: var(--primary-color);
  font-weight: bold;
  position: absolute;
  left: -15px;
}

.results-graphs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.graph-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.graph-image {
  width: 100%;
  height: auto;
  display: block;
}

.graph-caption {
  padding: 10px 15px;
  font-size: 0.9rem;
  color: var(--dark-gray);
  text-align: center;
}

/* Conclusion Section */
.conclusion-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.conclusion-text h3 {
  color: var(--secondary-color);
  margin-top: 0;
}

.conclusion-text ul {
  padding-left: 20px;
}

.recommendations {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.recommendation-card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.rec-icon {
  font-size: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .results-grid,
  .results-graphs,
  .conclusion-content {
    grid-template-columns: 1fr;
  }
  
  .image-comparison {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .project-title {
    font-size: 1.9rem;
  }
}

@media (max-width: 576px) {
  .venturi-project {
    padding: 0 15px;
  }
  
  .project-title {
    font-size: 1.7rem;
  }
  
  .section-header {
    font-size: 1.4rem;
  }
  
  .system-types-grid {
    grid-template-columns: 1fr;
  }
  
  .methodology-steps {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Simple tab functionality
document.addEventListener('DOMContentLoaded', function() {
  // Accordion functionality
  const accordions = document.querySelectorAll('.spec-group');
  
  accordions.forEach(acc => {
    acc.addEventListener('toggle', function() {
      if (this.open) {
        this.style.backgroundColor = '#f5f9ff';
      } else {
        this.style.backgroundColor = '';
      }
    });
  });
});
</script>
