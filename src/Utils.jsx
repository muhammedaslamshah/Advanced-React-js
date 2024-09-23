

export const dynamicHandler = (event, Components) => {
  return Components.setState({
    [event.target.name]: event.target.value,
  })
}