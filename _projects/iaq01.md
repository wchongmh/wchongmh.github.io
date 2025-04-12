---
title: "Indoor Air Quality Study - Library Sub-Area 4"
category: Environmental Engineering
description: "Comprehensive IAQ analysis of library study areas with HVAC redesign recommendations"
tech: [IAQ Monitoring, HVAC Design, CO2 Analysis, Mould Assessment, Energy Efficiency]
image: /assets/img/projects/iaq/library-iaq-1.jpg
importance: 2
---

<div class="iaq-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Indoor Air Quality Study</h1>
    <p class="project-subtitle">University Library Sub-Area 4</p>
    <div class="project-meta">
      <span class="badge">Environmental Engineering</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Project Visualization -->
  <div class="project-visualization">
    <div class="visualization-description">
      <p>The study focused on two computer-equipped study rooms (Room A & B) in the university library, analyzing 8 key IAQ parameters and thermal comfort conditions. The assessment followed Hong Kong's IAQ Certification Scheme standards.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/iaq/library-layout.jpg" 
             alt="Library Sub-Area 4 Layout" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Study area layout showing measurement points</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/iaq/mould-growth.jpg" 
             alt="Mould Growth on Diffuser" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Identified mould growth on HVAC components</p>
      </div>
    </div>
  </div>

  <!-- Key Findings Summary -->
  <div class="key-specs">
    <h3 class="specs-title">Key Findings Summary</h3>
    <div class="specs-grid">
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

  <!-- Methodology Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
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

  <!-- Results Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Key Results
    </h2>

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

  <!-- Recommendations Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
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
        <div class="rec-icon">🌿</div>
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

  <!-- Energy Analysis Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Energy Impact Analysis
    </h2>

    <div class="energy-analysis">
      <div class="energy-metric">
        <span class="energy-value">$22,651</span>
        <span class="energy-label">Annual Savings</span>
      </div>
      <div class="energy-metric">
        <span class="energy-value">1.49 yrs</span>
        <span class="energy-label">Payback Period</span>
      </div>
      <div class="energy-metric">
        <span class="energy-value">41%</span>
        <span class="energy-label">CO₂ Reduction</span>
      </div>
    </div>

    <div class="psychrometric-chart">
      <img src="/assets/img/projects/iaq/psychrometric-chart.jpg" 
           alt="Energy Calculation Psychrometric Chart" 
           class="chart-image"
           loading="lazy">
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

<!-- CSS and JavaScript would follow the same structure as the reference template -->
