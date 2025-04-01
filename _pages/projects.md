---
layout: page
title: Projects
permalink: /projects/
description: A curated collection of my engineering and innovation projects
nav: true
nav_order: 3
display_categories: [Building Systems, IoT Innovations, Research]
horizontal: false
project_filters: true
---

<style>
/* Custom Project Styles */
.projects {
  padding: 2rem 0;
}

.category-anchor {
  scroll-margin-top: 100px;
}

.category-title {
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007bff;
  display: inline-block;
}

.project-card {
  transition: all 0.3s ease;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #eaeaea;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.project-img {
  height: 200px;
  object-fit: cover;
  width: 100%;
}

.project-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.filter-buttons {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  border: 1px solid #007bff;
  background: transparent;
  color: #007bff;
  padding: 5px 15px;
  border-radius: 20px;
  transition: all 0.3s;
}

.filter-btn:hover, .filter-btn.active {
  background: #007bff;
  color: white;
}

@media (max-width: 768px) {
  .project-img {
    height: 150px;
  }
}
</style>

<!-- Filter Buttons -->
{% if page.project_filters %}
<div class="filter-buttons">
  <button class="filter-btn active" data-filter="all">All Projects</button>
  {% for category in page.display_categories %}
  <button class="filter-btn" data-filter="{{ category | slugify }}">{{ category }}</button>
  {% endfor %}
</div>
{% endif %}

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <div id="{{ category | slugify }}" class="category-anchor">
    <h2 class="category-title">
      <i class="fas fa-{% case category %}
        {% when 'Building Systems' %} building
        {% when 'IoT Innovations' %} microchip
        {% when 'Research' %} flask
        {% else %} folder
      {% endcase %} me-2"></i>
      {{ category }}
    </h2>
  </div>
  
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "date" | reverse %}
  
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in sorted_projects %}
      {% include projects_horizontal.html %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {% for project in sorted_projects %}
      {% include projects.html %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}
<!-- Display projects without categories -->
{% assign sorted_projects = site.projects | sort: "date" | reverse %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in sorted_projects %}
      {% include projects_horizontal.html %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {% for project in sorted_projects %}
      {% include projects.html %}
    {% endfor %}
  </div>
{% endif %}
{% endif %}
</div>

<!-- Project Filtering Script -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          const categories = card.dataset.categories.split(' ');
          if (categories.includes(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
      
      // Scroll to category if not "all"
      if (filter !== 'all') {
        document.getElementById(filter).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>
