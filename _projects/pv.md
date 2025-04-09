---
title: "Rooftop Solar Potential - Glasgow Caledonian University"
category: Research
description: "Feasibility analysis for 1MW solar PV system across 12 campus buildings, identifying 800,000 kWh annual generation potential with 7-10 year payback period."
tech: [PVsyst, HelioScope, AutoCAD, SolarGIS, Financial Modeling, Carbon Accounting]
image: /assets/img/projects/plumbing_design-1.jpg
importance: 1
---
<!-- DOCTYPE html -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GCU Rooftop Solar Feasibility Study</title>
    <style>
        :root {
            --primary: #003366; /* GCU Blue */
            --secondary: #FFD700; /* Gold Accent */
            --light-bg: #f8f9fa;
            --dark-text: #333333;
            --highlight: #e6f2ff;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark-text);
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
        }
        
        header {
            background-color: var(--primary);
            color: white;
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        h1, h2, h3, h4 {
            color: var(--primary);
            margin-top: 1.5em;
        }
        
        h1 {
            border-bottom: 3px solid var(--secondary);
            padding-bottom: 10px;
        }
        
        .executive-summary {
            background-color: var(--highlight);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 2rem 0;
            border-left: 4px solid var(--secondary);
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            box-shadow: 0 2px 3px rgba(0,0,0,0.1);
            font-size: 0.95rem;
        }
        
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: var(--primary);
            color: white;
            font-weight: 600;
        }
        
        tr:nth-child(even) {
            background-color: var(--light-bg);
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 2rem 0;
        }
        
        .metric-card {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-top: 4px solid var(--secondary);
        }
        
        .metric-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0.5rem 0;
        }
        
        .tech-specs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 1.5rem 0;
        }
        
        .tech-item {
            background: white;
            padding: 1rem;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .phase-timeline {
            position: relative;
            padding-left: 30px;
            margin: 2rem 0;
        }
        
        .phase {
            position: relative;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-left: 3px solid var(--primary);
            padding-left: 20px;
        }
        
        .phase:last-child {
            border-left: 3px dotted var(--primary);
        }
        
        .phase::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 0;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: var(--secondary);
            border: 3px solid var(--primary);
        }
        
        .risk-matrix {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
            margin: 1.5rem 0;
        }
        
        .risk-item {
            background: white;
            padding: 1rem;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border-left: 4px solid var(--primary);
        }
        
        .image-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 25px;
            margin: 30px 0;
        }
        
        .image-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 3px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .image-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .image-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-bottom: 1px solid #eee;
        }
        
        .image-info {
            padding: 15px;
        }
        
        .image-title {
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--primary);
        }
        
        .building-section {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        
        .simulation-comparison {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
        }
        
        @media (max-width: 768px) {
            .metrics-grid, .tech-specs, .risk-matrix, .image-gallery, .simulation-comparison {
                grid-template-columns: 1fr;
            }
            
            table {
                font-size: 0.85rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Study on Rooftop Renewable Energy Applications at GCU</h1>
        <p>Development Potential and Energy Incentives Analysis</p>
    </header>

    <section id="executive-summary">
        <h2>Executive Summary</h2>
        <div class="executive-summary">
            <p><strong>Core Proposition:</strong> Installation of 1.04MW distributed solar PV system across 12 campus buildings, delivering:</p>
            
            <div class="metrics-grid">
                <div class="metric-card">
                    <h3>Annual Generation</h3>
                    <div class="metric-value">824,500 kWh</div>
                    <p>(12% of campus demand)</p>
                </div>
                
                <div class="metric-card">
                    <h3>Carbon Reduction</h3>
                    <div class="metric-value">317 tonnes CO₂e/year</div>
                </div>
                
                <div class="metric-card">
                    <h3>Financial Metrics</h3>
                    <p><strong>CAPEX:</strong> £1.18 million</p>
                    <p><strong>Payback Period:</strong> 8.3 years</p>
                    <p><strong>25-year NPV:</strong> £2.1 million (IRR 14.2%)</p>
                </div>
            </div>
            
            <div class="image-gallery">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-1.png" alt="Satellite analysis">
                    <div class="image-info">
                        <div class="image-title">Satellite Imagery Analysis</div>
                        <p>Campus-wide assessment for optimal PV placement</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="methodology">
        <h2>2. Methodology and Approach</h2>
        
        <h3>2.1 Technical Assessment Framework</h3>
        
        <h4>Climate Data Analysis</h4>
        <div class="image-gallery">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-10.png" alt="Cloudiness trends">
                <div class="image-info">
                    <div class="image-title">Annual Cloud Cover Patterns</div>
                    <p>Monthly breakdown of cloudy and clear days</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-11.png" alt="Daylight duration">
                <div class="image-info">
                    <div class="image-title">Daylight Duration Variation</div>
                    <p>Monthly fluctuations in daylight hours</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-12.png" alt="Solar potential">
                <div class="image-info">
                    <div class="image-title">Solar Energy Potential</div>
                    <p>Monthly production variation in Glasgow</p>
                </div>
            </div>
        </div>
        
        <h3>2.2 Energy Modeling Approach</h3>
        
        <h4>Technology Comparison</h4>
        <div class="image-gallery">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-13.png" alt="Panel comparison">
                <div class="image-info">
                    <div class="image-title">PV Panel Efficiency Comparison</div>
                    <p>Performance across different models</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-14.png" alt="System comparison">
                <div class="image-info">
                    <div class="image-title">System Cost Analysis</div>
                    <p>Energy savings and payback periods</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-19.png" alt="Investment costs">
                <div class="image-info">
                    <div class="image-title">Initial Investment Costs</div>
                    <p>Capital expenditure by panel type</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-20.png" alt="Payback comparison">
                <div class="image-info">
                    <div class="image-title">Payback Period Comparison</div>
                    <p>Time to ROI by technology</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-21.png" alt="ROI comparison">
                <div class="image-info">
                    <div class="image-title">Return on Investment</div>
                    <p>25-year financial projections</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-22.png" alt="Panel specifications">
                <div class="image-info">
                    <div class="image-title">Panel Specifications</div>
                    <p>Efficiency, warranty and use cases</p>
                </div>
            </div>
        </div>
        
        <h4>Detailed Financial Analysis</h4>
        <div class="image-gallery">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-15.png" alt="REC Alpha analysis">
                <div class="image-info">
                    <div class="image-title">REC Alpha Pure-R Analysis</div>
                    <p>Detailed ROI and payback period</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-16.png" alt="REC Alpha details">
                <div class="image-info">
                    <div class="image-title">REC Alpha Performance</div>
                    <p>Additional financial metrics</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-17.png" alt="Jinko Neo analysis">
                <div class="image-info">
                    <div class="image-title">Jinko Tiger Neo Analysis</div>
                    <p>ROI and payback breakdown</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-18.png" alt="Jinko Neo details">
                <div class="image-info">
                    <div class="image-title">Jinko Neo Performance</div>
                    <p>Additional financial metrics</p>
                </div>
            </div>
        </div>
    </section>

    <section id="building-analysis">
        <h2>3. Building-Specific Analysis</h2>
        
        <!-- Arc Health Building -->
        <div class="building-section" id="arc-health">
            <h3>3.1 Arc Health and Wellbeing Facility</h3>
            <div class="image-gallery">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-2.png" alt="Plan view">
                    <div class="image-info">
                        <div class="image-title">Plan View</div>
                        <p>Roof layout and dimensions</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-3.png" alt="3D view">
                    <div class="image-info">
                        <div class="image-title">3D Perspective</div>
                        <p>Architectural visualization</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-78.png" alt="Design specs">
                    <div class="image-info">
                        <div class="image-title">Design Specifications</div>
                        <p>Technical parameters</p>
                    </div>
                </div>
            </div>
            
            <h4>HelioScope Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-29.png" alt="Panel arrangement">
                    <div class="image-info">
                        <div class="image-title">Panel Layout</div>
                        <p>Optimal array configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-30.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Annual Production</div>
                        <p>Energy yield projections</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-31.png" alt="Production details">
                    <div class="image-info">
                        <div class="image-title">Production Details</div>
                        <p>Monthly breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-32.png" alt="Shading analysis">
                    <div class="image-info">
                        <div class="image-title">Shading Analysis</div>
                        <p>Obstruction impact</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-33.png" alt="Shading details">
                    <div class="image-info">
                        <div class="image-title">Shading Details</div>
                        <p>Seasonal variation</p>
                    </div>
                </div>
            </div>
            
            <h4>PVsyst Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-34.png" alt="Simulation interface">
                    <div class="image-info">
                        <div class="image-title">Simulation Interface</div>
                        <p>System configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-35.png" alt="Simulation summary">
                    <div class="image-info">
                        <div class="image-title">Simulation Summary</div>
                        <p>Key performance indicators</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-36.png" alt="Simulation parameters">
                    <div class="image-info">
                        <div class="image-title">System Parameters</div>
                        <p>Technical configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-37.png" alt="Additional parameters">
                    <div class="image-info">
                        <div class="image-title">Advanced Parameters</div>
                        <p>Detailed settings</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-38.png" alt="Main results">
                    <div class="image-info">
                        <div class="image-title">Simulation Results</div>
                        <p>Performance metrics</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-39.png" alt="Loss diagram">
                    <div class="image-info">
                        <div class="image-title">Loss Diagram</div>
                        <p>Energy loss breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-40.png" alt="Weather data">
                    <div class="image-info">
                        <div class="image-title">Weather Data</div>
                        <p>Climate inputs</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-41.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Production Data</div>
                        <p>Detailed output</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Britannia Building -->
        <div class="building-section" id="britannia">
            <h3>3.2 Britannia Building</h3>
            <div class="image-gallery">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-4.png" alt="Plan view">
                    <div class="image-info">
                        <div class="image-title">Plan View</div>
                        <p>Roof layout and dimensions</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-5.png" alt="3D view">
                    <div class="image-info">
                        <div class="image-title">3D Perspective</div>
                        <p>Architectural visualization</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-79.png" alt="Design specs">
                    <div class="image-info">
                        <div class="image-title">Design Specifications</div>
                        <p>Technical parameters</p>
                    </div>
                </div>
            </div>
            
            <h4>HelioScope Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-42.png" alt="Panel arrangement">
                    <div class="image-info">
                        <div class="image-title">Panel Layout</div>
                        <p>Optimal array configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-43.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Annual Production</div>
                        <p>Energy yield projections</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-44.png" alt="Production details">
                    <div class="image-info">
                        <div class="image-title">Production Details</div>
                        <p>Monthly breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-45.png" alt="Shading analysis">
                    <div class="image-info">
                        <div class="image-title">Shading Analysis</div>
                        <p>Obstruction impact</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-46.png" alt="Shading details">
                    <div class="image-info">
                        <div class="image-title">Shading Details</div>
                        <p>Seasonal variation</p>
                    </div>
                </div>
            </div>
            
            <h4>PVsyst Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-47.png" alt="Simulation interface">
                    <div class="image-info">
                        <div class="image-title">Simulation Interface</div>
                        <p>System configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-48.png" alt="Simulation summary">
                    <div class="image-info">
                        <div class="image-title">Simulation Summary</div>
                        <p>Key performance indicators</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-49.png" alt="Simulation parameters">
                    <div class="image-info">
                        <div class="image-title">System Parameters</div>
                        <p>Technical configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-50.png" alt="Additional parameters">
                    <div class="image-info">
                        <div class="image-title">Advanced Parameters</div>
                        <p>Detailed settings</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-51.png" alt="Main results">
                    <div class="image-info">
                        <div class="image-title">Simulation Results</div>
                        <p>Performance metrics</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-52.png" alt="Loss diagram">
                    <div class="image-info">
                        <div class="image-title">Loss Diagram</div>
                        <p>Energy loss breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-53.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Production Data</div>
                        <p>Detailed output</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Saltire Centre -->
        <div class="building-section" id="saltire">
            <h3>3.3 The Saltire Centre</h3>
            <div class="image-gallery">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-6.png" alt="Plan view">
                    <div class="image-info">
                        <div class="image-title">Plan View</div>
                        <p>Roof layout and dimensions</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-7.png" alt="3D view">
                    <div class="image-info">
                        <div class="image-title">3D Perspective</div>
                        <p>Architectural visualization</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-80.png" alt="Design specs">
                    <div class="image-info">
                        <div class="image-title">Design Specifications</div>
                        <p>Technical parameters</p>
                    </div>
                </div>
            </div>
            
            <h4>HelioScope Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-54.png" alt="Panel arrangement">
                    <div class="image-info">
                        <div class="image-title">Panel Layout</div>
                        <p>Optimal array configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-55.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Annual Production</div>
                        <p>Energy yield projections</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-56.png" alt="Production details">
                    <div class="image-info">
                        <div class="image-title">Production Details</div>
                        <p>Monthly breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-57.png" alt="Shading analysis">
                    <div class="image-info">
                        <div class="image-title">Shading Analysis</div>
                        <p>Obstruction impact</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-58.png" alt="Shading details">
                    <div class="image-info">
                        <div class="image-title">Shading Details</div>
                        <p>Seasonal variation</p>
                    </div>
                </div>
            </div>
            
            <h4>PVsyst Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-59.png" alt="Simulation interface">
                    <div class="image-info">
                        <div class="image-title">Simulation Interface</div>
                        <p>System configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-60.png" alt="Simulation summary">
                    <div class="image-info">
                        <div class="image-title">Simulation Summary</div>
                        <p>Key performance indicators</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-61.png" alt="Simulation parameters">
                    <div class="image-info">
                        <div class="image-title">System Parameters</div>
                        <p>Technical configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-62.png" alt="Additional parameters">
                    <div class="image-info">
                        <div class="image-title">Advanced Parameters</div>
                        <p>Detailed settings</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-63.png" alt="Main results">
                    <div class="image-info">
                        <div class="image-title">Simulation Results</div>
                        <p>Performance metrics</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-64.png" alt="Loss diagram">
                    <div class="image-info">
                        <div class="image-title">Loss Diagram</div>
                        <p>Energy loss breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-65.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Production Data</div>
                        <p>Detailed output</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- William Harley Building -->
        <div class="building-section" id="william-harley">
            <h3>3.4 William Harley Building</h3>
            <div class="image-gallery">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-8.png" alt="Plan view">
                    <div class="image-info">
                        <div class="image-title">Plan View</div>
                        <p>Roof layout and dimensions</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-9.png" alt="3D view">
                    <div class="image-info">
                        <div class="image-title">3D Perspective</div>
                        <p>Architectural visualization</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-81.png" alt="Design specs">
                    <div class="image-info">
                        <div class="image-title">Design Specifications</div>
                        <p>Technical parameters</p>
                    </div>
                </div>
            </div>
            
            <h4>HelioScope Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-66.png" alt="Panel arrangement">
                    <div class="image-info">
                        <div class="image-title">Panel Layout</div>
                        <p>Optimal array configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-67.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Annual Production</div>
                        <p>Energy yield projections</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-68.png" alt="Production details">
                    <div class="image-info">
                        <div class="image-title">Production Details</div>
                        <p>Monthly breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-69.png" alt="Shading analysis">
                    <div class="image-info">
                        <div class="image-title">Shading Analysis</div>
                        <p>Obstruction impact</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-70.png" alt="Shading details">
                    <div class="image-info">
                        <div class="image-title">Shading Details</div>
                        <p>Seasonal variation</p>
                    </div>
                </div>
            </div>
            
            <h4>PVsyst Simulation</h4>
            <div class="simulation-comparison">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-71.png" alt="Simulation interface">
                    <div class="image-info">
                        <div class="image-title">Simulation Interface</div>
                        <p>System configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-72.png" alt="Simulation summary">
                    <div class="image-info">
                        <div class="image-title">Simulation Summary</div>
                        <p>Key performance indicators</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-73.png" alt="Simulation parameters">
                    <div class="image-info">
                        <div class="image-title">System Parameters</div>
                        <p>Technical configuration</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-74.png" alt="Additional parameters">
                    <div class="image-info">
                        <div class="image-title">Advanced Parameters</div>
                        <p>Detailed settings</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-75.png" alt="Main results">
                    <div class="image-info">
                        <div class="image-title">Simulation Results</div>
                        <p>Performance metrics</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-76.png" alt="Loss diagram">
                    <div class="image-info">
                        <div class="image-title">Loss Diagram</div>
                        <p>Energy loss breakdown</p>
                    </div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-77.png" alt="Production data">
                    <div class="image-info">
                        <div class="image-title">Production Data</div>
                        <p>Detailed output</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="system-performance">
        <h2>4. System Performance Analysis</h2>
        <div class="image-gallery">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-23.png" alt="Production comparison">
                <div class="image-info">
                    <div class="image-title">HelioScope vs PVsyst Production</div>
                    <p>Energy output comparison (MWh)</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-24.png" alt="Performance ratio">
                <div class="image-info">
                    <div class="image-title">Performance Ratio</div>
                    <p>System efficiency comparison (%)</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-25.png" alt="Energy losses">
                <div class="image-info">
                    <div class="image-title">Energy Losses Breakdown</div>
                    <p>System loss analysis</p>
                </div>
            </div>
        </div>
    </section>

    <section id="financial-impact">
        <h2>5. Financial & Environmental Impact</h2>
        <div class="image-gallery">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-26.png" alt="Cost savings">
                <div class="image-info">
                    <div class="image-title">Energy Cost Savings</div>
                    <p>Estimated savings per building (£)</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-27.png" alt="CO2 reduction">
                <div class="image-info">
                    <div class="image-title">CO2 Reduction</div>
                    <p>Annual emissions savings by building</p>
                </div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-28.png" alt="Financial metrics">
                <div class="image-info">
                    <div class="image-title">Financial Performance</div>
                    <p>ROI, Payback Period, NPV by building</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
