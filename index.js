const emoji = stroe => next => action => {
  try {
    console.log('😐')
    let result = next(action)
    console.log('😂')
    return result
  } catch (error) {
    console.log(error)
    console.log('😢')
  }
}

export default emoji