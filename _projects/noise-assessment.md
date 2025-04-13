---
title: "Noise Assessment & Control - Laboratory 204"
category: Environmental Engineering
description: "Comprehensive noise analysis and mitigation strategies for Laboratory 204, including NC chart evaluations and ear protection zoning."
tech: [Sound Level Meter RION NL-32, NC Chart Analysis, BS EN 61672, Silencer Design, PPE Selection]
image: /assets/img/projects/noise_assessment/lab204-environment.jpg
importance: 2
---

<div class="noise-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Laboratory 204 Noise Assessment</h1>
    <p class="project-subtitle">Occupational Health & HVAC Noise Control</p>
    <div class="project-meta">
      <span class="badge">Industrial Hygiene</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Project Context -->
  <div class="project-context">
    <p>This assessment evaluates background noise from HVAC systems and workplace noise from machinery in Laboratory 204, identifying areas exceeding Hong Kong's <strong>Factories and Industrial Undertakings (Noise at Work) Regulation</strong> thresholds. The project proposes silencer installations, plenum chamber modifications, and ear protection zones to mitigate health risks.</p>
  </div>

  <!-- Key Findings Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Key Findings
    </h2>

    <div class="key-specs">
      <h3 class="specs-title">Noise Level Violations</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">76.4 dB(A)</span>
          <span class="spec-label">Worst Background Noise (Motor)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">92.97 dB(A)</span>
          <span class="spec-label">Daily Exposure (L<sub>EP,D</sub>)</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">11 m²</span>
          <span class="spec-label">Total Ear Protection Zones</span>
        </div>
      </div>
    </div>

    <div class="image-comparison">
      <div class="image-card">
        <img src="/assets/img/projects/noise_assessment/nc-chart-motor.jpg" 
             alt="NC Chart - Motor Location" 
             class="project-image"
             loading="lazy">
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Octave-band analysis showing 76.4 dB(A) at motor location (exceeds 50NC standard)</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Background Noise Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Background Noise Analysis
    </h2>

    <h3 class="subsection-header">HVAC System Noise Sources</h3>
    <ul>
      <li>Turbulence at duct elbows near 1st inlet (72.8 dB(A))</li>
      <li>Motor vibration transmission (76.4 dB(A))</li>
      <li>Sound reflection from bare walls/windows</li>
    </ul>

    <div class="table-responsive">
      <table class="noise-data-table">
        <caption>Background Noise Measurements</caption>
        <thead>
          <tr>
            <th>Location</th>
            <th>Overall dB(A)</th>
            <th>Peak Frequency</th>
            <th>NC Compliance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st Inlet</td>
            <td>72.8</td>
            <td>63Hz (83.4dB)</td>
            <td class="non-compliant">Fail</td>
          </tr>
          <tr>
            <td>Room Center</td>
            <td>71.7</td>
            <td>250Hz (73.9dB)</td>
            <td class="non-compliant">Fail</td>
          </tr>
          <tr>
            <td>Under Motor</td>
            <td>76.4</td>
            <td>125Hz (79.5dB)</td>
            <td class="non-compliant">Fail</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Workplace Noise Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Workplace Noise Assessment
    </h2>

    <div class="zone-diagrams">
      <div class="diagram-card">
        <img src="/assets/img/projects/noise_assessment/machine-a-zones.jpg" 
             alt="Machine A Protection Zones" 
             class="diagram-image"
             loading="lazy">
        <div class="diagram-meta">
          <span class="diagram-label">Machine A</span>
          <span class="diagram-fig">Zone 1 (92.2 dB(A)) requires 1m² protection</span>
        </div>
      </div>
      <div class="diagram-card">
        <img src="/assets/img/projects/noise_assessment/machine-b-zones.jpg" 
             alt="Machine B Protection Zones" 
             class="diagram-image"
             loading="lazy">
        <div class="diagram-meta">
          <span class="diagram-label">Machine B</span>
          <span class="diagram-fig">Zones 1-4 (90-92.1 dB(A)) require 6m² protection</span>
        </div>
      </div>
    </div>

    <div class="calculation-summary">
      <h3>Daily Noise Exposure Calculation</h3>
      <p>The combined exposure from Machines A (3hrs), B (2hrs), and C (4hrs):</p>
      <div class="formula">
        L<sub>EP,D</sub> = 10log[(1/8)(3×10<sup>9.22</sup> + 2×10<sup>9.21</sup> + 4×10<sup>9.28</sup>)] = <strong>92.97 dB(A)</strong>
      </div>
      <p>This exceeds the <strong>Second Action Level (90 dB(A))</strong> per Cap. 59T regulations.</p>
    </div>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Mitigation Strategies
    </h2>

    <article class="design-subsection">
      <h3 class="subsection-header">HVAC Noise Control</h3>
      <div class="solution-cards">
        <div class="solution-card">
          <h4>Rectangular Packless Silencers</h4>
          <ul>
            <li>Model: 7LFS (2100mm)</li>
            <li>Dynamic Insertion Loss: 14-51dB</li>
            <li>Target: Reduce 1st inlet noise from 72.8 dB(A) to ≤50NC</li>
          </ul>
        </div>
        <div class="solution-card">
          <h4>Plenum Chamber</h4>
          <ul>
            <li>Absorbent lining thickness: 50mm</li>
            <li>Cross-section ratio: 3:1 vs duct</li>
            <li>Expected attenuation: 8-12dB at low frequencies</li>
          </ul>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">Personal Protective Equipment</h3>
      <div class="ppe-selection">
        <div class="ppe-card">
          <h4>3M™ Peltor™ X5A Ear Muffs</h4>
          <table>
            <tr>
              <th>Frequency</th>
              <th>Attenuation</th>
            </tr>
            <tr>
              <td>250Hz</td>
              <td>26.4dB</td>
            </tr>
            <tr>
              <td>1kHz</td>
              <td>40.9dB</td>
            </tr>
            <tr>
              <td>SNR Rating</td>
              <td>37dB</td>
            </tr>
          </table>
        </div>
      </div>
    </article>
  </section>

  <!-- Conclusion -->
  <div class="project-conclusion">
    <h3>Implementation Plan</h3>
    <ol>
      <li>Install silencers at HVAC inlets (Priority 1)</li>
      <li>Mark ear protection zones with signage</li>
      <li>Provide X5A ear muffs for high-noise areas</li>
      <li>Schedule biannual noise monitoring</li>
    </ol>
  </div>
</div>

<style>
/* Custom Noise Project Styles */
.noise-project {
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #34495e;
  line-height: 1.6;
}

.noise-data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.noise-data-table th, .noise-data-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.noise-data-table th {
  background-color: #f8f9fa;
}

.non-compliant {
  color: #e74c3c;
  font-weight: 600;
}

.formula {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 4px;
  font-family: monospace;
  margin: 15px 0;
  overflow-x: auto;
}

.zone-diagrams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.solution-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.solution-card {
  background: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.ppe-selection {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.ppe-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  flex: 1;
  min-width: 250px;
}

.project-conclusion {
  background: #f5fbf5;
  padding: 25px;
  border-radius: 8px;
  margin-top: 40px;
  border-left: 4px solid #2ecc71;
}

@media (max-width: 768px) {
  .zone-diagrams, .solution-cards {
    grid-template-columns: 1fr;
  }
}
</style>
