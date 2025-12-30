# 📊 Data Science Project: Multivariate Analysis of Nanostructured Lipid Carrier (NLC) Formulations

## 🔬 Project Overview
This project applies data science and multivariate statistical techniques to analyse physicochemical properties of nanostructured lipid carrier (NLC) formulations used for drug delivery.  
The aim is to identify key formulation parameters driving variability and to demonstrate how principal component analysis (PCA) can support rational nanomedicine optimisation.

## 🎯 Objectives
- Perform exploratory data analysis (EDA) on NLC formulation data  
- Apply standardisation and PCA to reduce dimensionality  
- Identify key variables driving formulation variability  
- Visualise multivariate relationships using PCA score and loadings plots  

## 🧪 Dataset Description
The dataset includes experimentally relevant formulation parameters:

| Variable | Description |
|--------|------------|
| Particle_Size_nm | Mean particle size of NLCs (nm) |
| PDI | Polydispersity index |
| Zeta_Potential_mV | Surface charge (mV) |
| Encapsulation_Efficiency_% | Drug encapsulation efficiency (%) |

## 🧠 Methods
### Data Preprocessing
Numerical features were standardised using StandardScaler to account for different measurement units.

### Principal Component Analysis
PCA was applied to reduce dimensionality and identify dominant sources of variance across formulations.

### PCA Loadings
Loadings analysis revealed that particle size and encapsulation efficiency dominated PC1, while PDI and zeta potential primarily influenced PC2.

## 📈 Key Results
- PCA revealed clear separation between NLC formulations  
- Particle size and encapsulation efficiency were the primary drivers of formulation variability  
- Multivariate analysis highlighted trade-offs between stability and drug loading  

## 🛠️ Technologies Used
- Python  
- pandas, numpy  
- scikit-learn  
- matplotlib, seaborn  
- Jupyter Notebook  

## 💊 Relevance to Pharmaceutical R&D
This project demonstrates the application of multivariate data analysis to formulation development and nanomedicine research, directly relevant to pharmaceutical R&D and translational science.

## 🚀 Future Extensions
- Regression modelling for encapsulation efficiency prediction  
- Larger experimental datasets  
- Integration with optimisation algorithms  

## 👨‍🔬 Author
**Ali Ahmad**  
Clinical & Molecular Microbiology | Drug Discovery & Development  
