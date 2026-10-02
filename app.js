/**
 * MEDIPULSE HOSPITAL PATIENT MANAGEMENT SYSTEM
 * Core Application Logic & State Management
 */

(function () {
  'use strict';

  // --- Initial Realistic Clinical Data ---
  const INITIAL_PATIENTS = [
    {
      id: 'MED-1042',
      name: 'Eleanor Vance-Clarke',
      age: 64,
      gender: 'Female',
      bloodGroup: 'O+',
      phone: '+1 (555) 234-8910',
      emergencyContact: 'Thomas Vance (Spouse) - (555) 234-8912',
      department: 'Cardiology',
      doctor: 'Dr. Elena Vance (Cardiology)',
      roomBed: 'ICU-B02',
      admissionDate: '2026-09-29',
      status: 'ICU',
      triage: 'Critical',
      diagnosis: 'Acute Myocardial Infarction post angioplasty stent placement',
      vitals: { hr: 98, bp: '138/88', spo2: 94, temp: 99.1 },
      allergies: 'Penicillin, Shellfish',
      insurance: 'Blue Cross Shield Platinum #BC-9921',
      notes: 'Continuous ECG telemonitoring. Administer heparin 5000 IU infusion. Strict bed rest.'
    },
    {
      id: 'MED-1043',
      name: 'Mateo Morales',
      age: 28,
      gender: 'Male',
      bloodGroup: 'A+',
      phone: '+1 (555) 987-1234',
      emergencyContact: 'Sofia Morales (Sister) - (555) 987-5544',
      department: 'Emergency (ER)',
      doctor: 'Dr. Sarah Lin (ICU Specialist)',
      roomBed: 'ER-Bay 04',
      admissionDate: '2026-10-02',
      status: 'Admitted',
      triage: 'Critical',
      diagnosis: 'Blunt thoracic trauma following motor vehicular collision',
      vitals: { hr: 112, bp: '105/65', spo2: 92, temp: 98.4 },
      allergies: 'None reported',
      insurance: 'Aetna Health HMO #AET-4011',
      notes: 'Chest X-ray completed, rib fractures on left 4th and 5th. Oxygen mask 4L/min.'
    },
    {
      id: 'MED-1044',
      name: 'Clara Oswald',
      age: 34,
      gender: 'Female',
      bloodGroup: 'B+',
      phone: '+1 (555) 441-9032',
      emergencyContact: 'Arthur Oswald (Father) - (555) 441-9033',
      department: 'Neurology',
      doctor: 'Dr. Marcus Thorne (Neurology)',
      roomBed: 'Neuro-304A',
      admissionDate: '2026-09-30',
      status: 'Admitted',
      triage: 'Urgent',
      diagnosis: 'Severe intractable migraine with aura and focal numbness',
      vitals: { hr: 72, bp: '122/78', spo2: 99, temp: 98.6 },
      allergies: 'NSAIDs (Aspirin)',
      insurance: 'United Healthcare PPO #UH-7712',
      notes: 'MRI brain scan unremarkable. Responded well to IV sumatriptan and hydration.'
    },
    {
      id: 'MED-1045',
      name: 'Oliver Thorne',
      age: 9,
      gender: 'Male',
      bloodGroup: 'O-',
      phone: '+1 (555) 678-3321',
      emergencyContact: 'Jessica Thorne (Mother) - (555) 678-3320',
      department: 'Pediatrics',
      doctor: 'Dr. Amira Patel (Pediatrics)',
      roomBed: 'Peds-102B',
      admissionDate: '2026-10-01',
      status: 'Admitted',
      triage: 'Urgent',
      diagnosis: 'Acute asthmatic exacerbation with nocturnal wheezing',
      vitals: { hr: 94, bp: '102/68', spo2: 96, temp: 99.4 },
      allergies: 'Pollen, Dust mites',
      insurance: 'Cigna Global Health #CG-8823',
      notes: 'Nebulized albuterol administered Q4H. Vitals stabilizing, wheeze reduced significantly.'
    },
    {
      id: 'MED-1046',
      name: 'Arthur Pendelton',
      age: 72,
      gender: 'Male',
      bloodGroup: 'AB+',
      phone: '+1 (555) 312-7890',
      emergencyContact: 'Henry Pendelton (Son) - (555) 312-7899',
      department: 'Orthopedics',
      doctor: 'Dr. Robert Hayes (Orthopedics)',
      roomBed: 'Ortho-201',
      admissionDate: '2026-09-28',
      status: 'Admitted',
      triage: 'Normal',
      diagnosis: 'Elective total right knee arthroplasty (Post-Op Day 4)',
      vitals: { hr: 68, bp: '128/82', spo2: 98, temp: 98.2 },
      allergies: 'Sulfa drugs',
      insurance: 'Medicare Senior Gold #MED-3001',
      notes: 'Physical therapy ambulatory trial completed today. Wound dry and intact.'
    },
    {
      id: 'MED-1047',
      name: 'Zoe Deschanel-Cole',
      age: 41,
      gender: 'Female',
      bloodGroup: 'A-',
      phone: '+1 (555) 889-1122',
      emergencyContact: 'Brian Cole (Spouse) - (555) 889-1120',
      department: 'General Medicine',
      doctor: 'Dr. James Mitchell (General Med)',
      roomBed: 'Gen-W08',
      admissionDate: '2026-10-01',
      status: 'Admitted',
      triage: 'Normal',
      diagnosis: 'Community-acquired pneumonia, resolving with oral antibiotics',
      vitals: { hr: 76, bp: '118/74', spo2: 97, temp: 98.8 },
      allergies: 'None',
      insurance: 'Kaiser Permanente #KP-9021',
      notes: 'Afebrile for 24 hours. Oral amoxicillin-clavulanate course Day 3.'
    },
    {
      id: 'MED-1048',
      name: 'Darius Sterling',
      age: 53,
      gender: 'Male',
      bloodGroup: 'B-',
      phone: '+1 (555) 777-6543',
      emergencyContact: 'Maya Sterling (Wife) - (555) 777-6540',
      department: 'Cardiology',
      doctor: 'Dr. Elena Vance (Cardiology)',
      roomBed: 'Outpatient-Clinic',
      admissionDate: '2026-09-25',
      status: 'Outpatient',
      triage: 'Normal',
      diagnosis: 'Essential Hypertension routine cardiology review',
      vitals: { hr: 74, bp: '132/84', spo2: 99, temp: 98.6 },
      allergies: 'Codeine',
      insurance: 'MetLife Health #MET-6632',
      notes: 'Blood pressure optimized on Losartan 50mg daily. Scheduled for Holter monitor review.'
    },
    {
      id: 'MED-1049',
      name: 'Beatrice Lawson',
      age: 59,
      gender: 'Female',
      bloodGroup: 'O+',
      phone: '+1 (555) 555-8021',
      emergencyContact: 'George Lawson (Husband) - (555) 555-8022',
      department: 'General Medicine',
      doctor: 'Dr. James Mitchell (General Med)',
      roomBed: 'Discharged',
      admissionDate: '2026-09-20',
      status: 'Discharged',
      triage: 'Normal',
      diagnosis: 'Acute bacterial gastroenteritis - fully recovered',
      vitals: { hr: 70, bp: '115/75', spo2: 99, temp: 98.4 },
      allergies: 'None',
      insurance: 'Humana Prime Care #HUM-1144',
      notes: 'Discharged home with oral rehydration protocol and probiotic course. Full recovery.'
    }
  ];

  // --- Doctor Rounds Schedule ---
  const TODAY_ROUNDS = [
    { time: '08:30 AM', doctor: 'Dr. Sarah Lin', dept: 'ICU & Critical Care', notes: 'Ventilator weaning evaluations and hemodynamic checks for Bed 02 & 04.' },
    { time: '10:00 AM', doctor: 'Dr. Elena Vance', dept: 'Cardiology Unit', notes: 'Post-op angioplasty rounds and echocardiogram reviews.' },
    { time: '11:45 AM', doctor: 'Dr. Amira Patel', dept: 'Pediatrics Wing', notes: 'Pediatric respiratory recovery checks and nebulizer titration.' },
    { time: '02:00 PM', doctor: 'Dr. Robert Hayes', dept: 'Orthopedic Surgery', notes: 'Post-arthroplasty joint mobility checks and wound dressing changes.' },
    { time: '04:15 PM', doctor: 'Dr. Marcus Thorne', dept: 'Neurology Consultation', notes: 'Neurological response and EEG tracking review.' }
  ];

  // --- Hospital Bed Units Master List ---
  const WARD_UNITS = [
    {
      name: 'Intensive Care Unit (ICU)',
      code: 'ICU',
      beds: ['ICU-B01', 'ICU-B02', 'ICU-B03', 'ICU-B04']
    },
    {
      name: 'Emergency Rapid Bay (ER)',
      code: 'ER',
      beds: ['ER-Bay 01', 'ER-Bay 02', 'ER-Bay 03', 'ER-Bay 04']
    },
    {
      name: 'Cardiology Inpatient Wing',
      code: 'Cardio',
      beds: ['Cardio-201', 'Cardio-202', 'Cardio-203', 'Cardio-204']
    },
    {
      name: 'Pediatrics Care Unit',
      code: 'Peds',
      beds: ['Peds-101A', 'Peds-102B', 'Peds-103A', 'Peds-104B']
    },
    {
      name: 'Orthopedics & Surgical Recovery',
      code: 'Ortho',
      beds: ['Ortho-201', 'Ortho-202', 'Ortho-203', 'Ortho-204']
    },
    {
      name: 'General Medicine Ward',
      code: 'Gen',
      beds: ['Gen-W01', 'Gen-W02', 'Gen-W08', 'Gen-W10']
    }
  ];

  // --- State ---
  const STORAGE_KEY = 'medipulse_patients_records_v1';
  let patients = loadPatients();
  let currentSort = { column: 'id', direction: 'asc' };
  let currentViewMode = 'table'; // 'table' or 'grid'

  // --- DOM Elements ---
  const patientsTableBody = document.getElementById('patientsTableBody');
  const patientsGridView = document.getElementById('patientsGridView');
  const patientsTableView = document.getElementById('patientsTableView');
  const tableEmptyState = document.getElementById('tableEmptyState');
  const recordsCounterDisplay = document.getElementById('recordsCounterDisplay');
  const sidebarPatientCount = document.getElementById('sidebarPatientCount');
  
  // Stats
  const statTotalPatients = document.getElementById('statTotalPatients');
  const statAdmittedPatients = document.getElementById('statAdmittedPatients');
  const statCriticalPatients = document.getElementById('statCriticalPatients');
  const statDischargedPatients = document.getElementById('statDischargedPatients');
  const statOccupancyRate = document.getElementById('statOccupancyRate');

  // Filters
  const patientSearchInput = document.getElementById('patientSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterDepartment = document.getElementById('filterDepartment');
  const filterStatus = document.getElementById('filterStatus');
  const filterTriage = document.getElementById('filterTriage');
  const btnResetFilters = document.getElementById('btnResetFilters');

  // Navigation
  const navItems = document.querySelectorAll('.nav-item');
  const contentViews = document.querySelectorAll('.content-view');
  const currentViewTitle = document.getElementById('currentViewTitle');

  // Modals
  const patientModalOverlay = document.getElementById('patientModalOverlay');
  const patientForm = document.getElementById('patientForm');
  const patientModalTitle = document.getElementById('patientModalTitle');
  const btnSavePatientText = document.getElementById('btnSavePatientText');
  const closePatientModalBtn = document.getElementById('closePatientModalBtn');
  const btnCancelPatientModal = document.getElementById('btnCancelPatientModal');
  const btnOpenNewPatientModal = document.getElementById('btnOpenNewPatientModal');
  const btnEmergencyAdmission = document.getElementById('btnEmergencyAdmission');

  // Dossier Modal
  const dossierModalOverlay = document.getElementById('dossierModalOverlay');
  const closeDossierModalBtn = document.getElementById('closeDossierModalBtn');
  const btnPrintDossier = document.getElementById('btnPrintDossier');
  const btnDossierUpdateVitals = document.getElementById('btnDossierUpdateVitals');
  const btnDossierEditRecord = document.getElementById('btnDossierEditRecord');
  const btnDossierToggleDischarge = document.getElementById('btnDossierToggleDischarge');

  // Quick Vitals Modal
  const vitalsModalOverlay = document.getElementById('vitalsModalOverlay');
  const vitalsForm = document.getElementById('vitalsForm');
  const closeVitalsModalBtn = document.getElementById('closeVitalsModalBtn');
  const btnCancelVitalsModal = document.getElementById('btnCancelVitalsModal');
  const vitalsPatientName = document.getElementById('vitalsPatientName');

  // View toggles
  const viewToggleTable = document.getElementById('viewToggleTable');
  const viewToggleGrid = document.getElementById('viewToggleGrid');

  // Actions
  const btnExportCSV = document.getElementById('btnExportCSV');
  const btnResetData = document.getElementById('btnResetData');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');

  // Notifications
  const notificationsBtn = document.getElementById('notificationsBtn');
  const notificationsDropdown = document.getElementById('notificationsDropdown');
  const alertCounterBadge = document.getElementById('alertCounterBadge');
  const notifCountText = document.getElementById('notifCountText');
  const notifList = document.getElementById('notifList');

  // Track currently active dossier patient
  let activeDossierPatientId = null;

  // --- INITIALIZATION ---
  function init() {
    initTheme();
    initClock();
    renderAll();
    setupEventListeners();
  }

  // --- STORAGE HELPERS ---
  function loadPatients() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('LocalStorage load error', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_PATIENTS));
  }

  function savePatients() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    } catch (e) {
      console.error('LocalStorage save error', e);
    }
    renderAll();
  }

  // --- THEME HANDLING ---
  function initTheme() {
    const savedTheme = localStorage.getItem('medipulse_theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('medipulse_theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Night Shift (Dark)' : 'Clinical Light'} Mode`, 'info');
  }

  // --- LIVE CLOCK ---
  function initClock() {
    const clockEl = document.getElementById('liveClock');
    const dateEl = document.getElementById('liveDate');

    function update() {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }
      if (dateEl) {
        dateEl.textContent = now.toLocaleDateString([], { month: 'short', day: '2-digit', year: 'numeric' });
      }
    }
    update();
    setInterval(update, 1000);
  }

  // --- RENDER MASTER DISPATCHER ---
  function renderAll() {
    renderStats();
    renderPatientsList();
    renderWards();
    renderRounds();
    renderAnalytics();
    renderCriticalAlerts();
  }

  // --- 1. RENDER STATS OVERVIEW ---
  function renderStats() {
    const total = patients.length;
    const admitted = patients.filter(p => p.status === 'Admitted' || p.status === 'ICU').length;
    const critical = patients.filter(p => p.triage === 'Critical' || p.status === 'ICU').length;
    const discharged = patients.filter(p => p.status === 'Discharged').length;

    statTotalPatients.textContent = total;
    statAdmittedPatients.textContent = admitted;
    statCriticalPatients.textContent = critical;
    statDischargedPatients.textContent = discharged;
    sidebarPatientCount.textContent = total;

    // Approximate hospital capacity percentage (e.g. 24 max beds)
    const capacityPercent = Math.min(100, Math.round((admitted / 24) * 100));
    statOccupancyRate.textContent = `${capacityPercent}% of bed capacity`;
  }

  // --- 2. RENDER PATIENTS LIST & FILTERING ---
  function getFilteredPatients() {
    const query = (patientSearchInput.value || '').toLowerCase().trim();
    const dept = filterDepartment.value;
    const status = filterStatus.value;
    const triage = filterTriage.value;

    return patients.filter(p => {
      // Query search in name, id, diagnosis, doctor
      const matchesQuery = !query || 
        p.name.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query) ||
        p.diagnosis.toLowerCase().includes(query) ||
        p.doctor.toLowerCase().includes(query) ||
        p.roomBed.toLowerCase().includes(query);

      const matchesDept = (dept === 'ALL') || (p.department === dept);
      const matchesStatus = (status === 'ALL') || (p.status === status);
      const matchesTriage = (triage === 'ALL') || (p.triage === triage);

      return matchesQuery && matchesDept && matchesStatus && matchesTriage;
    }).sort((a, b) => {
      let valA = a[currentSort.column];
      let valB = b[currentSort.column];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
      if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  function renderPatientsList() {
    const filtered = getFilteredPatients();
    recordsCounterDisplay.textContent = `Showing ${filtered.length} of ${patients.length} patients`;

    // Empty state check
    if (filtered.length === 0) {
      patientsTableView.classList.add('hidden');
      patientsGridView.classList.add('hidden');
      tableEmptyState.classList.remove('hidden');
      return;
    }

    tableEmptyState.classList.add('hidden');
    if (currentViewMode === 'table') {
      patientsTableView.classList.remove('hidden');
      patientsGridView.classList.add('hidden');
    } else {
      patientsTableView.classList.add('hidden');
      patientsGridView.classList.remove('hidden');
    }

    // Render Table View
    patientsTableBody.innerHTML = filtered.map(p => {
      const initials = getInitials(p.name);
      const statusClass = p.status.toLowerCase();
      const triageClass = p.triage.toLowerCase();

      return `
        <tr>
          <td>
            <span class="badge-code">${escapeHtml(p.id)}</span>
          </td>
          <td>
            <div class="patient-profile-cell">
              <div class="patient-avatar">
                ${initials}
                <span class="avatar-status-dot ${statusClass}"></span>
              </div>
              <div class="patient-names">
                <span class="patient-full-name">${escapeHtml(p.name)}</span>
                <span class="patient-diagnosis-sub" title="${escapeHtml(p.diagnosis)}">${escapeHtml(p.diagnosis)}</span>
              </div>
            </div>
          </td>
          <td>
            <strong>${p.age} yrs</strong> <span class="text-muted">(${escapeHtml(p.gender.charAt(0))})</span>
            <br>
            <span class="badge-pill">${escapeHtml(p.bloodGroup)}</span>
          </td>
          <td>
            <div class="dept-doctor-cell">
              <span class="cell-dept">${escapeHtml(p.department)}</span>
              <span class="cell-doctor">${escapeHtml(p.doctor)}</span>
            </div>
          </td>
          <td>
            <span class="room-cell">${escapeHtml(p.roomBed)}</span>
          </td>
          <td>
            <span class="triage-chip ${triageClass}">
              ${escapeHtml(p.triage)}
            </span>
          </td>
          <td>
            <div class="vitals-preview-cell">
              <span class="vital-tag" title="Blood Pressure"><strong>BP:</strong> ${p.vitals.bp || '--'}</span>
              <span class="vital-tag" title="Heart Rate"><strong>HR:</strong> ${p.vitals.hr || '--'} bpm</span>
              <span class="vital-tag" title="Oxygen Saturation"><strong>SpO2:</strong> ${p.vitals.spo2 ? p.vitals.spo2 + '%' : '--'}</span>
            </div>
          </td>
          <td>
            <span class="status-chip ${statusClass}">
              ${escapeHtml(p.status)}
            </span>
          </td>
          <td class="text-right">
            <div class="actions-cell">
              <button class="btn-icon-action" data-action="view" data-id="${p.id}" title="View Patient Dossier">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
              <button class="btn-icon-action" data-action="vitals" data-id="${p.id}" title="Record Quick Vitals">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </button>
              <button class="btn-icon-action" data-action="edit" data-id="${p.id}" title="Edit Patient Information">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
              </button>
              <button class="btn-icon-action delete-action" data-action="delete" data-id="${p.id}" title="Remove Patient Record">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Render Grid Cards View
    patientsGridView.innerHTML = filtered.map(p => {
      const initials = getInitials(p.name);
      const statusClass = p.status.toLowerCase();
      const triageClass = p.triage.toLowerCase();

      return `
        <div class="patient-grid-card">
          <div class="patient-card-top">
            <div class="patient-profile-cell">
              <div class="patient-avatar">
                ${initials}
                <span class="avatar-status-dot ${statusClass}"></span>
              </div>
              <div class="patient-names">
                <span class="patient-full-name">${escapeHtml(p.name)}</span>
                <span class="badge-code">${escapeHtml(p.id)}</span>
              </div>
            </div>
            <span class="triage-chip ${triageClass}">${escapeHtml(p.triage)}</span>
          </div>

          <p class="patient-diagnosis-sub" style="max-width: 100%;">
            <strong>Diagnosis:</strong> ${escapeHtml(p.diagnosis)}
          </p>

          <div class="patient-card-meta">
            <div>
              <span class="meta-label">Dept</span>
              <div class="meta-val">${escapeHtml(p.department)}</div>
            </div>
            <div>
              <span class="meta-label">Room / Bed</span>
              <div class="meta-val">${escapeHtml(p.roomBed)}</div>
            </div>
            <div>
              <span class="meta-label">Attending Doctor</span>
              <div class="meta-val">${escapeHtml(p.doctor.split(' ')[1] || p.doctor)}</div>
            </div>
            <div>
              <span class="meta-label">Vitals (BP/HR)</span>
              <div class="meta-val">${p.vitals.bp || '--'} | ${p.vitals.hr || '--'} bpm</div>
            </div>
          </div>

          <div class="flex-between">
            <span class="status-chip ${statusClass}">${escapeHtml(p.status)}</span>
            <div class="actions-cell">
              <button class="btn btn-outline btn-sm" data-action="view" data-id="${p.id}">View Dossier</button>
              <button class="btn-icon-action" data-action="vitals" data-id="${p.id}" title="Vitals">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- 3. RENDER WARD & BED ALLOCATION TRACKER ---
  function renderWards() {
    const container = document.getElementById('wardsContainer');
    if (!container) return;

    // Map admitted or ICU patients to beds
    const bedOccupants = {};
    patients.forEach(p => {
      if (p.status !== 'Discharged' && p.roomBed) {
        bedOccupants[p.roomBed.trim()] = p;
      }
    });

    container.innerHTML = WARD_UNITS.map(ward => {
      let occupiedCount = 0;
      const bedSlotsHtml = ward.beds.map(bedId => {
        const occupant = bedOccupants[bedId];
        if (occupant) {
          occupiedCount++;
          const isCritical = occupant.triage === 'Critical' || occupant.status === 'ICU';
          return `
            <div class="bed-slot ${isCritical ? 'critical' : 'occupied'}" title="Assigned to ${escapeHtml(occupant.name)} (${occupant.diagnosis})">
              <span class="bed-number">${bedId}</span>
              <span class="bed-patient-name">${escapeHtml(occupant.name)}</span>
              <span class="bed-status-text">${isCritical ? 'Code Red' : occupant.status}</span>
            </div>
          `;
        } else {
          return `
            <div class="bed-slot available" onclick="window.medipulseAssignBed('${bedId}', '${ward.name}')" title="Click to assign new patient to ${bedId}">
              <span class="bed-number">${bedId}</span>
              <span class="bed-patient-name text-muted">Vacant</span>
              <span class="bed-status-text text-emerald">+ Available</span>
            </div>
          `;
        }
      }).join('');

      return `
        <div class="ward-card">
          <div class="ward-card-header">
            <h3 class="ward-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
              ${escapeHtml(ward.name)}
            </h3>
            <span class="ward-capacity-badge">${occupiedCount} / ${ward.beds.length} Beds</span>
          </div>
          <div class="bed-slots-grid">
            ${bedSlotsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // Helper attached to window for vacant bed clicking
  window.medipulseAssignBed = function(bedId, wardName) {
    openPatientModal();
    const bedInput = document.getElementById('inputRoomBed');
    if (bedInput) bedInput.value = bedId;

    // Auto-select department if matches
    const deptSelect = document.getElementById('selectDepartment');
    if (deptSelect) {
      if (wardName.includes('ICU')) deptSelect.value = 'Intensive Care (ICU)';
      else if (wardName.includes('Emergency')) deptSelect.value = 'Emergency (ER)';
      else if (wardName.includes('Cardiology')) deptSelect.value = 'Cardiology';
      else if (wardName.includes('Pediatrics')) deptSelect.value = 'Pediatrics';
      else if (wardName.includes('Orthopedics')) deptSelect.value = 'Orthopedics';
      else if (wardName.includes('General')) deptSelect.value = 'General Medicine';
    }
    showToast(`Bed ${bedId} selected for registration`, 'info');
  };

  // --- 4. RENDER ROUNDS & PHYSICIANS ---
  function renderRounds() {
    const roundsList = document.getElementById('roundsTimelineList');
    const physiciansList = document.getElementById('physiciansDutyList');
    const countBadge = document.getElementById('roundsCountBadge');

    if (countBadge) countBadge.textContent = `${TODAY_ROUNDS.length} Rounds`;

    if (roundsList) {
      roundsList.innerHTML = TODAY_ROUNDS.map(r => `
        <div class="timeline-item">
          <span class="timeline-time">${r.time}</span>
          <div class="timeline-content">
            <h4 class="timeline-title">${escapeHtml(r.doctor)} &bull; ${escapeHtml(r.dept)}</h4>
            <p class="timeline-desc">${escapeHtml(r.notes)}</p>
          </div>
        </div>
      `).join('');
    }

    if (physiciansList) {
      const doctors = [
        { name: 'Dr. Elena Vance, MD', title: 'Chief Cardiologist', spec: 'Interventional Cardiology' },
        { name: 'Dr. Sarah Lin, MD', title: 'ICU Critical Care Lead', spec: 'Trauma & Life Support' },
        { name: 'Dr. Marcus Thorne, MD', title: 'Senior Neurologist', spec: 'Neuro-vascular Disorders' },
        { name: 'Dr. Amira Patel, MD', title: 'Pediatric Specialist', spec: 'Neonatal & Child Health' }
      ];

      physiciansList.innerHTML = doctors.map(d => `
        <div class="physician-card">
          <div class="physician-avatar">${getInitials(d.name.replace('Dr. ', ''))}</div>
          <div class="physician-info">
            <h4>${escapeHtml(d.name)}</h4>
            <p>${escapeHtml(d.title)} &bull; ${escapeHtml(d.spec)}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // --- 5. RENDER ANALYTICS VIEW ---
  function renderAnalytics() {
    const deptList = document.getElementById('deptDistributionList');
    const triageBox = document.getElementById('triageBreakdown');
    const bloodGrid = document.getElementById('bloodGroupGrid');

    if (!deptList || !triageBox || !bloodGrid) return;

    // Dept counts
    const depts = {};
    patients.forEach(p => {
      depts[p.department] = (depts[p.department] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(depts), 1);
    deptList.innerHTML = Object.entries(depts).map(([dept, count]) => {
      const pct = Math.round((count / patients.length) * 100);
      const widthPct = Math.round((count / maxCount) * 100);
      return `
        <div class="dept-bar-item">
          <div class="dept-bar-meta">
            <span>${escapeHtml(dept)}</span>
            <span>${count} patients (${pct}%)</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${widthPct}%;"></div>
          </div>
        </div>
      `;
    }).join('');

    // Triage counts
    const criticalCount = patients.filter(p => p.triage === 'Critical').length;
    const urgentCount = patients.filter(p => p.triage === 'Urgent').length;
    const normalCount = patients.filter(p => p.triage === 'Normal').length;

    triageBox.innerHTML = `
      <div class="triage-stat-row red">
        <strong>Critical / Code Red</strong>
        <span>${criticalCount} patients (${Math.round((criticalCount / patients.length) * 100)}%)</span>
      </div>
      <div class="triage-stat-row yellow">
        <strong>Urgent Priority</strong>
        <span>${urgentCount} patients (${Math.round((urgentCount / patients.length) * 100)}%)</span>
      </div>
      <div class="triage-stat-row green">
        <strong>Normal / Stable</strong>
        <span>${normalCount} patients (${Math.round((normalCount / patients.length) * 100)}%)</span>
      </div>
    `;

    // Blood groups tally
    const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    const bloodCounts = {};
    bloodTypes.forEach(t => bloodCounts[t] = 0);
    patients.forEach(p => {
      if (bloodCounts[p.bloodGroup] !== undefined) {
        bloodCounts[p.bloodGroup]++;
      }
    });

    bloodGrid.innerHTML = bloodTypes.map(type => `
      <div class="blood-group-tile">
        <span class="blood-type">${type}</span>
        <span class="blood-count">${bloodCounts[type]} admitted</span>
      </div>
    `).join('');
  }

  // --- 6. CRITICAL NOTIFICATIONS & ALERTS ---
  function renderCriticalAlerts() {
    const alerts = [];

    patients.forEach(p => {
      if (p.triage === 'Critical' || p.status === 'ICU') {
        alerts.push({
          patient: p,
          msg: `Code Red Alert: ${p.diagnosis.slice(0, 45)}...`,
          room: p.roomBed
        });
      } else if (p.vitals && p.vitals.spo2 && p.vitals.spo2 < 93) {
        alerts.push({
          patient: p,
          msg: `Low SpO2 Alert (${p.vitals.spo2}%): check oxygen flow`,
          room: p.roomBed
        });
      }
    });

    alertCounterBadge.textContent = alerts.length;
    notifCountText.textContent = `${alerts.length} critical alerts`;

    if (alerts.length === 0) {
      notifList.innerHTML = `<div class="notif-item"><span class="notif-meta">All patient vitals stable within normal parameters.</span></div>`;
      return;
    }

    notifList.innerHTML = alerts.map(a => `
      <div class="notif-item" onclick="window.medipulseOpenDossier('${a.patient.id}')">
        <span class="notif-title">
          <span class="pulse-dot"></span>
          ${escapeHtml(a.patient.name)} (${escapeHtml(a.room)})
        </span>
        <span class="notif-meta">${escapeHtml(a.msg)}</span>
      </div>
    `).join('');
  }

  window.medipulseOpenDossier = function(patientId) {
    notificationsDropdown.classList.remove('active');
    openPatientDossier(patientId);
  };

  // --- 7. PATIENT REGISTRATION / EDIT MODAL ---
  function openPatientModal(patientToEdit = null) {
    patientForm.reset();
    clearErrors();

    if (patientToEdit) {
      patientModalTitle.textContent = 'Edit Patient Clinical Record';
      btnSavePatientText.textContent = 'Save Changes';
      document.getElementById('formPatientIdHidden').value = patientToEdit.id;

      document.getElementById('inputFullName').value = patientToEdit.name;
      document.getElementById('inputAge').value = patientToEdit.age;
      document.getElementById('selectGender').value = patientToEdit.gender;
      document.getElementById('selectBloodGroup').value = patientToEdit.bloodGroup;
      document.getElementById('inputPhone').value = patientToEdit.phone;
      document.getElementById('inputEmergencyContact').value = patientToEdit.emergencyContact || '';
      document.getElementById('selectDepartment').value = patientToEdit.department;
      document.getElementById('selectDoctor').value = patientToEdit.doctor;
      document.getElementById('inputRoomBed').value = patientToEdit.roomBed;
      document.getElementById('selectStatus').value = patientToEdit.status;
      document.getElementById('selectTriage').value = patientToEdit.triage;
      document.getElementById('inputAdmissionDate').value = patientToEdit.admissionDate || getTodayDateString();
      document.getElementById('inputDiagnosis').value = patientToEdit.diagnosis;
      document.getElementById('inputHeartRate').value = patientToEdit.vitals ? patientToEdit.vitals.hr : '';
      document.getElementById('inputBP').value = patientToEdit.vitals ? patientToEdit.vitals.bp : '';
      document.getElementById('inputSpO2').value = patientToEdit.vitals ? patientToEdit.vitals.spo2 : '';
      document.getElementById('inputTemp').value = patientToEdit.vitals ? patientToEdit.vitals.temp : '';
      document.getElementById('inputAllergies').value = patientToEdit.allergies || '';
      document.getElementById('inputInsurance').value = patientToEdit.insurance || '';
      document.getElementById('inputNotes').value = patientToEdit.notes || '';
    } else {
      patientModalTitle.textContent = 'Register New Patient';
      btnSavePatientText.textContent = 'Register Patient';
      document.getElementById('formPatientIdHidden').value = '';
      document.getElementById('inputAdmissionDate').value = getTodayDateString();
      document.getElementById('selectGender').value = 'Female';
      document.getElementById('selectBloodGroup').value = 'O+';
      document.getElementById('selectDepartment').value = 'Cardiology';
      document.getElementById('selectDoctor').value = 'Dr. Elena Vance (Cardiology)';
      document.getElementById('selectStatus').value = 'Admitted';
      document.getElementById('selectTriage').value = 'Normal';
    }

    patientModalOverlay.classList.add('active');
  }

  function closePatientModal() {
    patientModalOverlay.classList.remove('active');
  }

  function clearErrors() {
    const errorFields = patientForm.querySelectorAll('.form-group.has-error');
    errorFields.forEach(f => f.classList.remove('has-error'));
  }

  function handleSavePatient(e) {
    e.preventDefault();
    clearErrors();

    // Basic Validation
    let isValid = true;
    const nameInput = document.getElementById('inputFullName');
    const ageInput = document.getElementById('inputAge');
    const phoneInput = document.getElementById('inputPhone');
    const roomInput = document.getElementById('inputRoomBed');
    const diagInput = document.getElementById('inputDiagnosis');

    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!ageInput.value || Number(ageInput.value) < 0 || Number(ageInput.value) > 130) {
      ageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!phoneInput.value.trim()) {
      phoneInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!roomInput.value.trim()) {
      roomInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!diagInput.value.trim()) {
      diagInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) return;

    const existingId = document.getElementById('formPatientIdHidden').value;
    const isEdit = !!existingId;

    const patientRecord = {
      id: isEdit ? existingId : generatePatientId(),
      name: nameInput.value.trim(),
      age: parseInt(ageInput.value, 10),
      gender: document.getElementById('selectGender').value,
      bloodGroup: document.getElementById('selectBloodGroup').value,
      phone: phoneInput.value.trim(),
      emergencyContact: document.getElementById('inputEmergencyContact').value.trim() || 'Not specified',
      department: document.getElementById('selectDepartment').value,
      doctor: document.getElementById('selectDoctor').value,
      roomBed: roomInput.value.trim(),
      status: document.getElementById('selectStatus').value,
      triage: document.getElementById('selectTriage').value,
      admissionDate: document.getElementById('inputAdmissionDate').value || getTodayDateString(),
      diagnosis: diagInput.value.trim(),
      vitals: {
        hr: parseInt(document.getElementById('inputHeartRate').value, 10) || 75,
        bp: document.getElementById('inputBP').value.trim() || '120/80',
        spo2: parseInt(document.getElementById('inputSpO2').value, 10) || 98,
        temp: parseFloat(document.getElementById('inputTemp').value) || 98.6
      },
      allergies: document.getElementById('inputAllergies').value.trim() || 'None reported',
      insurance: document.getElementById('inputInsurance').value.trim() || 'Self-Pay / Not specified',
      notes: document.getElementById('inputNotes').value.trim() || 'Initial baseline admission logged.'
    };

    if (isEdit) {
      const idx = patients.findIndex(p => p.id === existingId);
      if (idx !== -1) {
        patients[idx] = patientRecord;
        showToast(`Patient record ${patientRecord.id} updated`, 'success');
      }
    } else {
      patients.unshift(patientRecord);
      showToast(`New patient ${patientRecord.name} (${patientRecord.id}) registered successfully`, 'success');
    }

    savePatients();
    closePatientModal();

    // If dossier modal was open for this patient, update it
    if (activeDossierPatientId === patientRecord.id) {
      openPatientDossier(patientRecord.id);
    }
  }

  // --- 8. PATIENT MEDICAL DOSSIER MODAL ---
  function openPatientDossier(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;

    activeDossierPatientId = patient.id;

    document.getElementById('dossierAvatar').textContent = getInitials(patient.name);
    document.getElementById('dossierName').textContent = patient.name;
    document.getElementById('dossierId').textContent = patient.id;
    
    // Triage & Status chips
    const triageEl = document.getElementById('dossierTriage');
    triageEl.textContent = patient.triage;
    triageEl.className = `triage-chip ${patient.triage.toLowerCase()}`;

    const statusEl = document.getElementById('dossierStatus');
    statusEl.textContent = patient.status;
    statusEl.className = `status-chip ${patient.status.toLowerCase()}`;

    document.getElementById('dossierMeta').textContent = 
      `Age: ${patient.age} yrs | Gender: ${patient.gender} | Blood: ${patient.bloodGroup} | Admitted: ${patient.admissionDate}`;

    // Vitals Gauges
    const v = patient.vitals || {};
    document.getElementById('dossierHeartRate').textContent = v.hr || '--';
    document.getElementById('dossierBP').textContent = v.bp || '--/--';
    document.getElementById('dossierSpO2').textContent = v.spo2 || '--';
    document.getElementById('dossierTemp').textContent = v.temp || '--';

    // Status notes on vitals
    const hrVal = parseInt(v.hr, 10);
    const spo2Val = parseInt(v.spo2, 10);
    document.getElementById('dossierHeartStatus').textContent = hrVal > 100 ? 'Tachycardia' : (hrVal < 60 ? 'Bradycardia' : 'Normal Sinus');
    document.getElementById('dossierSpO2Status').textContent = spo2Val < 94 ? 'Hypoxic Alert' : 'Normal Room Air';

    // Placement details
    document.getElementById('dossierDept').textContent = patient.department;
    document.getElementById('dossierDoctor').textContent = patient.doctor;
    document.getElementById('dossierRoom').textContent = patient.roomBed;
    document.getElementById('dossierAdmissionDate').textContent = patient.admissionDate;

    // Emergency & Insurance
    document.getElementById('dossierPhone').textContent = patient.phone;
    document.getElementById('dossierEmergency').textContent = patient.emergencyContact;
    document.getElementById('dossierInsurance').textContent = patient.insurance;
    document.getElementById('dossierAllergies').textContent = patient.allergies;

    // Diagnosis & Notes
    document.getElementById('dossierDiagnosis').textContent = patient.diagnosis;
    document.getElementById('dossierNotes').textContent = patient.notes;

    // Toggle discharge button text
    btnDossierToggleDischarge.textContent = patient.status === 'Discharged' ? 'Re-admit Patient' : 'Discharge Patient';

    dossierModalOverlay.classList.add('active');
  }

  function closePatientDossier() {
    dossierModalOverlay.classList.remove('active');
  }

  // --- 9. QUICK VITALS UPDATE MODAL ---
  function openVitalsModal(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;

    document.getElementById('vitalsPatientIdHidden').value = patient.id;
    vitalsPatientName.textContent = `Patient: ${patient.name} (${patient.id})`;

    const v = patient.vitals || {};
    document.getElementById('quickHeartRate').value = v.hr || 75;
    document.getElementById('quickBP').value = v.bp || '120/80';
    document.getElementById('quickSpO2').value = v.spo2 || 98;
    document.getElementById('quickTemp').value = v.temp || 98.6;

    vitalsModalOverlay.classList.add('active');
  }

  function closeVitalsModal() {
    vitalsModalOverlay.classList.remove('active');
  }

  function handleSaveVitals(e) {
    e.preventDefault();
    const patientId = document.getElementById('vitalsPatientIdHidden').value;
    const patient = patients.find(p => p.id === patientId);

    if (patient) {
      patient.vitals = {
        hr: parseInt(document.getElementById('quickHeartRate').value, 10),
        bp: document.getElementById('quickBP').value.trim(),
        spo2: parseInt(document.getElementById('quickSpO2').value, 10),
        temp: parseFloat(document.getElementById('quickTemp').value)
      };

      savePatients();
      closeVitalsModal();
      showToast(`Vitals recorded for ${patient.name}`, 'success');

      if (activeDossierPatientId === patient.id && dossierModalOverlay.classList.contains('active')) {
        openPatientDossier(patient.id);
      }
    }
  }

  // --- 10. DISCHARGE / RE-ADMIT TOGGLE ---
  function togglePatientDischarge(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;

    if (patient.status === 'Discharged') {
      patient.status = 'Admitted';
      patient.roomBed = 'Gen-W01';
      showToast(`${patient.name} re-admitted to inpatient ward`, 'info');
    } else {
      patient.status = 'Discharged';
      patient.notes += `\n[Discharged on ${getTodayDateString()}] Patient authorized for discharge.`;
      showToast(`${patient.name} successfully discharged`, 'success');
    }

    savePatients();
    if (activeDossierPatientId === patient.id) {
      openPatientDossier(patient.id);
    }
  }

  // --- 11. DELETE RECORD ---
  function deletePatient(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;

    const confirmed = confirm(`Are you sure you want to permanently remove patient record ${patient.id} (${patient.name})?`);
    if (confirmed) {
      patients = patients.filter(p => p.id !== patientId);
      savePatients();
      showToast(`Patient record ${patientId} removed`, 'danger');
      if (activeDossierPatientId === patientId) {
        closePatientDossier();
      }
    }
  }

  // --- 12. EXPORT TO CSV SPREADSHEET ---
  function exportPatientsToCSV() {
    const filtered = getFilteredPatients();
    if (filtered.length === 0) {
      showToast('No patient records to export', 'info');
      return;
    }

    const headers = ['Patient ID', 'Name', 'Age', 'Gender', 'Blood Group', 'Phone', 'Department', 'Doctor', 'Room/Bed', 'Status', 'Triage', 'Admission Date', 'Diagnosis', 'Heart Rate', 'Blood Pressure', 'SpO2', 'Temperature', 'Allergies', 'Insurance'];

    const rows = filtered.map(p => [
      `"${p.id}"`,
      `"${p.name}"`,
      p.age,
      `"${p.gender}"`,
      `"${p.bloodGroup}"`,
      `"${p.phone}"`,
      `"${p.department}"`,
      `"${p.doctor}"`,
      `"${p.roomBed}"`,
      `"${p.status}"`,
      `"${p.triage}"`,
      `"${p.admissionDate}"`,
      `"${(p.diagnosis || '').replace(/"/g, '""')}"`,
      p.vitals.hr || '',
      `"${p.vitals.bp || ''}"`,
      p.vitals.spo2 || '',
      p.vitals.temp || '',
      `"${(p.allergies || '').replace(/"/g, '""')}"`,
      `"${(p.insurance || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `medipulse_patients_${getTodayDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Exported ${filtered.length} patient records to CSV`, 'success');
  }

  // --- 13. TOAST NOTIFICATIONS HELPER ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'danger') icon = '⚠️';

    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <div class="toast-title">${type.toUpperCase()}</div>
        <div class="toast-message">${escapeHtml(message)}</div>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3500);
  }

  // --- 14. EVENT LISTENERS ---
  function setupEventListeners() {
    // Navigation items
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        const targetViewId = item.getAttribute('data-view');
        contentViews.forEach(view => {
          if (view.id === targetViewId) {
            view.classList.add('active');
          } else {
            view.classList.remove('active');
          }
        });

        // Update header breadcrumb
        const titleSpan = item.querySelector('span');
        if (titleSpan && currentViewTitle) {
          currentViewTitle.textContent = titleSpan.textContent;
        }

        // Close mobile sidebar if open
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('mobile-open');
        }
      });
    });

    // Mobile sidebar toggle
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });
    }

    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Search and Filters
    patientSearchInput.addEventListener('input', () => {
      clearSearchBtn.style.display = patientSearchInput.value ? 'block' : 'none';
      renderPatientsList();
    });

    clearSearchBtn.addEventListener('click', () => {
      patientSearchInput.value = '';
      clearSearchBtn.style.display = 'none';
      renderPatientsList();
      patientSearchInput.focus();
    });

    filterDepartment.addEventListener('change', renderPatientsList);
    filterStatus.addEventListener('change', renderPatientsList);
    filterTriage.addEventListener('change', renderPatientsList);

    btnResetFilters.addEventListener('click', () => {
      patientSearchInput.value = '';
      clearSearchBtn.style.display = 'none';
      filterDepartment.value = 'ALL';
      filterStatus.value = 'ALL';
      filterTriage.value = 'ALL';
      renderPatientsList();
      showToast('Filters reset to default', 'info');
    });

    // View switcher (Table vs Grid)
    viewToggleTable.addEventListener('click', () => {
      currentViewMode = 'table';
      viewToggleTable.classList.add('active');
      viewToggleGrid.classList.remove('active');
      renderPatientsList();
    });

    viewToggleGrid.addEventListener('click', () => {
      currentViewMode = 'grid';
      viewToggleGrid.classList.add('active');
      viewToggleTable.classList.remove('active');
      renderPatientsList();
    });

    // Table Header Sorting
    const sortHeaders = document.querySelectorAll('.data-table th[data-sort]');
    sortHeaders.forEach(th => {
      th.addEventListener('click', () => {
        const col = th.getAttribute('data-sort');
        if (currentSort.column === col) {
          currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
          currentSort.column = col;
          currentSort.direction = 'asc';
        }
        renderPatientsList();
      });
    });

    // Delegation for Patient Action Buttons in Table & Grid
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;

      const action = btn.getAttribute('data-action');
      const id = btn.getAttribute('data-id');

      if (action === 'view') {
        openPatientDossier(id);
      } else if (action === 'vitals') {
        openVitalsModal(id);
      } else if (action === 'edit') {
        const patient = patients.find(p => p.id === id);
        if (patient) openPatientModal(patient);
      } else if (action === 'delete') {
        deletePatient(id);
      }
    });

    // Patient Registration Modal Controls
    btnOpenNewPatientModal.addEventListener('click', () => openPatientModal());
    closePatientModalBtn.addEventListener('click', closePatientModal);
    btnCancelPatientModal.addEventListener('click', closePatientModal);
    patientForm.addEventListener('submit', handleSavePatient);

    // Emergency Rapid Triage intake button
    btnEmergencyAdmission.addEventListener('click', () => {
      openPatientModal();
      document.getElementById('selectDepartment').value = 'Emergency (ER)';
      document.getElementById('selectDoctor').value = 'Dr. Sarah Lin (ICU Specialist)';
      document.getElementById('inputRoomBed').value = 'ER-Bay 01';
      document.getElementById('selectStatus').value = 'ICU';
      document.getElementById('selectTriage').value = 'Critical';
      document.getElementById('inputDiagnosis').value = 'Acute Emergency Trauma / Code Red';
      showToast('Rapid Emergency Intake profile primed', 'danger');
    });

    // Dossier Modal Controls
    closeDossierModalBtn.addEventListener('click', closePatientDossier);
    btnPrintDossier.addEventListener('click', () => window.print());

    btnDossierUpdateVitals.addEventListener('click', () => {
      if (activeDossierPatientId) openVitalsModal(activeDossierPatientId);
    });

    btnDossierEditRecord.addEventListener('click', () => {
      if (activeDossierPatientId) {
        const patient = patients.find(p => p.id === activeDossierPatientId);
        if (patient) openPatientModal(patient);
      }
    });

    btnDossierToggleDischarge.addEventListener('click', () => {
      if (activeDossierPatientId) togglePatientDischarge(activeDossierPatientId);
    });

    // Vitals Modal Controls
    closeVitalsModalBtn.addEventListener('click', closeVitalsModal);
    btnCancelVitalsModal.addEventListener('click', closeVitalsModal);
    vitalsForm.addEventListener('submit', handleSaveVitals);

    // Notifications Dropdown Toggle
    notificationsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationsDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!notificationsDropdown.contains(e.target) && e.target !== notificationsBtn) {
        notificationsDropdown.classList.remove('active');
      }
    });

    // Export CSV
    btnExportCSV.addEventListener('click', exportPatientsToCSV);

    // Reset Sample Data
    btnResetData.addEventListener('click', () => {
      const confirmReset = confirm('Reset patient database to original sample hospital records?');
      if (confirmReset) {
        patients = JSON.parse(JSON.stringify(INITIAL_PATIENTS));
        savePatients();
        showToast('Sample hospital records reloaded', 'info');
      }
    });

    // Schedule round shortcut
    const btnScheduleRound = document.getElementById('btnScheduleRound');
    if (btnScheduleRound) {
      btnScheduleRound.addEventListener('click', () => {
        showToast('Rounds schedule synced with Chief of Medicine rotation', 'info');
      });
    }

    // Close modals on Escape key or backdrop click
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePatientModal();
        closePatientDossier();
        closeVitalsModal();
        notificationsDropdown.classList.remove('active');
      }
    });

    [patientModalOverlay, dossierModalOverlay, vitalsModalOverlay].forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });
  }

  // --- UTILITY FUNCTIONS ---
  function generatePatientId() {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    return `MED-${randNum}`;
  }

  function getTodayDateString() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function getInitials(name) {
    if (!name) return 'PT';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Boot the application
  document.addEventListener('DOMContentLoaded', init);
})();
