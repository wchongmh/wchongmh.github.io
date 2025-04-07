---
title: "BMS Dashboard Development"  
category: Building Systems  
description: "Engineered an interactive BMS dashboard for real-time monitoring and control of building systems, with data visualization and alarm management."  
tech: [BMS, Siemens Desigo CC, Data Visualization, IoT]  
image: /assets/img/projects/bms_system-1.jpg  # Main thumbnail  
importance: 1  # Adjust for sorting priority (1 = high) 
github: # Optional link  
demo: # Optional live demo link  
---  

### **Core Functionalities**  
- **Live System Monitoring**: Tracked HVAC performance, lighting states, and power consumption.  
- **Dynamic Alerts**: Color-coded alarms for critical failures (e.g., air handler faults).  
- **Trend Analysis**: Generated energy usage reports for sustainability audits.  

### **Technical Impact**  
- Reduced manual checks by 40% through automated alerts.  
- Improved energy efficiency by 15% via trend analysis.

### **Dashboard Preview**
<div id="bmsCarousel" class="carousel slide shadow rounded mt-4" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/img/projects/bms_system-1.jpg" class="d-block w-100" alt="Main Dashboard" style="max-height: 500px; object-fit: contain;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/projects/bms_system-2.jpg" class="d-block w-100" alt="Energy Analytics" style="max-height: 500px; object-fit: contain;">
    </div>
    <div class="carousel-item">
      <img src="/assets/img/projects/bms_system-3.jpg" class="d-block w-100" alt="Alarm Console" style="max-height: 500px; object-fit: contain;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#bmsCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#bmsCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<style>
/* Custom carousel styling */
#bmsCarousel {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
}
.carousel-control-prev-icon, 
.carousel-control-next-icon {
  background-color: rgba(0,0,0,0.5);
  border-radius: 50%;
  padding: 20px;
}
</style>

<script>
// Auto-initialize carousel (requires Bootstrap JS)
document.addEventListener('DOMContentLoaded', function() {
  new bootstrap.Carousel(document.getElementById('bmsCarousel'), {
    interval: 5000 // 5 second auto-advance
  });
});
</script>
