

const filterTasks = (tasks, date, currentShift) => {
  console.log(currentShift)
  
  const currentShiftTasks = tasks.filter((task) => { return currentShift.indexOf(task.hour) > -1 })
  
  const incomplete = currentShiftTasks.filter((task) => { return task.complete === false })

  const currentTasks = incomplete.filter((task) => { return parseFloat(task.hour) === parseFloat(date[3]) })

  let object = {
    currentShift: currentShiftTasks,
    incomplete: incomplete,
    currentTasks: currentTasks,
    medTasks: currentTasks.filter((task) => { return task.type === 'meds' }),
    chartTasks: currentTasks.filter((task) => { return task.type === 'chart' }),
  }

  return object;
}

export default filterTasks;