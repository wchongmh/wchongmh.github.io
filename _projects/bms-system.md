---
title: "BMS Dashboard Development"  
category: Building Systems  
description: "Engineered an interactive BMS dashboard for real-time monitoring and control of building systems, with data visualization and alarm management."  
tech: [BMS, Siemens Desigo CC, Data Visualization, IoT Sensors]  
image: /assets/img/projects/bms_system-1.jpg  # Main thumbnail  
importance: 1  # Adjust for sorting priority (1 = high) 
github: # Optional link  
demo: # Optional live demo link  
---  

<div class="project-header mb-4 p-4 rounded" style="background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%); border-left: 4px solid #2a7ae2;">
  <h2 class="mb-3">Project Overview</h2>
  <p class="lead">A centralized monitoring platform integrating 8+ building subsystems with AI-driven analytics for facility optimization.</p>
</div>

### **Key Features & Innovations**  

<div class="features-grid">
  <div class="feature-card">
    <h4><i class="fas fa-chart-line"></i> Real-time Monitoring</h4>
    <ul>
      <li>Live visualization of HVAC performance metrics (CFM, ΔT, valve positions)</li>
      <li>Electrical load monitoring with 15-second refresh rates</li>
      <li>Occupancy-based lighting control integration</li>
    </ul>
  </div>

  <div class="feature-card">
    <h4><i class="fas fa-bell"></i> Smart Alert System</h4>
    <ul>
      <li>3-tier priority classification (Critical/Warning/Notice)</li>
      <li>Automated SMS/email notifications for priority events</li>
      <li>Historical alarm pattern recognition</li>
    </div>

  <div class="feature-card">
    <h4><i class="fas fa-leaf"></i> Sustainability Analytics</h4>
    <ul>
      <li>Energy consumption benchmarking against ASHRAE standards</li>
      <li>Predictive load forecasting with 92% accuracy</li>
      <li>Carbon footprint visualization dashboards</li>
    </ul>
  </div>
</div>

### **Technical Implementation**  

<div class="row g-4 mb-4">
  <div class="col-md-6">
    <div class="tech-card p-3 h-100 rounded">
      <h5 class="d-flex align-items-center"><span class="tech-icon me-2">🔌</span> System Architecture</h5>
      <ul>
        <li>Modbus TCP/IP protocol for device communication</li>
        <li>TimescaleDB for high-frequency sensor data</li>
        <li>Microservices backend (Python/Django)</li>
      </ul>
    </div>
  </div>
  
  <div class="col-md-6">
    <div class="tech-card p-3 h-100 rounded">
      <h5 class="d-flex align-items-center"><span class="tech-icon me-2">📊</span> Visualization Stack</h5>
      <ul>
        <li>Interactive charts using Plotly.js</li>
        <li>Custom SVG floorplan overlays</li>
        <li>Mobile-responsive design (Bootstrap 5)</li>
      </ul>
    </div>
  </div>
</div>

### **Measurable Outcomes**  

| Metric | Improvement | Impact |
|--------|-------------|--------|
| Maintenance Response Time | 58% faster | Reduced equipment downtime |
| Energy Consumption | 15.2% reduction | $42k annual savings |
| Alarm Resolution | 73% faster | Improved technician efficiency |

### **Dashboard Showcase**  

<div class="project-gallery mt-5">
  <div class="gallery-intro mb-4">
    <h3>Interactive Dashboard Components</h3>
    <p class="text-muted">Click images to view detailed functionality</p>
  </div>

  <div class="row g-4">
    <!-- Main Dashboard -->
    <div class="col-12">
      <div class="gallery-card p-2 rounded">
        <img src="/assets/img/projects/bms_system-2.jpg" 
             alt="BMS Overview Dashboard"
             class="img-fluid rounded-lg shadow-lg"
             loading="lazy"
             data-bs-toggle="tooltip" 
             title="Main control interface with system health indicators">
        <div class="img-caption mt-2">Figure 1: Central Monitoring Console</div>
      </div>
    </div>
    
    <!-- Secondary Panels -->
    <div class="col-md-6">
      <div class="gallery-card p-2 rounded">
        <img src="/assets/img/projects/bms_system-3.jpg" 
             alt="Energy Analytics Module"
             class="img-fluid rounded-lg shadow-lg"
             loading="lazy">
        <div class="img-caption mt-2">Figure 2: Energy Usage Breakdown</div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="gallery-card p-2 rounded">
        <img src="/assets/img/projects/bms_system-1.jpg" 
             alt="Alarm Management View"
             class="img-fluid rounded-lg shadow-lg"
             loading="lazy">
        <div class="img-caption mt-2">Figure 3: Smart Alarm Console</div>
      </div>
    </div>
  </div>
</div>

<style>
/* Enhanced Styling */
.project-header {
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card, .tech-card {
  background: white;
  border: 1px solid #e1e4e8;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.tech-card {
  background: #f8fafc;
  border-left: 3px solid #2a7ae2;
}

.tech-icon {
  font-size: 1.2em;
}

.project-gallery {
  margin-top: 3rem;
}

.gallery-card {
  background: white;
  transition: all 0.3s ease;
}

.gallery-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.img-caption {
  font-size: 0.9rem;
  color: #6c757d;
  text-align: center;
}

.project-gallery img {
  border: 1px solid #e1e4e8;
  padding: 4px;
  background: white;
  transition: transform 0.3s ease;
}

.project-gallery img:hover {
  transform: scale(1.02);
  cursor: zoom-in;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
