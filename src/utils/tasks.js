const tasks = {
  temperature: {
    name: 'Temperature',
    type: 'chart',
    frequency: 4,
  },
  vitals: {
    name: 'Vitals',
    type: 'chart',
    frequency: 4,
  },
  rass: {
    name: 'RASS',
    type: 'chart',
    frequency: 4,
  },
  camICU: {
    name: 'CAM ICU',
    type: 'chart',
    times: ['0800', '2000'],
  },
  pain: {
    name: 'Pain',
    type: 'chart',
    frequency: 4,
  },
  nihss: {
    name: 'NIHSS',
    type: 'chart',
    times: ['0700', '1900'],
  },
  turns: {
    name: 'Turn and Reposition',
    type: 'chart',
    frequency: 4,
  },
  oralCare: {
    name: 'Oral care',
    type: 'chart',
    frequency: 4,
  },
  adls: {
    name: 'ADLs',
    type: 'chart',
    frequency: 4,
  },
  neuro: {
    name: 'Neuro',
    type: 'chart',
    frequency: 4,
  },
  assessment: {
    name: 'Assessment',
    type: 'chart',
    frequency: 4,
  },
  tubesDrains: {
    name: 'Tubes and Drains',
    type: 'chart',
    frequency: 4,
  },
  lines: {
    name: 'Lines',
    type: 'chart',
    frequency: 4,
  },
  intake: {
    name: 'Intake',
    type: 'chart',
    frequency: 4,
  },
  output: {
    name: 'Output',
    type: 'chart',
    frequency: 4,
  },
  shiftScreen: {
    name: 'AdHoc Shift Screen',
    type: 'chart',
    times: ['0800', '2000'],
  },
  orderEntry: {
    name: 'AdHoc Order Entry',
    type: 'chart',
    times: ['0800', '2000'],
  },
  abcdefBundle: {
    name: 'ABCDEF Bundle',
    type: 'chart',
    times: ['0800', '2000'],
  },
  sat: {
    name: 'Spontaneous Awakening Trial',
    type: 'chart',
    times: ['0800', '2000'],
  },
  planOfCare: {
    name: 'Plan of Care',
    type: 'chart',
    times: ['0500', '1700'],
  },
  chartCheck: {
    name: 'Chart Check',
    type: 'chart',
    times: ['0500', '1700'],
  },
  foleyCare: {
    name: 'Foley Care',
    type: 'chart',
    times: ['0800', '2000'],
  },
  bath: {
    name: 'Bath',
    type: 'chart',
    times: ['0800', '2000'],
  },
  weight: {
    name: 'Weight',
    type: 'chart',
    times: ['0600', '1800'],
  },
}

const restraintsDoc = {
  renewRestraints: {
    name: 'Renew Restraints',
    type: 'chart',
    times: ['1200', '0000'],
  },
  restraints: {
    name: 'Restraints',
    type: 'chart',
    frequency: 2,
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