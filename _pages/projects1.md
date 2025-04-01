---
layout: page
title: Projects
permalink: /projects/
description: A curated collection of my engineering and innovation projects.
nav: true
nav_order: 3
display_categories: [Building Systems, Sustainability, IoT & Automation]
horizontal: false
---

<style>
  .project-category {
    margin: 3rem 0 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #2c3e50;
    color: #2c3e50;
  }
  .project-card {
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #eaeaea;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  .project-img-container {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
  }
  .project-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .project-card:hover .project-img {
    transform: scale(1.05);
  }
  .project-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(44,62,80,0.9);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
  }
</style>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <div id="{{ category | slugify }}" class="project-category">
    <h2>{{ category }}</h2>
  </div>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" | reverse %}
  
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-2 g-4">
    {% for project in sorted_projects %}
      {% include projects_horizontal.html %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {% for project in sorted_projects %}
      <div class="col mb-4">
        <div class="project-card card h-100">
          {% if project.image %}
          <div class="project-img-container">
            <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-img card-img-top">
            {% if project.year %}
            <span class="project-badge">{{ project.year }}</span>
            {% endif %}
          </div>
          {% endif %}
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            {% if project.tags %}
            <div class="mb-2">
              {% for tag in project.tags %}
              <span class="badge bg-secondary me-1">{{ tag }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>
          <div class="card-footer bg-transparent">
            {% if project.links %}
            <div class="d-flex justify-content-between">
              {% for link in project.links %}
              <a href="{{ link.url }}" class="btn btn-sm btn-outline-primary">{{ link.name }}</a>
              {% endfor %}
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}
<!-- Display projects without categories -->
{% assign sorted_projects = site.projects | sort: "importance" | reverse %}

{% if page.horizontal %}
<div class="container">
  <div class="row row-cols-1 row-cols-lg-2 g-4">
  {% for project in sorted_projects %}
    {% include projects_horizontal.html %}
  {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {% for project in sorted_projects %}
    {% include projects.html %}
  {% endfor %}
</div>
{% endif %}
{% endif %}
</div>
