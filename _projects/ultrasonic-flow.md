---
title: "Ultrasonic Flow Rate Measurements - GCU Plant Room"
category: Research
description: "Field study of non-invasive flow measurement techniques in HVAC systems using ultrasonic technology."
tech: [Ultrasonic Flowmetry, Heat Transfer Analysis, Data Logging, Hydronic Systems, HVAC Monitoring]
image: /assets/img/projects/gcu-plant-room/ultrasonic_flow-1.png
importance: 2
---

<div class="flow-measurement-report">

  <!-- Report Header -->
  <header class="report-header">
    <h1 class="report-title">Ultrasonic Flow Rate Measurement</h1>
    <p class="report-subtitle">Glasgow Caledonian University Plant Room</p>
    <div class="report-meta">
      <span class="badge">Ultrasonic Flow Meters</span>
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
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-2.png" 
             alt="Precision Flow 190PD Installation" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Precision Flow 190PD ultrasonic transducer installation</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-4.png" 
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
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-6.png" 
             alt="Ultrasonic Measurement Setup" 
             class="diagram-img"
             loading="lazy">
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
          <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-3.png" alt="Precision Flow 190PD" loading="lazy">
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
          <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-5.png" alt="Kamstrup Multical 602" loading="lazy">
        </div>
        <div class="equipment-specs">
          <ul>
            <li><strong>Sensors:</strong> Paired PT100 RTDs</li>
            <li><strong>Accuracy:</strong> ±0.1°C (Class 2 per EN 1434)</li>
            <li><strong>Communication:</strong> M-Bus, Modbus (wireless)</li>
            <li><strong>Applications:</strong> District heating/cooling energy, power, flow</li>
          </ul>
        </div>
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
      <span class="section-number">3</span>
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

      <div class="step-item">
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

      <div class="step-item">
        <div class="step-number">5</div>
        <div class="step-content">
          <h4>System Calibration</h4>
          <p>Performed zero-flow calibration and verified against manufacturer specifications</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-number">6</div>
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
      <span class="section-number">4</span>
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
          <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-9.png" alt="Volume Flow Rate Graph" loading="lazy">
        </div>
        <div class="graph-analysis">
          <p>Flow stability maintained within ±2.5% of mean (0.00392 m³/s) despite minor system fluctuations</p>
        </div>
      </div>

      <div class="graph-container">
        <h3>Temperature Difference (ΔT)</h3>
        <div class="graph">
          <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-10.png" alt="Temperature Difference Graph" loading="lazy">
        </div>
        <div class="graph-analysis">
          <p>Initial negative ΔT indicates measurement anomaly, stabilizing to expected 0.5-1.0°C range after 5 minutes</p>
        </div>
      </div>

      <div class="graph-container">
        <h3>Heat Transfer Rate</h3>
        <div class="graph">
          <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-11.png" alt="Heat Transfer Graph" loading="lazy">
        </div>
        <div class="graph-analysis">
          <p>Peak heat transfer of 22.08W at 23 minutes correlates with maximum ΔT of 1.35°C</p>
        </div>
      </div>
    </div>

    <div class="data-table">
      <h3>Key Measurement Data</h3>
      <div class="data-table-image">
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-8.png"
             alt="Data table worksheet with highlighted values"
             class="table-img"
             loading="lazy">
        <p class="table-caption">Data table showing measurements with lowest values highlighted in blue (🟦) and highest values in yellow (🟨)</p>
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

  <!-- Analysis Section -->
  <section class="project-section analysis-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
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
      <span class="section-number">6</span>
      Flow Measurement Technologies
    </h2>
    
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
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-12.png"
             alt="Differential Pressure Meter"
             class="tech-img"
             loading="lazy">
        <h3>Differential Pressure</h3>
        <p>Measures ΔP across restriction using Bernoulli's principle</p>
      </div>
      <div class="tech-card">
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-13.png"
             alt="Positive Displacement Flowmeter"
             class="tech-img"
             loading="lazy">
        <h3>Positive Displacement</h3>
        <p>Measures exact volume of fluid passing through</p>
      </div>
      <div class="tech-card">
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-14.png"
             alt="Turbine Flow Meter"
             class="tech-img"
             loading="lazy">
        <h3>Turbine</h3>
        <p>Mechanical rotation proportional to flow velocity</p>
      </div>
      <div class="tech-card">
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-15.png"
             alt="Electromagnetic Flowmeter"
             class="tech-img"
             loading="lazy">
        <h3>Electromagnetic</h3>
        <p>Measures voltage induced by conductive fluid flow</p>
      </div>
    </div>

  </section>

  <!-- Conclusions -->
  <section class="report-section">
    <h2 class="section-header">
      <span class="section-number">7</span>
      Conclusions & Recommendations
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <h3>System Performance</h3>
        <p>The ultrasonic measurement system demonstrated superior performance for HVAC monitoring with minimal disruption to the existing infrastructure. Its non-invasive design eliminated pressure drops while delivering accurate, real-time data essential for energy analysis. The system also exhibited excellent stability, with a variation of only ±2.5%, and showed a clear correlation between key flow parameters. This non-intrusive approach proved especially beneficial in the university's HVAC environment, enhancing monitoring capabilities without compromising system integrity.</p>
      </div>

      <div class="conclusions-text">
        <h3>Key Findings</h3>
        <ul>
          <li>Ultrasonic measurement provided stable, repeatable results (±2.5% variation) without system intrusion</li>
          <li>Initial negative ΔT values suggest need for sensor warm-up period in future studies</li>
          <li>Strong correlation (R²=0.89) between ΔT and heat transfer validates measurement approach</li>
          <li>Non-invasive nature eliminates risk of fouling common in mechanical meters</li>
        </ul>
      </div>

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
        <img src="/assets/img/projects/gcu-plant-room/ultrasonic_flow-7.png"
             alt="Measurement System Diagram"
             class="conclusion-img"
             loading="lazy">
        <p class="image-caption">Proposed permanent monitoring installation</p>
      </div>
    </div>

  </section>

  <!-- References Section -->
  <section class="project-section references-section">
    <h2 class="section-header">
      <span class="section-number">8</span>
      References & Equipment
    </h2>
    
    <div class="references-grid">
      <div class="reference-card">
        <h3>Measurement Devices</h3>
        <ul>
          <li>Precision Flow 190PD Ultrasonic Flow Meter</li>
          <li>Kamstrup Multical 602 Heat Meter</li>
          <li>PT100 Temperature Sensors (Class A)</li>
        </ul>
      </div>
      
      <div class="reference-card">
        <h3>Technical Standards</h3>
        <ul>
          <li>ISO 12242:2012 - Ultrasonic flow meter testing</li>
          <li>EN 1434 - Heat meter requirements</li>
          <li>BS 1042 - Flow measurement in closed conduits</li>
        </ul>
      </div>
    </div>
  </section>

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

.flow-measurement-report {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
}

/* Typography */
.report-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.2rem;
}

.report-subtitle {
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

/* Project Meta */
.report-meta {
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
  max-height: 300px;
  object-fit: contain;
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

.pipe-specs {
  background: var(--light-gray);
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  clear: both;
}

.pipe-specs h3 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--secondary-color);
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

/* System Diagram */
.system-diagram {
  margin: 20px 0;
  text-align: center;
}

.diagram-img {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.diagram-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
  text-align: center;
}

/* Methodology Section */
.methodology-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.step-item {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid var(--primary-color);
}

.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.step-content h4 {
  margin-top: 0;
  color: var(--secondary-color);
}

.calculation-method {
  background: #f5f9ff;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  clear: both;
}

.formula-box {
  background: white;
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.formula-box p {
  margin: 10px 0;
}

/* Results Section */
.results-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

.results-graphs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.graph-container {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.graph-container img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.graph-analysis {
  padding: 10px 15px;
  background: #f9f9f9;
  font-size: 0.85rem;
}

.data-table {
  margin: 30px 0;
}

.data-table-image {
  text-align: center;
  margin: 20px 0;
}

.table-img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.table-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
  text-align: center;
}

.key-findings {
  background: #f0f7ff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
}

.key-findings h3 {
  margin-top: 0;
  color: var(--secondary-color);
}

/* Analysis Section */
.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.analysis-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.analysis-card h3 {
  margin-top: 0;
  color: var(--secondary-color);
}

/* Technology Comparison */
.technology-comparison {
  margin: 40px 0;
}

.comparison-table {
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.comparison-table th {
  background: var(--primary-color);
  color: white;
  padding: 12px;
  text-align: left;
}

.comparison-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #eee;
}

.technology-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.tech-card {
  background: white;
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

.tech-img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
}

/* Conclusions Section */
.conclusion-content {
  background: #f5fbf5;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border-left: 4px solid #2ecc71;
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
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

.implementation-notes {
  background: #f0f7ff;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
}

.implementation-notes ul {
  padding-left: 20px;
}

.implementation-notes li {
  margin-bottom: 10px;
}

.conclusion-image {
  margin-top: 30px;
  text-align: center;
}

.conclusion-img {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.image-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
  text-align: center;
}

/* References Section */
.references-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.reference-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.reference-card h3 {
  margin-top: 0;
  color: var(--secondary-color);
}

.reference-card ul {
  padding-left: 20px;
}

.reference-card li {
  margin-bottom: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .report-title {
    font-size: 1.9rem;
  }
  
  .report-subtitle {
    font-size: 1.3rem;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .visualization-images, .equipment-grid, .results-graphs, 
  .analysis-grid, .recommendations-grid {
    grid-template-columns: 1fr;
  }
  
  .methodology-steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .flow-measurement-report {
    padding: 15px;
  }
  
  .report-title {
    font-size: 1.7rem;
  }
  
  .section-header {
    font-size: 1.4rem;
    margin: 30px 0 20px;
  }
  
  .specs-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Add animation to methodology steps
  const steps = document.querySelectorAll('.step-item');
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
  const equipmentCards = document.querySelectorAll('.equipment-card, .tech-card');
  equipmentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '0 3px 10px rgba(0,0,0,0.08)';
    });
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
});
</script>
