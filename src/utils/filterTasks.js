function parseHour (hour) {
  return parseFloat(hour.split(':')[0]);
};

function currentShiftTasks (shiftHours, tasks) {
  return tasks.filter((task) => { 
    return shiftHours.indexOf(parseHour(task.hour)) > -1;
  });
};

function currentHourTasks (hour, tasks) {
  return tasks.filter((task) => {
    return parseHour(task.hour) === parseFloat(hour);
  })
}

function incompleteTasks (tasks) {
  return tasks.filter((task) => { return !task.complete });
}

function taskType (tasks, type) {
  return tasks.filter((task) => { return task.type === type});
};


export { currentShiftTasks, currentHourTasks, incompleteTasks, taskType };