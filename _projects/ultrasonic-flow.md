---
title: "Ultrasonic Flow Rate Measurements - GCU Plant Room"
category: Laboratory Reports
description: "Field study of non-invasive flow measurement techniques using ultrasonic technology at Glasgow Caledonian University facilities."
tech: [Ultrasonic Flow Meters, Heat Meters, Data Logging, HVAC Systems, Kamstrup Multical 602]
image: /assets/img/projects/lab/ultrasonic_flow_1.jpg
importance: 2
---

<div class="flow-measurement-report">

  <!-- Report Header -->
  <header class="report-header">
    <h1 class="report-title">Casework and Engineering Laboratory</h1>
    <p class="report-subtitle">Ultrasonic Flow Rate Measurements - 22/23 B</p>
    <div class="report-meta">
      <span class="badge">Field Study</span>
      <span class="date">3rd March 2023</span>
      <span class="location">Glasgow Caledonian University</span>
    </div>
    <div class="student-info">
      <span>Chong Man Hin | S2244554</span>
      <span>BEng(Hons) Building Services Engineering</span>
    </div>
  </header>

  <!-- Visual Data Summary -->
  <div class="visual-summary">
    <div class="summary-card">
      <div class="summary-value">0.78 m/s</div>
      <div class="summary-label">Average Flow Velocity</div>
    </div>
    <div class="summary-card">
      <div class="summary-value">1.35°C</div>
      <div class="summary-label">Max ΔT</div>
    </div>
    <div class="summary-card">
      <div class="summary-value">22.08 W</div>
      <div class="summary-label">Peak Heat Transfer</div>
    </div>
  </div>

  <!-- Introduction Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Introduction
    </h2>
    
    <div class="section-content">
      <p>Accurate fluid flow monitoring is critical for HVAC system optimization in industrial applications. This field study examines the implementation of non-invasive ultrasonic measurement technology at Glasgow Caledonian University's plant room, evaluating its effectiveness for continuous flow monitoring without system disruption.</p>
      
      <div class="system-diagram">
        <img src="/assets/img/projects/lab/measurement_setup.jpg" alt="Ultrasonic Measurement Setup" loading="lazy">
        <p class="diagram-caption">Fig 1. Measurement setup showing transducer placement on 80mm diameter pipe</p>
      </div>
    </div>
  </section>

  <!-- Equipment Section -->
  <section class="report-section equipment-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Measurement Equipment
    </h2>
    
    <div class="equipment-grid">
      <div class="equipment-card">
        <h3>Precision Flow 190PD</h3>
        <div class="equipment-image">
          <img src="/assets/img/projects/lab/ultrasonic_meter.jpg" alt="Precision Flow 190PD" loading="lazy">
        </div>
        <div class="equipment-specs">
          <ul>
            <li><strong>Principle:</strong> Transit-time ultrasonic measurement</li>
            <li><strong>Range:</strong> 0.01-25 m/s velocity</li>
            <li><strong>Accuracy:</strong> ±0.5% of reading</li>
            <li><strong>Output:</strong> 4-20mA, pulse, RS485</li>
          </ul>
        </div>
      </div>
      
      <div class="equipment-card">
        <h3>Kamstrup Multical 602</h3>
        <div class="equipment-image">
          <img src="/assets/img/projects/lab/heat_meter.jpg" alt="Kamstrup Multical 602" loading="lazy">
        </div>
        <div class="equipment-specs">
          <ul>
            <li><strong>Sensors:</strong> Paired PT100 RTDs</li>
            <li><strong>Accuracy:</strong> Class 2 per EN 1434</li>
            <li><strong>Communication:</strong> M-Bus, wireless</li>
            <li><strong>Applications:</strong> District heating/cooling</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="report-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Methodology
    </h2>
    
    <div class="methodology-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Site Preparation</h4>
          <p>Identified straight pipe section (10D upstream, 5D downstream) ensuring fully developed flow profile</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Transducer Installation</h4>
          <p>Mounted Precision Flow 190PD transducers at 45° angle with ultrasonic coupling gel for optimal signal transmission</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Temperature Sensor Placement</h4>
          <p>Installed Kamstrup PT100 sensors at supply/return positions with thermal paste for accurate ΔT measurement</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>Data Collection</h4>
          <p>Recorded measurements at 1-minute intervals over 20-minute period using integrated data logging</p>
        </div>
      </div>
    </div>
    
    <div class="calculation-method">
      <h3>Key Calculations</h3>
      <div class="calculation-grid">
        <div class="calculation-card">
          <div class="calc-title">Volume Flow Rate</div>
          <div class="calc-formula">Q<sub>v</sub> = v × A</div>
          <div class="calc-params">
            <span>v = measured velocity (m/s)</span>
            <span>A = πr² = 0.00503 m² (80mm pipe)</span>
          </div>
        </div>
        
        <div class="calculation-card">
          <div class="calc-title">Mass Flow Rate</div>
          <div class="calc-formula">Q<sub>m</sub> = Q<sub>v</sub> × ρ</div>
          <div class="calc-params">
            <span>ρ = 980 kg/m³ (water density)</span>
          </div>
        </div>
        
        <div class="calculation-card">
          <div class="calc-title">Heat Transfer</div>
          <div class="calc-formula">Q = Q<sub>m</sub> × C<sub>p</sub> × ΔT</div>
          <div class="calc-params">
            <span>C<sub>p</sub> = 4.2 kJ/kg°C</span>
            <span>ΔT = T<sub>supply</sub> - T<sub>return</sub></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="report-section results-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Results Analysis
    </h2>
    
    <div class="results-graphs">
      <div class="graph-container">
        <h3>Volume Flow Rate Over Time</h3>
        <div class="graph">
          <img src="/assets/img/projects/lab/flow_rate_graph.png" alt="Volume Flow Rate Graph" loading="lazy">
        </div>
        <div class="graph-analysis">
          <p>Flow stability maintained within ±2.5% of mean (0.00392 m³/s) despite minor system fluctuations</p>
        </div>
      </div>
      
      <div class="graph-container">
        <h3>Temperature Difference (ΔT)</h3>
        <div class="graph">
          <img src="/assets/img/projects/lab/deltaT_graph.png" alt="Temperature Difference Graph" loading="lazy">
        </div>
        <div class="graph-analysis">
          <p>Initial negative ΔT indicates measurement anomaly, stabilizing to expected 0.5-1.0°C range after 5 minutes</p>
        </div>
      </div>
      
      <div class="graph-container">
        <h3>Heat Transfer Rate</h3>
        <div class="graph">
          <img src="/assets/img/projects/lab/heat_transfer_graph.png" alt="Heat Transfer Graph" loading="lazy">
        </div>
        <div class="graph-analysis">
          <p>Peak heat transfer of 22.08W at 23 minutes correlates with maximum ΔT of 1.35°C</p>
        </div>
      </div>
    </div>
    
    <div class="data-table">
      <h3>Key Measurement Data</h3>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Average</th>
            <th>Std Dev</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Velocity (m/s)</td>
            <td>0.75</td>
            <td>0.80</td>
            <td>0.78</td>
            <td>0.012</td>
          </tr>
          <tr>
            <td>ΔT (°C)</td>
            <td>-0.24</td>
            <td>1.35</td>
            <td>0.62</td>
            <td>0.41</td>
          </tr>
          <tr>
            <td>Heat Transfer (W)</td>
            <td>-3.93</td>
            <td>22.08</td>
            <td>10.24</td>
            <td>6.57</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Flow Measurement Comparison -->
  <section class="report-section comparison-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Flow Measurement Technologies
    </h2>
    
    <div class="technology-comparison">
      <div class="tech-card">
        <div class="tech-icon">📊</div>
        <h3>Differential Pressure</h3>
        <ul>
          <li><strong>+</strong> High accuracy for clean fluids</li>
          <li><strong>-</strong> Permanent pressure loss</li>
          <li><strong>⏱️</strong> 1-2% of rate accuracy</li>
        </ul>
      </div>
      
      <div class="tech-card">
        <div class="tech-icon">🔄</div>
        <h3>Positive Displacement</h3>
        <ul>
          <li><strong>+</strong> Excellent for viscous fluids</li>
          <li><strong>-</strong> Moving parts require maintenance</li>
          <li><strong>⏱️</strong> 0.5% of reading accuracy</li>
        </ul>
      </div>
      
      <div class="tech-card">
        <div class="tech-icon">🌀</div>
        <h3>Turbine</h3>
        <ul>
          <li><strong>+</strong> Good for clean, fast flows</li>
          <li><strong>-</strong> Bearing wear over time</li>
          <li><strong>⏱️</strong> 0.25-0.5% of rate</li>
        </ul>
      </div>
      
      <div class="tech-card highlight">
        <div class="tech-icon">🔊</div>
        <h3>Ultrasonic</h3>
        <ul>
          <li><strong>+</strong> No pressure drop or moving parts</li>
          <li><strong>-</strong> Requires proper transducer setup</li>
          <li><strong>⏱️</strong> 0.5-1% of reading</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Conclusions -->
  <section class="report-section conclusions-section">
    <h2 class="section-header">
      <span class="section-number">06</span>
      Conclusions & Recommendations
    </h2>
    
    <div class="conclusions-content">
      <div class="conclusions-text">
        <h3>Key Findings</h3>
        <ul>
          <li>Ultrasonic measurement provided stable, repeatable results (±2.5% variation) without system intrusion</li>
          <li>Initial negative ΔT values suggest need for sensor warm-up period in future studies</li>
          <li>Strong correlation (R²=0.89) between ΔT and heat transfer validates measurement approach</li>
          <li>Non-invasive nature eliminates risk of fouling common in mechanical meters</li>
        </ul>
        
        <h3>Implementation Recommendations</h3>
        <div class="recommendations-grid">
          <div class="recommendation">
            <div class="rec-icon">🔧</div>
            <p>Implement quarterly transducer inspection and coupling gel replacement</p>
          </div>
          <div class="recommendation">
            <div class="rec-icon">📈</div>
            <p>Extend data logging period to capture full system operating cycles</p>
          </div>
          <div class="recommendation">
            <div class="rec-icon">🌡️</div>
            <p>Add redundant temperature sensors for measurement validation</p>
          </div>
        </div>
      </div>
      
      <div class="conclusions-image">
        <img src="/assets/img/projects/lab/system_overview.jpg" alt="GCU Plant Room Overview" loading="lazy">
        <p class="image-caption">Fig 2. GCU plant room showing measurement location</p>
      </div>
    </div>
  </section>

  <!-- References -->
  <section class="report-section references-section">
    <h2 class="section-header">
      <span class="section-number">07</span>
      References
    </h2>
    
    <div class="references-list">
      <ol>
        <li>Precision Flow Ltd. (2023). 190PD Ultrasonic Flow Meter Technical Manual. <em>www.precisionflow.co.uk/products.htm</em></li>
        <li>Kamstrup A/S. (2022). Multical 602 Heat Meter Product Specifications. <em>www.kamstrup.com</em></li>
        <li>ISO 12242:2012. Measurement of fluid flow in closed conduits - Ultrasonic transit-time meters for liquid</li>
        <li>BS EN 1434:2015. Heat meters - Part 1: General requirements</li>
        <li>GCU Engineering Department. (2023). Plant Room Operating Parameters</li>
      </ol>
    </div>
  </section>
</div>

<style>
/* Base Styles */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --light-gray: #f5f7fa;
  --medium-gray: #bdc3c7;
  --dark-gray: #7f8c8d;
  --text-color: #34495e;
  --white: #ffffff;
}

.flow-measurement-report {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.report-header {
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.report-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.2rem;
}

.report-subtitle {
  font-size: 1.5rem;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
}

.report-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  align-items: center;
}

.badge {
  background: var(--primary-color);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.date, .location {
  font-size: 0.95rem;
  color: var(--dark-gray);
}

.student-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--dark-gray);
  padding-top: 10px;
  border-top: 1px solid var(--medium-gray);
}

/* Visual Summary */
.visual-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.summary-card {
  background: var(--white);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  border-top: 4px solid var(--secondary-color);
}

.summary-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.summary-label {
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Section Styles */
.section-header {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-color);
  border-left: 4px solid var(--secondary-color);
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

.section-content {
  margin-bottom: 30px;
}

/* Equipment Section */
.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.equipment-card {
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.equipment-image {
  padding: 15px;
  background: var(--light-gray);
  text-align: center;
}

.equipment-image img {
  max-height: 200px;
  width: auto;
  border-radius: 4px;
}

.equipment-specs {
  padding: 15px;
}

.equipment-specs ul {
  padding-left: 20px;
}

.equipment-specs li {
  margin-bottom: 8px;
}

/* Methodology Section */
.methodology-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.step {
  display: flex;
  gap: 15px;
}

.step-number {
  background: var(--secondary-color);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  margin-bottom: 8px;
  color: var(--primary-color);
}

.calculation-method {
  background: var(--light-gray);
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
}

.calculation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.calculation-card {
  background: var(--white);
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  border-left: 3px solid var(--accent-color);
}

.calc-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.calc-formula {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--accent-color);
}

.calc-params {
  font-size: 0.85rem;
  color: var(--dark-gray);
}

.calc-params span {
  display: block;
  margin-bottom: 3px;
}

/* Results Section */
.results-graphs {
  display: grid;
  gap: 40px;
}

.graph-container {
  margin-bottom: 30px;
}

.graph {
  background: var(--white);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  margin: 15px 0;
}

.graph img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.graph-analysis {
  background: #f0f7ff;
  padding: 15px;
  border-radius: 6px;
  font-size: 0.95rem;
}

.data-table {
  overflow-x: auto;
  margin: 30px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid var(--medium-gray);
}

th {
  background: var(--primary-color);
  color: white;
}

tr:nth-child(even) {
  background: var(--light-gray);
}

/* Comparison Section */
.technology-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.tech-card {
  background: var(--white);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.tech-card.highlight {
  border: 2px solid var(--secondary-color);
  transform: scale(1.05);
}

.tech-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.tech-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.tech-card ul {
  padding-left: 20px;
}

.tech-card li {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* Conclusions Section */
.conclusions-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.conclusions-text {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.conclusions-image {
  display: flex;
  flex-direction: column;
}

.conclusions-image img {
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

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.recommendation {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.rec-icon {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-top: 2px;
}

/* References Section */
.references-list {
  background: var(--light-gray);
  padding: 20px;
  border-radius: 8px;
}

.references-list ol {
  padding-left: 20px;
}

.references-list li {
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.references-list em {
  color: var(--dark-gray);
}

/* Responsive Design */
@media (max-width: 992px) {
  .conclusions-content {
    grid-template-columns: 1fr;
  }
  
  .conclusions-image {
    order: -1;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .equipment-grid {
    grid-template-columns: 1fr;
  }
  
  .visual-summary {
    grid-template-columns: 1fr 1fr;
  }
  
  .technology-comparison {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .visual-summary {
    grid-template-columns: 1fr;
  }
  
  .technology-comparison {
    grid-template-columns: 1fr;
  }
  
  .student-info {
    flex-direction: column;
    gap: 5px;
  }
  
  .report-title {
    font-size: 1.7rem;
  }
  
  .report-subtitle {
    font-size: 1.2rem;
  }
}
</style>

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

// Highlight current section in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.report-section').forEach(section => {
  observer.observe(section);
});
</script>
