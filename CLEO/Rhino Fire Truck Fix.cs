�RHINO   �  V M ����  � �  � �  � M �����  X   �  K� M ���� �  � �  � M ����� ��VM ����Y -���= �   �  K� M ���� �  � �  � M [���� ��VM [���X  �  ����� Z ����VAR '   ARENA_DOOR_1    ARENA_DOOR_2    CAR_SHOWROOM_ASSET �  CURRENT_TIME_IN_MS �  CUT_SCENE_TIME |   DEFAULT_WAIT_TIME    FILM_STUDIO_ASSET �  FILM_STUDIO_BACK_GATE_CLOSED   FILM_STUDIO_BACK_GATE_OPEN   FILM_STUDIO_FRONT_GATE_CLOSED   FILM_STUDIO_FRONT_GATE_OPEN   ICE_CREAM_FACTORY_ASSET �  LANCE_VANCE �   ONMISSION 9  PASSED_ASS1_RUB_OUT �   PASSED_COK1_THE_CHASE �   PASSED_COK2_PHNOM_PENH_86 �   PASSED_COK3_THE_FASTEST_BOAT �   PASSED_COK4_SUPPLY_AND_DEMAND �   PASSED_COL1_TREACHEROUS_SWINE �   PASSED_COL2_MALL_SHOOTOUT �   PASSED_COL3_GUARDIAN_ANGELS �   PASSED_COL4_SIR_YES_SIR �   PASSED_COL5_ALL_HANDS_ON_DECK �   PASSED_HAT1_JUJU_SCRAMBLE   PASSED_HAT2_BOMBS_AWAY   PASSED_HAT3_DIRTY_LICKINS   PASSED_KENT1_DEATH_ROW �   PASSED_LAW1_THE_PARTY �   PASSED_LAW2_BACK_ALLEY_BRAWL �   PASSED_LAW3_JURY_FURY �   PASSED_LAW4_RIOT �   PASSED_ROCK1_LOVE_JUICE    PASSED_ROCK2_PSYCHO_KILLER !  PASSED_ROCK3_PUBLICITY_TOUR "  PASSED_TEX1_FOUR_IRON �   PLAYER_ACTOR    PLAYER_CHAR    PRINT_WORKS_ASSET �  FLAG   SRC H  {$CLEO .cs} // SCRIPT BY FELIZPE 

//-------------MAIN---------------
thread 'RHINO' 

:RHINO_1
wait 0
if 
Player.Defined($PLAYER_CHAR)
else_jump @RHINO_1

:RHINO_10
wait 0 
if or 
00DE:   player $PLAYER_CHAR driving_vehicle_type #RHINO 
00DE:   player $PLAYER_CHAR driving_vehicle_type #FIRETRUK  
else_jump @RHINO_10 
03C1: 1@ = player $PLAYER_CHAR car_no_save
Camera.OnVehicle(1@, 3, 2)

:RHINO_20
wait 0
if
844B:   not actor $PLAYER_ACTOR on_foot 
else_jump @RHINO_30 
if or
00DE:   player $PLAYER_CHAR driving_vehicle_type #RHINO 
00DE:   player $PLAYER_CHAR driving_vehicle_type #FIRETRUK  
else_jump @RHINO_20 
if or 
05EE:   key_pressed 2 // Virtual "Right Mouse Button" Key
05EE:   key_pressed 86 // Virtual "V" Key
else_jump @RHINO_20 
Camera.OnPed($PLAYER_ACTOR, 45, 2)
041D: set_camera_near_clip 0.1
wait 250

:RHINO_25
wait 0
if
844B:   not actor $PLAYER_ACTOR on_foot 
else_jump @RHINO_30 
if or
00DE:   player $PLAYER_CHAR driving_vehicle_type #RHINO 
00DE:   player $PLAYER_CHAR driving_vehicle_type #FIRETRUK  
else_jump @RHINO_25 
if or 
05EE:   key_pressed 2 // Virtual "Right Mouse Button" Key
05EE:   key_pressed 86 // Virtual "V" Key
else_jump @RHINO_25 
Camera.OnVehicle(1@, 3, 2)
wait 250
jump @RHINO_10 

:RHINO_30
Car.RemoveReferences(1@)
Camera.Restore
jump @RHINO_10 
  __SBFTR 