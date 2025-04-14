---
title: "High-Rise Electrical Systems - Cheuk Nang Centre"
category: Building Systems
description: "Comprehensive electrical design for 30-storey commercial building in TST, including load calculations and system schematics."
tech: [AutoCAD, Dialux, ETAP, CLP COP, BS 7671, ADMD Calculations]
image: /assets/img/projects/electrical/cheuk_nang-1.png
importance: 1
---

<div class="electrical-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">High-Rise Electrical Systems</h1>
    <p class="project-subtitle">Cheuk Nang Centre, Tsim Sha Tsui</p>
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
      <p>The Cheuk Nang Centre features a modern electrical infrastructure designed for a 30-storey mixed-use building with office spaces, retail areas, and essential service facilities. The design complies with CLP guidelines and Hong Kong building codes.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-1.png" 
             alt="30-storey building at 9-11 Hillwood Road" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">CHEUK NANG CENTRE, Tsim Sha Tsui Kowloon, Hong Kong</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-2.png" 
             alt="G/F public area system description" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">G/F public area (landlord supply) system description</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-3.png" 
             alt="1/F system description" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">1/F system description details</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-4.png" 
             alt="Typical floor system description" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">2-28/F public area (landlord & tenant supply)</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-5.png" 
             alt="Roof system description" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Roof system description details</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>This 30-storey building at 9-11 Hillwood Road features 5.9m ground/first floors and 4.15m typical floors. The electrical design serves office spaces (2/F-28/F), parking (G/F), mechanical plant (1/F), and roof installations while meeting stringent energy efficiency requirements.</p>
  </div>

  <!-- Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">1</span>
      Project Overview
    </h2>
    
    <div class="project-description">
      <p>The electrical design serves a 30-storey commercial building, including 27 office floors with a total usable floor area of approximately 14,619.34 m², and features three 1500kVA transformers, a 967.93kVA emergency generator, essential/non-essential supply separation, intelligent power distribution, and energy-efficient lighting solutions, all compliant with CLP COP 2015 and BEC energy efficiency requirements.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/electrical/cheuk_nang-6.png" 
               alt="ADMD load estimation" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Load estimation for whole building by ADMD method</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/electrical/cheuk_nang-47.png" 
               alt="Transformer load calculation" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">1500kVA transformer load calculation (CLP COP215)</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Key System Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">3,466 kVA</span>
          <span class="spec-label">Total Building Load</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">3×1500kVA</span>
          <span class="spec-label">Transformers</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">967.93 kVA</span>
          <span class="spec-label">Generator Capacity</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">584.77 TR</span>
          <span class="spec-label">Cooling Load</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">27</span>
          <span class="spec-label">Office Floors</span>
        </div>
      </div>
    </div>
  </section>

  <div class="facilities-overview">
    <h3 class="subsection-header">Building Components</h3>
    <div class="facilities-grid">
      <div class="facility-item">
        <span class="facility-icon">🏢</span>
        <span class="facility-name">Office Floors</span>
        <span class="facility-detail">2/F-28/F (537m² each)</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">🚗</span>
        <span class="facility-name">Car Park</span>
        <span class="facility-detail">G/F (947m²)</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">⚡</span>
        <span class="facility-name">Transformer Room</span>
        <span class="facility-detail">G/F</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">🛠️</span>
        <span class="facility-name">Plant Rooms</span>
        <span class="facility-detail">1/F & Roof</span>
      </div>
    </div>
  </div>
 
  <!-- System Design Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">2</span>
      System Design
    </h2>
    
    <div class="system-intro">
      <p>The electrical system was designed using the ADMD method to calculate peak loads. The design incorporates separate essential/non-essential supplies, zoned distribution, and energy-efficient components meeting CLP COP and BEC requirements.</p>
    </div>

    <article class="design-subsection power-distribution">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M13,2V10H21A8,8 0 0,0 13,2M19,12H13V21A6,6 0 0,0 19,12M11,2A10,10 0 0,0 1,12A10,10 0 0,0 11,22A10,10 0 0,0 21,12A10,10 0 0,0 11,2Z" />
        </svg>
        Power Distribution
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Key Distribution Components</h4>
          <ul class="system-features">
            <li>Three 1500kVA 11kV/380V transformers</li>
            <li>Essential supply backed by 968kVA generator</li>
            <li>Separate distribution boards for tenant/public areas</li>
            <li>Busbar risers up to 1650A capacity</li>
            <li>Essential and non-essential busbar risers (320A to 1650A)</li>
            <li>VVVF drive for fireman's lift with 1.58% voltage drop</li>
            <li>Diversity factors applied (0.8 for offices)</li>
          </ul>
        </div>

        <div class="system-types-grid">
          <div class="system-type-card">
            <div class="system-icon">⚡</div>
            <h5>Tenant Supply</h5>
            <p>630A/700A TP&N busbar risers</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-52.png" alt="Tenant Distribution Board" loading="lazy">
          </div>
          <div class="system-type-card">
            <div class="system-icon">🔌</div>
            <h5>Final Circuits</h5>
            <p>5×A1 ring + 2×A2 radial per floor</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-42.png" alt="Typical Floor Socket Plan" loading="lazy">
          </div>
          <div class="system-type-card">
            <div class="system-icon">❄️</div>
            <h5>Chiller Plant</h5>
            <p>1250A TP&N MCCB protection</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-44.png" alt="Motor Loading Estimation" loading="lazy">
          </div>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <div class="system-icon">🏗️</div>
            <h5>Transformer Room</h5>
            <p>G/F location with 11kV switchgear</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-32.png" alt="CLP Transformers Guideline" loading="lazy">
          </div>
          <div class="system-type-card">
            <div class="system-icon">🔄</div>
            <h5>LV Switch Room</h5>
            <p>Main distribution near building entrance</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-50.png" alt="G/F Distribution Board" loading="lazy">
          </div>
          <div class="system-type-card">
            <div class="system-icon">🚨</div>
            <h5>Generator Room</h5>
            <p>1/F with 6-hour fuel capacity</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-45.png" alt="Essential Motor Load" loading="lazy">
          </div>
          <div class="system-type-card">
            <div class="system-icon">🔌</div>
            <h5>Floor Distribution</h5>
            <p>Zoned risers with MCCB protection</p>
            <img src="/assets/img/projects/electrical/cheuk_nang-53.png" alt="Typical Floor Distribution Board" loading="lazy">
          </div>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,2L4,5V11.09C4,16.14 7.41,20.85 12,22C16.59,20.85 20,16.14 20,11.09V5L12,2Z" />
        </svg>
        Emergency Systems
      </h3>
      
      <div class="system-arrangement">
        <div class="arrangement-image">
          <img src="/assets/img/projects/electrical/cheuk_nang-45.png" 
               alt="Emergency Load Calculation" 
               class="arrangement-img"
               loading="lazy">
          <div class="arrangement-caption">
            <span class="arrangement-fig">Fig 3.</span>
            <span class="arrangement-desc">Total essential motor load calculation</span>
          </div>
        </div>
        <div class="arrangement-notes">
          <p><strong>Design Notes:</strong> 967.93kVA diesel generator sized for essential loads including fireman's lift (66.18kVA), sprinkler pumps (205.59kVA), and fixed fire pumps (329.41kVA). Automatic transfer switches ensure <1s transition during power failure with 10% safety margin.</p>
          <img src="/assets/img/projects/electrical/cheuk_nang-51.png" alt="1/F Distribution Board" loading="lazy">
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z" />
        </svg>
        Lighting System
      </h3>
      
      <div class="system-details">
        <div class="lighting-specs">
          <h4>Lighting Design Standards</h4>
          <ul>
            <li>CIBSE & Good Occupational Hygiene Practice compliance</li>
            <li>500 lux general office areas</li>
            <li>Energy-efficient LED fixtures throughout</li>
            <li>LPD meeting BEC code requirements</li>
          </ul>
          
          <div class="lighting-table">
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Model</th>
                  <th>Lumens</th>
                  <th>Qty (Typical Floor)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Office Areas</td>
                  <td>CTN6640HCZ</td>
                  <td>1600lm</td>
                  <td>89</td>
                </tr>
                <tr>
                  <td>Corridors</td>
                  <td>WT47QC LED2S5840</td>
                  <td>2300lm</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Toilets</td>
                  <td>SLD26/KZ</td>
                  <td>600lm</td>
                  <td>14</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="image-comparison">
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-25.png" alt="CIBSE Lighting Standards" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 4.</span>
                <span class="image-desc">CIBSE lighting lux requirements</span>
              </div>
            </div>
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-33.png" alt="Lighting Schedule" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 5.</span>
                <span class="image-desc">Selected lighting schedule</span>
              </div>
            </div>
          </div>
          
          <div class="image-comparison">
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-36.png" alt="G/F Lighting Plan" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 6.</span>
                <span class="image-desc">G/F lighting circuit plan</span>
              </div>
            </div>
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-38.png" alt="Typical Floor Lighting Plan" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 7.</span>
                <span class="image-desc">2-28/F typical lighting circuit plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Ventilation Systems
      </h3>
      
      <div class="ventilation-examples">
        <div class="ventilation-case">
          <h4>Transformer Room Ventilation</h4>
          <ul>
            <li>Volume: 617.79m³</li>
            <li>30 air changes/hour</li>
            <li>5× Clipsal fans (4×EB504T + 1×MCE300)</li>
            <li>Total flow: 5185L/s</li>
            <li>Power: 972W</li>
          </ul>
          <img src="/assets/img/projects/electrical/cheuk_nang-16.png" alt="Transformer Room Ventilation Standard" loading="lazy">
          <img src="/assets/img/projects/electrical/cheuk_nang-20.png" alt="Clipsal EB504T Fan" loading="lazy">
        </div>
        
        <div class="ventilation-case">
          <h4>Office Toilet Ventilation</h4>
          <ul>
            <li>Volume: 80.84m³</li>
            <li>8 air changes/hour</li>
            <li>1× Clipsal MCE300 fan</li>
            <li>Total flow: 185L/s</li>
            <li>Power: 52W</li>
          </ul>
          <img src="/assets/img/projects/electrical/cheuk_nang-13.png" alt="Toilet Ventilation Guideline" loading="lazy">
          <img src="/assets/img/projects/electrical/cheuk_nang-17.png" alt="Clipsal MCE300 Fan" loading="lazy">
        </div>
      </div>
      
      <div class="image-comparison">
        <div class="image-card">
          <img src="/assets/img/projects/electrical/cheuk_nang-14.png" alt="Engine Room Ventilation" loading="lazy">
          <div class="image-meta">
            <span class="image-fig">Fig 8.</span>
            <span class="image-desc">Engine room ventilation standards</span>
          </div>
        </div>
        <div class="image-card">
          <img src="/assets/img/projects/electrical/cheuk_nang-15.png" alt="Pump Room Ventilation" loading="lazy">
          <div class="image-meta">
            <span class="image-fig">Fig 9.</span>
            <span class="image-desc">Pump room & substation ventilation</span>
          </div>
        </div>
      </div>
    </article>
  </section>

  <!-- Engineering Calculations Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">3</span>
      Engineering Calculations
    </h2>
    
    <div class="calculations-intro">
      <p>All electrical calculations were performed in accordance with CLP COP 215 and BS EN 12845. The design accommodates peak demand factors while maintaining adequate capacity margins.</p>
    </div>

    <div class="calculation-tabs">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="load-estimation">Load Estimation</button>
        <button class="tab-button" data-tab="ventilation">Ventilation</button>
        <button class="tab-button" data-tab="lighting">Lighting</button>
        <button class="tab-button" data-tab="cable">Cable Sizing</button>
      </div>
      
      <div class="tab-content active" id="load-estimation">
        <h4>ADMD Method Calculation</h4>
        <div class="calculation-grid">
          <div class="calc-item">
            <span class="calc-label">Office Area (27 floors)</span>
            <span class="calc-value">27 × 537.03m² × 0.16kVA/m² = 2,320.77kVA</span>
            <img src="/assets/img/projects/electrical/cheuk_nang-9.png" alt="2-28/F Load Calculation" loading="lazy">
          </div>
          <div class="calc-item">
            <span class="calc-label">Lift Load (3 units)</span>
            <span class="calc-value">3 × 40kVA = 120kVA</span>
            <img src="/assets/img/projects/electrical/cheuk_nang-11.png" alt="Public Supply Feeders" loading="lazy">
          </div>
          <div class="calc-item">
            <span class="calc-label">Cooling Load</span>
            <span class="calc-value">584.77 TR × 1.45kW/TR ÷ 0.85pf = 997.56kVA</span>
            <img src="/assets/img/projects/electrical/cheuk_nang-44.png" alt="Motor Loading Estimation" loading="lazy">
          </div>
          <div class="calc-item highlight">
            <span class="calc-label">Total Demand</span>
            <span class="calc-value">3,465.97kVA → Three 1500kVA transformers</span>
            <img src="/assets/img/projects/electrical/cheuk_nang-49.png" alt="Total Loading Demand" loading="lazy">
          </div>
        </div>
      </div>
      
      <div class="tab-content" id="ventilation">
        <h4>Ventilation System Sizing</h4>
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Transformer Room</summary>
            <ul>
              <li>Volume: 104.71m² × 5.9m = 617.79m³</li>
              <li>30 ACH → 5,148.25L/s required</li>
              <li>Solution: 4×EB504T (1,250L/s) + 1×MCE300 (185L/s)</li>
              <li>Total power: 972W</li>
            </ul>
            <img src="/assets/img/projects/electrical/cheuk_nang-16.png" alt="Transformer Room Ventilation" loading="lazy">
            <img src="/assets/img/projects/electrical/cheuk_nang-20.png" alt="EB504T Fan Specs" loading="lazy">
          </details>
          <details class="spec-group">
            <summary>AHU Room (Typical Floor)</summary>
            <ul>
              <li>Volume: 12.64m² × 4.15m = 52.46m³</li>
              <li>6 ACH → 87.43L/s required</li>
              <li>Solution: 1×MCE200 (92L/s @ 31W)</li>
            </ul>
            <img src="/assets/img/projects/electrical/cheuk_nang-17.png" alt="MCE200 Fan Specs" loading="lazy">
          </details>
        </div>
      </div>
      
      <div class="tab-content" id="lighting">
        <h4>Lighting Design Example</h4>
        <div class="lighting-example">
          <p><strong>Conference Room 1 (35.64m²):</strong></p>
          <ul>
            <li>CIBSE requirement: 500 lux</li>
            <li>Luminaire: Caton CTN66404KZ (4,030 lm)</li>
            <li>Utilization factor: 0.7616</li>
            <li>Calculation: N = (500×35.64)/(4030×0.8×0.7616) = 7.35 → 8 units</li>
            <li>Layout: 4×2 grid with 2m × 1.13m spacing</li>
          </ul>
          <img src="/assets/img/projects/electrical/cheuk_nang-35.png" alt="Lighting Level Data" loading="lazy">
          <img src="/assets/img/projects/electrical/cheuk_nang-26.png" alt="LT-01 Lighting Specs" loading="lazy">
        </div>
      </div>
      
      <div class="tab-content" id="cable">
        <h4>Cable Sizing Calculations</h4>
        <div class="calculation-grid">
          <div class="calc-item">
            <span class="calc-label">Fireman's Lift Feeder</span>
            <span class="calc-value">VVVF drive with 1.58% voltage drop</span>
            <img src="/assets/img/projects/electrical/cheuk_nang-12.png" alt="Cable Sizing Details" loading="lazy">
          </div>
          <div class="calc-item">
            <span class="calc-label">Main Risers</span>
            <span class="calc-value">1650A busbar risers with MCCB protection</span>
            <img src="/assets/img/projects/electrical/cheuk_nang-46.png" alt="Cable Sizing Data" loading="lazy">
          </div>
        </div>
      </div>
    </div>
    
    <article class="design-subsection calculations">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,19H20V21H4V19M7.73,12.27L9.15,13.68C10.05,12.8 11.31,12.24 12.66,12.24C15.5,12.24 17.75,14.5 17.75,17.34C17.75,18.69 17.19,19.95 16.31,20.85L17.72,22.26C19,21 19.74,19.25 19.74,17.34C19.74,13.36 16.64,10.26 12.66,10.26C10.75,10.26 9,11 7.73,12.27M12.66,4C16.64,4 19.74,7.1 19.74,11.08C19.74,12.93 19,14.68 17.72,15.93L16.31,14.5C17.19,13.62 17.75,12.36 17.75,11.08C17.75,8.25 15.5,6 12.66,6C11.39,6 10.13,6.56 9.24,7.45L7.73,5.94C9,4.68 10.75,4 12.66,4M4,9.08C4,11.93 6.25,14.17 9.09,14.17C10.44,14.17 11.7,13.61 12.6,12.73L11.19,11.32C10.31,12.2 9.05,12.76 7.7,12.76C4.86,12.76 2.61,10.5 2.61,7.67C2.61,6.32 3.17,5.06 4.05,4.16L2.64,2.75C1.39,4 0.61,5.75 0.61,7.67C0.61,11.65 3.72,14.75 7.7,14.75C9.61,14.75 11.36,14 12.63,12.72L11.12,11.21C10.24,12.09 8.98,12.65 7.7,12.65C4.86,12.65 2.61,10.39 2.61,7.57H4V9.08Z" />
        </svg>
        Load Calculations
      </h3>
      
      <div class="calculation-tabs">
        <div class="tab-buttons">
          <button class="tab-button active" data-tab="admd-method">ADMD Method</button>
          <button class="tab-button" data-tab="cooling-load">Cooling Load</button>
          <button class="tab-button" data-tab="generator">Generator Sizing</button>
          <button class="tab-button" data-tab="floor-load">Floor Loads</button>
        </div>
        
        <div class="tab-content active" id="admd-method">
          <h4>After Diversity Maximum Demand</h4>
          <div class="calculation-grid">
            <div class="calc-item">
              <span class="calc-label">Office UFA</span>
              <span class="calc-value">0.16kVA/m²</span>
              <img src="/assets/img/projects/electrical/cheuk_nang-6.png" alt="ADMD Calculation" loading="lazy">
            </div>
            <div class="calc-item">
              <span class="calc-label">Public Services</span>
              <span class="calc-value">40kVA/lift</span>
              <img src="/assets/img/projects/electrical/cheuk_nang-11.png" alt="Public Supply Feeders" loading="lazy">
            </div>
            <div class="calc-item">
              <span class="calc-label">Car Park</span>
              <span class="calc-value">0.03kVA/m²</span>
              <img src="/assets/img/projects/electrical/cheuk_nang-7.png" alt="G/F Load Calculation" loading="lazy">
            </div>
            <div class="calc-item highlight">
              <span class="calc-label">Total kVA (excl. cooling)</span>
              <span class="calc-value">2,468.42kVA</span>
            </div>
            <div class="calc-item highlight">
              <span class="calc-label">Total kVA (incl. cooling)</span>
              <span class="calc-value">3,465.97kVA</span>
              <img src="/assets/img/projects/electrical/cheuk_nang-49.png" alt="Total Loading Demand" loading="lazy">
            </div>
          </div>
        </div>
        
        <div class="tab-content" id="cooling-load">
          <h4>Cooling Load Calculation</h4>
          <ul>
            <li>Total cooling area: 14,619m²</li>
            <li>Assumed 250ft²/tonne → 584.77 tonnes</li>
            <li>Power consumption: 847.92kW</li>
            <li>At PF=0.85 → 997.56kVA</li>
          </ul>
          <img src="/assets/img/projects/electrical/cheuk_nang-44.png" alt="Motor Loading Estimation" loading="lazy">
        </div>
        
        <div class="tab-content" id="generator">
          <h4>Essential Load Calculation</h4>
          <ul>
            <li>Fireman Lift + Fire Pumps: 1,095kVA</li>
            <li>75% diversity → 821.47kVA</li>
            <li>PF=0.65 → 533.95kW</li>
            <li>Essential DBs: 170kW</li>
            <li>Total: 703.95kW</li>
            <li>10% margin → 968kVA generator</li>
          </ul>
          <img src="/assets/img/projects/electrical/cheuk_nang-45.png" alt="Essential Motor Load" loading="lazy">
        </div>
        
        <div class="tab-content" id="floor-load">
          <h4>Floor-by-Floor Load Calculations</h4>
          <div class="image-comparison">
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-7.png" alt="G/F Load Calculation" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 10.</span>
                <span class="image-desc">G/F load calculation details</span>
              </div>
            </div>
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-8.png" alt="1/F Load Calculation" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 11.</span>
                <span class="image-desc">1/F load calculation details</span>
              </div>
            </div>
            <div class="image-card">
              <img src="/assets/img/projects/electrical/cheuk_nang-10.png" alt="R/F Load Calculation" loading="lazy">
              <div class="image-meta">
                <span class="image-fig">Fig 12.</span>
                <span class="image-desc">Roof load calculation details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    
    <div class="calculation-gallery">
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/electrical/cheuk_nang-6.png" 
               alt="ADMD Calculation" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">ADMD Calculation</span>
            <span class="calc-detail">Total building load determination</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/electrical/cheuk_nang-12.png" 
               alt="Cable Sizing" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Cable Sizing</span>
            <span class="calc-detail">Fireman lift feeder calculation</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/electrical/cheuk_nang-46.png" 
               alt="Cable Data" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Cable Data</span>
            <span class="calc-detail">Detailed cable specifications</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Design Methodology Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">4</span>
      Design Methodology
    </h2>
    
    <div class="methodology-intro">
      <p>The electrical design followed a systematic approach from initial load estimation through detailed equipment selection, incorporating multiple verification steps to ensure code compliance and operational reliability.</p>
    </div>
    
    <div class="methodology-steps">
      <div class="step-item">
        <div class="step-number">Step 1</div>
        <h4>Load Estimation</h4>
        <p>ADMD method for whole building demand</p>
        <img src="/assets/img/projects/electrical/cheuk_nang-6.png" alt="Load Estimation" loading="lazy">
      </div>
      <div class="step-item">
        <div class="step-number">Step 2</div>
        <h4>System Architecture</h4>
        <p>Transformer/Genset sizing and zoning</p>
        <img src="/assets/img/projects/electrical/cheuk_nang-32.png" alt="Transformer Guidelines" loading="lazy">
      </div>
      <div class="step-item">
        <div class="step-number">Step 3</div>
        <h4>Distribution Design</h4>
        <p>Riser sizing and protection coordination</p>
        <img src="/assets/img/projects/electrical/cheuk_nang-50.png" alt="Distribution Board" loading="lazy">
      </div>
      <div class="step-item">
        <div class="step-number">Step 4</div>
        <h4>Equipment Selection</h4>
        <p>Lighting, ventilation and specialty loads</p>
        <img src="/assets/img/projects/electrical/cheuk_nang-33.png" alt="Lighting Schedule" loading="lazy">
      </div>
      <div class="step-item">
        <div class="step-number">Step 5</div>
        <h4>Verification</h4>
        <p>Voltage drop and short circuit analysis</p>
        <img src="/assets/img/projects/electrical/cheuk_nang-12.png" alt="Cable Sizing" loading="lazy">
      </div>
    </div>
  </section>

  <!-- System Components -->
  <section class="project-section components-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
      System Components
    </h2>
    
    <div class="components-gallery">
      <div class="component-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-20.png" alt="Clipsal Ventilation Fan">
        <h3>Ventilation Systems</h3>
        <ul>
          <li>EB504T for transformer room (1,250L/s)</li>
          <li>MCE300 for toilet exhaust (185L/s)</li>
          <li>OW3709 for small spaces (75L/s)</li>
        </ul>
        <img src="/assets/img/projects/electrical/cheuk_nang-19.png" alt="OW Series Fans" loading="lazy">
      </div>
      
      <div class="component-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-26.png" alt="Caton Luminaire">
        <h3>Lighting Fixtures</h3>
        <ul>
          <li>Caton CTN66404KZ (4,030 lm)</li>
          <li>LPD compliant with BEC 2015</li>
          <li>SHR verification for uniform distribution</li>
        </ul>
        <div class="image-comparison">
          <img src="/assets/img/projects/electrical/cheuk_nang-27.png" alt="LT-02 Lighting" loading="lazy">
          <img src="/assets/img/projects/electrical/cheuk_nang-28.png" alt="LT-03 Lighting" loading="lazy">
        </div>
      </div>
      
      <div class="component-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-54.png" alt="MCCB Panel">
        <h3>Protection Devices</h3>
        <ul>
          <li>630A/700A TP&N MCCB for risers</li>
          <li>320A essential supply busbar</li>
          <li>1,650A non-essential busbar</li>
        </ul>
        <img src="/assets/img/projects/electrical/cheuk_nang-53.png" alt="Typical Floor DB" loading="lazy">
      </div>
    </div>
    
    <div class="components-gallery">
      <div class="component-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-21.png" alt="3-Row Coil Unit">
        <h3>Coil Units</h3>
        <ul>
          <li>Fail coil unit selection for 3 Rows</li>
          <li>Precise cooling capacity calculations</li>
          <li>Energy efficient configurations</li>
        </ul>
        <div class="image-comparison">
          <img src="/assets/img/projects/electrical/cheuk_nang-22.png" alt="2-Row Coil Unit" loading="lazy">
          <img src="/assets/img/projects/electrical/cheuk_nang-23.png" alt="4-Row Coil Unit" loading="lazy">
        </div>
      </div>
      
      <div class="component-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-24.png" alt="AHU Selection">
        <h3>Air Handling Units</h3>
        <ul>
          <li>CLCP Model 005 and 020 selection</li>
          <li>Optimized for high-rise applications</li>
          <li>Energy recovery systems</li>
        </ul>
      </div>
      
      <div class="component-card">
        <img src="/assets/img/projects/electrical/cheuk_nang-29.png" alt="LT-04 Lighting Part 1">
        <h3>Specialty Lighting</h3>
        <ul>
          <li>High-efficiency LED solutions</li>
          <li>Emergency lighting compliance</li>
          <li>Custom configurations</li>
        </ul>
        <img src="/assets/img/projects/electrical/cheuk_nang-30.png" alt="LT-04 Lighting Part 2" loading="lazy">
        <img src="/assets/img/projects/electrical/cheuk_nang-31.png" alt="LT-05 Lighting" loading="lazy">
      </div>
    </div>
  </section>
  
  <!-- Project Reflection Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">6</span>
      Project Reflection
    </h2>
    
    <div class="reflection-content">
      <div class="reflection-text">
        <p>This project demonstrated the application of theoretical electrical engineering principles to a complex high-rise building, requiring coordination between multiple building systems and strict adherence to Hong Kong regulations.</p>
        
        <div class="key-challenges">
          <h3>Key Challenges</h3>
          <ul>
            <li>Balancing load density with energy efficiency requirements</li>
            <li>Coordinating essential/non-essential supply separation</li>
            <li>Integrating ventilation requirements with electrical capacity</li>
            <li>Maintaining voltage stability across 30 floors</li>
          </ul>
        </div>
        
        <div class="project-outcome">
          <h3>Project Outcomes</h3>
          <ul>
            <li>Successfully designed electrical system for 30-storey building</li>
            <li>Met all CLP COP and BEC requirements</li>
            <li>Optimized energy efficiency while ensuring reliability</li>
            <li>Integrated complex systems with mechanical and structural elements</li>
          </ul>
        </div>
      </div>
      
      <div class="reflection-image">
        <img src="/assets/img/projects/electrical/cheuk_nang-40.png" 
             alt="G/F Socket Plan" 
             class="reflection-img"
             loading="lazy">
        <p class="image-caption">Fig 13. G/F car park electrical socket plan</p>
        
        <img src="/assets/img/projects/electrical/cheuk_nang-43.png" 
             alt="R/F Socket Plan" 
             class="reflection-img"
             loading="lazy">
        <p class="image-caption">Fig 14. Roof level electrical socket plan</p>
      </div>
    </div>
  </section>
</div>

<style>
/* Base Styles */
.electrical-project {
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

.subsection-icon {
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

/* Components Gallery */
.components-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.component-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.component-card img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 15px;
}

.component-card h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.component-card ul {
  padding-left: 20px;
}

.component-card li {
  margin-bottom: 8px;
}

/* Ventilation Cases */
.ventilation-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.ventilation-case {
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
}

.ventilation-case img {
  width: 100%;
  height: auto;
  margin-top: 15px;
  border-radius: 6px;
}

/* Lighting Table */
.lighting-table {
  overflow-x: auto;
  margin-top: 20px;
}

.lighting-table table {
  width: 100%;
  border-collapse: collapse;
}

.lighting-table th, 
.lighting-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.lighting-table th {
  background-color: #f5f5f5;
  font-weight: 600;
}

/* Calculation Grid */
.calculation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.calc-item {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.calc-item.highlight {
  background: #f0f7ff;
  border-left: 3px solid var(--primary-color);
}

.calc-label {
  font-weight: 600;
  color: var(--secondary-color);
}

.calc-value {
  display: block;
  margin: 10px 0;
}

.calc-item img {
  width: 100%;
  height: auto;
  margin-top: 15px;
  border-radius: 6px;
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
  .electrical-project {
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
