# 🧪 ML Lab Work 01: Real-Time Data Collection via API

**Course:** Machine Learning Lab  
**Lab Assignment:** 01  
**Topic:** Data Acquisition, Dataset Generation (CSV), and Version Control  

---

## 🎯 Aim / Objective
To collect real-time weather data for multiple cities using the OpenWeatherMap API in Google Colab, structure it using Pandas, export the final dataset into `.csv` format, and manage version control using GitHub.

---

## 🛠️ Tools & Technologies
* **Language:** Python 3.x
* **Environment:** Google Colab
* **Libraries:** `requests`, `pandas`
* **API:** OpenWeatherMap API
* **Version Control:** Git & GitHub

---

## 📋 Methodology & Steps

1. **API Integration:** Sent HTTP GET requests to OpenWeatherMap REST API endpoint.
2. **Data Parsing:** Extracted JSON parameters like Temperature, Humidity, Pressure, Wind Speed, and Weather Condition.
3. **DataFrame Construction:** Converted raw unstructured JSON response into a structured Pandas DataFrame.
4. **CSV Export:** Exported processed data to `weather_ml_dataset.csv`.
5. **Deployment:** Pushed the notebook and CSV dataset to GitHub for documentation.

---

## 📊 Dataset Description (`weather_ml_dataset.csv`)

| Column Name | Description | Unit |
| :--- | :--- | :--- |
| `City` | Name of the target city | String |
| `Temperature_C` | Measured temperature | °C |
| `Feels_Like_C` | Perceived temperature | °C |
| `Humidity_%` | Relative atmospheric humidity | % |
| `Pressure_hPa` | Atmospheric pressure | hPa |
| `Wind_Speed_m_s` | Wind velocity | m/s |
| `Weather_Condition` | Primary weather description | String |

---

## 🚀 How to Run

1. Open `Weather_API_Data_Collection.ipynb` in Google Colab.
2. Set `API_KEY` parameter with a valid OpenWeatherMap API key.
3. Run all cells to generate `weather_ml_dataset.csv`.
