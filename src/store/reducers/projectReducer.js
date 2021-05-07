const initState = {
  projects: [
    { id: '1', title: 'Jack Pritom Soren Building a Project', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'Testing application', content: 'blah blah blah' }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": console.log("created project", action.project)
  }
  return state
}

export default projectReducer