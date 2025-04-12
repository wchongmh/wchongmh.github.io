---
title: "Indoor Air Quality Study - Library Sub-Area 4"
category: Building Systems
description: "Comprehensive IAQ assessment and HVAC redesign for library study areas with mould mitigation strategies."
tech: [IAQ Monitoring, HVAC Design, BS EN 13779, Energy Recovery, CFD Analysis]
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
      <p>The study assessed two library study rooms (185.3m² total) with 40+ computer workstations, identifying CO₂ and formaldehyde exceedances during peak occupancy. The redesign proposes a heat recovery ventilation system integrated with existing FCUs.</p>
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
      <span class="section-number">01</span>
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

  <!-- System Analysis Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
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
  </section>

  <!-- Redesign Proposal Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Redesign Proposal
    </h2>
    
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
      <span class="section-number">04</span>
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

  <!-- Project Reflection Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
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

/* Additional responsive adjustments */
@media (max-width: 768px) {
  .facilities-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .system-types-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Tab functionality for data sections
document.querySelectorAll('.spec-group summary').forEach(summary => {
  summary.addEventListener('click', () => {
    const details = summary.parentElement;
    document.querySelectorAll('.spec-group').forEach(d => {
      if (d !== details) d.removeAttribute('open');
    });
  });
});
</script>
