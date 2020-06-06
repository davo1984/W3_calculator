# W3_calcultor

Purpose is to learn about functions, event handling, computational thinking and handling mathmatics, including built-in functions. To do this I built a working calculator. Works just like the first solar powered pocket calculator I carried in my pocket all the way through college and lived in my car's glovebox for many years afterwards for calculating fuel milage.

# Calculator JavaScript Pseudocode

//setup == **masterInit**
//  build button tile array display text (eg "5" | "+")
//  build button tile array picture of pretty button

//build container == **initCalcBody**
//  every calc button ==> shift tile name array for each button tile added
//  every calc button ==> shift tile picture array for each button tile added
//  row
//      col calculator-body
//          row -- display
//              column -- display
//          row -- button tile row#1
//              col -- CLEAR ALL
//              col -- CLEAR ENTRY
//              col -- SHOW HISTORY
//              col -- <BACKSPACE> "<=" -- better symbol
//          row -- button tile row#2
//              col -- 7
//              col -- 8
//              col -- 9
//              col -- "/" -- better symbol
//          row -- button tile row#3
//              col -- 4
//              col -- 5
//              col -- 6
//              col -- "*"
//          row -- button tile row#4
//              col -- 1
//              col -- 2
//              col -- 3
//              col -- "-"
//          row -- button tile row#5
//              col -- 0
//              col -- "." DOT
//              col -- "%" PERCENTAGE
//              col -- "+"
//      col history-list

//  any button pressed
//      find button type
//      handoff to *function/method  [tile.*]

//  *number method [0-9 & "."]
//      if "." validity check (no previous ".")
//      if "<=" remove digit else add digit
//      build/hold internal number
//      build & display number

//  *calc method [+ - * / =]
//      ~Contains:
//          ~history array
//          ~internal number
//          ~display number
//          ~previous internal number
//      only-if (div) > / 0 validity check
//      perform calc: hold internal number
//      build & display number

//  *clear method [ALL ENTRY]

//  *show history
