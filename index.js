function takeANumber(line, person){
  line.push(person)
  return `Hello, ${person}. You are number ${line[person] + 1} in line.`
}
