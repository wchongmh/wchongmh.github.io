---
title: "Fire Service System Design - Residential Care Home"
category: Building Systems
description: "Comprehensive fire safety system design for a Scottish residential care home, focusing on vulnerable occupants and regulatory compliance."
tech: [BS 5839-1:2017, BS 9999:2017, NHS Firecode SHTM 85, BIM Coordination, Fire Safety Engineering]
image: /assets/img/projects/care-home-design/fire_service-18.png
importance: 1
---

<div class="fire-safety-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Fire Service System Design</h1>
    <p class="project-subtitle">Residential Care Home, Scotland</p>
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
      <p>The residential care home features a comprehensive fire safety system designed specifically for elderly and vulnerable occupants. The 3D renderings showcase the building's architecture with integrated fire safety systems carefully coordinated with the building design.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/care-home-design/fire_service-18.png" 
             alt="Care Home 3D Overview" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Overall 3D architectural rendering</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/care-home-design/fire_service-21.png" 
             alt="Care Home Front View" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Front architectural view</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>This fire safety system design represents a comprehensive, code-compliant solution that prioritizes life safety while addressing the unique challenges of care home environments. The multi-layered approach ensures redundancy in protection systems, and the focus on early detection/alarm provides maximum evacuation time for vulnerable residents.</p>
  </div>

  <!-- Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Project Overview
    </h2>
    
    <div class="project-description">
      <p>The fire protection infrastructure was designed for a two-story residential care home with special emphasis on elderly/vulnerable occupants with mobility and sensory challenges. The system integrates active (detection/suppression) and passive (compartmentation) systems while adhering to BS EN standards, Scottish Building Standards, and NHS Firecode.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/care-home-design/fire_service-4.png" 
               alt="Fire System Overview Schematic Diagram" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Fire system overview schematic showing operation process and device integration</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/care-home-design/fire_service-13.png" 
               alt="Automatic Suppression & Alarm System Diagram" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Automatic suppression system with device communication details</span>
        </div>
      </div>
    </div>
    
    <div class="key-specs">
      <h3 class="specs-title">Key System Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">163</span>
          <span class="spec-label">Multi-sensor Detectors</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">49</span>
          <span class="spec-label">Manual Call Points</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">39</span>
          <span class="spec-label">Evacuation Chairs</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">21</span>
          <span class="spec-label">Fire/Smoke Dampers</span>
        </div>
      </div>
    </div>
  </section>

  <div class="project-highlights">
    <div class="highlight-card">
      <div class="highlight-icon">🏢</div>
      <div class="highlight-content">
        <span class="highlight-value">2</span>
        <span class="highlight-label">Floors</span>
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-icon">🛡️</div>
      <div class="highlight-content">
        <span class="highlight-value">L1</span>
          <span class="highlight-label">Alarm Category</span>
      </div>
    </div>
  </div>

  <div class="facilities-overview">
    <h3 class="subsection-header">System Components</h3>
    <div class="facilities-grid">
      <div class="facility-item">
        <span class="facility-icon">🔥</span>
        <span class="facility-name">Detection</span>
        <span class="facility-detail">163 multi-sensor detectors</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">💧</span>
        <span class="facility-name">Suppression</span>
        <span class="facility-detail">Full sprinkler coverage</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">🚪</span>
        <span class="facility-name">Compartmentation</span>
        <span class="facility-detail">FD30/FD60 fire doors</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">📢</span>
        <span class="facility-name">Communication</span>
        <span class="facility-detail">Emergency Voice System</span>
      </div>
      <div class="facility-item">
        <span class="facility-icon">🪑</span>
        <span class="facility-name">Evacuation</span>
        <span class="facility-detail">39 evacuation chairs</span>
      </div>
    </div>
  </div>
 
  <!-- System Design Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
      System Design
    </h2>
    
    <div class="system-intro">
      <p>The fire safety system was designed using a zoned approach with special considerations for vulnerable occupants. The design incorporates progressive horizontal evacuation as the primary method for non-ambulant residents, with refuge areas and specialized communication systems.</p>
    </div>

    <article class="design-subsection detection-system">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V13H13V7H11Z" />
        </svg>
        Detection & Alarm Systems
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Gent Vigilon Plus Addressable System</h4>
          <ul class="system-features">
            <li>163 multi-sensor detectors (S-Quad series) combining optical, heat, and CO detection</li>
            <li>49 manual call points with resettable elements</li>
            <li>Category L1 coverage throughout the building</li>
            <li>Integrated voice evacuation and visual alarms (VADs)</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-75.png" alt="Multi-Sensor Detection Device" class="system-icon-img">
            <h5>Multi-Sensor Detectors</h5>
            <p>S-Quad series with optical, heat, and CO detection</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-77.png" alt="Manual Call Point" class="system-icon-img">
            <h5>Manual Call Points</h5>
            <p>With resettable elements</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-73.png" alt="Control Panel" class="system-icon-img">
            <h5>Control Panel</h5>
            <p>Gent Vigilon Plus 1-4 Loop</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-71.png" alt="Visual Alarms" class="system-icon-img">
            <h5>Visual Alarms</h5>
            <p>Ceiling-mounted VADs</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Technical Specifications</h4>
        
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Detection Layout</summary>
            <div class="spec-image-grid">
              <img src="/assets/img/projects/care-home-design/fire_service-10.png" alt="First Floor Detection Layout">
              <img src="/assets/img/projects/care-home-design/fire_service-11.png" alt="Ground Floor Detection Layout">
              <img src="/assets/img/projects/care-home-design/fire_service-12.png" alt="Roof Detection System">
            </div>
            <ul>
              <li>Max 7.5m detector spacing in corridors</li>
              <li>Special optical sensors for roof void areas</li>
              <li>Separate zones for stairs with pressurization</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Zoning Plan</summary>
            <div class="spec-image-grid">
              <img src="/assets/img/projects/care-home-design/fire_service-7.png" alt="Fire Alarm Zone Plan">
              <img src="/assets/img/projects/care-home-design/fire_service-59.png" alt="Detection Zones Schematic">
              <img src="/assets/img/projects/care-home-design/fire_service-66.png" alt="Alarm Zones Schematic">
            </div>
            <ul>
              <li>75 bedroom detection zones</li>
              <li>2 corridor alarm zones per floor</li>
              <li>Separate high-risk zones for kitchen/laundry</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Alarm Requirements</summary>
            <div class="spec-image-grid">
              <img src="/assets/img/projects/care-home-design/fire_service-68.png" alt="Sound Level Requirements">
              <img src="/assets/img/projects/care-home-design/fire_service-69.png" alt="Sounder Requirements">
              <img src="/assets/img/projects/care-home-design/fire_service-70.png" alt="Sound Attenuation">
            </div>
            <ul>
              <li>Minimum 65dB sound level at bedheads</li>
              <li>Visual alarms for hearing impaired</li>
              <li>Silent evacuation capability for sensitive areas</li>
            </ul>
          </details>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />
        </svg>
        Suppression Systems
      </h3>
      
      <div class="diagram-description">
        <p>The suppression systems were designed to provide automatic sprinkler coverage per BS 9251, supplemented by manual suppression equipment strategically placed throughout the facility. Special consideration was given to high-risk areas like the kitchen and laundry.</p>
      </div>
      
      <div class="diagram-grid">
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/care-home-design/fire_service-16.png" 
                 alt="Ground Floor Sprinkler System" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">Sprinkler Layout</span>
            <span class="diagram-fig">Fig 3. Ground floor sprinkler system showing pipe connections</span>
          </div>
        </div>
        
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/care-home-design/fire_service-17.png" 
                 alt="First Floor Sprinkler System" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">Sprinkler Layout</span>
            <span class="diagram-fig">Fig 4. First floor sprinkler system showing pump connections</span>
          </div>
        </div>
      </div>

      <div class="suppression-details">
        <div class="suppression-type">
          <h4>Automatic Sprinklers</h4>
          <ul>
            <li>V2708 Pendent Sprinklers (155°F)</li>
            <li>Full coverage per BS 9251</li>
            <li>6000L GRP sectional water tank</li>
            <li>Vertical multistage stainless steel pumps</li>
          </ul>
          <div class="suppression-images">
            <img src="/assets/img/projects/care-home-design/fire_service-89.png" alt="Pendent Sprinkler">
            <img src="/assets/img/projects/care-home-design/fire_service-87.png" alt="Water Tank">
            <img src="/assets/img/projects/care-home-design/fire_service-88.png" alt="Pump">
          </div>
        </div>
        
        <div class="suppression-type">
          <h4>Manual Suppression</h4>
          <ul>
            <li>28 foam extinguishers (Class A/B, 30m spacing)</li>
            <li>12 CO₂ extinguishers (Class E, near electrical risks)</li>
            <li>10 fire blankets (1.2m x 1.2m) in high-risk areas</li>
          </ul>
          <div class="suppression-images">
            <img src="/assets/img/projects/care-home-design/fire_service-79.png" alt="Foam Extinguisher">
            <img src="/assets/img/projects/care-home-design/fire_service-80.png" alt="CO2 Extinguisher">
            <img src="/assets/img/projects/care-home-design/fire_service-78.png" alt="Fire Blanket">
          </div>
        </div>
      </div>
    </article>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10C11.17,10 10.5,10.67 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5C13.5,10.67 12.83,10 12,10Z" />
        </svg>
        Specialized Safety Features
      </h3>
      
      <div class="system-arrangement">
        <div class="arrangement-image">
          <img src="/assets/img/projects/care-home-design/fire_service-15.png" 
               alt="Front Section View With Devices" 
               class="arrangement-img"
               loading="lazy">
          <div class="arrangement-caption">
            <span class="arrangement-fig">Fig 5.</span>
            <span class="arrangement-desc">Section view showing sprinklers, door retainers, and extinguishers in bedrooms and corridor</span>
          </div>
        </div>
        <div class="arrangement-notes">
          <p><strong>Design Notes:</strong> The system incorporates specialized features for vulnerable occupants including emergency voice communication, silent evacuation systems, and progressive horizontal evacuation strategies. Refuge areas are provided with two-way communication and emergency assist alarms.</p>
        </div>
      </div>

      <div class="special-features-grid">
        <div class="feature-card">
          <img src="/assets/img/projects/care-home-design/fire_service-52.png" alt="EVCS System">
          <h4>Emergency Voice Communication</h4>
          <p>Honeywell EVCS with 11 refuge call points and 8 emergency assist alarms</p>
        </div>
        <div class="feature-card">
          <img src="/assets/img/projects/care-home-design/fire_service-40.png" alt="Dorgard Pro">
          <h4>Silent Evacuation</h4>
          <p>Dorgard Pro door retainers with delayed alarm activation</p>
        </div>
        <div class="feature-card">
          <img src="/assets/img/projects/care-home-design/fire_service-45.png" alt="Evacuation Chair">
          <h4>Evacuation Assistance</h4>
          <p>39 Exitmaster eGO evacuation chairs at stair locations</p>
        </div>
        <div class="feature-card">
          <img src="/assets/img/projects/care-home-design/fire_service-48.png" alt="Refuge Area">
          <h4>Refuge Areas</h4>
          <p>15 designated refuge points with communication systems</p>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13,13H11V7H13M13,17H11V15H13V17Z" />
        </svg>
        Passive Protection
      </h3>
      
      <div class="passive-protection">
        <div class="protection-type">
          <h4>Fire Doors</h4>
          <div class="protection-images">
            <img src="/assets/img/projects/care-home-design/fire_service-37.png" alt="FD30 Fire Door">
            <img src="/assets/img/projects/care-home-design/fire_service-38.png" alt="FD60 Fire Door">
            <img src="/assets/img/projects/care-home-design/fire_service-2.png" alt="Fire Door Specification">
          </div>
          <ul>
            <li>FD30 (30-minute rating) for general areas</li>
            <li>FD60 (60-minute rating) for high-risk areas</li>
            <li>Panic exit devices (EN 1125) with alarm facility</li>
          </ul>
        </div>
        
        <div class="protection-type">
          <h4>Fire Dampers</h4>
          <div class="protection-images">
            <img src="/assets/img/projects/care-home-design/fire_service-32.png" alt="Fire Smoke Damper">
            <img src="/assets/img/projects/care-home-design/fire_service-33.png" alt="Electrical Release Damper">
            <img src="/assets/img/projects/care-home-design/fire_service-35.png" alt="Damper Installation">
          </div>
          <ul>
            <li>21 motorized fire/smoke dampers (Advanced Air Model 2530)</li>
            <li>2-hour rated dampers in kitchen, laundry, and stair pressurization</li>
            <li>1-hour rated dampers in corridors</li>
          </ul>
        </div>
      </div>
    </article>
  </section>

  <!-- Evacuation Strategy Section -->
  <section class="project-section evacuation-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Evacuation Strategy
    </h2>
    
    <div class="evacuation-intro">
      <p>The evacuation strategy was specifically designed for elderly and vulnerable occupants, incorporating progressive horizontal evacuation as the primary method for non-ambulant residents. The phased approach ensures safe movement while minimizing stress and confusion during emergencies.</p>
    </div>
    
    <div class="evacuation-grid">
      <div class="evacuation-card">
        <img src="/assets/img/projects/care-home-design/fire_service-5.png" alt="First Floor Evacuation Plan">
        <h4>First Floor Plan</h4>
        <p>Showing primary evacuation paths, secondary exits, and refuge points</p>
      </div>
      <div class="evacuation-card">
        <img src="/assets/img/projects/care-home-design/fire_service-6.png" alt="Ground Floor Evacuation Plan">
        <h4>Ground Floor Plan</h4>
        <p>Showing primary route, secondary exits, and assembly points</p>
      </div>
    </div>
    
    <div class="evacuation-details">
      <div class="evacuation-phase">
        <h4>Progressive Horizontal Evacuation (PHE)</h4>
        <ol>
          <li>Immediate horizontal movement to adjacent fire compartment</li>
          <li>Vertical evacuation only if required by conditions</li>
          <li>Use of refuge areas with communication systems</li>
          <li>Assisted evacuation for non-ambulant residents</li>
        </ol>
      </div>
      
      <div class="evacuation-phase">
        <h4>Refuge Areas</h4>
        <div class="refuge-images">
          <img src="/assets/img/projects/care-home-design/fire_service-49.png" alt="Refuge Area Design">
          <img src="/assets/img/projects/care-home-design/fire_service-50.png" alt="Refuge Requirements">
          <img src="/assets/img/projects/care-home-design/fire_service-51.png" alt="Refuge Accessibility">
        </div>
        <p>15 designated refuge points meeting NHSScotland Firecode SHTM 85 standards</p>
      </div>
    </div>
  </section>

  <!-- Regulatory Compliance Section -->
  <section class="project-section compliance-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Regulatory Compliance
    </h2>
    
    <div class="compliance-intro">
      <p>The design meets or exceeds all relevant UK and Scottish regulations, with special attention to healthcare-specific requirements for vulnerable occupants. The system was designed to comply with both building codes and equality legislation.</p>
    </div>
    
    <div class="compliance-grid">
      <div class="compliance-card">
        <img src="/assets/img/projects/care-home-design/fire_service-57.png" alt="L1 Category">
        <h4>Detection Standards</h4>
        <p>BS 5839-1:2017 (Category L1)</p>
      </div>
      <div class="compliance-card">
        <img src="/assets/img/projects/care-home-design/fire_service-46.png" alt="Wall Requirements">
        <h4>Passive Protection</h4>
        <p>NHS Scotland Firecode SHTM 85</p>
      </div>
      <div class="compliance-card">
        <img src="/assets/img/projects/care-home-design/fire_service-47.png" alt="Ceiling Requirements">
        <h4>Surface Treatments</h4>
        <p>Building Standards Technical Handbook</p>
      </div>
      <div class="compliance-card">
        <img src="/assets/img/projects/care-home-design/fire_service-58.png" alt="Alarm Categories">
        <h4>System Categories</h4>
        <p>BS 9999:2017 Fire safety in buildings</p>
      </div>
    </div>
    
    <div class="compliance-tables">
      <h3 class="subsection-header">Key Compliance Tables</h3>
      <div class="table-grid">
        <div class="table-card">
          <img src="/assets/img/projects/care-home-design/fire_service-90.png" alt="Sprinkler Categories">
          <p>Categories for sprinkler system</p>
        </div>
        <div class="table-card">
          <img src="/assets/img/projects/care-home-design/fire_service-91.png" alt="Design Parameters">
          <p>Sprinkler system minimum design parameters</p>
        </div>
        <div class="table-card">
          <img src="/assets/img/projects/care-home-design/fire_service-92.png" alt="Flow Rates">
          <p>Typical flow rates for sprinkler systems</p>
        </div>
        <div class="table-card">
          <img src="/assets/img/projects/care-home-design/fire_service-93.png" alt="Temperature Ratings">
          <p>Operating temperature ratings of sprinkler heads</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Engineering Calculations Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Engineering Calculations
    </h2>
    
    <div class="calculations-intro">
      <p>All hydraulic and system performance calculations were performed in accordance with BS EN standards and NHS Firecode requirements. The design accommodates peak demand scenarios while maintaining adequate coverage and performance.</p>
    </div>
    
    <!-- Design Calculations Section -->
    <article class="design-subsection calculations">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,19H20V21H4V19M7.73,12.27L9.15,13.68C10.05,12.8 11.31,12.24 12.66,12.24C15.5,12.24 17.75,14.5 17.75,17.34C17.75,18.69 17.19,19.95 16.31,20.85L17.72,22.26C19,21 19.74,19.25 19.74,17.34C19.74,13.36 16.64,10.26 12.66,10.26C10.75,10.26 9,11 7.73,12.27M12.66,4C16.64,4 19.74,7.1 19.74,11.08C19.74,12.93 19,14.68 17.72,15.93L16.31,14.5C17.19,13.62 17.75,12.36 17.75,11.08C17.75,8.25 15.5,6 12.66,6C11.39,6 10.13,6.56 9.24,7.45L7.73,5.94C9,4.68 10.75,4 12.66,4M4,9.08C4,11.93 6.25,14.17 9.09,14.17C10.44,14.17 11.7,13.61 12.6,12.73L11.19,11.32C10.31,12.2 9.05,12.76 7.7,12.76C4.86,12.76 2.61,10.5 2.61,7.67C2.61,6.32 3.17,5.06 4.05,4.16L2.64,2.75C1.39,4 0.61,5.75 0.61,7.67C0.61,11.65 3.72,14.75 7.7,14.75C9.61,14.75 11.36,14 12.63,12.72L11.12,11.21C10.24,12.09 8.98,12.65 7.7,12.65C4.86,12.65 2.61,10.39 2.61,7.57H4V9.08Z" />
        </svg>
        Hydraulic Calculations
      </h3>
      
      <div class="calculation-images">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-84.png" 
               alt="Hcalc Software" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Hydraulic Calculations</span>
            <span class="calc-detail">Using Hcalc software for friction loss in pipes</span>
          </div>
        </div>
        
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-85.png" 
               alt="Hcalc Process" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Calculation Process</span>
            <span class="calc-detail">Detailed workflow in Hcalc software</span>
          </div>
        </div>
        
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-86.png" 
               alt="Pipe Materials" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Pipe Materials</span>
            <span class="calc-detail">Standards-compliant materials selection</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-summary">
        <h3 class="summary-title">Design Safety Factors</h3>
        <ul class="safety-factors">
          <li>20% capacity margin on all pumping equipment</li>
          <li>15% additional pipe sizing for future demand</li>
          <li>Redundant water supply connections</li>
          <li>2.0 safety factor on hydraulic calculations</li>
        </ul>
      </div>
    </article>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M13,17H15V7H13V11H11V7H9V17H11V13H13V17Z" />
        </svg>
        Cost Analysis
      </h3>
      
      <div class="cost-analysis">
        <img src="/assets/img/projects/care-home-design/fire_service-83.png" alt="Cost Analysis Table">
        <div class="cost-notes">
          <p>The total estimated cost for the fire safety systems is £116,100, representing approximately 3.2% of the total construction cost. This investment provides comprehensive protection tailored to the specific needs of vulnerable occupants.</p>
          <ul>
            <li>Fire Alarm System: £28,000</li>
            <li>Sprinklers: £45,000</li>
            <li>Fire Dampers: £12,600</li>
            <li>Fire Doors: £22,000</li>
            <li>EVCS: £8,500</li>
          </ul>
        </div>
      </div>
    </article>
  </section>

  <!-- Implementation Section -->
  <section class="project-section implementation-section">
    <h2 class="section-header">
      <span class="section-number">06</span>
      Implementation Strategy
    </h2>
    
    <div class="implementation-grid">
      <div class="implementation-card">
        <div class="rec-icon">📅</div>
        <h3>Phased Installation</h3>
        <ol>
          <li>Phase 1: Passive protection (doors/dampers)</li>
          <li>Phase 2: Active systems (detection/suppression)</li>
          <li>Phase 3: Communication/evacuation systems</li>
        </ol>
      </div>
      
      <div class="implementation-card">
        <div class="rec-icon">👨‍🏫</div>
        <h3>Staff Training Program</h3>
        <ul>
          <li>8-hour initial training</li>
          <li>Quarterly evacuation drills</li>
          <li>Specialized training for PEEPs</li>
        </ul>
      </div>
      
      <div class="implementation-card">
        <div class="rec-icon">📋</div>
        <h3>Documentation</h3>
        <ul>
          <li>Maintain full O&M manuals</li>
          <li>Digital twin for facility management</li>
          <li>Cloud-based monitoring system</li>
        </ul>
      </div>
    </div>
    
    <div class="bim-integration">
      <h3 class="subsection-header">BIM Integration</h3>
      <p>The design includes a comprehensive BIM package with 16 system schematics (FS0001-FS0016) covering all aspects of the fire safety systems. This digital documentation facilitates ongoing maintenance and future upgrades.</p>
      <div class="bim-images">
        <img src="/assets/img/projects/care-home-design/fire_service-8.png" alt="First Floor Devices Plan">
        <img src="/assets/img/projects/care-home-design/fire_service-9.png" alt="Ground Floor Devices Plan">
      </div>
    </div>
  </section>

  <!-- Project Reflection Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">07</span>
      Project Reflection
    </h2>
    
    <div class="reflection-content">
      <div class="reflection-text">
        <p>This fire safety system design represents a comprehensive, code-compliant solution that prioritizes life safety while addressing the unique challenges of care home environments. The multi-layered approach ensures redundancy in protection systems, and the focus on early detection/alarm provides maximum evacuation time for vulnerable residents.</p>
        
        <div class="skill-development">
          <h3>Key Design Achievements</h3>
          <div class="achievements-grid">
            <div class="achievement-item">
              <img src="/assets/img/projects/care-home-design/fire_service-81.png" alt="Uncontrolled Fire">
              <p>Prevention of uncontrolled fire spread</p>
            </div>
            <div class="achievement-item">
              <img src="/assets/img/projects/care-home-design/fire_service-82.png" alt="Sprinkler Operation">
              <p>Effective automatic suppression</p>
            </div>
            <div class="achievement-item">
              <img src="/assets/img/projects/care-home-design/fire_service-39.png" alt="Door Retainers">
              <p>Silent evacuation capability</p>
            </div>
            <div class="achievement-item">
              <img src="/assets/img/projects/care-home-design/fire_service-44.png" alt="Evacuation Chair">
              <p>Assisted evacuation solutions</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="reflection-image">
        <img src="/assets/img/projects/care-home-design/fire_service-1.png" 
             alt="Automatic Fire Devices Linkage" 
             class="reflection-img"
             loading="lazy">
        <p class="image-caption">Fig 6. Automatic fire devices linkage specification</p>
      </div>
    </div>
  </section>
</div>

<style>
/* Base Styles */
:root {
  --primary-color: #e74c3c;
  --secondary-color: #2c3e50;
  --accent-color: #3498db;
  --light-gray: #ecf0f1;
  --medium-gray: #bdc3c7;
  --dark-gray: #7f8c8d;
  --text-color: #34495e;
  --white: #ffffff;
}

.fire-safety-project {
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

/* System Design Section */
.system-design {
  margin-top: 40px;
}

.system-intro {
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.7;
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

.system-icon-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
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

.spec-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 15px 0;
  padding: 0 15px;
}

.spec-image-grid img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Suppression Systems */
.suppression-details {
  margin-top: 30px;
}

.suppression-type {
  margin-bottom: 30px;
}

.suppression-type h4 {
  color: var(--secondary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.suppression-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.suppression-images img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Special Features */
.special-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.feature-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.feature-card h4 {
  padding: 15px 15px 5px;
  color: var(--secondary-color);
}

.feature-card p {
  padding: 0 15px 15px;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Passive Protection */
.passive-protection {
  margin-top: 30px;
}

.protection-type {
  margin-bottom: 40px;
}

.protection-type h4 {
  color: var(--secondary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.protection-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.protection-images img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Evacuation Section */
.evacuation-section {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  margin-top: 40px;
}

.evacuation-intro {
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 1.7;
}

.evacuation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 25px 0;
}

.evacuation-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.evacuation-card img {
  width: 100%;
  height: auto;
  display: block;
}

.evacuation-card h4 {
  padding: 15px 15px 5px;
  color: var(--secondary-color);
}

.evacuation-card p {
  padding: 0 15px 15px;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

.evacuation-details {
  margin-top: 30px;
}

.evacuation-phase {
  margin-bottom: 30px;
}

.evacuation-phase h4 {
  color: var(--secondary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.evacuation-phase ol, .evacuation-phase ul {
  padding-left: 20px;
}

.evacuation-phase li {
  margin-bottom: 8px;
}

.refuge-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.refuge-images img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Compliance Section */
.compliance-section {
  margin-top: 40px;
}

.compliance-intro {
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 1.7;
}

.compliance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.compliance-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.compliance-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.compliance-card h4 {
  padding: 15px 15px 5px;
  color: var(--secondary-color);
}

.compliance-card p {
  padding: 0 15px 15px;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

.compliance-tables {
  margin-top: 40px;
}

.table-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.table-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.table-card img {
  width: 100%;
  height: auto;
  display: block;
}

.table-card p {
  padding: 10px 15px;
  font-size: 0.85rem;
  color: var(--dark-gray);
  text-align: center;
}

/* Calculations Section */
.calculations-section {
  margin-top: 40px;
}

.calculations-intro {
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 1.7;
}

.calculation-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.calc-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 250px;
}

.calc-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.calc-image-container:hover .calc-overlay {
  transform: translateY(0);
}

.calc-image-container:hover .calc-image {
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

/* Cost Analysis */
.cost-analysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
  align-items: center;
}

.cost-analysis img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.cost-notes {
  font-size: 1.05rem;
  line-height: 1.7;
}

.cost-notes ul {
  padding-left: 20px;
  margin-top: 15px;
}

.cost-notes li {
  margin-bottom: 8px;
}

/* Implementation Section */
.implementation-section {
  margin-top: 40px;
}

.implementation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.implementation-card {
  background: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.rec-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.implementation-card h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.implementation-card ol, .implementation-card ul {
  padding-left: 20px;
}

.implementation-card li {
  margin-bottom: 8px;
}

.bim-integration {
  margin-top: 40px;
}

.bim-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.bim-images img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

/* Reflection Section */
.reflection-section {
  margin-top: 40px;
}

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

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.achievement-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.achievement-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.achievement-item p {
  font-size: 0.9rem;
  color: var(--dark-gray);
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

/* Responsive Design */
@media (max-width: 992px) {
  .reflection-content {
    grid-template-columns: 1fr;
  }
  
  .reflection-image {
    order: -1;
    margin-bottom: 30px;
  }

  .cost-analysis {
    grid-template-columns: 1fr;
    gap: 20px;
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
  
  .achievements-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .system-types-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .fire-safety-project {
    padding: 0 15px;
  }
  
  .project-title {
    font-size: 1.7rem;
  }
  
  .section-header {
    font-size: 1.4rem;
    margin: 30px 0 20px;
  }
  
  .calculation-images, .methodology-steps {
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
  
  .achievements-grid {
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

// Image zoom functionality
document.querySelectorAll('.image-wrapper, .diagram-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const img = wrapper.querySelector('img');
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.cursor = 'zoom-out';
    
    const zoomedImg = document.createElement('img');
    zoomedImg.src = img.src;
    zoomedImg.style.maxWidth = '90%';
    zoomedImg.style.maxHeight = '90%';
    zoomedImg.style.objectFit = 'contain';
    
    overlay.appendChild(zoomedImg);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});
</script>
