�SWIM      �  V M �����    � � �� �M ����  � �  � � � � � � � M p��� )���  � � � 	� 
� � � � � M ����Y +���= �   �  �M ���Z �  ����VAR '   ARENA_DOOR_1    ARENA_DOOR_2    CAR_SHOWROOM_ASSET �  CURRENT_TIME_IN_MS �  CUT_SCENE_TIME |   DEFAULT_WAIT_TIME    FILM_STUDIO_ASSET �  FILM_STUDIO_BACK_GATE_CLOSED   FILM_STUDIO_BACK_GATE_OPEN   FILM_STUDIO_FRONT_GATE_CLOSED   FILM_STUDIO_FRONT_GATE_OPEN   ICE_CREAM_FACTORY_ASSET �  LANCE_VANCE �   ONMISSION 9  PASSED_ASS1_RUB_OUT �   PASSED_COK1_THE_CHASE �   PASSED_COK2_PHNOM_PENH_86 �   PASSED_COK3_THE_FASTEST_BOAT �   PASSED_COK4_SUPPLY_AND_DEMAND �   PASSED_COL1_TREACHEROUS_SWINE �   PASSED_COL2_MALL_SHOOTOUT �   PASSED_COL3_GUARDIAN_ANGELS �   PASSED_COL4_SIR_YES_SIR �   PASSED_COL5_ALL_HANDS_ON_DECK �   PASSED_HAT1_JUJU_SCRAMBLE   PASSED_HAT2_BOMBS_AWAY   PASSED_HAT3_DIRTY_LICKINS   PASSED_KENT1_DEATH_ROW �   PASSED_LAW1_THE_PARTY �   PASSED_LAW2_BACK_ALLEY_BRAWL �   PASSED_LAW3_JURY_FURY �   PASSED_LAW4_RIOT �   PASSED_ROCK1_LOVE_JUICE    PASSED_ROCK2_PSYCHO_KILLER !  PASSED_ROCK3_PUBLICITY_TOUR "  PASSED_TEX1_FOUR_IRON �   PLAYER_ACTOR    PLAYER_CHAR    PRINT_WORKS_ASSET �  FLAG   SRC �  {$CLEO .cs} // SCRIPT BY FELIZPE 

//-------------MAIN---------------
thread 'SWIM' 

:SWIM_1
wait 0
if 
Player.Defined($PLAYER_CHAR)
else_jump @SWIM_1
1@ = Actor.EmulateFromPlayer(0)

:SWIM_2
wait 0
if and
04AD:   actor 1@ in_water 
80E0:   not player $PLAYER_CHAR driving
05EE:   key_pressed 2 // Virtual "Right Mouse Button" Key
else_jump @SWIM_2

:SWIM_3
wait 0 
if or
02D7:   player $PLAYER_CHAR currentweapon == 0
02D7:   player $PLAYER_CHAR currentweapon == 1
02D7:   player $PLAYER_CHAR currentweapon == 2
02D7:   player $PLAYER_CHAR currentweapon == 3
02D7:   player $PLAYER_CHAR currentweapon == 4
02D7:   player $PLAYER_CHAR currentweapon == 5
02D7:   player $PLAYER_CHAR currentweapon == 6
02D7:   player $PLAYER_CHAR currentweapon == 7
else_jump @SWIM_4
jump @SWIM_5 

:SWIM_4
wait 0 
if or
02D7:   player $PLAYER_CHAR currentweapon == 8
02D7:   player $PLAYER_CHAR currentweapon == 9
02D7:   player $PLAYER_CHAR currentweapon == 10
02D7:   player $PLAYER_CHAR currentweapon == 11
02D7:   player $PLAYER_CHAR currentweapon == 12
02D7:   player $PLAYER_CHAR currentweapon == 13
02D7:   player $PLAYER_CHAR currentweapon == 14
02D7:   player $PLAYER_CHAR currentweapon == 15
else_jump @SWIM_2

:SWIM_5
Camera.OnPed($PLAYER_ACTOR, 43, 2)
041D: set_camera_near_clip 0.1
wait 250

:SWIM_6
wait 0
if 
85EE:   not key_pressed 2 //Virtual "Right Mouse Button" Key
else_jump @SWIM_6 
Camera.Restore
wait 250
jump @SWIM_2  __SBFTR 