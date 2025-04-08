---
title: "Public Housing Plumbing Systems - Queen's Hill Development"
category: Building Systems
description: "Comprehensive plumbing design for 3,120-unit HK housing project, including hydraulic calculations and system schematics."
tech: [AutoCAD MEP, Hydraulic Calculations, BS EN 12845, Pump Sizing, BIM Coordination]
image: /assets/img/projects/plumbing_design-1.jpg
importance: 1
---

<div class="plumbing-project">

  <!-- Project Header -->
  <header class="project-header">
    <h1 class="project-title">Public Housing Plumbing Systems</h1>
    <p class="project-subtitle">Queen's Hill Development</p>
    <div class="project-meta">
      <span class="badge">Building Systems</span>
      <span class="tech-tags">
        {% for technology in page.tech %}
        <span class="tech-tag">{{ technology }}</span>
        {% endfor %}
      </span>
    </div>
  </header>

  <!-- Project Overview Section -->
  <section class="project-section overview-section">
    <h2 class="section-header">
      <span class="section-number">01</span>
      Project Overview
    </h2>
    
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
          <span class="image-desc">Site aerial view</span>
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
          <span class="image-desc">Location plan</span>
        </div>
      </div>
    </div>
  </section>

  <!-- System Design Section -->
  <section class="project-section system-design">
    <h2 class="section-header">
      <span class="section-number">02</span>
      System Design
    </h2>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
        </svg>
          Schematic Diagrams
      </h3>
      
      <div class="diagram-grid">
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/plumbing_design-7.png" 
                 alt="Fresh Water System Process Flow" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">Process Flow</span>
            <span class="diagram-fig">Fig 3. Fresh water supply process</span>
          </div>
        </div>
        
        <div class="diagram-card">
          <div class="diagram-wrapper">
            <img src="/assets/img/projects/plumbing_design-6.jpg" 
                 alt="Vertical Plumbing Line Diagram" 
                 class="diagram-image"
                 loading="lazy">
          </div>
          <div class="diagram-meta">
            <span class="diagram-label">Distribution</span>
            <span class="diagram-fig">Fig 4. Block 1 vertical distribution</span>
          </div>
        </div>
      </div>
    </article>
    
    <article class="design-subsection">
      <h3 class="subsection-header">
        <svg class="subsection-icon" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z" />
        </svg>
        System Arrangement
      </h3>
      
      <div class="system-arrangement">
        <div class="arrangement-image">
          <img src="/assets/img/projects/plumbing_design-8.jpg" 
               alt="Fresh Water System Arrangement" 
               class="arrangement-img"
               loading="lazy">
          <div class="arrangement-caption">
            <span class="arrangement-fig">Fig 5.</span>
            <span class="arrangement-desc">Domestic Block 1 fresh water system</span>
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
    
    <div class="calculation-gallery">
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-9.jpg" 
               alt="Booster Pump Calculation" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Booster Pump</span>
          </div>
        </div>
      </div>
      
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-10.jpg" 
               alt="Main Pipe Sizing" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Main Pipe Sizing</span>
          </div>
        </div>
      </div>
      
      <!-- Additional calculation items -->
      {% assign calc_images = (11..14) %}
      {% for i in calc_images %}
      <div class="calculation-item">
        <div class="calc-image-container">
          <img src="/assets/img/projects/plumbing_design-{{i}}.jpg" 
               alt="Engineering Calculation {{i}}" 
               class="calc-image"
               loading="lazy">
          <div class="calc-overlay">
            <span class="calc-title">Calculation {{i | minus: 8}}</span>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Design Methodology Section -->
  <section class="project-section methodology-section">
    <h2 class="section-header">
      <span class="section-number">04</span>
      Design Methodology
    </h2>
    
    <h3 class="methodology-subheader">
      <svg class="methodology-icon" viewBox="0 0 24 24">
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" />
      </svg>
      Pipe Sizing Procedure
    </h3>
    
    <div class="methodology-steps">
      {% for i in (16..21) %}
      <div class="step-item">
        <div class="step-number">Step {{i | minus:15}}</div>
        <div class="step-image">
          <img src="/assets/img/projects/plumbing_design-{{i}}.jpg" 
               alt="Pipe Sizing Step {{i | minus:15}}" 
               class="step-img"
               loading="lazy">
        </div>
      </div>
      {% endfor %}
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
}
</style>
