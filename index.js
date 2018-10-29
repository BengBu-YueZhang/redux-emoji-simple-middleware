const emoji = stroe => next => action => {
  try {
    console.log(`😐 ${action.type}`)
    let result = next(action)
    console.log(`😂 ${action.type}`)
    return result
  } catch (error) {
    console.log(error)
    console.log(`😢 ${action.type}`)
  }
}

export default emoji