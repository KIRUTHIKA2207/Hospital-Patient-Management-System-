# MediPulse — Hospital Patient Management System

A hospital patient management web application built with **HTML5**, **Vanilla CSS**, and **Vanilla JavaScript**. Designed with a clinical design system, real-time metrics, interactive bed visualizer, medical dossiers, and data persistence.

---

## 🌟 Key Features

### 1. Executive Dashboard & Live Clinical Metrics
- **Real-time Counters**: Active Patients, Inpatient Admissions, ICU Critical Care (Code Red), Discharged cases, and Live Bed Occupancy rate.
- **Live Ticking Hospital Clock & Date display**.
- **Critical Alert Center**: Automatically identifies patients with abnormal vitals (hypoxia, tachycardia) or Code Red triage priority.

### 2. Patient Intake & Registration (CRUD)
- **Comprehensive Demographic & Medical Intake**: Full Name, Age, Gender, Blood Group, Phone, Emergency Contact, Medical Insurance.
- **Ward & Bed Assignment**: Select department (Cardiology, Neurology, Pediatrics, Orthopedics, General Med, ICU, Emergency), attending physician, bed/room number, and triage acuity.
- **Baseline Vitals Entry**: Heart rate (BPM), Blood Pressure (SYS/DIA), SpO2 (%), Body Temperature (°F), and known drug allergies.
- **Rapid Emergency Triage Preset**: One-click quick intake priming for critical trauma cases.

### 3. Patient Directory & Management Table
- **Live Debounced Search**: Search instantly across Patient Name, ID (e.g. `MED-1042`), Attending Doctor, or Primary Diagnosis.
- **Multi-Criteria Filtering**: Filter by Medical Department, Admission Status (Admitted, ICU, Outpatient, Discharged), and Triage Priority (Critical, Urgent, Normal).
- **Sortable Columns**: Click table headers to sort by ID, Name, Department, Bed, Status, etc.
- **Dual Display Modes**: Toggle between dense tabular view and responsive card grid view.

### 4. Patient Medical Dossier & Vitals Monitoring
- **Complete Clinical Dossier Modal**: Comprehensive patient profile with animated vitals gauges (Heart Rate, Blood Pressure, SpO2, Temperature) with automated clinical threshold labeling.
- **Quick Vitals Check**: Update patient vitals on the fly with instant data recalculation.
- **Discharge / Re-admit Toggle**: Toggle inpatient status and record discharge timestamp in clinical notes.
- **Printable Dossier Report**: Optimized `@media print` styles for hospital discharge and intake records.

### 5. Bed & Ward Allocation Tracker
- Visual interactive floor plan displaying **ICU, Emergency Rapid Bay, Cardiology Wing, Pediatrics, Orthopedics, and General Medicine**.
- Live occupancy statuses (`Vacant`, `Occupied`, `Code Red`).
- Click any vacant bed to instantly assign and pre-fill patient registration!

### 6. Doctor Rounds Schedule & Analytics
- **Today's Clinical Rounds**: Scheduled physician consultations and specialty reviews.
- **Department Distribution**: Live percentage progress bars by hospital unit.
- **Acuity Breakdown & Blood Group Registry**: Visual counts for rapid blood bank checks.

### 7. Modern UI / UX & Local Storage
- **Night Shift / Dark Mode**: Toggle between crisp Clinical Light and high-contrast Dark Mode with persistent user preference.
- **Data Persistence**: Backed by browser `localStorage` with preloaded realistic demo data and instant CSV spreadsheet export.

---

## 🚀 Quick Start

1. Simply double-click or open [index.html](file:///c:/Users/KIRUTHIKA/Hospital%20Patient/index.html) directly in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve locally:
   ```bash
   python -m http.server 8080
   ```
   and navigate to `http://localhost:8080`.

---

## 📁 File Structure
- [`index.html`](file:///c:/Users/KIRUTHIKA/Hospital%20Patient/index.html): Semantic HTML5 architecture and modal layouts.
- [`styles.css`](file:///c:/Users/KIRUTHIKA/Hospital%20Patient/styles.css): Pure Vanilla CSS design system, CSS variables, glassmorphic header, print media queries, and dark/light themes.
- [`app.js`](file:///c:/Users/KIRUTHIKA/Hospital%20Patient/app.js): Pure JavaScript state management, search/filter engine, modal controller, vitals monitor, CSV exporter, and LocalStorage layer.
