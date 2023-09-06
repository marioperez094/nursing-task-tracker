const filterTasks = (tasks, currentHour, currentShift) => {
  
  const currentShiftTasks = tasks.filter((task) => { 
    let hour = parseFloat(task.hour.split(':')[0]);
    return currentShift.indexOf(hour) > -1;
  })


  const currentTasks = currentShiftTasks.filter((task) => { 
    let hour = parseFloat(task.hour.split(':')[0]);
    return parseFloat(hour) === parseFloat(currentHour) 
  })

  let object = {
    currentShift: currentShiftTasks,
    currentTasks: currentTasks,
    medTasks: currentTasks.filter((task) => { return task.type === 'meds' }),
    chartTasks: currentTasks.filter((task) => { return task.type === 'chart' }),
    personalTasks: currentTasks.filter((task) => { return task.type === 'personal' })
  }

  return object;
}

export default filterTasks;