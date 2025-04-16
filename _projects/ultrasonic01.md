---
title: "Ultrasonic Flow Rate Measurements - Glasgow Caledonian University"
category: Research
description: "Site visit report analyzing ultrasonic flow measurements in university HVAC systems using Precision Flow 190PD and Kamstrup Multical 602."
tech: [Ultrasonic Flowmetry, Heat Transfer Analysis, HVAC Monitoring, Data Visualization]
image: /assets/img/projects/lab/ultrasonic_flow_1.jpg
importance: 2
---

<div class="flow-measurement-report">

  <!-- Report Header -->
  <header class="report-header">
    <h1 class="report-title">Casework and Engineering Laboratory</h1>
    <p class="report-subtitle">Ultrasonic Flow Rate Measurements - 22/23 B</p>
    <div class="report-meta">
      <span class="badge">Site Visit Report</span>
      <span class="date">3rd March 2023</span>
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
    
    <div class="text-content">
      <p>Accurate flow rate monitoring is critical for HVAC system optimization at Glasgow Caledonian University. This report evaluates non-invasive ultrasonic measurement technology using the Precision Flow 190PD system, comparing its performance against traditional flow measurement methods.</p>
    </div>
    
    <div class="equipment-showcase">
      <div class="equipment-card">
        <img src="/assets/img/projects/lab/ultrasonic_meter.jpg" 
             alt="Precision Flow 190PD Ultrasonic Meter" 
             loading="lazy">
        <div class="equipment-caption">
          <span>Precision Flow 190PD</span>
          <span>Ultrasonic Flow Meter</span>
        </div>
      </div>
      <div class="equipment-card">
        <img src="/assets/img/projects/lab/heat_meter.jpg" 
             alt="Kamstrup Multical 602 Heat Meter" 
             loading="lazy">
        <div class="equipment-caption">
          <span>Kamstrup Multical 602</span>
          <span>Heat Flow Meter</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Methodology
    </h2>
    
    <div class="methodology-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>System Setup</h3>
          <p>Installed Precision Flow 190PD transducers on 80mm diameter pipes (4mm wall thickness) at intake/outflow points</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Data Collection</h3>
          <p>Recorded measurements at 1-minute intervals for 20 minutes including:
            <ul>
              <li>Pipe velocity (0.75-0.80 m/s range)</li>
              <li>Supply temperature (42.78-44.05°C)</li>
              <li>Return temperature (42.19-44.05°C)</li>
            </ul>
          </p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Calculations</h3>
          <p>Derived values using:
            <ul>
              <li>Cross-sectional area: 0.00503 m² (π×0.04²)</li>
              <li>Water density: 980 kg/m³</li>
              <li>Specific heat capacity: 4.2 kJ/kg°C</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    
    <div class="formula-box">
      <h3>Heat Transfer Calculation</h3>
      <div class="formula">
        Q = m × C<sub>p</sub> × ΔT
      </div>
      <p>Where:<br>
      Q = Heat transfer rate (W)<br>
      m = Mass flow rate (kg/s)<br>
      C<sub>p</sub> = Specific heat capacity<br>
      ΔT = Temperature difference</p>
    </div>
  </section>

  <!-- Results Visualization -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Results Analysis
    </h2>
    
    <div class="results-grid">
      <div class="result-chart">
        <img src="/assets/img/projects/lab/flow_rate_chart.png" 
             alt="Volume Flow Rate Over Time" 
             loading="lazy">
        <div class="chart-caption">
          <span>Fig 1.</span>
          <span>Volume flow rate showing peak of 0.00402 m³/s at 12 mins</span>
        </div>
      </div>
      
      <div class="result-chart">
        <img src="/assets/img/projects/lab/temp_diff_chart.png" 
             alt="Temperature Difference Over Time" 
             loading="lazy">
        <div class="chart-caption">
          <span>Fig 2.</span>
          <span>ΔT reaching maximum 1.35°C at 23 mins</span>
        </div>
      </div>
      
      <div class="result-chart">
        <img src="/assets/img/projects/lab/heat_transfer_chart.png" 
             alt="Heat Transfer Rate Over Time" 
             loading="lazy">
        <div class="chart-caption">
          <span>Fig 3.</span>
          <span>Heat transfer peaking at 22.08W</span>
        </div>
      </div>
    </div>
    
    <div class="key-findings">
      <h3>Key Observations</h3>
      <ul>
        <li>Strong correlation between ΔT and heat transfer patterns</li>
        <li>System response time visible in temperature lag</li>
        <li>Average flow velocity stability at 0.78 m/s (±0.02)</li>
      </ul>
    </div>
  </section>

  <!-- Flow Measurement Comparison -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Flow Measurement Technologies
    </h2>
    
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Accuracy</th>
            <th>Advantages</th>
            <th>Limitations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ultrasonic (190PD)</td>
            <td>±0.5%</td>
            <td>Non-invasive, bidirectional</td>
            <td>Requires clean fluid</td>
          </tr>
          <tr>
            <td>Differential Pressure</td>
            <td>±1-2%</td>
            <td>Wide industry acceptance</td>
            <td>High pressure drop</td>
          </tr>
          <tr>
            <td>Turbine</td>
            <td>±0.25%</td>
            <td>Excellent for clean liquids</td>
            <td>Moving parts wear</td>
          </tr>
          <tr>
            <td>Electromagnetic</td>
            <td>±0.2%</td>
            <td>No pressure drop</td>
            <td>Conductive fluids only</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="technology-cards">
      <div class="tech-card">
        <img src="/assets/img/projects/lab/differential_meter.jpg" 
             alt="Differential Pressure Meter" 
             loading="lazy">
        <h3>Differential Pressure</h3>
        <p>Measures ΔP across restriction using Bernoulli's principle</p>
      </div>
      <div class="tech-card">
        <img src="/assets/img/projects/lab/turbine_meter.jpg" 
             alt="Turbine Flow Meter" 
             loading="lazy">
        <h3>Turbine</h3>
        <p>Mechanical rotation proportional to flow velocity</p>
      </div>
    </div>
  </section>

  <!-- Conclusions -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Conclusions & Recommendations
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <h3>System Performance</h3>
        <p>The ultrasonic measurement system demonstrated excellent stability (±2.5% variation) with clear correlation between flow parameters. The non-invasive nature proved particularly advantageous for the university's HVAC monitoring.</p>
        
        <h3>Implementation Recommendations</h3>
        <ol>
          <li>Quarterly calibration of ultrasonic transducers</li>
          <li>Installation of permanent data logging system</li>
          <li>Comparative validation with turbine meter annually</li>
          <li>Temperature sensor shielding for improved ΔT accuracy</li>
        </ol>
      </div>
      
      <div class="conclusion-image">
        <img src="/assets/img/projects/lab/system_diagram.jpg" 
             alt="Measurement System Diagram" 
             loading="lazy">
        <p class="image-caption">Proposed permanent monitoring installation</p>
      </div>
    </div>
  </section>

  <!-- References -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">06</span>
      References
    </h2>
    
    <div class="references-list">
      <ol>
        <li>Precision Flow 190PD Technical Manual, 2022</li>
        <li>Kamstrup Multical 602 Installation Guide</li>
        <li>ASHRAE Handbook - HVAC Systems and Equipment</li>
        <li>ISO 12242:2012 Measurement of fluid flow</li>
      </ol>
    </div>
  </section>
</div>

<style>
/* Base Styles */
.flow-measurement-report {
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #333;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.report-header {
  margin-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
}

.report-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.report-subtitle {
  font-size: 1.4rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.report-meta {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.badge {
  background: #3498db;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.date {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.tech-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  background: #ecf0f1;
  color: #34495e;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #bdc3c7;
}

/* Section Styles */
.section-header {
  font-size: 1.6rem;
  color: #2c3e50;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  margin: 40px 0 25px;
  display: flex;
  align-items: center;
}

.section-number {
  background: #3498db;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 1rem;
}

/* Equipment Showcase */
.equipment-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.equipment-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.equipment-card img {
  width: 100%;
  height: auto;
  display: block;
}

.equipment-caption {
  padding: 12px;
  background: #f8f9fa;
  font-size: 0.9rem;
}

.equipment-caption span {
  display: block;
}

.equipment-caption span:first-child {
  font-weight: 600;
}

/* Methodology Steps */
.methodology-steps {
  display: grid;
  gap: 20px;
  margin: 25px 0;
}

.step {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.step-number {
  background: #3498db;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
}

.step-content h3 {
  margin-top: 0;
  color: #2c3e50;
}

.step-content ul {
  padding-left: 20px;
}

/* Formula Box */
.formula-box {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border-left: 4px solid #3498db;
}

.formula {
  font-size: 1.4rem;
  text-align: center;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
}

/* Results Grid */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.result-chart {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.result-chart img {
  width: 100%;
  height: auto;
  display: block;
}

.chart-caption {
  padding: 12px;
  background: #f8f9fa;
  font-size: 0.85rem;
}

.chart-caption span:first-child {
  font-weight: 600;
  color: #3498db;
  margin-right: 5px;
}

.key-findings {
  background: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 30px;
}

.key-findings h3 {
  margin-top: 0;
  color: #2c3e50;
}

/* Comparison Table */
.comparison-table {
  overflow-x: auto;
  margin: 30px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background: #f8f9fa;
  font-weight: 600;
}

tr:hover {
  background: #f5f9ff;
}

/* Technology Cards */
.technology-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.tech-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.tech-card img {
  width: 100%;
  height: auto;
  display: block;
}

.tech-card h3 {
  margin: 15px 15px 5px;
  color: #2c3e50;
}

.tech-card p {
  margin: 0 15px 15px;
  font-size: 0.9rem;
  color: #7f8c8d;
}

/* Conclusion Section */
.conclusion-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.conclusion-text h3 {
  color: #2c3e50;
}

.conclusion-image {
  display: flex;
  flex-direction: column;
}

.conclusion-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-caption {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #7f8c8d;
  text-align: center;
}

/* References */
.references-list ol {
  padding-left: 20px;
}

.references-list li {
  margin-bottom: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .conclusion-content {
    grid-template-columns: 1fr;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .section-header {
    font-size: 1.4rem;
  }
  
  .report-title {
    font-size: 1.7rem;
  }
  
  .report-subtitle {
    font-size: 1.2rem;
  }
}
</style>

<script>
// Simple script for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add animation to methodology steps
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }, 500);
  });
  
  // Add hover effects to equipment cards
  const equipmentCards = document.querySelectorAll('.equipment-card');
  equipmentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
});
</script>
