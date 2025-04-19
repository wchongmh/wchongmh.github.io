---
title: "Glasgow Office Building - Hevacomp Design Report"
category: Smart Building
description: "Comprehensive HVAC design for a 2-story office building in Glasgow using Hevacomp software, including heating, ventilation and boiler systems."
tech: [Hevacomp, HVAC Design, Thermal Analysis, BS EN 12845, U-value Calculations, Building Regulations]
image: /assets/img/projects/glasgow-office/hevacomp-0.png
importance: 1
---

<div class="hevacomp-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Glasgow Office Building</h1>
    <p class="project-subtitle">Hevacomp Design & Energy Analysis Report</p>
    <div class="project-meta">
      <span class="badge">Building Services Engineering</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <div class="project-visualization">
    <div class="visualization-description">
      <p>The Glasgow Office Building project features a modern two-story design with integrated HVAC systems carefully analyzed using Hevacomp software. The design includes radiators connected to a boiler, supply and extract ducts for ventilation, and comprehensive energy performance analysis.</p>
    </div>
    <div class="visualization-images">
      <div class="visualization-card">
        <img src="/assets/img/projects/glasgow-office/hevacomp-2.png" 
             alt="Ground Floor Plan" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">Ground floor plan</p>
      </div>
      <div class="visualization-card">
        <img src="/assets/img/projects/glasgow-office/hevacomp-3.png" 
             alt="First Floor Plan" 
             class="visualization-img"
             loading="lazy">
        <p class="visualization-caption">First floor plan</p>
      </div>
    </div>
  </div>
  
  <div class="project-context">
    <p>The Glasgow Office Building represents a typical two-story office structure in Scotland, designed to accommodate standard office functions across 11 rooms per floor (22 rooms total). This HVAC system design addresses the unique challenges of office building requirements while ensuring energy efficiency and maintenance accessibility.</p>
  </div>

  <!-- Introduction Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">1</span>
      Introduction
    </h2>
    
    <div class="project-description">
      <p>The analysis of this two-story building focuses on energy performance using the Hevacomp software program, which is crucial for building energy analysis and design. The building's systems consist of radiators connected to a boiler, supply and extract ducts for ventilation. We used Hevacomp to examine the building's energy performance, including modeling various scenarios, evaluating HVAC systems, and identifying opportunities for energy efficiency improvements.</p>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/glasgow-office/hevacomp-1.png" 
               alt="Hevacomp Software Interface" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Hevacomp design software user interface</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/glasgow-office/hevacomp-4.png" 
               alt="Building 3D View" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Overall 3D view of the 2-storey building</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Building Geometry Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">2</span>
      Building Geometry & Model Information
    </h2>
    
    <div class="system-intro">
      <p>The building in Glasgow, Scotland consists of a ground floor and first floor. The structure is two stories high with structural faces aligned to north-south and east-west directions. The larger building surfaces face north and south. The building is primarily used for standard office purposes and contains 11 rooms per floor (22 total).</p>
    </div>

    <div class="key-specs">
      <h3 class="specs-title">Key Building Specifications</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">2</span>
          <span class="spec-label">Floors</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">22</span>
          <span class="spec-label">Total Rooms</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">15m</span>
          <span class="spec-label">Height</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">4m</span>
          <span class="spec-label">Floor to Ceiling</span>
        </div>
      </div>
    </div>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Window Specifications
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <p>Each room has at least one window on an external wall. Rooms numbered 0-4 and 1-4 have two windows each, while rooms numbered 0-11 and 1-11 serve as corridors without windows. The building has 11 windows per floor (22 total). The north and south vertical surfaces have about 50% glazing, with window height of 1.5m and 1m from base to window sill.</p>
        </div>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-6.png" 
                   alt="Double Glazed Window Details" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 3.</span>
              <span class="image-desc">Details of double glazed type 6 windows</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-8.png" 
                   alt="Window U-values Table" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 4.</span>
              <span class="image-desc">Default U-values for windows (Table 6e)</span>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
        </svg>
        Wall Specifications
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <p>The wall design criteria include thermal insulation, thermal bridging, and air tightness. Thermal insulation is crucial for reducing heat loss through walls. The U-value of the wall is 0.27 W/m²K (slightly above the standard of 0.23 W/m²K). Air tightness is critical for reducing heat loss through walls.</p>
        </div>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-9.png" 
                   alt="New Wall Details" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 5.</span>
              <span class="image-desc">Details of 'New Wall' type</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-11.png" 
                   alt="Wall U-values Table" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 6.</span>
              <span class="image-desc">Default U-values for walls (Section 6.2.4)</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <!-- Building Fabric Section -->
  <section class="project-section calculations-section">
    <h2 class="section-header">
      <span class="section-number">3</span>
      Building Fabric Analysis
    </h2>
    
    <div class="calculations-intro">
      <p>The building fabric plays a crucial role in the energy performance. In Scotland, regulations pertain to walls, windows, and airtightness. The amount of heat lost through walls, roof, and floors depends on U-values. Better insulation and less heat loss are indicated by lower U-values.</p>
    </div>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Air Tightness
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <p>Reducing the air infiltration rate to 0.3 air changes per hour (ACH) improves energy efficiency and indoor air quality. Air infiltration occurs when air unintentionally enters/leaves through openings. The 0.3 ACH rate represents how many times the total air volume inside is replaced in an hour.</p>
        </div>
        
        <div class="image-card">
          <div class="image-wrapper">
            <img src="/assets/img/projects/glasgow-office/hevacomp-5.png" 
                 alt="Air Change Rates Table" 
                 class="project-image"
                 loading="lazy">
            <div class="image-overlay">
              <span class="zoom-icon">🔍</span>
            </div>
          </div>
          <div class="image-meta">
            <span class="image-fig">Fig 7.</span>
            <span class="image-desc">Table of typical air change rates for unheated spaces</span>
          </div>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
        </svg>
        U-value Calculations
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <p>Accurate input data is vital for U-value calculations in HEVACOMP. Dimensions, components, and glazing are all part of the design structure. Thermal bridging caused by conductive materials can lead to higher U-values and heat loss.</p>
        </div>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-7.png" 
                   alt="U-value Calculation Method" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 8.</span>
              <span class="image-desc">U-value calculation method for windows</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-10.png" 
                   alt="U-value Regulations" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 9.</span>
              <span class="image-desc">U-value regulations and standards</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <!-- Heat Loss Analysis Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">4</span>
      Heat Loss Analysis
    </h2>
    
    <div class="methodology-intro">
      <p>The schedule for the building takes into account occupancy and building use. Heat losses are calculated based on U-values of building fabric, area, and temperature difference between inside and outside. The schedule provides comfortable indoor temperatures while minimizing energy consumption.</p>
    </div>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M7,7H9V9H7V7M11,7H13V9H11V7M15,7H17V9H15V7M7,11H9V13H7V11M11,11H13V13H11V11M15,11H17V13H15V11M7,15H9V17H7V15M11,15H13V17H11V15M15,15H17V17H15V15Z" />
        </svg>
        Heat Loss Distribution
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <p>The total heat loss for the building is 35,144W. The pie chart shows that the largest proportion of heat losses is due to infiltration (38%), followed by glazing (28%). These two factors combined make up more than half of the heat loss in the building.</p>
        </div>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-12.png" 
                   alt="Heat Loss Pie Chart" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 10.</span>
              <span class="image-desc">Heat loss distribution pie chart</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-13.png" 
                   alt="Heat Loss Summary" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 11.</span>
              <span class="image-desc">Summary of heat losses for each room</span>
            </div>
          </div>
        </div>
      </div>

      <div class="image-comparison">
        <div class="image-card">
          <div class="image-wrapper">
            <img src="/assets/img/projects/glasgow-office/hevacomp-14.png" 
                 alt="Heat Loss Requirements" 
                 class="project-image"
                 loading="lazy">
            <div class="image-overlay">
              <span class="zoom-icon">🔍</span>
            </div>
          </div>
          <div class="image-meta">
            <span class="image-fig">Fig 12.</span>
            <span class="image-desc">Heat loss requirements and regulations</span>
          </div>
        </div>
        
        <div class="image-card">
          <div class="image-wrapper">
            <img src="/assets/img/projects/glasgow-office/hevacomp-15.png" 
                 alt="System Performance Definitions" 
                 class="project-image"
                 loading="lazy">
            <div class="image-overlay">
              <span class="zoom-icon">🔍</span>
            </div>
          </div>
          <div class="image-meta">
            <span class="image-fig">Fig 13.</span>
            <span class="image-desc">System performance definitions</span>
          </div>
        </div>
      </div>
    </article>

    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Room Heat Loss Examples
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <p>Room 0-1 on ground floor has total heat losses of 2,017W with 1 radiator installed. Room 1-4 on first floor has total heat losses of 6,448W with 2 radiators installed. The difference is due to occupancy requirements between rooms.</p>
        </div>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-16.png" 
                   alt="Room 0-1 Heat Loss" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 14.</span>
              <span class="image-desc">Heat losses data for room 0-1 (ground floor)</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-17.png" 
                   alt="Room 1-4 Heat Loss" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 15.</span>
              <span class="image-desc">Heat losses data for room 1-4 (first floor)</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <!-- Radiator System Section -->
  <section class="project-section supplementary-section">
    <h2 class="section-header">
      <span class="section-number">5</span>
      Radiator System Design
    </h2>
    
    <div class="system-intro">
      <p>Based on calculated heat losses for each room, HEVACOMP determines the heat output needed for radiators. The CARADON STELRAD Elite K2 radiator (not bigger than 3kW each) was selected for this project.</p>
    </div>

    <div class="supplementary-grid">
      <div class="supplementary-card">
        <h3 class="supplementary-title">Radiator Specifications</h3>
        <div class="supplementary-image">
          <img src="/assets/img/projects/glasgow-office/hevacomp-18.png" 
               alt="Radiator Type Data" 
               class="supplementary-img"
               loading="lazy">
        </div>
        <div class="supplementary-content">
          <p>The CARADON STELRAD Elite K2 radiator features:</p>
          <ul>
            <li>Compliance with BS EN 442 European Standard</li>
            <li>Maximum operating pressure of 116 psi (8 bar)</li>
            <li>Compact size with integrated safety features</li>
            <li>Compatible with various heating systems</li>
          </ul>
        </div>
      </div>
      
      <div class="supplementary-card">
        <h3 class="supplementary-title">Radiator Details</h3>
        <div class="supplementary-image">
          <img src="/assets/img/projects/glasgow-office/hevacomp-19.png" 
               alt="Radiator Photos" 
               class="supplementary-img"
               loading="lazy">
        </div>
        <div class="supplementary-content">
          <p>Additional radiator specifications:</p>
          <ul>
            <li>High efficiency condensing gas boiler</li>
            <li>Advanced combustion management system</li>
            <li>Stainless steel heat exchanger</li>
            <li>Modulating fan for optimal efficiency</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/glasgow-office/hevacomp-20.png" 
               alt="Radiator Data" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 16.</span>
          <span class="image-desc">CARADON STELRAD Elite K2 radiator data</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/glasgow-office/hevacomp-22.png" 
               alt="Radiator Catalogue" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 17.</span>
          <span class="image-desc">Product catalogue (Δt50 UK standard)</span>
        </div>
      </div>
    </div>

    <div class="image-card full-width">
      <div class="image-wrapper">
        <img src="/assets/img/projects/glasgow-office/hevacomp-23.png" 
             alt="EN 442 Certification" 
             class="project-image"
             loading="lazy">
        <div class="image-overlay">
          <span class="zoom-icon">🔍</span>
        </div>
      </div>
      <div class="image-meta">
        <span class="image-fig">Fig 18.</span>
        <span class="image-desc">EN 442 Certification Data by CETIAT</span>
      </div>
    </div>
  </section>

  <!-- Heating System Design Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">6</span>
      Heating System Design
    </h2>
    
    <div class="reflection-content">
      <div class="reflection-text">
        <p>The building's heating system is designed to produce enough heat to satisfy the heating demand. The design considers climate, building orientation, insulation, and occupant requirements. The heating load calculation accounts for heat loss through walls, roofs, windows, and internal heat gains.</p>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-24.png" 
                   alt="Radiator Layout" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 19.</span>
              <span class="image-desc">Radiator layout on ground floor</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-25.png" 
                   alt="LTHW System" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 20.</span>
              <span class="image-desc">Isometric view of LTHW heating system</span>
            </div>
          </div>
        </div>

        <h3 class="subsection-header">Low Temperature Hot Water (LTHW) System</h3>
        <p>LTHW heating systems must adhere to the Boiler Efficiency Directive (BED) which establishes minimum 92% efficiency requirements for boilers installed in the UK. The system design considers heating load distribution and heat loss through walls, floors, and windows.</p>

        <div class="image-card">
          <div class="image-wrapper">
            <img src="/assets/img/projects/glasgow-office/hevacomp-26.png" 
                 alt="Boiler Arrangement" 
                 class="project-image"
                 loading="lazy">
            <div class="image-overlay">
              <span class="zoom-icon">🔍</span>
            </div>
          </div>
          <div class="image-meta">
            <span class="image-fig">Fig 21.</span>
            <span class="image-desc">Boiler arrangement (Flow 75°C, Return 65°C)</span>
          </div>
        </div>

        <h3 class="subsection-header">Boiler System Data</h3>
        <p>The heating system components were carefully sized to meet building requirements while maintaining energy efficiency.</p>

        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-27.png" 
                   alt="Heating Pipe System" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 22.</span>
              <span class="image-desc">Heating pipe system data</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-28.png" 
                   alt="Heating Pump Data" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 23.</span>
              <span class="image-desc">Heating pump data</span>
            </div>
          </div>
        </div>

        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-29.png" 
                   alt="Pipework Quantities" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 24.</span>
              <span class="image-desc">Pipework quantities for boiler system</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-30.png" 
                   alt="Data Input" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 25.</span>
              <span class="image-desc">Data input for boiler heating system</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Ventilation System Design Section -->
  <section class="project-section recommendations-section">
    <h2 class="section-header">
      <span class="section-number">7</span>
      Ventilation System Design
    </h2>
    
    <div class="system-intro">
      <p>The ventilation system is designed to provide sufficient fresh air while minimizing energy consumption. The required ventilation rate is based on ASHRAE 62.1 and CIBSE Guide A recommendations of 12 l/s/person for offices.</p>
    </div>

    <div class="image-card full-width">
      <div class="image-wrapper">
        <img src="/assets/img/projects/glasgow-office/hevacomp-31.png" 
             alt="Ventilation Rates" 
             class="project-image"
             loading="lazy">
        <div class="image-overlay">
          <span class="zoom-icon">🔍</span>
        </div>
      </div>
      <div class="image-meta">
        <span class="image-fig">Fig 26.</span>
        <span class="image-desc">Minimum ventilation rates in breathing zone</span>
      </div>
    </div>

    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/glasgow-office/hevacomp-32.png" 
               alt="Airflow Calculation" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 27.</span>
          <span class="image-desc">Airflow rate calculation for each space</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/glasgow-office/hevacomp-33.png" 
               alt="Mechanical Ventilation" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 28.</span>
          <span class="image-desc">Mechanical ventilation regulations</span>
        </div>
      </div>
    </div>

    <div class="image-card full-width">
      <div class="image-wrapper">
        <img src="/assets/img/projects/glasgow-office/hevacomp-35.png" 
             alt="Ventilation System Plan" 
             class="project-image"
             loading="lazy">
        <div class="image-overlay">
          <span class="zoom-icon">🔍</span>
        </div>
      </div>
      <div class="image-meta">
        <span class="image-fig">Fig 29.</span>
        <span class="image-desc">Overall ventilation system plan (supply and extract)</span>
      </div>
    </div>

    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">💨</div>
        <h3>Supply Ventilation System</h3>
        <p>The occupied spaces are supplied with fresh external air through supply ventilation systems. The system was designed to reduce pressure drops and ensure even distribution throughout the building.</p>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-36.png" 
                   alt="Supply Ductwork" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 30.</span>
              <span class="image-desc">Isometric view of supply ductwork</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-37.png" 
                   alt="Supply Duct Sizing" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 31.</span>
              <span class="image-desc">Supply duct sizing data</span>
            </div>
          </div>
        </div>

        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-38.png" 
                   alt="Index Running Value" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 32.</span>
              <span class="image-desc">Index running value for supply system</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-39.png" 
                   alt="Damper Losses" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 33.</span>
              <span class="image-desc">Supply duct damper losses data</span>
            </div>
          </div>
        </div>

        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-40.png" 
                   alt="Ductwork Quantities" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 34.</span>
              <span class="image-desc">Supply system ductwork quantities</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-41.png" 
                   alt="Data Input" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 35.</span>
              <span class="image-desc">Supply duct sizing input values</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🌀</div>
        <h3>Extract Ventilation System</h3>
        <p>The extract system removes stale air from the building. Extract points are placed where pollutants are produced. The ductwork prevents recirculation or contamination of supply air.</p>
        
        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-42.png" 
                   alt="Extract Ductwork" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 36.</span>
              <span class="image-desc">Isometric view of extract ductwork</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-43.png" 
                   alt="Extract Duct Sizing" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 37.</span>
              <span class="image-desc">Extract duct sizing data</span>
            </div>
          </div>
        </div>

        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-44.png" 
                   alt="Extract Duct Data" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 38.</span>
              <span class="image-desc">Additional extract duct sizing data</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-45.png" 
                   alt="Index Running Value" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 39.</span>
              <span class="image-desc">Index running value for extract system</span>
            </div>
          </div>
        </div>

        <div class="image-comparison">
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-46.png" 
                   alt="Ductwork Quantities" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 40.</span>
              <span class="image-desc">Extract system ductwork quantities</span>
            </div>
          </div>
          
          <div class="image-card">
            <div class="image-wrapper">
              <img src="/assets/img/projects/glasgow-office/hevacomp-47.png" 
                   alt="Data Input" 
                   class="project-image"
                   loading="lazy">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
            <div class="image-meta">
              <span class="image-fig">Fig 41.</span>
              <span class="image-desc">Supply duct sizing for extract system</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Boiler Sizing Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">8</span>
      Boiler Sizing
    </h2>
    
    <div class="system-intro">
      <p>The boiler needs to be sized to accommodate the building's peak heating requirements. The calculation considers heat loss coefficient, building materials, and window types. An undersized boiler won't produce enough heat, while an oversized one could result in inefficiencies.</p>
    </div>

    <div class="key-specs">
      <h3 class="specs-title">Boiler Sizing Calculations</h3>
      <div class="specs-grid">
        <div class="spec-item">
          <span class="spec-value">40,228W</span>
          <span class="spec-label">LTHW Demand</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">27,918W</span>
          <span class="spec-label">Preheat Demand</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">68,146W</span>
          <span class="spec-label">Total Demand</span>
        </div>
        <div class="spec-item">
          <span class="spec-value">75,718W</span>
          <span class="spec-label">Boiler Size (90% eff.)</span>
        </div>
      </div>
    </div>

    <div class="methodology-conclusion">
      <h3 class="conclusion-title">Boiler Selection</h3>
      <p>Based on the analysis, the CARADON STELRAD Elite K2 boiler was selected with a size of 75.7kW to account for 90% efficiency. This ensures the boiler can meet both the LTHW and preheating supply air demands of the building.</p>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">9</span>
      Conclusion
    </h2>
    
    <div class="project-description">
      <p>The two-story building's energy efficiency could be improved, according to the Hevacomp analysis. While the boiler and radiator sizing were suitable, the supply and extract ducts needed adjustment. The building's heating losses were higher than expected, leading to increased energy consumption.</p>
      
      <p>Recommendations for improvement include:</p>
      <ul>
        <li>Installing thermostatic radiator valves (TRVs) for better control</li>
        <li>Expanding supply and extract duct sizes</li>
        <li>Improving insulation in walls, roof, and floors</li>
        <li>Sealing building envelope gaps</li>
        <li>Upgrading to more energy-efficient windows and doors</li>
        <li>Implementing a heat recovery ventilation system</li>
      </ul>
      
      <p>These changes would significantly reduce heating losses, resulting in energy savings and cost effectiveness while maintaining indoor air quality.</p>
    </div>
  </section>

  <!-- References Section -->
  <section class="project-section">
    <h2 class="section-header">
      <span class="section-number">10</span>
      References
    </h2>
    
    <div class="references-list">
      <ol>
        <li>The Government's Standard Assessment Procedure for Energy Rating of Dwellings (2012 edition)</li>
        <li>Building standards technical handbook 2022: non-domestic (1 June 2022)</li>
        <li>The CARADON STELRAD Elite K2 Boiler Product website</li>
        <li>The product catalogue of CARADON STELRAD Elite K2 Boiler</li>
        <li>ASHRAE Standard 62.1 - Guideline for Ventilation for Acceptable Indoor Air Quality</li>
        <li>About the Boiler Efficiency Directive (92/42/EEC)</li>
        <li>Ventilation: Approved Document F Building regulation in England for the ventilation requirements</li>
        <li>The Energy Performance of Buildings (Scotland) Regulations 2008</li>
        <li>National Calculation Methodology (NCM) Modelling Guide for Non-Domestic Buildings in Scotland 2015</li>
      </ol>
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

.hevacomp-project {
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

.full-width {
  grid-column: 1 / -1;
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

/* Supplementary Grid */
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
  grid-template-columns: 1fr;
  gap: 30px;
}

.reflection-text {
  display: flex;
  flex-direction: column;
  gap: 25px;
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

.references-list ol {
  padding-left: 20px;
}

.references-list li {
  margin-bottom: 10px;
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
}

@media (max-width: 576px) {
  .hevacomp-project {
    padding: 0 15px;
  }
  
  .project-title {
    font-size: 1.7rem;
  }
  
  .section-header {
    font-size: 1.4rem;
    margin: 30px 0 20px;
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
