const tasks = {
  temperature : {
    name: 'Temperature',
    type: 'chart',
    frequency: 4,
    status: false
  },
  vitals : {
    name: 'Vitals',
    type: 'chart',
    frequency: 4,
    status: true
  },
  rass: {
    name: 'RASS',
    type: 'chart',
    frequency: 4,
    status: false
  },
  camICU: {
    name: 'CAM ICU',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  pain: {
    name: 'Pain',
    type: 'chart',
    frequency: 4,
    status: false
  },
  nihss: {
    name: 'NIHSS',
    type: 'chart',
    times: ['7:00', '19:00'],
    status: false
  },
  turns: {
    name: 'Turn and Reposition',
    type: 'chart',
    frequency: 2,
    status: false
  },
  oralCare: {
    name: 'Oral care',
    type: 'chart',
    frequency: 4,
    status: false
  },
  adls: {
    name: 'ADLs',
    type: 'chart',
    frequency: 4,
    status: false
  },
  neuro: {
    name: 'Neuro',
    type: 'chart',
    frequency: 4,
    status: false
  },
  assessment: {
    name: 'Assessment',
    type: 'chart',
    frequency: 4,
    status: false
  },
  tubesDrains: {
    name: 'Tubes and Drains',
    type: 'chart',
    frequency: 4,
    status: false
  },
  lines: {
    name: 'Lines',
    type: 'chart',
    frequency: 4,
    status: false
    },
  intake: {
    name: 'Intake',
    type: 'chart',
    frequency: 4,
    status: true
  },
  output: {
    name: 'Output',
    type: 'chart',
    frequency: 4,
    status: true
  },
  shiftScreen: {
    name: 'AdHoc Shift Screen',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  orderEntry: {
    name: 'AdHoc Order Entry',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  abcdefBundle: {
    name: 'ABCDEF Bundle',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  sat: {
    name: 'Spontaneous Awakening Trial',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  planOfCare: {
    name: 'Plan of Care',
    type: 'chart',
    times: ['5:00', '17:00'],
    status: false
  },
  chartCheck: {
    name: 'Chart Check',
    type: 'chart',
    times: ['5:00', '17:00'],
    status: false
  },
  foleyCare: {
    name: 'Foley Care',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  bath: {
    name: 'Bath',
    type: 'chart',
    times: ['8:00', '20:00'],
    status: false
  },
  weight: {
    name: 'Weight',
    type: 'chart',
    times: ['6:00', '18:00'],
    status: false
  },
}

const restraintsDoc = {
  renewRestraints: {
    name: 'Renew Restraints',
    type: 'chart',
    times: ['12:00', '0:00'],
    status: false,
  },
  restraints: {
    name: 'Restraints',
    type: 'chart',
    frequency: 2,
    status: false
  },
}

const admissionDoc = {
  notificationAdmitting: {
    name: 'Notification to Admitting',
    type: 'chart',
  },
  notifyProvider: {
    name: 'Notify Provider',
    type: 'chart',
  },
  associateMonitor: {
    name: 'Associate Patient Monitor',
    type: 'chart',
  },
  vitals: {
    name: 'Temp, VS, Height, Weight, and Glucose',
    type: 'chart',
  },
  skin: {
    name: 'CHG, 2 RN Skin Check',
    type: 'chart',
  },
  admissionHx: {
    name: 'AdHoc - Adult Admission History',
    type: 'chart',
  },
  orderEntry: {
    name: 'AdHoc - Order Entry',
    type: 'chart',
  },
  shiftScreen: {
    name: 'AdHoc - Shift Screen',
    type: 'chart',
  },
  valuables: {
    name: 'AdHoc - Valuables and Belongings',
    type: 'chart',
  },
  swallowScreen: {
    name: 'AdHoc - ED - Swallow Screen for Dysphagia',
    type: 'chart',
  },
  pawss: {
    name: 'AdHoc- PAWSS (if ETOH)',
    type: 'chart',
  },
  homeMeds: {
    name: 'Home Meds and Patient Pharm',
    type: 'chart',
  },
  ptEd: {
    name: 'Patient Education',
    type: 'chart',
  },
  carePlans: {
    name: 'Care Plans',
    type: 'chart',
  },
  inform: {
    name: 'Inform patient family, Room Number, Unit number, Patient PIN',
    type: 'chart',
  }
}

export { tasks, restraintsDoc, admissionDoc };