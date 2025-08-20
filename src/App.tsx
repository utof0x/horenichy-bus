import { useState, useEffect } from "react";
import "./App.css";

interface BusSchedule {
  busNumber: number;
  route: "Gorenichy-Kyiv" | "Kyiv-Gorenichy";
  centralStation?: string;
  stadiumStation?: string;
  kyivStation?: string;
  stoyankaStation?: string;
  day: "weekday" | "weekend" | "all";
}

const busSchedules: BusSchedule[] = [
  // Bus 727 - Gorenichy to Kyiv routes
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "06:15",
    stadiumStation: "06:16",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "06:45",
    stadiumStation: "06:46",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "07:15",
    stadiumStation: "07:16",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "07:50",
    stadiumStation: "07:51",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "08:30",
    stadiumStation: "08:31",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "09:00",
    stadiumStation: "09:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "09:55",
    stadiumStation: "09:56",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "11:00",
    stadiumStation: "11:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "12:05",
    stadiumStation: "12:06",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "13:00",
    stadiumStation: "13:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "14:05",
    stadiumStation: "14:06",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "15:00",
    stadiumStation: "15:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "16:00",
    stadiumStation: "16:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "17:00",
    stadiumStation: "17:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "18:00",
    stadiumStation: "18:01",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "20:25",
    stadiumStation: "20:26",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "06:15",
    stadiumStation: "06:16",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "07:05",
    stadiumStation: "07:06",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "07:45",
    stadiumStation: "07:46",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "08:30",
    stadiumStation: "08:31",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "08:55",
    stadiumStation: "08:56",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "09:55",
    stadiumStation: "09:56",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "11:00",
    stadiumStation: "11:01",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "12:05",
    stadiumStation: "12:06",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "14:05",
    stadiumStation: "14:06",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "16:00",
    stadiumStation: "16:01",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "17:00",
    stadiumStation: "17:01",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "18:00",
    stadiumStation: "18:01",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "19:00",
    stadiumStation: "19:01",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Gorenichy-Kyiv",
    centralStation: "20:25",
    stadiumStation: "20:26",
    day: "weekend",
  },

  // Bus 727 - Kyiv to Gorenichy routes
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:00",
    stoyankaStation: "07:18",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:35",
    stoyankaStation: "07:53",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "08:10",
    stoyankaStation: "08:28",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "08:50",
    stoyankaStation: "09:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "09:50",
    stoyankaStation: "10:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "10:50",
    stoyankaStation: "11:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "11:50",
    stoyankaStation: "12:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "12:50",
    stoyankaStation: "13:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "13:50",
    stoyankaStation: "14:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "14:50",
    stoyankaStation: "15:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "15:50",
    stoyankaStation: "16:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "16:50",
    stoyankaStation: "17:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:50",
    stoyankaStation: "18:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "18:50",
    stoyankaStation: "19:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:50",
    stoyankaStation: "20:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "20:50",
    stoyankaStation: "21:08",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "22:10",
    stoyankaStation: "22:28",
    day: "weekday",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:00",
    stoyankaStation: "07:18",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:50",
    stoyankaStation: "08:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "08:50",
    stoyankaStation: "09:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "09:50",
    stoyankaStation: "10:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "11:00",
    stoyankaStation: "11:18",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "12:40",
    stoyankaStation: "12:58",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "13:40",
    stoyankaStation: "13:58",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "15:50",
    stoyankaStation: "16:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "16:50",
    stoyankaStation: "17:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:50",
    stoyankaStation: "18:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "18:50",
    stoyankaStation: "19:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:50",
    stoyankaStation: "20:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "20:50",
    stoyankaStation: "21:08",
    day: "weekend",
  },
  {
    busNumber: 727,
    route: "Kyiv-Gorenichy",
    kyivStation: "22:10",
    stoyankaStation: "22:28",
    day: "weekend",
  },

  // Bus 747 - Gorenichy to Kyiv routes
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "05:35",
    stadiumStation: "05:36",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "06:30",
    stadiumStation: "06:31",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "06:50",
    stadiumStation: "06:51",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "07:45",
    stadiumStation: "07:46",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "08:25",
    stadiumStation: "08:26",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "16:30",
    stadiumStation: "16:31",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "17:30",
    stadiumStation: "17:31",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "17:55",
    stadiumStation: "17:56",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Gorenichy-Kyiv",
    centralStation: "18:55",
    stadiumStation: "18:56",
    day: "weekday",
  },

  // Bus 747 - Kyiv to Gorenichy routes
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "06:05",
    stoyankaStation: "06:23",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "06:55",
    stoyankaStation: "07:13",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:30",
    stoyankaStation: "07:48",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "15:45",
    stoyankaStation: "16:03",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:00",
    stoyankaStation: "17:18",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:25",
    stoyankaStation: "17:43",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "18:25",
    stoyankaStation: "18:43",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:00",
    stoyankaStation: "19:18",
    day: "weekday",
  },
  {
    busNumber: 747,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:45",
    stoyankaStation: "20:03",
    day: "weekday",
  },

  // Bus 765 - Gorenichy to Kyiv routes
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "06:05",
    stadiumStation: "06:06",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "06:35",
    stadiumStation: "06:36",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "07:05",
    stadiumStation: "07:06",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "07:35",
    stadiumStation: "07:36",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "08:05",
    stadiumStation: "08:06",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "08:45",
    stadiumStation: "08:46",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "09:20",
    stadiumStation: "09:21",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "10:30",
    stadiumStation: "10:31",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "11:40",
    stadiumStation: "11:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "12:40",
    stadiumStation: "12:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "13:40",
    stadiumStation: "13:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "14:40",
    stadiumStation: "14:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "15:40",
    stadiumStation: "15:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "16:40",
    stadiumStation: "16:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "17:40",
    stadiumStation: "17:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "18:40",
    stadiumStation: "18:41",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "06:05",
    stadiumStation: "06:06",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "06:40",
    stadiumStation: "06:41",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "07:15",
    stadiumStation: "07:16",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "08:05",
    stadiumStation: "08:06",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "09:20",
    stadiumStation: "09:21",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "10:30",
    stadiumStation: "10:31",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "12:50",
    stadiumStation: "12:51",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "14:40",
    stadiumStation: "14:41",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "15:40",
    stadiumStation: "15:41",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "16:40",
    stadiumStation: "16:41",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "17:40",
    stadiumStation: "17:41",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Gorenichy-Kyiv",
    centralStation: "18:40",
    stadiumStation: "18:41",
    day: "weekend",
  },

  // Bus 765 - Kyiv to Gorenichy routes
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "06:45",
    stoyankaStation: "07:03",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:20",
    stoyankaStation: "07:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:50",
    stoyankaStation: "08:08",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "08:30",
    stoyankaStation: "08:48",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "09:20",
    stoyankaStation: "09:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "10:30",
    stoyankaStation: "10:48",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "11:20",
    stoyankaStation: "11:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "12:20",
    stoyankaStation: "12:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "13:20",
    stoyankaStation: "13:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "14:20",
    stoyankaStation: "14:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "15:20",
    stoyankaStation: "15:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "16:20",
    stoyankaStation: "16:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:20",
    stoyankaStation: "17:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "18:20",
    stoyankaStation: "18:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:20",
    stoyankaStation: "19:38",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "20:20",
    stoyankaStation: "20:35",
    day: "weekday",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "06:45",
    stoyankaStation: "07:00",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:30",
    stoyankaStation: "07:45",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "08:20",
    stoyankaStation: "08:35",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "09:20",
    stoyankaStation: "09:35",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "10:30",
    stoyankaStation: "10:45",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "11:40",
    stoyankaStation: "11:55",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "15:10",
    stoyankaStation: "15:25",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "16:20",
    stoyankaStation: "16:35",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:20",
    stoyankaStation: "17:35",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "18:20",
    stoyankaStation: "18:35",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:20",
    stoyankaStation: "19:35",
    day: "weekend",
  },
  {
    busNumber: 765,
    route: "Kyiv-Gorenichy",
    kyivStation: "20:20",
    stoyankaStation: "20:35",
    day: "weekend",
  },

  // Bus 768 - Gorenichy to Kyiv routes
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "06:30",
    stadiumStation: "06:31",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "07:00",
    stadiumStation: "07:01",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "07:30",
    stadiumStation: "07:31",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "08:20",
    stadiumStation: "08:21",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "09:40",
    stadiumStation: "09:41",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "11:20",
    stadiumStation: "05:36",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "13:20",
    stadiumStation: "05:36",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "15:20",
    stadiumStation: "05:36",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "16:20",
    stadiumStation: "05:36",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "17:20",
    stadiumStation: "05:36",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "18:20",
    stadiumStation: "05:36",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Gorenichy-Kyiv",
    centralStation: "19:45",
    stadiumStation: "05:36",
    day: "all",
  },

  // Bus 768 - Kyiv to Gorenichy routes
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "07:10",
    stoyankaStation: "07:25",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "08:00",
    stoyankaStation: "08:15",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "09:00",
    stoyankaStation: "09:15",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "10:05",
    stoyankaStation: "10:20",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "12:00",
    stoyankaStation: "12:15",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "14:00",
    stoyankaStation: "14:15",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "15:30",
    stoyankaStation: "15:45",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "16:35",
    stoyankaStation: "16:50",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "17:35",
    stoyankaStation: "17:50",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "18:35",
    stoyankaStation: "18:50",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "19:35",
    stoyankaStation: "19:50",
    day: "all",
  },
  {
    busNumber: 768,
    route: "Kyiv-Gorenichy",
    kyivStation: "21:20",
    stoyankaStation: "21:35",
    day: "all",
  },
];

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedRoute, setSelectedRoute] = useState<
    "Gorenichy-Kyiv" | "Kyiv-Gorenichy"
  >("Gorenichy-Kyiv");
  const [showAllBuses, setShowAllBuses] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isWeekend = currentTime.getDay() === 0 || currentTime.getDay() === 6;
  const currentTimeString = currentTime.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const getFilteredSchedules = () => {
    return busSchedules
      .filter((schedule) => {
        const dayMatch =
          schedule.day === "all" ||
          (isWeekend && schedule.day === "weekend") ||
          (!isWeekend && schedule.day === "weekday");

        const routeMatch = schedule.route === selectedRoute;

        // Check if the schedule has the required time field for the selected route
        let hasRequiredTime = false;
        if (selectedRoute === "Gorenichy-Kyiv") {
          hasRequiredTime = !!schedule.centralStation;
        } else {
          hasRequiredTime = !!schedule.kyivStation;
        }

        if (!dayMatch || !routeMatch || !hasRequiredTime) {
          return false;
        }

        if (showAllBuses) {
          return true;
        }

        // Only show buses that haven't departed yet today
        // Use the appropriate time based on route direction
        let scheduleTime: string;
        if (selectedRoute === "Gorenichy-Kyiv") {
          scheduleTime = schedule.centralStation!;
        } else {
          scheduleTime = schedule.kyivStation!;
        }

        const today = currentTime.toDateString();
        const scheduleDateTime = new Date(`${today} ${scheduleTime}`);

        return scheduleDateTime > currentTime;
      })
      .sort((a, b) => {
        // Use the appropriate time for sorting based on route direction
        let timeA: string, timeB: string;
        if (selectedRoute === "Gorenichy-Kyiv") {
          timeA = a.centralStation || "00:00";
          timeB = b.centralStation || "00:00";
        } else {
          timeA = a.kyivStation || "00:00";
          timeB = b.kyivStation || "00:00";
        }

        const dateTimeA = new Date(`2000-01-01 ${timeA}`);
        const dateTimeB = new Date(`2000-01-01 ${timeB}`);
        return dateTimeA.getTime() - dateTimeB.getTime();
      });
  };

  const filteredSchedules = getFilteredSchedules();

  // Find the closest bus (next bus) based on current time
  const findNextBus = () => {
    if (filteredSchedules.length === 0) return null;

    const now = currentTime;
    let closestBus = null;
    let minTimeDiff = Infinity;

    for (const bus of filteredSchedules) {
      // Get the appropriate time field based on route
      let busTime: string | undefined;
      if (selectedRoute === "Gorenichy-Kyiv") {
        busTime = bus.centralStation;
      } else {
        busTime = bus.kyivStation;
      }

      if (!busTime) continue;

      const [hours, minutes] = busTime.split(":").map(Number);
      const busDateTime = new Date();
      busDateTime.setHours(hours, minutes, 0, 0);

      // If the time has passed today, consider it for tomorrow
      if (busDateTime <= now) {
        busDateTime.setDate(busDateTime.getDate() + 1);
      }

      const timeDiff = busDateTime.getTime() - now.getTime();

      // Only consider buses that haven't departed yet (positive time difference)
      if (timeDiff > 0 && timeDiff < minTimeDiff) {
        minTimeDiff = timeDiff;
        closestBus = bus;
      }
    }

    return closestBus;
  };

  const nextBus = findNextBus();

  const formatTimeUntil = (
    timeString: string,
    showAllBuses: boolean = false
  ) => {
    if (!timeString || timeString === "00:00") {
      return "-";
    }

    const [hours, minutes] = timeString.split(":").map(Number);

    // Check if the time is valid
    if (isNaN(hours) || isNaN(minutes)) {
      return "-";
    }

    const scheduleTime = new Date();
    scheduleTime.setHours(hours, minutes, 0, 0);

    // If the time has already passed today
    if (scheduleTime <= currentTime) {
      // If showing all buses and the time has passed, show "-"
      if (showAllBuses) {
        return "-";
      }
      // Otherwise, calculate for tomorrow
      scheduleTime.setDate(scheduleTime.getDate() + 1);
    }

    const diffMs = scheduleTime.getTime() - currentTime.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffHours > 0) {
      return `${diffHours}г ${diffMinutes}хв`;
    }
    return `${diffMinutes}хв`;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚌 Розклад автобусів Гореничі</h1>
        <div className="current-time">Зараз: {currentTimeString}</div>
      </header>

      <main className="app-main">
        {nextBus && (
          <div className="next-bus-info">
            <h2>Наступний автобус</h2>
            <div className="next-bus-details">
              <div className="bus-number">№{nextBus.busNumber}</div>
              <div className="bus-times">
                {selectedRoute === "Gorenichy-Kyiv" ? (
                  <>
                    {nextBus.centralStation && (
                      <div className="time-item">
                        <span className="station">Центр:</span>
                        <span className="time">{nextBus.centralStation}</span>
                        <span className="countdown">
                          (
                          {formatTimeUntil(
                            nextBus.centralStation,
                            showAllBuses
                          )}
                          )
                        </span>
                      </div>
                    )}
                    {nextBus.stadiumStation && (
                      <div className="time-item">
                        <span className="station">Стадіон:</span>
                        <span className="time">{nextBus.stadiumStation}</span>
                        <span className="countdown">
                          (
                          {formatTimeUntil(
                            nextBus.stadiumStation,
                            showAllBuses
                          )}
                          )
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {nextBus.kyivStation && (
                      <div className="time-item">
                        <span className="station">Київ:</span>
                        <span className="time">{nextBus.kyivStation}</span>
                        <span className="countdown">
                          ({formatTimeUntil(nextBus.kyivStation, showAllBuses)})
                        </span>
                      </div>
                    )}
                    {nextBus.stoyankaStation && (
                      <div className="time-item">
                        <span className="station">Стоянка:</span>
                        <span className="time">{nextBus.stoyankaStation}</span>
                        <span className="countdown">
                          (
                          {formatTimeUntil(
                            nextBus.stoyankaStation,
                            showAllBuses
                          )}
                          )
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="route-toggle">
          <button
            className={`toggle-btn ${
              selectedRoute === "Gorenichy-Kyiv" ? "active" : ""
            }`}
            onClick={() => setSelectedRoute("Gorenichy-Kyiv")}
          >
            Гореничі → Київ
          </button>
          <button
            className={`toggle-btn ${
              selectedRoute === "Kyiv-Gorenichy" ? "active" : ""
            }`}
            onClick={() => setSelectedRoute("Kyiv-Gorenichy")}
          >
            Київ → Гореничі
          </button>
        </div>

        <div className="buses-table">
          <h3>Розклад автобусів</h3>
          <table>
            <thead>
              <tr>
                <th>№</th>
                {selectedRoute === "Gorenichy-Kyiv" ? (
                  <>
                    <th>Центр</th>
                    <th>Стадіон</th>
                  </>
                ) : (
                  <>
                    <th>Київ</th>
                    <th>Стоянка</th>
                  </>
                )}
                <th>Прибуття</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedules.map((bus) => {
                const displayTime =
                  selectedRoute === "Gorenichy-Kyiv"
                    ? bus.centralStation
                    : bus.kyivStation;
                const countdownTime = displayTime || "";

                // Check if this is the next bus by comparing with the found nextBus
                const isNextBus =
                  nextBus &&
                  bus.busNumber === nextBus.busNumber &&
                  displayTime ===
                    (selectedRoute === "Gorenichy-Kyiv"
                      ? nextBus.centralStation
                      : nextBus.kyivStation);

                return (
                  <tr
                    key={`${bus.busNumber}-${displayTime}-${bus.route}`}
                    className={isNextBus ? "next-bus" : ""}
                  >
                    <td className="bus-number-cell">{bus.busNumber}</td>
                    {selectedRoute === "Gorenichy-Kyiv" ? (
                      <>
                        <td>{bus.centralStation || "-"}</td>
                        <td>{bus.stadiumStation || "-"}</td>
                      </>
                    ) : (
                      <>
                        <td>{bus.kyivStation || "-"}</td>
                        <td>{bus.stoyankaStation || "-"}</td>
                      </>
                    )}
                    <td className="countdown-cell">
                      {formatTimeUntil(countdownTime, showAllBuses)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="controls">
          <button
            className="toggle-all-btn"
            onClick={() => setShowAllBuses(!showAllBuses)}
          >
            {showAllBuses
              ? "Показати тільки сьогодні"
              : "Показати всі автобуси"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
