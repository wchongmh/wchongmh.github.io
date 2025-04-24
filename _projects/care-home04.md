---
title: "Fire Safety System Design - Residential Care Home"
category: Building Systems
description: "Comprehensive fire safety design for a Scottish residential care home, focusing on vulnerable occupants and regulatory compliance."
tech: [BS 5839-1, BS 9999, NHS Firecode, BIM Coordination, Fire Safety Engineering]
image: /assets/img/projects/care-home-design/fire_service-18.png
importance: 1
---

<div class="fire-safety-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Fire Safety System Design</h1>
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
      <p>The residential care home features a comprehensive fire safety system designed specifically for elderly and vulnerable occupants. The design integrates active detection/suppression systems with passive protection measures, all while maintaining aesthetic considerations for a care environment.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/care-home-design/fire_service-18.png" 
             alt="Care Home 3D Overview" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">3D overview of the care home facility</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/care-home-design/fire_service-21.png" 
             alt="Care Home Front View" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Front view showing building access points</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>This fire safety system design addresses the unique challenges of a residential care environment, where occupants may have mobility or sensory impairments. The solution combines advanced detection technology with specialized evacuation systems, all compliant with Scottish Building Standards and NHS Firecode requirements.</p>
  </div>

  <!-- System Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      System Overview
    </h2>
    
    <div class="project-description">
      <p>The fire safety system was designed to protect 75 resident rooms across two floors, with special consideration for elderly and vulnerable occupants. The system integrates detection, suppression, compartmentation, and evacuation components to provide comprehensive protection.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/care-home-design/fire_service-4.png" 
               alt="Fire System Overview Schematic" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Fire system overview schematic showing integration of components</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/care-home-design/fire_service-13.png" 
               alt="Automatic Suppression System" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Automatic suppression and alarm system diagram</span>
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
          <span class="spec-value">21</span>
          <span class="spec-label">Fire/Smoke Dampers</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">39</span>
          <span class="spec-label">Evacuation Chairs</span>
        </div>
      </div>
    </div>
  </section>

  <div class="project-highlights">
    <div class="highlight-card">
      <div class="highlight-icon">🏢</div>
      <div class="highlight-content">
        <span class="highlight-value">75</span>
        <span class="highlight-label">Resident Rooms</span>
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-icon">📏</div>
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

  <!-- System Design Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
      System Design Components
    </h2>
    
    <div class="system-intro">
      <p>The fire safety system was designed using a layered approach with redundant protection measures. The design prioritizes early detection, controlled suppression, and safe evacuation for vulnerable occupants.</p>
    </div>

    <article class="design-subsection detection-system">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V13H13V7H11Z" />
        </svg>
        Detection & Alarm System
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Gent Vigilon Plus Addressable System</h4>
          <ul class="system-features">
            <li>Category L1 coverage throughout the building</li>
            <li>163 multi-sensor detectors (S-Quad series) combining optical, heat, and CO detection</li>
            <li>49 manual call points with resettable elements</li>
            <li>Integrated voice evacuation and visual alarms (VADs)</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-75.png" alt="Multi-Sensor Detector" class="system-image">
            <h5>Multi-Sensor Detector</h5>
            <p>S-Quad series combining multiple detection methods</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-77.png" alt="Manual Call Point" class="system-image">
            <h5>Manual Call Point</h5>
            <p>With resettable element for easy maintenance</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-73.png" alt="Control Panel" class="system-image">
            <h5>Control Panel</h5>
            <p>Gent Vigilon Plus 1-4 Loop system</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-74.png" alt="Repeater Panel" class="system-image">
            <h5>Repeater Panel</h5>
            <p>Loop-wired for system redundancy</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Technical Specifications</h4>
        
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Detection Zones</summary>
            <div class="zone-diagram">
              <img src="/assets/img/projects/care-home-design/fire_service-59.png" alt="Detection Zones" loading="lazy">
            </div>
            <ul>
              <li>75 bedroom zones (individual room coverage)</li>
              <li>2 corridor zones (7.5m maximum detector spacing)</li>
              <li>Separate stair pressurization zones</li>
              <li>High-risk kitchen/laundry zones</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Alarm Zones</summary>
            <div class="zone-diagram">
              <img src="/assets/img/projects/care-home-design/fire_service-66.png" alt="Alarm Zones" loading="lazy">
            </div>
            <ul>
              <li>4 bedroom alarm zones</li>
              <li>2 corridor alarm zones</li>
              <li>Voice evacuation with 75dB minimum sound level</li>
              <li>Visual alarm devices (VADs) for hearing impaired</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Device Placement</summary>
            <div class="placement-diagrams">
              <img src="/assets/img/projects/care-home-design/fire_service-61.png" alt="Detector Spacing" loading="lazy">
              <img src="/assets/img/projects/care-home-design/fire_service-64.png" alt="Wall Proximity" loading="lazy">
              <img src="/assets/img/projects/care-home-design/fire_service-67.png" alt="Call Point Placement" loading="lazy">
            </div>
            <ul>
              <li>Smoke detectors: 7.5m maximum spacing in corridors</li>
              <li>Minimum 500mm from walls/obstructions</li>
              <li>Manual call points: 45m maximum travel distance</li>
              <li>Visual alarms: ceiling-mounted for maximum coverage</li>
            </ul>
          </details>
        </div>
      </div>
    </article>

    <article class="design-subsection suppression-system">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
        </svg>
        Suppression Systems
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Automatic & Manual Suppression</h4>
          <ul class="system-features">
            <li>Full sprinkler coverage per BS 9251</li>
            <li>10 fire blankets (1.2m x 1.2m) in high-risk areas</li>
            <li>28 foam extinguishers (Class A/B) at 30m spacing</li>
            <li>12 CO₂ extinguishers near electrical risks</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-89.png" alt="Sprinkler Head" class="system-image">
            <h5>Sprinkler Heads</h5>
            <p>V2708 Pendent (155°F activation)</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-79.png" alt="Foam Extinguisher" class="system-image">
            <h5>Foam Extinguisher</h5>
            <p>2L film-forming foam (Class A/B)</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-80.png" alt="CO2 Extinguisher" class="system-image">
            <h5>CO₂ Extinguisher</h5>
            <p>2kg capacity (Class E electrical risks)</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-78.png" alt="Fire Blanket" class="system-image">
            <h5>Fire Blanket</h5>
            <p>1.2m x 1.2m for kitchen areas</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Sprinkler System Details</h4>
        
        <div class="sprinkler-diagrams">
          <div class="sprinkler-diagram">
            <img src="/assets/img/projects/care-home-design/fire_service-16.png" alt="Ground Floor Sprinkler Layout" loading="lazy">
            <p>Ground floor sprinkler layout</p>
          </div>
          <div class="sprinkler-diagram">
            <img src="/assets/img/projects/care-home-design/fire_service-17.png" alt="First Floor Sprinkler Layout" loading="lazy">
            <p>First floor sprinkler layout</p>
          </div>
        </div>
        
        <div class="sprinkler-tables">
          <div class="sprinkler-table">
            <img src="/assets/img/projects/care-home-design/fire_service-90.png" alt="Sprinkler Categories" loading="lazy">
          </div>
          <div class="sprinkler-table">
            <img src="/assets/img/projects/care-home-design/fire_service-91.png" alt="Design Parameters" loading="lazy">
          </div>
          <div class="sprinkler-table">
            <img src="/assets/img/projects/care-home-design/fire_service-92.png" alt="Flow Rates" loading="lazy">
          </div>
        </div>
      </div>
    </article>
    
    <article class="design-subsection passive-protection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
        </svg>
        Passive Protection
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Compartmentation & Structural Protection</h4>
          <ul class="system-features">
            <li>21 motorized fire/smoke dampers (Advanced Air Model 2530) in HVAC ducts</li>
            <li>FD30 (30-minute) fire doors for general areas</li>
            <li>FD60 (60-minute) fire doors for high-risk areas</li>
            <li>Dorgard Pro smart door retainers for silent evacuation</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-32.png" alt="Fire Damper" class="system-image">
            <h5>Fire Damper</h5>
            <p>Model 2530 with 2-hour rating</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-37.png" alt="FD30 Door" class="system-image">
            <h5>FD30 Fire Door</h5>
            <p>White Capri (44mm thickness)</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-38.png" alt="FD60 Door" class="system-image">
            <h5>FD60 Fire Door</h5>
            <p>Plywood flush (54mm thickness)</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-40.png" alt="Door Retainer" class="system-image">
            <h5>Door Retainer</h5>
            <p>Dorgard Pro SmartSound system</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Installation Details</h4>
        
        <div class="damper-installation">
          <div class="damper-diagram">
            <img src="/assets/img/projects/care-home-design/fire_service-35.png" alt="Damper Installation Part 1" loading="lazy">
          </div>
          <div class="damper-diagram">
            <img src="/assets/img/projects/care-home-design/fire_service-36.png" alt="Damper Installation Part 2" loading="lazy">
          </div>
        </div>
        
        <div class="fire-door-specs">
          <div class="door-spec">
            <img src="/assets/img/projects/care-home-design/fire_service-2.png" alt="Fire Door Specification" loading="lazy">
          </div>
          <div class="door-spec">
            <img src="/assets/img/projects/care-home-design/fire_service-39.png" alt="Door Retainer Siting" loading="lazy">
          </div>
        </div>
      </div>
    </article>
    
    <article class="design-subsection evacuation-system">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M12,10C14,10 15,12.42 13.59,13.83C12.17,15.24 9.75,14.23 9.75,12.25C9.75,11 10.75,10 12,10Z" />
        </svg>
        Evacuation Systems
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Specialized Evacuation for Vulnerable Occupants</h4>
          <ul class="system-features">
            <li>Progressive Horizontal Evacuation (PHE) primary strategy</li>
            <li>39 evacuation chairs (Exitmaster eGO) at stair locations</li>
            <li>15 designated refuge areas with communication systems</li>
            <li>Emergency Voice Communication System (Honeywell EVCS)</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-45.png" alt="Evacuation Chair" class="system-image">
            <h5>Evacuation Chair</h5>
            <p>Exitmaster eGO with cover & mount</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-48.png" alt="Refuge Area" class="system-image">
            <h5>Refuge Area</h5>
            <p>Designed per SHTM 85 standards</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-52.png" alt="EVCS" class="system-image">
            <h5>Emergency Voice System</h5>
            <p>Honeywell EVCS network</p>
          </div>
          <div class="system-type-card">
            <img src="/assets/img/projects/care-home-design/fire_service-56.png" alt="Refuge Call Point" class="system-image">
            <h5>Refuge Call Point</h5>
            <p>Green surface type B outstation</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Evacuation Plans</h4>
        
        <div class="evacuation-plans">
          <div class="evacuation-plan">
            <img src="/assets/img/projects/care-home-design/fire_service-5.png" alt="First Floor Evacuation" loading="lazy">
            <p>First floor evacuation plan</p>
          </div>
          <div class="evacuation-plan">
            <img src="/assets/img/projects/care-home-design/fire_service-6.png" alt="Ground Floor Evacuation" loading="lazy">
            <p>Ground floor evacuation plan</p>
          </div>
        </div>
        
        <div class="evacuation-details">
          <div class="evacuation-detail">
            <img src="/assets/img/projects/care-home-design/fire_service-44.png" alt="Chair Operation" loading="lazy">
            <p>Evacuation chair working principle</p>
          </div>
          <div class="evacuation-detail">
            <img src="/assets/img/projects/care-home-design/fire_service-53.png" alt="Assist Alarm" loading="lazy">
            <p>Emergency assist alarm connection</p>
          </div>
          <div class="evacuation-detail">
            <img src="/assets/img/projects/care-home-design/fire_service-49.png" alt="Refuge Specs" loading="lazy">
            <p>Refuge area specifications</p>
          </div>
        </div>
      </div>
    </article>
  </section>

  <!-- Engineering Calculations Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Engineering Calculations
    </h2>
    
    <div class="calculations-intro">
      <p>All hydraulic and system calculations were performed in accordance with BS 9251, BS 5839-1, and NHS Scotland Firecode SHTM 85 requirements. The design accommodates the specific needs of vulnerable occupants while meeting rigorous safety standards.</p>
    </div>
    
    <!-- Design Calculations Section -->
    <article class="design-subsection calculations">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,19H20V21H4V19M7.73,12.27L9.15,13.68C10.05,12.8 11.31,12.24 12.66,12.24C15.5,12.24 17.75,14.5 17.75,17.34C17.75,18.69 17.19,19.95 16.31,20.85L17.72,22.26C19,21 19.74,19.25 19.74,17.34C19.74,13.36 16.64,10.26 12.66,10.26C10.75,10.26 9,11 7.73,12.27M12.66,4C16.64,4 19.74,7.1 19.74,11.08C19.74,12.93 19,14.68 17.72,15.93L16.31,14.5C17.19,13.62 17.75,12.36 17.75,11.08C17.75,8.25 15.5,6 12.66,6C11.39,6 10.13,6.56 9.24,7.45L7.73,5.94C9,4.68 10.75,4 12.66,4M4,9.08C4,11.93 6.25,14.17 9.09,14.17C10.44,14.17 11.7,13.61 12.6,12.73L11.19,11.32C10.31,12.2 9.05,12.76 7.7,12.76C4.86,12.76 2.61,10.5 2.61,7.67C2.61,6.32 3.17,5.06 4.05,4.16L2.64,2.75C1.39,4 0.61,5.75 0.61,7.67C0.61,11.65 3.72,14.75 7.7,14.75C9.61,14.75 11.36,14 12.63,12.72L11.12,11.21C10.24,12.09 8.98,12.65 7.7,12.65C4.86,12.65 2.61,10.39 2.61,7.57H4V9.08Z" />
        </svg>
        Hydraulic Calculations
      </h3>
      
      <div class="calculation-tabs">
        <div class="tab-buttons">
          <button class="tab-button active" data-tab="sprinkler-calc">Sprinkler System</button>
          <button class="tab-button" data-tab="pipe-calc">Pipe Sizing</button>
          <button class="tab-button" data-tab="pump-calc">Pump Selection</button>
        </div>
        
        <div class="tab-content active" id="sprinkler-calc">
          <h4>Sprinkler Hydraulic Calculations</h4>
          <div class="calc-images">
            <img src="/assets/img/projects/care-home-design/fire_service-84.png" alt="Hcalc Software" loading="lazy">
            <img src="/assets/img/projects/care-home-design/fire_service-85.png" alt="Calculation Process" loading="lazy">
          </div>
          <p>Calculations performed using Hcalc software for precise computation of friction loss in circular pipes as per the Hazen-Williams formula, aligned with EN 12845 standards.</p>
        </div>
        
        <div class="tab-content" id="pipe-calc">
          <h4>Pipe Sizing Methodology</h4>
          <div class="calc-images">
            <img src="/assets/img/projects/care-home-design/fire_service-86.png" alt="Pipe Materials" loading="lazy">
          </div>
          <ul>
            <li>Hazen-Williams C=140 for all sprinkler piping</li>
            <li>Velocity maintained between 1.5-2.5 m/s</li>
            <li>Pressure loss limited to 50 Pa/m for main lines</li>
            <li>Material selection based on corrosion resistance</li>
          </ul>
        </div>
        
        <div class="tab-content" id="pump-calc">
          <h4>Pump Selection Criteria</h4>
          <div class="calc-images">
            <img src="/assets/img/projects/care-home-design/fire_service-88.png" alt="Pump Selection" loading="lazy">
            <img src="/assets/img/projects/care-home-design/fire_service-87.png" alt="Water Tank" loading="lazy">
          </div>
          <ul>
            <li>6000L GRP sectional water tank capacity</li>
            <li>Vertical multistage stainless steel duty/standby pumps</li>
            <li>20% capacity margin on all pumping equipment</li>
            <li>Redundant backup pumps for critical systems</li>
          </ul>
        </div>
      </div>
    </article>
    
    <div class="calculation-gallery">
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-57.png" 
               alt="L1 Category" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Life Safety</span>
            <span class="calc-detail">Category L1 system design per BS 5839-1</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-58.png" 
               alt="Alarm Categories" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Alarm Categories</span>
            <span class="calc-detail">System categorization matrix</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-81.png" 
               alt="Fire Spread" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Fire Spread</span>
            <span class="calc-detail">Demonstration of uncontrolled fire spread</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-82.png" 
               alt="Sprinkler Operation" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Sprinkler Operation</span>
            <span class="calc-detail">How sprinklers control fire spread</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-68.png" 
               alt="Sound Levels" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Sound Levels</span>
            <span class="calc-detail">Minimum sound level requirements</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/care-home-design/fire_service-71.png" 
               alt="Visual Alarms" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Visual Alarms</span>
            <span class="calc-detail">Ceiling-mounted VAD specifications</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="calculation-summary">
      <h3 class="summary-title">Design Safety Factors</h3>
      <ul class="safety-factors">
        <li>20% additional water supply capacity for sprinklers</li>
        <li>15% margin on pipe sizing calculations</li>
        <li>Redundant power supplies for critical systems</li>
        <li>2.0 safety factor on structural fire ratings</li>
      </ul>
    </div>
  </section>

  <!-- Regulatory Compliance Section -->
  <section class="project-section compliance-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Regulatory Compliance
    </h2>
    
    <div class="compliance-intro">
      <p>The design meets or exceeds all relevant UK and Scottish regulations for care home fire safety, with particular attention to the needs of vulnerable occupants as required by the Equality Act 2010.</p>
    </div>
    
    <div class="compliance-grid">
      <div class="compliance-card">
        <h3>British Standards</h3>
        <ul>
          <li>BS 5839-1:2017 (Fire detection and alarm systems)</li>
          <li>BS 9251:2021 (Sprinkler systems for residential buildings)</li>
          <li>BS 9999:2017 (Fire safety in buildings)</li>
          <li>BS EN 1366-2 (Fire dampers)</li>
        </ul>
      </div>
      
      <div class="compliance-card">
        <h3>Scottish Regulations</h3>
        <ul>
          <li>Building Standards Division Non-domestic Technical Handbook (2024)</li>
          <li>NHS Scotland Firecode SHTM 85</li>
          <li>Scottish Fire and Rescue Service guidance</li>
        </ul>
      </div>
      
      <div class="compliance-card">
        <h3>Accessibility Standards</h3>
        <ul>
          <li>Equality Act 2010 requirements</li>
          <li>BS 8300-2:2018 (Design of accessible buildings)</li>
          <li>Personal Emergency Evacuation Plans (PEEPs)</li>
        </ul>
      </div>
    </div>
    
    <div class="compliance-images">
      <div class="compliance-image">
        <img src="/assets/img/projects/care-home-design/fire_service-46.png" alt="Wall Requirements" loading="lazy">
        <p>Wall category requirements per SHTM 85</p>
      </div>
      <div class="compliance-image">
        <img src="/assets/img/projects/care-home-design/fire_service-47.png" alt="Ceiling Requirements" loading="lazy">
        <p>Ceiling surface assessment per SHTM 85</p>
      </div>
    </div>
  </section>

  <!-- Cost Analysis Section -->
  <section class="project-section cost-section">
    <h2 class="section-header">
      <span class="section-number">05</span>
      Cost Analysis
    </h2>
    
    <div class="cost-intro">
      <p>The total system cost was estimated at £116,100, providing comprehensive fire protection while maintaining cost-effectiveness through careful system design and component selection.</p>
    </div>
    
    <div class="cost-table">
      <img src="/assets/img/projects/care-home-design/fire_service-83.png" alt="Cost Analysis Table" loading="lazy">
    </div>
    
    <div class="cost-breakdown">
      <div class="cost-chart">
        <canvas id="costChart"></canvas>
      </div>
      <div class="cost-notes">
        <h3>Cost Optimization</h3>
        <ul>
          <li>Phased installation to spread capital expenditure</li>
          <li>Standardized components to reduce maintenance costs</li>
          <li>Energy-efficient pumps with VFD control</li>
          <li>Lifecycle cost analysis for long-term value</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Implementation Section -->
  <section class="project-section implementation-section">
    <h2 class="section-header">
      <span class="section-number">06</span>
      Implementation Strategy
    </h2>
    
    <div class="implementation-intro">
      <p>The system will be implemented in three phases to minimize disruption to care home operations while maintaining safety throughout the installation process.</p>
    </div>
    
    <div class="implementation-steps">
      <div class="step">
        <div class="step-number">Phase 1</div>
        <div class="step-content">
          <h3>Passive Protection</h3>
          <ul>
            <li>Fire door installation</li>
            <li>Fire damper integration in HVAC</li>
            <li>Compartmentation works</li>
            <li>Structural fire protection</li>
          </ul>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">Phase 2</div>
        <div class="step-content">
          <h3>Active Systems</h3>
          <ul>
            <li>Fire detection and alarm installation</li>
            <li>Sprinkler system installation</li>
            <li>Extinguisher placement</li>
            <li>Control panel commissioning</li>
          </ul>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">Phase 3</div>
        <div class="step-content">
          <h3>Evacuation Systems</h3>
          <ul>
            <li>Emergency Voice Communication System</li>
            <li>Refuge area setup</li>
            <li>Evacuation chair installation</li>
            <li>Staff training program</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="implementation-image">
      <img src="/assets/img/projects/care-home-design/fire_service-3.png" alt="Access Control Integration" loading="lazy">
      <p>Access control door specification showing integration with fire systems</p>
    </div>
  </section>

  <!-- Maintenance Section -->
  <section class="project-section maintenance-section">
    <h2 class="section-header">
      <span class="section-number">07</span>
      Maintenance Protocol
    </h2>
    
    <div class="maintenance-intro">
      <p>A rigorous maintenance schedule ensures all fire safety systems remain operational and compliant throughout the building's lifecycle.</p>
    </div>
    
    <div class="maintenance-schedule">
      <div class="schedule-card">
        <h3>Weekly</h3>
        <ul>
          <li>Fire alarm tests</li>
          <li>Extinguisher visual inspections</li>
          <li>Door retainers operational check</li>
        </ul>
      </div>
      
      <div class="schedule-card">
        <h3>Monthly</h3>
        <ul>
          <li>Emergency lighting tests</li>
          <li>EVCS functionality checks</li>
          <li>Refuge area inspections</li>
        </ul>
      </div>
      
      <div class="schedule-card">
        <h3>Annual</h3>
        <ul>
          <li>Full system commissioning</li>
          <li>Fire damper operation tests</li>
          <li>Staff training refreshers</li>
          <li>Sprinkler system flow tests</li>
        </ul>
      </div>
    </div>
    
    <div class="maintenance-image">
      <img src="/assets/img/projects/care-home-design/fire_service-34.png" alt="Damper Control Module" loading="lazy">
      <p>Damper/fan control module with reset capability for maintenance</p>
    </div>
  </section>

  <!-- BIM Integration Section -->
  <section class="project-section bim-section">
    <h2 class="section-header">
      <span class="section-number">08</span>
      BIM Integration
    </h2>
    
    <div class="bim-intro">
      <p>The design was fully developed in BIM to coordinate with other building systems and provide accurate documentation for construction and facility management.</p>
    </div>
    
    <div class="bim-grid">
      <div class="bim-card">
        <h3>Drawing Package</h3>
        <ul>
          <li>FS0001-FS0016 system schematics</li>
          <li>Device location plans</li>
          <li>Cause-and-effect diagrams</li>
          <li>Zone plans for all floors</li>
        </ul>
      </div>
      
      <div class="bim-card">
        <h3>Coordination</h3>
        <ul>
          <li>Clash detection with MEP systems</li>
          <li>Structural integration</li>
          <li>Accessibility verification</li>
        </ul>
      </div>
      
      <div class="bim-card">
        <h3>Facility Management</h3>
        <ul>
          <li>Digital twin for maintenance</li>
          <li>Cloud-based monitoring</li>
          <li>Augmented reality overlays</li>
        </ul>
      </div>
    </div>
    
    <div class="bim-images">
      <div class="bim-image">
        <img src="/assets/img/projects/care-home-design/fire_service-7.png" alt="Fire Alarm Zone Plan" loading="lazy">
        <p>Fire alarm zone plan showing color-coded detection areas</p>
      </div>
      <div class="bim-image">
        <img src="/assets/img/projects/care-home-design/fire_service-8.png" alt="First Floor Layout" loading="lazy">
        <p>First floor fire safety devices layout plan</p>
      </div>
      <div class="bim-image">
        <img src="/assets/img/projects/care-home-design/fire_service-10.png" alt="Detection Layout" loading="lazy">
        <p>First floor detection and alarm layout plan</p>
      </div>
    </div>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section recommendations-section">
    <h2 class="section-header">
      <span class="section-number">09</span>
      Recommendations
    </h2>
    
    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">👨‍🏫</div>
        <h3>Staff Training</h3>
        <ul>
          <li>8-hour initial fire safety training</li>
          <li>Quarterly evacuation drills</li>
          <li>Specialized training for PEEPs</li>
          <li>Annual refresher courses</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🔄</div>
        <h3>System Upgrades</h3>
        <ul>
          <li>Wireless device integration</li>
          <li>Cloud-based monitoring</li>
          <li>Smart diagnostics</li>
          <li>Energy-efficient components</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">📊</div>
        <h3>Documentation</h3>
        <ul>
          <li>Maintain full O&M manuals</li>
          <li>Digital asset management</li>
          <li>Regular compliance audits</li>
          <li>Incident reporting system</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Project Reflection Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">10</span>
      Project Reflection
    </h2>
    
    <div class="reflection-content">
      <div class="reflection-text">
        <p>This fire safety design for a residential care home represents a comprehensive approach to protecting vulnerable occupants while meeting rigorous regulatory requirements. The solution balances advanced technology with practical considerations for the care environment.</p>
        
        <div class="skill-development">
          <h3>Key Design Considerations</h3>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Occupant Safety</h4>
              <ul>
                <li>Early detection for maximum evacuation time</li>
                <li>Specialized evacuation systems</li>
                <li>Accessible alarm interfaces</li>
              </ul>
            </div>
            <div class="skill-category">
              <h4>System Reliability</h4>
              <ul>
                <li>Redundant components</li>
                <li>Fail-safe operation</li>
                <li>Comprehensive maintenance protocol</li>
              </ul>
            </div>
            <div class="skill-category">
              <h4>Future Flexibility</h4>
              <ul>
                <li>Modular system design</li>
                <li>Upgrade pathways</li>
                <li>Technology integration</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="project-outcome">
          <h3>Design Outcome</h3>
          <p>The completed design provides a robust, code-compliant fire safety solution that specifically addresses the needs of care home residents. The multi-layered approach ensures redundancy in protection systems while maintaining a comfortable living environment.</p>
        </div>
      </div>
      
      <div class="reflection-image">
        <img src="/assets/img/projects/care-home-design/fire_service-15.png" 
             alt="Section View Demonstration" 
             class="reflection-img"
             loading="lazy">
        <p class="image-caption">Front section view demonstrating device placement in bedrooms and corridors</p>
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
.image-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 25px 0;
}

.image-card {
  background: var(--white);
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

.image-meta {
  padding: 15px;
  background: var(--white);
}

.image-fig {
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 8px;
}

.image-desc {
  color: var(--dark-gray);
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

/* System Design Components */
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

.system-image {
  max-width: 100%;
  height: auto;
  max-height: 150px;
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

.zone-diagram, .placement-diagrams {
  padding: 15px;
  text-align: center;
}

.zone-diagram img, .placement-diagrams img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.placement-diagrams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

/* Sprinkler System */
.sprinkler-diagrams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.sprinkler-diagram {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  text-align: center;
}

.sprinkler-diagram img {
  max-width: 100%;
  height: auto;
}

.sprinkler-tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.sprinkler-table {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.sprinkler-table img {
  max-width: 100%;
  height: auto;
}

/* Damper Installation */
.damper-installation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.damper-diagram {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.damper-diagram img {
  max-width: 100%;
  height: auto;
}

.fire-door-specs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.door-spec {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.door-spec img {
  max-width: 100%;
  height: auto;
}

/* Evacuation Plans */
.evacuation-plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.evacuation-plan {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  text-align: center;
}

.evacuation-plan img {
  max-width: 100%;
  height: auto;
}

.evacuation-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.evacuation-detail {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  text-align: center;
}

.evacuation-detail img {
  max-width: 100%;
  height: auto;
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

.calc-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.calc-images img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
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

/* Compliance Section */
.compliance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.compliance-card {
  background: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.compliance-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.compliance-card ul {
  padding-left: 20px;
}

.compliance-card li {
  margin-bottom: 8px;
}

.compliance-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.compliance-image {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  text-align: center;
}

.compliance-image img {
  max-width: 100%;
  height: auto;
}

.compliance-image p {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Cost Analysis */
.cost-table {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  margin: 20px 0;
  text-align: center;
}

.cost-table img {
  max-width: 100%;
  height: auto;
}

.cost-breakdown {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
}

.cost-chart {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  height: 300px;
}

.cost-notes {
  background: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
}

.cost-notes h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.cost-notes ul {
  padding-left: 20px;
}

.cost-notes li {
  margin-bottom: 8px;
}

/* Implementation Section */
.implementation-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.step {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.step-number {
  background: var(--primary-color);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.step-content h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.step-content ul {
  padding-left: 20px;
}

.step-content li {
  margin-bottom: 8px;
}

.implementation-image {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  margin-top: 30px;
  text-align: center;
}

.implementation-image img {
  max-width: 100%;
  height: auto;
}

.implementation-image p {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* Maintenance Section */
.maintenance-schedule {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.schedule-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.schedule-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.schedule-card ul {
  padding-left: 20px;
}

.schedule-card li {
  margin-bottom: 8px;
}

.maintenance-image {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  margin-top: 30px;
  text-align: center;
}

.maintenance-image img {
  max-width: 100%;
  height: auto;
}

.maintenance-image p {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
}

/* BIM Section */
.bim-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.bim-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.bim-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.bim-card ul {
  padding-left: 20px;
}

.bim-card li {
  margin-bottom: 8px;
}

.bim-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.bim-image {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  text-align: center;
}

.bim-image img {
  max-width: 100%;
  height: auto;
}

.bim-image p {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--dark-gray);
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
  
  .cost-breakdown {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .project-title {
    font-size: 1.9rem;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .image-comparison {
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
  
  .calculation-gallery {
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
  
  .bim-images {
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

// Chart.js for cost breakdown
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('costChart').getContext('2d');
  const costChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Fire Alarm System', 'Sprinklers', 'Fire Dampers', 'Fire Doors', 'EVCS'],
      datasets: [{
        data: [28000, 45000, 12600, 22000, 8500],
        backgroundColor: [
          '#e74c3c',
          '#3498db',
          '#2ecc71',
          '#f39c12',
          '#9b59b6'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              label += '£' + context.raw.toLocaleString();
              return label;
            }
          }
        }
      }
    }
  });
});
</script>
