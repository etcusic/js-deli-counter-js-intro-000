function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine.shift()
    return `Currently serving &{person}!`
  }
}
