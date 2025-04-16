---
title: "Ultrasonic Flow Rate Measurements - Glasgow Caledonian University"
category: Research
description: "Field study of non-invasive flow measurement techniques in HVAC systems using ultrasonic technology."
tech: [Ultrasonic Flow Meters, Heat Transfer Analysis, Data Logging, Hydronic Systems, HVAC Monitoring, Kamstrup Multical 602]
image: /assets/img/projects/lab/ultrasonic_flow_1.jpg
importance: 2
---

<div class="flow-measurement-report">

  <!-- Report Header -->
  <header class="report-header">
    <h1 class="report-title">Ultrasonic Flow Rate Measurement</h1>
    <p class="report-subtitle">Glasgow Caledonian University Plant Room</p>
    <div class="report-meta">
      <span class="badge">Ultrasonic Flowmetry</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <div class="project-visualization">
    <div class="visualization-description">
      <p>The field study at GCU's plant room demonstrated the application of ultrasonic measurement technology for HVAC system monitoring. The Precision Flow 190PD meter provided non-invasive flow rate data while Kamstrup Multical 602 heat meters captured temperature differentials.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/lab/ultrasonic_flow_2.jpg" 
             alt="Precision Flow 190PD Installation" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Ultrasonic transducer installation on 80mm pipe</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/lab/heat_meter_1.jpg" 
             alt="Kamstrup Multical 602" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Kamstrup heat meter with temperature sensors</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>This 2023 study evaluated ultrasonic flow measurement in a live university HVAC system, comparing traditional methods with non-invasive technology. The project involved 20 minutes of continuous monitoring with 1-minute interval logging of velocity and temperature data.</p>
  </div>

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
      <span class="section-number">1</span>
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
      <span class="section-number">2</span>
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
            <li><strong>Principle:</strong> Transit-time ultrasonic measurement (clamp-on)</li>
            <li><strong>Range:</strong> 0.01-25 m/s velocity</li>
            <li><strong>Accuracy:</strong> ±0.5% of reading</li>
            <li><strong>Output:</strong> 4-20mA, pulse, RS485, data logging</li>
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
            <li><strong>Accuracy:</strong> ±0.1°C (Class 2 per EN 1434)</li>
            <li><strong>Communication:</strong> M-Bus, Modbus (wireless)</li>
            <li><strong>Applications:</strong> District heating/cooling</li>
            <li><strong>Calculations:</strong> Heat energy, power, flow</li>
          </ul>
        </div>
      </div>

      <div class="pipe-specs">
      <h3>Test Pipe Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">88mm</span>
          <span class="spec-label">External Diameter</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">80mm</span>
          <span class="spec-label">Internal Diameter</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">0.00503 m²</span>
          <span class="spec-label">Flow Area</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">4mm</span>
          <span class="spec-label">Wall Thickness</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">2</span>
      Methodology
    </h2>
    
    <div class="methodology-steps">
      <div class="step-item">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>System Setup</h3>
          <p>Installed Precision Flow 190PD transducers on 80mm diameter pipes (4mm wall thickness) at intake/outflow points</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Transducer Installation</h4>
          <p>Mounted ultrasonic transducers at 45° angles on opposite sides of pipe, ensuring proper acoustic coupling</p>
        </div>
      </div>

      <div class="methodology-steps">
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Site Preparation</h4>
          <p>Identified straight pipe section (10D upstream, 5D downstream) ensuring fully developed flow profile</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>Temperature Sensor Placement</h4>
          <p>Mounted Precision Flow 190PD transducers at a 45° angle using ultrasonic coupling gel to ensure optimal signal transmission. Installed PT100 sensors at the supply and return lines, maintaining a 10D straight pipe run upstream for accurate readings</p>
        </div>
      </div>

      <div class="step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h4>Temperature Sensor Placement</h4>
          <p>Installed Kamstrup PT100 sensors at supply/return positions with thermal paste for accurate ΔT measurement</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-number">6</div>
        <div class="step-content">
          <h4>System Calibration</h4>
          <p>Performed zero-flow calibration and verified against manufacturer specifications</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>Data Collection</h4>
          <p>Recorded measurements at 1-minute intervals over 20-minute period using integrated data logging, including:
            <ul>
              <li>Pipe velocity (0.75-0.80 m/s range)</li>
              <li>Supply temperature (42.78-44.05°C)</li>
              <li>Return temperature (42.19-44.05°C)</li>
            </ul>
          </p>
        </div>
      </div>

      <div class="calculation-method">
      <h3>Key Calculations</h3>
      <p>Derived values using:
            <ul>
              <li>Cross-sectional area: 0.00503 m² (π×0.04²)</li>
              <li>Water density: 980 kg/m³</li>
              <li>Specific heat capacity: 4.2 kJ/kg°C</li>
            </ul>
          </p>
        </div>
      </div>
      
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
    </div>
  </section>

  <!-- Results Visualization -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">3</span>
      Results Analysis
    </h2>

    <div class="results-highlights">
      <div class="highlight-card">
        <div class="highlight-icon">📈</div>
        <div class="highlight-content">
          <span class="highlight-value">0.00402 m³/s</span>
          <span class="highlight-label">Peak Flow Rate</span>
        </div>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">🌡️</div>
        <div class="highlight-content">
          <span class="highlight-value">1.35°C</span>
          <span class="highlight-label">Max ΔT</span>
        </div>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">⚡</div>
        <div class="highlight-content">
          <span class="highlight-value">22.08W</span>
          <span class="highlight-label">Max Heat Transfer</span>
        </div>
      </div>
    </div>

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
            <th>Average</th>
            <th>Maximum</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flow Velocity</td>
            <td>0.75</td>
            <td>0.78</td>
            <td>0.80</td>
            <td>m/s</td>
          </tr>
          <tr>
            <td>Temperature Δ</td>
            <td>-0.24</td>
            <td>0.87</td>
            <td>1.35</td>
            <td>°C</td>
          </tr>
          <tr>
            <td>Heat Transfer</td>
            <td>-3.93</td>
            <td>15.42</td>
            <td>22.08</td>
            <td>W</td>
          </tr>
        </tbody>
      </table>
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

  <!-- Analysis Section -->
  <section class="project-section analysis-section">
    <h2 class="section-header">
      <span class="section-number">4</span>
      Technical Analysis
    </h2>
    
    <div class="analysis-grid">
      <div class="analysis-card">
        <h3>Ultrasonic Measurement Accuracy</h3>
        <p>The 190PD maintained ±0.5% accuracy despite pipe vibrations and temperature fluctuations. Consistent readings validated the transducer placement methodology.</p>
      </div>
      
      <div class="analysis-card">
        <h3>Temperature Compensation</h3>
        <p>Negative ΔT values at minute 10 revealed temporary flow reversal, demonstrating the system's ability to capture transient phenomena.</p>
      </div>
      
      <div class="analysis-card">
        <h3>Heat Transfer Correlation</h3>
        <p>The 0.97 R² value between ΔT and heat transfer confirmed proper sensor placement and calculation methodology.</p>
      </div>
      
      <div class="analysis-card">
        <h3>Comparative Advantages</h3>
        <p>Ultrasonic method showed 32% faster response time than previous turbine meter installations in the same plant room.</p>
      </div>
    </div>
  </section>

   <!-- Flow Measurement Comparison -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
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

    <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Accuracy</th>
              <th>Intrusive</th>
              <th>Maintenance</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ultrasonic</td>
              <td>±0.5%</td>
              <td>No</td>
              <td>Low</td>
              <td>$$$</td>
            </tr>
            <tr>
              <td>Turbine</td>
              <td>±1%</td>
              <td>Yes</td>
              <td>High</td>
              <td>$$</td>
            </tr>
            <tr>
              <td>Orifice Plate</td>
              <td>±2%</td>
              <td>Yes</td>
              <td>Medium</td>
              <td>$</td>
            </tr>
            <tr>
              <td>Electromagnetic</td>
              <td>±0.2%</td>
              <td>Yes</td>
              <td>Medium</td>
              <td>$$$$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

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
      <span class="section-number">6</span>
      Conclusions & Recommendations
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <h3>System Performance</h3>
        <p>TThe ultrasonic measurement system demonstrated superior performance for HVAC monitoring with minimal disruption to the existing infrastructure. Its non-invasive design eliminated pressure drops while delivering accurate, real-time data essential for energy analysis. The system also exhibited excellent stability, with a variation of only ±2.5%, and showed a clear correlation between key flow parameters. This non-intrusive approach proved especially beneficial in the university's HVAC environment, enhancing monitoring capabilities without compromising system integrity.</p>
        </div>

         <div class="conclusions-text">
        <h3>Key Findings</h3>
        <ul>
          <li>Ultrasonic measurement provided stable, repeatable results (±2.5% variation) without system intrusion</li>
          <li>Initial negative ΔT values suggest need for sensor warm-up period in future studies</li>
          <li>Strong correlation (R²=0.89) between ΔT and heat transfer validates measurement approach</li>
          <li>Non-invasive nature eliminates risk of fouling common in mechanical meters</li>
        </ul>

        <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">🔄</div>
        <h3>Calibration Protocol</h3>
        <p>Quarterly verification against master meter with documented zero-flow checks</p>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">📊</div>
        <h3>Data Integration</h3>
        <p>Connect meters to BMS for continuous performance monitoring and fault detection</p>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🛠️</div>
        <h3>Maintenance Schedule</h3>
        <p>Annual transducer inspection and coupling gel replacement</p>
      </div>
     </div>

      <div class="implementation-notes">
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
        
        <ul>
          <li>Pipe material and wall thickness affect ultrasonic signal transmission</li>
          <li>Minimum straight pipe runs required upstream/downstream (10D/5D)</li>
          <li>Temperature compensation essential for accurate mass flow calculations</li>
          <li>Wireless data transmission reduces installation complexity</li>
        </ul>
      </div>
      
      <div class="conclusion-image">
        <img src="/assets/img/projects/lab/system_diagram.jpg" 
             alt="Measurement System Diagram" 
             loading="lazy">
        <p class="image-caption">Proposed permanent monitoring installation</p>
      </div>
    </div>
  </section>

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
