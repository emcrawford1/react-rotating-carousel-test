const getClasses = classObj => {
  let classList = '';
  
  for(const [key, value] of Object.entries(classObj)) {
    if(value) classList += key;
  }

  return classList;
}

export { getClasses };