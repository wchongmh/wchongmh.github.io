---
title: "Pressure Losses in Piping Systems - Laboratory Analysis"
category: Research
description: "Experimental analysis of pressure losses in pipes and fittings using HM 150.11 module at Glasgow Caledonian University"
tech: [Pressure Measurement, Fluid Dynamics, Pipe Systems, Hydraulic Analysis, Laboratory Testing]
image: /assets/img/projects/lab/pressure_losses_1.jpg
importance: 2
---

<div class="lab-report">

  <!-- Report Header -->
  <header class="report-header">
    <h1 class="report-title">Pressure Losses in Piping Systems</h1>
    <p class="report-subtitle">Laboratory Analysis - Glasgow Caledonian University</p>
    <div class="report-meta">
      <span class="badge">Fluid Mechanics</span>
      <span class="date">30 March 2023</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Introduction Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Introduction
    </h2>
    
    <div class="section-content">
      <p>The experiment analyzed pressure losses in a closed-loop steel piping system using the HM 150.11 module. The system included a centrifugal pump, magnetic flow meter, control valve, and various piping components. Pressure gauges measured differential pressure across each element while varying flow rates.</p>
      
      <div class="image-card">
        <img src="/assets/img/projects/lab/hm_module.jpg" 
             alt="HM 150.11 Base Module" 
             class="report-image"
             loading="lazy">
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">HM 150.11 Losses in Pipe System module experimental setup</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Theory Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Pressure Loss Fundamentals
    </h2>
    
    <div class="theory-grid">
      <div class="theory-text">
        <p>Pressure losses in piping systems occur due to:</p>
        <ul>
          <li>Friction between fluid and pipe walls</li>
          <li>Changes in flow direction (elbows, tees)</li>
          <li>Changes in pipe diameter (reducers, expansions)</li>
          <li>Turbulence caused by fittings</li>
        </ul>
        <p>The HM 150.11 module quantifies these losses through direct measurement at multiple points in the system.</p>
      </div>
      
      <div class="theory-image">
        <img src="/assets/img/projects/lab/pipe_system_diagram.jpg" 
             alt="Pipe System Distribution" 
             loading="lazy">
        <p class="image-caption">Fig 2. Pipe system component distribution in HM 150.11 module</p>
      </div>
    </div>
    
    <div class="equation-box">
      <h3>Local Pressure Drop Calculation</h3>
      <div class="equation">
        Δp<sub>M</sub> = ζ × ½ρV<sup>2</sup>
      </div>
      <div class="variables">
        <p>Where:<br>
        Δp<sub>M</sub> = Local pressure drop (Pa)<br>
        ζ = Loss coefficient<br>
        ρ = Fluid density (kg/m³)<br>
        V = Flow velocity (m/s)</p>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Experimental Methodology
    </h2>
    
    <div class="method-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>System Setup</h3>
          <p>Assembled closed-loop system with pump, flow meter, control valve, and test sections. Calibrated all instruments before testing.</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Flow Rate Variation</h3>
          <p>Adjusted flow rate from 0.2 to 2.0 m/s using variable frequency drive on pump. Recorded stable readings at each increment.</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Data Collection</h3>
          <p>Measured pressure differentials across each component (elbows, reducers, valves) using calibrated pressure gauges.</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Analysis</h3>
          <p>Calculated loss coefficients and created pressure drop vs. flow rate curves for each component and system overall.</p>
        </div>
      </div>
    </div>
    
    <div class="equipment-card">
      <h3>Key Equipment Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">1"</span>
          <span class="spec-label">Pipe Diameter</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">10m</span>
          <span class="spec-label">Test Section Length</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">0.2-2.0 m/s</span>
          <span class="spec-label">Flow Range</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">998.2 kg/m³</span>
          <span class="spec-label">Water Density @20°C</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Results & Analysis
    </h2>
    
    <div class="results-summary">
      <p>The experiment revealed significant variation in pressure losses across different components:</p>
      <ul>
        <li>Control valve showed highest pressure drop</li>
        <li>Elbows and reducers demonstrated moderate losses</li>
        <li>Straight pipe sections had negligible pressure drop</li>
      </ul>
    </div>
    
    <div class="results-gallery">
      <div class="result-card">
        <img src="/assets/img/projects/lab/pressure_curve.jpg" 
             alt="Pressure Drop Curve" 
             loading="lazy">
        <div class="result-caption">
          <h4>Pressure vs Flow Rate</h4>
          <p>Linear relationship observed between flow rate and pressure drop across control valve</p>
        </div>
      </div>
      
      <div class="result-card">
        <img src="/assets/img/projects/lab/component_losses.jpg" 
             alt="Component Loss Comparison" 
             loading="lazy">
        <div class="result-caption">
          <h4>Component Comparison</h4>
          <p>Relative pressure losses across different piping elements</p>
        </div>
      </div>
    </div>
    
    <div class="data-table">
      <h3>Experimental Data Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Max ΔP (Pa)</th>
            <th>Loss Coefficient (ζ)</th>
            <th>Flow Rate (m/s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Control Valve</td>
            <td>12,450</td>
            <td>2.8</td>
            <td>1.8</td>
          </tr>
          <tr>
            <td>90° Elbow</td>
            <td>3,210</td>
            <td>0.9</td>
            <td>1.8</td>
          </tr>
          <tr>
            <td>Reducer</td>
            <td>2,780</td>
            <td>0.7</td>
            <td>1.8</td>
          </tr>
          <tr>
            <td>Straight Pipe</td>
            <td>320</td>
            <td>0.05</td>
            <td>1.8</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Conclusions & Recommendations
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <h3>Key Findings</h3>
        <ul>
          <li>Control valves account for >60% of system pressure loss</li>
          <li>Elbows and reducers contribute significantly to energy consumption</li>
          <li>Linear pressure drop-flow relationship confirmed</li>
          <li>HM 150.11 module provides accurate, repeatable measurements</li>
        </ul>
        
        <h3>Improvement Suggestions</h3>
        <div class="recommendations">
          <div class="recommendation">
            <div class="rec-icon">🔄</div>
            <p>Expand component variety to include tees, expansions, and different valve types</p>
          </div>
          <div class="recommendation">
            <div class="rec-icon">📊</div>
            <p>Implement ultrasonic flow measurement for non-intrusive verification</p>
          </div>
          <div class="recommendation">
            <div class="rec-icon">💻</div>
            <p>Integrate with CFD software for simulation-experiment correlation</p>
          </div>
        </div>
      </div>
      
      <div class="conclusion-image">
        <img src="/assets/img/projects/lab/lab_setup.jpg" 
             alt="Laboratory Setup" 
             loading="lazy">
        <p class="image-caption">Fig 3. Experimental setup at Glasgow Caledonian University</p>
      </div>
    </div>
  </section>

  <!-- References Section -->
  <section class="report-section references">
    <h2 class="section-header">
      <span class="section-number">06</span>
      References
    </h2>
    
    <div class="reference-list">
      <ol>
        <li>GUNT Hamburg. (2023). HM 150.11 Losses in Pipe System - Technical Documentation</li>
        <li>BYJU'S. (2023). Density of Water at Different Temperatures</li>
        <li>White, F. M. (2016). Fluid Mechanics (8th ed.). McGraw-Hill</li>
        <li>Massey, B. S. (2006). Mechanics of Fluids (8th ed.). Taylor & Francis</li>
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

.lab-report {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.report-header {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--medium-gray);
}

.report-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.2rem;
}

.report-subtitle {
  font-size: 1.3rem;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
}

.report-meta {
  display: flex;
  gap: 15px;
  align-items: center;
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

.date {
  font-size: 0.9rem;
  color: var(--dark-gray);
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

/* Section Styles */
.report-section {
  margin-bottom: 50px;
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

/* Theory Section */
.theory-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 25px 0;
}

.theory-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.image-caption {
  font-size: 0.85rem;
  color: var(--dark-gray);
  text-align: center;
  margin-top: 8px;
}

.equation-box {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  margin: 25px 0;
  border-left: 4px solid var(--primary-color);
}

.equation {
  font-size: 1.5rem;
  text-align: center;
  margin: 15px 0;
  font-family: 'Times New Roman', serif;
}

.variables {
  font-size: 0.95rem;
  color: var(--dark-gray);
}

/* Methodology Section */
.method-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.step {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.step-number {
  width: 36px;
  height: 36px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 15px;
}

.step-content h3 {
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.equipment-card {
  background: #f0f7ff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
}

.equipment-card h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
  text-align: center;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.spec-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.spec-value {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.spec-label {
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Results Section */
.results-summary {
  background: #f8f9fa;
  border-left: 4px solid var(--primary-color);
  padding: 15px 20px;
  margin-bottom: 25px;
  border-radius: 0 4px 4px 0;
}

.results-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.result-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.result-card img {
  width: 100%;
  height: auto;
  display: block;
}

.result-caption {
  padding: 15px;
}

.result-caption h4 {
  color: var(--secondary-color);
  margin-bottom: 8px;
}

.result-caption p {
  font-size: 0.9rem;
  color: var(--dark-gray);
}

.data-table {
  margin: 40px 0;
  overflow-x: auto;
}

.data-table h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: var(--primary-color);
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Conclusion Section */
.conclusion-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.conclusion-text h3 {
  color: var(--secondary-color);
  margin: 20px 0 15px;
}

.conclusion-text ul {
  padding-left: 20px;
  margin-bottom: 25px;
}

.conclusion-text li {
  margin-bottom: 8px;
}

.recommendations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.recommendation {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.rec-icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.conclusion-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* References Section */
.reference-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.reference-list ol {
  padding-left: 20px;
}

.reference-list li {
  margin-bottom: 10px;
  padding-left: 5px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .theory-grid, .conclusion-content {
    grid-template-columns: 1fr;
  }
  
  .conclusion-image {
    order: -1;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .report-title {
    font-size: 1.9rem;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .method-steps, .recommendations {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .lab-report {
    padding: 0 15px;
  }
  
  .report-title {
    font-size: 1.7rem;
  }
  
  .section-header {
    font-size: 1.4rem;
    margin: 30px 0 20px;
  }
  
  .report-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .results-gallery {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Simple animation for step elements
document.querySelectorAll('.step').forEach((step, index) => {
  step.style.opacity = '0';
  step.style.transform = 'translateY(20px)';
  step.style.transition = `all 0.5s ease ${index * 0.1}s`;
  
  setTimeout(() => {
    step.style.opacity = '1';
    step.style.transform = 'translateY(0)';
  }, 500);
});

// Table row highlight on hover
document.querySelectorAll('tbody tr').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.backgroundColor = '#e6f2ff';
  });
  
  row.addEventListener('mouseleave', () => {
    row.style.backgroundColor = '';
  });
});
</script>
