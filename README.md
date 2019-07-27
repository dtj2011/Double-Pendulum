# Double-Pendulum
A Double Pendulum Simulator
Javascript Implementation of CodingTrain's Processing Code with tweaks.
Original Video here: https://www.youtube.com/watch?v=uWzPe_S-RVE&t=1635s

Live animation: https://codepen.io/dtj2011/pen/XvXaWW

### Click Start to start animation, after altering values, click Re-Animate to restart animation.

To make code clean, all variable definitions are added in ReadMe.

## Variable Definitions
var x1 is for current x coordinate of center of upper Pendulum.   

var y1 is for current y coordinate of center of upper pendulum.  

var x2 is for current x coordinate of center of lower pendulum.   

var y2 is for current y coordinate of center of lower pendulum.  

var r1 is length of string of upper pendulum.  

var r2 is length of string of lower pendulum.  

var a1 is angle of upper pendulum with respect to vertical normal.

var a2 is angle of lower pendulum with respect to vertical normal.

var m1 is mass of upper pendulum. 

var m2 is mass of lower pendulum.  

var prevx2 is x coordinate of center of lower pendulum in previous animation frame. 

var prevy2 is y coordinate of center of lower pendulum in previous animation frame. 

var a1_v is rate of change of angle of upper pendulum with respect to normal.

var a2_v is rate of change of angle of lower pendulum with respect to normal.

var gravity is used to define the gravitational constant.

var framecounter is used to keep track of frams, used to change color of strokes drawn.

var animationID is used to store ID of requestioAnimationFrame function to call cancelAnimationFrame.

## User Editable Variables:

A slider is provided using HTML to alter gravitational constant without editing the pend.js file. Permitted values are between 0.1 and 1 with a slider step of 0.01. Default value is 0.4.

Input fields to input angle a1 and angle a2 are given. Angles are converted to radians before doing the calculations.


Other Variables can be edited via editing the pend.js file. More user editable features will be added soon.


## Use of two canvas elements:

Two canvases on top of each other are used. Upper canvas is cleared every frame and pendulums are drawn at new positions each frame after clearing the drawings from previous frame.

Colored lines are drawn on separate canvas because canvas does not need to be cleared.

### Line Stroke color changes evert 30 frames, next color values are randomized.
