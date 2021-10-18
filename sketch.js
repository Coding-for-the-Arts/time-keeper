/*
  Mit Sinus angetriebene Animationen
*/

let a = 0 // «Winkel» zur Errechnung von Sinus/Cosinus

function setup() {
  createCanvas(400, 400)

}

function draw() {
  let factor = sin(a)

  background(220)

  /* Ein Kreis von links nach rechts */
  let diameter = 10
  let circleX = map(factor, -1, 1, 0, width-diameter)
  ellipse(circleX, 100, diameter)

  // Den «Winkel» erhöhen
  const increment = TAU/360
  a += increment
}