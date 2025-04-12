---
title: "Two-Story Building Energy Analysis - Glasgow Office"
category: Building Systems
description: "Comprehensive energy analysis of a Glasgow office building using Hevacomp, including heating, ventilation, and boiler systems design."
tech: [Hevacomp, BS EN 12845, HVAC Design, Thermal Analysis, Building Regulations]
image: /assets/img/projects/glasgow-office/hevacomp-0.png
importance: 1
---

<!-- DOCTYPE html -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two-Story Building Energy Analysis - Glasgow Office</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --light-bg: #f8f9fa;
            --card-bg: #ffffff;
            --text-dark: #2c3e50;
            --text-medium: #7f8c8d;
            --text-light: #95a5a6;
            --border-radius: 8px;
            --box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            --box-shadow-hover: 0 8px 24px rgba(0,0,0,0.12);
            --section-spacing: 3rem;
            --content-max-width: 1200px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background-color: var(--light-bg);
            padding: 0;
            margin: 0;
        }

        .container {
            max-width: var(--content-max-width);
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        /* Header Styles */
        .project-header {
            padding: 3rem 0 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        .project-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            line-height: 1.2;
        }

        .project-subtitle {
            font-size: 1.5rem;
            color: var(--text-medium);
            margin-bottom: 1.5rem;
            font-weight: 400;
        }

        .tag-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .category-tag {
            background: var(--secondary-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .tech-tag {
            background: var(--light-bg);
            color: var(--text-dark);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            border: 1px solid rgba(0,0,0,0.1);
            font-weight: 500;
        }

        /* Visualization Section */
        .visualization-section {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 2rem;
            margin: 2rem 0;
            box-shadow: var(--box-shadow);
        }

        .visualization-description {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            line-height: 1.7;
            color: var(--text-dark);
        }

        .visualization-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .visualization-card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .visualization-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--box-shadow-hover);
        }

        .visualization-img {
            width: 100%;
            height: auto;
            display: block;
        }

        .visualization-caption {
            padding: 1rem;
            font-size: 0.9rem;
            color: var(--text-medium);
            text-align: center;
            border-top: 1px solid rgba(0,0,0,0.05);
        }

        /* Section Styles */
        .project-section {
            margin: var(--section-spacing) 0;
        }

        .section-header {
            position: relative;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            padding-left: 3.5rem;
        }

        .section-header::before {
            content: attr(data-number);
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2.5rem;
            height: 2.5rem;
            background: var(--secondary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 700;
        }

        .section-content {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--box-shadow);
        }

        .subsection-header {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--primary-color);
            margin: 2rem 0 1rem;
            position: relative;
            padding-left: 1.5rem;
        }

        .subsection-header::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 0.5rem;
            height: 0.5rem;
            background: var(--secondary-color);
            border-radius: 50%;
        }

        /* Key Specs */
        .key-specs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }

        .spec-item {
            background: var(--secondary-color);
            color: white;
            padding: 1.5rem 1rem;
            border-radius: var(--border-radius);
            text-align: center;
            box-shadow: var(--box-shadow);
        }

        .spec-value {
            display: block;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .spec-label {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        /* Image Grids */
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 1.5rem 0;
        }

        .image-card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
            transition: transform 0.3s ease;
        }

        .image-card:hover {
            transform: translateY(-5px);
        }

        .project-image {
            width: 100%;
            height: auto;
            display: block;
        }

        .image-meta {
            padding: 1rem;
            border-top: 1px solid rgba(0,0,0,0.05);
        }

        .image-fig {
            font-weight: 600;
            color: var(--secondary-color);
            margin-right: 0.5rem;
        }

        .image-desc {
            color: var(--text-medium);
            font-size: 0.9rem;
        }

        /* Performance Grid */
        .performance-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 1.5rem 0;
        }

        .performance-item {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--box-shadow);
        }

        .performance-item h4 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .performance-item ul {
            padding-left: 1.25rem;
            margin-bottom: 1rem;
        }

        .performance-item li {
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        .performance-image {
            width: 100%;
            height: auto;
            margin: 0.5rem 0;
            border-radius: 4px;
        }

        /* System Design */
        .system-design {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }

        @media (min-width: 992px) {
            .system-design {
                grid-template-columns: 1fr 1fr;
            }
        }

        .system-image {
            position: relative;
        }

        .system-img {
            width: 100%;
            height: auto;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }

        .system-caption {
            margin-top: 0.75rem;
            font-size: 0.9rem;
            color: var(--text-medium);
        }

        .system-fig {
            font-weight: 600;
            color: var(--secondary-color);
            margin-right: 0.5rem;
        }

        .system-specs {
            background: var(--light-bg);
            padding: 1.5rem;
            border-radius: var(--border-radius);
        }

        .system-specs h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .spec-image {
            width: 100%;
            height: auto;
            margin: 0.75rem 0;
            border-radius: 4px;
            box-shadow: var(--box-shadow);
        }

        /* Boiler Calculations */
        .calculation-steps {
            margin: 2rem 0;
        }

        .calculation-step {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1rem;
            box-shadow: var(--box-shadow);
            position: relative;
            overflow: hidden;
        }

        .calculation-step.highlight {
            background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(255, 255, 255, 1) 100%);
            border-left: 4px solid var(--secondary-color);
        }

        .calculation-step h3 {
            color: var(--primary-color);
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
        }

        .calculation-result {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-top: 0.5rem;
        }

        .calculation-details {
            margin-top: 0.75rem;
            font-size: 0.95rem;
            color: var(--text-medium);
        }

        /* Conclusions */
        .conclusions-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 2rem;
        }

        @media (min-width: 768px) {
            .conclusions-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .findings, .recommendations {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--box-shadow);
        }

        .findings h3, .recommendations h3 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--light-bg);
            font-size: 1.3rem;
        }

        .findings ul {
            padding-left: 1.25rem;
            margin-bottom: 1.5rem;
        }

        .findings li {
            margin-bottom: 0.75rem;
        }

        .recommendation-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1.25rem;
        }

        .rec-icon {
            font-size: 1.25rem;
            margin-right: 1rem;
            color: var(--secondary-color);
            flex-shrink: 0;
            margin-top: 0.25rem;
        }

        .conclusion-image {
            width: 100%;
            height: auto;
            margin-top: 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .project-title {
                font-size: 2rem;
            }
            
            .project-subtitle {
                font-size: 1.25rem;
            }

            .project-meta {
              display: flex;
              gap: 15px;
              margin-bottom: 30px;
              flex-wrap: wrap;
            }

            .section-header {
                font-size: 1.5rem;
                padding-left: 3rem;
            }
            
            .section-header::before {
                width: 2.25rem;
                height: 2.25rem;
                font-size: 0.9rem;
            }
        }

        @media (max-width: 576px) {
            .container {
                padding: 0 1rem;
            }
            
            .project-title {
                font-size: 1.75rem;
            }
            
            .project-header {
                padding: 2rem 0 1.5rem;
            }
            
            .section-content {
                padding: 1.5rem;
            }
            
            .key-specs {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Project Header -->
        <header class="project-header">
            <h1 class="project-title">Two-Story Building Energy Analysis</h1>
            <p class="project-subtitle">Glasgow Office Building</p>
            <div class="tag-container">
                <span class="category-tag">Building Systems</span>
                <span class="tech-tag">Hevacomp</span>
                <span class="tech-tag">BS EN 12845</span>
                <span class="tech-tag">HVAC Design</span>
                <span class="tech-tag">Thermal Analysis</span>
                <span class="tech-tag">Building Regulations</span>
            </div>
        </header>

        <!-- Visualization Section -->
        <section class="visualization-section">
            <div class="visualization-description">
                <p>The Glasgow office building features a modern two-story design with integrated HVAC systems carefully analyzed for energy efficiency using Hevacomp software.</p>
            </div>
            <div class="visualization-grid">
                <div class="visualization-card">
                    <img src="/assets/img/projects/glasgow-office/hevacomp-2.png" 
                         alt="Ground Floor Plan" 
                         class="visualization-img"
                         loading="lazy">
                    <p class="visualization-caption">Ground floor plan layout</p>
                </div>
                <div class="visualization-card">
                    <img src="/assets/img/projects/glasgow-office/hevacomp-3.png" 
                         alt="First Floor Plan" 
                         class="visualization-img"
                         loading="lazy">
                    <p class="visualization-caption">First floor plan layout</p>
                </div>
            </div>
        </section>
        
        <!-- Project Overview Section -->
        <section class="project-section">
            <h2 class="section-header" data-number="01">
                Project Overview
            </h2>
            
            <div class="section-content">
                <p>The analysis of this two-story office building in Glasgow focused on optimizing energy performance using Hevacomp software. The building features 22 rooms across two floors with a total height of 15m. The HVAC system includes radiators connected to a condensing boiler, mechanical ventilation with heat recovery, and carefully designed building fabric to meet Scottish building regulations.</p>
                
                <div class="image-grid">
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-4.png" 
                             alt="3D Building View" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 1.</span>
                            <span class="image-desc">3D view showing building orientation and window placement</span>
                        </div>
                    </div>
                    
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-9.png" 
                             alt="Building Fabric Details" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 2.</span>
                            <span class="image-desc">Building fabric components and insulation details</span>
                        </div>
                    </div>
                </div>
                
                <div class="key-specs">
                    <div class="spec-item">
                        <span class="spec-value">2</span>
                        <span class="spec-label">Floors</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-value">22</span>
                        <span class="spec-label">Rooms</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-value">15m</span>
                        <span class="spec-label">Height</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-value">75.7kW</span>
                        <span class="spec-label">Boiler Capacity</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Building Fabric Section -->
        <section class="project-section">
            <h2 class="section-header" data-number="02">
                Building Fabric Analysis
            </h2>
            
            <div class="section-content">
                <p>The building fabric was carefully designed to meet Scottish building regulations with U-values below 0.3 W/m²K for walls and 0.2 W/m²K for roof/floor. Special attention was given to window design and airtightness to minimize heat loss.</p>

                <h3 class="subsection-header">
                    Thermal Performance
                </h3>
                
                <div class="performance-grid">
                    <div class="performance-item">
                        <h4>Walls</h4>
                        <ul>
                            <li>U-value: 0.27 W/m²K</li>
                            <li>45mm insulation thickness</li>
                            <li>Meets Scottish regulations</li>
                        </ul>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-10.png" alt="Wall U-value Regulations" class="performance-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-11.png" alt="Wall Standards" class="performance-image">
                    </div>
                    <div class="performance-item">
                        <h4>Windows</h4>
                        <ul>
                            <li>Double glazed Type 6</li>
                            <li>U-value: 1.718 W/m²K</li>
                            <li>50% glazing on N/S facades</li>
                        </ul>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-6.png" alt="Window Details" class="performance-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-7.png" alt="Window Calculations" class="performance-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-8.png" alt="Window Standards" class="performance-image">
                    </div>
                    <div class="performance-item">
                        <h4>Airtightness</h4>
                        <ul>
                            <li>0.3 air changes per hour</li>
                            <li>&lt;5 m³/h/m² at 50 Pa</li>
                            <li>Reduced infiltration losses</li>
                        </ul>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-5.png" alt="Airtightness Standards" class="performance-image">
                    </div>
                </div>

                <div class="image-card" style="max-width: 500px; margin: 0 auto;">
                    <img src="/assets/img/projects/glasgow-office/hevacomp-12.png" 
                         alt="Heat Loss Distribution" 
                         class="project-image"
                         loading="lazy"
                         style="width: 100%; height: auto;">
                    <div class="image-meta">
                        <span class="image-fig">Fig 3.</span>
                        <span class="image-desc">Heat loss distribution showing 38% infiltration and 28% glazing losses</span>
                    </div>
                </div>
                
                <div class="image-grid">
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-13.png" 
                             alt="Heat Loss Summary" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 4.</span>
                            <span class="image-desc">Summary of heat losses for all rooms</span>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-14.png" 
                             alt="Heat Loss Regulations" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 5.</span>
                            <span class="image-desc">Heat loss requirements and regulations</span>
                        </div>
                    </div>
                </div>
                
                <div class="image-grid">
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-16.png" 
                             alt="Room 0-1 Heat Loss" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 6.</span>
                            <span class="image-desc">Heat loss data for Room 0-1 (Ground Floor)</span>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-17.png" 
                             alt="Room 1-4 Heat Loss" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 7.</span>
                            <span class="image-desc">Heat loss data for Room 1-4 (First Floor)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- HVAC Systems Section -->
        <section class="project-section">
            <h2 class="section-header" data-number="03">
                HVAC System Design
            </h2>
            
            <div class="section-content">
                <p>The heating and ventilation systems were designed to provide optimal comfort while minimizing energy consumption. The design includes a Low Temperature Hot Water (LTHW) heating system with CARADON STELRAD Elite K2 radiators and a mechanical ventilation system with heat recovery.</p>

                <h3 class="subsection-header">
                    Heating System
                </h3>
                
                <div class="system-design">
                    <div class="system-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-24.png" 
                             alt="Heating System Design" 
                             class="system-img"
                             loading="lazy">
                        <p class="system-caption">
                            <span class="system-fig">Fig 8.</span>
                            <span class="system-desc">Radiator layout in the heating system (Ground Floor)</span>
                        </p>
                        
                        <img src="/assets/img/projects/glasgow-office/hevacomp-25.png" 
                             alt="LTHW System" 
                             class="system-img"
                             loading="lazy">
                        <p class="system-caption">
                            <span class="system-fig">Fig 9.</span>
                            <span class="system-desc">Isometric view of LTHW heating systems</span>
                        </p>
                    </div>
                    
                    <div class="system-specs">
                        <h4>Radiator Specifications</h4>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-18.png" alt="Radiator Data" class="spec-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-21.png" alt="Radiator Sizing" class="spec-image">
                        
                        <h4>Key Features</h4>
                        <ul>
                            <li>CARADON STELRAD Elite K2 radiators</li>
                            <li>Flow temperature: 75°C, Return: 65°C</li>
                            <li>Total heating demand: 40.2 kW</li>
                            <li>BS EN 442 compliant</li>
                            <li>Up to 94% efficiency</li>
                        </ul>
                    </div>
                </div>

                <h3 class="subsection-header">
                    Ventilation System
                </h3>
                
                <div class="system-design">
                    <div class="system-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-35.png" 
                             alt="Ventilation System Design" 
                             class="system-img"
                             loading="lazy">
                        <p class="system-caption">
                            <span class="system-fig">Fig 10.</span>
                            <span class="system-desc">Plan view of overall ventilation system (Supply & Extract)</span>
                        </p>
                        
                        <img src="/assets/img/projects/glasgow-office/hevacomp-36.png" 
                             alt="Supply Ductwork" 
                             class="system-img"
                             loading="lazy">
                        <p class="system-caption">
                            <span class="system-fig">Fig 11.</span>
                            <span class="system-desc">Isometric view of supply ductwork system (Ground Floor)</span>
                        </p>
                        
                        <img src="/assets/img/projects/glasgow-office/hevacomp-42.png" 
                             alt="Extract Ductwork" 
                             class="system-img"
                             loading="lazy">
                        <p class="system-caption">
                            <span class="system-fig">Fig 12.</span>
                            <span class="system-desc">Isometric view of extract ductwork system (Ground Floor)</span>
                        </p>
                    </div>
                    
                    <div class="system-specs">
                        <h4>Ventilation Standards</h4>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-31.png" alt="Ventilation Rates" class="spec-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-33.png" alt="Regulations" class="spec-image">
                        
                        <h4>Key Parameters</h4>
                        <ul>
                            <li>Total airflow: 792 L/s</li>
                            <li>Occupancy: 66 persons</li>
                            <li>22 diffusers total</li>
                            <li>12 L/s/person (CIBSE Guide A)</li>
                            <li>40% heat recovery</li>
                        </ul>
                        
                        <h4>Supply System Data</h4>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-38.png" alt="Supply Index Values" class="spec-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-40.png" alt="Ductwork Quantities" class="spec-image">
                        
                        <h4>Extract System Data</h4>
                        <img src="/assets/img/projects/glasgow-office/hevacomp-45.png" alt="Extract Index Values" class="spec-image">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-46.png" alt="Extract Quantities" class="spec-image">
                    </div>
                </div>
            </div>
        </section>

        <!-- Boiler Sizing Section -->
        <section class="project-section">
            <h2 class="section-header" data-number="04">
                Boiler Sizing Calculations
            </h2>
            
            <div class="section-content">
                <p>The boiler was sized to meet both the LTHW heating demand and ventilation preheat requirements, accounting for system efficiency and heat recovery.</p>
                
                <div class="calculation-steps">
                    <div class="calculation-step">
                        <h3>LTHW Heating Demand</h3>
                        <p class="calculation-result">40,228 W</p>
                    </div>
                    
                    <div class="calculation-step">
                        <h3>Ventilation Preheat</h3>
                        <div class="calculation-details">
                            <p>Mass flow rate: 1.9008 kg/s</p>
                            <p>ΔT: 24K</p>
                            <p class="calculation-result">27,918 W (after 40% recovery)</p>
                        </div>
                    </div>
                    
                    <div class="calculation-step">
                        <h3>Total Demand</h3>
                        <p class="calculation-result">68,146 W</p>
                    </div>
                    
                    <div class="calculation-step highlight">
                        <h3>Boiler Size (90% efficiency)</h3>
                        <p class="calculation-result">75,718 W (75.7 kW)</p>
                    </div>
                </div>
                
                <div class="image-card">
                    <img src="/assets/img/projects/glasgow-office/hevacomp-26.png" 
                         alt="Boiler Arrangement" 
                         class="project-image"
                         loading="lazy">
                    <div class="image-meta">
                        <span class="image-fig">Fig 13.</span>
                        <span class="image-desc">Boiler arrangement with flow temp 75°C & return temp 65°C</span>
                    </div>
                </div>
                
                <div class="image-grid">
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-27.png" 
                             alt="Heating Pipe System" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 14.</span>
                            <span class="image-desc">Heating pipe system for boiler</span>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-28.png" 
                             alt="Heating Pump Data" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 15.</span>
                            <span class="image-desc">Heating pump specifications</span>
                        </div>
                    </div>
                </div>
                
                <div class="image-grid">
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-29.png" 
                             alt="Pipework Quantities" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 16.</span>
                            <span class="image-desc">Pipework quantities for boiler system</span>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="/assets/img/projects/glasgow-office/hevacomp-30.png" 
                             alt="Input Data" 
                             class="project-image"
                             loading="lazy">
                        <div class="image-meta">
                            <span class="image-fig">Fig 17.</span>
                            <span class="image-desc">Data input for heating pipe system</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Conclusions Section -->
        <section class="project-section">
            <h2 class="section-header" data-number="05">
                Conclusions & Recommendations
            </h2>
            
            <div class="section-content">
                <div class="conclusions-grid">
                    <div class="findings">
                        <h3>Key Findings</h3>
                        <ul>
                            <li>Total building heat losses: 35,144 W</li>
                            <li>Infiltration accounts for 38% of heat loss</li>
                            <li>Window glazing contributes 28% of heat loss</li>
                            <li>Ventilation system requires 792 L/s airflow</li>
                            <li>Optimal boiler size: 75.7 kW</li>
                        </ul>
                        
                        <img src="/assets/img/projects/glasgow-office/hevacomp-32.png" alt="Ventilation Calculations" class="conclusion-image">
                    </div>
                    
                    <div class="recommendations">
                        <h3>Improvement Recommendations</h3>
                        <div class="recommendation-item">
                            <div class="rec-icon">🔄</div>
                            <p>Install thermostatic radiator valves (TRVs) for better control</p>
                        </div>
                        <div class="recommendation-item">
                            <div class="rec-icon">💨</div>
                            <p>Increase supply and extract duct sizes for improved ventilation</p>
                        </div>
                        <div class="recommendation-item">
                            <div class="rec-icon">🧊</div>
                            <p>Enhance insulation to reduce infiltration losses</p>
                        </div>
                        <div class="recommendation-item">
                            <div class="rec-icon">☀️</div>
                            <p>Consider heat recovery ventilation system upgrades</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
</html>
