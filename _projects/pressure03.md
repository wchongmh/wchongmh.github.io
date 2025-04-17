---
title: "Pressure Losses in Piping Systems - Laboratory Analysis"
category: Research
description: "Experimental measurement and analysis of pressure losses in pipes and fittings using HM 150.11 module at Glasgow Caledonian University."
tech: [Hydraulic Measurements, Pressure Drop Analysis, Fluid Dynamics, Pipe System Design]
image: /assets/img/projects/lab/pressure-loss-1.jpg
importance: 2
---

<div class="pressure-loss-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Pressure Losses in Piping Systems04</h1>
    <p class="project-subtitle">Laboratory Analysis at Glasgow Caledonian University</p>
    <div class="project-meta">
      <span class="badge">Fluid Dynamics</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Project Context -->
  <div class="project-context">
    <p>This laboratory experiment conducted on 30th March 2023 investigated pressure losses in a closed-loop piping system using the HM 150.11 module. The study measured pressure drops across various piping elements including elbows, reducers, and straight sections under controlled flow conditions.</p>
  </div>

  <!-- Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Experiment Overview
    </h2>
    
    <div class="project-description">
      <p>The experiment analyzed pressure losses in a 10-meter steel pipe system (1" diameter) equipped with various fittings. Pressure gauges measured differential pressures across each component while flow rates were controlled and measured using a magnetic flow meter.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/lab/pressure-loss-2.jpg" 
               alt="HM 150.11 Module Overview" 
               class="project-image"
               loading="lazy">
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">HM 150.11 Pipe System Module experimental setup</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/lab/pressure-loss-3.jpg" 
               alt="Pipe System Components" 
               class="project-image"
               loading="lazy">
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Key components: elbows, reducers, and measurement points</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Experimental Parameters</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">10m</span>
          <span class="spec-label">Pipe Length</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">1"</span>
          <span class="spec-label">Pipe Diameter</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">0.25-0.367</span>
          <span class="spec-label">Flow Rate (L/s)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">5</span>
          <span class="spec-label">Test Conditions</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Methodology
    </h2>
    
    <div class="methodology-steps">
      <div class="step-item">
        <div class="step-number">Step 1</div>
        <div class="step-content">
          <h4>System Setup</h4>
          <p>Assembled piping system with HM 150.11 module, pressure gauges, and flow meter. Calibrated all instruments before testing.</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 2</div>
        <div class="step-content">
          <h4>Flow Control</h4>
          <p>Filled system with water and adjusted flow rate (0.2-2 m/s) using variable frequency drive on centrifugal pump.</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 3</div>
        <div class="step-content">
          <h4>Data Collection</h4>
          <p>Measured pressure drops across each piping element at various flow rates using connected pressure gauges.</p>
        </div>
      </div>
      
      <div class="step-item">
        <div class="step-number">Step 4</div>
        <div class="step-content">
          <h4>Analysis</h4>
          <p>Calculated pressure losses using measured data and fluid properties (ρ=998.2 kg/m³ at 20°C).</p>
        </div>
      </div>
    </div>
    
    <div class="methodology-image">
      <img src="/assets/img/projects/lab/pressure-loss-4.jpg" 
           alt="Measurement Process" 
           class="methodology-img"
           loading="lazy">
      <p class="image-caption">Fig 3. Pressure measurement process at various test points</p>
    </div>
  </section>

  <!-- Results Section -->
  <section class="project-section results-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Results & Analysis
    </h2>
    
    <div class="results-intro">
      <p>The experiment revealed significant pressure variations across different piping elements, with the control valve showing the largest pressure drop followed by elbows and reducers.</p>
    </div>
    
    <div class="results-tables">
      <h3 class="subsection-header">Pressure Drop Measurements</h3>
      
      <div class="table-container">
        <table class="results-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Flow Rate (m³/s)</th>
              <th>Velocity (m/s)</th>
              <th>Total ΔP (Pa)</th>
              <th>90° Elbow ζ</th>
              <th>Bend ζ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0.0003</td>
              <td>0.955</td>
              <td>5491.72</td>
              <td>3.317</td>
              <td>3.124</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0.000367</td>
              <td>1.169</td>
              <td>8531.79</td>
              <td>3.522</td>
              <td>2.775</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0.00033</td>
              <td>1.051</td>
              <td>6815.62</td>
              <td>3.379</td>
              <td>2.935</td>
            </tr>
            <tr>
              <td>4</td>
              <td>0.00028</td>
              <td>0.892</td>
              <td>4216.86</td>
              <td>3.333</td>
              <td>3.087</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0.00025</td>
              <td>0.796</td>
              <td>3206.78</td>
              <td>4.031</td>
              <td>3.101</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="results-graph">
        <img src="/assets/img/projects/lab/pressure-loss-graph.png" 
             alt="Pressure Drop vs Flow Rate" 
             class="graph-img"
             loading="lazy">
        <p class="graph-caption">Fig 4. Pressure drop characteristics across different flow rates</p>
      </div>
    </div>
    
    <div class="key-findings">
      <h3 class="subsection-header">Key Findings</h3>
      <ul class="findings-list">
        <li>Control valve showed highest pressure drop (up to 2402.63 Pa at 0.367 L/s)</li>
        <li>90° elbows demonstrated consistent ζ values between 3.3-4.0</li>
        <li>Pressure losses increased quadratically with flow velocity</li>
        <li>Straight pipe sections showed negligible pressure drops</li>
      </ul>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="project-section conclusion-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Conclusion & Recommendations
    </h2>
    
    <div class="conclusion-content">
      <div class="conclusion-text">
        <p>The experiment successfully quantified pressure losses in various piping components, providing valuable data for fluid system design. The HM 150.11 module proved effective for precise measurements, though several improvements could enhance future studies:</p>
        
        <div class="recommendations">
          <h3>Recommendations</h3>
          <div class="rec-grid">
            <div class="rec-card">
              <div class="rec-icon">🔄</div>
              <h4>Component Variety</h4>
              <p>Include more piping configurations to simulate complex networks</p>
            </div>
            <div class="rec-card">
              <div class="rec-icon">📊</div>
              <h4>Advanced Instrumentation</h4>
              <p>Implement ultrasonic flow meters for non-intrusive measurement</p>
            </div>
            <div class="rec-card">
              <div class="rec-icon">🤖</div>
              <h4>Data Analysis</h4>
              <p>Incorporate machine learning for real-time flow prediction</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="conclusion-image">
        <img src="/assets/img/projects/lab/pressure-loss-5.jpg" 
             alt="Experimental Setup" 
             class="conclusion-img"
             loading="lazy">
        <p class="image-caption">Fig 5. Complete laboratory setup showing measurement points</p>
      </div>
    </div>
  </section>

  <!-- References Section -->
  <section class="project-section references-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      References
    </h2>
    
    <div class="references-list">
      <ol>
        <li>HM-150.11 Catalog - Losses in a pipe system (GUNT)</li>
        <li>Density of Water at Standard Conditions - BYJU'S Physics</li>
        <li>BS EN 12845:2015 - Fixed firefighting systems</li>
      </ol>
    </div>
  </section>
</div>

<style>
/* Base Styles */
.pressure-loss-project {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: #34495e;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.project-header {
  margin-bottom: 40px;
}

.project-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.2rem;
}

.project-subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.badge {
  background: #3498db;
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
  background: #ecf0f1;
  color: #34495e;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #bdc3c7;
}

/* Section Styles */
.section-header {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  margin: 40px 0 25px;
  display: flex;
  align-items: center;
}

.section-number {
  font-size: 1.2rem;
  background: #3498db;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

/* Image Styles */
.image-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 25px 0;
}

.image-card {
  background: white;
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
}

.image-meta {
  padding: 15px;
  background: white;
}

.image-fig {
  font-weight: 600;
  color: #3498db;
  margin-right: 8px;
}

.image-desc {
  color: #7f8c8d;
}

/* Key Specs */
.key-specs {
  background: #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
}

.specs-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 5px;
}

.spec-label {
  font-size: 0.9rem;
  color: #7f8c8d;
}

/* Methodology */
.methodology-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.step-item {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.step-number {
  font-size: 1.2rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 10px;
}

.step-content h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.methodology-image {
  margin: 30px 0;
}

.methodology-img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.image-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #7f8c8d;
  text-align: center;
}

/* Results */
.results-tables {
  margin: 30px 0;
}

.table-container {
  overflow-x: auto;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.results-table th, .results-table td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #ddd;
}

.results-table th {
  background-color: #3498db;
  color: white;
}

.results-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.results-graph {
  margin: 40px 0;
}

.graph-img {
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.graph-caption {
  text-align: center;
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-top: 10px;
}

.key-findings {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
}

.findings-list {
  padding-left: 20px;
}

.findings-list li {
  margin-bottom: 10px;
}

/* Conclusion */
.conclusion-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.conclusion-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recommendations {
  margin-top: 20px;
}

.rec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.rec-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.rec-icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.rec-card h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.conclusion-image {
  display: flex;
  flex-direction: column;
}

.conclusion-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* References */
.references-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

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
  
  .project-title {
    font-size: 1.8rem;
  }
  
  .section-header {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .pressure-loss-project {
    padding: 0 15px;
  }
  
  .project-title {
    font-size: 1.6rem;
  }
  
  .image-comparison {
    grid-template-columns: 1fr;
  }
  
  .specs-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

<script>
// Simple tab functionality for future enhancements
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  if(tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active'));
      });
    });
  }
});
</script>
