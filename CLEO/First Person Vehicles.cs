�FIRSTP    �  V M ����  � � �  ހ � ހ � ހ � �M ����Y -���= �   �  �� M {���Z ����  �  � M (���� � �  ހ � ހ � ހ � �M {���Z �  ����Z ����VAR '   ARENA_DOOR_1    ARENA_DOOR_2    CAR_SHOWROOM_ASSET �  CURRENT_TIME_IN_MS �  CUT_SCENE_TIME |   DEFAULT_WAIT_TIME    FILM_STUDIO_ASSET �  FILM_STUDIO_BACK_GATE_CLOSED   FILM_STUDIO_BACK_GATE_OPEN   FILM_STUDIO_FRONT_GATE_CLOSED   FILM_STUDIO_FRONT_GATE_OPEN   ICE_CREAM_FACTORY_ASSET �  LANCE_VANCE �   ONMISSION 9  PASSED_ASS1_RUB_OUT �   PASSED_COK1_THE_CHASE �   PASSED_COK2_PHNOM_PENH_86 �   PASSED_COK3_THE_FASTEST_BOAT �   PASSED_COK4_SUPPLY_AND_DEMAND �   PASSED_COL1_TREACHEROUS_SWINE �   PASSED_COL2_MALL_SHOOTOUT �   PASSED_COL3_GUARDIAN_ANGELS �   PASSED_COL4_SIR_YES_SIR �   PASSED_COL5_ALL_HANDS_ON_DECK �   PASSED_HAT1_JUJU_SCRAMBLE   PASSED_HAT2_BOMBS_AWAY   PASSED_HAT3_DIRTY_LICKINS   PASSED_KENT1_DEATH_ROW �   PASSED_LAW1_THE_PARTY �   PASSED_LAW2_BACK_ALLEY_BRAWL �   PASSED_LAW3_JURY_FURY �   PASSED_LAW4_RIOT �   PASSED_ROCK1_LOVE_JUICE    PASSED_ROCK2_PSYCHO_KILLER !  PASSED_ROCK3_PUBLICITY_TOUR "  PASSED_TEX1_FOUR_IRON �   PLAYER_ACTOR    PLAYER_CHAR    PRINT_WORKS_ASSET �  FLAG   SRC �  {$CLEO .cs} // SCRIPT BY FELIZPE 

//-------------MAIN---------------
thread 'FIRSTP' 

:FIRSTP_1
wait 0
if 
Player.Defined($PLAYER_CHAR)
else_jump @FIRSTP_1

:FIRSTP_10
wait 0 
if and
Player.Controllable($PLAYER_CHAR)
00E0:   player $PLAYER_CHAR driving 
80DE:   not player $PLAYER_CHAR driving_vehicle_type #TOPFUN 
80DE:   not player $PLAYER_CHAR driving_vehicle_type #RHINO
80DE:   not player $PLAYER_CHAR driving_vehicle_type #FIRETRUK  
05EE:   key_pressed 2 // Virtual "Right Mouse Button" Key
else_jump @FIRSTP_10 
Camera.OnPed($PLAYER_ACTOR, 45, 2)
041D: set_camera_near_clip 0.1
wait 250

:FIRSTP_15
wait 0
if 
80E0:   not player $PLAYER_CHAR driving 
else_jump @FIRSTP_20
Camera.Restore
jump @FIRSTP_10

:FIRSTP_20
wait 0
if
Player.Controllable($PLAYER_CHAR)
else_jump @FIRSTP_25
if and 
Player.Controllable($PLAYER_CHAR)
00E0:   player $PLAYER_CHAR driving 
80DE:   not player $PLAYER_CHAR driving_vehicle_type #TOPFUN 
80DE:   not player $PLAYER_CHAR driving_vehicle_type #RHINO
80DE:   not player $PLAYER_CHAR driving_vehicle_type #FIRETRUK  
05EE:   key_pressed 2 // Virtual "Right Mouse Button" Key
else_jump @FIRSTP_20 
Camera.Restore
wait 250
jump @FIRSTP_10

:FIRSTP_25
Camera.Restore
jump @FIRSTP_10 �   __SBFTR 