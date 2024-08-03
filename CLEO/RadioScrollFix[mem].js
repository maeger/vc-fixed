/// <reference path=".config/vc.d.ts" />
/**
 *  AUTHOR: WastedHymn
 *  DATE: 02.02.2023
 */

let player = new Player(0);
const KEY_X = 88;
const MOUSEWHEELUP = 0x93690b;
const MOUSEWHEELDOWN = 0x93690c;
const MAXRADIOINDEX = 10;
const MINRADIOINDEX = 0;

function readRadioIndex() {
  let carHandle = player.storeCarIsInNoSave();
  let memoryAddress = Memory.GetVehiclePointer(carHandle) + 0x23c;
  let radioIndex = Memory.ReadI8(memoryAddress, 0);
  return radioIndex;
}

function previousStation() {
  let radioIndex = readRadioIndex();
  if (radioIndex - 1 < 0) {
    Audio.SetRadioChannel(10, -1);
  } else {
    radioIndex -= 1;
    //TO PREVENT THE GAME CRASHING SKIP MP3 RADIO STATION
    if (radioIndex == 9) radioIndex -= 1;
    Audio.SetRadioChannel(radioIndex, -1);
  }
}

function radioOff() {
  Audio.SetRadioChannel(10, -1);
}

while (true) {
  if (Memory.ReadI8(MOUSEWHEELDOWN, 0)) {
    if (player.isSittingInAnyCar()) {
      previousStation();
    }
  }
  if (Pad.IsKeyDown(KEY_X)) {
    if (player.isSittingInAnyCar()) {
      radioOff();
    }
  }
  wait(0);
}
