const tasks = {
  'icu': [{
    name: 'Vitals',
    type: 'chart',
    frequency: 1
  },
  {
    name: 'Intake',
    type: 'chart',
    frequency: 1
  },
  {
    name: 'Output',
    type: 'chart',
    frequency: 1
  },
  {
    name: 'Tube Feeds',
    type: 'chart',
    frequency: 1
  },
  {
    name: 'Turn/Reposition',
    type: 'chart',
    frequency: 2
  },
  {
    name: 'Oral care',
    type: 'chart',
    frequency: 2
  }],
  'tele': [{
    name: 'Vitals',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Intake',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Output',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Turn/Reposition',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Oral care',
    type: 'chart',
    frequency: 4
  }],
  'medSurg': [{
    name: 'Vitals',
    type: 'chart',
    times: [8, 16, 20, 4]
  },
  {
    name: 'Intake',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Output',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Turn/Reposition',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Oral care',
    type: 'chart',
    frequency: 4
  }],
  'allTasks': [{
    name: 'Temperature',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Assessment',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Lines',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Tubes',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'Drains',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'ADLs',
    type: 'chart',
    frequency: 4
  },
  {
    name: 'AdHoc Shift Screen',
    type: 'chart',
    times: [8, 20]
  },
  {
    name: 'AdHoc Order Entry',
    type: 'chart',
    times: [8, 20]
  },
  {
    name: 'ABCDEF Bundle',
    type: 'chart',
    times: [8, 20]
  },
  {
    name: 'Sedation Vacation',
    type: 'chart',
    times: [8, 20]
  },
  {
    name: 'Plan of Care',
    type: 'chart',
    times: [5, 17]
  },
  {
    name: 'Chart Check',
    type: 'chart',
    times: [5, 17]
  },
  {
    name: 'NIHSS',
    type: 'chart',
    times: [19, 7]
  },
  {
    name: 'Foley Care',
    type: 'chart',
    times: [8, 20]
  },
  {
    name: 'CHG Bath',
    type: 'chart',
    times: [6, 18]
  },
  {
    name: 'Weight',
    type: 'chart',
    times: [6, 18]
  },
  {
    name: 'Renew Restraints',
    type: 'chart',
    times: [0, 12]
  }],

  'admission': [{
    name: 'Notification to Admitting',
    type: 'chart',
  },
  {
    name: 'Notify Provider',
    type: 'chart',
  },
  {
    name: 'Associate Patient Monitor',
    type: 'chart',
  },
  {
    name: 'Temp, VS, Height, Weight, and Glucose',
    type: 'chart',
  },
  {
    name: 'CHG, 2 RN Skin Check',
    type: 'chart',
  },
  {
    name: 'AdHoc - Adult Admission History',
    type: 'chart',
  },
  {
    name: 'AdHoc - Order Entry',
    type: 'chart',
  },
  {
    name: 'AdHoc - Shift Screen',
    type: 'chart',
  },
  {
    name: 'AdHoc - Valuables/Belongings',
    type: 'chart',
  },
  {
    name: 'AdHoc - ED - Swallow Screen for Dysphagia',
    type: 'chart',
  },
  {
    name: 'AdHoc- PAWSS (if ETOH)',
    type: 'chart',
  },
  {
    name: 'Home Meds and Patient Pharm',
    type: 'chart',
  },
  {
    name: 'Patient Education',
    type: 'chart',
  },
  {
    name: 'Care Plans',
    type: 'chart',
  },
  {
    name: 'Inform patient family, Room Number, Unit number, Patient PIN',
    type: 'chart',
  }],
  'restraints': [{
    name: 'Restraints',
    type: 'chart',
    frequency: 2
  }],
  'pain': [{
    name: 'Pain',
    type: 'chart',
    frequency: 4
  }],
  'rass': [{
    name: 'RASS',
    type: 'chart',
    frequency: 4
  }],
  'neuro': [{
    name: 'Neuro',
    type: 'chart',
    frequency: 4
  }]
}

export default tasks;