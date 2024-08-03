// Sanny Builder Library v0.258
/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />
/** Integer value */
type int = (number & { _int: never }) | number;
/** Floating-point value */
type float = (number & { _float: never }) | number;
/** Vector3 type */
type Vector3 = { x: float; y: float; z: float };

/** Pauses the script execution for the specified amount of time in milliseconds */
declare function wait(delay: int): void;
/** Returns a Promise that resolves after given time in milliseconds */
declare function asyncWait(delay: int): Promise<void>;
/** Displays a black text box with custom text. Not available on an `unknown` host */
declare function showTextBox(text: string): void;
/** Prints values to the cleo_redux.log */
declare function log(...values: Array<string | int | float>): void;
/** Executes the command by name with the given arguments */
declare function native<T>(name: string, ...args: any[]): T;
/** Terminates the script and optionally writes a reason to the log file */
declare function exit(reason?: string): void;
/** Creates a new event listener https://re.cleo.li/docs/en/events.html */
declare function addEventListener<T>(event: string, callback: (event: CleoEvent<T>) => void): () => void;
/** Dispatches an event https://re.cleo.li/docs/en/events.html */
declare function dispatchEvent<T>(event: string, data?: T): void;
// Sets a timer which executes a function once the timer expires
declare function setTimeout(callback: () => void, delay?: int, ...args: any[]): number;
// Repeatedly calls a function with a fixed time delay between each call
declare function setInterval(callback: () => void, delay?: int, ...args: any[]): number;
// Cancels a timeout previously established by calling setTimeout()
declare function clearTimeout(id: number): void;
// Cancels a timed, repeating action which was previously established by a call to setInterval()
declare function clearInterval(id: number): void;

/** Current host name */
declare const HOST:
  | "re3"
  | "reVC"
  | "gta3"
  | "vc"
  | "sa"
  | "gta3_unreal"
  | "vc_unreal"
  | "sa_unreal"
  | "gta_iv"
  | "bully"
  | "unknown";
/** Is player on a mission flag. Not available on an `unknown` host */
declare var ONMISSION: boolean;
/** Self-incrementing timer #1 */
declare var TIMERA: int;
/** Self-incrementing timer #2 */
declare var TIMERB: int;
/** Current file's directory */
declare const __dirname: string;
/** Current file's path */
declare const __filename: string;

declare interface Version {
  readonly major: string;
  readonly minor: string;
  readonly patch: string;
  readonly pre: string;
  readonly build: string;
  toString(): string;
}
declare interface CleoEvent<T = object> {
  name: string;
  data: T | undefined;
}
interface CLEO {
  readonly version: Version;
  readonly apiVersion: Version;
  debug: {
    /** Enables or disables tracing of executed commands in cleo_redux.log */
    trace(flag: boolean): void;
  };
  /** Spawns a new instance of a script at path and optionally sets initial values for the variables */
  runScript(path: string, args?: object): void;
}

declare const CLEO: CLEO;
interface FxtStore {
  /**
   * Inserts new text content in the script's fxt storage overwriting the previous content and shadowing static fxt with the same key
   * @param key GXT key that can be used in text commands (7 characters max)
   * @param value text content
   * @param [isGlobal] if true, the text affects global FXT storage
   */
  insert(key: string, value: string, isGlobal?: boolean): void;
  /**
   * Removes the text content associated with the key in the local fxt storage
   * @param key GXT key
   * @param [isGlobal] if true, the text affects global FXT storage
   */
  delete(key: string, isGlobal?: boolean): void;
}

declare const FxtStore: FxtStore;
/** Audio Effects
 * 
 * https://library.sannybuilder.com/#/vc/classes/Audio */
interface Audio {
    /** Unloads the mission audio (03CF), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_MISSION_AUDIO */
    ClearMissionAudio(slotId: int): void;
    /** Returns true if the audio (03CF) is no longer playing
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_MISSION_AUDIO_FINISHED */
    HasMissionAudioFinished(slotId: int): boolean;
    /** Returns true if the mission audio has loaded (03CF)
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_MISSION_AUDIO_LOADED */
    HasMissionAudioLoaded(slotId: int): boolean;
    /** Loads the end of game music
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_END_OF_GAME_TUNE */
    LoadEndOfGameTune(): void;
    /** Loads the file from the audio directory
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_MISSION_AUDIO */
    LoadMissionAudio(slotId: int, name: string): void;
    /** Plays an announcement audio
    *
    * https://library.sannybuilder.com/#/vc?q=PLAY_ANNOUNCEMENT */
    PlayAnnouncement(track: int): void;
    /** Plays the theme tune
    *
    * https://library.sannybuilder.com/#/vc?q=PLAY_END_OF_GAME_TUNE */
    PlayEndOfGameTune(): void;
    /** Plays the loaded sound (03CF)
    *
    * https://library.sannybuilder.com/#/vc?q=PLAY_MISSION_AUDIO */
    PlayMissionAudio(slotId: int): void;
    /** Plays an audio file with the specified ID from the Audio directory
    *
    * https://library.sannybuilder.com/#/vc?q=PLAY_MISSION_PASSED_TUNE */
    PlayMissionPassedTune(soundId: int): void;
    /** Plays police radio message audio reporting the suspect has last been seen at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=POLICE_RADIO_MESSAGE */
    PoliceRadioMessage(x: float, y: float, z: float): void;
    /** Sets the location of the mission audio (03CF) where it can be heard
    *
    * https://library.sannybuilder.com/#/vc?q=SET_MISSION_AUDIO_POSITION */
    SetMissionAudioPosition(slotId: int, x: float, y: float, z: float): void;
    /** Sets whether sounds should fade along with the screen
    *
    * https://library.sannybuilder.com/#/vc?q=SET_MUSIC_DOES_FADE */
    SetMusicDoesFade(state: boolean): void;
    /** Sets the current radio station that is playing, if the player is in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_RADIO_CHANNEL */
    SetRadioChannel(channel: int, startFromMs: int): void;
    /** Stops the theme tune
    *
    * https://library.sannybuilder.com/#/vc?q=STOP_END_OF_GAME_TUNE */
    StopEndOfGameTune(): void;
}
declare var Audio: Audio
/** Markers and Radar Icons
 * 
 * https://library.sannybuilder.com/#/vc/classes/Blip */
declare class Blip {
    constructor(handle: number);
    /** Adds a blip and a marker to the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_CAR */
    static AddForCar(vehicle: Car): Blip;
    /** Adds a blip with properties to the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_CAR_OLD */
    static AddForCarOld(vehicle: Car, color: int, display: int): Blip;
    /** Adds a blip and a marker to the character
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_CHAR */
    static AddForChar(char: Char): Blip;
    /** Adds a blip with properties to the character
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_CHAR_OLD */
    static AddForCharOld(char: Char, color: int, display: int): Blip;
    /** Adds a blip to the contact point
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_CONTACT_POINT */
    static AddForContactPoint(x: float, y: float, z: float): Blip;
    /** Adds a blip to the location
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_COORD */
    static AddForCoord(x: float, y: float, z: float): Blip;
    /** Adds a blip with properties at the location
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_COORD_OLD */
    static AddForCoordOld(x: float, y: float, z: float, colour: int, display: int): Blip;
    /** Adds a blip and a marker to the object
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_OBJECT */
    static AddForObject(object: ScriptObject): Blip;
    /** Adds a blip and a marker to the pickup
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLIP_FOR_PICKUP */
    static AddForPickup(pickup: Pickup): Blip;
    /** Adds a contact sprite blip for the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SHORT_RANGE_SPRITE_BLIP_FOR_CONTACT_POINT */
    static AddShortRangeSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip for the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SHORT_RANGE_SPRITE_BLIP_FOR_COORD */
    static AddShortRangeSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the contact point
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SPRITE_BLIP_FOR_CONTACT_POINT */
    static AddSpriteForContactPoint(x: float, y: float, z: float, sprite: int): Blip;
    /** Adds a sprite blip to the location
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SPRITE_BLIP_FOR_COORD */
    static AddSpriteForCoord(x: float, y: float, z: float, sprite: int): Blip;
    /** Sets the blip's color
    *
    * https://library.sannybuilder.com/#/vc?q=CHANGE_BLIP_COLOUR */
    changeColor(color: int): Blip;
    /** Changes the display of the specified blip
    *
    * https://library.sannybuilder.com/#/vc?q=CHANGE_BLIP_DISPLAY */
    changeDisplay(display: int): Blip;
    /** Sets the blip's size
    *
    * https://library.sannybuilder.com/#/vc?q=CHANGE_BLIP_SCALE */
    changeScale(size: int): Blip;
    /** Sets whether the blip should appear dimmed
    *
    * https://library.sannybuilder.com/#/vc?q=DIM_BLIP */
    dim(state: boolean): Blip;
    /** Removes the blip
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_BLIP */
    remove(): void;
}
/** Camera/View Manipulation
 * 
 * https://library.sannybuilder.com/#/vc/classes/Camera */
interface Camera {
    /** Fades the screen for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=DO_FADE */
    DoFade(time: int, direction: int): void;
    /** Returns the debug camera position
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DEBUG_CAMERA_COORDINATES */
    GetDebugCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the location the debug camera is pointing to
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DEBUG_CAMERA_POINT_AT */
    GetDebugPointAt(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the screen is fading (016A)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_FADING_STATUS */
    GetFadingStatus(): boolean;
    /** Returns true if any part of the radius of the specified point is visible on screen
    *
    * https://library.sannybuilder.com/#/vc?q=IS_POINT_ON_SCREEN */
    IsPointOnScreen(x: float, y: float, z: float, radius: float): boolean;
    /** Attaches the camera to the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=POINT_CAMERA_AT_CAR */
    PointAtCar(vehicle: Car, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=POINT_CAMERA_AT_CHAR */
    PointAtChar(char: Char, mode: int, switchStyle: int): void;
    /** Attaches the camera to the specified player
    *
    * https://library.sannybuilder.com/#/vc?q=POINT_CAMERA_AT_PLAYER */
    PointAtPlayer(player: Player, mode: int, switchStyle: int): void;
    /** Points the camera at the specified location and applies the position set by 0159
    *
    * https://library.sannybuilder.com/#/vc?q=POINT_CAMERA_AT_POINT */
    PointAtPoint(x: float, y: float, z: float, switchStyle: int): void;
    /** Restores the camera to its usual position
    *
    * https://library.sannybuilder.com/#/vc?q=RESTORE_CAMERA */
    Restore(): void;
    /** Restores the camera, putting it back behind the player
    *
    * https://library.sannybuilder.com/#/vc?q=RESTORE_CAMERA_JUMPCUT */
    RestoreJumpcut(): void;
    /** Puts the camera behind the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAMERA_BEHIND_PLAYER */
    SetBehindPlayer(): void;
    /** Sets the RGB color of the fade command (016A)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_FADING_COLOUR */
    SetFadingColor(r: int, g: int, b: int): void;
    /** Sets the camera's position and rotation
    *
    * https://library.sannybuilder.com/#/vc?q=SET_FIXED_CAMERA_POSITION */
    SetFixedPosition(x: float, y: float, z: float, xRotation: float, yRotation: float, zRotation: float): void;
    /** Enables traffic spawn at the camera position, otherwise at the player position (default)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_GENERATE_CARS_AROUND_CAMERA */
    SetGenerateCarsAround(state: boolean): void;
    /** Puts the camera in front of the player, pointing towards the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAMERA_IN_FRONT_OF_PLAYER */
    SetInFrontOfPlayer(): void;
    /** Sets how long the camera transition will last
    *
    * https://library.sannybuilder.com/#/vc?q=SET_INTERPOLATION_PARAMETERS */
    SetInterpolationParameters(_p1: float, time: int): void;
    /** Sets the near clip
    *
    * https://library.sannybuilder.com/#/vc?q=SET_NEAR_CLIP */
    SetNearClip(value: float): void;
    /** Sets how far behind the camera is from the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAMERA_ZOOM */
    SetZoom(zoom: int): void;
    /** Shakes the camera with the given intensity
    *
    * https://library.sannybuilder.com/#/vc?q=SHAKE_CAM */
    Shake(intensity: int): void;
    /** Displays a white interference overlay on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_LIFT_CAMERA */
    SwitchLift(state: boolean): void;
    /** Displays a green scan line overlay on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_SECURITY_CAMERA */
    SwitchSecurity(state: boolean): void;
}
declare var Camera: Camera
/** Script Vehicles
 * 
 * https://library.sannybuilder.com/#/vc/classes/Car */
declare class Car {
    constructor(handle: number);
    /** Creates a vehicle at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CAR */
    static Create(modelId: int, x: float, y: float, z: float): Car;
    /** Returns true if the handle is an invalid vehicle handle or the vehicle has been destroyed (wrecked)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_DEAD */
    static IsDead(handle: int): boolean;
    /** Sets the variation of the next car to be created
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_MODEL_COMPONENTS */
    static SetModelComponents(_unused: int, component1: int, component2: int): void;
    /** Activates upside-down car check for the car
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_UPSIDEDOWN_CAR_CHECK */
    addUpsidedownCheck(): Car;
    /** Deflates the car's tire
    *
    * https://library.sannybuilder.com/#/vc?q=BURST_CAR_TYRE */
    burstTire(tireId: int): Car;
    /** Sets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/vc?q=CHANGE_CAR_COLOUR */
    changeColor(primaryColor: int, secondaryColor: int): Car;
    /** Clears the vehicle's last weapon damage (see 031E)
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CAR_LAST_WEAPON_DAMAGE */
    clearLastWeaponDamage(): Car;
    /** Closes all car doors, hoods and boots
    *
    * https://library.sannybuilder.com/#/vc?q=CLOSE_ALL_CAR_DOORS */
    closeAllDoors(): Car;
    /** Removes the vehicle from the game
    *
    * https://library.sannybuilder.com/#/vc?q=DELETE_CAR */
    delete(): void;
    /** Disarms the car's bomb
    *
    * https://library.sannybuilder.com/#/vc?q=DISARM_CAR_BOMB */
    disarmBomb(): Car;
    /** Makes the vehicle explode
    *
    * https://library.sannybuilder.com/#/vc?q=EXPLODE_CAR */
    explode(): Car;
    /** Locks the vehicle's position
    *
    * https://library.sannybuilder.com/#/vc?q=FREEZE_CAR_POSITION */
    freezePosition(state: boolean): Car;
    /** Makes the car maintain its position
    *
    * https://library.sannybuilder.com/#/vc?q=FREEZE_CAR_POSITION_AND_DONT_LOAD_COLLISION */
    freezePositionAndDontLoadCollision(state: boolean): Car;
    /** Gets the car's primary and secondary colors
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_COLOURS */
    getColors(): {
        primaryColour: int;
        secondaryColour: int;
    };
    /** Returns the vehicle's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_COORDINATES */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the car's driver handle
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DRIVER_OF_CAR */
    getDriver(): Char;
    /** Returns the X coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_FORWARD_X */
    getForwardX(): float;
    /** Returns the Y coord of the vehicle's angle
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_FORWARD_Y */
    getForwardY(): float;
    /** Returns the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_HEADING */
    getHeading(): float;
    /** Returns the vehicle's health
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_HEALTH */
    getHealth(): int;
    /** Returns the maximum number of passengers that could sit in the car
    *
    * https://library.sannybuilder.com/#/vc?q=GET_MAXIMUM_NUMBER_OF_PASSENGERS */
    getMaximumNumberOfPassengers(): int;
    /** Returns the car's model id
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_MODEL */
    getModel(): int;
    /** Returns the number of passengers sitting in the car
    *
    * https://library.sannybuilder.com/#/vc?q=GET_NUMBER_OF_PASSENGERS */
    getNumberOfPassengers(): int;
    /** Returns the coordinates of an offset of the vehicle's position, depending on the vehicle's rotation
    *
    * https://library.sannybuilder.com/#/vc?q=GET_OFFSET_FROM_CAR_IN_WORLD_COORDS */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Gets the car's speed
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CAR_SPEED */
    getSpeed(): float;
    /** Makes the AI drive to the specified location by any means
    *
    * https://library.sannybuilder.com/#/vc?q=CAR_GOTO_COORDINATES */
    gotoCoordinates(x: float, y: float, z: float): Car;
    /** Makes the AI drive to the specified location obeying the traffic rules
    *
    * https://library.sannybuilder.com/#/vc?q=CAR_GOTO_COORDINATES_ACCURATE */
    gotoCoordinatesAccurate(x: float, y: float, z: float): Car;
    /** Returns true if the vehicle has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CAR_BEEN_DAMAGED_BY_WEAPON */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the car's health is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_HEALTH_GREATER */
    isHealthGreater(health: int): boolean;
    /** Returns true if the vehicle's siren is on
    *
    * https://library.sannybuilder.com/#/vc?q=IS_ICECREAM_JINGLE_ON */
    isIcecreamJingleOn(): boolean;
    /** Returns true if the vehicle is in the air
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_IN_AIR_PROPER */
    isInAirProper(): boolean;
    /** Returns true if the vehicle is located within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_IN_AREA_2D */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is located within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_IN_AREA_3D */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_IN_WATER */
    isInWater(): boolean;
    /** Returns true if the vehicle has the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_MODEL */
    isModel(modelId: int): boolean;
    /** Returns true if the car is burning
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_ON_FIRE */
    isOnFire(): boolean;
    /** Returns true if the car is visible
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_ON_SCREEN */
    isOnScreen(): boolean;
    /** Returns true if the specified car seat is empty
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_PASSENGER_SEAT_FREE */
    isPassengerSeatFree(seatIndex: int): boolean;
    /** Returns true if the vehicle is not moving
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_STOPPED */
    isStopped(): boolean;
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the car has been upside down for more than 2 seconds (requires 0190)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_STUCK_ON_ROOF */
    isStuckOnRoof(): boolean;
    /** Returns true if a given tire on the car is deflated
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_TYRE_BURST */
    isTireBurst(tireId: int): boolean;
    /** Returns true if the vehicle is in the normal position (upright)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_UPRIGHT */
    isUpright(): boolean;
    /** Returns true if the car is upside down
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_UPSIDEDOWN */
    isUpsidedown(): boolean;
    isWaitingForWorldCollision(): boolean;
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateStopped2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the car is stopped in the radius of the specified point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CAR_3D */
    locateStopped3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Sets the locked status of the car's doors
    *
    * https://library.sannybuilder.com/#/vc?q=LOCK_CAR_DOORS */
    lockDoors(lockStatus: int): Car;
    /** Marks the car as being part of a convoy, which seems to follow a path set by 0994
    *
    * https://library.sannybuilder.com/#/vc?q=MARK_CAR_AS_CONVOY_CAR */
    markAsConvoyCar(state: boolean): Car;
    /** Allows the vehicle to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/vc?q=MARK_CAR_AS_NO_LONGER_NEEDED */
    markAsNoLongerNeeded(): Car;
    /** Opens the car's trunk and keeps it open
    *
    * https://library.sannybuilder.com/#/vc?q=POP_CAR_BOOT */
    popBoot(): Car;
    /** Opens the trunk/boot door component of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=POP_CAR_BOOT_USING_PHYSICS */
    popBootUsingPhysics(): Car;
    /** Deactivates upside-down car check (0190) for the car
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_UPSIDEDOWN_CAR_CHECK */
    removeUpsidedownCheck(): Car;
    /** Sets the driver and all passengers' objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ALL_OCCUPANTS_OF_CAR_LEAVE_CAR */
    setAllOccupantsLeave(): Car;
    /** Sets whether the vehicle will avoid paths between levels (0426)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_AVOID_LEVEL_TRANSITIONS */
    setAvoidLevelTransitions(state: boolean): Car;
    /** Sets whether the car receives damage
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_CAN_BE_DAMAGED */
    setCanBeDamaged(state: boolean): Car;
    /** Sets whether the car's tires can be deflated
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAN_BURST_CAR_TYRES */
    setCanBurstTires(state: boolean): Car;
    /** Enables or disables the ability to Pay'n'Spray the car
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAN_RESPRAY_CAR */
    setCanRespray(state: boolean): Car;
    /** Set's whether the AI driver will occupy the fast (left) lane on a two-way road
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_CHANGE_LANE */
    setChangeLane(state: boolean): Car;
    /** Puts the vehicle at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_COORDINATES */
    setCoordinates(x: float, y: float, z: float): Car;
    /** Sets the vehicle's max speed
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_CRUISE_SPEED */
    setCruiseSpeed(maxSpeed: float): Car;
    /** Sets the behavior of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_DRIVING_STYLE */
    setDrivingStyle(drivingStyle: int): Car;
    /** Sets the speed of the car
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_FORWARD_SPEED */
    setForwardSpeed(forwardSpeed: float): Car;
    /** Sets the vehicle's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_HEADING */
    setHeading(heading: float): Car;
    /** Sets the vehicle's health
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_HEALTH */
    setHealth(health: int): Car;
    /** Sets whether the car is heavy
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_HEAVY */
    setHeavy(state: boolean): Car;
    /** Sets the car's mission to idle (MISSION_NONE), stopping any driving activity
    *
    * https://library.sannybuilder.com/#/vc?q=CAR_SET_IDLE */
    setIdle(): Car;
    setLoadCollisionFlag(state: boolean): Car;
    /** Sets the mission of the vehicle's AI driver
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_MISSION */
    setMission(carMission: int): Car;
    /** Teleports the vehicle nearby the player's location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_JAMES_CAR_ON_PATH_TO_PLAYER */
    setOnPathToPlayer(): Car;
    /** Makes a vehicle immune to everything except the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_ONLY_DAMAGED_BY_PLAYER */
    setOnlyDamagedByPlayer(state: boolean): Car;
    /** Sets the vehicle's immunities
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_PROOFS */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): Car;
    /** Sets the AI driver's mission to ram another car (similar to 00AF with RamCarFaraway)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_RAM_CAR */
    setRamCar(target: Car): Car;
    /** Sets the car on a specific route
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_RANDOM_ROUTE_SEED */
    setRandomRouteSeed(routeSeed: int): Car;
    /** Sets the car's status
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_STATUS */
    setStatus(status: int): Car;
    /** Sets the minimum distance for the AI driver to start ignoring car paths and go straight to the target
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_STRAIGHT_LINE_DISTANCE */
    setStraightLineDistance(distance: int): Car;
    /** Defines whether the car is more resistant to collisions than normal
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_STRONG */
    setStrong(state: boolean): Car;
    /** Sets whether the taxi's roof light is on
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TAXI_LIGHTS */
    setTaxiLights(state: boolean): Car;
    /** Makes the AI driver perform the action in the vehicle for the specified period of time
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_TEMP_ACTION */
    setTempAction(actionId: int, timeInMs: int): Car;
    /** Sets the alpha transparency of a distant vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_VEHICLE_TO_FADE_IN */
    setToFadeIn(alpha: int): Car;
    /** Overrides the default vehicle traction value of 1.0
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_TRACTION */
    setTraction(traction: float): Car;
    /** Disables the car from exploding when it is upside down, as long as the player is not in the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_UPSIDEDOWN_CAR_NOT_DAMAGED */
    setUpsidedownNotDamaged(state: boolean): Car;
    /** Makes the vehicle watertight, meaning characters inside will not be harmed if the vehicle is submerged in water
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_WATERTIGHT */
    setWatertight(state: boolean): Car;
    /** Sets whether the car's alarm can be activated
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_CAR_SIREN */
    switchSiren(state: boolean): Car;
    /** Sets the car's heading so that it is facing the 2D coordinate
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_CAR_TO_FACE_COORD */
    turnToFaceCoord(x: float, y: float): Car;
    /** Clears any current tasks the vehicle has and makes it drive around aimlessly
    *
    * https://library.sannybuilder.com/#/vc?q=CAR_WANDER_RANDOMLY */
    wanderRandomly(): Car;
}
/** Parking Lots
 * 
 * https://library.sannybuilder.com/#/vc/classes/CarGenerator */
declare class CarGenerator {
    constructor(handle: number);
    /** Initializes a parked car generator
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CAR_GENERATOR */
    static Create(x: float, y: float, z: float, heading: float, modelId: int, primaryColor: int, secondaryColor: int, forceSpawn: boolean, alarmChance: int, doorLockChance: int, minDelay: int, maxDelay: int): CarGenerator;
    /** Specifies the number of times the car generator spawns a car (101 - infinite)
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_CAR_GENERATOR */
    switch(amount: int): CarGenerator;
}
/** 
 * 
 * https://library.sannybuilder.com/#/vc/classes/CardDecks */
interface CardDecks {
    /** Returns a random number between 1 and 52, inclusive
    *
    * https://library.sannybuilder.com/#/vc?q=FETCH_NEXT_CARD */
    FetchNextCard(): int;
    Shuffle(type: int): void;
}
declare var CardDecks: CardDecks
/** Script Characters (Actors)
 * 
 * https://library.sannybuilder.com/#/vc/classes/Char */
declare class Char {
    constructor(handle: number);
    /** Creates a character at the specified location, with the specified model and pedtype
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CHAR */
    static Create(pedType: int, modelId: int, x: float, y: float, z: float): Char;
    /** Creates a character with the specified model in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CHAR_AS_PASSENGER */
    static CreateAsPassenger(vehicle: Car, pedType: int, modelId: int, seatId: int): Char;
    /** Creates a character in the driver's seat of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CHAR_INSIDE_CAR */
    static CreateInsideCar(vehicle: Car, pedType: int, modelId: int): Char;
    /** Creates a character with a randomised model and pedtype at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_RANDOM_CHAR */
    static CreateRandom(x: float, y: float, z: float): Char;
    /** Creates a driver in the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_RANDOM_CHAR_AS_DRIVER */
    static CreateRandomAsDriver(vehicle: Car): Char;
    /** Creates a random character in the passenger seat of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_RANDOM_CHAR_AS_PASSENGER */
    static CreateRandomAsPassenger(vehicle: Car, seatId: int): Char;
    /** Returns true if the handle is a valid character handle
    *
    * https://library.sannybuilder.com/#/vc?q=DOES_CHAR_EXIST */
    static DoesExist(handle: int): boolean;
    /** Returns true if the handle is an invalid character handle or the character is dead (wasted)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_DEAD */
    static IsDead(handle: int): boolean;
    /** Sets a multiplier for the range of a character's ability to go and occupy a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ENTER_CAR_RANGE_MULTIPLIER */
    static SetEnterCarRangeMultiplier(value: float): void;
    /** Sets a multiplier for the range of a character's ability to react on deadly events around
    *
    * https://library.sannybuilder.com/#/vc?q=SET_THREAT_REACTION_RANGE_MULTIPLIER */
    static SetThreatReactionRangeMultiplier(value: float): void;
    /** Adds the specified amount of ammo to the character's weapon, if the character has the weapon
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_AMMO_TO_CHAR */
    addAmmo(weaponType: int, ammo: int): Char;
    /** Increases the character's armor by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_ARMOUR_TO_CHAR */
    addArmor(amount: int): Char;
    /** Puts character into a turret on the vehicle, allowing them to shoot
    *
    * https://library.sannybuilder.com/#/vc?q=ATTACH_CHAR_TO_CAR */
    attachToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float, position: int, angleLimit: float, weaponType: int): Char;
    /** Attaches the character to the specified object, in turret mode
    *
    * https://library.sannybuilder.com/#/vc?q=ATTACH_CHAR_TO_OBJECT */
    attachToObject(handle: ScriptObject, xOffset: float, yOffset: float, zOffset: float, orientation: int, angleLimit: float, weaponType: int): Char;
    /** Returns true if the character sees a dead body of the given type
    *
    * https://library.sannybuilder.com/#/vc?q=CAN_CHAR_SEE_DEAD_CHAR */
    canSeeDeadChar(pedType: int): boolean;
    clearAllAnims(): Char;
    /** Clears the character's follow path (009E)
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CHAR_FOLLOW_PATH */
    clearFollowPath(): Char;
    /** Resets the information that the character has bought "ice cream"
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CHAR_ICE_CREAM_PURCHASE */
    clearIceCreamPurchase(): Char;
    clearLastDamageEntity(): Char;
    /** Clears the character's last weapon damage (see 031D)
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CHAR_LAST_WEAPON_DAMAGE */
    clearLastWeaponDamage(): Char;
    /** Resets character's hostility to other ped types (011A)
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CHAR_THREAT_SEARCH */
    clearThreatSearch(): Char;
    /** Stops the idle animation on the character (0372)
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CHAR_WAIT_STATE */
    clearWaitState(): Char;
    /** Removes the character from the game and mission cleanup list, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=DELETE_CHAR */
    delete(): void;
    /** Takes the character out of turret mode (0464)
    *
    * https://library.sannybuilder.com/#/vc?q=DETACH_CHAR_FROM_CAR */
    detachFromCar(): Char;
    /** Removes the character from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/vc?q=DONT_REMOVE_CHAR */
    dontRemove(): Char;
    /** Respawns the character using the model requested with 0352
    *
    * https://library.sannybuilder.com/#/vc?q=DRESS_CHAR */
    dress(): Char;
    /** Dismembers the character
    *
    * https://library.sannybuilder.com/#/vc?q=EXPLODE_CHAR_HEAD */
    explodeHead(): Char;
    /** Makes the character follow the leader character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_AS_LEADER */
    followChar(leader: Char): Char;
    /** Sets the character's follow path
    *
    * https://library.sannybuilder.com/#/vc?q=CHAR_FOLLOW_PATH */
    followPath(x: float, y: float, z: float, radius: float, moveState: int): Char;
    /** Makes the character follow the leader player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_AS_LEADER */
    followPlayer(leader: Player): Char;
    /** Sets whether the character's position remains unchanged
    *
    * https://library.sannybuilder.com/#/vc?q=FREEZE_CHAR_POSITION */
    freezePosition(state: boolean): Char;
    /** Returns the character's armor amount
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CHAR_ARMOUR */
    getArmor(): int;
    /** Returns the character's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CHAR_COORDINATES */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the character is currently holding
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CURRENT_CHAR_WEAPON */
    getCurrentWeapon(): int;
    /** Returns the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CHAR_HEADING */
    getHeading(): float;
    /** Returns the character's health
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CHAR_HEALTH */
    getHealth(): int;
    /** Returns the number of members which are in a group of the character (01DE)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_NUMBER_OF_FOLLOWERS */
    getNumberOfFollowers(): int;
    /** Returns the coordinates of the character, with an offset
    *
    * https://library.sannybuilder.com/#/vc?q=GET_OFFSET_FROM_CHAR_IN_WORLD_COORDS */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the weapon type, ammo and model from the specified slot
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CHAR_WEAPON_IN_SLOT */
    getWeaponInSlot(weaponSlotId: int): {
        weaponType: int;
        weaponAmmo: int;
        weaponModel: int;
    };
    /** Gives the character the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/vc?q=GIVE_WEAPON_TO_CHAR */
    giveWeapon(weaponType: int, ammo: int): Char;
    /** Checks if the distribution ped has been attracted
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CHAR_ATTEMPTED_ATTRACTOR */
    hasAttemptedAttractor(): boolean;
    /** Returns true if the character has been hurt by the other character
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CHAR_BEEN_DAMAGED_BY_CHAR */
    hasBeenDamagedByChar(handle: Char): boolean;
    /** Returns true if the character has been hit by the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CHAR_BEEN_DAMAGED_BY_WEAPON */
    hasBeenDamagedByWeapon(weaponType: int): boolean;
    /** Returns true if the character has been photographed
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CHAR_BEEN_PHOTOGRAPHED */
    hasBeenPhotographed(): boolean;
    /** Returns true if the character has bought "ice cream"
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CHAR_BOUGHT_ICE_CREAM */
    hasBoughtIceCream(): boolean;
    /** Returns true if the character has seen the specified player
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CHAR_SPOTTED_PLAYER */
    hasSpottedPlayer(player: Player): boolean;
    /** Returns true if the character is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CURRENT_CHAR_WEAPON */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the character is taking damage from ocean water while on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_DROWNING_IN_WATER */
    isDrowningInWater(): boolean;
    /** Returns true if the specified character is crouching
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_DUCKING */
    isDucking(): boolean;
    /** Returns true if the character's health is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_HEALTH_GREATER */
    isHealthGreater(health: int): boolean;
    /** Returns true if the character has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_ANY_CAR */
    isInAnyCar(): boolean;
    /** Returns true if the character is driving a police vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_ANY_POLICE_VEHICLE */
    isInAnyPoliceVehicle(): boolean;
    /** Returns true if the character is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_AREA_2D */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_AREA_3D */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_AREA_IN_CAR_2D */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_AREA_IN_CAR_3D */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_AREA_ON_FOOT_2D */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_AREA_ON_FOOT_3D */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_CAR */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the character is part of the leader's group (01DE)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_CHARS_GROUP */
    isInCharsGroup(leader: Char): boolean;
    /** Returns true if the character is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_MODEL */
    isInModel(modelId: int): boolean;
    /** Returns true if the character is part of the leader's group (01DF)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_PLAYERS_GROUP */
    isInPlayersGroup(leader: Player): boolean;
    /** Returns true if the character is in water
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_WATER */
    isInWater(): boolean;
    /** Returns true if the character is in the specified map zone
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_IN_ZONE */
    isInZone(zone: string): boolean;
    isLeavingVehicleToDie(): boolean;
    /** Returns true if the character is male
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_MALE */
    isMale(): boolean;
    /** Returns true if the character's model ID is equivalent to the model ID passed
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_MODEL */
    isModel(modelId: int): boolean;
    /** Returns true if the character has no objective (011C)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_OBJ_NO_OBJ */
    isObjNoObj(): boolean;
    /** Returns true if the character has completed their objective
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_OBJECTIVE_PASSED */
    isObjectivePassed(): boolean;
    /** Returns true if the character is riding a bike
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_ON_ANY_BIKE */
    isOnAnyBike(): boolean;
    /** Returns true if the character is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_ON_FOOT */
    isOnFoot(): boolean;
    /** Returns true if the character is visible
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_ON_SCREEN */
    isOnScreen(): boolean;
    /** Returns true if the character is firing a weapon
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_SHOOTING */
    isShooting(): boolean;
    /** Returns true if the character is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_SITTING_IN_ANY_CAR */
    isSittingInAnyCar(): boolean;
    /** Returns true if the character is sitting in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_SITTING_IN_CAR */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the character stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_STOPPED_IN_AREA_2D */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_STOPPED_IN_AREA_3D */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_STOPPED_IN_AREA_IN_CAR_2D */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_STOPPED_IN_AREA_IN_CAR_3D */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_STOPPED_IN_AREA_ON_FOOT_2D */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CHAR_STOPPED_IN_AREA_ON_FOOT_3D */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    isStuck(): boolean;
    isWaitingForWorldCollision(): boolean;
    isWanderPathClear(x: float, y: float, z: float, radius: float): boolean;
    /** Makes the character stop following the leader (01DE or 01DF)
    *
    * https://library.sannybuilder.com/#/vc?q=LEAVE_GROUP */
    leaveGroup(): Char;
    /** Returns true if the character is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_2D */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: Sphere): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_3D */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_CAR_2D */
    locateAnyMeansCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_CAR_3D */
    locateAnyMeansCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_CHAR_2D */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_CHAR_3D */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_OBJECT_2D */
    locateAnyMeansObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ANY_MEANS_OBJECT_3D */
    locateAnyMeansObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_2D */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_3D */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_CAR_2D */
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_CAR_3D */
    locateInCarCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_CHAR_2D */
    locateInCarChar2D(otherChar: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_CHAR_3D */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_OBJECT_2D */
    locateInCarObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_IN_CAR_OBJECT_3D */
    locateInCarObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: int): boolean;
    /** Returns true if the character is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_2D */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_3D */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_CAR_2D */
    locateOnFootCar2D(vehicle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the vehicle on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_CAR_3D */
    locateOnFootCar3D(vehicle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_CHAR_2D */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the other character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_CHAR_3D */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 2D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_OBJECT_2D */
    locateOnFootObject2D(object: ScriptObject, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character is within the 3D radius of the object on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_CHAR_ON_FOOT_OBJECT_3D */
    locateOnFootObject3D(object: ScriptObject, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CHAR_ANY_MEANS_2D */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CHAR_ANY_MEANS_3D */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CHAR_IN_CAR_2D */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CHAR_IN_CAR_3D */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CHAR_ON_FOOT_2D */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the character stopped within the 3D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_CHAR_ON_FOOT_3D */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the character to keep looking at the direction of the other character
    *
    * https://library.sannybuilder.com/#/vc?q=CHAR_LOOK_AT_CHAR_ALWAYS */
    lookAtCharAlways(target: Char): Char;
    /** Makes the character to keep looking at the direction of the player
    *
    * https://library.sannybuilder.com/#/vc?q=CHAR_LOOK_AT_PLAYER_ALWAYS */
    lookAtPlayerAlways(target: Player): Char;
    /** Allows the character to be deleted by the game if necessary, and also removes them from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/vc?q=MARK_CHAR_AS_NO_LONGER_NEEDED */
    markAsNoLongerNeeded(): Char;
    /** Removes the characters weapons
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_ALL_CHAR_WEAPONS */
    removeAllWeapons(): Char;
    /** Removes the character with a fade, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_CHAR_ELEGANTLY */
    removeElegantly(): Char;
    /** Affects how often the character will hit the target when attacking with a weapon
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_ACCURACY */
    setAccuracy(accuracy: int): Char;
    /** Sets the animation group for the character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ANIM_GROUP_FOR_CHAR */
    setAnimGroup(animGroup: int): Char;
    setAnsweringMobile(state: boolean): Char;
    /** Sets whether the character ignores the player's crimes
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_AS_PLAYER_FRIEND */
    setAsPlayerFriend(player: Player, state: boolean): Char;
    /** Makes a character bleed
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_BLEEDING */
    setBleeding(state: boolean): Char;
    /** Sets the character be damageable by members of the gang
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_CAN_BE_DAMAGED_BY_MEMBERS_OF_GANG */
    setCanBeDamagedByMembersOfGang(gangId: int, state: boolean): Char;
    /** Makes the character immune to a damage while in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_CAN_BE_SHOT_IN_VEHICLE */
    setCanBeShotInVehicle(state: boolean): Char;
    /** Locks the character while in a car
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_CANT_BE_DRAGGED_OUT */
    setCantBeDraggedOut(state: boolean): Char;
    /** Sets the maximum time the character can withstand the damage
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_CEASE_ATTACK_TIMER */
    setCeaseAttackTimer(timer: int): Char;
    /** Puts the character at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_COORDINATES */
    setCoordinates(x: float, y: float, z: float): Char;
    /** Makes the character crouch
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_CROUCH */
    setCrouch(state: boolean, time: int): Char;
    setCrouchWhenThreatened(state: boolean): Char;
    /** Sets the character's currently held weapon
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CURRENT_CHAR_WEAPON */
    setCurrentWeapon(weaponType: int): Char;
    /** Controls whether the character can drown in water
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_DROWNS_IN_WATER */
    setDrownsInWater(state: boolean): Char;
    setFrightenedInJackedCar(state: boolean): Char;
    /** Sets the character's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_HEADING */
    setHeading(heading: float): Char;
    /** Sets the character's health
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_HEALTH */
    setHealth(health: int): Char;
    /** Makes the character attack whoever attacks them
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_HEED_THREATS */
    setHeedThreats(state: boolean): Char;
    /** Sets the character's objective to stay idle
    *
    * https://library.sannybuilder.com/#/vc?q=CHAR_SET_IDLE */
    setIdle(): Char;
    setIgnoreThreatsBehindObjects(state: boolean): Char;
    /** Sets whether the char assists the player in attacking another character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_IN_PLAYERS_GROUP_CAN_FIGHT */
    setInPlayersGroupCanFight(state: boolean): Char;
    /** Sets whether the character is a psychotic killer or not
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_IS_CHRIS_CRIMINAL */
    setIsChrisCriminal(state: boolean): Char;
    setLoadCollisionFlag(state: boolean): Char;
    /** Sets the character's cash sum, setting how much cash they will drop when dead
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_MONEY */
    setMoney(amount: int): Char;
    /** Sets whether the character won't be targeted by the autoaim system
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_NEVER_TARGETED */
    setNeverTargeted(state: boolean): Char;
    /** Sets the character's objective to aim the current weapon at the target character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_AIM_GUN_AT_CHAR */
    setObjAimGunAtChar(target: Char): Char;
    /** Makes the character approach the distribution vehicle to buy "ice cream" and returns the status of this attempt
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_BUY_ICE_CREAM */
    setObjBuyIceCream(distributionCar: Car): int;
    /** Sets the character's objective to destroy the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_DESTROY_CAR */
    setObjDestroyCar(vehicle: Car): Char;
    /** Sets the character's objective to destroy the object
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_DESTROY_OBJECT */
    setObjDestroyObject(handle: ScriptObject): Char;
    /** Sets the character's objective to enter the vehicle as a driver
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_ENTER_CAR_AS_DRIVER */
    setObjEnterCarAsDriver(vehicle: Car): Char;
    /** Sets the character's objective to enter the vehicle as a passenger
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_ENTER_CAR_AS_PASSENGER */
    setObjEnterCarAsPassenger(vehicle: Car): Char;
    /** Makes the character leave their car and run away from it
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_FLEE_CAR */
    setObjFleeCar(vehicle: Car): Char;
    /** Sets the character's objective to walk away forever and stay away from the target character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_FLEE_CHAR_ON_FOOT_ALWAYS */
    setObjFleeCharOnFootAlways(target: Char): Char;
    /** Sets the character's objective to run away
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_FLEE_ON_FOOT_TILL_SAFE */
    setObjFleeOnFootTillSafe(): Char;
    /** Sets the character's objective to walk away forever and stay away from the target player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_FLEE_PLAYER_ON_FOOT_ALWAYS */
    setObjFleePlayerOnFootAlways(target: Player): Char;
    /** Sets the character's objective to escape on foot and stay away from the target player until it is safe
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_FLEE_PLAYER_ON_FOOT_TILL_SAFE */
    setObjFleePlayerOnFootTillSafe(target: Player): Char;
    /** Sets the character's objective to follow along the specified route
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_FOLLOW_ROUTE */
    setObjFollowRoute(routeId: int, mode: int): Char;
    /** Sets the character's objective to walk towards the target character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_GOTO_CHAR_ON_FOOT */
    setObjGotoCharOnFoot(target: Char): Char;
    /** Sets the character's objective to walk at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_GOTO_COORD_ON_FOOT */
    setObjGotoCoordOnFoot(x: float, y: float): Char;
    /** Sets the character's objective to walk towards the target player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_GOTO_PLAYER_ON_FOOT */
    setObjGotoPlayerOnFoot(target: Player): Char;
    /** Sets the character's objective to guard the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_GUARD_SPOT */
    setObjGuardSpot(x: float, y: float, z: float): Char;
    /** Sets the character's objective to hail a taxi
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_HAIL_TAXI */
    setObjHailTaxi(): Char;
    /** Sets the character's objective to attack the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_KILL_CHAR_ANY_MEANS */
    setObjKillCharAnyMeans(target: Char): Char;
    /** Sets the character's objective to attack the other character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_KILL_CHAR_ON_FOOT */
    setObjKillCharOnFoot(target: Char): Char;
    /** Sets the character's objective to attack the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS */
    setObjKillPlayerAnyMeans(target: Player): Char;
    /** Sets the character's objective to attack the player on foot
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT */
    setObjKillPlayerOnFoot(target: Player): Char;
    /** Sets the character's objective to leave the car they are in
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_LEAVE_ANY_CAR */
    setObjLeaveAnyCar(): Char;
    /** Sets the character's objective to leave the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_LEAVE_CAR */
    setObjLeaveCar(vehicle: Car): Char;
    /** Clears the character's current objective
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_NO_OBJ */
    setObjNoObj(): Char;
    /** Sets the character's objective to run at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_RUN_TO_COORD */
    setObjRunToCoord(x: float, y: float): Char;
    /** Sets the character's objective to sprint at the location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_SPRINT_TO_COORD */
    setObjSprintToCoord(x: float, y: float): Char;
    /** Sets the character's objective to find any traffic vehicle nearby and take the driver's seat
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_STEAL_ANY_CAR */
    setObjStealAnyCar(): Char;
    /** Sets the character's objective to stay idle on foot
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_WAIT_ON_FOOT */
    setObjWaitOnFoot(): Char;
    /** Sets the character's objective to walk towards the target character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_OBJ_WALK_TO_CHAR */
    setObjWalkToChar(target: Char): Char;
    /** Makes a character immune to everything except the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_ONLY_DAMAGED_BY_PLAYER */
    setOnlyDamagedByPlayer(state: boolean): Char;
    /** Sets the ped stat of the character
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_PERSONALITY */
    setPersonality(pedstat: int): Char;
    /** Sets the character's immunities
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_PROOFS */
    setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean): Char;
    /** Makes the character run
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_RUNNING */
    setRunning(state: boolean): Char;
    /** Moves the character from a passenger seat to the driver seat
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_SHUFFLE_INTO_DRIVERS_SEAT */
    setShuffleIntoDriversSeat(): Char;
    /** Makes the character stay in the vehicle when it is jacked (characters let themselves get "kidnapped")
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_STAY_IN_CAR_WHEN_JACKED */
    setStayInCarWhenJacked(state: boolean): Char;
    /** Makes the character maintain their position when attacked
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_STAY_IN_SAME_PLACE */
    setStayInSamePlace(state: boolean): Char;
    setStopShootDontSeekEntity(state: boolean): Char;
    /** Sets whether the specified character is immune to headshots
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_SUFFERS_CRITICAL_HITS */
    setSuffersCriticalHits(state: boolean): Char;
    /** Sets the character's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_THREAT_SEARCH */
    setThreatSearch(pedThreat: int): Char;
    /** Sets whether the character should follow paths set for pedestrians
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_USE_PEDNODE_SEEK */
    setUsePednodeSeek(state: boolean): Char;
    /** Sets whether the character is visible or not
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_VISIBLE */
    setVisible(state: boolean): Char;
    /** Puts the character in the idle state for the given period of time
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHAR_WAIT_STATE */
    setWaitState(stateId: int, timeInMs: int): Char;
    /** Sets the character's ability to talk
    *
    * https://library.sannybuilder.com/#/vc?q=SHUT_CHAR_UP */
    shutUp(state: boolean): Char;
    /** Makes the character to stop looking at the other character (022C) or player (022D)
    *
    * https://library.sannybuilder.com/#/vc?q=STOP_CHAR_LOOKING */
    stopLooking(): Char;
    /** Returns the current vehicle of the character and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_CAR_CHAR_IS_IN */
    storeCarIsIn(): Car;
    /** Returns the character's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_CAR_CHAR_IS_IN_NO_SAVE */
    storeCarIsInNoSave(): Car;
    /** Rotates the character to face the other character
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_CHAR_TO_FACE_CHAR */
    turnToFaceChar(char: Char): Char;
    /** Rotates the character to face the location
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_CHAR_TO_FACE_COORD */
    turnToFaceCoord(x: float, y: float, z: float): Char;
    /** Rotates the character to face the player
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_CHAR_TO_FACE_PLAYER */
    turnToFacePlayer(player: Player): Char;
    /** Removes the character and requests a new special model to load
    *
    * https://library.sannybuilder.com/#/vc?q=UNDRESS_CHAR */
    undress(modelName: string): Char;
    /** Sets the character's wander direction
    *
    * https://library.sannybuilder.com/#/vc?q=CHAR_WANDER_DIR */
    wanderDir(direction: int): Char;
    /** Pulls the character out of their car and places at the location
    *
    * https://library.sannybuilder.com/#/vc?q=WARP_CHAR_FROM_CAR_TO_COORD */
    warpFromCarToCoord(x: float, y: float, z: float): Char;
    /** Puts the character in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=WARP_CHAR_INTO_CAR */
    warpIntoCar(vehicle: Car): Char;
}
/** Time Manipulation
 * 
 * https://library.sannybuilder.com/#/vc/classes/Clock */
interface Clock {
    /** Returns the time passed in milliseconds since the game started
    *
    * https://library.sannybuilder.com/#/vc?q=GET_GAME_TIMER */
    GetGameTimer(): int;
    /** Returns the number of minutes left until the clock matches the time specified
    *
    * https://library.sannybuilder.com/#/vc?q=GET_MINUTES_TO_TIME_OF_DAY */
    GetMinutesToTimeOfDay(hours: int, minutes: int): int;
    /** Returns the number of hours and minutes passed since midnight
    *
    * https://library.sannybuilder.com/#/vc?q=GET_TIME_OF_DAY */
    GetTimeOfDay(): {
        hours: int;
        minutes: int;
    };
    /** Restores the game time to the time when it was saved with 0253
    *
    * https://library.sannybuilder.com/#/vc?q=RESTORE_CLOCK */
    Restore(): void;
    /** Sets the current in-game time
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TIME_OF_DAY */
    SetTimeOfDay(hours: int, minutes: int): void;
    /** Sets the game to run at the specified speed
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TIME_SCALE */
    SetTimeScale(scale: float): void;
    /** Saves the current time in game
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_CLOCK */
    Store(): void;
}
declare var Clock: Clock
/** End-Game Credits
 * 
 * https://library.sannybuilder.com/#/vc/classes/Credits */
interface Credits {
    /** Returns true if the credits have finished
    *
    * https://library.sannybuilder.com/#/vc?q=ARE_CREDITS_FINISHED */
    AreFinished(): boolean;
    /** Makes the credits scroll up the screen
    *
    * https://library.sannybuilder.com/#/vc?q=START_CREDITS */
    Start(): void;
    /** Stops the credits text from showing
    *
    * https://library.sannybuilder.com/#/vc?q=STOP_CREDITS */
    Stop(): void;
}
declare var Credits: Credits
/** Mission Cutscenes
 * 
 * https://library.sannybuilder.com/#/vc/classes/Cutscene */
interface Cutscene {
    /** Ends the current cutscene, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_CUTSCENE */
    Clear(): void;
    /** Creates an effect of a heli blowing up dust on the ground
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_DUST_EFFECT_FOR_CUTSCENE_HELI */
    CreateDustEffectForHeli(heliObject: CutsceneObject, radius: float, density: int): void;
    DisableShadows(): void;
    /** Returns the time in milliseconds passed since the cutscene has started (02E7)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CUTSCENE_TIME */
    GetTime(): int;
    /** Returns true if the cutscene has finished
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_CUTSCENE_FINISHED */
    HasFinished(): boolean;
    /** Loads the data for the specified cutscene
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_CUTSCENE */
    Load(name: string): void;
    LoadUncompressedAnim(animation: string): void;
    /** Sets the cutscene animation to loop endlessly
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CUTSCENE_ANIM_TO_LOOP */
    SetAnimToLoop(animName: string): void;
    /** Sets the position for a cutscene
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CUTSCENE_OFFSET */
    SetOffset(x: float, y: float, z: float): void;
    /** Starts the loaded cutscene (02E4)
    *
    * https://library.sannybuilder.com/#/vc?q=START_CUTSCENE */
    Start(): void;
    /** Returns true if the cutscene was skipped
    *
    * https://library.sannybuilder.com/#/vc?q=WAS_CUTSCENE_SKIPPED */
    WasSkipped(): boolean;
}
declare var Cutscene: Cutscene
/** Cutscene Objects
 * 
 * https://library.sannybuilder.com/#/vc/classes/CutsceneObject */
declare class CutsceneObject {
    constructor(handle: number);
    /** Creates a new cutscene object with the model
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CUTSCENE_OBJECT */
    static Create(modelId: int): CutsceneObject;
    /** Attaches the cutscene object to the cutscene character's bone
    *
    * https://library.sannybuilder.com/#/vc?q=ATTACH_CUTSCENE_OBJECT_TO_BONE */
    attachToBone(char: CutsceneObject, boneId: int): CutsceneObject;
    /** Attaches the cutscene object to the cutscene character's frame
    *
    * https://library.sannybuilder.com/#/vc?q=ATTACH_CUTSCENE_OBJECT_TO_COMPONENT */
    attachToComponent(char: CutsceneObject, frameName: string): CutsceneObject;
    /** Attaches the cutscene object to the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=ATTACH_CUTSCENE_OBJECT_TO_VEHICLE */
    attachToVehicle(vehicle: Car): CutsceneObject;
    /** Sets the animation of the cutscene object
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CUTSCENE_ANIM */
    setAnim(animation: string): CutsceneObject;
}
/** Various Debugging Utilities
 * 
 * https://library.sannybuilder.com/#/vc/classes/Debugger */
interface Debugger {
    /** Disables the debug mode
    *
    * https://library.sannybuilder.com/#/vc?q=DEBUG_OFF */
    Off(): void;
    /** Enables the debug mode
    *
    * https://library.sannybuilder.com/#/vc?q=DEBUG_ON */
    On(): void;
}
declare var Debugger: Debugger
/** Loading DLL files and finding exported functions
 * 
 * https://library.sannybuilder.com/#/vc/classes/DynamicLibrary */
declare class DynamicLibrary {
    constructor(handle: number);
    /** Loads the specified module (usually a dynamic-link library (DLL)) into the address space of the game
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_DYNAMIC_LIBRARY */
    static Load(libraryFileName: string): DynamicLibrary | undefined;
    /** Frees the loaded dynamic-link library (DLL) module and unloads it from the address space of the game
    *
    * https://library.sannybuilder.com/#/vc?q=FREE_DYNAMIC_LIBRARY */
    free(): void;
    /** Retrieves the address of an exported function or variable from the specified dynamic-link library (DLL)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DYNAMIC_LIBRARY_PROCEDURE */
    getProcedure(procName: string): int | undefined;
}
/** Various 2D Effects (Shadows, Lights, Coronas, Particles)
 * 
 * https://library.sannybuilder.com/#/vc/classes/Fx */
interface Fx {
    /** Creates a gun flash particle effect
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BIG_GUN_FLASH */
    AddBigGunFlash(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): void;
    /** Creates an explosion at the point
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_EXPLOSION */
    AddExplosion(x: float, y: float, z: float, type: int): void;
    /** Creates an explosion with no sound
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_EXPLOSION_NO_SOUND */
    AddExplosionNoSound(x: float, y: float, z: float, type: int): void;
    /** Adds a moving particle effect
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_MOVING_PARTICLE_EFFECT */
    AddMovingParticleEffect(particle: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float, r: int, g: int, b: int, durationInMs: int): void;
    /** Creates a single particle at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_SINGLE_PARTICLE */
    CreateSingleParticle(type: int, x: float, y: float, z: float, strengthX: float, strengthY: float, strengthZ: float, scale: float): void;
    /** Displays a corona at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=DRAW_CORONA */
    DrawCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
    /** Displays a corona with the lowered draw distance at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=DRAW_WEAPONSHOP_CORONA */
    DrawWeaponshopCorona(x: float, y: float, z: float, size: float, coronaType: int, flareType: int, r: int, g: int, b: int): void;
}
declare var Fx: Fx
/** Game State
 * 
 * https://library.sannybuilder.com/#/vc/classes/Game */
interface Game {
    /** Displays a screen prompting the player to save
    *
    * https://library.sannybuilder.com/#/vc?q=ACTIVATE_SAVE_MENU */
    ActivateSaveMenu(): void;
    /** Returns true if the player has used any of the cheats
    *
    * https://library.sannybuilder.com/#/vc?q=ARE_ANY_CAR_CHEATS_ACTIVATED */
    AreAnyCarCheatsActivated(): boolean;
    /** Returns true if the game uses metric measurements (meters instead of feet)
    *
    * https://library.sannybuilder.com/#/vc?q=ARE_MEASUREMENTS_IN_METRES */
    AreMeasurementsInMeters(): boolean;
    /** Clears the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_THREAT_FOR_PED_TYPE */
    ClearThreatForPedType(type: int, threatMask: int): void;
    /** Creates a hidden package pickup at the location
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_COLLECTABLE1 */
    CreateCollectable(x: float, y: float, z: float): void;
    /** Returns the number of hidden packages collected
    *
    * https://library.sannybuilder.com/#/vc?q=GET_COLLECTABLE1S_COLLECTED */
    GetCollectablesCollected(): int;
    /** Returns game FPS
    *
    * https://library.sannybuilder.com/#/vc?q=GET_FRAMERATE */
    GetFramerate(): int;
    /** Returns true if the player has saved their game
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_SAVE_GAME_FINISHED */
    HasSaveGameFinished(): boolean;
    /** Returns true if the current game is an Australian release
    *
    * https://library.sannybuilder.com/#/vc?q=IS_AUSTRALIAN_GAME */
    IsAustralian(): boolean;
    /** Returns true if the game language is set to French
    *
    * https://library.sannybuilder.com/#/vc?q=IS_FRENCH_GAME */
    IsFrench(): boolean;
    /** Returns true if the game language is set to German
    *
    * https://library.sannybuilder.com/#/vc?q=IS_GERMAN_GAME */
    IsGerman(): boolean;
    /** Returns true on PC versions of the game
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PC_VERSION */
    IsPcVersion(): boolean;
    /** Sets whether all cars receive damage
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ALL_CARS_CAN_BE_DAMAGED */
    SetAllCarsCanBeDamaged(state: boolean): void;
    /** Toggles whether all taxis have nitrous
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ALL_TAXIS_HAVE_NITRO */
    SetAllTaxisHaveNitro(state: boolean): void;
    /** Makes the two characters chat for the specified period of time
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CHARS_CHATTING */
    SetCharsChatting(char1: Char, char2: Char, duration: int): void;
    /** Sets the total number of hidden packages to collect
    *
    * https://library.sannybuilder.com/#/vc?q=SET_COLLECTABLE1_TOTAL */
    SetCollectableTotal(amount: int): void;
    /** Makes pedestrians pay no attention to the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_EVERYONE_IGNORE_PLAYER */
    SetEveryoneIgnorePlayer(player: Player, state: boolean): void;
    /** Defines whether the player can respray their car for free
    *
    * https://library.sannybuilder.com/#/vc?q=SET_FREE_RESPRAYS */
    SetFreeResprays(state: boolean): void;
    /** Greys out the radar
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_IS_IN_STADIUM */
    SetIsInStadium(state: boolean): void;
    /** Sets the maximum wanted level the player can receive
    *
    * https://library.sannybuilder.com/#/vc?q=SET_MAX_WANTED_LEVEL */
    SetMaxWantedLevel(wantedLevel: int): void;
    /** Sets whether cops should ignore the player regardless of wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=SET_POLICE_IGNORE_PLAYER */
    SetPoliceIgnorePlayer(player: Player, state: boolean): void;
    /** Sets the riot sound volume level (0-127)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_RIOT_INTENSITY */
    SetRiotIntensity(level: int): void;
    /** Sets the ped type's hostility to other ped types
    *
    * https://library.sannybuilder.com/#/vc?q=SET_THREAT_FOR_PED_TYPE */
    SetThreatForPedType(type: int, threatMask: int): void;
    /** Sets sensitivity to crime, changing how many crimes a player can commit before police begin to pursue
    *
    * https://library.sannybuilder.com/#/vc?q=SET_WANTED_MULTIPLIER */
    SetWantedMultiplier(multiplier: float): void;
}
declare var Game: Game
/** Gangs Configuration
 * 
 * https://library.sannybuilder.com/#/vc/classes/Gang */
interface Gang {
    /** Forces members of the specified gang to act as law enforcement towards the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_GANG_ATTACK_PLAYER_WITH_COPS */
    SetAttackPlayerWithCops(gangId: int, state: boolean): void;
    /** Sets the car used by members of the specified gang
    *
    * https://library.sannybuilder.com/#/vc?q=SET_GANG_CAR_MODEL */
    SetCarModel(gangId: int, modelId: int): void;
    /** Sets the models used by members of the specified gang
    *
    * https://library.sannybuilder.com/#/vc?q=SET_GANG_PED_MODELS */
    SetPedModels(gangId: int, modelId1: int, modelId2: int): void;
    /** Sets the weapons that the specified gang can use
    *
    * https://library.sannybuilder.com/#/vc?q=SET_GANG_WEAPONS */
    SetWeapons(gangId: int, weaponType1: int, weaponType2: int): void;
}
declare var Gang: Gang
/** Garages
 * 
 * https://library.sannybuilder.com/#/vc/classes/Garage */
declare class Garage {
    constructor(handle: number);
    /** Creates a garage at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=SET_GARAGE */
    static Create(leftBottomX: float, leftBottomY: float, leftBottomZ: float, frontX: float, frontY: float, rightTopX: float, rightTopY: float, rightTopZ: float, type: int): Garage;
    /** Sets the garage's type
    *
    * https://library.sannybuilder.com/#/vc?q=CHANGE_GARAGE_TYPE */
    changeType(type: int): Garage;
    /** Closes the garage
    *
    * https://library.sannybuilder.com/#/vc?q=CLOSE_GARAGE */
    close(): Garage;
    /** Returns true if the player's car has been resprayed by the garage
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_RESPRAY_HAPPENED */
    hasResprayHappened(): boolean;
    /** Returns true if the import garage has collected a vehicle from the predefined list
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_IMPORT_GARAGE_SLOT_BEEN_FILLED */
    hasSlotBeenFilled(importSlot: int): boolean;
    /** Returns true if a vehicle is in the garage
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_IN_MISSION_GARAGE */
    isCarInMission(): boolean;
    /** Returns true if the garage's door is closed
    *
    * https://library.sannybuilder.com/#/vc?q=IS_GARAGE_CLOSED */
    isClosed(): boolean;
    /** Returns true if the garage's door is open
    *
    * https://library.sannybuilder.com/#/vc?q=IS_GARAGE_OPEN */
    isOpen(): boolean;
    /** Disables special camera when in the garage
    *
    * https://library.sannybuilder.com/#/vc?q=NO_SPECIAL_CAMERA_FOR_THIS_GARAGE */
    noSpecialCameraForThisGarage(): Garage;
    /** Opens the garage
    *
    * https://library.sannybuilder.com/#/vc?q=OPEN_GARAGE */
    open(): Garage;
    /** Sets the maximum number of vehicles for a save garage to open
    *
    * https://library.sannybuilder.com/#/vc?q=SET_MAXIMUM_NUMBER_OF_CARS_IN_GARAGE */
    setMaximumNumberOfCars(max: int): Garage;
    /** Sets the garage door to swing open instead of slide open
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ROTATING_GARAGE_DOOR */
    setRotatingDoor(): Garage;
    /** Sets the garage to only accept the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TARGET_CAR_FOR_MISSION_GARAGE */
    setTargetCarForMission(vehicle: Car): Garage;
}
/** Game UI
 * 
 * https://library.sannybuilder.com/#/vc/classes/Hud */
interface Hud {
    /** Returns true if the wanted stars are flashing (normally after visiting a Pay'n'Spray)
    *
    * https://library.sannybuilder.com/#/vc?q=WANTED_STARS_ARE_FLASHING */
    AreWantedStarsFlashing(): boolean;
    /** Removes the onscreen counter (0150 or 03C4)
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_ONSCREEN_COUNTER */
    ClearCounter(counter: int): void;
    /** Removes the onscreen timer
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_ONSCREEN_TIMER */
    ClearTimer(timer: int): void;
    /** Displays an onscreen counter, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_ONSCREEN_COUNTER */
    DisplayCounter(counter: int, display: int): void;
    /** Displays an onscreen counter with the text, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_ONSCREEN_COUNTER_WITH_STRING */
    DisplayCounterWithString(counter: int, display: int, text: string): void;
    /** Displays an onscreen counter with the text in the specified slot, either shown in numbers or as a bar
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_NTH_ONSCREEN_COUNTER_WITH_STRING */
    DisplayNthCounterWithString(counter: int, display: int, slot: int, text: string): void;
    /** Displays or hides the radar
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_RADAR */
    DisplayRadar(state: boolean): void;
    /** Creates a countdown or countup onscreen timer
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_ONSCREEN_TIMER */
    DisplayTimer(timer: int, direction: int): void;
    /** Creates a countdown or countup onscreen timer with the text
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_ONSCREEN_TIMER_WITH_STRING */
    DisplayTimerWithString(timer: int, direction: int, text: string): void;
    /** Draws a box at the specified screen X and Y position, with the specified size and RGBA colors
    *
    * https://library.sannybuilder.com/#/vc?q=DRAW_RECT */
    DrawRect(x: float, y: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Draws a loaded texture (038F) at the specified on-screen X and Y coordinates, with the specified size and RGBA color
    *
    * https://library.sannybuilder.com/#/vc?q=DRAW_SPRITE */
    DrawSprite(memorySlot: int, offsetLeft: float, offsetTop: float, width: float, height: float, r: int, g: int, b: int, a: int): void;
    /** Makes a specific part of the HUD disappear and reappear several times
    *
    * https://library.sannybuilder.com/#/vc?q=FLASH_HUD_OBJECT */
    FlashObject(object: int): void;
    /** Makes the on-screen timer stop updating
    *
    * https://library.sannybuilder.com/#/vc?q=FREEZE_ONSCREEN_TIMER */
    FreezeTimer(state: boolean): void;
    /** Loads the specified splash screen
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_SPLASH_SCREEN */
    LoadSplash(txdName: string): void;
    /** Causes the next texture to be drawn (038D) before the fade is drawn
    *
    * https://library.sannybuilder.com/#/vc?q=SET_SPRITES_DRAW_BEFORE_FADE */
    SetSpritesDrawBeforeFade(state: boolean): void;
    /** Enables widescreen
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_WIDESCREEN */
    SwitchWidescreen(state: boolean): void;
}
declare var Hud: Hud
/** ImGui integration
 * 
 * https://library.sannybuilder.com/#/vc/classes/ImGui */
interface ImGui {
    /** Adds a line form point A to B
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_DRAWLIST_ADD_LINE */
    AddLine(drawList: int, p1X: float, p1Y: float, p2X: float, p2Y: float, r: int, g: int, b: int, a: int, thickness: float): void;
    /** Adds text at specified position
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_DRAWLIST_ADD_TEXT */
    AddText(drawList: int, posX: float, posY: float, r: int, g: int, b: int, a: int, text: string): void;
    /** Creates the window
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BEGIN */
    Begin(windowName: string, state: boolean, noTitleBar: boolean, noResize: boolean, noMove: boolean, autoResize: boolean): boolean;
    /** Creates a child window widget inside the main window
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BEGIN_CHILD */
    BeginChild(uniqueId: string): void;
    /** Creates a unique frame with its own space in memory. End it with 0C32. MUST BE UNIQUE!
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BEGIN_FRAME */
    BeginFrame(uniqueId: string): void;
    /** Creates the main menu bar
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BEGIN_MAINMENUBAR */
    BeginMainMenuBar(uniqueId: string): boolean;
    /** Creates a bullet point
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BULLET */
    Bullet(): void;
    /** Creates the button
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BUTTON */
    Button(buttonName: string, width: float, height: float): boolean;
    /** Creates the arrow button in the specified direction
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_ARROW_BUTTON */
    ButtonArrow(name: string, imGuiDir: int): boolean;
    /** Creates the button with custom colors
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_COLOR_BUTTON */
    ButtonColored(buttonName: string, red: float, green: float, blue: float, alpha: float, width: float, height: float): boolean;
    /** Creates a ImGui button with specified image
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_IMAGE_BUTTON */
    ButtonImage(name: string, image: int, width: float, height: float): boolean;
    /** Creates the invisible button
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_INVISIBLE_BUTTON */
    ButtonInvisible(buttonName: string, width: float, height: float): boolean;
    /** Returns the width and height of the given text
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_CALC_TEXT_SIZE */
    CalcTextSize(text: string): {
        width: float;
        height: float;
    };
    /** Creates the checkbox
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_CHECKBOX */
    Checkbox(label: string, isChecked: boolean): boolean;
    /** Adds the collapsing header
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_COLLAPSING_HEADER */
    CollapsingHeader(label: string): boolean;
    /** Creates the color picker and sets the default color (0.0f-1.0f)
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_COLOR_PICKER */
    ColorPicker(label: string): {
        red: int;
        green: int;
        blue: int;
        alpha: int;
    };
    /** Divides the window width into N columns. Close this with Columns(1)
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_COLUMNS */
    Columns(count: int): void;
    /** Creates a combo box widget. Pass options separated by commas "item1,item2,item3"
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_COMBO */
    ComboBox(name: string, options: string, selection: int): int;
    /** Creates the dummy widget. Used for spacing
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_DUMMY */
    Dummy(width: float, height: float): void;
    /** Ends the window
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_END */
    End(): void;
    /** Ends the child window widget created with 0C25
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_END_CHILD */
    EndChild(): void;
    /** Ends unique ImGui frame
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_END_FRAME */
    EndFrame(): void;
    /** Ends the main menu bar
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_END_MAINMENUBAR */
    EndMainMenuBar(): void;
    /** Frees a loaded image data
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_FREE_IMAGE */
    FreeImage(image: int): void;
    /** Returns pointer to ImGui background drawlist
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_BACKGROUND_DRAWLIST */
    GetBackgroundDrawList(): int;
    /** Returns the width & height of the display
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_DISPLAY_SIZE */
    GetDisplaySize(): {
        width: float;
        height: float;
    };
    /** Returns pointer to foreground draw list
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_FOREGROUND_DRAWLIST */
    GetForegroundDrawList(): int;
    /** Returns the ImGui frame height
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_FRAME_HEIGHT */
    GetFrameHeight(): float;
    /** Returns the ImGuiRedux version
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_PLUGIN_VERSION */
    GetPluginVersion(): float;
    /** Returns the width and height scaling factor based on the window size
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_SCALING_SIZE */
    GetScalingSize(uniqueId: string, count: int, spacing: boolean): {
        x: float;
        y: float;
    };
    /** Returns the ImGui version
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_VERSION */
    GetVersion(): string;
    /** Returns the content region width of the window
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_WINDOW_CONTENT_REGION_WIDTH */
    GetWindowContentRegionWidth(uniqueId: string): float;
    /** Returns pointer to ImGui window drawList
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_WINDOW_DRAWLIST */
    GetWindowDrawlist(): int;
    /** Returns the x,y coordinates of the window on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_WINDOW_POS */
    GetWindowPos(uniqueId: string): {
        x: float;
        y: float;
    };
    /** Returns the width and height of the window
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_GET_WINDOW_SIZE */
    GetWindowSize(uniqueId: string): {
        width: float;
        height: float;
    };
    /** Creates the float input
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_INPUT_FLOAT */
    InputFloat(label: string, initValue: float, min: float, max: float): float;
    /** Creates the int input
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_INPUT_INT */
    InputInt(label: string, initValue: int, min: int, max: int): int;
    /** Creates the text input
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_INPUT_TEXT */
    InputText(label: string): string;
    /** Returns true if the previous widget is in active state
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_IS_ITEM_ACTIVE */
    IsItemActive(uniqueId: string): boolean;
    /** Returns true if the previous widget is clicked
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_IS_ITEM_CLICKED */
    IsItemClicked(uniqueId: string): boolean;
    /** Returns true if the previous widget is focused
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_IS_ITEM_FOCUSED */
    IsItemFocused(uniqueId: string): boolean;
    /** Returns true if the previous widget is hovered with mouse
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_IS_ITEM_HOVERED */
    IsItemHovered(uniqueId: string): boolean;
    /** Loads a image file from disk. Relative to CLEO directory
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_LOAD_IMAGE */
    LoadImage(path: string): int;
    /** Adds the menu item
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_MENU_ITEM */
    MenuItem(text: string, selected: boolean, enabled: boolean): boolean;
    /** Creates a new line for the next widget
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_NEWLINE */
    NewLine(): void;
    /** Puts the next widgets on the next column. Used alongside 0C16
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_NEXT_COLUMN */
    NextColumn(): void;
    /** Removes the pushed item width (0C27) from the stack
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_POP_ITEM_WIDTH */
    PopItemWidth(): void;
    /** Removes the recent ImGuiCol from the stack
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_POP_STYLE_COLOR */
    PopStyleColor(count: int): void;
    /** Removes the recent imGuiStyleVar from the stack
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_POP_STYLE_VAR */
    PopStyleVar(count: int): void;
    /** Sets the item width for the next widgets
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_PUSH_ITEM_WIDTH */
    PushItemWidth(width: float): void;
    /** Pushes a ImGuiCol value to the stack. Use PopStyleColor to undo the effect
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_PUSH_STYLE_COLOR */
    PushStyleColor(imGuiCol: int, r: int, g: int, b: int, a: int): void;
    /** Pushes a ImGuiStyleVar value to the stack. Use PopStyleVar to undo the effect
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_PUSH_STYLE_VAR */
    PushStyleVar(imGuiStyleVar: int, val: float): void;
    /** Pushes a ImGuiStyleVar value to the stack. Use PopStyleVar to undo the effect
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_PUSH_STYLE_VAR2 */
    PushStyleVar2(imGuiStyleVar: int, x: float, y: float): void;
    /** Creates the radio button
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_RADIO_BUTTON */
    RadioButton(label: string, selectedBtn: int, btnNo: int): int;
    /** Appends the next widget to the same line as the previous widget
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SAMELINE */
    SameLine(): void;
    /** Adds the selectable widget
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SELECTABLE */
    Selectable(text: string, selected: boolean): boolean;
    /** Adds a horizontal separator line
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SEPARATOR */
    Separator(): void;
    /** Toggles the cursor
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_CURSOR_VISIBLE */
    SetCursorVisible(show: boolean): void;
    /** Sets image background color
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_IMAGE_BG_COLOR */
    SetImageBgColor(r: float, g: float, b: float, a: float): void;
    /** Sets image tint color
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_IMAGE_TINT_COLOR */
    SetImageTintColor(r: float, g: float, b: float, a: float): void;
    /** Displays a text message on top left corner of the screen. Useful for games without `showTextBox(...)` support
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_MESSAGE */
    SetMessage(text: string): void;
    /** Sets the current window position. Applies to the next window ( aka Begin() )
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_NEXT_WINDOW_POS */
    SetNextWindowPos(x: float, y: float, imGuiCond: int): void;
    /** Sets the current window size. Applies to the next window ( aka Begin() )
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_NEXT_WINDOW_SIZE */
    SetNextWindowSize(width: float, height: float, imGuiCond: int): void;
    /** Sets the background transparency of next window (0.0f-1.0f)
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_NEXT_WINDOW_TRANSPARENCY */
    SetNextWindowTransparency(alpha: float): void;
    /** Creates the popup window with the given text
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_TOOLTIP */
    SetTooltip(text: string): void;
    /** Sets the current window position. Must be called inside Begin()...End()
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_WINDOW_POS */
    SetWindowPos(x: float, y: float, imGuiCond: int): void;
    /** Sets the current window size. Must be called inside Begin()...End()
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SET_WINDOW_SIZE */
    SetWindowSize(width: float, height: float, imGuiCond: int): void;
    /** Creates the float slider input
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SLIDER_FLOAT */
    SliderFloat(label: string, initValue: float, min: float, max: float): float;
    /** Creates the int slider input
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SLIDER_INT */
    SliderInt(label: string, initValue: int, min: int, max: int): int;
    /** Adds some spacing after the previous widget
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_SPACING */
    Spacing(): void;
    /** Pass tab names separated by comma. Returns the index of the visible tab
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_TABS */
    Tabs(name: string, tabNames: string): int;
    /** Creates the text line
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_TEXT */
    Text(text: string): void;
    /** Displays a center aligned ImGui text widget
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_TEXT_CENTERED */
    TextCentered(text: string): void;
    /** Creates the text line of the given RGBA color (0.0f-1.0f)
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_TEXT_COLORED */
    TextColored(text: string, red: float, green: float, blue: float, alpha: float): void;
    /** Creates the text line with the disabled color ( Grayish by default )
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_TEXT_DISABLED */
    TextDisabled(text: string): void;
    /** Creates the text line with a bullet point
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_BULLET_TEXT */
    TextWithBullet(text: string): void;
    /** Creates the text line that wraps to a newline if the text goes beyond the window width
    *
    * https://library.sannybuilder.com/#/vc?q=IMGUI_TEXT_WRAPPED */
    TextWrapped(text: string): void;
}
declare var ImGui: ImGui
/** Reading and writing .ini files
 * 
 * https://library.sannybuilder.com/#/vc/classes/IniFile */
interface IniFile {
    /** Reads a floating-point value from the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=READ_FLOAT_FROM_INI_FILE */
    ReadFloat(path: string, section: string, key: string): float | undefined;
    /** Reads an integer value from the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=READ_INT_FROM_INI_FILE */
    ReadInt(path: string, section: string, key: string): int | undefined;
    /** Reads a string value from the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=READ_STRING_FROM_INI_FILE */
    ReadString(path: string, section: string, key: string): string | undefined;
    /** Writes the floating-point value to the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=WRITE_FLOAT_TO_INI_FILE */
    WriteFloat(value: float, path: string, section: string, key: string): boolean;
    /** Writes the integer value to the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=WRITE_INT_TO_INI_FILE */
    WriteInt(value: int, path: string, section: string, key: string): boolean;
    /** Writes the string value to the ini file
    *
    * https://library.sannybuilder.com/#/vc?q=WRITE_STRING_TO_INI_FILE */
    WriteString(value: string, path: string, section: string, key: string): boolean;
}
declare var IniFile: IniFile
/** Rampages Logic
 * 
 * https://library.sannybuilder.com/#/vc/classes/KillFrenzy */
interface KillFrenzy {
    /** Returns the status of the current rampage
    *
    * https://library.sannybuilder.com/#/vc?q=READ_KILL_FRENZY_STATUS */
    ReadStatus(): int;
    /** Starts a rampage
    *
    * https://library.sannybuilder.com/#/vc?q=START_KILL_FRENZY */
    Start(text: string, weaponType: int, timeInMs: int, targetsNum: int, targetModel1: int, targetModel2: int, targetModel3: int, targetModel4: int, betaSoundsAndMessages: boolean): void;
}
declare var KillFrenzy: KillFrenzy
/** Math and Conversion Utilities
 * 
 * https://library.sannybuilder.com/#/vc/classes/Math */
interface Math {
    // https://github.com/microsoft/TypeScript/blob/f3cc8684997d2c5708c344d909691636c355612b/lib/lib.es5.d.ts#L617
    // Copyright (c) Microsoft Corporation. All rights reserved.
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    readonly E: number;
    /** The natural logarithm of 10. */
    readonly LN10: number;
    /** The natural logarithm of 2. */
    readonly LN2: number;
    /** The base-2 logarithm of e. */
    readonly LOG2E: number;
    /** The base-10 logarithm of e. */
    readonly LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    readonly SQRT1_2: number;
    /** The square root of 2. */
    readonly SQRT2: number;
    /**
    * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
    * For example, the absolute value of -5 is the same as the absolute value of 5.
    * @param x A numeric expression for which the absolute value is needed.
    */
    abs(x: number): number;
    /**
    * Returns the arc cosine (or inverse cosine) of a number.
    * @param x A numeric expression.
    */
    acos(x: number): number;
    /**
    * Returns the arcsine of a number.
    * @param x A numeric expression.
    */
    asin(x: number): number;
    /**
    * Returns the arctangent of a number.
    * @param x A numeric expression for which the arctangent is needed.
    */
    atan(x: number): number;
    /**
    * Returns the angle (in radians) from the X axis to a point.
    * @param y A numeric expression representing the cartesian y-coordinate.
    * @param x A numeric expression representing the cartesian x-coordinate.
    */
    atan2(y: number, x: number): number;
    /**
    * Returns the smallest integer greater than or equal to its numeric argument.
    * @param x A numeric expression.
    */
    ceil(x: number): number;
    /**
    * Returns the cosine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    cos(x: number): number;
    /**
    * Returns e (the base of natural logarithms) raised to a power.
    * @param x A numeric expression representing the power of e.
    */
    exp(x: number): number;
    /**
    * Returns the greatest integer less than or equal to its numeric argument.
    * @param x A numeric expression.
    */
    floor(x: number): number;
    /**
    * Returns the natural logarithm (base e) of a number.
    * @param x A numeric expression.
    */
    log(x: number): number;
    /**
    * Returns the larger of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */
    max(...values: number[]): number;
    /**
    * Returns the smaller of a set of supplied numeric expressions.
    * @param values Numeric expressions to be evaluated.
    */
    min(...values: number[]): number;
    /**
    * Returns the value of a base expression taken to a specified power.
    * @param x The base value of the expression.
    * @param y The exponent value of the expression.
    */
    pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */
    random(): number;
    /**
    * Returns a supplied numeric expression rounded to the nearest integer.
    * @param x The value to be rounded to the nearest integer.
    */
    round(x: number): number;
    /**
    * Returns the sine of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    sin(x: number): number;
    /**
    * Returns the square root of a number.
    * @param x A numeric expression.
    */
    sqrt(x: number): number;
    /**
    * Returns the tangent of a number.
    * @param x A numeric expression that contains an angle measured in radians.
    */
    tan(x: number): number;

    // https://github.com/microsoft/TypeScript/blob/cec2fda9a53620dc545a2c4d7b0156446ab145b4/lib/lib.es2015.core.d.ts#L100
    // Copyright (c) Microsoft Corporation. All rights reserved.
    /**
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.
     * @param x A numeric expression.
     */
    clz32(x: number): number;
    /**
     * Returns the result of 32-bit multiplication of two numbers.
     * @param x First number
     * @param y Second number
     */
    imul(x: number, y: number): number;
    /**
     * Returns the sign of the x, indicating whether x is positive, negative or zero.
     * @param x The numeric expression to test
     */
    sign(x: number): number;
    /**
     * Returns the base 10 logarithm of a number.
     * @param x A numeric expression.
     */
    log10(x: number): number;
    /**
     * Returns the base 2 logarithm of a number.
     * @param x A numeric expression.
     */
    log2(x: number): number;
    /**
     * Returns the natural logarithm of 1 + x.
     * @param x A numeric expression.
     */
    log1p(x: number): number;
    /**
     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
     * subtracting 1 from the exponential function of x (e raised to the power of x, where e
     * is the base of the natural logarithms).
     * @param x A numeric expression.
     */
    expm1(x: number): number;
    /**
     * Returns the hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    cosh(x: number): number;
    /**
     * Returns the hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    sinh(x: number): number;
    /**
     * Returns the hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    tanh(x: number): number;
    /**
     * Returns the inverse hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    acosh(x: number): number;
    /**
     * Returns the inverse hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    asinh(x: number): number;
    /**
     * Returns the inverse hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    atanh(x: number): number;
    /**
     * Returns the square root of the sum of squares of its arguments.
     * @param values Values to compute the square root for.
     *     If no arguments are passed, the result is +0.
     *     If there is only one argument, the result is the absolute value.
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.
     *     If any argument is NaN, the result is NaN.
     *     If all arguments are either +0 or −0, the result is +0.
     */
    hypot(...values: number[]): number;
    /**
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.
     * If x is already an integer, the result is x.
     * @param x A numeric expression.
     */
    trunc(x: number): number;
    /**
     * Returns the nearest single precision float representation of a number.
     * @param x A numeric expression.
     */
    fround(x: number): number;
    /**
     * Returns an implementation-dependent approximation to the cube root of number.
     * @param x A numeric expression.
     */
    cbrt(x: number): number;    /** Returns the result of converting meters to feet
    *
    * https://library.sannybuilder.com/#/vc?q=CONVERT_METRES_TO_FEET_INT */
    ConvertMetersToFeet(meters: int): int;
    /** Gets the distance between two points
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DISTANCE_BETWEEN_COORDS_2D */
    GetDistanceBetweenCoords2D(fromX: float, fromY: float, toX: float, toZ: float): float;
    /** Gets the distance between two points
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DISTANCE_BETWEEN_COORDS_3D */
    GetDistanceBetweenCoords3D(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): float;
    /** Returns a random float between the specified ranges
    *
    * https://library.sannybuilder.com/#/vc?q=GENERATE_RANDOM_FLOAT_IN_RANGE */
    RandomFloatInRange(min: float, max: float): float;
    /** Returns a random integer between the specified ranges
    *
    * https://library.sannybuilder.com/#/vc?q=GENERATE_RANDOM_INT_IN_RANGE */
    RandomIntInRange(min: int, max: int): int;
}
declare var Math: Math
/** Process Memory Manipulation
 * 
 * https://library.sannybuilder.com/#/vc/classes/Memory */
interface Memory {
    /** Reads a floating-point value (IEEE 754) from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadFloat(address: int, vp: boolean): float;
    /** Writes a floating-point value (IEEE 754) to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteFloat(address: int, value: float, vp: boolean): void;
    /** Reads a 8-bit signed integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadI8(address: int, vp: boolean): int;
    /** Reads a 16-bit signed integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadI16(address: int, vp: boolean): int;
    /** Reads a 32-bit signed integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadI32(address: int, vp: boolean): int;
    /** Reads a 8-bit unsigned integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadU8(address: int, vp: boolean): int;
    /** Reads a 16-bit unsigned integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadU16(address: int, vp: boolean): int;
    /** Reads a 32-bit unsigned integer value from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadU32(address: int, vp: boolean): int;
    /** Reads a null-terminated UTF-8 encoded string from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadUtf8(address: int): string;
    /** Reads a null-terminated UTF-16 encoded string from the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ReadUtf16(address: int): string;
    /** Writes a 8-bit signed integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteI8(address: int, value: int, vp: boolean): void;
    /** Writes a 16-bit signed integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteI16(address: int, value: int, vp: boolean): void;
    /** Writes a 32-bit signed integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteI32(address: int, value: int, vp: boolean): void;
    /** Writes a 8-bit unsigned integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteU8(address: int, value: int, vp: boolean): void;
    /** Writes a 16-bit unsigned integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteU16(address: int, value: int, vp: boolean): void;
    /** Writes a 32-bit unsigned integer value to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteU32(address: int, value: int, vp: boolean): void;
    /** Writes a sequence of UTF-8 encoded characters to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteUtf8(address: int, value: string, vp: boolean, ib: boolean): void;
    /** Writes a sequence of UTF-16 encoded characters to the memory 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    WriteUtf16(address: int, value: string, vp: boolean, ib: boolean): void;

    /** Cast 32-bit signed integer value to floating-point value (IEEE 754) 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToFloat(value: int): float;
    /** Cast floating-point value (IEEE 754) to 32-bit signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    FromFloat(value: float): int;
    /** Cast 8-bit signed integer value to unsigned integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToU8(value: int): int;
    /** Cast 16-bit signed integer value to unsigned integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToU16(value: int): int;
    /** Cast 32-bit signed integer value to unsigned integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToU32(value: int): int;
    /** Cast 8-bit unsigned integer value to signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToI8(value: int): int;
    /** Cast 16-bit unsigned integer value to signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToI16(value: int): int;
    /** Cast 32-bit unsigned integer value to signed integer value 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    ToI32(value: int): int;
    /** Returns address of a function or variable, or 0 otherwise
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    Translate(symbol: string): int;

    /** Convenience methods for invoking different types of functions */
    Fn: {
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Cdecl(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a floating-point value as a result */
        CdeclFloat(address: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        CdeclI8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        CdeclI16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        CdeclI32(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        CdeclU8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        CdeclU16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "cdecl" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        CdeclU32(address: int): (...funcParams: int[]) => int;

        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Stdcall(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a floating-point value as a result */
        StdcallFloat(address: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        StdcallI8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        StdcallI16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        StdcallI32(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        StdcallU8(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        StdcallU16(address: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "stdcall"  calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#stdcall
         * @param address global address of the function
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        StdcallU32(address: int): (...funcParams: int[]) => int;

        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        Thiscall(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a floating-point value as a result */
        ThiscallFloat(address: int, struct: int): (...funcParams: int[]) => float;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 8-bit signed integer value as a result */
        ThiscallI8(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 16-bit signed integer value as a result */
        ThiscallI16(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit signed integer value as a result */
        ThiscallI32(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 8-bit unsigned integer value as a result */
        ThiscallU8(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 16-bit unsigned integer value as a result */
        ThiscallU16(address: int, struct: int): (...funcParams: int[]) => int;
        /** Creates a new function to be called using "thiscall" calling convention
         * https://en.wikipedia.org/wiki/X86_calling_conventions#thiscall
         * It's also known as a class method call
         * @param address global address of the method
         * @param struct global address of the object whose method is being called
         * @returns a function accepting arguments and returning a 32-bit unsigned integer value as a result */
        ThiscallU32(address: int, struct: int): (...funcParams: int[]) => int;
    }

    /** Calls a function 
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallFunction(address: int, numParams: int, pop: int, ...funcParams: int[]): void;

    /** Calls a function that returns an integer value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallFunctionReturn(address: int, numParams: int, pop: int, ...funcParams: int[]): int;

    /** Calls a function that returns a floating-point value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallFunctionReturnFloat(address: int, numParams: int, pop: int, ...funcParams: int[]): float;

    /** Calls a class method
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallMethod(address: int, struct: int, numParams: int, pop: int, ...funcParams: int[]): void;

    /** Calls a class method that returns an integer value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallMethodReturn(address: int, struct: int, numParams: int, pop: int, ...funcParams: int[]): int;

    /** Calls a class method that returns a floating-point value
    *
    * https://re.cleo.li/docs/en/using-memory.html */
    CallMethodReturnFloat(address: int, struct: int, numParams: int, pop: int, ...funcParams: int[]): float;
    /** Allocates a chunk of memory of the given size near to the memory page of the main exe module
    *
    * https://library.sannybuilder.com/#/vc?q=ALLOC_NEAR */
    AllocNear(size: int): int;
    /** Calls a function at the address with the given arguments and the calling convention defined by the pop parameter where 0 means 'stdcall' and a value equal to numParams means  'cdecl'
    *
    * https://library.sannybuilder.com/#/vc?q=CALL_FUNCTION */
    CallFunction(address: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a function similarly to 0AA5 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/vc?q=CALL_FUNCTION_RETURN */
    CallFunctionReturn(address: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Calls a method of the object (struct) with the given arguments and the 'thiscall' calling convention (pop is always 0)
    *
    * https://library.sannybuilder.com/#/vc?q=CALL_METHOD */
    CallMethod(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): void;
    /** Calls a method of the object (struct) similarly to 0AA6 and writes the result into the variable following the arguments list
    *
    * https://library.sannybuilder.com/#/vc?q=CALL_METHOD_RETURN */
    CallMethodReturn(address: int, struct: int, numParams: int, pop: int, ...funcParams: number[]): int;
    /** Returns an address of a memory chunk with the given index in a list of matches for the pattern
    *
    * https://library.sannybuilder.com/#/vc?q=FIND_PATTERN */
    FindPattern(pattern: string, index: int): int | undefined;
    /** Returns the address of the main exe module
    *
    * https://library.sannybuilder.com/#/vc?q=GET_IMAGE_BASE */
    GetImageBase(): int;
    /** Reads a value from the game memory
    *
    * https://library.sannybuilder.com/#/vc?q=READ_MEMORY */
    Read(address: int, size: int, vp: boolean): int;
    /** Reads a 32-bit value referenced by a relative offset at the address
    *
    * https://library.sannybuilder.com/#/vc?q=READ_RELATIVE_OFFSET */
    ReadRelativeOffset(address: int): int;
    /** Writes the value at the memory address
    *
    * https://library.sannybuilder.com/#/vc?q=WRITE_MEMORY */
    Write(address: int, size: int, value: int, vp: boolean): void;
    /** Replaces an offset at the address with the offset to the near address (use ALLOC_NEAR)
    *
    * https://library.sannybuilder.com/#/vc?q=WRITE_RELATIVE_OFFSET */
    WriteRelativeOffset(address: int, nearAddress: int): void;
}
declare var Memory: Memory
/** Current Mission control
 * 
 * https://library.sannybuilder.com/#/vc/classes/Mission */
interface Mission {
    /** Terminates the active mission by executing its mission cleanup routine
    *
    * https://library.sannybuilder.com/#/vc?q=FAIL_CURRENT_MISSION */
    Fail(): void;
    /** Resets multiple settings that are usually set during missions and in some scripts
    *
    * https://library.sannybuilder.com/#/vc?q=MISSION_HAS_FINISHED */
    Finish(): void;
    /** Loads a mission from the list defined in the main.scm header
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_AND_LAUNCH_MISSION_INTERNAL */
    LoadAndLaunchInternal(index: int): void;
}
declare var Mission: Mission
/** 
 * 
 * https://library.sannybuilder.com/#/vc/classes/Mouse */
interface Mouse {
    /** Returns the position of the mouse cursor
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CURSOR_POS */
    GetCursorPos(): {
        x: int;
        y: int;
    } | undefined;
    /** Sets the position of the mouse cursor
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CURSOR_POS */
    SetCursorPos(x: int, y: int): boolean;
}
declare var Mouse: Mouse
/** Pre-recorded script paths
 * 
 * https://library.sannybuilder.com/#/vc/classes/ObjectPath */
declare class ObjectPath {
    constructor(handle: number);
    /** Initialises a script path
    *
    * https://library.sannybuilder.com/#/vc?q=INITIALISE_OBJECT_PATH */
    static Initialise(pathId: int, width: float): ObjectPath;
    /** Removes the script path
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_OBJECT_PATH */
    clear(): void;
    /** Sets the distance along the script path
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_PATH_POSITION */
    setPosition(position: float): ObjectPath;
    /** Sets the speed of objects on the script path
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_PATH_SPEED */
    setSpeed(speed: float): ObjectPath;
    /** Attaches the object to the script path
    *
    * https://library.sannybuilder.com/#/vc?q=START_OBJECT_ON_PATH */
    start(object: ScriptObject): ObjectPath;
}
/** Input Controls
 * 
 * https://library.sannybuilder.com/#/vc/classes/Pad */
interface Pad {
    /** Returns the controller mode
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CONTROLLER_MODE */
    GetControllerMode(): int;
    /** Returns the code of the last pressed button
    *
    * https://library.sannybuilder.com/#/vc?q=GET_LAST_KEY */
    GetLastKey(): int;
    /** Returns the offset of the specified Left/Right, Up/Down, Look Left/Look Right and Look Up/Look Down keys
    *
    * https://library.sannybuilder.com/#/vc?q=GET_POSITION_OF_ANALOGUE_STICKS */
    GetPositionOfAnalogueSticks(pad: int): {
        leftStickX: int;
        leftStickY: int;
        rightStickX: int;
        rightStickY: int;
    };
    /** Holds down a keyboard or mouse button until it gets released with RELEASE_KEY
    *
    * https://library.sannybuilder.com/#/vc?q=HOLD_KEY */
    HoldKey(keyCode: int): void;
    /** Returns true if the pad's button has been pressed
    *
    * https://library.sannybuilder.com/#/vc?q=IS_BUTTON_PRESSED */
    IsButtonPressed(pad: int, buttonId: int): boolean;
    /** Returns true if the attack button is being pressed
    *
    * https://library.sannybuilder.com/#/vc?q=IS_IN_CAR_FIRE_BUTTON_PRESSED */
    IsInCarFireButtonPressed(): boolean;
    /** Returns true if a keyboard or mouse button has just been pressed
    *
    * https://library.sannybuilder.com/#/vc?q=IS_KEY_DOWN */
    IsKeyDown(keyCode: int): boolean;
    /** Returns true if the player is pressing a keyboard button with the specified code
    *
    * https://library.sannybuilder.com/#/vc?q=IS_KEY_PRESSED */
    IsKeyPressed(keyCode: int): boolean;
    /** Returns true if a keyboard or mouse button has just been released
    *
    * https://library.sannybuilder.com/#/vc?q=IS_KEY_UP */
    IsKeyUp(keyCode: int): boolean;
    /** Releases a keyboard or mouse button after HOLD_KEY
    *
    * https://library.sannybuilder.com/#/vc?q=RELEASE_KEY */
    ReleaseKey(keyCode: int): void;
    /** Affects the delay to the left and right steering while driving
    *
    * https://library.sannybuilder.com/#/vc?q=SET_DRUNK_INPUT_DELAY */
    SetDrunkInputDelay(pad: int, delay: int): void;
    /** Returns true if the specified string of letters has been typed on the keyboard
    *
    * https://library.sannybuilder.com/#/vc?q=TEST_CHEAT */
    TestCheat(input: string): boolean;
}
declare var Pad: Pad
/** Path Configuration And Lookup
 * 
 * https://library.sannybuilder.com/#/vc/classes/Path */
interface Path {
    /** Adds a new waypoint to the route with the specified id
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_ROUTE_POINT */
    AddRoutePoint(routeId: int, x: float, y: float, z: float): void;
    /** Returns the nearest path note from the specified coordinates that a vehicle can drive on
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CLOSEST_CAR_NODE */
    GetClosestCarNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Returns the position and heading of the closest vehicle path node to the specified position
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CLOSEST_CAR_NODE_WITH_HEADING */
    GetClosestCarNodeWithHeading(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
        angle: float;
    };
    /** Returns the nearest path node from the specified coordinates that a pedestrian can walk on
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CLOSEST_CHAR_NODE */
    GetClosestCharNode(x: float, y: float, z: float): {
        nodeX: float;
        nodeY: float;
        nodeZ: float;
    };
    /** Gets two closest path nodes within the specified distance range
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CLOSEST_STRAIGHT_ROAD */
    GetClosestStraightRoad(x: float, y: float, z: float, minDist: float, maxDist: float): {
        node1X: float;
        node1Y: float;
        node1Z: float;
        node2X: float;
        node2Y: float;
        node2Z: float;
        angle: float;
    };
    /** Gets the coordinates of the nth car path node closest to the given coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=GET_NTH_CLOSEST_CAR_NODE */
    GetNthClosestCarNode(fromX: float, fromY: float, fromZ: float, n: int): {
        x: float;
        y: float;
        z: float;
    };
    /** Clears all waypoints in the route with the specified id
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_ROUTE */
    RemoveRoute(routeId: int): void;
    /** Forbids pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_PED_ROADS_OFF */
    SwitchPedRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows pedestrians to walk into the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_PED_ROADS_ON */
    SwitchPedRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Prevents cars from driving on roads in the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_ROADS_OFF */
    SwitchRoadsOff(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Allows cars to drive in the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_ROADS_ON */
    SwitchRoadsOn(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
}
declare var Path: Path
/** Phone Booth Calls and Messages
 * 
 * https://library.sannybuilder.com/#/vc/classes/Phone */
declare class Phone {
    constructor(handle: number);
    /** Gets the phone at the specified X and Y coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=GRAB_PHONE */
    static Grab(x: float, y: float): Phone;
    /** Disables the phone from ringing
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_PHONE_OFF */
    turnOff(): Phone;
    /** Makes the phone ringing
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_PHONE_ON */
    turnOn(): Phone;
}
/** Interactive Script Objects
 * 
 * https://library.sannybuilder.com/#/vc/classes/Pickup */
declare class Pickup {
    constructor(handle: number);
    /** Creates a pickup with the given model and type
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_PICKUP */
    static Create(modelId: int, pickupType: int, x: float, y: float, z: float): Pickup;
    /** Creates a clothing pickup at the location
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_CLOTHES_PICKUP */
    static CreateClothes(x: float, y: float, z: float, type: int): Pickup;
    /** Creates an asset pickup for an asset which can be bought
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_FORSALE_PROPERTY_PICKUP */
    static CreateForSaleProperty(x: float, y: float, z: float, price: int, message: string): Pickup;
    /** Creates an asset icon for an asset that is not for sale
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_LOCKED_PROPERTY_PICKUP */
    static CreateLockedProperty(x: float, y: float, z: float, message: string): Pickup;
    /** Creates a money pickup with the specified cash value
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_MONEY_PICKUP */
    static CreateMoney(x: float, y: float, z: float, cashAmount: int): Pickup;
    /** Creates an asset revenue pickup
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_PROTECTION_PICKUP */
    static CreateProtection(x: float, y: float, z: float, revenueLimit: int, revenueRate: int): Pickup;
    /** Creates a weapon pickup, giving the player the specified amount of ammo when they pick it up
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_PICKUP_WITH_AMMO */
    static CreateWithAmmo(modelId: int, pickupType: int, ammo: int, x: float, y: float, z: float): Pickup;
    /** Returns true if specified pickup has been collected
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_PICKUP_BEEN_COLLECTED */
    hasBeenCollected(): boolean;
    /** Destroys the specified pickup, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_PICKUP */
    remove(): void;
}
/** The Main Character Controlled by a Player
 * 
 * https://library.sannybuilder.com/#/vc/classes/Player */
declare class Player {
    constructor(handle: number);
    /** Creates a player at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_PLAYER */
    static Create(modelId: int, x: float, y: float, z: float): Player;
    /** Returns the amount of times the player has destroyed a specific model
    *
    * https://library.sannybuilder.com/#/vc?q=GET_NUM_OF_MODELS_KILLED_BY_PLAYER */
    static GetNumOfModelsKilled(modelId: int): int;
    /** Returns true if the handle is an invalid player handle or the player is dead (wasted)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_DEAD */
    static IsDead(handle: int): boolean;
    /** Resets the count of how many times the player has destroyed a certain model (0298)
    *
    * https://library.sannybuilder.com/#/vc?q=RESET_NUM_OF_MODELS_KILLED_BY_PLAYER */
    static ResetNumOfModelsKilled(): void;
    static SetHasMetDebbieHarry(state: boolean): void;
    /** Increases the character's armour by the specified value to the maximum of 100.0
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_ARMOUR_TO_PLAYER */
    addArmour(amount: int): Player;
    /** Adds to the player's money
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SCORE */
    addScore(money: int): Player;
    /** Sets the player's wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=ALTER_WANTED_LEVEL */
    alterWantedLevel(wantedLevel: int): Player;
    /** Sets the player's wanted level if the specified level is higher than the current one
    *
    * https://library.sannybuilder.com/#/vc?q=ALTER_WANTED_LEVEL_NO_DROP */
    alterWantedLevelNoDrop(wantedLevel: int): Player;
    /** Applies brakes to the player's car
    *
    * https://library.sannybuilder.com/#/vc?q=APPLY_BRAKES_TO_PLAYERS_CAR */
    applyBrakesToCar(state: boolean): Player;
    /** Returns true if the player can move
    *
    * https://library.sannybuilder.com/#/vc?q=CAN_PLAYER_START_MISSION */
    canStartMission(): boolean;
    /** Clears the player's wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_WANTED_LEVEL */
    clearWantedLevel(): Player;
    /** Sets the amount of ammo a player has during a driveby
    *
    * https://library.sannybuilder.com/#/vc?q=ENSURE_PLAYER_HAS_DRIVE_BY_WEAPON */
    ensureHasDriveByWeapon(ammo: int): Player;
    /** Kills the player
    *
    * https://library.sannybuilder.com/#/vc?q=EXPLODE_PLAYER_HEAD */
    explodeHead(): Player;
    /** Gets the amount of ammo in the specified weapon of the player
    *
    * https://library.sannybuilder.com/#/vc?q=GET_AMMO_IN_PLAYER_WEAPON */
    getAmmoInWeapon(weaponType: int): int;
    /** Gets the bus fares collected by the player
    *
    * https://library.sannybuilder.com/#/vc?q=GET_BUS_FARES_COLLECTED_BY_PLAYER */
    getBusFaresCollected(): int;
    /** Gets the character handle for the specified player
    *
    * https://library.sannybuilder.com/#/vc?q=GET_PLAYER_CHAR */
    getChar(): Char;
    /** Returns the player's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=GET_PLAYER_COORDINATES */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the type of weapon that the player is currently holding
    *
    * https://library.sannybuilder.com/#/vc?q=GET_CURRENT_PLAYER_WEAPON */
    getCurrentWeapon(): int;
    /** Returns the level of chaos inflicted by the player since the last reset (04BE)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_HAVOC_CAUSED_BY_PLAYER */
    getHavoc(): int;
    /** Returns the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_PLAYER_HEADING */
    getHeading(): float;
    /** Returns the player's health
    *
    * https://library.sannybuilder.com/#/vc?q=GET_PLAYER_HEALTH */
    getHealth(): int;
    /** Returns the stats of the most recent wheelie or stoppie attempt
    *
    * https://library.sannybuilder.com/#/vc?q=GET_WHEELIE_STATS */
    getWheelieStats(): {
        twoWheelsTime: int;
        twoWheelsDistance: float;
        wheelieTime: int;
        wheelieDistance: float;
        stoppieTime: int;
        stoppieDistance: float;
    };
    /** Gives the player the weapon with the specified amount of ammo
    *
    * https://library.sannybuilder.com/#/vc?q=GIVE_WEAPON_TO_PLAYER */
    giveWeapon(weaponType: int, ammo: int): Player;
    /** Returns true if the player has the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_PLAYER_GOT_WEAPON */
    hasGotWeapon(weaponId: int): boolean;
    /** Increases the players armor by the specified amount
    *
    * https://library.sannybuilder.com/#/vc?q=INCREASE_PLAYER_MAX_ARMOUR */
    increaseMaxArmor(value: int): Player;
    /** Increases the players maximum health by the specified amount
    *
    * https://library.sannybuilder.com/#/vc?q=INCREASE_PLAYER_MAX_HEALTH */
    increaseMaxHealth(value: int): Player;
    /** Returns true if the player is holding the given type of weapon
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CURRENT_PLAYER_WEAPON */
    isCurrentWeapon(weaponType: int): boolean;
    /** Returns true if the player's health is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_HEALTH_GREATER */
    isHealthGreater(health: int): boolean;
    isInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player is on a boat
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_ANY_BOAT */
    isInAnyBoat(): boolean;
    /** Returns true if the player has a vehicle, even if they are not actually sat inside it (opening and closing the door)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_ANY_CAR */
    isInAnyCar(): boolean;
    /** Returns true if the player is in a helicopter
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_ANY_HELI */
    isInAnyHeli(): boolean;
    /** Returns true if the player is on a plane
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_ANY_PLANE */
    isInAnyPlane(): boolean;
    /** Returns true if the player is within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_AREA_2D */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_AREA_3D */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_AREA_IN_CAR_2D */
    isInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_AREA_IN_CAR_3D */
    isInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_AREA_ON_FOOT_2D */
    isInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_AREA_ON_FOOT_3D */
    isInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_CAR */
    isInCar(vehicle: Car): boolean;
    /** Returns true if the player is flying in a plane or a helicopter
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_FLYING_VEHICLE */
    isInFlyingVehicle(): boolean;
    /** Returns true if the player is in the specified zone
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_INFO_ZONE */
    isInInfoZone(infoZone: string): boolean;
    /** Returns true if the player is driving a vehicle with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_MODEL */
    isInModel(modelId: int): boolean;
    /** Returns true if the player is controlling a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_REMOTE_MODE */
    isInRemoteMode(): boolean;
    /** Returns true if the player is entering a shortcut taxi (0556)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_SHORTCUT_TAXI */
    isInShortcutTaxi(): boolean;
    /** Returns true if the player is driving a taxi
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_TAXI */
    isInTaxi(): boolean;
    /** Returns true if the player is in the specified map zone
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_IN_ZONE */
    isInZone(zone: string): boolean;
    /** Returns true if the player is driving a bike
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_ON_ANY_BIKE */
    isOnAnyBike(): boolean;
    /** Returns true if the player is on foot, and not occupying a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_ON_FOOT */
    isOnFoot(): boolean;
    /** Returns true if the player hasn't been wasted or busted (the player is still playing)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_PLAYING */
    isPlaying(): boolean;
    /** Returns true if the player is honking the horn in a car
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_PRESSING_HORN */
    isPressingHorn(): boolean;
    /** Returns true if the player's money is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=IS_SCORE_GREATER */
    isScoreGreater(money: int): boolean;
    /** Returns true if the player is firing a weapon
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_SHOOTING */
    isShooting(): boolean;
    /** Returns true if the player fired a weapon within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_SHOOTING_IN_AREA */
    isShootingInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player is sitting in any vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_SITTING_IN_ANY_CAR */
    isSittingInAnyCar(): boolean;
    /** Returns true if the player is in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_SITTING_IN_CAR */
    isSittingInCar(vehicle: Car): boolean;
    /** Returns true if the player is not moving
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED */
    isStopped(): boolean;
    isStoppedInAngledArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, angle: float, drawSphere: boolean): boolean;
    isStoppedInAngledAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, angle: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED_IN_AREA_2D */
    isStoppedInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED_IN_AREA_3D */
    isStoppedInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED_IN_AREA_IN_CAR_2D */
    isStoppedInAreaInCar2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED_IN_AREA_IN_CAR_3D */
    isStoppedInAreaInCar3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 2D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED_IN_AREA_ON_FOOT_2D */
    isStoppedInAreaOnFoot2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_STOPPED_IN_AREA_ON_FOOT_3D */
    isStoppedInAreaOnFoot3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the player is aiming at the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_TARGETTING_CHAR */
    isTargettingChar(handle: Char): boolean;
    /** Returns true if the player is colliding with the vehicle either on foot or while driving
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_TOUCHING_VEHICLE */
    isTouchingVehicle(vehicle: Car): boolean;
    /** Returns true if the player's wanted level is over the specified value
    *
    * https://library.sannybuilder.com/#/vc?q=IS_WANTED_LEVEL_GREATER */
    isWantedLevelGreater(wantedLevel: int): boolean;
    /** Returns true if the player has the specified model (0352)
    *
    * https://library.sannybuilder.com/#/vc?q=IS_PLAYER_WEARING */
    isWearing(modelName: string): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ANY_MEANS_2D */
    locateAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ANY_MEANS_3D */
    locateAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateAnyMeansCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateAnyMeansCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ANY_MEANS_CHAR_2D */
    locateAnyMeansChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ANY_MEANS_CHAR_3D */
    locateAnyMeansChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_IN_CAR_2D */
    locateInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_IN_CAR_3D */
    locateInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateInCarCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateInCarCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_IN_CAR_CHAR_2D */
    locateInCarChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_IN_CAR_CHAR_3D */
    locateInCarChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ON_FOOT_2D */
    locateOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ON_FOOT_3D */
    locateOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    locateOnFootCar2D(handle: Car, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    locateOnFootCar3D(handle: Car, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is within the 2D radius of the specified character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ON_FOOT_CHAR_2D */
    locateOnFootChar2D(target: Char, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player is nearby the specified character on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_PLAYER_ON_FOOT_CHAR_3D */
    locateOnFootChar3D(target: Char, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_PLAYER_ANY_MEANS_2D */
    locateStoppedAnyMeans2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_PLAYER_ANY_MEANS_3D */
    locateStoppedAnyMeans3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_PLAYER_IN_CAR_2D */
    locateStoppedInCar2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area in a vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_PLAYER_IN_CAR_3D */
    locateStoppedInCar3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the 2D radius of the coordinates point on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_PLAYER_ON_FOOT_2D */
    locateStoppedOnFoot2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the player stopped within the specified 3D area on foot
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_STOPPED_PLAYER_ON_FOOT_3D */
    locateStoppedOnFoot3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the player to keep looking at the direction of the character
    *
    * https://library.sannybuilder.com/#/vc?q=PLAYER_LOOK_AT_CHAR_ALWAYS */
    lookAtCharAlways(target: Char): Player;
    /** Makes the player immune to fire
    *
    * https://library.sannybuilder.com/#/vc?q=MAKE_PLAYER_FIRE_PROOF */
    makeFireProof(state: boolean): Player;
    /** Makes the player safe, putting the character in a safe location
    *
    * https://library.sannybuilder.com/#/vc?q=MAKE_PLAYER_SAFE_FOR_CUTSCENE */
    makeSafeForCutscene(): Player;
    /** Takes all weapons away from the player
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_ALL_PLAYER_WEAPONS */
    removeAllWeapons(): Player;
    /** Resets the level of chaos inflicted by the player
    *
    * https://library.sannybuilder.com/#/vc?q=RESET_HAVOC_CAUSED_BY_PLAYER */
    resetHavoc(): Player;
    /** Sets the amount of ammo the player has in the specified weapon
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_AMMO */
    setAmmo(weaponType: int, ammo: int): Player;
    setAutoAim(state: boolean): Player;
    /** Sets the players driveby mode
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_CAN_DO_DRIVE_BY */
    setCanDoDriveBy(state: boolean): Player;
    /** Sets whether player's control is enabled
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_CONTROL */
    setControl(state: boolean): Player;
    /** Puts the player at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_COORDINATES */
    setCoordinates(x: float, y: float, z: float): Player;
    /** Sets the player's currently held weapon
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CURRENT_PLAYER_WEAPON */
    setCurrentWeapon(weaponType: int): Player;
    /** Makes the camera start moving around in a swirling motion with the specified intensity as if drunk
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_DRUNKENNESS */
    setDrunkenness(intensity: int): Player;
    /** Defines whether the player can reload their gun 4x times faster
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_FAST_RELOAD */
    setFastReload(state: boolean): Player;
    /** Sets whether the player loses the cash when gets wasted (works once)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_FREE_HEALTH_CARE */
    setFreeHealthCare(state: boolean): Player;
    /** Sets the player's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_HEADING */
    setHeading(heading: float): Player;
    /** Sets the player's health
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_HEALTH */
    setHealth(health: int): Player;
    /** Makes the character act as the player's hooker
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_HOOKER */
    setHooker(hooker: Char): Player;
    /** Sets the players mood, affecting the dialogue spoken by the player
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_MOOD */
    setMood(mood: int, time: int): Player;
    /** Defines whether the player can run fast forever
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_NEVER_GETS_TIRED */
    setNeverGetsTired(state: boolean): Player;
    /** Sets whether the player is visible or not
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PLAYER_VISIBLE */
    setVisible(state: boolean): Player;
    /** Shuts the player up
    *
    * https://library.sannybuilder.com/#/vc?q=SHUT_PLAYER_UP */
    shutUp(state: boolean): Player;
    /** Makes the player to stop looking at the character (022E)
    *
    * https://library.sannybuilder.com/#/vc?q=STOP_PLAYER_LOOKING */
    stopLooking(): Player;
    /** Returns the current vehicle of the player and adds it to the mission cleanup list
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_CAR_PLAYER_IS_IN */
    storeCarIsIn(): Car;
    /** Returns the player's vehicle handle without marking it as used by the script, therefore allowing it to be deleted by the game at any time
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_CAR_PLAYER_IS_IN_NO_SAVE */
    storeCarIsInNoSave(): Car;
    /** Returns the player's money
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_SCORE */
    storeScore(): int;
    /** Returns the player's current wanted level
    *
    * https://library.sannybuilder.com/#/vc?q=STORE_WANTED_LEVEL */
    storeWantedLevel(): int;
    /** Rotates the player to face the character
    *
    * https://library.sannybuilder.com/#/vc?q=TURN_PLAYER_TO_FACE_CHAR */
    turnToFaceChar(char: Char): Player;
    /** Puts the player at the specified location, removing them from any vehicle they're in
    *
    * https://library.sannybuilder.com/#/vc?q=WARP_PLAYER_FROM_CAR_TO_COORD */
    warpFromCarToCoord(x: float, y: float, z: float): Player;
    /** Puts the player in the specified vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=WARP_PLAYER_INTO_CAR */
    warpIntoCar(vehicle: Car): Player;
}
/** Remote-Controlled Cars
 * 
 * https://library.sannybuilder.com/#/vc/classes/Rc */
interface Rc {
    /** Destroys the remote-control vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=BLOW_UP_RC_BUGGY */
    BlowUpBuggy(): void;
    /** Returns the player's radio-controlled vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=GET_REMOTE_CONTROLLED_CAR */
    GetCar(player: Player): Car;
    /** Gives control of the remote-control vehicle to the player
    *
    * https://library.sannybuilder.com/#/vc?q=GIVE_REMOTE_CONTROLLED_CAR_TO_PLAYER */
    GiveCarToPlayer(player: Player, x: float, y: float, z: float, angle: float): void;
    /** Puts the player in control of a remote-control vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=GIVE_REMOTE_CONTROLLED_MODEL_TO_PLAYER */
    GiveModelToPlayer(handle: Player, x: float, y: float, z: float, angle: float, modelId: int): void;
    /** Exits remote-control mode
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_RC_BUGGY */
    RemoveBuggy(): void;
    /** Enables a remote-control vehicle detonation
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ENABLE_RC_DETONATE */
    SetEnableDetonate(state: boolean): void;
    /** Sets whether RC Bandits detonate on contact with the wheels of any four-wheeled vehicles
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ENABLE_RC_DETONATE_ON_CONTACT */
    SetEnableDetonateOnContact(state: boolean): void;
}
declare var Rc: Rc
/** Configuration of Respawn Points
 * 
 * https://library.sannybuilder.com/#/vc/classes/Restart */
interface Restart {
    /** Adds a new location where the player can respawn after death
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_HOSPITAL_RESTART */
    AddHospital(x: float, y: float, z: float, heading: float): void;
    /** Adds a new location where the player can respawn after arrest
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_POLICE_RESTART */
    AddPolice(x: float, y: float, z: float, heading: float): void;
    /** Stops the player from spawning at the override location (016E)
    *
    * https://library.sannybuilder.com/#/vc?q=CANCEL_OVERRIDE_RESTART */
    CancelOverride(): void;
    /** Forces this location to be the next respawn location
    *
    * https://library.sannybuilder.com/#/vc?q=OVERRIDE_NEXT_RESTART */
    OverrideNext(x: float, y: float, z: float, heading: float): void;
}
declare var Restart: Restart
/** Script Fires
 * 
 * https://library.sannybuilder.com/#/vc/classes/ScriptFire */
declare class ScriptFire {
    constructor(handle: number);
    /** Creates a script fire at the location
    *
    * https://library.sannybuilder.com/#/vc?q=START_SCRIPT_FIRE */
    static Create(x: float, y: float, z: float): ScriptFire;
    /** Creates a script fire on the vehicle
    *
    * https://library.sannybuilder.com/#/vc?q=START_CAR_FIRE */
    static CreateCarFire(vehicle: Car): ScriptFire;
    /** Creates a script fire on the character
    *
    * https://library.sannybuilder.com/#/vc?q=START_CHAR_FIRE */
    static CreateCharFire(char: Char): ScriptFire;
    /** Returns true if the script fire has been put out
    *
    * https://library.sannybuilder.com/#/vc?q=IS_SCRIPT_FIRE_EXTINGUISHED */
    isExtinguished(): boolean;
    /** Removes the script fire
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_SCRIPT_FIRE */
    remove(): void;
}
/** Script Objects
 * 
 * https://library.sannybuilder.com/#/vc/classes/ScriptObject */
declare class ScriptObject {
    constructor(handle: number);
    /** Creates an object at the specified location, with the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_OBJECT */
    static Create(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Creates an object without offset at the location
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_OBJECT_NO_OFFSET */
    static CreateNoOffset(modelId: int, x: float, y: float, z: float): ScriptObject;
    /** Returns true if the handle is a valid object handle
    *
    * https://library.sannybuilder.com/#/vc?q=DOES_OBJECT_EXIST */
    static DoesExist(handle: int): boolean;
    /** Adds the given vector to the object's velocity (0381)
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_TO_OBJECT_VELOCITY */
    addToVelocity(x: float, y: float, z: float): ScriptObject;
    /** Destroys the object, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=DELETE_OBJECT */
    delete(): void;
    /** Removes the object from the mission cleanup list, preventing it from being deleted when the mission ends
    *
    * https://library.sannybuilder.com/#/vc?q=DONT_REMOVE_OBJECT */
    dontRemove(): ScriptObject;
    /** Sets whether the object's position remains unchanged
    *
    * https://library.sannybuilder.com/#/vc?q=FREEZE_OBJECT_POSITION */
    freezePosition(state: boolean): ScriptObject;
    /** Returns the object's coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=GET_OBJECT_COORDINATES */
    getCoordinates(): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=GET_OBJECT_HEADING */
    getHeading(): float;
    /** Returns the object's coordinates with an offset
    *
    * https://library.sannybuilder.com/#/vc?q=GET_OFFSET_FROM_OBJECT_IN_WORLD_COORDS */
    getOffsetInWorldCoords(xOffset: float, yOffset: float, zOffset: float): {
        x: float;
        y: float;
        z: float;
    };
    /** Returns true if the object is damaged
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_OBJECT_BEEN_DAMAGED */
    hasBeenDamaged(): boolean;
    /** Returns true if the object has collided
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_OBJECT_COLLIDED_WITH_ANYTHING */
    hasCollidedWithAnything(): boolean;
    /** Returns true if object is in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_OBJECT_IN_AREA_2D */
    isInArea2D(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, drawSphere: boolean): boolean;
    /** Returns true if the object is in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_OBJECT_IN_AREA_3D */
    isInArea3D(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, drawSphere: boolean): boolean;
    /** Returns true if the object is in water
    *
    * https://library.sannybuilder.com/#/vc?q=IS_OBJECT_IN_WATER */
    isInWater(): boolean;
    /** Returns true if the object is visible
    *
    * https://library.sannybuilder.com/#/vc?q=IS_OBJECT_ON_SCREEN */
    isOnScreen(): boolean;
    /** Returns true if the object is near the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_OBJECT_2D */
    locate2D(x: float, y: float, xRadius: float, yRadius: float, drawSphere: boolean): boolean;
    /** Returns true if the object is near the specified point
    *
    * https://library.sannybuilder.com/#/vc?q=LOCATE_OBJECT_3D */
    locate3D(x: float, y: float, z: float, xRadius: float, yRadius: float, zRadius: float, drawSphere: boolean): boolean;
    /** Makes the object targettable (ability to be auto-aimed)
    *
    * https://library.sannybuilder.com/#/vc?q=MAKE_OBJECT_TARGETABLE */
    makeTargetable(): ScriptObject;
    /** Allows the object to be deleted by the game if necessary, and also removes it from the mission cleanup list, if applicable
    *
    * https://library.sannybuilder.com/#/vc?q=MARK_OBJECT_AS_NO_LONGER_NEEDED */
    markAsNoLongerNeeded(): ScriptObject;
    /** Places the object at an offset from the car
    *
    * https://library.sannybuilder.com/#/vc?q=PLACE_OBJECT_RELATIVE_TO_CAR */
    placeRelativeToCar(vehicle: Car, xOffset: float, yOffset: float, zOffset: float): ScriptObject;
    /** Rotates the object from one angle to another, optionally accounting for a collision during the rotation
    *
    * https://library.sannybuilder.com/#/vc?q=ROTATE_OBJECT */
    rotate(fromAngle: float, toAngle: float, collisionCheck: boolean): boolean;
    /** Sets the visibility of the object to the specified interior
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_AREA_VISIBLE */
    setAreaVisible(areaId: int): ScriptObject;
    /** Sets the object's collision detection
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_COLLISION */
    setCollision(state: boolean): ScriptObject;
    /** Puts the object at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_COORDINATES */
    setCoordinates(x: float, y: float, z: float): ScriptObject;
    /** Sets the specified object to always draw on top of other objects
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_DRAW_LAST */
    setDrawLast(state: boolean): ScriptObject;
    /** Defines whether or not the object is moveable
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_DYNAMIC */
    setDynamic(state: boolean): ScriptObject;
    /** Sets the object's heading (z-angle)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_HEADING */
    setHeading(heading: float): ScriptObject;
    /** Enables the use of collision checking for the object
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_RECORDS_COLLISIONS */
    setRecordsCollisions(state: boolean): ScriptObject;
    /** Sets the object rotation along X, Y and Z axis
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_ROTATION */
    setRotation(x: float, y: float, z: float): ScriptObject;
    /** Sets the object's velocity
    *
    * https://library.sannybuilder.com/#/vc?q=SET_OBJECT_VELOCITY */
    setVelocity(xSpeed: float, ySpeed: float, zSpeed: float): ScriptObject;
    /** Returns true if the object has finished moving
    *
    * https://library.sannybuilder.com/#/vc?q=SLIDE_OBJECT */
    slide(fromX: float, fromY: float, fromZ: float, xSpeed: float, ySpeed: float, zSpeed: float, collisionCheck: boolean): boolean;
    /** Makes the specified car have no collision with the specified object
    *
    * https://library.sannybuilder.com/#/vc?q=SORT_OUT_OBJECT_COLLISION_WITH_CAR */
    sortOutCollisionWithCar(handle: Car): ScriptObject;
}
/** Mission Shortcut Taxi
 * 
 * https://library.sannybuilder.com/#/vc/classes/Shortcut */
interface Shortcut {
    /** Clears any taxi shortcut that is set up by 0556 or 058E
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_TAXI_SHORTCUT */
    ClearTaxi(): void;
    /** Sets the taxi shortcut pick-up point for mission
    *
    * https://library.sannybuilder.com/#/vc?q=SET_SHORTCUT_DROPOFF_POINT_FOR_MISSION */
    SetDropoffPointForMission(x: float, y: float, z: float, angle: float): void;
    /** Sets the taxi shortcut pick-up point for mission
    *
    * https://library.sannybuilder.com/#/vc?q=SET_SHORTCUT_PICKUP_POINT */
    SetPickupPoint(x: float, y: float, z: float, angle: float): void;
    /** Sets up both the pick-up (058D) and drop-off (058E) points of the taxi shortcut
    *
    * https://library.sannybuilder.com/#/vc?q=SET_UP_TAXI_SHORTCUT */
    SetUpTaxi(pickUpX: float, pickUpY: float, pickUpZ: float, pickUpAngle: float, dropoffX: float, dropoffY: float, dropoffZ: float, dropoffAngle: float): void;
}
declare var Shortcut: Shortcut
/** Positionable Audio Effects
 * 
 * https://library.sannybuilder.com/#/vc/classes/Sound */
declare class Sound {
    constructor(handle: number);
    /** Creates a continuous sound at the location
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_CONTINUOUS_SOUND */
    static AddContinuous(x: float, y: float, z: float, soundId: int): Sound;
    /** Plays a sound with the specified ID at the location
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_ONE_OFF_SOUND */
    static AddOneOffSound(x: float, y: float, z: float, soundId: int): void;
    /** Stops the sound
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_SOUND */
    remove(): Sound;
}
/** Cylinder Markers
 * 
 * https://library.sannybuilder.com/#/vc/classes/Sphere */
declare class Sphere {
    constructor(handle: number);
    /** Creates a static sphere at the location, with the specified radius
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SPHERE */
    static Create(x: float, y: float, z: float, radius: float): Sphere;
    /** Displays a red cylinder sphere
    *
    * https://library.sannybuilder.com/#/vc?q=DRAW_SPHERE */
    static Draw(x: float, y: float, z: float, radius: float): void;
    /** Destroys a static sphere
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_SPHERE */
    remove(): void;
}
/** Game Statistics
 * 
 * https://library.sannybuilder.com/#/vc/classes/Stat */
interface Stat {
    /** Adds to the number of Bloodring kills stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_BLOOD_RING_KILLS */
    AddBloodRingKills(num: int): void;
    /** Adds to the "ice cream" sold stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_ICE_CREAMS_SOLD */
    AddIceCreamsSold(num: int): void;
    /** Adds to the fashion budget stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_MONEY_SPENT_ON_CLOTHES */
    AddMoneySpentOnClothes(amount: int): void;
    /** Adds to the property budget stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_MONEY_SPENT_ON_PROPERTY */
    AddMoneySpentOnProperty(amount: int): void;
    /** Adds to the weapon budget stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_MONEY_SPENT_ON_WEAPONS */
    AddMoneySpentOnWeapons(amount: int): void;
    /** Adds to the assassination contracts stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_NUMBER_OF_ASSASSINATIONS */
    AddNumberOfAssassinations(num: int): void;
    /** Adds to the pizzas delivered stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_PIZZAS_DELIVERED */
    AddPizzasDelivered(num: int): void;
    /** Adds to the stores knocked off stat
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_STORES_KNOCKED_OFF */
    AddStoresKnockedOff(num: int): void;
    /** Gets the progress of completion as a percentage
    *
    * https://library.sannybuilder.com/#/vc?q=GET_PROGRESS_PERCENTAGE */
    GetProgressPercentage(): float;
    /** Increases the progress made stat by the specified amount
    *
    * https://library.sannybuilder.com/#/vc?q=PLAYER_MADE_PROGRESS */
    PlayerMadeProgress(progress: int): void;
    /** Saves the highest paramedic mission level stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_AMBULANCE_LEVEL */
    RegisterAmbulanceLevel(highestLevel: int): void;
    /** Updates the race best position
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_BEST_POSITION */
    RegisterBestPosition(statId: int, position: int): void;
    /** Increments the number of criminals killed on Vigilante mission stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_CRIMINAL_CAUGHT */
    RegisterCriminalCaught(): void;
    /** Updates the stat if the value is lower than the current stat value
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_FASTEST_TIME */
    RegisterFastestTime(statId: int, value: int): void;
    /** Increments the number of fires extinguished stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_FIRE_EXTINGUISHED */
    RegisterFireExtinguished(): void;
    /** Saves the highest firefighter level stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_FIRE_LEVEL */
    RegisterFireLevel(highestLevel: int): void;
    /** Updates the stat if the value is higher than the current stat value
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_HIGHEST_SCORE */
    RegisterHighestScore(statId: int, value: int): void;
    /** Saves the highest insane jump distance stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_JUMP_DISTANCE */
    RegisterJumpDistance(distance: float): void;
    /** Saves the highest insane jump flips stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_JUMP_FLIPS */
    RegisterJumpFlips(flips: int): void;
    /** Saves the highest insane jump height stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_JUMP_HEIGHT */
    RegisterJumpHeight(height: float): void;
    /** Saves the highest insane jump rotation stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_JUMP_SPINS */
    RegisterJumpSpins(spins: int): void;
    /** Saves the best insane stunt stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_JUMP_STUNT */
    RegisterJumpStunt(stunt: int): void;
    /** Increments the number of people saved in an ambulance stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_LIFE_SAVED */
    RegisterLifeSaved(): void;
    /** Increments the number of mission attempts stat by one
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_MISSION_GIVEN */
    RegisterMissionGiven(): void;
    /** Sets the GXT of the last mission passed
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_MISSION_PASSED */
    RegisterMissionPassed(key: string): void;
    /** Adds the value to the cash made in taxi stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_MONEY_MADE_TAXI */
    RegisterMoneyMadeTaxi(cashAmount: int): void;
    /** Sets the latest odd job mission passed
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_ODDJOB_MISSION_PASSED */
    RegisterOddjobMissionPassed(): void;
    /** Increments the number of passengers dropped off stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_PASSENGER_DROPPED_OFF_TAXI */
    RegisterPassengerDroppedOffTaxi(): void;
    /** Increments the completed number of unique stunt jumps stat by 1
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_UNIQUE_JUMP_FOUND */
    RegisterUniqueJumpFound(): void;
    /** Saves the highest vigilante level stat
    *
    * https://library.sannybuilder.com/#/vc?q=REGISTER_VIGILANTE_LEVEL */
    RegisterVigilanteLevel(highestLevel: int): void;
    /** Sets the longest time in Bloodring stat
    *
    * https://library.sannybuilder.com/#/vc?q=SET_LONGEST_TIME_IN_BLOOD_RING */
    SetLongestTimeInBloodRing(timeInSec: int): void;
    /** Sets the maximum progress the player can reach
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PROGRESS_TOTAL */
    SetProgressTotal(maxProgress: int): void;
    /** Adds the property to the property owned stat
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PROPERTY_AS_OWNED */
    SetPropertyAsOwned(propertyIndex: int): void;
    /** Sets the total number of rampages passed stat
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TOTAL_NUMBER_OF_KILL_FRENZIES */
    SetTotalNumberOfKillFrenzies(total: int): void;
    /** Sets the total number of missions that can be completed
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TOTAL_NUMBER_OF_MISSIONS */
    SetTotalNumberOfMissions(numMissions: int): void;
    /** Sets the total number of unique stunt jumps stat
    *
    * https://library.sannybuilder.com/#/vc?q=SET_UNIQUE_JUMPS_TOTAL */
    SetUniqueJumpsTotal(total: int): void;
}
declare var Stat: Stat
/** Loading Game Assets
 * 
 * https://library.sannybuilder.com/#/vc/classes/Streaming */
interface Streaming {
    /** Returns true if the specified IFP file is loaded
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_ANIMATION_LOADED */
    HasAnimationLoaded(animationFile: string): boolean;
    /** Returns true if the model is available for creation
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_MODEL_LOADED */
    HasModelLoaded(modelId: int): boolean;
    /** Returns true if the special character's model (023C) is available for creation
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_SPECIAL_CHARACTER_LOADED */
    HasSpecialCharacterLoaded(slotId: int): boolean;
    /** Returns true if the specified model exists in the loaded 
    *
    * https://library.sannybuilder.com/#/vc?q=IS_MODEL_AVAILABLE */
    IsModelAvailable(modelId: int): boolean;
    /** Loads any requested models (0247 or 0353) synchronously
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_ALL_MODELS_NOW */
    LoadAllModelsNow(): void;
    /** Starts loading a specific location, just like if the player was there, removing LOD textures
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_SCENE */
    LoadScene(x: float, y: float, z: float): void;
    /** Requests a special character's model to be loaded into the specified slot
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_SPECIAL_CHARACTER */
    LoadSpecialCharacter(slotId: int, modelName: string): void;
    /** Loads a model with the given name as a cutscene model id (GTA III: 185-189, VC: 295-299)
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_SPECIAL_MODEL */
    LoadSpecialModel(cutsceneModelId: int, modelName: string): void;
    /** Releases the specified model, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=MARK_MODEL_AS_NO_LONGER_NEEDED */
    MarkModelAsNoLongerNeeded(modelId: int): void;
    /** Releases the specified IFP file, freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_ANIMATION */
    RemoveAnimation(animationFile: string): void;
    /** Loads the specified IFP File
    *
    * https://library.sannybuilder.com/#/vc?q=REQUEST_ANIMATION */
    RequestAnimation(animationFile: string): void;
    /** Reloads the area at the specified coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=REQUEST_COLLISION */
    RequestCollision(x: float, y: float): void;
    /** Requests a new model to load
    *
    * https://library.sannybuilder.com/#/vc?q=REQUEST_MODEL */
    RequestModel(modelId: int): void;
    /** Sets the visibility of an interior area
    *
    * https://library.sannybuilder.com/#/vc?q=SET_AREA_VISIBLE */
    SetAreaVisible(areaId: int): void;
    /** Sets the streaming of additional models like peds, cars, and maps
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_STREAMING */
    Switch(state: boolean): void;
    /** Releases the special character (023C), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=UNLOAD_SPECIAL_CHARACTER */
    UnloadSpecialCharacter(slotId: int): void;
}
declare var Streaming: Streaming
/** Stuck Cars Check
 * 
 * https://library.sannybuilder.com/#/vc/classes/StuckCarCheck */
interface StuckCarCheck {
    /** Adds the vehicle to the stuck cars array
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_STUCK_CAR_CHECK */
    Add(vehicle: Car, speed: float, duration: int): void;
    /** Returns true if the car is stuck
    *
    * https://library.sannybuilder.com/#/vc?q=IS_CAR_STUCK */
    IsCarStuck(vehicle: Car): boolean;
    /** Removes the vehicle from the stuck cars array
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_STUCK_CAR_CHECK */
    Remove(vehicle: Car): void;
}
declare var StuckCarCheck: StuckCarCheck
/** Text Messages
 * 
 * https://library.sannybuilder.com/#/vc/classes/Text */
interface Text {
    /** Removes the text box from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_HELP */
    ClearHelp(): void;
    /** Clears all priority text and some styles of big texts
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_PRINTS */
    ClearPrints(): void;
    /** Clears small messages from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_SMALL_PRINTS */
    ClearSmallPrints(): void;
    /** Removes the styled text from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_THIS_BIG_PRINT */
    ClearThisBigPrint(key: string): void;
    /** Removes the priority text from the screen
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_THIS_PRINT */
    ClearThisPrint(key: string): void;
    /** Draws text at the specified on-screen position
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_TEXT */
    Display(offsetLeft: float, offsetTop: float, key: string): void;
    /** Draws text with two numbers
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_TEXT_WITH_2_NUMBERS */
    DisplayWith2Numbers(offsetLeft: float, offsetTop: float, key: string, num1: int, num2: int): void;
    /** Draws text with one number
    *
    * https://library.sannybuilder.com/#/vc?q=DISPLAY_TEXT_WITH_NUMBER */
    DisplayWithNumber(offsetLeft: float, offsetTop: float, key: string, num: int): void;
    /** Makes the game use GXT Entries from the specified GXT Table
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_MISSION_TEXT */
    LoadMissionText(tableName: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT */
    Print(key: string, time: int, flag: int): void;
    /** Displays a styled message for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_BIG */
    PrintBig(key: string, time: int, style: int): void;
    /** Displays a low-priority styled message for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_BIG_Q */
    PrintBigQ(key: string, duration: int, style: int): void;
    /** Displays a black text box for a few seconds
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_HELP */
    PrintHelp(key: string): void;
    /** Shows a text box which stays on screen until it is removed by another command
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_HELP_FOREVER */
    PrintHelpForever(key: string): void;
    /** Displays a message positioned on the bottom of the screen for the specified time
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_NOW */
    PrintNow(key: string, time: int, flag: int): void;
    /** Displays a styled message in which the first string token ~a~ is substituted with the specified text
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_STRING_IN_STRING_NOW */
    PrintStringInStringNow(templateKey: string, replacementKey: string, duration: int, style: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_2_NUMBERS_BIG */
    PrintWith2NumbersBig(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first two ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_2_NUMBERS_NOW */
    PrintWith2NumbersNow(key: string, num1: int, num2: int, duration: int, style: int): void;
    /** Displays a styled message in which the first three ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_3_NUMBERS */
    PrintWith3Numbers(key: string, num1: int, num2: int, num3: int, duration: int, style: int): void;
    /** Displays a styled message in which the first four ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_4_NUMBERS */
    PrintWith4Numbers(key: string, num1: int, num2: int, num3: int, num4: int, duration: int, style: int): void;
    /** Displays a styled message in which the first six ~1~ tokens are substituted with the specified numbers
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_6_NUMBERS */
    PrintWith6Numbers(key: string, num1: int, num2: int, num3: int, num4: int, num5: int, num6: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_NUMBER */
    PrintWithNumber(key: string, num: int, duration: int, flag: int): void;
    /** Displays a styled message in which the first string token~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_NUMBER_BIG */
    PrintWithNumberBig(key: string, num: int, duration: int, style: int): void;
    /** Displays a styled message in which the first string token ~1~ is substituted with the specified number
    *
    * https://library.sannybuilder.com/#/vc?q=PRINT_WITH_NUMBER_NOW */
    PrintWithNumberNow(key: string, num: int, duration: int, flag: int): void;
    /** Gives the text a background (0346)
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_BACKGROUND */
    SetBackground(state: boolean): void;
    /** Centers the text
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_CENTRE */
    SetCenter(state: boolean): void;
    /** Sets the color of the text letters
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_COLOUR */
    SetColor(red: int, green: int, blue: int, alpha: int): void;
    /** Sets the text to be drawn justified, which means the text will wrap in order to fill an even rectangle of space
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_JUSTIFY */
    SetJustify(state: boolean): void;
    /** Makes the text size proportionate
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_PROPORTIONAL */
    SetProportional(state: boolean): void;
    /** Sets the text draw to be aligned to the right
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_RIGHT_JUSTIFY */
    SetRightJustify(state: boolean): void;
    /** Scales the width and height of the text letters
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_SCALE */
    SetScale(widthScale: float, heightScale: float): void;
    /** Sets the line width of the text
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TEXT_WRAPX */
    SetWrapX(width: float): void;
    /** Enables text and texture drawing
    *
    * https://library.sannybuilder.com/#/vc?q=USE_TEXT_COMMANDS */
    UseCommands(state: boolean): void;
}
declare var Text: Text
/** Texture Dictionaries
 * 
 * https://library.sannybuilder.com/#/vc/classes/Txd */
interface Txd {
    /** Loads the texture dictionary for use in drawing sprites (038D) on the screen
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_TEXTURE_DICTIONARY */
    LoadDictionary(name: string): void;
    /** Loads a sprite from the most recently loaded texture dictionary (0390)
    *
    * https://library.sannybuilder.com/#/vc?q=LOAD_SPRITE */
    LoadSprite(memorySlot: int, spriteName: string): void;
    /** Unloads all currently loaded textures (038F), as well as texture dictionaries (0390), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_TEXTURE_DICTIONARY */
    Remove(): void;
}
declare var Txd: Txd
/** Weather Control
 * 
 * https://library.sannybuilder.com/#/vc/classes/Weather */
interface Weather {
    /** Forces the game weather to the specified type
    *
    * https://library.sannybuilder.com/#/vc?q=FORCE_WEATHER */
    Force(type: int): void;
    /** Forces the upcoming weather to the specified type
    *
    * https://library.sannybuilder.com/#/vc?q=FORCE_WEATHER_NOW */
    ForceNow(type: int): void;
    /** Allows the game to continue its usual weather pattern after using 01B5
    *
    * https://library.sannybuilder.com/#/vc?q=RELEASE_WEATHER */
    Release(): void;
    /** Allows hurricane weather
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ALLOW_HURRICANES */
    SetAllowHurricanes(state: boolean): void;
}
declare var Weather: Weather
/** Traffic, Population and other Physical Entities
 * 
 * https://library.sannybuilder.com/#/vc/classes/World */
interface World {
    /** Returns the handle of a random car with the specified model in the specified 2D area, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/vc?q=GET_RANDOM_CAR_OF_TYPE_IN_AREA */
    GetRandomCarOfTypeInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Returns the handle of the next ped in the given area who has not bought "ice cream" yet, or -1 otherwise
    *
    * https://library.sannybuilder.com/#/vc?q=GET_RANDOM_ICE_CREAM_CUSTOMER_IN_AREA */
    GetRandomIceCreamCustomerInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, allowCivilian: int, allowGangMember: int, allowCriminal: int): Char;
    /** Sets visibility of secondary rubbish (03AD)
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_PORN_LEAFLET_TO_RUBBISH */
    AddPornLeafletToRubbish(state: boolean): void;
    /** Creates a trigger zone for police to appear during chases
    *
    * https://library.sannybuilder.com/#/vc?q=ADD_SET_PIECE */
    AddSetPiece(type: int, fromX: float, fromY: float, toX: float, toY: float, spawnPoliceAAtX: float, spawnPoliceAAtY: float, headedTowardsAAtX: float, headedTowardsAAtY: float, spawnPoliceBAtX: float, spawnPoliceBAtY: float, headedTowardsBAtX: float, headedTowardsBAtY: float): void;
    /** Returns true if there is a pedestrian of the given model in the specified area around the player
    *
    * https://library.sannybuilder.com/#/vc?q=CHECK_FOR_PED_MODEL_AROUND_PLAYER */
    CheckForPedModelAroundPlayer(player: Player, offsetX: float, offsetY: float, offsetZ: float, modelId1: int, modelId2: int): boolean;
    /** Removes references to all created roadblocks (04C0), freeing game memory
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_ALL_SCRIPT_ROADBLOCKS */
    ClearAllScriptRoadblocks(): void;
    /** Clears the area, removing all vehicles and pedestrians
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_AREA */
    ClearArea(x: float, y: float, z: float, radius: float, clearParticles: boolean): void;
    /** Clears all cars in the specified 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_AREA_OF_CARS */
    ClearAreaOfCars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears all pedestrians from the given area
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_AREA_OF_CHARS */
    ClearAreaOfChars(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Clears the extra color of the sky
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_EXTRA_COLOURS */
    ClearExtraColors(withFade: boolean): void;
    /** Starts spawning random cars at the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_RANDOM_CAR_FOR_CAR_PARK */
    CreateRandomCarForCarPark(x: float, y: float, z: float, heading: float): void;
    /** Creates a roadblock in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_SCRIPT_ROADBLOCK */
    CreateScriptRoadblock(leftBottomX: float, leftBottomY: float, leftBottomZ: float, topRightX: float, topRightY: float, topRightZ: float): void;
    /** Creates a SWAT character coming down from a rope at the coordinates
    *
    * https://library.sannybuilder.com/#/vc?q=CREATE_SWAT_ROPE */
    CreateSwatRope(x: float, y: float, z: float): void;
    /** Forces the game to spawn only pedestrians of the given type
    *
    * https://library.sannybuilder.com/#/vc?q=FORCE_RANDOM_PED_TYPE */
    ForceRandomPedType(pedType: int): void;
    /** Returns appropriate coordinates for creating a pickup by a dead character
    *
    * https://library.sannybuilder.com/#/vc?q=GET_DEAD_CHAR_PICKUP_COORDS */
    GetDeadCharPickupCoords(char: Char): {
        x: float;
        y: float;
        z: float;
    };
    /** Stores the ground position at the location
    *
    * https://library.sannybuilder.com/#/vc?q=GET_GROUND_Z_FOR_3D_COORD */
    GetGroundZFor3DCoord(x: float, y: float, z: float): float;
    /** Loops through the pool of vehicles to retrieve one that matches the specified model in the specified 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=GET_RANDOM_CAR_OF_TYPE_IN_AREA_NO_SAVE */
    GetRandomCarOfTypeInAreaNoSave(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, modelId: int): Car;
    /** Gets a random law enforcement ped of any of the specified types in the 2D area
    *
    * https://library.sannybuilder.com/#/vc?q=GET_RANDOM_COP_IN_AREA */
    GetRandomCopInArea(leftBottomX: float, leftBottomY: float, rightTopX: float, rightTopY: float, cop: boolean, swat: boolean, fbi: boolean, army: boolean, vice: boolean): Char;
    /** Checks if glass has been shattered near the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=HAS_GLASS_BEEN_SHATTERED_NEARBY */
    HasGlassBeenShatteredNearby(x: float, y: float, z: float): boolean;
    /** Returns true if the pickup at the specified coordinates is available to be picked up
    *
    * https://library.sannybuilder.com/#/vc?q=IS_ANY_PICKUP_AT_COORDS */
    IsAnyPickupAtCoords(x: float, y: float, z: float): boolean;
    /** Returns true if there is anything with the specified properties within the 3D area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_AREA_OCCUPIED */
    IsAreaOccupied(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float, solid: boolean, car: boolean, char: boolean, object: boolean, particle: boolean): boolean;
    /** Returns true if there is a vehicle in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_POINT_OBSCURED_BY_A_MISSION_ENTITY */
    IsPointObscuredByAMissionEntity(x: float, y: float, z: float, radiusX: float, radiusY: float, radiusZ: float): boolean;
    /** Returns true if a sniper bullet is in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=IS_SNIPER_BULLET_IN_AREA */
    IsSniperBulletInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): boolean;
    /** Removes all script fires (02CF)
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_ALL_SCRIPT_FIRES */
    RemoveAllScriptFires(): void;
    /** Stops processing of everything in the world to free up the game memory
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_EVERYTHING_FOR_HUGE_CUTSCENE */
    RemoveEverythingForHugeCutscene(): void;
    /** Removes all particle effects (02A2 or 039D) in the specified area
    *
    * https://library.sannybuilder.com/#/vc?q=REMOVE_PARTICLE_EFFECTS_IN_AREA */
    RemoveParticleEffectsInArea(leftBottomX: float, leftBottomY: float, leftBottomZ: float, rightTopX: float, rightTopY: float, rightTopZ: float): void;
    /** Sets the quantity of traffic that will spawn in the game
    *
    * https://library.sannybuilder.com/#/vc?q=SET_CAR_DENSITY_MULTIPLIER */
    SetCarDensityMultiplier(multiplier: float): void;
    /** Sets the extra color of the sky
    *
    * https://library.sannybuilder.com/#/vc?q=SET_EXTRA_COLOURS */
    SetExtraColors(color: int, fade: boolean): void;
    /** Sets the quantity of pedestrians to spawn in the game
    *
    * https://library.sannybuilder.com/#/vc?q=SET_PED_DENSITY_MULTIPLIER */
    SetPedDensityMultiplier(multiplier: float): void;
    /** Sets the scrollbar message at Hyman Memorial Stadium
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TONIGHTS_EVENT */
    SetTonightsEvent(scrollbarMessage: int): void;
    /** Sets the visibility of the object closest to the specified coordinates, matching the specified model
    *
    * https://library.sannybuilder.com/#/vc?q=SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE */
    SetVisibilityOfClosestObjectOfType(x: float, y: float, z: float, radius: float, modelId: int, state: boolean): void;
    /** Swaps a map model with another map model nearest to the center of the search area
    *
    * https://library.sannybuilder.com/#/vc?q=SWAP_NEAREST_BUILDING_MODEL */
    SwapNearestBuildingModel(x: float, y: float, z: float, radius: float, fromModelId: int, toModelId: int): void;
    /** Sets whether the game should render the world or only the cutscene objects
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_WORLD_PROCESSING */
    SwitchProcessing(state: boolean): void;
    /** Toggles garbage on the streets
    *
    * https://library.sannybuilder.com/#/vc?q=SWITCH_RUBBISH */
    SwitchRubbish(state: boolean): void;
    /** Unlocks all car doors in the specified rectangular area
    *
    * https://library.sannybuilder.com/#/vc?q=UNLOCK_ALL_CAR_DOORS_IN_AREA */
    UnlockAllCarDoorsInArea(leftBottomX: float, leftBottomY: float, topRightX: float, topRightY: float): void;
}
declare var World: World
/** Game Map Areas Configuration
 * 
 * https://library.sannybuilder.com/#/vc/classes/Zone */
interface Zone {
    /** Gets a random character in the specified zone whose pedtype matches the specified values
    *
    * https://library.sannybuilder.com/#/vc?q=GET_RANDOM_CHAR_IN_ZONE */
    GetRandomChar(zone: string, civilian: boolean, gang: boolean, criminalOrProstitute: boolean): Char;
    /** Sets the zone's peds, gangs, and cops spawn density in car
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ZONE_CAR_INFO */
    SetCarInfo(zone: string, dayOrNight: int, density: int, cuban: int, haitian: int, street: int, diaz: int, security: int, biker: int, player: int, golfer: int, gang9: int, cop: int): void;
    /** Sets the traffic density of cars and boats in the zone
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ZONE_CIVILIAN_CAR_INFO */
    SetCivilianCarInfo(zone: string, dayOrNight: int, normal: int, poor: int, rich: int, exec: int, worker: int, big: int, taxi: int, moped: int, motorbike: int, leisureBoat: int, workerBoat: int): void;
    /** Assigns one of the ped groups defined in pedgrp.dat to the map zone
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ZONE_GROUP */
    SetGroup(zone: string, dayOrNight: int, pedGroup: int): void;
    /** Sets the zone's peds, gangs, and cops spawn density on foot
    *
    * https://library.sannybuilder.com/#/vc?q=SET_ZONE_PED_INFO */
    SetPedInfo(zone: string, dayOrNight: int, density: int, cuban: int, haitian: int, street: int, diaz: int, security: int, biker: int, player: int, golfer: int, gang9: int, cop: int): void;
}
declare var Zone: Zone
/** Boats
 * 
 * https://library.sannybuilder.com/#/vc/classes/Boat */
declare class Boat extends Car {
    constructor(handle: number);
    /** Makes the boat stay motionless in the water
    *
    * https://library.sannybuilder.com/#/vc?q=ANCHOR_BOAT */
    anchor(state: boolean): Boat;
    /** Makes the boat sail to the location
    *
    * https://library.sannybuilder.com/#/vc?q=BOAT_GOTO_COORDS */
    goto(x: float, y: float, z: float): Boat;
    /** Sets the boat's max speed
    *
    * https://library.sannybuilder.com/#/vc?q=SET_BOAT_CRUISE_SPEED */
    setCruiseSpeed(maxSpeed: float): Boat;
    /** Turns off the car's engine
    *
    * https://library.sannybuilder.com/#/vc?q=BOAT_STOP */
    stop(): Boat;
}
/** Choppers
 * 
 * https://library.sannybuilder.com/#/vc/classes/Heli */
declare class Heli extends Car {
    constructor(handle: number);
    /** Resets the heli rotation set with 04D0
    *
    * https://library.sannybuilder.com/#/vc?q=CLEAR_HELI_ORIENTATION */
    clearOrientation(): Heli;
    /** Makes the Hunter helicopter fire cannon gun
    *
    * https://library.sannybuilder.com/#/vc?q=FIRE_HUNTER_GUN */
    fireHunterGun(): Heli;
    /** Makes the helicopter fly to the specified location, keeping a specific Z height/altitude
    *
    * https://library.sannybuilder.com/#/vc?q=HELI_GOTO_COORDS */
    gotoCoords(x: float, y: float, z: float, speed: int): Heli;
    /** Makes helicopter simulate crash landing, exploding on the way if high up
    *
    * https://library.sannybuilder.com/#/vc?q=MAKE_HELI_COME_CRASHING_DOWN */
    makeComeCrashingDown(): Heli;
    /** Forces the heli rotation relative to the north
    *
    * https://library.sannybuilder.com/#/vc?q=SET_HELI_ORIENTATION */
    setOrientation(angle: float): Heli;
    /** Limits the amount a helicopter can tilt
    *
    * https://library.sannybuilder.com/#/vc?q=SET_HELI_STABILISER */
    setStabiliser(state: boolean): Heli;
}
/** Planes
 * 
 * https://library.sannybuilder.com/#/vc/classes/Plane */
declare class Plane extends Car {
    constructor(handle: number);
    /** Makes the AI fly the plane to the specified location
    *
    * https://library.sannybuilder.com/#/vc?q=PLANE_GOTO_COORDS */
    gotoCoords(x: float, y: float, z: float, speed: int): Plane;
}
/** Tanks
 * 
 * https://library.sannybuilder.com/#/vc/classes/Tank */
declare class Tank extends Car {
    constructor(handle: number);
    /** Sets the tank's ability to detonate vehicles on contact
    *
    * https://library.sannybuilder.com/#/vc?q=SET_TANK_DETONATE_CARS */
    setDetonateCars(state: boolean): Tank;
}
