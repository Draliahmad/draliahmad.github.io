# Project 2: Nanomedicine Formulation Data Analysis

## Overview
This project applies data science techniques to analyse nanostructured lipid
carrier (NLC) formulation data used in pharmaceutical drug delivery.

## Methods
- Exploratory Data Analysis (EDA)
- Correlation analysis (heatmap)
- Principal Component Analysis (PCA)
- Data standardisation
## Results & Visualisations

### Correlation Heatmap
![Correlation Heatmap](correlation_heatmap.png)

### PCA Scatter Plot
![PCA Scatter](pca_scatter.png)

### PCA Loadings Plot
![PCA Loadings](pca_loadings.png)
## Interpretation of Results

The correlation heatmap demonstrates strong interdependence between formulation composition and physicochemical stability. Encapsulation efficiency (EE%) shows a strong association with lipid composition and zeta potential, indicating the importance of surface charge in formulation stability.

Principal Component Analysis (PCA) reveals clear separation of formulations along PC1, primarily driven by particle size, encapsulation efficiency, and zeta potential. PC2 captures secondary variability related to formulation stability over time. These findings highlight key formulation parameters that can be optimised to enhance nanocarrier performance.

## Tools
Python, pandas, seaborn, scikit-learn, matplotlib

## Outcome
Identified key physicochemical parameters influencing formulation stability
and encapsulation efficiency.

## Author
Dr Ali Ahmad
