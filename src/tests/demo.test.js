test('argument',()=>{
  const isActive=true;

  if(isActive){
    throw new Error('No esta activo');
  }
})
