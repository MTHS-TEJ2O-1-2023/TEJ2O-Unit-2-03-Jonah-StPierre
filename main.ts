/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Jonah S
 * Created on: Sep 2023
 * This program can preform basic math
*/

basic.clearScreen()
basic.pause(1000)

let length = 5 
let width = 3

let area = length * width
let perimiter = 2 * (length + width)

basic.showString("A rectangle has dimensions 5cm and 3cm.") 
basic.showString("The perimiter would be" + perimiter + "cm") 
basic.showString("The area would be" + area + "cm")