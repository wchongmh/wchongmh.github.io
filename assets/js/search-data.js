// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A curated collection of my innovative engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Award-winning UK Engineering graduate with a strong technical foundation and leadership acumen, specializing in innovative building services solutions. Recognized with the SCEBE Prize for top academic performance and fully funded through the Alistair Harvey Foundation Scholarship to complete BEng/MSc degrees.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Moments from my award journey",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-bim-modeling-for-primary-school-design",
          title: 'BIM Modeling for Primary School Design',
          description: "Autodesk Revit-based BIM modeling exercise for a primary school building, including model development and documentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bim_coursework/";
            },},{id: "projects-bms-dashboard-development",
          title: 'BMS Dashboard Development',
          description: "Engineered an interactive BMS dashboard enabling real-time monitoring, control, and data visualization of building systems, including alarm management. Integrated IoT sensors with legacy infrastructure to deliver a unified, scalable platform for commercial facility operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bms-system/";
            },},{id: "projects-fire-service-system-design-residential-care-home",
          title: 'Fire Service System Design - Residential Care Home',
          description: "Comprehensive fire safety design for a Scottish residential care home, focusing on vulnerable occupants and regulatory compliance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/care-home/";
            },},{id: "projects-daylighting-design-analysis-glasgow-residential-project",
          title: 'Daylighting Design Analysis - Glasgow Residential Project',
          description: "Comprehensive daylight analysis for residential property in Glasgow using Dialux, including manual calculations and energy efficiency evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dialux_daylight/";
            },},{id: "projects-dialux-lighting-design-commercial-building-project",
          title: 'DIALux Lighting Design - Commercial Building Project',
          description: "Comprehensive lighting design for a mixed-use commercial building featuring offices, supermarket, and coffee shop using DIALux software.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dialux_lighting/";
            },},{id: "projects-high-rise-electrical-systems-cheuk-nang-centre",
          title: 'High-Rise Electrical Systems - Cheuk Nang Centre',
          description: "Comprehensive electrical design for 30-storey commercial building in Tsim Sha Tsui, including load calculations and system schematics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electrical/";
            },},{id: "projects-rooftop-solar-potential-glasgow-caledonian-university",
          title: 'Rooftop Solar Potential - Glasgow Caledonian University',
          description: "Feasibility analysis for 1MW solar PV system across 12 campus buildings, identifying 800,000 kWh annual generation potential with 7-10 year payback period.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gcu-solar/";
            },},{id: "projects-glasgow-office-building-hevacomp-design-report",
          title: 'Glasgow Office Building - Hevacomp Design Report',
          description: "Comprehensive HVAC design for a 2-story office building in Glasgow using Hevacomp software, including heating, ventilation and boiler systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hevacomp_office/";
            },},{id: "projects-building-energy-compliance-analysis-scottish-technical-standards-section-6",
          title: 'Building Energy Compliance Analysis - Scottish Technical Standards Section 6',
          description: "Comprehensive energy analysis and modifications for a Glasgow office building to comply with Section 6 of Scottish Technical Standards using IES VE software.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ies_section6/";
            },},{id: "projects-indoor-air-quality-study-library-sub-area-4",
          title: 'Indoor Air Quality Study - Library Sub-Area 4',
          description: "Comprehensive IAQ assessment and HVAC redesign for library study areas with mould mitigation strategies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/library-iaq/";
            },},{id: "projects-noise-assessment-amp-control-laboratory-204",
          title: 'Noise Assessment &amp;amp; Control - Laboratory 204',
          description: "Comprehensive noise analysis and mitigation strategies for Laboratory 204, including NC chart evaluations and ear protection zoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/noise-assessment/";
            },},{id: "projects-high-rise-plumbing-amp-fire-protection-systems-axa-center",
          title: 'High-Rise Plumbing &amp;amp; Fire Protection Systems - AXA Center',
          description: "Integrated plumbing and fire protection design for 30-storey commercial office tower in Wan Chai",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plumbing-fire/";
            },},{id: "projects-pressure-loss-analysis-in-piping-systems",
          title: 'Pressure Loss Analysis in Piping Systems',
          description: "Experimental analysis of pressure losses in pipes and fittings using HM 150.11 module at Glasgow Caledonian University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pressure-drop/";
            },},{id: "projects-public-housing-plumbing-systems-queen-39-s-hill-development",
          title: 'Public Housing Plumbing Systems - Queen&amp;#39;s Hill Development',
          description: "Comprehensive plumbing design for 3,120-unit HK housing project, including hydraulic calculations and system schematics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/queens-hill-plumbing/";
            },},{id: "projects-ultrasonic-flow-rate-measurements-gcu-plant-room",
          title: 'Ultrasonic Flow Rate Measurements - GCU Plant Room',
          description: "Field study of non-invasive flow measurement techniques in HVAC systems using ultrasonic technology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ultrasonic-flow/";
            },},{id: "projects-venturi-nozzle-flow-measurement-analysis",
          title: 'Venturi Nozzle Flow Measurement Analysis',
          description: "Experimental analysis of flow rate measurement using Venturi nozzle principles at Glasgow Caledonian University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/venturi-nozzle/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%63%68%6F%6E%67%6D%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
