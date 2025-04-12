---
title: "Rooftop Solar Potential - Glasgow Caledonian University"
category: Research
description: "Feasibility analysis for 1MW solar PV system across 12 campus buildings, identifying 800,000 kWh annual generation potential with 7-10 year payback period."
tech: [PVsyst, HelioScope, AutoCAD, SolarGIS, Financial Modeling, Carbon Accounting]
image: /assets/img/projects/fyp/pv_design-0.png
importance: 1
---

<!-- DOCTYPE html -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rooftop Solar Potential - Glasgow Caledonian University</title>
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
            --success-color: #2ecc71;
            --warning-color: #e67e22;
            --highlight-color: #fffde7;
        }

        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            color: var(--text-color);
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            background-color: #f9f9f9;
        }

        .header-container {
            background-color: var(--card-bg);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            margin-bottom: 2rem;
        }
        
        .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 1.5rem 0;
        }

        .tech-item {
            background-color: #e3f2fd;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 500;
            color: #1976d2;
        }

        /* Typography */
        .project-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 0.5rem;
        }

        .project-subtitle {
            font-size: 1.1rem;
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
        }

        /* Project Meta */
        .project-meta {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
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

        /* Content Cards */
        .content-card {
            background: var(--white);
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }

        /* Highlight Boxes */
        .highlight-box {
            background: var(--highlight-color);
            border-left: 4px solid #ffd600;
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }

        .warning-box {
            background: #fff3e0;
            border-left: 4px solid var(--warning-color);
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }

        .success-box {
            background: #e8f5e9;
            border-left: 4px solid var(--success-color);
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }

        /* Key Points */
        .key-points {
            margin-left: 1rem;
        }

        .key-points p {
            margin-bottom: 1rem;
            position: relative;
            padding-left: 1.5rem;
            line-height: 1.6;
        }

        .key-points p:before {
            content: "•";
            color: var(--primary-color);
            font-weight: bold;
            font-size: 1.5em;
            position: absolute;
            left: 0;
            top: -3px;
        }

        /* Tables */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            overflow: hidden;
        }

        .data-table th, .data-table td {
            border: 1px solid #e0e0e0;
            padding: 12px;
            text-align: left;
        }

        .data-table th {
            background-color: var(--primary-color);
            color: white;
            font-weight: 600;
        }

        .data-table tr:nth-child(even) {
            background-color: #f8f9fa;
        }

        .data-table tr:hover {
            background-color: #e3f2fd;
        }

        /* Images */
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
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

        .project-image {
            width: 100%;
            height: auto;
            display: block;
        }

        .image-caption {
            padding: 12px 15px;
            font-size: 0.85rem;
            color: var(--dark-gray);
            text-align: center;
            background: #f9f9f9;
        }

        /* Building Sections */
        .building-section {
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px dashed #e0e0e0;
        }

        .building-section:last-child {
            border-bottom: none;
        }

        /* Summary Cards */
        .summary-card {
            background: #e8f4fc;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .project-title {
                font-size: 1.9rem;
            }
            
            .section-header {
                font-size: 1.6rem;
            }
            
            .image-grid {
                grid-template-columns: 1fr;
            }
            
            .content-card {
                padding: 20px;
            }
        }

        @media (max-width: 576px) {
            body {
                padding: 0 15px;
            }
            
            .project-title {
                font-size: 1.7rem;
            }
            
            .section-header {
                font-size: 1.4rem;
                margin: 30px 0 20px;
            }
            
            .data-table {
                font-size: 0.9em;
            }
            
            .data-table th, .data-table td {
                padding: 8px;
            }
        }
    </style>
</head>
<body>
        <header class="header-container">
            <h1>Rooftop Solar Potential - Glasgow Caledonian University</h1>
            <div class="tech-list">
                <span class="tech-item">PVsyst</span>
                <span class="tech-item">HelioScope</span>
                <span class="tech-item">AutoCAD</span>
                <span class="tech-item">SolarGIS</span>
                <span class="tech-item">Financial Modeling</span>
                <span class="tech-item">Carbon Accounting</span>
            </div>
        </header>
        
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-1.png" alt="Satellite imagery analysis for PV panel installations at Glasgow Caledonian University" class="project-image">
            <div class="image-caption">Satellite imagery analysis for PV panel installations</div>
        </div>
    </div>

    <div class="content-card">
        <h2 class="section-header">Study on the Development Potential and Energy Incentives of Rooftop Renewable Energy Applications in Glasgow Caledonian University Campus</h2>
        <p>This project evaluates the feasibility of installing rooftop photovoltaic (PV) systems across 12 buildings at Glasgow Caledonian University (GCU). Through spatial analysis, energy simulations, and financial modeling, it identifies optimal solar panel configurations to reduce carbon emissions, lower energy costs, and advance the university's sustainability goals. The study integrates climatic data, structural constraints, and regulatory incentives to deliver actionable recommendations.</p>
    </div>

    <div class="content-card">
        <h2 class="section-header"><span class="section-number">1</span>Executive Summary</h2>
        <p>Glasgow Caledonian University, committed to its "University for the Common Good" mission, seeks to expand its renewable energy capacity through rooftop solar installations. This project:</p>
        
        <div class="key-points">
            <p><strong>Assesses 12 campus buildings</strong> (e.g., Saltire Centre, Hamish Wood) for PV potential using Google Earth, HelioScope, and PVsyst simulations.</p>
            <p><strong>Analyzes Glasgow's climate</strong>, confirming viable solar energy generation (~1,100 sun hours/year) despite cloud cover, with cooler temperatures enhancing panel efficiency.</p>
            <p><strong>Identifies 8,150 m² of installable rooftop space</strong>, capable of generating <strong>1.22 GWh annually</strong>—offsetting <strong>550 tonnes of CO₂/year</strong> (equivalent to 125 UK homes' emissions).</p>
            <p><strong>Recommends monocrystalline panels</strong> for high efficiency (15–22%) and space optimization, with microinverters to mitigate shading impacts.</p>
            <p><strong>Projects financial viability</strong>:</p>
            <ul>
                <li><strong>£1.8M initial investment</strong> (offset by £30K–£50K grants and interest-free loans)</li>
                <li><strong>7–10 year payback period</strong> via energy savings and Smart Export Guarantee (SEG) revenue</li>
            </ul>
            <p><strong>Aligns with GCU's EcoCampus Platinum and net-zero targets</strong>, while serving as an educational tool for sustainability programs.</p>
        </div>

        <div class="highlight-box">
            <h3>Key Differentiators:</h3>
            <ul>
                <li>Hybrid mounting systems for curved roofs</li>
                <li>IoT-enabled performance monitoring</li>
                <li>Integrated curriculum development</li>
                <li>AI-driven energy optimization</li>
                <li>Community engagement framework</li>
            </ul>
        </div>
    </div>

    <div class="content-card">
        <h2 class="section-header"><span class="section-number">2</span>Introduction and Background</h2>
        <p>The research addresses the growing importance of renewable energy adoption in higher education institutions, focusing on Glasgow Caledonian University's potential for rooftop solar photovoltaic (PV) installations.</p>
        
        <h3 class="subsection-header">Key Motivations:</h3>
        <ul>
            <li>Universities consume energy comparable to small cities, making them ideal for sustainable energy projects</li>
            <li>Scotland aims for 4-6 GW of solar capacity by 2030, creating opportunities for institutional participation</li>
            <li>GCU has demonstrated leadership through its EcoCampus Platinum certification and renewable energy initiatives</li>
            <li>Increasing energy costs and carbon reduction targets necessitate alternative energy solutions</li>
            <li>Student and staff demand for sustainable campus operations</li>
        </ul>

        <h3 class="subsection-header">Research Objectives:</h3>
        <ol>
            <li>Evaluate the technical feasibility of rooftop PV systems across GCU's campus buildings</li>
            <li>Identify optimal panel placement considering structural and environmental factors</li>
            <li>Analyze economic viability through cost-benefit projections</li>
            <li>Develop implementation recommendations aligned with GCU's sustainability strategy</li>
            <li>Create an educational framework for student engagement with the solar installation</li>
        </ol>
    </div>

    <div class="content-card">
        <h2 class="section-header"><span class="section-number">3</span>Methodology and Approach</h2>
        
        <h3 class="subsection-header">3.1 Technical Assessment Framework</h3>
        <p>The study employed a multi-dimensional analytical approach combining geospatial, climatic, and structural analysis:</p>
        
        <h4>Building Selection Criteria:</h4>
        <ul>
            <li>Roof area > 400m² to ensure economic viability</li>
            <li>Structural integrity assessments by certified engineers</li>
            <li>Orientation and shading analysis using 3D modeling</li>
            <li>Energy consumption patterns matching generation potential</li>
            <li>Accessibility for installation and maintenance</li>
            <li>Historical significance and architectural constraints</li>
        </ul>

        <h4>Data Collection Methods:</h4>
        <ol>
            <li><strong>Geospatial Analysis:</strong>
                <ul>
                    <li>High-resolution satellite imagery (Google Earth Pro, 30cm resolution)</li>
                    <li>LiDAR data for 3D modeling (1m resolution)</li>
                    <li>On-site photographic surveys (DSLR with 20MP resolution)</li>
                    <li>Drone aerial mapping (DJI Phantom 4 RTK)</li>
                </ul>
            </li>
            <li><strong>Climate Data Integration:</strong>
                <ul>
                    <li>NASA POWER dataset (2001-2020, daily resolution)</li>
                    <li>Met Office historical weather patterns (hourly data)</li>
                    <li>Solar irradiance models (PVGIS at 1km resolution)</li>
                    <li>Local microclimate measurements (on-site weather station)</li>
                </ul>
            </li>
            <li><strong>Structural Evaluation:</strong>
                <ul>
                    <li>Roof load capacity assessments (BS EN 1991-1-1)</li>
                    <li>Wind load calculations (BS EN 1991-1-4, Glasgow-specific)</li>
                    <li>Snow load analysis (Scottish building standards)</li>
                    <li>Seismic considerations (BS EN 1998-1)</li>
                    <li>Fire safety assessments (BS 9999)</li>
                </ul>
            </li>
        </ol>

        <h4>Software Tools:</h4>
        <ul>
            <li><strong>HelioScope:</strong> Shading analysis, module-level energy yield predictions, 3D visualization</li>
            <li><strong>PVsyst:</strong> Hourly performance simulation, economic modeling, sensitivity analysis</li>
            <li><strong>AutoCAD:</strong> Precise rooftop layouts and system schematics, structural drawings</li>
            <li><strong>RETScreen:</strong> Financial modeling and carbon analysis</li>
        </ul>

        <div class="image-grid">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-10.png" alt="Annual trends in cloudiness in Glasgow" class="project-image">
                <div class="image-caption">Annual trends in cloudiness in Glasgow</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-11.png" alt="Annual variation in daylight duration in Glasgow" class="project-image">
                <div class="image-caption">Annual variation in daylight duration</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-12.png" alt="Annual solar energy potential in Glasgow" class="project-image">
                <div class="image-caption">Annual solar energy potential</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-82.png" alt="Annual wind speed trends in Glasgow" class="project-image">
                <div class="image-caption">Annual wind speed trends</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-83.png" alt="Annual precipitation trends in Glasgow" class="project-image">
                <div class="image-caption">Annual precipitation trends</div>
            </div>
        </div>

        <h3 class="subsection-header">3.2 Energy Modeling Approach</h3>
        <h4>PV System Parameters:</h4>
        <ul>
            <li>Panel tilt angles optimized for latitude (55.86°N) at 30-35°</li>
            <li>Azimuth adjustments for each building (south-facing preferred)</li>
            <li>Temperature derating factors (0.3-0.4%/°C for monocrystalline)</li>
            <li>DC/AC ratio optimized at 1.2:1</li>
            <li>System losses accounting for wiring (2%), soiling (4%), and mismatch (1%)</li>
        </ul>

        <h4>Energy Simulation:</h4>
        <ul>
            <li>Utilized HelioScope and PVsyst software with hourly resolution</li>
            <li>Incorporated Glasgow-specific climate data:
                <ul>
                    <li>Average solar irradiance: 2.8 kWh/m²/day (annual)</li>
                    <li>Annual sunlight hours: ≈1,100 (2001-2020 average)</li>
                    <li>Temperature range: -5°C to 25°C (panel operating conditions)</li>
                    <li>Cloud cover patterns: 65% annual average</li>
                </ul>
            </li>
            <li>25-year degradation profile (0.5%/year)</li>
        </ul>

        <div class="image-grid">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-23.png" alt="HelioScope vs PVSyst Production (MWh)" class="project-image">
                <div class="image-caption">HelioScope vs PVSyst Production</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-24.png" alt="HelioScope vs PVSyst Performance Ratio (PR %)" class="project-image">
                <div class="image-caption">HelioScope vs PVSyst Performance Ratio</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-25.png" alt="Energy Losses Breakdown" class="project-image">
                <div class="image-caption">Energy Losses Breakdown</div>
            </div>
        </div>

        <h4>Validation Methods:</h4>
        <ul>
            <li>Comparison with existing university installations (Strathclyde, Edinburgh)</li>
            <li>Sensitivity analysis for key variables (±15% irradiance, ±5°C temperature)</li>
            <li>Physical measurements from test installations (5kW pilot system)</li>
            <li>Peer review by industry experts</li>
        </ul>

        <h4>Technology Comparison:</h4>
        <table class="data-table">
            <tr>
                <th>Parameter</th>
                <th>Monocrystalline</th>
                <th>Polycrystalline</th>
                <th>Thin-Film</th>
            </tr>
            <tr>
                <td>Efficiency</td>
                <td>18-22%</td>
                <td>15-18%</td>
                <td>10-13%</td>
            </tr>
            <tr>
                <td>Temperature Coefficient</td>
                <td>-0.3%/°C</td>
                <td>-0.4%/°C</td>
                <td>-0.2%/°C</td>
            </tr>
            <tr>
                <td>Space Requirement</td>
                <td>5m²/kW</td>
                <td>6m²/kW</td>
                <td>8m²/kW</td>
            </tr>
            <tr>
                <td>25-year Degradation</td>
                <td>0.5%/year</td>
                <td>0.7%/year</td>
                <td>1%/year</td>
            </tr>
            <tr>
                <td>Cost per Watt</td>
                <td>£0.85-£1.10</td>
                <td>£0.70-£0.90</td>
                <td>£0.60-£0.80</td>
            </tr>
            <tr>
                <td>Performance in Low Light</td>
                <td>Good</td>
                <td>Fair</td>
                <td>Excellent</td>
            </tr>
        </table>

        <h4>Case Studies from Other Universities</h4>
        <table class="data-table">
            <tr>
                <th>University</th>
                <th>Location</th>
                <th>PV Capacity</th>
                <th>Annual Generation</th>
                <th>Key Findings</th>
            </tr>
            <tr>
                <td><strong>UC Davis (USA)</strong></td>
                <td>California</td>
                <td>16 MW</td>
                <td>24 GWh</td>
                <td>Saves <strong>$1.35M/year</strong>, reduces <strong>14,000 tonnes CO₂/year</strong>, 62% of campus demand</td>
            </tr>
            <tr>
                <td><strong>University of Queensland (Australia)</strong></td>
                <td>Brisbane</td>
                <td>3.275 MW</td>
                <td>6.3 GWh</td>
                <td>Generates <strong>6.3M kWh/year</strong>, used for research, 12% ROI</td>
            </tr>
            <tr>
                <td><strong>University of Edinburgh (UK)</strong></td>
                <td>Scotland</td>
                <td>1.8 MW</td>
                <td>1.5 GWh</td>
                <td>8-year payback, integrated with district heating</td>
            </tr>
            <tr>
                <td><strong>ETH Zurich (Switzerland)</strong></td>
                <td>Zurich</td>
                <td>2.2 MW</td>
                <td>2.0 GWh</td>
                <td>Innovative building-integrated PV, 85% self-consumption</td>
            </tr>
        </table>

        <h4>Structural Analysis:</h4>
        <ul>
            <li>All roofs meet BS EN 1991-1-4 wind load requirements (up to 32 m/s)</li>
            <li>Snow load capacity exceeds Scottish 50-year maximum (1.2 kN/m²)</li>
            <li>Recommended reinforcement for 3 buildings (total cost: £48,000)</li>
            <li>Fire safety assessments completed for all proposed installations</li>
            <li>Access and maintenance pathways verified (minimum 600mm width)</li>
        </ul>

        <h3 class="subsection-header">3.3 System Design Specifications</h3>
        <h4>Performance Simulation (PVsyst):</h4>
        <table class="data-table">
            <tr>
                <th>Parameter</th>
                <th>Annual Value</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td>Specific Yield</td>
                <td>892 kWh/kWp</td>
                <td>Glasgow climate-adjusted</td>
            </tr>
            <tr>
                <td>Performance Ratio</td>
                <td>82.3%</td>
                <td>Above UK average of 78%</td>
            </tr>
            <tr>
                <td>System Losses</td>
                <td>17.7%</td>
                <td>Including 4.2% soiling, 2.1% shading</td>
            </tr>
            <tr>
                <td>Capacity Factor</td>
                <td>10.2%</td>
                <td>Typical for Scottish installations</td>
            </tr>
            <tr>
                <td>Annual Degradation</td>
                <td>0.5%</td>
                <td>25-year output warranty at 82%</td>
            </tr>
        </table>
    </div>

    <div class="content-card">
        <h2 class="section-header"><span class="section-number">4</span>Key Findings and Analysis</h2>
        
        <h3 class="subsection-header">4.1 Glasgow Caledonian University PV Panel Feasibility Analysis</h3>
        <p><strong>Total Potential:</strong> ~1.04 MW solar capacity across 12 buildings, representing 15% of campus electricity demand.</p>
        
        <h4>Building Rooftop Suitability</h4>
        <table class="data-table">
            <tr>
                <th>Building</th>
                <th>Roof Area (m²)</th>
                <th>Suitable Area (m²)</th>
                <th>Orientation</th>
                <th>Shading Impact</th>
                <th>Structural Load (kN/m²)</th>
            </tr>
            <tr>
                <td>Arc Health and Wellbeing</td>
                <td>1,200</td>
                <td>900</td>
                <td>172° SSE</td>
                <td>Moderate (22%)</td>
                <td>2.5</td>
            </tr>
            <tr>
                <td>Britannia</td>
                <td>1,500</td>
                <td>1,100</td>
                <td>Mixed</td>
                <td>High (37%)</td>
                <td>2.8</td>
            </tr>
            <tr>
                <td>Centre for Executive Ed.</td>
                <td>800</td>
                <td>600</td>
                <td>180° S</td>
                <td>Low (8%)</td>
                <td>2.0</td>
            </tr>
            <tr>
                <td>Charles Oakley Labs</td>
                <td>1,000</td>
                <td>750</td>
                <td>165° SSE</td>
                <td>Moderate (18%)</td>
                <td>2.3</td>
            </tr>
            <tr>
                <td>George Moore</td>
                <td>1,300</td>
                <td>950</td>
                <td>85° ENE</td>
                <td>Moderate (25%)</td>
                <td>2.5</td>
            </tr>
            <tr>
                <td>Govan Mbeki</td>
                <td>1,100</td>
                <td>800</td>
                <td>175° S</td>
                <td>Low (6%)</td>
                <td>2.0</td>
            </tr>
            <tr>
                <td>Hamish Wood</td>
                <td>900</td>
                <td>700</td>
                <td>170° SSE</td>
                <td>Moderate (15%)</td>
                <td>2.2</td>
            </tr>
            <tr>
                <td>Milton Street</td>
                <td>700</td>
                <td>550</td>
                <td>185° S</td>
                <td>Low (5%)</td>
                <td>1.8</td>
            </tr>
            <tr>
                <td>Students' Association</td>
                <td>600</td>
                <td>450</td>
                <td>90° E</td>
                <td>Moderate (20%)</td>
                <td>2.0</td>
            </tr>
            <tr>
                <td>The Saltire Centre</td>
                <td>1,400</td>
                <td>1,050</td>
                <td>Mixed</td>
                <td>High (42%)</td>
                <td>2.7</td>
            </tr>
            <tr>
                <td>William Harley</td>
                <td>1,200</td>
                <td>900</td>
                <td>95° ESE</td>
                <td>Moderate (19%)</td>
                <td>2.4</td>
            </tr>
            <tr>
                <td>Annie Lennox</td>
                <td>500</td>
                <td>350</td>
                <td>265° W</td>
                <td>High (45%)</td>
                <td>1.5</td>
            </tr>
        </table>

        <div class="building-section">
            <h4>Building Visualizations</h4>
            <div class="image-grid">
                <!-- Arc Health and Wellbeing -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-2.png" alt="Arc Health and Wellbeing Facility Plan View" class="project-image">
                    <div class="image-caption">Arc Health and Wellbeing Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-3.png" alt="Arc Health and Wellbeing Facility 3D View" class="project-image">
                    <div class="image-caption">Arc Health and Wellbeing 3D View</div>
                </div>
                
                <!-- Britannia Building -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-4.png" alt="Britannia Building Plan View" class="project-image">
                    <div class="image-caption">Britannia Building Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-5.png" alt="Britannia Building 3D View" class="project-image">
                    <div class="image-caption">Britannia Building 3D View</div>
                </div>
                
                <!-- Centre for Executive Education -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-84.png" alt="Centre for Executive Education Plan View" class="project-image">
                    <div class="image-caption">Centre for Executive Education Plan</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-85.png" alt="Centre for Executive Education 3D View" class="project-image">
                    <div class="image-caption">Centre for Executive Education 3D</div>
                </div>
                
                <!-- Charles Oakley Laboratories -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-86.png" alt="Charles Oakley Laboratories Plan View" class="project-image">
                    <div class="image-caption">Charles Oakley Labs Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-87.png" alt="Charles Oakley Laboratories 3D View" class="project-image">
                    <div class="image-caption">Charles Oakley Labs 3D View</div>
                </div>
                
                <!-- George Moore Building -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-88.png" alt="George Moore Building Plan View" class="project-image">
                    <div class="image-caption">George Moore Building Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-89.png" alt="George Moore Building 3D View" class="project-image">
                    <div class="image-caption">George Moore Building 3D View</div>
                </div>
                
                <!-- Govan Mbeki Building -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-90.png" alt="Govan Mbeki Building Plan View" class="project-image">
                    <div class="image-caption">Govan Mbeki Building Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-91.png" alt="Govan Mbeki Building 3D View" class="project-image">
                    <div class="image-caption">Govan Mbeki Building 3D View</div>
                </div>
                
                <!-- Hamish Wood Building -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-92.png" alt="Hamish Wood Building Plan View" class="project-image">
                    <div class="image-caption">Hamish Wood Building Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-93.png" alt="Hamish Wood Building 3D View" class="project-image">
                    <div class="image-caption">Hamish Wood Building 3D View</div>
                </div>
                
                <!-- Milton Street -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-94.png" alt="Milton Street Plan View" class="project-image">
                    <div class="image-caption">Milton Street Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-95.png" alt="Milton Street 3D View" class="project-image">
                    <div class="image-caption">Milton Street 3D View</div>
                </div>
                
                <!-- Students' Association -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-96.png" alt="Students' Association Plan View" class="project-image">
                    <div class="image-caption">Students' Association Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-97.png" alt="Students' Association 3D View" class="project-image">
                    <div class="image-caption">Students' Association 3D View</div>
                </div>
                
                 <!-- The Saltire Centre -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-6.png" alt="The Saltire Centre Plan View" class="project-image">
                    <div class="image-caption">The Saltire Centre Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-7.png" alt="The Saltire Centre 3D View" class="project-image">
                    <div class="image-caption">The Saltire Centre 3D View</div>
                </div>
                
                <!-- William Harley -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-8.png" alt="William Harley Plan View" class="project-image">
                    <div class="image-caption">William Harley Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-9.png" alt="William Harley 3D View" class="project-image">
                    <div class="image-caption">William Harley 3D View</div>
                </div>

                <!-- Annie Lennox -->
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-98.png" alt="Annie Lennox Plan View" class="project-image">
                    <div class="image-caption">Annie Lennox Plan View</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-99.png" alt="Annie Lennox 3D View" class="project-image">
                    <div class="image-caption">Annie Lennox 3D View</div>
                </div>
            </div>
        </div>

        <h4>PV Installation Potential</h4>
        <table class="data-table">
            <tr>
                <th>Building</th>
                <th>Installable Area (m²)</th>
                <th>Annual Output (kWh)</th>
                <th>CO₂ Reduction (tonnes)</th>
                <th>% of Building Demand</th>
            </tr>
            <tr>
                <td>Arc Health and Wellbeing</td>
                <td>900</td>
                <td>135,000</td>
                <td>60</td>
                <td>18%</td>
            </tr>
            <tr>
                <td>Britannia</td>
                <td>1,100</td>
                <td>165,000</td>
                <td>75</td>
                <td>22%</td>
            </tr>
            <tr>
                <td>Centre for Executive Ed.</td>
                <td>600</td>
                <td>90,000</td>
                <td>40</td>
                <td>15%</td>
            </tr>
            <tr>
                <td>Charles Oakley Labs</td>
                <td>750</td>
                <td>112,500</td>
                <td>50</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>George Moore</td>
                <td>950</td>
                <td>142,500</td>
                <td>65</td>
                <td>17%</td>
            </tr>
            <tr>
                <td>Govan Mbeki</td>
                <td>800</td>
                <td>120,000</td>
                <td>55</td>
                <td>19%</td>
            </tr>
            <tr>
                <td>Hamish Wood</td>
                <td>700</td>
                <td>105,000</td>
                <td>48</td>
                <td>16%</td>
            </tr>
            <tr>
                <td>Milton Street</td>
                <td>550</td>
                <td>82,500</td>
                <td>37</td>
                <td>14%</td>
            </tr>
            <tr>
                <td>Students' Association</td>
                <td>450</td>
                <td>67,500</td>
                <td>30</td>
                <td>12%</td>
            </tr>
            <tr>
                <td>The Saltire Centre</td>
                <td>1,050</td>
                <td>157,500</td>
                <td>72</td>
                <td>21%</td>
            </tr>
            <tr>
                <td>William Harley</td>
                <td>900</td>
                <td>135,000</td>
                <td>60</td>
                <td>18%</td>
            </tr>
            <tr>
                <td>Annie Lennox</td>
                <td>350</td>
                <td>52,500</td>
                <td>24</td>
                <td>10%</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>8,150</strong></td>
                <td><strong>1,222,500</strong></td>
                <td><strong>550</strong></td>
                <td><strong>15%</strong></td>
            </tr>
        </table>

        <div class="image-grid">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-26.png" alt="Estimated Energy Cost Savings per Building (£)" class="project-image">
                <div class="image-caption">Estimated Energy Cost Savings per Building</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-27.png" alt="Estimated Annual CO2 Reduction by Building" class="project-image">
                <div class="image-caption">Estimated Annual CO2 Reduction</div>
            </div>
        </div>

        <h4>Key:</h4>
        <ul>
            <li><strong>Orientation</strong>:
                <ul>
                    <li><code>172° SSE</code> = 172 degrees, South-Southeast (optimal is 180° due south)</li>
                    <li><code>Mixed</code> = Multiple roof planes with varying orientations</li>
                </ul>
            </li>
            <li><strong>Shading Impact</strong>:
                <ul>
                    <li><code>Low (&lt;10%)</code> = Minimal production loss, no optimizers needed</li>
                    <li><code>Moderate (10-25%)</code> = Recommended for power optimizers (e.g., SolarEdge)</li>
                    <li><code>High (&gt;25%)</code> = Requires microinverters (e.g., Enphase) or reconsider installation</li>
                </ul>
            </li>
            <li><strong>Structural Load</strong>:
                <ul>
                    <li>Minimum requirement: 1.5 kN/m² for solar installations</li>
                    <li>Historic buildings may require reinforcement</li>
                </ul>
            </li>
        </ul>

        <div class="highlight-box">
            <h3>Notes:</h3>
            <ol>
                <li>Output calculated at 150 kWh/m²/year (Glasgow adjusted yield, 20% efficient panels)</li>
                <li>CO₂ conversion factor: 0.44 kg/kWh (UK Grid 2023)</li>
                <li>Structural verification required per Chapter 3.5 specifications</li>
                <li>% of Building Demand based on 2022 electricity consumption data</li>
                <li>All figures rounded to nearest 500 for clarity</li>
            </ol>
        </div>

        <p><strong>Challenges Identified:</strong></p>
        <ul>
            <li>Shading (up to 45% energy loss on some buildings)</li>
            <li>Seasonal variability (winter output: 0.8 kWh/kWp/day vs. summer: 5.1 kWh/kWp/day)</li>
            <li>Grid connection capacity limitations in some campus areas</li>
            <li>Historic building constraints (Saltire Centre, Hamish Wood)</li>
            <li>Maintenance access requirements for steep roof pitches</li>
        </ul>

        <h3 class="subsection-header">4.2 Financial Viability</h3>
        <table class="data-table">
            <tr>
                <th>Factor</th>
                <th>Estimate</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td><strong>Total Installation Cost</strong></td>
                <td>£1.82M</td>
                <td>For 1.04 MW system, including contingencies</td>
            </tr>
            <tr>
                <td><strong>Government Grants Available</strong></td>
                <td>Up to £325,000</td>
                <td>Home Energy Scotland, CARES, Salix Finance</td>
            </tr>
            <tr>
                <td><strong>Simple Payback Period</strong></td>
                <td>7–10 years</td>
                <td>Depending on electricity price escalation</td>
            </tr>
            <tr>
                <td><strong>ROI (25-year lifespan)</strong></td>
                <td>12–15%</td>
                <td>Internal Rate of Return calculation</td>
            </tr>
            <tr>
                <td><strong>Smart Export Guarantee (SEG) Earnings</strong></td>
                <td>£0.03–£0.15 per kWh exported</td>
                <td>Current market rates from providers</td>
            </tr>
            <tr>
                <td><strong>REGO certificates</strong></td>
                <td>£2/MWh</td>
                <td>Renewable Energy Guarantees of Origin</td>
            </tr>
            <tr>
                <td><strong>Carbon Credit Value</strong></td>
                <td>£50/tonne CO₂</td>
                <td>Based on UK carbon pricing</td>
            </tr>
        </table>

        <h4>Building-Specific Financial Analysis</h4>
        <table class="data-table">
            <tr>
                <th>Building</th>
                <th>Capital Cost (£)</th>
                <th>Annual Savings (£)</th>
                <th>ROI (%)</th>
                <th>Simple Payback (Years)</th>
                <th>NPV (£)</th>
                <th>Payback Period (Years)</th>
            </tr>
            <tr>
                <td>Arc Health and Wellbeing</td>
                <td>262,778</td>
                <td>29,010</td>
                <td>176.0</td>
                <td>9.06</td>
                <td>72,016</td>
                <td>17</td>
            </tr>
            <tr>
                <td>Britannia</td>
                <td>49,292</td>
                <td>5,364</td>
                <td>172.1</td>
                <td>9.19</td>
                <td>12,414</td>
                <td>17</td>
            </tr>
            <tr>
                <td>Centre for Executive Ed.</td>
                <td>73,946</td>
                <td>7,935</td>
                <td>168.3</td>
                <td>9.32</td>
                <td>17,046</td>
                <td>18</td>
            </tr>
            <tr>
                <td>Charles Oakley Laboratories</td>
                <td>236,042</td>
                <td>24,525</td>
                <td>159.8</td>
                <td>9.62</td>
                <td>43,077</td>
                <td>19</td>
            </tr>
            <tr>
                <td>George Moore</td>
                <td>159,588</td>
                <td>16,665</td>
                <td>161.1</td>
                <td>9.58</td>
                <td>30,303</td>
                <td>19</td>
            </tr>
            <tr>
                <td>Govan Mbeki</td>
                <td>91,912</td>
                <td>9,945</td>
                <td>170.5</td>
                <td>9.24</td>
                <td>22,344</td>
                <td>18</td>
            </tr>
            <tr>
                <td>Hamish Wood</td>
                <td>147,056</td>
                <td>12,625.5</td>
                <td>114.6</td>
                <td>11.65</td>
                <td>-10,565</td>
                <td>Not Viable</td>
            </tr>
            <tr>
                <td>Milton Street</td>
                <td>57,234</td>
                <td>5,998.5</td>
                <td>162.0</td>
                <td>9.54</td>
                <td>11,175</td>
                <td>19</td>
            </tr>
            <tr>
                <td>Students' Association</td>
                <td>57,652</td>
                <td>6,325.5</td>
                <td>174.3</td>
                <td>9.11</td>
                <td>15,248</td>
                <td>17</td>
            </tr>
            <tr>
                <td>The Saltire Centre</td>
                <td>197,602</td>
                <td>17,490</td>
                <td>121.3</td>
                <td>11.30</td>
                <td>-6,799</td>
                <td>Not Viable</td>
            </tr>
            <tr>
                <td>William Harley</td>
                <td>127,836</td>
                <td>13,665</td>
                <td>167.2</td>
                <td>9.35</td>
                <td>28,723</td>
                <td>18</td>
            </tr>
            <tr>
                <td>Annie Lennox</td>
                <td>48,456</td>
                <td>5,212.5</td>
                <td>168.9</td>
                <td>9.30</td>
                <td>11,350</td>
                <td>18</td>
            </tr>
            <tr>
                <td><strong>Total/Average</strong></td>
                <td><strong>1,508,394</strong></td>
                <td><strong>143,760</strong></td>
                <td><strong>156.8</strong></td>
                <td><strong>9.75</strong></td>
                <td><strong>236,038</strong></td>
                <td><strong>18</strong></td>
            </tr>
        </table>

        <p><strong>Revenue Streams:</strong></p>
        <ul>
            <li>Smart Export Guarantee (SEG): £0.03–£0.15/kWh exported (50% export assumed)</li>
            <li>REGO certificates: £2/MWh (all generated electricity)</li>
            <li>Carbon offset value: £50/tonne CO₂ (voluntary market)</li>
            <li>Reduced grid dependence: £0.28/kWh avoided (2023 electricity rates)</li>
        </ul>

        <h3 class="subsection-header">4.3 Capital Expenditure Breakdown</h3>
        <table class="data-table">
            <tr>
                <th>Component</th>
                <th>Cost (£)</th>
                <th>% of Total</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td>PV Modules</td>
                <td>642,000</td>
                <td>54.4%</td>
                <td>Jinko Tiger Neo 420W panels</td>
            </tr>
            <tr>
                <td>Inverters</td>
                <td>118,000</td>
                <td>10.0%</td>
                <td>SolarEdge SE82.8K (3-phase)</td>
            </tr>
            <tr>
                <td>Mounting Systems</td>
                <td>212,000</td>
                <td>18.0%</td>
                <td>Schletter FLATTOP system</td>
            </tr>
            <tr>
                <td>Electrical Components</td>
                <td>98,000</td>
                <td>8.3%</td>
                <td>DC/AC cabling, switchgear</td>
            </tr>
            <tr>
                <td>Installation Labor</td>
                <td>110,000</td>
                <td>9.3%</td>
                <td>MCS-certified installers</td>
            </tr>
            <tr>
                <td>Design & Engineering</td>
                <td>45,000</td>
                <td>3.8%</td>
                <td>Structural assessments, grid applications</td>
            </tr>
            <tr>
                <td>Contingency</td>
                <td>60,000</td>
                <td>5.1%</td>
                <td>10% of direct costs</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>1,285,000</strong></td>
                <td><strong>100%</strong></td>
                <td>Excluding grants</td>
            </tr>
        </table>

        <h4>Funding Sources:</h4>
        <ul>
            <li>Scottish Government CARES Grant: £275,000 (maximum available)</li>
            <li>Salix Finance: £150,000 (interest-free loan)</li>
            <li>University Capital Budget: £755,000 (from sustainability fund)</li>
            <li>Carbon Trust Loan: £105,000 (low-interest)</li>
            <li>Total Funding: £1,285,000 (matches project cost)</li>
        </ul>

        <h3 class="subsection-header">4.4 Operational Economics</h3>
        <h4>Annual Financial Flows:</h4>
        <ul>
            <li><strong>Electricity Savings:</strong> £230,860 (824,500 kWh @ £0.28/kWh)</li>
            <li><strong>SEG Revenue:</strong> £41,225 (50% export @ £0.10/kWh)</li>
            <li><strong>O&M Costs:</strong> £18,500 (1.5% of CAPEX)</li>
            <li><strong>REGO Income:</strong> £2,445 (1,222.5 MWh @ £2/MWh)</li>
            <li><strong>Net Annual Benefit:</strong> £256,030</li>
        </ul>

        <h4>Financial Metrics:</h4>
        <table class="data-table">
            <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Benchmark</th>
            </tr>
            <tr>
                <td>Simple Payback</td>
                <td>8.3 years</td>
                <td>Excellent (<10 years)</td>
            </tr>
            <tr>
                <td>25-year NPV</td>
                <td>£2.1 million</td>
                <td>Highly positive</td>
            </tr>
            <tr>
                <td>Levelized Cost of Energy</td>
                <td>£0.087/kWh</td>
                <td>vs. grid £0.28/kWh</td>
            </tr>
            <tr>
                <td>Internal Rate of Return</td>
                <td>14.2%</td>
                <td>Excellent (>8%)</td>
            </tr>
            <tr>
                <td>Benefit-Cost Ratio</td>
                <td>3.2:1</td>
                <td>Highly favorable</td>
            </tr>
        </table>

        <div class="image-grid">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-19.png" alt="Initial investment costs comparison for PV panels" class="project-image">
                <div class="image-caption">Initial Investment Costs Comparison</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-20.png" alt="Payback periods comparison" class="project-image">
                <div class="image-caption">Payback Periods Comparison</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-21.png" alt="ROI comparison" class="project-image">
                <div class="image-caption">ROI Comparison</div>
            </div>
        </div>

        <h3 class="subsection-header">4.5 Optimal Technology</h3>
        <p><strong>PV Array Configuration:</strong></p>
        <ul>
            <li>Panel Type: Jinko Solar Tiger Neo 420W (N-type mono, 21.02% efficiency)</li>
            <li>System Size: 1.04MW (2,476 panels)</li>
            <li>Inverters: 12x SolarEdge SE82.8K (3-phase with optimizers)</li>
            <li>Mounting: Schletter FLATTOP system (tilt: 25°, azimuth: 180°)</li>
            <li>Monitoring: SolarEdge monitoring platform with API integration</li>
        </ul>

        <p>Compared <strong>5 high-efficiency monocrystalline panels</strong> from leading manufacturers:</p>

        <h4>Solar Panel Technical Comparison</h4>
        <table class="data-table">
            <tr>
                <th>PV Panel</th>
                <th>Efficiency</th>
                <th>Cost per Panel (£)</th>
                <th>Total System Cost (£)</th>
                <th>Annual Energy (kWh)</th>
                <th>25-year Energy (kWh)</th>
                <th>£/W</th>
            </tr>
            <tr>
                <td>SunPower M Series (SPR-M420-H-AC)</td>
                <td>21.7%</td>
                <td>553</td>
                <td>13,272</td>
                <td>9,726.9</td>
                <td>243,172.5</td>
                <td>1.33</td>
            </tr>
            <tr>
                <td>REC Group Alpha Pure-R SERIES</td>
                <td>21.8%</td>
                <td>470</td>
                <td>11,280</td>
                <td>9,726.9</td>
                <td>243,172.5</td>
                <td>1.13</td>
            </tr>
            <tr>
                <td>Panasonic EverVolt® EVERVOLT 420HK2</td>
                <td>21.7%</td>
                <td>517</td>
                <td>12,408</td>
                <td>9,726.9</td>
                <td>243,172.5</td>
                <td>1.24</td>
            </tr>
            <tr>
                <td>Maxeon 3 BLK-R 420W</td>
                <td>22.2%</td>
                <td>510</td>
                <td>12,240</td>
                <td>9,726.9</td>
                <td>243,172.5</td>
                <td>1.22</td>
            </tr>
            <tr>
                <td>Jinko Solar Tiger Neo</td>
                <td>21.02%</td>
                <td>418</td>
                <td>10,032</td>
                <td>9,726.9</td>
                <td>243,172.5</td>
                <td>1.00</td>
            </tr>
        </table>

        <div class="image-grid">
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-108.png" alt="Detailed ROI and Payback Period for SunPower M Series" class="project-image">
                <div class="image-caption">SunPower M Series ROI Analysis</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-109.png" alt="Detailed ROI and Payback Period for SunPower M Series" class="project-image">
                <div class="image-caption">SunPower M Series Payback Period</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-15.png" alt="Detailed ROI and Payback Period for REC Group Alpha Pure-R SERIES" class="project-image">
                <div class="image-caption">REC Alpha Pure-R ROI Analysis</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-16.png" alt="Detailed ROI and Payback Period for REC Group Alpha Pure-R SERIES" class="project-image">
                <div class="image-caption">REC Alpha Pure-R Payback Period</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-110.png" alt="Detailed ROI and Payback Period for Panasonic EverVolt" class="project-image">
                <div class="image-caption">Panasonic EverVolt ROI Analysis</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-111.png" alt="Detailed ROI and Payback Period for Panasonic EverVolt" class="project-image">
                <div class="image-caption">Panasonic EverVolt Payback Period</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-112.png" alt="Detailed ROI and Payback Period for Maxeon 3" class="project-image">
                <div class="image-caption">Maxeon 3 ROI Analysis</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-113.png" alt="Detailed ROI and Payback Period for Maxeon 3" class="project-image">
                <div class="image-caption">Maxeon 3 Payback Period</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-17.png" alt="Detailed ROI and Payback Period for Jinko Solar Tiger Neo" class="project-image">
                <div class="image-caption">Jinko Tiger Neo ROI Analysis</div>
            </div>
            <div class="image-card">
                <img src="/assets/img/projects/fyp/pv_design-18.png" alt="Detailed ROI and Payback Period for Jinko Solar Tiger Neo" class="project-image">
                <div class="image-caption">Jinko Tiger Neo Payback Period</div>
            </div>
        </div>

        <h4>Solar Panel Financial Comparison</h4>
        <table class="data-table">
            <tr>
                <th>PV Panel</th>
                <th>Total System Cost (£)</th>
                <th>25-year Savings (£)</th>
                <th>Payback (Years)</th>
                <th>25-year NPV (£)</th>
            </tr>
            <tr>
                <td>SunPower M Series</td>
                <td>13,272</td>
                <td>66,800</td>
                <td>7</td>
                <td>53,528</td>
            </tr>
            <tr>
                <td>REC Alpha Pure-R</td>
                <td>11,280</td>
                <td>66,800</td>
                <td>6</td>
                <td>55,520</td>
            </tr>
            <tr>
                <td>Panasonic EverVolt</td>
                <td>12,408</td>
                <td>66,800</td>
                <td>7</td>
                <td>54,392</td>
            </tr>
            <tr>
                <td>Maxeon 3</td>
                <td>12,240</td>
                <td>66,800</td>
                <td>7</td>
                <td>54,560</td>
            </tr>
            <tr>
                <td>Jinko Tiger Neo</td>
                <td>10,032</td>
                <td>66,800</td>
                <td>6</td>
                <td>56,768</td>
            </tr>
        </table>

        <h4>Solar Panel Selection Matrix</h4>
        <table class="data-table">
            <tr>
                <th>Solar Panel Model</th>
                <th>Efficiency</th>
                <th>Cost (£)</th>
                <th>Payback (years)</th>
                <th>Warranty</th>
                <th>Best for</th>
            </tr>
            <tr>
                <td>Maxeon 3 BLK-R 420W</td>
                <td>22.2%</td>
                <td>12,240</td>
                <td>7</td>
                <td>40 years</td>
                <td>Long-term reliability and maximum efficiency</td>
            </tr>
            <tr>
                <td>REC Alpha Pure-R</td>
                <td>21.8%</td>
                <td>11,280</td>
                <td>6</td>
                <td>25 years (Output), 20 years (Materials)</td>
                <td>Balance of cost and performance</td>
            </tr>
            <tr>
                <td>Jinko Solar Tiger Neo</td>
                <td>21.02%</td>
                <td>10,032</td>
                <td>6</td>
                <td>30 years (Output), 25 years (Materials)</td>
                <td>Budget constraints with good performance</td>
            </tr>
            <tr>
                <td>SunPower M Series</td>
                <td>21.7%</td>
                <td>13,272</td>
                <td>7</td>
                <td>25 years</td>
                <td>High efficiency and proven performance</td>
            </tr>
            <tr>
                <td>Panasonic EverVolt</td>
                <td>21.7%</td>
                <td>12,408</td>
                <td>7</td>
                <td>25 years</td>
                <td>Reliable performance and compact size</td>
            </tr>
        </table>

        <div class="summary-card">
            <h3>Technology Recommendation</h3>
            <p><strong>Selected Panel:</strong> Jinko Solar Tiger Neo</p>
            <ul>
                <li>Lowest initial investment cost (£10,032 for typical installation)</li>
                <li>Shortest payback period (5.73 years)</li>
                <li>Excellent warranty terms (30-year output guarantee)</li>
                <li>Proven performance in Scottish climate</li>
                <li>Good balance of efficiency and cost</li>
            </ul>
            <p><strong>Runner-Up:</strong> REC Alpha Pure-R (21.8% efficiency, £470/panel) - preferred if budget allows for higher efficiency</p>
        </div>

        <!-- Building-specific PV System Analysis -->
        <h3 class="subsection-header">4.6 Building-Specific PV System Analysis</h3>
        
        <!-- Arc Health and Wellbeing -->
        <div class="building-section">
            <h4>Arc Health and Wellbeing Facility</h4>
            <div class="image-grid">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-29.png" alt="HelioScope PV Panel Design arrangement for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">HelioScope Panel Design</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-30.png" alt="HelioScope PV Panel Annual Production Data for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">Annual Production Data</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-31.png" alt="HelioScope PV Panel Annual Production Data for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">Production Data Details</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-32.png" alt="HelioScope PV Panel Shading Analyze Data for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">Shading Analysis</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-33.png" alt="HelioScope PV Panel Shading Analyze Data for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">Shading Analysis Details</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-34.png" alt="PVsyst simulation interface for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Simulation Interface</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-35.png" alt="PVsyst simulation summary for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Simulation Summary</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-36.png" alt="PVsyst simulation parameters for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Simulation Parameters</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-37.png" alt="PVsyst simulation parameters for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Parameters Details</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-38.png" alt="PVsyst simulation main results for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Main Results</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-39.png" alt="PVsyst simulation loss diagram for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Loss Diagram</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-40.png" alt="PVsyst simulation Weather Data for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">PVsyst Weather Data</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-41.png" alt="PVsyst simulation System Production Data for Arc Health and Wellbeing" class="project-image">
                    <div class="image-caption">System Production Data</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-78.png" alt="Arc Health and Wellbeing Facility Design Specifications Diagram" class="project-image">
                    <div class="image-caption">Design Specifications</div>
                </div>
            </div>
        </div>

        <!-- Britannia Building -->
        <div class="building-section">
            <h4>Britannia Building</h4>
            <div class="image-grid">
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-42.png" alt="HelioScope PV Panel Design arrangement for Britannia Building" class="project-image">
                    <div class="image-caption">HelioScope Panel Design</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-43.png" alt="HelioScope PV Panel Annual Production Data for Britannia Building" class="project-image">
                    <div class="image-caption">Annual Production Data</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-44.png" alt="HelioScope PV Panel Annual Production Data for Britannia Building" class="project-image">
                    <div class="image-caption">Production Data Details</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-45.png" alt="HelioScope PV Panel Shading Analyze Data for Britannia Building" class="project-image">
                    <div class="image-caption">Shading Analysis</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-46.png" alt="HelioScope PV Panel Shading Analyze Data for Britannia Building" class="project-image">
                    <div class="image-caption">Shading Analysis Details</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-47.png" alt="PVsyst simulation interface for Britannia Building" class="project-image">
                    <div class="image-caption">PVsyst Simulation Interface</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-48.png" alt="PVsyst simulation summary for Britannia Building" class="project-image">
                    <div class="image-caption">PVsyst Simulation Summary</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-49.png" alt="PVsyst simulation parameters for Britannia Building" class="project-image">
                    <div class="image-caption">PVsyst Simulation Parameters</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-50.png" alt="PVsyst simulation parameters for Britannia Building" class="project-image">
                    <div class="image-caption">PVsyst Parameters Details</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-51.png" alt="PVsyst simulation main results for Britannia Building" class="project-image">
                    <div class="image-caption">PVsyst Main Results</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-52.png" alt="PVsyst simulation loss diagram for Britannia Building" class="project-image">
                    <div class="image-caption">PVsyst Loss Diagram</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-53.png" alt="PVsyst simulation System Production Data for Britannia Building" class="project-image">
                    <div class="image-caption">System Production Data</div>
                </div>
                <div class="image-card">
                    <img src="/assets/img/projects/fyp/pv_design-79.png" alt="Britannia Building Design Specifications Diagram" class="project-image">
                    <div class="image-caption">Design Specifications</div>
                </div>
            </div>
        </div>

        <!-- Centre for Executive Education -->
<div class="building-section">
    <h4>Centre for Executive Education</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-114.png" alt="HelioScope PV Panel Design arrangement for Centre for Executive Education" class="project-image">
            <div class="image-caption">HelioScope Panel Layout</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-115.png" alt="HelioScope PV Panel Annual Production Data for Centre for Executive Education" class="project-image">
            <div class="image-caption">Annual Production Forecast</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-116.png" alt="HelioScope PV Panel Annual Production Data for Centre for Executive Education" class="project-image">
            <div class="image-caption">Monthly Production Breakdown</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-117.png" alt="HelioScope PV Panel Shading Analyze Data for Centre for Executive Education" class="project-image">
            <div class="image-caption">Shading Analysis Overview</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-118.png" alt="HelioScope PV Panel Shading Analyze Data for Centre for Executive Education" class="project-image">
            <div class="image-caption">Shading Impact Details</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-119.png" alt="PVsyst simulation interface for Centre for Executive Education" class="project-image">
            <div class="image-caption">PVsyst Simulation Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-120.png" alt="PVsyst simulation summary for Centre for Executive Education" class="project-image">
            <div class="image-caption">PVsyst Performance Summary</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-121.png" alt="PVsyst simulation parameters for Centre for Executive Education" class="project-image">
            <div class="image-caption">System Configuration</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-122.png" alt="PVsyst simulation parameters for Centre for Executive Education" class="project-image">
            <div class="image-caption">Detailed Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-123.png" alt="PVsyst simulation main results for Centre for Executive Education" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-124.png" alt="PVsyst simulation loss diagram for Centre for Executive Education" class="project-image">
            <div class="image-caption">Energy Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-125.png" alt="PVsyst simulation System Production Data for Centre for Executive Education" class="project-image">
            <div class="image-caption">Production Data</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-100.png" alt="Centre for Executive Education Design Specifications Diagram" class="project-image">
            <div class="image-caption">Technical Specifications</div>
        </div>
    </div>
</div>

<!-- Charles Oakley Laboratories -->
<div class="building-section">
    <h4>Charles Oakley Laboratories</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-126.png" alt="HelioScope PV Panel Design arrangement for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Panel Array Layout</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-127.png" alt="HelioScope PV Panel Annual Production Data for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Annual Energy Yield</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-128.png" alt="HelioScope PV Panel Annual Production Data for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Seasonal Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-129.png" alt="HelioScope PV Panel Shading Analyze Data for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Shading Simulation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-130.png" alt="HelioScope PV Panel Shading Analyze Data for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Shading Mitigation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-131.png" alt="PVsyst simulation interface for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">PVsyst Model Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-132.png" alt="PVsyst simulation summary for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">System Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-133.png" alt="PVsyst simulation parameters for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Technical Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-134.png" alt="PVsyst simulation parameters for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Component Specifications</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-135.png" alt="PVsyst simulation main results for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Simulation Output</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-136.png" alt="PVsyst simulation loss diagram for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Energy Loss Breakdown</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-137.png" alt="PVsyst simulation System Production Data for Charles Oakley Laboratories" class="project-image">
            <div class="image-caption">Production Forecast</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-101.png" alt="Charles Oakley Laboratories Design Specifications Diagram" class="project-image">
            <div class="image-caption">Design Documentation</div>
        </div>
    </div>
</div>

<!-- George Moore Building -->
<div class="building-section">
    <h4>George Moore Building</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-138.png" alt="HelioScope PV Panel Design arrangement for George Moore Building" class="project-image">
            <div class="image-caption">Roof Layout Design</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-139.png" alt="HelioScope PV Panel Annual Production Data for George Moore Building" class="project-image">
            <div class="image-caption">Annual Generation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-140.png" alt="HelioScope PV Panel Annual Production Data for George Moore Building" class="project-image">
            <div class="image-caption">Monthly Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-141.png" alt="HelioScope PV Panel Shading Analyze Data for George Moore Building" class="project-image">
            <div class="image-caption">Shading Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-142.png" alt="HelioScope PV Panel Shading Analyze Data for George Moore Building" class="project-image">
            <div class="image-caption">Shading Impact</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-143.png" alt="PVsyst simulation interface for George Moore Building" class="project-image">
            <div class="image-caption">PVsyst Interface</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-144.png" alt="PVsyst simulation summary for George Moore Building" class="project-image">
            <div class="image-caption">Performance Summary</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-145.png" alt="PVsyst simulation parameters for George Moore Building" class="project-image">
            <div class="image-caption">System Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-146.png" alt="PVsyst simulation parameters for George Moore Building" class="project-image">
            <div class="image-caption">Detailed Settings</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-147.png" alt="PVsyst simulation main results for George Moore Building" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-148.png" alt="PVsyst simulation loss diagram for George Moore Building" class="project-image">
            <div class="image-caption">Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-149.png" alt="PVsyst simulation System Production Data for George Moore Building" class="project-image">
            <div class="image-caption">Energy Production</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-102.png" alt="George Moore Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Technical Drawings</div>
        </div>
    </div>
</div>

<!-- Govan Mbeki Building -->
<div class="building-section">
    <h4>Govan Mbeki Building</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-150.png" alt="HelioScope PV Panel Design arrangement for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Panel Array Configuration</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-151.png" alt="HelioScope PV Panel Annual Production Data for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Annual Output</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-152.png" alt="HelioScope PV Panel Annual Production Data for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Performance Metrics</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-153.png" alt="HelioScope PV Panel Shading Analyze Data for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Shading Simulation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-154.png" alt="HelioScope PV Panel Shading Analyze Data for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Shading Solutions</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-155.png" alt="PVsyst simulation interface for Govan Mbeki Building" class="project-image">
            <div class="image-caption">PVsyst Model</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-156.png" alt="PVsyst simulation summary for Govan Mbeki Building" class="project-image">
            <div class="image-caption">System Summary</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-157.png" alt="PVsyst simulation parameters for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Technical Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-158.png" alt="PVsyst simulation parameters for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Component Details</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-159.png" alt="PVsyst simulation main results for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Simulation Output</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-160.png" alt="PVsyst simulation loss diagram for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Energy Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-161.png" alt="PVsyst simulation System Production Data for Govan Mbeki Building" class="project-image">
            <div class="image-caption">Production Data</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-103.png" alt="Govan Mbeki Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Design Specifications</div>
        </div>
    </div>
</div>

<!-- Hamish Wood Building -->
<div class="building-section">
    <h4>Hamish Wood Building</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-162.png" alt="HelioScope PV Panel Design arrangement for Hamish Wood Building" class="project-image">
            <div class="image-caption">Panel Layout Design</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-163.png" alt="HelioScope PV Panel Annual Production Data for Hamish Wood Building" class="project-image">
            <div class="image-caption">Annual Production</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-164.png" alt="HelioScope PV Panel Annual Production Data for Hamish Wood Building" class="project-image">
            <div class="image-caption">Seasonal Variation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-165.png" alt="HelioScope PV Panel Shading Analyze Data for Hamish Wood Building" class="project-image">
            <div class="image-caption">Shading Impact</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-166.png" alt="HelioScope PV Panel Shading Analyze Data for Hamish Wood Building" class="project-image">
            <div class="image-caption">Shading Mitigation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-167.png" alt="PVsyst simulation interface for Hamish Wood Building" class="project-image">
            <div class="image-caption">PVsyst Interface</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-168.png" alt="PVsyst simulation summary for Hamish Wood Building" class="project-image">
            <div class="image-caption">Performance Summary</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-169.png" alt="PVsyst simulation parameters for Hamish Wood Building" class="project-image">
            <div class="image-caption">System Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-170.png" alt="PVsyst simulation parameters for Hamish Wood Building" class="project-image">
            <div class="image-caption">Detailed Configuration</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-171.png" alt="PVsyst simulation main results for Hamish Wood Building" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-172.png" alt="PVsyst simulation loss diagram for Hamish Wood Building" class="project-image">
            <div class="image-caption">Energy Loss Breakdown</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-173.png" alt="PVsyst simulation System Production Data for Hamish Wood Building" class="project-image">
            <div class="image-caption">Production Forecast</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-104.png" alt="Hamish Wood Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Technical Documentation</div>
        </div>
    </div>
</div>

<!-- Milton Street -->
<div class="building-section">
    <h4>Milton Street</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-174.png" alt="HelioScope PV Panel Design arrangement for Milton Street Building" class="project-image">
            <div class="image-caption">Panel Array Design</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-175.png" alt="HelioScope PV Panel Annual Production Data for Milton Street Building" class="project-image">
            <div class="image-caption">Annual Energy Yield</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-176.png" alt="HelioScope PV Panel Annual Production Data for Milton Street Building" class="project-image">
            <div class="image-caption">Monthly Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-177.png" alt="HelioScope PV Panel Shading Analyze Data for Milton Street Building" class="project-image">
            <div class="image-caption">Shading Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-178.png" alt="HelioScope PV Panel Shading Analyze Data for Milton Street Building" class="project-image">
            <div class="image-caption">Shading Solutions</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-179.png" alt="PVsyst simulation interface for Milton Street Building" class="project-image">
            <div class="image-caption">PVsyst Model Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-180.png" alt="PVsyst simulation summary for Milton Street Building" class="project-image">
            <div class="image-caption">System Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-181.png" alt="PVsyst simulation parameters for Milton Street Building" class="project-image">
            <div class="image-caption">Technical Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-182.png" alt="PVsyst simulation parameters for Milton Street Building" class="project-image">
            <div class="image-caption">Component Details</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-183.png" alt="PVsyst simulation main results for Milton Street Building" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-184.png" alt="PVsyst simulation loss diagram for Milton Street Building" class="project-image">
            <div class="image-caption">Energy Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-185.png" alt="PVsyst simulation System Production Data for Milton Street Building" class="project-image">
            <div class="image-caption">Production Data</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-105.png" alt="Milton Street Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Design Specifications</div>
        </div>
    </div>
</div>

<!-- Students' Association -->
<div class="building-section">
    <h4>Students' Association</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-186.png" alt="HelioScope PV Panel Design arrangement for Students' Association Building" class="project-image">
            <div class="image-caption">Panel Layout</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-187.png" alt="HelioScope PV Panel Annual Production Data for Students' Association Building" class="project-image">
            <div class="image-caption">Annual Generation</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-188.png" alt="HelioScope PV Panel Annual Production Data for Students' Association Building" class="project-image">
            <div class="image-caption">Seasonal Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-189.png" alt="HelioScope PV Panel Shading Analyze Data for Students' Association Building" class="project-image">
            <div class="image-caption">Shading Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-190.png" alt="HelioScope PV Panel Shading Analyze Data for Students' Association Building" class="project-image">
            <div class="image-caption">Shading Impact</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-191.png" alt="PVsyst simulation interface for Students' Association Building" class="project-image">
            <div class="image-caption">PVsyst Interface</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-192.png" alt="PVsyst simulation summary for Students' Association Building" class="project-image">
            <div class="image-caption">Performance Summary</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-193.png" alt="PVsyst simulation parameters for Students' Association Building" class="project-image">
            <div class="image-caption">System Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-194.png" alt="PVsyst simulation parameters for Students' Association Building" class="project-image">
            <div class="image-caption">Detailed Configuration</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-195.png" alt="PVsyst simulation main results for Students' Association Building" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-196.png" alt="PVsyst simulation loss diagram for Students' Association Building" class="project-image">
            <div class="image-caption">Energy Loss Breakdown</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-197.png" alt="PVsyst simulation System Production Data for Students' Association Building" class="project-image">
            <div class="image-caption">Production Forecast</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-106.png" alt="Students' Association Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Technical Drawings</div>
        </div>
    </div>
</div>

<!-- The Saltire Centre -->
<div class="building-section">
    <h4>The Saltire Centre</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-54.png" alt="HelioScope PV Panel Design arrangement for The Saltire Centre" class="project-image">
            <div class="image-caption">Panel Array Design</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-55.png" alt="HelioScope PV Panel Annual Production Data for The Saltire Centre" class="project-image">
            <div class="image-caption">Annual Energy Yield</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-56.png" alt="HelioScope PV Panel Annual Production Data for The Saltire Centre" class="project-image">
            <div class="image-caption">Monthly Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-57.png" alt="HelioScope PV Panel Shading Analyze Data for The Saltire Centre" class="project-image">
            <div class="image-caption">Shading Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-58.png" alt="HelioScope PV Panel Shading Analyze Data for The Saltire Centre" class="project-image">
            <div class="image-caption">Shading Solutions</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-59.png" alt="PVsyst simulation interface for The Saltire Centre" class="project-image">
            <div class="image-caption">PVsyst Model Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-60.png" alt="PVsyst simulation summary for The Saltire Centre" class="project-image">
            <div class="image-caption">System Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-61.png" alt="PVsyst simulation parameters for The Saltire Centre" class="project-image">
            <div class="image-caption">Technical Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-62.png" alt="PVsyst simulation parameters for The Saltire Centre" class="project-image">
            <div class="image-caption">Component Details</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-63.png" alt="PVsyst simulation main results for The Saltire Centre" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-64.png" alt="PVsyst simulation loss diagram for The Saltire Centre" class="project-image">
            <div class="image-caption">Energy Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-65.png" alt="PVsyst simulation System Production Data for The Saltire Centre" class="project-image">
            <div class="image-caption">Production Data</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-80.png" alt="The Saltire Centre Design Specifications Diagram" class="project-image">
            <div class="image-caption">Design Specifications</div>
        </div>
    </div>
</div>

<!-- William Harley -->
<div class="building-section">
    <h4>William Harley Building</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-66.png" alt="HelioScope PV Panel Design arrangement for William Harley" class="project-image">
            <div class="image-caption">Panel Array Design</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-67.png" alt="HelioScope PV Panel Annual Production Data for William Harley" class="project-image">
            <div class="image-caption">Annual Energy Yield</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-68.png" alt="HelioScope PV Panel Annual Production Data for William Harley" class="project-image">
            <div class="image-caption">Monthly Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-69.png" alt="HelioScope PV Panel Shading Analyze Data for William Harley" class="project-image">
            <div class="image-caption">Shading Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-70.png" alt="HelioScope PV Panel Shading Analyze Data for William Harley" class="project-image">
            <div class="image-caption">Shading Solutions</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-71.png" alt="PVsyst simulation interface for William Harley" class="project-image">
            <div class="image-caption">PVsyst Model Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-72.png" alt="PVsyst simulation summary for William Harley" class="project-image">
            <div class="image-caption">System Performance</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-73.png" alt="PVsyst simulation parameters for William Harley" class="project-image">
            <div class="image-caption">Technical Parameters</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-74.png" alt="PVsyst simulation parameters for William Harley" class="project-image">
            <div class="image-caption">Component Details</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-75.png" alt="PVsyst simulation main results for William Harley" class="project-image">
            <div class="image-caption">Simulation Results</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-76.png" alt="PVsyst simulation loss diagram for William Harley" class="project-image">
            <div class="image-caption">Energy Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-77.png" alt="PVsyst simulation System Production Data for William Harley" class="project-image">
            <div class="image-caption">Production Data</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-81.png" alt="William Harley Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Design Specifications</div>
        </div>
    </div>
</div>

<!-- Annie Lennox -->
<div class="building-section">
    <h4>Annie Lennox</h4>
    <div class="image-grid">
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-198.png" alt="HelioScope PV Panel Design arrangement for Annie Lennox Building" class="project-image">
            <div class="image-caption">Panel Array Design</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-199.png" alt="HelioScope PV Panel Annual Production Data for Annie Lennox Building" class="project-image">
            <div class="image-caption">Annual Production</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-200.png" alt="HelioScope PV Panel Annual Production Data for Annie Lennox Building" class="project-image">
            <div class="image-caption">Performance Metrics</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-201.png" alt="HelioScope PV Panel Shading Analyze Data for Annie Lennox Building" class="project-image">
            <div class="image-caption">Shading Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-202.png" alt="HelioScope PV Panel Shading Analyze Data for Annie Lennox Building" class="project-image">
            <div class="image-caption">Shading Solutions</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-203.png" alt="PVsyst simulation interface for Annie Lennox Building" class="project-image">
            <div class="image-caption">PVsyst Model</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-204.png" alt="PVsyst simulation summary for Annie Lennox Building" class="project-image">
            <div class="image-caption">System Summary</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-205.png" alt="PVsyst simulation parameters for Annie Lennox Building" class="project-image">
            <div class="image-caption">Technical Setup</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-206.png" alt="PVsyst simulation parameters for Annie Lennox Building" class="project-image">
            <div class="image-caption">Component Details</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-207.png" alt="PVsyst simulation main results for Annie Lennox Building" class="project-image">
            <div class="image-caption">Simulation Output</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-208.png" alt="PVsyst simulation loss diagram for Annie Lennox Building" class="project-image">
            <div class="image-caption">Energy Loss Analysis</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-209.png" alt="PVsyst simulation System Production Data for Annie Lennox Building" class="project-image">
            <div class="image-caption">Production Data</div>
        </div>
        <div class="image-card">
            <img src="/assets/img/projects/fyp/pv_design-107.png" alt="Annie Lennox Building Design Specifications Diagram" class="project-image">
            <div class="image-caption">Design Specifications</div>
        </div>
    </div>
</div>

    </div>

    <div class="content-card">
        <h2 class="section-header"><span class="section-number">5</span>Implementation Roadmap</h2>
        
        <div class="success-box">
            <h4>5.1 Phased Deployment Schedule</h4>
            <p><strong>Phase 1 (Months 1-12): Pilot Implementation</strong></p>
            <ul>
                <li><strong>Buildings:</strong> William Harley (700kW), Saltire Centre (150kW)</li>
                <li><strong>Key Activities:</strong>
                    <ul>
                        <li>Structural reinforcement (Saltire Centre only)</li>
                        <li>Grid connection upgrade (G99 application)</li>
                        <li>SCADA system installation</li>
                        <li>Staff training program</li>
                    </ul>
                </li>
                <li><strong>Budget:</strong> £850,000</li>
                <li><strong>Expected Completion:</strong> Month 12</li>
            </ul>

            <p><strong>Phase 2 (Year 2): Expansion</strong></p>
            <ul>
                <li><strong>Buildings:</strong> Arc Health (120kW), Britannia (70kW), George Moore (95kW)</li>
                <li><strong>Innovations:</strong>
                    <ul>
                        <li>Battery storage (200kWh Tesla Powerpack)</li>
                        <li>Demand response integration</li>
                        <li>Student monitoring portal</li>
                    </ul>
                </li>
                <li><strong>Budget:</strong> £435,000</li>
                <li><strong>Expected Completion:</strong> Month 24</li>
            </ul>
        </div>

        <h4>5.2 Risk Mitigation Strategies</h4>
        <table class="data-table">
            <tr>
                <th>Risk Category</th>
                <th>Likelihood</th>
                <th>Impact</th>
                <th>Mitigation Approach</th>
            </tr>
            <tr>
                <td>Shading Losses</td>
                <td>Medium</td>
                <td>High</td>
                <td>Module-level optimizers (SolarEdge HD-Wave), periodic tree trimming</td>
            </tr>
            <tr>
                <td>Grid Constraints</td>
                <td>Low</td>
                <td>High</td>
                <td>On-site consumption optimization algorithm, battery storage</td>
            </tr>
            <tr>
                <td>Policy Changes</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>10-year SEG price floor agreement, diversified revenue streams</td>
            </tr>
            <tr>
                <td>Maintenance Risks</td>
                <td>High</td>
                <td>Medium</td>
                <td>15-year O&M contract with performance guarantees, drone inspections</td>
            </tr>
            <tr>
                <td>Structural Issues</td>
                <td>Low</td>
                <td>Critical</td>
                <td>Pre-installation surveys, load testing, 5-year structural reviews</td>
            </tr>
        </table>

        <h4>5.3 Project Timeline</h4>
        <table class="data-table">
            <tr>
                <th>Milestone</th>
                <th>Duration</th>
                <th>Start Month</th>
                <th>End Month</th>
                <th>Responsible Party</th>
            </tr>
            <tr>
                <td>Feasibility Study Completion</td>
                <td>2 months</td>
                <td>1</td>
                <td>2</td>
                <td>Consultants</td>
            </tr>
            <tr>
                <td>Planning Permission</td>
                <td>3 months</td>
                <td>3</td>
                <td>5</td>
                <td>University Estates</td>
            </tr>
            <tr>
                <td>Grid Connection Approval</td>
                <td>4 months</td>
                <td>4</td>
                <td>7</td>
                <td>SSE</td>
            </tr>
            <tr>
                <td>Phase 1 Installation</td>
                <td>5 months</td>
                <td>8</td>
                <td>12</td>
                <td>MCS Contractor</td>
            </tr>
            <tr>
                <td>Commissioning & Testing</td>
                <td>1 month</td>
                <td>13</td>
                <td>13</td>
                <td>Technical Team</td>
            </tr>
            <tr>
                <td>Phase 2 Installation</td>
                <td>6 months</td>
                <td>18</td>
                <td>23</td>
                <td>MCS Contractor</td>
            </tr>
            <tr>
                <td>Full System Operational</td>
                <td>-</td>
                <td>24</td>
                <td>-</td>
                <td>University</td>
            </tr>
        </table>
    </div>

    <div class="content-card">
        <h2 class="section-header"><span class="section-number">6</span>Conclusion and Future Outlook</h2>
        
        <div class="summary-card">
            <h3>Key Outcomes</h3>
            
            <h4>1. Technical Feasibility</h4>
            <ul>
                <li><strong>South-facing roofs</strong> prioritized, with <strong>60–80% of roof areas</strong> deemed suitable for PV installation</li>
                <li><strong>Structural loads</strong> verified (1.5–2.8 kN/m²), requiring minor reinforcements for 3 buildings (£48k total)</li>
                <li><strong>Shading challenges</strong> addressed through panel-level power electronics (SolarEdge optimizers)</li>
                <li>All installations comply with <strong>BS EN 1991</strong> standards and Scottish building regulations</li>
            </ul>

            <h4>2. Energy and Environmental Impact</h4>
            <ul>
                <li><strong>Total capacity</strong>: 1.04 MWp across campus (2,476 panels)</li>
                <li><strong>Annual generation</strong>: 1.22 GWh (15% of GCU's electricity demand)</li>
                <li><strong>Carbon reduction</strong>: 550 tonnes CO₂/year (12% of GCU's Scope 2 emissions)</li>
                <li>Equivalent to removing <strong>120 cars</strong> from roads annually</li>
            </ul>

            <h4>3. Financial Analysis</h4>
            <ul>
                <li><strong>Capital cost</strong>: £1.8M (including panels, inverters, and installation)</li>
                <li><strong>Savings</strong>: £180K/year from reduced grid dependence + £65K/year SEG income</li>
                <li><strong>ROI</strong>: 8–12% IRR over 25 years, with NPV of £1.2M</li>
                <li><strong>Payback period</strong>: 7-10 years depending on electricity price escalation</li>
            </ul>

            <h4>4. Strategic Recommendations</h4>
            <ul>
                <li><strong>Phase 1</strong>: Install panels on William Harley, Arc Health (highest ROI)</li>
                <li><strong>Phase 2</strong>: Expand to remaining buildings, integrating battery storage</li>
                <li><strong>Leverage Scottish Government incentives</strong>: CARES grants, Salix Finance</li>
                <li><strong>Educational integration</strong>: Develop curriculum around the installation</li>
                <li><strong>Community engagement</strong>: Public dashboard of system performance</li>
            </ul>
        </div>

        <h3 class="subsection-header">6.1 Curriculum Development</h3>
        <p><strong>Hands-on Learning Initiatives:</strong></p>
        <ul>
            <li><strong>Renewable Energy Laboratory:</strong>
                <ul>
                    <li>Real-time data feeds from the PV system for engineering courses</li>
                    <li>Comparative analysis of panel performance (Jinko vs. REC vs. SunPower)</li>
                    <li>Shading impact studies using collected irradiance data</li>
                    <li>Energy storage experiments with the Tesla Powerpack</li>
                </ul>
            </li>
        </ul>

        <p><strong>New Course Modules:</strong></p>
        <ul>
            <li><strong>"Solar PV Systems in Northern Climates":</strong>
                <ul>
                    <li>Case studies using GCU's installation</li>
                    <li>Field measurements vs. PVsyst simulation comparisons</li>
                    <li>Financial modeling exercises based on project data</li>
                </ul>
            </li>
            <li><strong>"Smart Grid Integration":</strong>
                <ul>
                    <li>Demand response strategies</li>
                    <li>Battery storage optimization</li>
                    <li>Grid services from distributed generation</li>
                </ul>
            </li>
        </ul>

        <h3 class="subsection-header">6.2 Student Research Projects</h3>
        <p><strong>Proposed Topics:</strong></p>
        <ol>
            <li><strong>Performance Optimization:</strong>
                <ul>
                    <li>Analysis of seasonal variation (0.8 kWh/kWp/day winter vs. 5.1 kWh/kWp/day summer)</li>
                    <li>Validation of HelioScope predictions against actual output</li>
                    <li>Soiling loss mitigation strategies for urban environments</li>
                </ul>
            </li>
            <li><strong>Technology Comparison:</strong>
                <ul>
                    <li>Efficiency degradation rates of monocrystalline panels in Scottish climate</li>
                    <li>Cost-benefit analysis of bifacial panels for curved roofs (Saltire Centre)</li>
                    <li>Microinverter vs. optimizer performance in shaded conditions</li>
                </ul>
            </li>
            <li><strong>Energy Economics:</strong>
                <ul>
                    <li>Impact of SEG tariffs (£0.03-£0.15/kWh) on project ROI</li>
                    <li>Sensitivity analysis of payback period to electricity price fluctuations</li>
                    <li>Carbon credit valuation methodologies</li>
                </ul>
            </li>
        </ol>

        <div class="highlight-box">
            <h3>Future Directions</h3>
            <ul>
                <li><strong>Hybrid energy systems:</strong> Solar + hydrogen storage pilot</li>
                <li><strong>AI-driven energy management:</strong> Machine learning for generation forecasting</li>
                <li><strong>Vehicle-to-grid integration:</strong> Utilizing EV batteries as storage</li>
                <li><strong>Community energy scheme:</strong> Extending benefits to local area</li>
                <li><strong>Research partnerships:</strong> Collaboration with manufacturers on next-gen PV</li>
            </ul>
        </div>

        <div class="summary-card">
            <h3>Final Recommendation</h3>
            <p>This study demonstrates that rooftop solar PV represents a <strong>technically feasible, environmentally beneficial, and financially viable</strong> opportunity for Glasgow Caledonian University. The proposed 1.04MW system would:</p>
            <ul>
                <li>Generate <strong>1.22GWh</strong> of clean electricity annually</li>
                <li>Reduce carbon emissions by <strong>550 tonnes/year</strong></li>
                <li>Provide an <strong>8.3 year payback</strong> and 14.2% IRR</li>
                <li>Serve as a <strong>living laboratory</strong> for sustainability education</li>
            </ul>
            <p><strong>Recommended Action:</strong> Proceed with Phase 1 implementation as outlined in Section 4, with installation beginning in Month 8 following necessary approvals.</p>
        </div>
    </div>
</body>
</html>
