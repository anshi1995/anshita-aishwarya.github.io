// ==== Project Modal Logic with Dynamic Rendering and Filtering ====

const projectsData = [
  {
    title: "Predictive Analysis of House Sale Prices",
    skills: "Python, Data Mining, ML Algorithms, Dimension Reduction, Regression Analysis",
    description: "Built a predictive model for housing sale prices for the Ames, Iowa dataset. Performed in-depth exploratory data analysis, data cleaning, dimensionality reduction, and feature engineering in Python. Tested multiple machine learning algorithms and selected Random Forest, which achieved an R² of 0.89, delivering strong predictive accuracy.",
    link: "https://github.com/anshi1995/Predictive-Analysis-of-Housing-Sale-Price-Using-Data-Mining",
    image: "../images/projects/project1.png",
    category: "python"
  },
  {
    title: "Readmission Analysis of a Diabetic Patient",
    skills: "Python, Machine Learning, Feature Engineering, PCA, Classification Models",
    description: "Analyzed inpatient records from the UCI dataset to predict the likelihood of hospital readmission among diabetic patients. Conducted exploratory data analysis with rich visualizations, handled missing values, and applied feature engineering to refine predictive variables. Trained multiple classification models and identified Logistic Regression as the best-performing model, achieving 92% accuracy. This project highlights how machine learning can uncover risk factors and support hospitals in improving patient care quality.",
    link: "https://github.com/anshi1995/Reamission-Analysis-of-Diabetic-Patients",
    image: "../images/projects/project2.png",
    category: "python"
  },
  {
    title: "Data Warehouse and ETL for Utility Management",
    skills: "Talend Studio, PostgreSQL, Data Warehousing, ETL Pipelines, DBeaver",
    description: "Designed and implemented a data warehouse and ETL pipeline to centralize utility data from multiple sources, including city building management systems and utility providers. Automated data ingestion and transformation processes to ensure accuracy and consistency. Delivered a unified repository that enables efficient reporting, analysis, and data-driven decision-making for utility management.",
    link: "https://github.com/anshi1995/Data-Warehouse-and-ETL-for-Utility-Management",
    image: "../images/projects/project3.png",
    category: "etl"
  },
  {
    title: "E-Commerce Website Database Management",
    skills: "MySQL, Data Modeling, ER Diagrams, Python, Neo4j, Graph Databases",
    description: "Developed a relational database model for an e-commerce platform specializing in electronics. Designed ER and UML diagrams, implemented schemas in MySQL, and generated sample data for testing. Built Python integration using mysql.connector and performed analytics with pandas, matplotlib, and seaborn. Additionally, modeled part of the database in Neo4j (NoSQL) and executed Cypher queries to explore graph-based relationships.",
    link: "https://github.com/anshi1995/E-commerce-Website-Database-Management",
    image: "../images/projects/project4.png",
    category: "etl"
  },
  {
    title: "Income Classification of Adult Dataset Exploration",
    skills: "Tableau, Data Analysis & Visualization, Storytelling, Correlation Analysis",
    description: "Analyzed the UCI Adult dataset to study how demographic and socio-economic factors like age, education, and marital status influence income levels. Built an interactive Tableau dashboard leveraging storytelling, correlation analysis, and calculated fields to uncover insights and visualize attribute relationships. The project demonstrates the use of data visualization and analysis to interpret how individual characteristics collectively impact financial outcomes.",
    link: "https://public.tableau.com/app/profile/anshita.aishwarya/viz/Adult_Dataset_Group4/Adult_Dataset_StoryTelling",
    image: "../images/projects/project5.png",
    category: "tableau"
  },
  {
    title: "Exploratory Data Analysis of Bike Sharing Data",
    skills: "R-Studio, Data Visualization, R Libraries - dplyr, tidyverse, ggplot2, plotly",
    description: "Performed an EDA on Boston bike-sharing data to extract KPIs for optimizing rentals. Analyzed patterns related to season, weather, temperature, and route popularity, identifying high-demand periods and underutilized routes.",
    link: "https://rpubs.com/anshitaaishwarya/883971",
    image: "../images/projects/project6.png",
    category: "r"
  },
  {
    title: "Telecom Customer Churn Analysis",
    skills: "Python, Machine Learning, Feature Engineering, Feature Selection, scikit-learn",
    description: "Built a predictive model to identify telecom customers likely to churn and uncover key factors influencing churn. Conducted exploratory data analysis, feature engineering, and feature selection, and trained multiple classification algorithms including Logistic Regression, Random Forest, and XGBoost. Logistic Regression emerged as the best model, achieving a ROC AUC of 0.828 and strong precision and recall after hyperparameter tuning. This analysis provides actionable insights for targeting high-risk customers and reducing churn.",
    link: "https://github.com/anshi1995/telco-customer-churn-analysis",
    image: "../images/projects/project7.jpg",
    category: "python"
  },
  {
    title: "Building Serverless Architecture Using AWS",
    skills: "AWS, API Gateway, Lambda, DynamoDB, PynamoDB, IAM",
    description: "Designed and implemented a serverless architecture on AWS to handle CRUD operations through HTTP APIs. Leveraged API Gateway for routing, Lambda functions for business logic, and DynamoDB for scalable, serverless data storage. Utilized Lambda Layers with PynamoDB to simplify database interactions and promote code reusability. The architecture provides a cost-effective, highly available, and scalable solution that minimizes server management while efficiently processing requests.",
    link: "https://github.com/anshi1995/Building-Serverless-Architecture-Using-AWS",
    image: "../images/projects/project8.png",
    category: "etl"
  },
  {
    title: "Google Play Store Apps Shiny Dashboard",
    skills: "R, Shiny, Data Visualization, Sentiment Analysis, dplyr, ggplot2",
    description: "Developed an interactive RShiny dashboard to analyze and visualize the Google Play Store Apps dataset. Integrated app metadata and user review data to provide insights on app categories, ratings, installs, and user sentiment. The dashboard features interactive filtering, summary statistics, sentiment analysis visualizations, and downloadable tables, enabling users to explore app market trends and understand user preferences.",
    link: "https://github.com/anshi1995/Google-Play-Store-Apps-RShiny-Dashboard",
    image: "../images/projects/project9.png",
    category: "r"
  },
  {
    title: "Time Series Analysis of Accelerometer Signals for Monitoring Human Activities",
    skills: "Python, Time-Series Analysis, Feature Engineering, Data Visualization",
    description: "Performed time-series analysis and feature engineering on accelerometer data from wearable sensors to monitor human activities such as walking, running, and climbing. Utilized natural and horizontal visibility graphs to analyze signal patterns, and extracted features to evaluate entropy and complexity, visualizing insights through scatter plots. The project demonstrates the use of sensor data and advanced time-series techniques for health monitoring and activity recognition.",
    link: "https://github.com/anshi1995/Time-Series-Analysis-of-Accelerometer-Signals-for-Monitoring-Human-Activities",
    image: "../images/projects/project10.png",
    category: "python"
  },
  {
    title: "Cluster Analysis on Real-World Indicators Data",
    skills: "R, Cluster Analysis, K-means, Hierarchical Clustering, Data Visualization",
    description: "Applied unsupervised clustering algorithms (K-means and Hierarchical) to classify countries based on indicators such as GDP, mortality rate, and life expectancy. Visualized results using dendrograms and scatter plots, and evaluated clustering quality with internal and external validation metrics. The project demonstrates how clustering can reveal meaningful patterns in complex, real-world data.",
    link: "https://rpubs.com/anshitaaishwarya/884201",
    image: "../images/projects/project11.png",
    category: "r"
  },
  {
    title: "Network Analysis of Keyword Co-Occurrence Adjacency Matrix",
    skills: "R, Network Analysis, igraph, Data Visualization",
    description: "Performed network analysis on 248 keywords from 49 items to explore relationships between keyword pairs. Built co-occurrence adjacency matrices and visualized connections using network graphs and scatter plots of degree versus strength, revealing patterns and associations within the dataset.",
    link: "https://rpubs.com/anshitaaishwarya/884364",
    image: "../images/projects/project12.png",
    category: "r"
  },
  {
    title: "Text Analysis with Elon Musk Twitter Data",
    skills: "R, Text Mining, NLP, Data Visualization",
    description: "Analyzed 10 years of Elon Musk’s tweets to identify trends and patterns in word usage over time. Conducted word frequency analysis, bigram networks, and applied Zipf’s law, visualizing insights through histograms, word clouds, and network graphs. The project demonstrates the use of text analytics to uncover evolving social media trends.",
    link: "https://rpubs.com/anshitaaishwarya/884434",
    image: "../images/projects/project13.png",
    category: "r"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  
  // Filtering Projects
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      document.querySelectorAll(".project-card").forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Rendering Projects
  const container = document.querySelector(".project-grid");
  if (!container) {
    console.error("Missing .project-grid container.");
    return;
  }
  container.innerHTML = "";
  projectsData.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.index = idx;
    card.setAttribute("data-category", p.category);
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h3 class="project-title">${p.title}</h3>
    `;
    container.appendChild(card);
  });

  // Modal wiring
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSkills = document.getElementById("modal-skills");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");
  const closeBtn = modal ? modal.querySelector(".close-btn") : null;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      const details = projectsData[index];
      if (!modal) return;
      modalTitle.textContent = details.title;
      // Render each skill as a pill
      const skillsArr = details.skills.split(',').map(s => s.trim());
      modalSkills.innerHTML = 'Skills: ' + skillsArr.map(skill => `<span class="skill-pill">${skill}</span>`).join(' ');
      modalDescription.textContent = details.description;
      modalLink.href = details.link;
      modal.classList.add("open");
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
});
