---
title: "Noise Assessment & Control - Laboratory 204"
category: Building Systems
description: "Comprehensive noise analysis and mitigation strategies for Laboratory 204, including NC chart evaluations and ear protection zoning."
tech: [Sound Level Meter RION NL-32, NC Chart Analysis, BS EN 61672, Silencer Design, LEP.d Calculations, OSHA Standards]
image: /assets/img/projects/noise_assessment/lab204-environment-22.png
importance: 2
---

<div class="noise-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Laboratory 204 Noise Assessment</h1>
    <p class="project-subtitle">Occupational Health & HVAC Noise Control</p>
    <div class="project-meta">
      <span class="badge">Industrial Hygiene & Environmental Engineering</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Project Context -->
  <div class="project-context">
    <div class="environment-photos">
      <img src="/assets/img/projects/noise_assessment/lab204-environment-22.png" alt="Laboratory 204 Environment" loading="lazy">
      <img src="/assets/img/projects/noise_assessment/lab204-environment-23.png" alt="Laboratory 204 Ceiling" loading="lazy">
    </div>
    <p>This assessment evaluates background noise from HVAC systems and workplace noise from machinery in Laboratory 204, identifying areas exceeding Hong Kong's <strong>Factories and Industrial Undertakings (Noise at Work) Regulation</strong> thresholds. The project proposes silencer installations, plenum chamber modifications, and ear protection zones to mitigate health risks.</p>
  </div>

  <!-- Introduction Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">1</span>
      Introduction & Objectives
    </h2>
    <div class="section-content">
      <div class="intro-grid">
        <div class="intro-text">
          <p>Laboratory 204 exhibits excessive noise levels from both HVAC systems (background) and industrial equipment (workplace). This assessment evaluates:</p>
          <ul>
            <li>Compliance with HK <strong>Cap. 59 Noise at Work Regulation</strong></li>
            <li>Identification of ear protection zones per action levels</li>
            <li>Mitigation strategies for low-frequency HVAC noise</li>
          </ul>
        </div>
        <div class="intro-visuals">
          <img src="/assets/img/projects/noise_assessment/lab204-environment-1.png" alt="Check Figure Table" loading="lazy">
          <img src="/assets/img/projects/noise_assessment/lab204-environment-2.png" alt="Action Level Guidance" loading="lazy">
        </div>
      </div>
      
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

  <!-- Key Findings Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">2</span>
      Key Findings
    </h2>

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
    </div>
  </section>

  <!-- Methodology Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">3</span>
      Methodology
    </h2>

    <div class="methodology-visual">
      <img src="/assets/img/projects/noise_assessment/lab204-environment-3.png" alt="RION NL-32 Sound Level Meter" loading="lazy">
      <p>Fig 1. The Sound Level Meter NL-32 by RION was used in this project to measure sound pressure level (dB/dBA) and sound frequency (Hz)</p>
    </div>
    
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

  <!-- Background Noise Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">4</span>
      Background Noise Analysis
    </h2>

    <div class="location-overview">
      <img src="/assets/img/projects/noise_assessment/lab204-environment-29.png" alt="Measurement Locations" loading="lazy">
      <p>Fig 2. This is a floor plan showing the layout of three machines (A, B, C), each surrounded by zones labeled with noise levels in dBA. Areas with high noise are marked as "Ear Protection Zones". The room includes ventilation inlets, equipment areas, a trench, water pumps, and a sprinkler spray testing tank. The plan emphasizes safety and noise exposure, with detailed measurements and sampling points throughout.</p>
    </div>

    <div class="location-overview">
      <img src="/assets/img/projects/noise_assessment/lab204-environment-27.png" alt="Measurement Locations" loading="lazy">
      <p>Fig 3. Measurement locations: ventilation fan motor, ventilation inlet, and center of the room</p>
    </div>

    <div class="location-overview">
      <img src="/assets/img/projects/noise_assessment/lab204-environment-28.png" alt="Measurement Locations" loading="lazy">
      <p>Fig 4. Locations of Machines A, B, and C in Laboratory 204</p>
    </div>

    <div class="results-tabs">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="background">Background Noise</button>
        <button class="tab-button" data-tab="workplace">Workplace Noise</button>
      </div>
      
      <!-- Replace the existing "NC Compliance Failure" section with this: -->
<div class="tab-content active" id="background">
<div class="nc-compliance">
  <h4>NC Compliance Failure</h4>
  <div class="nc-readings">
    <div class="nc-reading-grid">
      <div class="nc-reading">
        <div class="nc-reading-header">
          <span class="nc-location">1st Inlet</span>
          <span class="nc-value">58 NC</span>
        </div>
        <img src="/assets/img/projects/noise_assessment/lab204-environment-17.png" alt="1st Inlet NC Chart" loading="lazy">
      </div>
      <div class="nc-reading">
        <div class="nc-reading-header">
          <span class="nc-location">Under Motor</span>
          <span class="nc-value">62 NC</span>
        </div>
        <img src="/assets/img/projects/noise_assessment/lab204-environment-16.png" alt="Motor NC Chart" loading="lazy">
      </div>
      <div class="nc-reading">
        <div class="nc-reading-header">
          <span class="nc-location">Room Center</span>
          <span class="nc-value">55 NC</span>
        </div>
        <img src="/assets/img/projects/noise_assessment/lab204-environment-18.png" alt="Room Center NC Chart" loading="lazy">
      </div>
    </div>
  </div>
  <p class="nc-summary">Dominant low-frequency noise (250Hz) due to duct turbulence and reflective surfaces.</p>
</div>

        <div class="noise-location-analysis">
          <div class="location-analysis">
            <h5>1st Inlet</h5>
            <img src="/assets/img/projects/noise_assessment/lab204-environment-4.png" alt="1st Inlet Photo" loading="lazy">
            <img src="/assets/img/projects/noise_assessment/lab204-environment-5.png" alt="1st Inlet Data" loading="lazy">
          </div>
          
          <div class="location-analysis">
            <h5>Room Center</h5>
            <img src="/assets/img/projects/noise_assessment/lab204-environment-6.png" alt="Room Center Photo" loading="lazy">
            <img src="/assets/img/projects/noise_assessment/lab204-environment-7.png" alt="Room Center Data" loading="lazy">
          </div>
          
          <div class="location-analysis">
            <h5>Under Motor</h5>
            <img src="/assets/img/projects/noise_assessment/lab204-environment-8.png" alt="Motor Location Photo" loading="lazy">
            <img src="/assets/img/projects/noise_assessment/lab204-environment-9.png" alt="Motor Location Data" loading="lazy">
          </div>
        </div>
      </div>
      
      <div class="tab-content" id="workplace">
        <div class="machine-results">
          <div class="machine-card">
            <h5>Machine A</h5>
            <span class="machine-peak">92.2 dB(A)</span>
            <span class="machine-zone">1m² Protection Zone</span>
            <img src="/assets/img/projects/noise_assessment/lab204-environment-10.png" alt="Machine A Photo" loading="lazy">
            <img src="/assets/img/projects/noise_assessment/lab204-environment-11.png" alt="Machine A Data" loading="lazy">
          </div>
          <div class="machine-card danger">
            <h5>Machine B</h5>
            <span class="machine-peak">92.1 dB(A)</span>
            <span class="machine-zone">6m² Protection Zone</span>
            <img src="/assets/img/projects/noise_assessment/lab204-environment-12.png" alt="Machine B Photo" loading="lazy">
            <img src="/assets/img/projects/noise_assessment/lab204-environment-13.png" alt="Machine B Data" loading="lazy">
          </div>
          <div class="machine-card danger">
            <h5>Machine C</h5>
            <span class="machine-peak">92.8 dB(A)</span>
            <span class="machine-zone">4m² Protection Zone</span>
            <img src="/assets/img/projects/noise_assessment/lab204-environment-14.png" alt="Machine C Photo" loading="lazy">
            <img src="/assets/img/projects/noise_assessment/lab204-environment-15.png" alt="Machine C Data" loading="lazy">
          </div>
        </div>
        <div class="lep-calculation">
          <h4>LEP.D Calculation</h4>
          <code>10log(1/8)(3×10<sup>9.22</sup> + 2×10<sup>9.21</sup> + 4×10<sup>9.28</sup>) = 92.97 dB(A)</code>
          <p>Exceeds second action level (90 dB(A)) requiring mandatory hearing protection.</p>
        </div>
      </div>

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

  <!-- Workplace Noise Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
      Workplace Noise Assessment
    </h2>

    <div class="zone-diagrams">
      <div class="diagram-card">
        <img src="/assets/img/projects/noise_assessment/lab204-environment-19.png" 
             alt="Machine A Protection Zones" 
             class="diagram-image"
             loading="lazy">
        <div class="diagram-meta">
          <span class="diagram-label">Machine A</span>
          <span class="diagram-fig">Zone 1 (92.2 dB(A)) requires 1m² protection</span>
        </div>
      </div>
      <div class="diagram-card">
        <img src="/assets/img/projects/noise_assessment/lab204-environment-20.png" 
             alt="Machine B Protection Zones" 
             class="diagram-image"
             loading="lazy">
        <div class="diagram-meta">
          <span class="diagram-label">Machine B</span>
          <span class="diagram-fig">Zones 1-4 (90-92.1 dB(A)) require 6m² protection</span>
        </div>
      </div>
      <div class="diagram-card">
        <img src="/assets/img/projects/noise_assessment/lab204-environment-21.png" 
             alt="Machine C Protection Zones" 
             class="diagram-image"
             loading="lazy">
        <div class="diagram-meta">
          <span class="diagram-label">Machine C</span>
          <span class="diagram-fig">Zones 1-3 (90-92.8 dB(A)) require 4m² protection</span>
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
      <span class="section-number">6</span>
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
          <img src="/assets/img/projects/noise_assessment/lab204-environment-24.png" alt="Ear Protector Catalog" loading="lazy">
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

    <!-- In the Recommendations Section - Replace the existing PPE section with this: -->
<article class="design-subsection">
  <h3 class="subsection-header">Personal Protective Equipment</h3>
  
  <div class="ppe-tables">
    <h4>Ear Protector Effectiveness Calculations</h4>
    <p>The following tables demonstrate the noise reduction achieved by 3M™ Peltor™ X5A Ear Muffs across different frequency bands in each protection zone:</p>
    
    <div class="ppe-table-container">
      <h5>Machine A Protection Zones</h5>
      <div class="table-responsive">
        <table class="noise-data-table">
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Protection Value (dB)</th>
              <th>Zone 1 (dB)</th>
              <th>Protected Level (dB)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>63Hz</td><td>19.8</td><td>76.9</td><td>57.1</td></tr>
            <tr><td>125Hz</td><td>19.9</td><td>76.9</td><td>57.0</td></tr>
            <tr><td>250Hz</td><td>26.4</td><td>73.8</td><td>47.4</td></tr>
            <tr><td>500Hz</td><td>37.0</td><td>73.7</td><td>36.7</td></tr>
            <tr><td>1000Hz</td><td>40.9</td><td>75.5</td><td>34.6</td></tr>
            <tr><td>2000Hz</td><td>35.5</td><td>81.5</td><td>46.0</td></tr>
            <tr><td>4000Hz</td><td>40.2</td><td>87.0</td><td>46.8</td></tr>
            <tr><td>8000Hz</td><td>37.3</td><td>89.1</td><td>51.8</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="ppe-table-container">
      <h5>Machine B Protection Zones</h5>
      <div class="table-responsive">
        <table class="noise-data-table">
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Protection Value (dB)</th>
              <th>Zone 1 (dB)</th>
              <th>Zone 3 (dB)</th>
              <th>Zone 4 (dB)</th>
              <th>Protected Level (dB)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>63Hz</td><td>19.8</td><td>85.4</td><td>84.9</td><td>83.3</td><td>65.6</td></tr>
            <tr><td>125Hz</td><td>19.9</td><td>86.0</td><td>87.8</td><td>83.9</td><td>66.1</td></tr>
            <tr><td>250Hz</td><td>26.4</td><td>91.1</td><td>93.7</td><td>89.1</td><td>64.7</td></tr>
            <tr><td>500Hz</td><td>37.0</td><td>87.0</td><td>89.9</td><td>86.2</td><td>50.0</td></tr>
            <tr><td>1000Hz</td><td>40.9</td><td>84.2</td><td>85.6</td><td>85.1</td><td>43.3</td></tr>
            <tr><td>2000Hz</td><td>35.5</td><td>80.3</td><td>83.2</td><td>81.3</td><td>44.8</td></tr>
            <tr><td>4000Hz</td><td>40.2</td><td>80.1</td><td>81.4</td><td>80.5</td><td>39.9</td></tr>
            <tr><td>8000Hz</td><td>37.3</td><td>75.8</td><td>76.0</td><td>74.5</td><td>38.5</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="ppe-table-container">
      <h5>Machine C Protection Zones</h5>
      <div class="table-responsive">
        <table class="noise-data-table">
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Protection Value (dB)</th>
              <th>Zone 1 (dB)</th>
              <th>Zone 2 (dB)</th>
              <th>Zone 8 (dB)</th>
              <th>Protected Level (dB)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>63Hz</td><td>19.8</td><td>89.8</td><td>91.3</td><td>93.1</td><td>70.0</td></tr>
            <tr><td>125Hz</td><td>19.9</td><td>89.9</td><td>94.4</td><td>99.3</td><td>70.0</td></tr>
            <tr><td>250Hz</td><td>26.4</td><td>91.4</td><td>90.5</td><td>90.1</td><td>65.0</td></tr>
            <tr><td>500Hz</td><td>37.0</td><td>87.9</td><td>87.1</td><td>84.6</td><td>50.9</td></tr>
            <tr><td>1000Hz</td><td>40.9</td><td>85.2</td><td>84.1</td><td>83.7</td><td>44.3</td></tr>
            <tr><td>2000Hz</td><td>35.5</td><td>84.0</td><td>81.0</td><td>82.5</td><td>48.5</td></tr>
            <tr><td>4000Hz</td><td>40.2</td><td>85.9</td><td>82.3</td><td>83.6</td><td>45.7</td></tr>
            <tr><td>8000Hz</td><td>37.3</td><td>83.2</td><td>80.8</td><td>82.3</td><td>45.9</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="ppe-summary">
      <h4>Effectiveness Summary</h4>
      <ul>
        <li><strong>X5A Ear Muffs provide 19.8-40.9dB attenuation</strong> across frequency bands</li>
        <li>Most effective at <strong>1kHz (40.9dB attenuation)</strong></li>
        <li>Reduces all zones to <strong>≤70dB</strong> (below first action level)</li>
        <li>SNR (Single Number Rating) of <strong>37dB</strong> confirms suitability for 90+ dB(A) environments</li>
      </ul>
    </div>
  </div>
  </article>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">7</span>
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
      <img src="/assets/img/projects/noise_assessment/lab204-environment-26.png" alt="Silencer Installation Diagram">
      <p>Fig 5. Proposed silencer specifications and placement at fan discharge elbow</p>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">8</span>
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
    <div class="project-conclusion">
      <h3>Implementation Plan</h3>
      <ol>
        <li>Install silencers at HVAC inlets (Priority 1)</li>
        <li>Mark ear protection zones with signage</li>
        <li>Provide X5A ear muffs for high-noise areas</li>
        <li>Schedule biannual noise monitoring</li>
      </ol>
    </div>
  </section>
</div>

<style>
/* Consolidated CSS - Removed duplicate styles and fixed selectors */

.noise-project {
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #34495e;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.project-header {
  margin-bottom: 2rem;
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

/* Add remaining necessary styles from the original, removing duplicates */
/* ... */

@media (max-width: 768px) {
  .key-findings,
  .recommendations-grid,
  .solution-cards {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    font-size: 1.5rem;
  }
}
</style>

<script>
// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
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
});
</script>

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

.machine-card img {
  max-width: 100%;
  height: auto;
  display: block;
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

  /* Add to your existing CSS */
.ppe-tables {
  margin-top: 30px;
}

.ppe-table-container {
  margin-bottom: 40px;
}

.ppe-table-container h5 {
  color: #2c3e50;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid #3498db;
}

.noise-data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.noise-data-table th {
  background-color: #3498db;
  color: white;
  padding: 12px;
  text-align: left;
}

.noise-data-table td {
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
}

.noise-data-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.noise-data-table tr:hover {
  background-color: #f0f7ff;
}

.ppe-summary {
  background: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 30px;
  border-left: 4px solid #3498db;
}

.ppe-summary h4 {
  margin-top: 0;
  color: #2c3e50;
}

.ppe-summary ul {
  padding-left: 20px;
}

.ppe-summary li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .noise-data-table {
    min-width: 600px;
  }
}
</style>

<style>
/* Consolidated CSS with all necessary styles */
.noise-project {
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #34495e;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.project-header {
  margin-bottom: 2rem;
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

/* Image and visualization styles */
.environment-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.environment-photos img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.intro-visuals img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  margin-bottom: 15px;
}

.methodology-visual img {
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto 15px;
  border-radius: 8px;
}

.location-overview img,
.machine-locations img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.noise-location-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.location-analysis img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

/* Table styles */
.noise-data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.noise-data-table th {
  background-color: #3498db;
  color: white;
  padding: 12px;
  text-align: left;
}

.noise-data-table td {
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
}

.noise-data-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.noise-data-table tr:hover {
  background-color: #f0f7ff;
}

/* PPE specific styles */
.ppe-tables {
  margin-top: 30px;
}

.ppe-table-container {
  margin-bottom: 40px;
}

.ppe-table-container h5 {
  color: #2c3e50;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid #3498db;
}

.ppe-summary {
  background: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 30px;
  border-left: 4px solid #3498db;
}

.ppe-summary h4 {
  margin-top: 0;
  color: #2c3e50;
}

.ppe-summary ul {
  padding-left: 20px;
}

.ppe-summary li {
  margin-bottom: 8px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .intro-grid,
  .environment-photos {
    grid-template-columns: 1fr;
  }
  
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .noise-data-table {
    min-width: 600px;
  }
  
  .section-header {
    font-size: 1.5rem;
  }
}

<style>
/* Add this CSS to fix the layout */
.nc-reading-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.nc-reading {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.nc-reading-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.nc-location {
  font-weight: 600;
  color: #2c3e50;
}

.nc-value {
  background: #e74c3c;
  color: white;
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
}

.nc-reading img {
  width: 100%;
  border-radius: 4px;
}

.nc-summary {
  margin-top: 15px;
  font-size: 0.95rem;
  color: #7f8c8d;
  padding: 0 10px;
}

@media (max-width: 768px) {
  .nc-reading-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
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
});
</script>

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

<style>
/* 1. Fix Grid Layout */
.machine-results {
  display: grid !important; /* !important ensures this overrides previous settings */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
  gap: 20px;
  width: 100%;
}

/* 2. Constrain the Card Container */
.machine-card {
  display: flex;
  flex-direction: column;
  min-width: 0;      /* Critical CSS Grid fix prevents overflow */
  overflow: hidden;  /* Ensures images don't poke out of rounded corners */
}

/* 3. Force Images to Fit */
.machine-card img {
  width: 100% !important;
  max-width: 100% !important;
  height: auto;
  object-fit: contain;
}
</style>
