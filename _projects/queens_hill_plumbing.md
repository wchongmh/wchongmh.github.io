---
title: "Public Housing Plumbing Systems - Queen's Hill Development"
category: Building Systems
description: "Comprehensive plumbing design for 3,120-unit HK housing project, including hydraulic calculations and system schematics."
tech: [AutoCAD MEP, Hydraulic Calculations, BS EN 12845, Pump Sizing, BIM Coordination]
image: /assets/img/projects/plumbing_design-1.jpg
importance: 1
---

<div class="plumbing-project">

  <!-- Enhanced Project Header -->
  <header class="project-header">
    <h1 class="project-title">Plumbing Services Design Analysis</h1>
    <p class="project-subtitle">Queen's Hill Housing Development</p>
    
    <div class="project-context">
      <p>This report summarizes the plumbing services design for the Queen's Hill public housing development in Hong Kong, consisting of 3 residential blocks (32-40 stories) containing 3,120 total flats with integrated retail facilities, kindergartens, welfare facilities, and parking structures.</p>
    </div>
    
    <div class="project-highlights">
      <div class="highlight-card">
        <div class="highlight-icon">🏗️</div>
        <div class="highlight-content">
          <span class="highlight-value">3,120</span>
          <span class="highlight-label">Residential Units</span>
        </div>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">🏢</div>
        <div class="highlight-content">
          <span class="highlight-value">3</span>
          <span class="highlight-label">Residential Blocks</span>
        </div>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">📏</div>
        <div class="highlight-content">
          <span class="highlight-value">40</span>
          <span class="highlight-label">Maximum Floors</span>
        </div>
      </div>
    </div>
    
    <div class="project-meta">
      <span class="badge">Building Systems</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Detailed Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Project Overview
    </h2>
    
    <div class="facilities-overview">
      <h3 class="subsection-header">Development Components</h3>
      <div class="facilities-grid">
        <div class="facility-item">
          <span class="facility-icon">🏠</span>
          <span class="facility-name">Residential Towers</span>
          <span class="facility-detail">3 blocks (32-40 stories)</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">🛒</span>
          <span class="facility-name">Retail Facilities</span>
          <span class="facility-detail">Ground floor commercial</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">🏫</span>
          <span class="facility-name">Kindergartens</span>
          <span class="facility-detail">2 facilities</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">🏥</span>
          <span class="facility-name">Welfare Facilities</span>
          <span class="facility-detail">Community services</span>
        </div>
        <div class="facility-item">
          <span class="facility-icon">🚗</span>
          <span class="facility-name">Parking</span>
          <span class="facility-detail">Underground & podium</span>
        </div>
      </div>
    </div>
    
    <div class="image-comparison">
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/plumbing_design-1.jpg" 
               alt="Queen's Hill Development Overview" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 1.</span>
          <span class="image-desc">Site aerial view showing all three residential towers and ancillary facilities</span>
        </div>
      </div>
      
      <div class="image-card">
        <div class="image-wrapper">
          <img src="/assets/img/projects/plumbing_design-4.jpg" 
               alt="Site Location Plan" 
               class="project-image"
               loading="lazy">
          <div class="image-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
        <div class="image-meta">
          <span class="image-fig">Fig 2.</span>
          <span class="image-desc">Location plan highlighting water main connections and elevation differentials</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced System Design Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
      Key Design Components
    </h2>
    
    <article class="design-subsection water-supply-system">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
        </svg>
        Water Supply Systems
      </h3>
      
      <div class="system-details">
        <div class="system-type">
          <h4>Indirect Plumbing System</h4>
          <ul class="system-features">
            <li>Underground transfer tanks pump water to rooftop storage tanks</li>
            <li>Gravity feed distribution to lower floors</li>
            <li>Pressure reducing valves (PRVs) for high-pressure zones</li>
            <li>Dedicated booster pumps for top floors</li>
          </ul>
        </div>
        
        <div class="system-types-grid">
          <div class="system-type-card">
            <div class="system-icon">💧</div>
            <h5>Fresh Water</h5>
            <p>Potable water supply for all residential units</p>
          </div>
          <div class="system-type-card">
            <div class="system-icon">🌊</div>
            <h5>Flush Water</h5>
            <p>Saltwater system for toilet flushing</p>
          </div>
          <div class="system-type-card">
            <div class="system-icon">🌱</div>
            <h5>Irrigation</h5>
            <p>Landscape watering system</p>
          </div>
          <div class="system-type-card">
            <div class="system-icon">🧹</div>
            <h5>Floor Washing</h5>
            <p>Dedicated cleaning supply</p>
          </div>
        </div>
      </div>
      
      <div class="technical-specs">
        <h4 class="specs-title">Technical Specifications</h4>
        
        <div class="specs-accordion">
          <details class="spec-group">
            <summary>Piping Systems</summary>
            <ul>
              <li>Surface-mounted for maintenance access</li>
              <li>Materials: Ductile iron (primary), copper, UPVC</li>
              <li>Strict avoidance of crossovers between fresh/flush water lines</li>
              <li>Color-coded insulation for easy identification</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Storage Tanks</summary>
            <ul>
              <li>Twin tank system for uninterrupted supply during cleaning</li>
              <li>Total capacities: 104,000L fresh water, 34,000L flush water per block</li>
              <li>Separate irrigation tanks (1,000L each)</li>
              <li>Stainless steel construction with overflow protection</li>
            </ul>
          </details>
          
          <details class="spec-group">
            <summary>Pumping Systems</summary>
            <ul>
              <li>Upfeed pumps: 34-37L/s capacity, 110-144m head</li>
              <li>Booster pumps: 7.6-8.8L/s capacity, 26m head</li>
              <li>Variable speed drives for energy efficiency</li>
              <li>Redundant backup pumps for critical systems</li>
            </ul>
          </details>
        </div>
      </div>
    </article>
    
    <!-- Design Calculations Section -->
    <article class="design-subsection calculations">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,19H20V21H4V19M7.73,12.27L9.15,13.68C10.05,12.8 11.31,12.24 12.66,12.24C15.5,12.24 17.75,14.5 17.75,17.34C17.75,18.69 17.19,19.95 16.31,20.85L17.72,22.26C19,21 19.74,19.25 19.74,17.34C19.74,13.36 16.64,10.26 12.66,10.26C10.75,10.26 9,11 7.73,12.27M12.66,4C16.64,4 19.74,7.1 19.74,11.08C19.74,12.93 19,14.68 17.72,15.93L16.31,14.5C17.19,13.62 17.75,12.36 17.75,11.08C17.75,8.25 15.5,6 12.66,6C11.39,6 10.13,6.56 9.24,7.45L7.73,5.94C9,4.68 10.75,4 12.66,4M4,9.08C4,11.93 6.25,14.17 9.09,14.17C10.44,14.17 11.7,13.61 12.6,12.73L11.19,11.32C10.31,12.2 9.05,12.76 7.7,12.76C4.86,12.76 2.61,10.5 2.61,7.67C2.61,6.32 3.17,5.06 4.05,4.16L2.64,2.75C1.39,4 0.61,5.75 0.61,7.67C0.61,11.65 3.72,14.75 7.7,14.75C9.61,14.75 11.36,14 12.63,12.72L11.12,11.21C10.24,12.09 8.98,12.65 7.7,12.65C4.86,12.65 2.61,10.39 2.61,7.57H4V9.08Z" />
        </svg>
        Design Calculations
      </h3>
      
      <div class="calculation-tabs">
        <div class="tab-buttons">
          <button class="tab-button active" data-tab="water-demand">Water Demand</button>
          <button class="tab-button" data-tab="pipe-sizing">Pipe Sizing</button>
          <button class="tab-button" data-tab="pressure-management">Pressure Management</button>
        </div>
        
        <div class="tab-content active" id="water-demand">
          <h4>Daily Consumption</h4>
          <div class="consumption-grid">
            <div class="consumption-item">
              <span class="consumption-value">2,017,676 liters</span>
              <span class="consumption-label">Fresh Water</span>
            </div>
            <div class="consumption-item">
              <span class="consumption-value">597,180 liters</span>
              <span class="consumption-label">Flush Water</span>
            </div>
          </div>
          <p>Calculated using WSD standard consumption rates per capita with peak demand factors applied.</p>
        </div>
        
        <div class="tab-content" id="pipe-sizing">
          <h4>Pipe Sizing Methodology</h4>
          <ul>
            <li>Loading unit method used (BS EN 12845)</li>
            <li>Example: Block 1 requires 150mm DI fresh water pipe</li>
            <li>Velocity maintained between 1.5-2.5 m/s</li>
            <li>Pressure loss limited to 50 Pa/m for main lines</li>
          </ul>
        </div>
        
        <div class="tab-content" id="pressure-management">
          <h4>Pressure Zones</h4>
          <ul>
            <li>PRV zoning calculations for each block</li>
            <li>Static head and flow rate analyses</li>
            <li>Two-stage PRVs for high incoming pressures</li>
            <li>Minimum 1.5 bar maintained at highest fixtures</li>
          </ul>
        </div>
      </div>
    </article>
  </section>

  <!-- Recommendations Section -->
  <section class="project-section recommendations-section">
    <h2 class="section-header">
      <span class="section-number">03</span>
      Recommendations for Improvement
    </h2>
    
    <div class="recommendations-grid">
      <div class="recommendation-card">
        <div class="rec-icon">📊</div>
        <h3>Advanced Monitoring</h3>
        <ul>
          <li>Implement wave theory-based diagnostic system for underground pipe monitoring</li>
          <li>Real-time pressure signal analysis for leak detection</li>
          <li>Smart metering for consumption tracking</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">🛠️</div>
        <h3>Material Upgrades</h3>
        <ul>
          <li>Replace with cross-lined polyethylene (PEX) or lined GI pipes</li>
          <li>Use compression joints for copper pipes</li>
          <li>Corrosion-resistant alloys for seawater systems</li>
        </ul>
      </div>
      
      <div class="recommendation-card">
        <div class="rec-icon">⚡</div>
        <h3>Non-negative Pressure System</h3>
        <ul>
          <li>Direct connection to mains with variable frequency drives</li>
          <li>Maintains constant pressure while conserving energy</li>
          <li>Reduces storage tank requirements</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Project Reflection Section -->
  <section class="project-section reflection-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Project Reflection
    </h2>
    
    <div class="reflection-content">
      <div class="reflection-text">
        <p>The internship provided valuable experience in applying theoretical knowledge to real-world engineering challenges in this large-scale public housing development.</p>
        
        <div class="skill-development">
          <h3>Key Skill Development</h3>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Technical Skills</h4>
              <ul>
                <li>AutoCAD MEP system design</li>
                <li>Hydraulic calculations</li>
                <li>BIM coordination</li>
                <li>Pump selection and sizing</li>
              </ul>
            </div>
            <div class="skill-category">
              <h4>Professional Skills</h4>
              <ul>
                <li>Time management</li>
                <li>Multidisciplinary teamwork</li>
                <li>Regulatory compliance</li>
                <li>Technical documentation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="project-outcome">
          <h3>Project Outcome</h3>
          <p>The project successfully integrated academic learning with practical industry requirements, resulting in a comprehensive plumbing design solution that meets all WSD standards while incorporating innovative features for maintainability and efficiency.</p>
        </div>
      </div>
      
      <div class="reflection-image">
        <img src="/assets/img/projects/plumbing_design-5.jpg" 
             alt="Project Team Working" 
             class="reflection-img"
             loading="lazy">
        <p class="image-caption">Fig 3. Design team reviewing plumbing schematics</p>
      </div>
    </div>
  </section>
</div>

<style>
/* Add these new styles to your existing CSS */

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

/* Responsive Adjustments */
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

/* Responsive Design */
@media (max-width: 992px) {
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

@media (max-width: 768px) {
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
  
  .calculation-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .project-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .calculation-gallery, .methodology-steps {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    font-size: 1.3rem;
  }
  
/* Add these new styles to your existing CSS */

.project-context {
  background: #f8f9fa;
  border-left: 4px solid var(--primary-color);
  padding: 15px 20px;
  margin-bottom: 25px;
  border-radius: 0 4px 4px 0;
}

.project-description, .system-intro, .calculations-intro, .methodology-intro {
  margin-bottom: 25px;
  line-height: 1.7;
}

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

.diagram-description, .arrangement-description {
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 2px solid var(--medium-gray);
}

.arrangement-notes {
  background: #f0f7ff;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
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

.step-description {
  padding: 12px;
  font-size: 0.9rem;
  line-height: 1.5;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .step-item {
    margin-bottom: 20px;
  }
}
</style>
