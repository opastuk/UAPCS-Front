global.isSecondEntry = () => {
  const isSecondEntry =  localStorage.getItem('isSecondEntry')
  return isSecondEntry ? isSecondEntry : false;
}

global.setSecondEntry = () => {
  localStorage.setItem('isSecondEntry', 'true');
}
