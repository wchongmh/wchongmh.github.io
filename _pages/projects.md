---
layout: page
title: Projects
permalink: /projects/
description: A curated collection of my innovative engineering projects.
nav: true
nav_order: 3
display_categories: [Building Systems, IoT Solutions, Research]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  <div class="header-intro mb-5">
    <h1 class="display-4 mb-3">Engineering Portfolio</h1>
    <p class="lead">Exploring the intersection of sustainable design and smart technologies</p>
    <hr class="divider">
  </div>

  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
    <section class="category-section mb-5">
      <a id="{{ category | slugify }}" href=".#{{ category | slugify }}" class="category-anchor">
        <h2 class="category-title">
          <i class="fas fa-{% if category == 'Building Systems' %}building{% elsif category == 'IoT Solutions' %}microchip{% else %}flask{% endif %} me-2"></i>
          {{ category }}
        </h2>
      </a>
      
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {% for project in sorted_projects %}
          <div class="col">
            <div class="project-card card h-100">
              <div class="card-img-top-container">
                {% if project.image %}
                <img src="{{ project.image }}" alt="{{ project.title }}" class="card-img-top" loading="lazy">
                {% endif %}
                <div class="project-badge">{{ project.tech | first }}</div>
              </div>
              
              <div class="card-body">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-text">{{ project.description }}</p>
                
                <div class="project-tags mb-3">
                  {% for tech in project.tech %}
                  <span class="badge bg-light text-dark">{{ tech }}</span>
                  {% endfor %}
                </div>
              </div>
              
              <div class="card-footer bg-transparent">
                <div class="project-links">
                  {% if project.github %}
                  <a href="{{ project.github }}" class="btn btn-sm btn-outline-dark" target="_blank">
                    <i class="fab fa-github"></i> Code
                  </a>
                  {% endif %}
                  {% if project.demo %}
                  <a href="{{ project.demo }}" class="btn btn-sm btn-primary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                  </a>
                  {% endif %}
                  <a href="{{ project.url | relative_url }}" class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-info-circle"></i> Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
    {% endfor %}

  {% else %}
    <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>

<style>
/* Custom Project Styles */
.header-intro {
  text-align: center;
  padding: 2rem 0;
}

.divider {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #0d6efd, #20c997);
  margin: 1.5rem auto;
  opacity: 1;
}

.category-section {
  padding: 2rem 0;
}

.category-title {
  font-weight: 600;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
  color: #212529;
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-img-top-container {
  position: relative;
  overflow: hidden;
  height: 180px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-img-top {
  transform: scale(1.05);
}

.project-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .header-intro {
    padding: 1rem 0;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
}
</style>
