input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else {
            if (hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    if (minutes < 10) {
        time = "" + time + "0"
    }
    time = "" + time + minutes
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
let ampm = false
let time = ""
let adjust = 0
let minutes = 0
let hours = 0
hours = 0
minutes = 0
adjust = 0
time = ""
ampm = false
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
