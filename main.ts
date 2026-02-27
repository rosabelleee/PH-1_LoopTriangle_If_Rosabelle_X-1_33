let index = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
let x = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0,
0
]
let y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0
]
basic.forever(function () {
    if (index < x.length) {
        led.plot(x[index], y[index])
        basic.pause(500)
        basic.clearScreen()
        index += 1
    } else {
        index = 0
    }
})
