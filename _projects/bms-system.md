---
title: "BMS Dashboard Development"  
display_categories: [Building Systems, Smart Building Solutions]
description: "Engineered an interactive BMS dashboard enabling real-time monitoring, control, and data visualization of building systems, including alarm management. Integrated IoT sensors with legacy infrastructure to deliver a unified, scalable platform for commercial facility operations."  
tech: [BMS, Siemens Desigo CC, Data Visualization, IoT]  
image: /assets/img/projects/bms_system-1.jpg  # Main thumbnail  
importance: 1  # Adjust for sorting priority (1 = high) 
github: # Optional link  
demo: # Optional live demo link  
---  

## Project Overview

A centralized BMS dashboard that aggregates data from HVAC, lighting, and power systems across multiple facilities, providing:

- Real-time equipment monitoring
- Automated alarm management
- Hybrid wired/wireless data collection
- Energy consumption analytics
- Maintenance workflow integration
- Cloud-based analytics

## Key Features

### Live Monitoring
- Tracked 150+ data points (temperatures, pressures, power draws)
- Color-coded status indicators for quick assessment
- Customizable views per facility/zone

### IoT Integration Layer
- Deployed 85 wireless sensors (temperature, occupancy, air quality)
- BACnet/MQTT gateway for protocol translation
- Edge computing for local data processing

### Smart Monitoring Features
- Live equipment health dashboards
- Automated fault detection algorithms
- Mobile alerts for critical events

### Alarm Management
- Priority-based alert system (Critical/Warning/Notice)
- Automated notifications via email/SMS
- Historical alarm trending

### Energy Analytics
- kWh tracking with cost calculations
- Comparative analysis against baselines
- Exportable reports for sustainability audits

## Technical Implementation

**IoT Architecture**  
- LoRaWAN for sensor connectivity  
- 5-minute data aggregation cycles  
- Azure IoT Hub for cloud connectivity  

**Legacy Integration**  
- Modbus TCP to BACnet conversion  
- Historian database for time-series data  
- Role-based API access controls  

## Measured Outcomes

- **27% faster** anomaly detection via IoT sensors  
- **12% reduction** in HVAC energy use  
- **83% decrease** in manual data collection  

## Measured Impact

| System          | Improvement |
|-----------------|-------------|
| Energy Efficiency | 18% reduction |
| Maintenance Costs | 22% savings |
| Alarm Response    | 65% faster |

### **Dashboard Preview**
<div class="project-gallery mt-4">
  <div class="row g-3">
    <!-- Full-width image -->
    <div class="col-12">
      <img src="/assets/img/projects/bms_system-1.jpg" 
           alt="BMS Main Dashboard" 
           class="img-fluid rounded shadow"
           loading="lazy"
           style="max-height: 500px; width: auto; object-fit: contain;">
    </div>
    <!-- Half-width images -->
    <div class="col-md-6">
      <img src="/assets/img/projects/bms_system-2.jpg" 
           alt="Energy Analytics Panel" 
           class="img-fluid rounded shadow"
           loading="lazy"
           style="max-height: 400px; width: auto; object-fit: contain;">
    </div>
    <div class="col-md-6">
      <img src="/assets/img/projects/bms_system-3.jpg" 
           alt="Alarm Management Console" 
           class="img-fluid rounded shadow"
           loading="lazy"
           style="max-height: 400px; width: auto; object-fit: contain;">
    </div>
  </div>
</div>

<style>
.project-gallery img {
  background: #f8f9fa;
  padding: 8px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  transition: transform 0.2s ease;
}
.project-gallery img:hover {
  transform: scale(1.01);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>
