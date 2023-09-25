/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Jonah S
 * Created on: Sep 2023
 * This program can preform basic math
*/

basic.clearScreen()
basic.pause(1000)

const length = 5
const width = 3

const area = length * width
const perimiter = 2 * (length + width)

basic.showString('A rectangle has dimensions 5cm and 3cm.')
basic.showString('The perimiter would be' + perimiter.toString() + 'cm')
basic.showString('The area would be' + area.toString() + 'cm')
