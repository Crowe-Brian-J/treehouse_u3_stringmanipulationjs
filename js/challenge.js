const photoName = () => {
  //prompt person to enter name
  let name = prompt('Please enter your name')

  //remove additional whitespaces
  name = name.trim()

  //replace the space between names with underscore
  //name = name.split(' ').join('_')
  name = name.replace(' ', '_')

  //change name to all lowercase
  name = name.toLowerCase()

  alert(`Your photo name is ${name}.jpg`)
}

photoName()
