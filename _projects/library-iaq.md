---
title: "Indoor Air Quality Study - Library Sub-Area 4"
category: Building Systems
description: "Comprehensive IAQ assessment and HVAC redesign for library study areas with mould mitigation strategies."
tech: [IAQ Monitoring, HVAC Design, CO2 Analysis, Mould Assessment, Energy Recovery, CFD Analysis]
image: /assets/img/projects/iaq/library-iaq-1.png
importance: 2
---

<div class="iaq-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Indoor Air Quality Optimization</h1>
    <p class="project-subtitle">Library Study Areas Assessment</p>
    <div class="project-meta">
      <span class="badge">Building Systems</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <div class="project-visualization">
    <div class="visualization-description">
      <p>The study assessed two library study rooms (Room A & B) (185.3m² total) with 40+ computer workstations, analyzing 8 key IAQ parameters and thermal comfort conditions such as identifying CO₂ and formaldehyde exceedances during peak occupancy. The assessment followed Hong Kong's IAQ Certification Scheme standards. The redesign proposes a heat recovery ventilation system integrated with existing FCUs.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/iaq/library-area-a.jpg" 
             alt="Library Room A with computer workstations" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Room A showing diffuser locations and measurement points</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/iaq/mould-growth.jpg" 
             alt="Mould observed on window frame" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Mould growth at window frame (0.0025m²)</p>
      </div>
    </div>
  </div>
  
  <!-- Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">1</span>
      Project Overview
    </h2>
    
    <div class="project-description">
      <p>This IAQ assessment followed Hong Kong's Certification Scheme for Offices and Public Places (2019), measuring 8 parameters across two study rooms over 8-hour periods. Key findings showed CO₂ peaks of 1,469ppm (Room A) and 1,551ppm (Room B) at full occupancy, exceeding Good Class thresholds, along with formaldehyde levels above Excellent Class criteria.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/iaq/measurement-setup.jpg" 
               alt="IAQ measurement equipment in use" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">TSI IAQ-CALC meter measuring CO₂ and CO concentrations</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/iaq/diffuser-mould.jpg" 
               alt="Mould growth on air diffuser" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Mould observed on 5 diffuser blades in Room A (largest area 0.14m²)</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Key Assessment Findings</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">1,551ppm</span>
          <span class="spec-label">Peak CO₂ (Room B)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">137.5ppb</span>
          <span class="spec-label">Max HCHO (vs 81ppb limit)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">7</span>
          <span class="spec-label">Mould-affected surfaces</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">30%</span>
          <span class="spec-label">Occupants dissatisfied with temperature</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">1,469ppm</span>
          <span class="spec-label">Peak CO₂ (Room A)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">7/8</span>
          <span class="spec-label">Parameters Met Good Class</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">583 l/s</span>
          <span class="spec-label">Required FA Increase (Room A)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">1.49 yrs</span>
          <span class="spec-label">Energy Payback Period</span>
        </div>
      </div>
    </div>

    <div class="facilities-overview">
      <h3 class="subsection-header">Assessment Parameters</h3>
      <div class="facilities-grid">
        <div class="facility-item">
          <span class="facility-icon">🌡️</span>
          <span class="facility-name">Thermal Comfort</span>
          <span class="facility-detail">Temp, RH, Air Velocity</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">☁️</span>
          <span class="facility-name">Chemical Pollutants</span>
          <span class="facility-detail">CO, CO₂, TVOC, HCHO</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">🧫</span>
          <span class="facility-name">Particulates</span>
          <span class="facility-detail">PM₁₀, Mould</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">📝</span>
          <span class="facility-name">Subjective Feedback</span>
          <span class="facility-detail">12-question survey</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Add this in the Project Overview section -->
<section class="project-section">
  <h2 class="section-header">
    <span class="section-number">1.1</span>
    IAQ Standards Reference
  </h2>

  <div class="data-table-container">
    <h3 class="table-title">Hong Kong IAQ Objectives for Offices & Public Places</h3>
    <div class="table-scroll">
      <table class="data-table">
        <thead>
          <tr>
            <th rowspan="2">Parameter</th>
            <th rowspan="2">Unit</th>
            <th colspan="2">Target Level</th>
          </tr>
          <tr>
            <th>Excellent Class</th>
            <th>Good Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carbon Dioxide (CO₂)</td>
            <td>ppmv</td>
            <td>800</td>
            <td>1000</td>
          </tr>
          <!-- Additional rows for standards data -->
        </tbody>
      </table>
    </div>
    <p class="table-caption">Table 3. Hong Kong IAQ Certification Scheme standards</p>
  </div>
</section>

  <!-- Methodology Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">2</span>
      Methodology
    </h2>

    <div class="methodology-steps">
      <div class="step-item">
        <div class="step-number">Step 1</div>
        <div class="step-content">
          <h4>Objective Assessment</h4>
          <ul>
            <li>8-hour intermittent monitoring at 2 sampling points</li>
            <li>Parameters: Temp, RH, CO, CO₂, TVOC, HCHO, RSP, Mould</li>
            <li>Equipment: Aerocet 831, Formaldemeter™, ppbRAE 3000+</li>
          </ul>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 2</div>
        <div class="step-content">
          <h4>Subjective Assessment</h4>
          <ul>
            <li>Occupant questionnaires on thermal comfort</li>
            <li>30+ responses collected per room</li>
            <li>Parameters: Temperature, humidity, air movement perception</li>
          </ul>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 3</div>
        <div class="step-content">
          <h4>System Analysis</h4>
          <ul>
            <li>HVAC performance evaluation</li>
            <li>Full-load CO₂ projection calculations</li>
            <li>Energy efficiency assessment</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="image-comparison">
      <div class="image-card">
        <img src="/assets/img/projects/iaq/measurement-setup.jpg" 
             alt="IAQ Measurement Setup" 
             class="project-image"
             loading="lazy">
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Field measurement using TSI IAQ-CALC meter</span>
        </div>
      </div>
    </div>
  </section>

  <!-- System Analysis Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">3</span>
      System Analysis
    </h2>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Key Issues Identified
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Ventilation Deficiencies</h4>
          <ul class="system-features">
            <li>Existing fresh air intake: 2188m³/h (Room A), 2312m³/h (Room B)</li>
            <li>Required at full load: 4288m³/h (Room A), 4879m³/h (Room B)</li>
            <li>CO₂ concentration delay of 30-45 minutes after occupancy changes</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <div class="system-icon">💨</div>
            <h5>Airflow Distribution</h5>
            <p>0.17m/s average velocity (below 0.2m/s Excellent Class threshold)</p>
          </div>
          <div class="system-type-card">
            <div class="system-icon">🦠</div>
            <h5>Mould Growth</h5>
            <p>7 affected areas (all &lt;0.3m²) due to condensation at diffusers</p>
          </div>
          <div class="system-type-card">
            <div class="system-icon">🔄</div>
            <h5>System Response</h5>
            <p>No PAU in existing system, FCUs only handle recirculated air</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Measurement Data Summary</h4>
        
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Room A Parameters</summary>
            <table class="data-table">
              <tr><th>Parameter</th><th>Average</th><th>Excellent Class</th><th>Good Class</th></tr>
              <tr><td>Temp (°C)</td><td>23.4</td><td>20-25.5</td><td>&lt;25.5</td></tr>
              <tr><td>RH (%)</td><td>56.7</td><td>40-70</td><td>&lt;70</td></tr>
              <tr><td>CO₂ (ppm)</td><td>732</td><td>800</td><td>1000</td></tr>
              <tr><td>HCHO (ppb)</td><td>95.4</td><td>57</td><td>81</td></tr>
            </table>
          </details>
          
          <details class="spec-group">
            <summary>Room B Parameters</summary>
            <table class="data-table">
              <tr><th>Parameter</th><th>Average</th><th>Excellent Class</th><th>Good Class</th></tr>
              <tr><td>Temp (°C)</td><td>23.4</td><td>20-25.5</td><td>&lt;25.5</td></tr>
              <tr><td>RH (%)</td><td>56.7</td><td>40-70</td><td>&lt;70</td></tr>
              <tr><td>CO₂ (ppm)</td><td>756</td><td>800</td><td>1000</td></tr>
              <tr><td>HCHO (ppb)</td><td>137.5</td><td>57</td><td>81</td></tr>
            </table>
          </details>
        </div>
      </div>
    </article>

     <div class="results-tabs">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="objective">Objective Data</button>
        <button class="tab-button" data-tab="subjective">Subjective Feedback</button>
        <button class="tab-button" data-tab="mould">Mould Assessment</button>
      </div>
      
      <div class="tab-content active" id="objective">
        <table class="data-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Room A</th>
              <th>Room B</th>
              <th>Good Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CO₂ (ppm)</td>
              <td>732</td>
              <td>756</td>
              <td>&lt;1000</td>
            </tr>
            <tr>
              <td>HCHO (ppb)</td>
              <td>95.4*</td>
              <td>137.5*</td>
              <td>&lt;81</td>
            </tr>
            <tr>
              <td>TVOC (ppb)</td>
              <td>165</td>
              <td>183</td>
              <td>&lt;261</td>
            </tr>
          </tbody>
        </table>
        <p>*Exceeded good class thresholds</p>
      </div>
      
      <div class="tab-content" id="subjective">
        <div class="survey-results">
          <div class="survey-item">
            <h5>Thermal Comfort Satisfaction</h5>
            <div class="survey-bar" style="width: 70%;">70%</div>
          </div>
          <div class="survey-item">
            <h5>Reported Mould Awareness</h5>
            <div class="survey-bar" style="width: 15%;">15%</div>
          </div>
        </div>
      </div>
      
      <div class="tab-content" id="mould">
        <div class="mould-findings">
          <div class="mould-item">
            <span class="mould-location">Room A Diffusers</span>
            <span class="mould-area">0.35m² total</span>
          </div>
          <div class="mould-item">
            <span class="mould-location">Room B Window Frame</span>
            <span class="mould-area">0.0025m²</span>
          </div>
        </div>
      </div>
    </div>
  </section>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
        </svg>
        Data Visualization
      </h3>
      
      <div class="diagram-grid">
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/iaq/co2-trend.jpg" 
                 alt="CO2 concentration vs occupancy" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">CO₂ Correlation</span>
            <span class="diagram-fig">Fig 3. CO₂ levels lag occupancy changes by 30-45 minutes</span>
          </div>
        </div>
        
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/iaq/hcho-trend.jpg" 
                 alt="Formaldehyde concentration trend" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">HCHO Levels</span>
            <span class="diagram-fig">Fig 4. Formaldehyde consistently exceeds Excellent Class limits</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Add this in the System Analysis section after the existing content -->
<section class="project-section">
  <h2 class="section-header">
    <span class="section-number">3.1</span>
    Detailed Measurement Data
  </h2>

  <!-- Room A Detailed Data Table -->
  <div class="data-table-container">
    <h3 class="table-title">Room A Measurement Results</h3>
    <div class="table-scroll">
      <table class="data-table">
        <thead>
          <tr>
            <th>Time Period</th>
            <th>Time</th>
            <th>Freq</th>
            <th>Velocity (m/s)</th>
            <th>Temp (°C)</th>
            <th>RH%</th>
            <th>CO (ppm)</th>
            <th>CO₂ (ppm)</th>
            <th>TVOC (ppb)</th>
            <th>PM₁₀ (µg/m³)</th>
            <th>HCHO (ppb)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="6">8:30-10:30</td>
            <td>9:15</td>
            <td>1</td>
            <td>0.14</td>
            <td>23.2</td>
            <td>56.4</td>
            <td>0.5</td>
            <td>456</td>
            <td>140</td>
            <td>6.2</td>
            <td>160</td>
          </tr>
          <!-- Additional rows for Room A data -->
        </tbody>
      </table>
    </div>
    <p class="table-caption">Table 1. Room A detailed measurement results</p>
  </div>

  <!-- Room B Detailed Data Table -->
  <div class="data-table-container">
    <h3 class="table-title">Room B Measurement Results</h3>
    <div class="table-scroll">
      <table class="data-table">
        <thead>
          <tr>
            <th>Time Period</th>
            <th>Time</th>
            <th>Freq</th>
            <th>Velocity (m/s)</th>
            <th>Temp (°C)</th>
            <th>RH%</th>
            <th>CO (ppm)</th>
            <th>CO₂ (ppm)</th>
            <th>TVOC (ppb)</th>
            <th>PM₁₀ (µg/m³)</th>
            <th>HCHO (ppb)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="6">8:30-10:30</td>
            <td>10:00</td>
            <td>1</td>
            <td>0.11</td>
            <td>21.6</td>
            <td>49.7</td>
            <td>0.4</td>
            <td>484</td>
            <td>134</td>
            <td>6</td>
            <td>120</td>
          </tr>
          <!-- Additional rows for Room B data -->
        </tbody>
      </table>
    </div>
    <p class="table-caption">Table 2. Room B detailed measurement results</p>
  </div>
</section>

<!-- Add this in the System Analysis section -->
<section class="project-section">
  <h2 class="section-header">
    <span class="section-number">3.2</span>
    Mould Observation Summary
  </h2>

  <div class="side-by-side-tables">
    <!-- Room A Mould Data -->
    <div class="data-table-container">
      <h3 class="table-title">Room A Mould Growth</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Count</th>
            <th>Area (m²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diffuser 1</td>
            <td>1</td>
            <td>0.01</td>
          </tr>
          <!-- Additional rows for Room A mould data -->
        </tbody>
      </table>
    </div>

    <!-- Room B Mould Data -->
    <div class="data-table-container">
      <h3 class="table-title">Room B Mould Growth</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Count</th>
            <th>Area (m²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diffuser 1</td>
            <td>1</td>
            <td>0.042</td>
          </tr>
          <!-- Additional rows for Room B mould data -->
        </tbody>
      </table>
    </div>
  </div>
</section>

  <!-- Redesign Proposal Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">4</span>
      Redesign Proposal
    </h2>

    <!-- Add this in the Redesign Proposal section -->
<section class="project-section calculations-section">
  <h2 class="section-header">
    <span class="section-number">4.1</span>
    CO₂ Concentration Calculations
  </h2>

  <article class="design-subsection">
    <h3 class="subsection-header">
      <svg class="subsection-icon" viewBox="0 0 24 24">
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
      </svg>
      Full Load CO₂ Analysis
    </h3>

    <div class="calculation-method">
      <h4>Calculation Methodology</h4>
      <p>The CO₂ concentration at full load is calculated using the steady-state equation:</p>
      <div class="formula">
        C<sub>∞</sub> = (Q<sub>v</sub>C<sub>v</sub> + G) / Q<sub>v</sub>
      </div>
      <p>Where:</p>
      <ul class="variable-list">
        <li>C<sub>∞</sub> = Indoor CO₂ concentration (m³/m³)</li>
        <li>Q<sub>v</sub> = Fresh air supply rate (m³/h)</li>
        <li>C<sub>v</sub> = Outdoor CO₂ concentration (0.000409 m³/m³)</li>
        <li>G = CO₂ generation rate (m³/h)</li>
      </ul>
    </div>

    <div class="side-by-side-calculations">
      <!-- Room A Calculation -->
      <div class="calculation-card">
        <h5>Room A Analysis</h5>
        <div class="calculation-steps">
          <p><strong>Steady State Period:</strong> 15:30-16:00</p>
          <p><strong>Average CO₂ (C<sub>∞</sub>):</strong> 738 ppm</p>
          <p><strong>Average Occupancy:</strong> 9 people</p>
          <p><strong>CO₂ Generation (G):</strong> 9 × 0.08 = 0.72 m³/h</p>
          <p><strong>Calculated Q<sub>v</sub>:</strong> 2,188.45 m³/h</p>
          <p><strong>Full Load (29 people):</strong></p>
          <ul>
            <li>Projected CO₂: 1,469 ppm</li>
            <li>Required FA for 950 ppm: 4,288 m³/h (1,191 l/s)</li>
            <li>FA per person: 41.07 l/s/p</li>
            <li>Improvement needed: 583 l/s</li>
          </ul>
        </div>
      </div>

      <!-- Room B Calculation -->
      <div class="calculation-card">
        <h5>Room B Analysis</h5>
        <div class="calculation-steps">
          <p><strong>Steady State Period:</strong> 10:35-11:05</p>
          <p><strong>Average CO₂ (C<sub>∞</sub>):</strong> 582 ppm</p>
          <p><strong>Average Occupancy:</strong> 5 people</p>
          <p><strong>CO₂ Generation (G):</strong> 5 × 0.08 = 0.4 m³/h</p>
          <p><strong>Calculated Q<sub>v</sub>:</strong> 2,312.14 m³/h</p>
          <p><strong>Full Load (33 people):</strong></p>
          <ul>
            <li>Projected CO₂: 1,551 ppm</li>
            <li>Required FA for 950 ppm: 4,879.85 m³/h (1,355.51 l/s)</li>
            <li>FA per person: 41.08 l/s/p</li>
            <li>Improvement needed: 713 l/s</li>
          </ul>
        </div>
      </div>
    </div>
  </article>

  <article class="design-subsection">
    <h3 class="subsection-header">
      <svg class="subsection-icon" viewBox="0 0 24 24">
        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
      </svg>
      HVAC System Redesign Calculations
    </h3>

    <div class="system-design">
      <h4>Cooling Load Analysis</h4>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>Space</th>
              <th>Area (m²)</th>
              <th>Cooling Load (TR)</th>
              <th>Cooling Load (kW)</th>
              <th>People Density</th>
              <th>Occupancy</th>
              <th>FA Requirement</th>
              <th>Total FA (l/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Room A</td>
              <td>89.67</td>
              <td>3.86</td>
              <td>13.57</td>
              <td>6.00</td>
              <td>15</td>
              <td>8.00</td>
              <td>119.56</td>
            </tr>
            <tr>
              <td>Room B</td>
              <td>96.48</td>
              <td>4.15</td>
              <td>14.60</td>
              <td>6.00</td>
              <td>16</td>
              <td>8.00</td>
              <td>128.64</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 class="mt-4">Energy Recovery Analysis</h4>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Unit</th>
              <th>Room A</th>
              <th>Room B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PAU Cooling Load</td>
              <td>kW</td>
              <td>6.40</td>
              <td>6.89</td>
            </tr>
            <tr>
              <td>FCU Cooling Load</td>
              <td>kW</td>
              <td>7.17</td>
              <td>7.72</td>
            </tr>
            <tr>
              <td>Sensible Heat Ratio</td>
              <td>-</td>
              <td>0.70</td>
              <td>0.70</td>
            </tr>
            <tr>
              <td>FCU Flow Rate</td>
              <td>L/s per FCU</td>
              <td>305.56</td>
              <td>305.56</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="energy-summary">
        <h4>Payback Period Calculation</h4>
        <div class="specs-grid">
          <div class="spec-item">
            <span class="spec-value">30%</span>
            <span class="spec-label">Energy Reduction</span>
          </div>
          <div class="spec-item">
            <span class="spec-value">1.49 yrs</span>
            <span class="spec-label">Payback Period</span>
          </div>
          <div class="spec-item">
            <span class="spec-value">2.8</span>
            <span class="spec-label">Chiller COP</span>
          </div>
          <div class="spec-item">
            <span class="spec-value">$60,000</span>
            <span class="spec-label">Investment</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
        </svg>
        HVAC System Upgrade
      </h3>
      
      <div class="system-arrangement">
        <div class="arrangement-image">
          <img src="/assets/img/projects/iaq/system-redesign.jpg" 
               alt="Proposed PAU+FCU system layout" 
               class="arrangement-img"
               loading="lazy">
          <div class="arrangement-caption">
            <span class="arrangement-fig">Fig 5.</span>
            <span class="arrangement-desc">Proposed system with 3000m³/h PAU serving both rooms</span>
          </div>
        </div>
        <div class="arrangement-notes">
          <p><strong>Design Features:</strong></p>
          <ul>
            <li>New Carrier 39TD PAU (3000m³/h) with G4 filtration</li>
            <li>Enthalpy wheel heat recovery (70% efficiency)</li>
            <li>Existing FCUs retained with balanced airflow (305 L/s each)</li>
            <li>Fresh air intake increased to 41.1 L/s per person</li>
            <li>Ductwork sized for 4.9m/s velocity (285×350mm mains)</li>
          </ul>
        </div>
      </div>
    </article>
    
    <div class="calculation-gallery">
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/iaq/enthalpy-wheel.jpg" 
               alt="Enthalpy wheel diagram" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Heat Recovery</span>
            <span class="calc-detail">70% sensible+latenet heat recovery</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/iaq/duct-sizing.jpg" 
               alt="Duct sizing chart" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Duct Sizing</span>
            <span class="calc-detail">285×350mm mains @ 4.9m/s</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/iaq/psychrometric-chart.jpg" 
               alt="Psychrometric analysis" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Load Calculation</span>
            <span class="calc-detail">13.3kW total cooling load</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="calculation-summary">
      <h3 class="summary-title">Expected Performance</h3>
      <ul class="safety-factors">
        <li>CO₂ maintained below 950ppm at full occupancy</li>
        <li>30% energy reduction via heat recovery</li>
        <li>1.49 year payback period on $60,000 investment</li>
        <li>Mould prevention through humidity control (<70% RH)</li>
      </ul>
    </div>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section recommendations-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
      Implementation Strategy
    </h2>
    
    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">🔄</div>
        <h3>Phased Installation</h3>
        <ul>
          <li>Stage 1: PAU and ductwork installation during semester break</li>
          <li>Stage 2: Enthalpy wheel integration</li>
          <li>Stage 3: Diffuser cleaning and mould remediation</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">📊</div>
        <h3>Monitoring Protocol</h3>
        <ul>
          <li>Continuous CO₂ monitoring with dashboard display</li>
          <li>Quarterly mould inspections using checklist</li>
          <li>Annual ductwork maintenance</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🌿</div>
        <h3>Complementary Measures</h3>
        <ul>
          <li>Install CO₂-activated occupancy signage</li>
          <li>Add potted plants for CO₂ absorption</li>
          <li>Window frame repairs and waterproofing</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">06</span>
      Recommendations
    </h2>

    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">💨</div>
        <h3>HVAC System Redesign</h3>
        <ul>
          <li>Increase fresh air intake to 583 l/s (Room A) and 713 l/s (Room B)</li>
          <li>Install enthalpy wheel heat recovery system</li>
          <li>New PAU with G4 filtration</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🛠️</div>
        <h3>Immediate Actions</h3>
        <ul>
          <li>Mould remediation on affected diffusers</li>
          <li>Window frame repairs to prevent moisture ingress</li>
          <li>Regular HVAC maintenance schedule</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🌳</div>
        <h3>Operational Improvements</h3>
        <ul>
          <li>Seasonal HVAC operation strategy</li>
          <li>Occupancy-based ventilation control</li>
          <li>Installation of CO₂ monitoring system</li>
        </ul>
      </div>
    </div>

    <div class="system-design">
      <h3 class="subsection-header">Proposed HVAC System Layout</h3>
      <img src="/assets/img/projects/iaq/hvac-redesign.jpg" 
           alt="HVAC Redesign Schematic" 
           class="design-image"
           loading="lazy">
      <p class="design-caption">Fig 2. Proposed system with heat recovery and increased fresh air capacity</p>
    </div>
  </section>

  <!-- Project Reflection Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">7</span>
      Key Takeaways
    </h2>
    
    <div class="reflection-content">
      <div class="reflection-text">
        <p>This study demonstrated the critical relationship between occupancy patterns and IAQ parameters in high-density study environments. The proposed solutions balance energy efficiency with health requirements while respecting budget constraints.</p>
        
        <div class="skill-development">
          <h3>Methodological Insights</h3>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Technical Learnings</h4>
              <ul>
                <li>CO₂ time-lag analysis for demand-controlled ventilation</li>
                <li>Psychrometric calculations for heat recovery systems</li>
                <li>Mould growth prediction models</li>
              </ul>
            </div>
            <div class="skill-category">
              <h4>Project Management</h4>
              <ul>
                <li>Stakeholder engagement with library staff</li>
                <li>Occupancy pattern data collection</li>
                <li>Cost-benefit analysis presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="reflection-image">
        <img src="/assets/img/projects/iaq/team-presentation.jpg" 
             alt="Team presenting findings" 
             class="reflection-img"
             loading="lazy">
        <p class="image-caption">Fig 6. Presenting recommendations to facility management</p>
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

/* Custom IAQ Project Styles */
.iaq-project {
  color: #2c3e50;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

.data-table th, .data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.data-table th {
  background-color: #f2f2f2;
}

.data-table tr:nth-child(even) {
  background-color: #f9f9f9;
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
  
  .facilities-grid, .specs-grid {
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
  
  .system-types-grid, .facilities-grid, .specs-grid {
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

<!-- Add this CSS to your style section -->
<style>
  .data-table-container {
    margin: 30px 0;
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
  }

  .table-title {
    color: var(--secondary-color);
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .table-scroll {
    overflow-x: auto;
    margin-bottom: 15px;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
  }

  .data-table th, .data-table td {
    padding: 12px 15px;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  .data-table th {
    background-color: var(--primary-color);
    color: white;
    font-weight: 500;
  }

  .data-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .data-table tr:hover {
    background-color: #f0f7ff;
  }

  .table-caption {
    font-size: 0.9rem;
    color: var(--dark-gray);
    text-align: center;
    margin-top: 10px;
  }

  .side-by-side-tables {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  /* Highlight exceedances */
  .exceedance {
    background-color: #ffebee;
    color: #c62828;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .side-by-side-tables {
      grid-template-columns: 1fr;
    }
    
    .data-table {
      min-width: 100%;
    }
  }
</style>

<!-- Add this CSS to your style section -->
<style>
  .calculation-method {
    background: #f5f9ff;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
  }

  .formula {
    font-family: 'Courier New', monospace;
    font-size: 1.2rem;
    background: #2c3e50;
    color: white;
    padding: 15px;
    border-radius: 4px;
    margin: 15px 0;
    text-align: center;
  }

  .variable-list {
    list-style-type: none;
    padding-left: 0;
  }

  .variable-list li {
    margin-bottom: 8px;
    position: relative;
    padding-left: 25px;
  }

  .variable-list li:before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  .side-by-side-calculations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 25px 0;
  }

  .calculation-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  }

  .calculation-card h5 {
    color: var(--secondary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  .calculation-steps {
    font-size: 0.95rem;
  }

  .calculation-steps p {
    margin-bottom: 8px;
  }

  .calculation-steps strong {
    color: var(--secondary-color);
  }

  .energy-summary {
    margin-top: 30px;
  }

  .mt-4 {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    .side-by-side-calculations {
      grid-template-columns: 1fr;
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
