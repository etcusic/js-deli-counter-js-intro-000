function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var person = katzDeliLine.shift
    return person
  }
}
