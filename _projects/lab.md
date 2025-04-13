---
title: "Noise Control Assessment - Laboratory 204"
category: Building Systems
description: "Comprehensive noise analysis for HK laboratory, including NC compliance, ear protection zones, and mitigation strategies."
tech: [Sound Level Meter, NC Charts, LEP.d Calculations, Silencer Design, OSHA Standards]
image: /assets/img/projects/noise-assessment/lab204-environment.jpg
importance: 2
---

<div class="noise-assessment-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Noise Control Assessment</h1>
    <p class="project-subtitle">Laboratory 204</p>
    <div class="project-meta">
      <span class="badge">Environmental Engineering</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Key Findings Summary -->
  <div class="key-findings">
    <div class="finding-card critical">
      <span class="finding-icon">⚠️</span>
      <span class="finding-text">92.97dBA LEP.D (Exceeds 90dBA action level)</span>
    </div>
    <div class="finding-card">
      <span class="finding-icon">🔊</span>
      <span class="finding-text">3 Machines Requiring Ear Protection Zones</span>
    </div>
    <div class="finding-card">
      <span class="finding-icon">🏗️</span>
      <span class="finding-text">Background Noise >50NC (Non-compliant)</span>
    </div>
  </div>

  <!-- Introduction Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Introduction & Objectives
    </h2>
    <div class="section-content">
      <p>Laboratory 204 exhibits excessive noise levels from both HVAC systems (background) and industrial equipment (workplace). This assessment evaluates:</p>
      <ul>
        <li>Compliance with HK <strong>Cap. 59 Noise at Work Regulation</strong></li>
        <li>Identification of ear protection zones per action levels</li>
        <li>Mitigation strategies for low-frequency HVAC noise</li>
      </ul>
      <div class="regulation-highlight">
        <h4>Key Regulatory Thresholds</h4>
        <div class="regulation-grid">
          <div class="regulation-item">
            <span class="regulation-value">85 dB(A)</span>
            <span class="regulation-label">First Action Level</span>
          </div>
          <div class="regulation-item danger">
            <span class="regulation-value">90 dB(A)</span>
            <span class="regulation-label">Second Action Level</span>
          </div>
          <div class="regulation-item">
            <span class="regulation-value">50 NC</span>
            <span class="regulation-label">Background Noise Limit</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Methodology
    </h2>
    
    <div class="methodology-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Instrumentation</h4>
          <p>RION NL-32 Sound Level Meter (S/N: 00271994) measuring:</p>
          <ul>
            <li>SPL (dB/dBA)</li>
            <li>Frequency spectrum (31.5Hz-8kHz)</li>
          </ul>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Sampling Protocol</h4>
          <ul>
            <li><strong>Background Noise:</strong> 1-min samples at 170cm height (under motor, 1st inlet, room center)</li>
            <li><strong>Workplace Noise:</strong> 1m² grid mapping for Machines A-C</li>
          </ul>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Analysis Framework</h4>
          <div class="analysis-methods">
            <div class="method">
              <span class="method-icon">📊</span>
              <span>NC Chart Evaluation</span>
            </div>
            <div class="method">
              <span class="method-icon">🧮</span>
              <span>LEP.D = 10log(1/8)Σ(T×10<sup>L/10</sup>)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Results & Analysis
    </h2>
    
    <div class="results-tabs">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="background">Background Noise</button>
        <button class="tab-button" data-tab="workplace">Workplace Noise</button>
      </div>
      
      <div class="tab-content active" id="background">
        <div class="nc-compliance">
          <h4>NC Compliance Failure</h4>
          <div class="nc-readings">
            <div class="nc-reading">
              <span class="nc-location">1st Inlet</span>
              <span class="nc-value">58 NC</span>
              <div class="nc-bar" style="width: 116%"></div>
            </div>
            <div class="nc-reading">
              <span class="nc-location">Under Motor</span>
              <span class="nc-value">62 NC</span>
              <div class="nc-bar" style="width: 124%"></div>
            </div>
          </div>
          <p>Dominant low-frequency noise (250Hz) due to duct turbulence and reflective surfaces.</p>
        </div>
      </div>
      
      <div class="tab-content" id="workplace">
        <div class="machine-results">
          <div class="machine-card">
            <h5>Machine A</h5>
            <span class="machine-peak">92.2 dB(A)</span>
            <span class="machine-zone">1m² Protection Zone</span>
          </div>
          <div class="machine-card danger">
            <h5>Machine B</h5>
            <span class="machine-peak">92.1 dB(A)</span>
            <span class="machine-zone">6m² Protection Zone</span>
          </div>
          <div class="machine-card danger">
            <h5>Machine C</h5>
            <span class="machine-peak">92.8 dB(A)</span>
            <span class="machine-zone">4m² Protection Zone</span>
          </div>
        </div>
        <div class="lep-calculation">
          <h4>LEP.D Calculation</h4>
          <code>10log(1/8)(3×10<sup>9.22</sup> + 2×10<sup>9.21</sup> + 4×10<sup>9.28</sup>) = 92.97 dB(A)</code>
          <p>Exceeds second action level (90 dB(A)) requiring mandatory hearing protection.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Recommendations
    </h2>
    
    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">🔇</div>
        <h3>HVAC Noise Control</h3>
        <ul>
          <li>Install <strong>7LFS Rectangular Silencers</strong> post-fan</li>
          <li>Construct plenum chamber (3:1 cross-section ratio)</li>
          <li>Apply perforated panel absorbers (250Hz targeting)</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">👂</div>
        <h3>Hearing Protection</h3>
        <ul>
          <li>Mandatory ear protectors in marked zones</li>
          <li>Labour Department-approved models (SNR ≥ 25dB)</li>
          <li>Priority for Machines B & C zones</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">📋</div>
        <h3>Administrative Controls</h3>
        <ul>
          <li>Limit exposure time per action levels</li>
          <li>Annual audiometric testing</li>
          <li>Noise awareness training</li>
        </ul>
      </div>
    </div>
    
    <div class="mitigation-visual">
      <img src="/assets/img/projects/noise-assessment/silencer-placement.jpg" alt="Silencer Installation Diagram">
      <p>Fig 1. Proposed silencer placement at fan discharge elbow</p>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Conclusion
    </h2>
    <div class="conclusion-content">
      <p>The assessment confirms non-compliance with HK noise regulations, requiring:</p>
      <ol>
        <li>Immediate demarcation of <strong>11m² ear protection zones</strong> for Machines A-C</li>
        <li>HVAC modifications to achieve ≤50 NC background levels</li>
        <li>Ongoing noise monitoring per Cap. 59 requirements</li>
      </ol>
      <div class="compliance-status">
        <span class="status-label">Current Status:</span>
        <span class="status-value non-compliant">Non-Compliant</span>
      </div>
    </div>
  </section>
</div>

<style>
/* Base Styles */
.noise-assessment-project {
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: #2c3e50;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Key Findings */
.key-findings {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin: 30px 0;
}

.finding-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  border-left: 4px solid #3498db;
}

.finding-card.critical {
  border-left-color: #e74c3c;
}

.finding-icon {
  font-size: 1.8rem;
  margin-right: 15px;
}

.finding-text {
  font-weight: 500;
}

/* Regulation Highlights */
.regulation-highlight {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
}

.regulation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 10px;
}

.regulation-item {
  text-align: center;
  padding: 15px;
  border-radius: 6px;
  background: #ecf0f1;
}

.regulation-item.danger {
  background: #ffebee;
  border: 1px solid #ef9a9a;
}

.regulation-value {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c3e50;
}

.regulation-label {
  font-size: 0.9rem;
  color: #7f8c8d;
}

/* Methodology Steps */
.methodology-steps {
  display: grid;
  gap: 20px;
}

.step {
  display: flex;
  gap: 15px;
}

.step-number {
  background: #3498db;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.analysis-methods {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.method {
  background: white;
  padding: 10px 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

/* Results Tabs */
.results-tabs {
  margin-top: 20px;
}

.nc-compliance {
  background: #fff8e1;
  padding: 20px;
  border-radius: 8px;
}

.nc-readings {
  margin: 15px 0;
}

.nc-reading {
  margin-bottom: 10px;
}

.nc-location {
  display: inline-block;
  width: 100px;
}

.nc-value {
  display: inline-block;
  width: 60px;
  font-weight: 600;
}

.nc-bar {
  height: 10px;
  background: #3498db;
  display: inline-block;
  margin-left: 10px;
  border-radius: 5px;
}

.machine-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.machine-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  border-top: 4px solid #3498db;
}

.machine-card.danger {
  border-top-color: #e74c3c;
}

.machine-peak {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 5px 0;
}

.machine-zone {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.lep-calculation {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 6px;
  font-family: monospace;
  overflow-x: auto;
}

/* Recommendations */
.mitigation-visual {
  margin-top: 30px;
  text-align: center;
}

.mitigation-visual img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Conclusion */
.compliance-status {
  margin-top: 20px;
  font-size: 1.1rem;
}

.status-value {
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 4px;
}

.non-compliant {
  background: #ffebee;
  color: #c62828;
}

/* Responsive Design */
@media (max-width: 768px) {
  .step {
    flex-direction: column;
  }
  
  .methodology-steps {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Tab functionality
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    const tabContainer = button.closest('.results-tabs');
    
    // Remove active class from all buttons and content
    tabContainer.querySelectorAll('.tab-button').forEach(btn => 
      btn.classList.remove('active'));
    tabContainer.querySelectorAll('.tab-content').forEach(content => 
      content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    tabContainer.querySelector(`#${tabId}`).classList.add('active');
  });
});
</script>

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
