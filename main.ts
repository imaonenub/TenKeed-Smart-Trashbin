/**
 * github.com/imaonenub/ai-serial-connection
 */
/**
 * after 2s da code will run
 */
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString("Your Device Connected")
    basic.pause(2000)
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    // This If statement checks that variable with the class name, and if it matches the class name you entered, it will activate the code within that block
    if (SerialData == "1") {
        show_title()
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "2") {
        show_title()
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "3") {
        show_title()
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SerialData == "4") {
        show_title()
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
function show_title () {
    basic.showString(SerialData)
    basic.pause(2000)
    basic.showString("Ai Trash Bin")
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(500)
    basic.clearScreen()
    strip.clear()
}
let SerialData = ""
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
serial.redirectToUSB()
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P5) < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        strip.clear()
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
