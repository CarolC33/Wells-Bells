/*
  WELLS BELLS — SCHEDULE FILE

  YEAR-TO-YEAR MAINTENANCE:
  If Wells changes its bell schedule, edit ONLY this file.
*/

const WELLS_SCHEDULES = {

  regular: {
    name: "Regular Day",
    events: [
      {start:"07:40", end:"08:30", label:"PERIOD 0"},
      {start:"08:35", end:"09:25", label:"PERIOD 1"},
      {start:"09:29", end:"10:19", label:"PERIOD 2"},
      {start:"10:23", end:"10:48", label:"ADVISORY / ACADEMIC PREP"},
      {start:"10:48", end:"10:55", label:"NUTRITION BREAK"},
      {start:"10:59", end:"11:49", label:"PERIOD 3"},
      {start:"11:49", end:"13:17", type:"split"},
      {start:"13:21", end:"14:11", label:"PERIOD 5"},
      {start:"14:15", end:"15:05", label:"PERIOD 6"}
    ]
  },

  wednesday: {
    name: "Wednesday",
    events: [
      {start:"07:45", end:"08:30", label:"PERIOD 0"},
      {start:"08:35", end:"09:23", label:"PERIOD 1"},
      {start:"09:27", end:"10:10", label:"PERIOD 2"},
      {start:"10:10", end:"10:17", label:"NUTRITION BREAK"},
      {start:"10:21", end:"11:04", label:"PERIOD 3"},
      {start:"11:04", end:"12:26", type:"split"},
      {start:"12:30", end:"13:13", label:"PERIOD 5"},
      {start:"13:17", end:"14:00", label:"PERIOD 6"}
    ]
  },

  minimum: {
    name: "Minimum Day",
    events: [
      {start:"08:05", end:"08:30", label:"PERIOD 0"},
      {start:"08:35", end:"09:07", label:"PERIOD 1"},
      {start:"09:11", end:"09:41", label:"PERIOD 2"},
      {start:"09:45", end:"10:15", label:"PERIOD 3"},
      {start:"10:22", end:"10:52", label:"PERIOD 4"},
      {start:"10:56", end:"11:26", label:"PERIOD 5"},
      {start:"11:30", end:"12:00", label:"PERIOD 6"}
    ]
  }
};


const WELLS_SPLIT = {

  regular: {

    groupA: [
      {start:"11:49", end:"12:23", label:"LUNCH A"},
      {start:"12:23", end:"12:27", label:"PASSING PERIOD"},
      {start:"12:27", end:"13:17", label:"PERIOD 4"}
    ],

    groupB: [
      {start:"11:49", end:"11:53", label:"PASSING PERIOD"},
      {start:"11:53", end:"12:43", label:"PERIOD 4"},
      {start:"12:43", end:"13:17", label:"LUNCH B"}
    ]
  },

  wednesday: {

    groupA: [
      {start:"11:04", end:"11:39", label:"LUNCH A"},
      {start:"11:39", end:"11:43", label:"PASSING PERIOD"},
      {start:"11:43", end:"12:26", label:"PERIOD 4"}
    ],

    groupB: [
      {start:"11:04", end:"11:08", label:"PASSING PERIOD"},
      {start:"11:08", end:"11:51", label:"PERIOD 4"},
      {start:"11:51", end:"12:26", label:"LUNCH B"}
    ]
  }
};
