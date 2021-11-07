const yazdir = document.querySelector(".face")

const today = new Date()
const date = today.getDate()
const day = today.getDay()
const fullYear = today.getFullYear()
const hours = today.getHours()
const isoString = today.toISOString()

const yilSonu = new Date("2021-12-30T08:02:46.243Z")
const milisecondsToYilsonu = yilSonu - today
const minutesTo = milisecondsToYilsonu / 60000
console.log(minutesTo)

yazdir.textContent = Math.round(minutesTo)
