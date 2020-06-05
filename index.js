function takeANumber(line, person){
  line.push(person)
  return `Hello, ${person}. You are number ${line.length + 1} in line.`
}