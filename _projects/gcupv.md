---
title: "Rooftop Solar Potential - Glasgow Caledonian University"
category: Research
description: "Feasibility analysis for 1MW solar PV system across 12 campus buildings, identifying 800,000 kWh annual generation potential with 7-10 year payback period."
tech: [PVsyst, HelioScope, AutoCAD, SolarGIS, Financial Modeling, Carbon Accounting]
image: /assets/img/projects/fyp/pv_design-000.png
importance: 1
---

<!-- DOCTYPE html -->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rooftop Solar Potential - Glasgow Caledonian University</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
        }
        .tech-item {
            background-color: #e8f4fc;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 0.9em;
        }
        .project-image {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
            border: 1px solid #ddd;
        }
        .highlight {
            background-color: #fffde7;
            padding: 15px;
            border-left: 4px solid #ffd600;
            margin: 20px 0;
        }
        .key-points {
            margin-left: 20px;
        }
        .comparison-table {
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <header>
        <h1>Rooftop Solar Potential - Glasgow Caledonian University</h1>
        <div class="tech-list">
            <span class="tech-item">PVsyst</span>
            <span class="tech-item">HelioScope</span>
            <span class="tech-item">AutoCAD</span>
            <span class="tech-item">SolarGIS</span>
            <span class="tech-item">Financial Modeling</span>
            <span class="tech-item">Carbon Accounting</span>
        </div>
        <img src="/assets/img/projects/fyp/pv_design-0.png" alt="PV System Design" class="project-image">
    </header>

    <section>
        <h2>Study on the Development Potential and Energy Incentives of Rooftop Renewable Energy Applications in Glasgow Caledonian University Campus</h2>
        <p>This project evaluates the feasibility of installing rooftop photovoltaic (PV) systems across 12 buildings at Glasgow Caledonian University (GCU). Through spatial analysis, energy simulations, and financial modeling, it identifies optimal solar panel configurations to reduce carbon emissions, lower energy costs, and advance the university's sustainability goals. The study integrates climatic data, structural constraints, and regulatory incentives to deliver actionable recommendations.</p>
    </section>

    <section>
        <h2>Executive Summary</h2>
        <p>Glasgow Caledonian University, committed to its "University for the Common Good" mission, seeks to expand its renewable energy capacity through rooftop solar installations. This project:</p>
        
        <div class="key-points">
            <p><strong>1. Assesses 12 campus buildings</strong> (e.g., Saltire Centre, Hamish Wood) for PV potential using Google Earth, HelioScope, and PVsyst simulations.</p>
            <p><strong>2. Analyzes Glasgow's climate</strong>, confirming viable solar energy generation (~1,100 sun hours/year) despite cloud cover, with cooler temperatures enhancing panel efficiency.</p>
            <p><strong>3. Identifies 8,150 m² of installable rooftop space</strong>, capable of generating <strong>1.22 GWh annually</strong>—offsetting <strong>550 tonnes of CO₂/year</strong> (equivalent to 125 UK homes' emissions).</p>
            <p><strong>4. Recommends monocrystalline panels</strong> for high efficiency (15–22%) and space optimization, with microinverters to mitigate shading impacts.</p>
            <p><strong>5. Projects financial viability</strong>:</p>
            <ul>
                <li><strong>£1.8M initial investment</strong> (offset by £30K–£50K grants and interest-free loans).</li>
                <li><strong>7–10 year payback period</strong> via energy savings and Smart Export Guarantee (SEG) revenue.</li>
            </ul>
            <p><strong>6. Aligns with GCU's EcoCampus Platinum and net-zero targets</strong>, while serving as an educational tool for sustainability programs.</p>
        </div>

        <div class="highlight">
            <h3>Key Differentiators:</h3>
            <ul>
                <li>Hybrid mounting systems for curved roofs</li>
                <li>IoT-enabled performance monitoring</li>
                <li>Integrated curriculum development</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>1. Introduction and Contextual Background</h2>
        <p>The research addresses the growing importance of renewable energy adoption in higher education institutions, focusing on Glasgow Caledonian University's potential for rooftop solar photovoltaic (PV) installations.</p>
        
        <h3>Key Motivations:</h3>
        <ul>
            <li>Universities consume energy comparable to small cities, making them ideal for sustainable energy projects.</li>
            <li>Scotland aims for 4-6 GW of solar capacity by 2030, creating opportunities for institutional participation.</li>
            <li>GCU has demonstrated leadership through its EcoCampus Platinum certification and renewable energy initiatives.</li>
        </ul>

        <h3>Research Objectives:</h3>
        <ol>
            <li>Evaluate the technical feasibility of rooftop PV systems across GCU's campus buildings.</li>
            <li>Identify optimal panel placement considering structural and environmental factors.</li>
            <li>Analyze economic viability through cost-benefit projections.</li>
            <li>Develop implementation recommendations aligned with GCU's sustainability strategy.</li>
        </ol>
    </section>

    <section>
        <h2>2. Methodology and Approach</h2>
        <h3>2.1 Technical Assessment Framework</h3>
        <p>The study employed a multi-dimensional analytical approach:</p>
        
        <h4>Building Selection Criteria:</h4>
        <ul>
            <li>Roof area > 400m²</li>
            <li>Structural integrity assessments</li>
            <li>Orientation and shading analysis</li>
            <li>Energy consumption patterns</li>
        </ul>

        <h4>Data Collection Methods:</h4>
        <ol>
            <li><strong>Geospatial Analysis:</strong>
                <ul>
                    <li>High-resolution satellite imagery (Google Earth Pro)</li>
                    <li>LiDAR data for 3D modeling</li>
                    <li>On-site photographic surveys</li>
                </ul>
            </li>
            <li><strong>Climate Data Integration:</strong>
                <ul>
                    <li>NASA POWER dataset (2001-2020)</li>
                    <li>Met Office historical weather patterns</li>
                    <li>Solar irradiance models (PVGIS)</li>
                </ul>
            </li>
            <li><strong>Structural Evaluation:</strong>
                <ul>
                    <li>Roof load capacity assessments</li>
                    <li>Wind load calculations (BS EN 1991-1-4)</li>
                    <li>Snow load analysis (Scottish building standards)</li>
                </ul>
            </li>
        </ol>

        <h4>Software Tools:</h4>
        <ul>
            <li><strong>HelioScope:</strong> Shading analysis, module-level energy yield predictions.</li>
            <li><strong>PVsyst:</strong> Hourly performance simulation, economic modeling.</li>
            <li><strong>AutoCAD:</strong> Precise rooftop layouts and system schematics.</li>
        </ul>

        <h3>2.2 Energy Modeling Approach</h3>
        <h4>PV System Parameters:</h4>
        <ul>
            <li>Panel tilt angles optimized for latitude (55.86°N).</li>
            <li>Azimuth adjustments for each building.</li>
            <li>Temperature derating factors.</li>
        </ul>

        <h4>Energy Simulation:</h4>
        <ul>
            <li>Utilized HelioScope and PVsyst software</li>
            <li>Incorporated Glasgow-specific climate data:
                <ul>
                    <li>Average solar irradiance: 2.8 kWh/m²/day</li>
                    <li>Annual sunlight hours: ≈1,100</li>
                    <li>Temperature and cloud cover patterns</li>
                </ul>
            </li>
        </ul>

        <h4>Validation Methods:</h4>
        <ul>
            <li>Comparison with existing university installations.</li>
            <li>Sensitivity analysis for key variables.</li>
        </ul>

        <h4>Technology Comparison:</h4>
        <div class="comparison-table">
            <table>
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
                    <td>Temperature Coeff.</td>
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
            </table>
        </div>

        <h4>Case Studies from Other Universities</h4>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>University</th>
                    <th>PV Capacity</th>
                    <th>Key Findings</th>
                </tr>
                <tr>
                    <td><strong>UC Davis (USA)</strong></td>
                    <td>16 MW</td>
                    <td>Saves <strong>$1.35M/year</strong>, reduces <strong>14,000 tonnes CO₂/year</strong>.</td>
                </tr>
                <tr>
                    <td><strong>University of Queensland (Australia)</strong></td>
                    <td>3.275 MW</td>
                    <td>Generates <strong>6.3M kWh/year</strong>, used for research.</td>
                </tr>
            </table>
        </div>

        <h4>Structural Analysis:</h4>
        <ul>
            <li>All roofs meet BS EN 1991-1-4 wind load requirements</li>
            <li>Snow load capacity exceeds Scottish 50-year maximum (1.2 kN/m²)</li>
            <li>Recommended reinforcement for 3 buildings (total cost: £48,000)</li>
        </ul>

        <h3>2.2 System Design Specifications</h3>
        <h4>Performance Simulation (PVsyst):</h4>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>Parameter</th>
                    <th>Annual Value</th>
                </tr>
                <tr>
                    <td>Specific Yield</td>
                    <td>892 kWh/kWp</td>
                </tr>
                <tr>
                    <td>Performance Ratio</td>
                    <td>82.3%</td>
                </tr>
                <tr>
                    <td>System Losses</td>
                    <td>17.7% (including 4.2% soiling)</td>
                </tr>
            </table>
        </div>
    </section>

    <section>
        <h2>3. Key Findings and Analysis</h2>
        <h3>3.1 Glasgow Caledonian University PV Panel Feasibility Analysis</h3>
        <p><strong>Total Potential:</strong> ~1 MW solar capacity across 12 buildings.</p>
        
        <h4>Building Rooftop Suitability</h4>
        <div class="comparison-table">
            <table>
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
                <!-- Additional rows for other buildings -->
            </table>
        </div>

        <h4>PV Installation Potential</h4>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>Building</th>
                    <th>Installable Area (m²)</th>
                    <th>Annual Output (kWh)</th>
                    <th>CO₂ Reduction (tonnes)</th>
                </tr>
                <tr>
                    <td>Arc Health and Wellbeing</td>
                    <td>900</td>
                    <td>135,000</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>Britannia</td>
                    <td>1,100</td>
                    <td>165,000</td>
                    <td>75</td>
                </tr>
                <!-- Additional rows for other buildings -->
            </table>
        </div>

        <h4>Key:</h4>
        <ul>
            <li><strong>Orientation</strong>:
                <ul>
                    <li><code>172° SSE</code> = 172 degrees, South-Southeast</li>
                    <li><code>Mixed</code> = Multiple roof planes with varying orientations</li>
                </ul>
            </li>
            <li><strong>Shading Impact</strong>:
                <ul>
                    <li><code>Low (&lt;10%)</code> = Minimal production loss</li>
                    <li><code>Moderate (10-25%)</code> = Recommended for power optimizers</li>
                    <li><code>High (&gt;25%)</code> = Requires microinverters</li>
                </ul>
            </li>
        </ul>

        <div class="highlight">
            <p><strong>Notes:</strong></p>
            <ol>
                <li>Output calculated at 150 kWh/m²/year (Glasgow adjusted yield)</li>
                <li>CO₂ conversion factor: 0.44 kg/kWh (UK Grid 2023)</li>
                <li>Structural verification required per Chapter 3.5 specifications</li>
            </ol>
        </div>

        <p><strong>Challenges:</strong></p>
        <ul>
            <li>Shading (up to 23% energy loss).</li>
            <li>Seasonal variability (winter output: 0.8 kWh/kWp/day vs. summer: 5.1 kWh/kWp/day).</li>
        </ul>

        <h3>3.2 Financial Viability</h3>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>Factor</th>
                    <th>Estimate</th>
                </tr>
                <tr>
                    <td><strong>Installation Cost</strong></td>
                    <td>£1.2M (for 1 MW system)</td>
                </tr>
                <tr>
                    <td><strong>Government Grants</strong></td>
                    <td>Up to £300,000 (Home Energy Scotland)</td>
                </tr>
                <tr>
                    <td><strong>Payback Period</strong></td>
                    <td>7–10 years</td>
                </tr>
                <tr>
                    <td><strong>ROI (25-year lifespan)</strong></td>
                    <td>12–15%</td>
                </tr>
                <tr>
                    <td><strong>Smart Export Guarantee (SEG) Earnings</strong></td>
                    <td>£0.03–£0.15 per kWh exported</td>
                </tr>
            </table>
        </div>

        <div class="comparison-table">
            <table>
                <tr>
                    <th>Building</th>
                    <th>Capital Cost (£)</th>
                    <th>Annual Savings (£)</th>
                    <th>ROI (%)</th>
                    <th>Simple Payback Time (Years)</th>
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
                <!-- Additional rows for other buildings -->
            </table>
        </div>

        <p><strong>Revenue Streams:</strong></p>
        <ul>
            <li>Smart Export Guarantee (SEG): £0.03–£0.15/kWh exported.</li>
            <li>REGO certificates: £2/MWh.</li>
        </ul>

        <h3>3.3 Capital Expenditure Breakdown</h3>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>Component</th>
                    <th>Cost (£)</th>
                    <th>% of Total</th>
                </tr>
                <tr>
                    <td>PV Modules</td>
                    <td>642,000</td>
                    <td>54.4%</td>
                </tr>
                <tr>
                    <td>Inverters</td>
                    <td>118,000</td>
                    <td>10.0%</td>
                </tr>
                <tr>
                    <td>Mounting Systems</td>
                    <td>212,000</td>
                    <td>18.0%</td>
                </tr>
                <tr>
                    <td>Electrical</td>
                    <td>98,000</td>
                    <td>8.3%</td>
                </tr>
                <tr>
                    <td>Installation</td>
                    <td>110,000</td>
                    <td>9.3%</td>
                </tr>
            </table>
        </div>

        <p><strong>Funding Sources:</strong></p>
        <ul>
            <li>Scottish Government CARES Grant: £275,000</li>
            <li>Salix Finance: £150,000</li>
            <li>University Capital Budget: £755,000</li>
        </ul>

        <h3>3.4 Operational Economics</h3>
        <p><strong>Annual Financial Flows:</strong></p>
        <ul>
            <li>Electricity Savings: £230,860 (824,500 kWh @ £0.28/kWh)</li>
            <li>SEG Revenue: £41,225 (50% export @ £0.10/kWh)</li>
            <li>O&M Costs: £18,500 (1.5% of CAPEX)</li>
        </ul>

        <p><strong>Financial Metrics:</strong></p>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>Metric</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Simple Payback</td>
                    <td>8.3 years</td>
                </tr>
                <tr>
                    <td>25-year NPV</td>
                    <td>£2.1 million</td>
                </tr>
                <tr>
                    <td>Levelized Cost</td>
                    <td>£0.087/kWh</td>
                </tr>
                <tr>
                    <td>Internal Rate Return</td>
                    <td>14.2%</td>
                </tr>
            </table>
        </div>

        <h3>3.5 Optimal Technology</h3>
        <p><strong>PV Array Configuration:</strong></p>
        <ul>
            <li>Panel Type: Jinko Solar Tiger Neo</li>
            <li>System Size: 1.04MW (2,476 panels)</li>
            <li>Inverters: 12x SolarEdge SE82.8K (3-phase)</li>
            <li>Mounting: Schletter FLATTOP system (tilt: 25°)</li>
            <li>Compared <strong>5 high-efficiency monocrystalline panels</strong> (SunPower, REC, Panasonic, Maxeon, Jinko).</li>
        </ul>

        <h4>Solar Panel Comparison</h4>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>PV Panel</th>
                    <th>Efficiency</th>
                    <th>Cost per Panel (£)</th>
                    <th>Total System Cost (£)</th>
                    <th>Estimated Annual Energy Production (kWh/year)</th>
                    <th>Total Energy Production over 25 years (kWh)</th>
                    <th>Cost per Watt (£/W)</th>
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
                <!-- Additional rows for other panels -->
            </table>
        </div>

        <div class="comparison-table">
            <table>
                <tr>
                    <th>PV Panel</th>
                    <th>Total System Cost ($)</th>
                    <th>Total Energy Savings over 25 years ($)</th>
                    <th>Payback Period (Years)</th>
                </tr>
                <tr>
                    <td>SunPower M Series (SPR-M420-H-AC)</td>
                    <td>13,272</td>
                    <td>66,800</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>REC Group Alpha Pure-R SERIES</td>
                    <td>11,280</td>
                    <td>66,800</td>
                    <td>6</td>
                </tr>
                <!-- Additional rows for other panels -->
            </table>
        </div>

        <div class="comparison-table">
            <table>
                <tr>
                    <th>Solar Panel Model</th>
                    <th>Efficiency</th>
                    <th>Cost (£)</th>
                    <th>Payback Period (years)</th>
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
                    <td>REC Group Alpha Pure-R SERIES</td>
                    <td>21.8%</td>
                    <td>11,280</td>
                    <td>6</td>
                    <td>25 years (Output), 20 years (Materials)</td>
                    <td>Balance of cost and performance</td>
                </tr>
                <!-- Additional rows for other panels -->
            </table>
        </div>

        <ul>
            <li><strong>Recommended Panel</strong>: Jinko Solar Tiger Neo (lowest initial investment cost (£10,032) and the shortest payback period (5.73 years))</li>
            <li><strong>Runner-Up</strong>: REC Alpha Pure-R (21.8% efficiency, £470/panel).</li>
        </ul>
    </section>

    <section>
        <h2>4. Implementation Roadmap</h2>
        <h3>4.1 Phased Deployment Schedule</h3>
        <p><strong>Phase 1 (Months 1-12):</strong></p>
        <ul>
            <li>Buildings: William Harley (700kW), Saltire Centre (150kW)</li>
            <li>Key Activities:
                <ul>
                    <li>Structural reinforcement</li>
                    <li>Grid connection upgrade (G99 application)</li>
                    <li>SCADA system installation</li>
                </ul>
            </li>
        </ul>

        <p><strong>Phase 2 (Year 2):</strong></p>
        <ul>
            <li>Buildings: Arc Health (120kW), Britannia (70kW)</li>
            <li>Innovations:
                <ul>
                    <li>Battery storage (200kWh Tesla Powerpack)</li>
                    <li>Demand response integration</li>
                </ul>
            </li>
        </ul>

        <h3>4.2 Risk Mitigation Strategies</h3>
        <div class="comparison-table">
            <table>
                <tr>
                    <th>Risk Category</th>
                    <th>Mitigation Approach</th>
                </tr>
                <tr>
                    <td>Shading Losses</td>
                    <td>Module-level optimizers (SolarEdge HD-Wave)</td>
                </tr>
                <tr>
                    <td>Grid Constraints</td>
                    <td>On-site consumption optimization algorithm</td>
                </tr>
                <tr>
                    <td>Policy Changes</td>
                    <td>10-year SEG price floor agreement</td>
                </tr>
                <tr>
                    <td>Maintenance Risks</td>
                    <td>15-year O&M contract with performance guarantees</td>
                </tr>
            </table>
        </div>
    </section>

    <section>
        <h2>5. Conclusion and Future Outlook</h2>
        <h3>Key Outcomes</h3>
        
        <h4>1. Technical Feasibility</h4>
        <ul>
            <li><strong>South-facing roofs</strong> prioritized, with <strong>60–80% of roof areas</strong> deemed suitable for PV installation.</li>
            <li><strong>Structural loads</strong> verified (1.5–2.8 kN/m²), requiring minor reinforcements for older buildings.</li>
            <li><strong>Shading challenges</strong> addressed through panel-level power electronics (e.g., SolarEdge optimizers).</li>
        </ul>

        <h4>2. Energy and Environmental Impact</h4>
        <ul>
            <li><strong>Total capacity</strong>: 1.2 MWp across campus.</li>
            <li><strong>Annual generation</strong>: 1.22 GWh (15% of GCU's electricity demand).</li>
            <li><strong>Carbon reduction</strong>: 550 tonnes CO₂/year (12% of GCU's Scope 2 emissions).</li>
        </ul>

        <h4>3. Financial Analysis</h4>
        <ul>
            <li><strong>Capital cost</strong>: £1.8M (including panels, inverters, and installation).</li>
            <li><strong>Savings</strong>: £180K/year from reduced grid dependence + £65K/year SEG income.</li>
            <li><strong>ROI</strong>: 8–12% IRR over 25 years, with NPV of £1.2M.</li>
        </ul>

        <h4>4. Strategic Recommendations</h4>
        <ul>
            <li><strong>Phase 1</strong>: Install panels on Saltire Centre, Arc Health, and William Harley (highest ROI).</li>
            <li><strong>Phase 2</strong>: Expand to remaining buildings, integrating battery storage for resilience.</li>
            <li><strong>Leverage Scottish Government incentives</strong>: Renewable Energy Generation Relief and Home Energy Scotland grants.</li>
        </ul>

        <p><strong>Future Directions:</strong></p>
        <ul>
            <li>Hybrid systems (solar + hydrogen storage).</li>
            <li>AI-driven energy management.</li>
        </ul>

        <h3>5.1 Curriculum Development</h3>
        <p><strong>Hands-on Learning Initiatives:</strong></p>
        <ul>
            <li><strong>Renewable Energy Laboratory:</strong>
                <ul>
                    <li>Real-world dataset integration from the PV system for engineering courses</li>
                    <li>Comparative analysis of panel performance (Jinko vs. REC vs. SunPower)</li>
                    <li>Shading impact studies using collected irradiance data</li>
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
        </ul>

        <h3>5.2 Student Research Projects</h3>
        <p><strong>Proposed Topics:</strong></p>
        <ol>
            <li><strong>Performance Optimization:</strong>
                <ul>
                    <li>Analysis of seasonal variation (0.8 kWh/kWp/day winter vs. 5.1 kWh/kWp/day summer)</li>
                    <li>Validation of HelioScope predictions against actual output</li>
                </ul>
            </li>
            <li><strong>Technology Comparison:</strong>
                <ul>
                    <li>Efficiency degradation rates of monocrystalline panels in Scottish climate</li>
                    <li>Cost-benefit analysis of bifacial panels for curved roofs (Saltire Centre)</li>
                </ul>
            </li>
            <li><strong>Energy Economics:</strong>
                <ul>
                    <li>Impact of SEG tariffs (£0.03-£0.15/kWh) on project ROI</li>
                    <li>Sensitivity analysis of payback period to electricity price fluctuations</li>
                </ul>
            </li>
        </ol>
    </section>
</body>
</html>
