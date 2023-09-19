function parseHour (hour) {
  return parseFloat(hour.split(':')[0]);
};

function filterShiftTasks (shiftHours, tasks) {
  return tasks.filter((task) => { 
    return shiftHours.indexOf(parseHour(task.hour)) > -1;
  });
};

function filterHourTasks (hour, tasks) {
  return tasks.filter((task) => {
    return parseHour(task.hour) === parseFloat(hour);
  })
}

function filterIncompleteTasks (tasks) {
  return tasks.filter((task) => { return !task.complete });
}

function filterTypeTasks (tasks, type) {
  return tasks.filter((task) => { return task.type === type});
};


export { filterShiftTasks, filterHourTasks, filterIncompleteTasks, filterTypeTasks };