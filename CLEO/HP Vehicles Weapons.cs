�HPRUN     �  V M ����0 K��gCu��5�@A  �C� ��   ' L eK	B��x��n#�A ��C� ��   ' L e  & 
 � 9�
  )�
 dM w���
 
 " 
  � w���VAR '   ARENA_DOOR_1    ARENA_DOOR_2    CAR_SHOWROOM_ASSET �  CURRENT_TIME_IN_MS �  CUT_SCENE_TIME |   DEFAULT_WAIT_TIME    FILM_STUDIO_ASSET �  FILM_STUDIO_BACK_GATE_CLOSED   FILM_STUDIO_BACK_GATE_OPEN   FILM_STUDIO_FRONT_GATE_CLOSED   FILM_STUDIO_FRONT_GATE_OPEN   ICE_CREAM_FACTORY_ASSET �  LANCE_VANCE �   ONMISSION 9  PASSED_ASS1_RUB_OUT �   PASSED_COK1_THE_CHASE �   PASSED_COK2_PHNOM_PENH_86 �   PASSED_COK3_THE_FASTEST_BOAT �   PASSED_COK4_SUPPLY_AND_DEMAND �   PASSED_COL1_TREACHEROUS_SWINE �   PASSED_COL2_MALL_SHOOTOUT �   PASSED_COL3_GUARDIAN_ANGELS �   PASSED_COL4_SIR_YES_SIR �   PASSED_COL5_ALL_HANDS_ON_DECK �   PASSED_HAT1_JUJU_SCRAMBLE   PASSED_HAT2_BOMBS_AWAY   PASSED_HAT3_DIRTY_LICKINS   PASSED_KENT1_DEATH_ROW �   PASSED_LAW1_THE_PARTY �   PASSED_LAW2_BACK_ALLEY_BRAWL �   PASSED_LAW3_JURY_FURY �   PASSED_LAW4_RIOT �   PASSED_ROCK1_LOVE_JUICE    PASSED_ROCK2_PSYCHO_KILLER !  PASSED_ROCK3_PUBLICITY_TOUR "  PASSED_TEX1_FOUR_IRON �   PLAYER_ACTOR    PLAYER_CHAR    PRINT_WORKS_ASSET �  FLAG   SRC w  {$CLEO .cs} // SCRIPT BY FELIZPE

//-------------MAIN---------------
thread 'HPRUN' 

:HPRUN_1
wait 0
if 
Player.Defined($PLAYER_CHAR)
else_jump @HPRUN_1
Player.InfiniteRun($PLAYER_CHAR) = True
014B: 1@ = init_car_generator #FREEWAY -1 -1 force_spawn 1 alarm 0 door_lock 0 min_delay 0 max_delay 10000 at 231.7833 -1283.658 12.0584 angle 260.0 
014C: set_parked_car_generator 1@ cars_to_generate_to 101
014B: 2@ = init_car_generator #PCJ600 -1 -1 force_spawn 1 alarm 0 door_lock 0 min_delay 0 max_delay 10000 at -372.5159 -542.1948 17.2673 angle 359.0 
014C: set_parked_car_generator 2@ cars_to_generate_to 101

:HPRUN_10
wait 0 
10@ = Actor.Health($PLAYER_ACTOR)
if and
   not 10@ == 0 // integer values 
   not 10@ >= 100 // integer values 
else_jump @HPRUN_10 
10@ += 1 // integer values 
0222: set_player $PLAYER_CHAR health_to 10@ 
wait 1000
jump @HPRUN_10 �   __SBFTR 