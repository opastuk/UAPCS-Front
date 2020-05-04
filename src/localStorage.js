const LS = {
  isSecondEntry: function (){
  const isSecondEntry = localStorage.getItem('isSecondEntry')
  return isSecondEntry ? isSecondEntry : false;
},

  setSecondEntry: function (){
  return localStorage.setItem('isSecondEntry', 'true');
}
}

export default LS
