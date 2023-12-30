// Предполагается, что Time уже определен где-то в вашем коде с подходящими значениями
// const Time = {
//     X1: "0:41:40",
//     X2: "0:20:50",
//     X3: "0:13:50",
//   };
  
//   function parseTime(t: string): number {
//     const [hours, minutes, seconds] = t.split(":").map(Number);
//     return hours * 3600 + minutes * 60 + seconds;
//   }
  
  // Использование
  //const secondsX1 = parseTime(Time.X1);  // Преобразует "0:41:40" в секунды
  
  import React from 'react';

  const Buildings = {
    MainBuilding: {
        Name: "Главное здание",
        Description: "От него зависит скорость постройки остальных зданий",
        image: "/img/MainBuilding.jpg",
        OtherTitle: "Скорость постройки",
        levels: {
            lvl1: {
                lvl: 1,
                Lumber: 70,
                Clay: 40,
                Iron: 60,
                Crop: 20,
                Resources: 190,
                CropBalance: 2,
                CP: 2,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "0:41:40",
                    X2: "0:20:50",
                    X3: "0:13:50",
                },
                Other: "100%",
            },
            lvl2: {
                lvl: 2,
                Lumber: 90,
                Clay: 50,
                Iron: 75,
                Crop: 25,
                Resources: 240,
                CropBalance: 1,
                CP: 1,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "0:43:40",
                    X2: "0:21:50",
                    X3: "0:14:30",
                },
                Other: "104%",
            },
            lvl3: {
                lvl: 3,
                Lumber: 115,
                Clay: 65,
                Iron: 100,
                Crop: 35,
                Resources: 315,
                CropBalance: 1,
                CP: 1,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "0:53:40",
                    X2: "0:26:50",
                    X3: "0:17:50",
                },
                Other: "108%",
            },
            lvl4: {
                lvl: 4,
                Lumber: 145,
                Clay: 85,
                Iron: 125,
                Crop: 40,
                Resources: 395,
                CropBalance: 1,
                CP: 1,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "1:04:40",
                    X2: "0:32:20",
                    X3: "0:21:30",
                },
                Other: "112%",
            },
            lvl5: {
                lvl: 5,
                Lumber: 190,
                Clay: 105,
                Iron: 160,
                Crop: 55,
                Resources: 510,
                CropBalance: 1,
                CP: 1,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "1:16:50",
                    X2: "0:38:20",
                    X3: "0:25:40",
                },
                Other: "116%",
            },
            lvl6: {
                lvl: 6,
                Lumber: 240,
                Clay: 135,
                Iron: 205,
                Crop: 70,
                Resources: 650,
                CropBalance: 2,
                CP: 1,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "1:30:10",
                    X2: "0:45:00",
                    X3: "0:30:00",
                },
                Other: "120%",
            },
            lvl7: {
                lvl: 7,
                Lumber: 310,
                Clay: 175,
                Iron: 265,
                Crop: 90,
                Resources: 840,
                CropBalance: 2,
                CP: 2,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "1:45:00",
                    X2: "0:52:30",
                    X3: "0:35:00",
                },
                Other: "125%",
            },
            lvl8: {
                lvl: 8,
                Lumber: 395,
                Clay: 225,
                Iron: 340,
                Crop: 115,
                Resources: 1075,
                CropBalance: 2,
                CP: 2,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "2:01:20",
                    X2: "1:00:40",
                    X3: "0:40:30",
                },
                Other: "129%",
            },
            lvl9: {
                lvl: 9,
                Lumber: 505,
                Clay: 290,
                Iron: 430,
                Crop: 145,
                Resources: 1370,
                CropBalance: 2,
                CP: 2,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "2:19:40",
                    X2: "1:09:50",
                    X3: "0:46:30",
                },
                Other: "134%",
            },
            lvl10: {
                lvl: 10,
                Lumber: 645,
                Clay: 370,
                Iron: 555,
                Crop: 185,
                Resources: 1755,
                CropBalance: 2,
                CP: 2,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "2:39:50",
                    X2: "1:20:00",
                    X3: "0:53:20",
                },
                Other: "139%",
            },
            lvl11: {
                lvl: 11,
                Lumber: 825,
                Clay: 470,
                Iron: 710,
                Crop: 235,
                Resources: 2240,
                CropBalance: 2,
                CP: 3,
                Warehouse: "1(1 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "3:02:20",
                    X2: "1:31:10",
                    X3: "1:00:50",
                },
                Other: "144%",
            },
            lvl12: {
                lvl: 12,
                Lumber: 1060,
                Clay: 605,
                Iron: 905,
                Crop: 300,
                Resources: 2870,
                CropBalance: 2,
                CP: 3,
                Warehouse: "1(1 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "3:27:20",
                    X2: "1:43:40",
                    X3: "1:09:10",
                },
                Other: "150%",
            },
            lvl13: {
                lvl: 13,
                Lumber: 1355,
                Clay: 775,
                Iron: 1160,
                Crop: 385,
                Resources: 3675,
                CropBalance: 2,
                CP: 3,
                Warehouse: "1(2 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "3:55:20",
                    X2: "1:57:40",
                    X3: "1:18:30",
                },
                Other: "155%",
            },
            lvl14: {
                lvl: 14,
                Lumber: 1735,
                Clay: 990,
                Iron: 1485,
                Crop: 495,
                Resources: 4705,
                CropBalance: 2,
                CP: 5,
                Warehouse: "1(3 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "4:26:20",
                    X2: "2:13:10",
                    X3: "1:28:50",
                },
                Other: "161%",
            },
            lvl15: {
                lvl: 15,
                Lumber: 2220,
                Clay: 1270,
                Iron: 1900,
                Crop: 635,
                Resources: 6025,
                CropBalance: 2,
                CP: 5,
                Warehouse: "1(3 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "5:00:50",
                    X2: "2:30:30",
                    X3: "1:40:20",
                },
                Other: "167%",
            },
            lvl16: {
                lvl: 16,
                Lumber: 2840,
                Clay: 1625,
                Iron: 2435,
                Crop: 810,
                Resources: 7710,
                CropBalance: 3,
                CP: 6,
                Warehouse: "1(4 lvl)",
                Granary: "1(1 lvl)",
                Time: {
                    X1: "5:39:30",
                    X2: "2:49:40",
                    X3: "1:53:10",
                },
                Other: "173%",
            },
            lvl17: {
                lvl: 17,
                Lumber: 3635,
                Clay: 2075,
                Iron: 3115,
                Crop: 1040,
                Resources: 9865,
                CropBalance: 3,
                CP: 7,
                Warehouse: "1(5 lvl)",
                Granary: "1(1 lvl)",
                Time: {
                    X1: "6:22:30",
                    X2: "3:11:10",
                    X3: "2:07:30",
                },
                Other: "180%",
            },
            lvl18: {
                lvl: 18,
                Lumber: 4650,
                Clay: 2660,
                Iron: 3990,
                Crop: 1330,
                Resources: 12630,
                CropBalance: 3,
                CP: 9,
                Warehouse: "1(6 lvl)",
                Granary: "1(2 lvl)",
                Time: {
                    X1: "7:10:30",
                    X2: "3:35:10",
                    X3: "2:23:30",
                },
                Other: "187%",
            },
            lvl19: {
                lvl: 19,
                Lumber: 5955,
                Clay: 3405,
                Iron: 5105,
                Crop: 1700,
                Resources: 16165,
                CropBalance: 3,
                CP: 11,
                Warehouse: "1(7 lvl)",
                Granary: "1(2 lvl)",
                Time: {
                    X1: "8:04:00",
                    X2: "4:02:00",
                    X3: "2:41:20",
                },
                Other: "193%",
            },
            lvl20: {
                lvl: 20,
                Lumber: 7620,
                Clay: 4355,
                Iron: 6535,
                Crop: 2180,
                Resources: 20690,
                CropBalance: 3,
                CP: 13,
                Warehouse: "1(8 lvl)",
                Granary: "1(3 lvl)",
                Time: {
                    X1: "9:03:50",
                    X2: "4:32:00",
                    X3: "3:01:20",
                },
                Other: "201%",
            },
            lvl00: {
                lvl: 0,
                Lumber: 0,
                Clay: 0,
                Iron: 0,
                Crop: 0,
                Resources: 0,
                CropBalance: 0,
                CP: 0,
                Warehouse: "",
                Granary: "",
                Time: {
                    X1: "",
                    X2: "",
                    X3: "",
                },
                Other: "",
            },
        }
    },

    HorseDrinkingTrough: {
        Name: "Водопой",
        Description: "От него зависит скорость постройки кавалерии",
        image: "/img/HorseDrinkinTrough.jpg",
        OtherTitle: "Скорость постройки",
        levels: {
            lvl1: {
                lvl: 1,
                Lumber: 780,
                Clay: 420,
                Iron: 660,
                Crop: 540,
                Resources: 2400,
                CropBalance: 5,
                CP: 4,
                Warehouse: "1(0 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "0:36:40",
                    X2: "0:18:20",
                    X3: "0:12:10",
                },
                Other: "1.01x",
            },
            lvl2: {
                lvl: 2,
                Lumber: 1000,
                Clay: 540,
                Iron: 845,
                Crop: 690,
                Resources: 3075,
                CropBalance: 3,
                CP: 0,
                Warehouse: "1(1 lvl)",
                Granary: "1(0 lvl)",
                Time: {
                    X1: "0:52:30",
                    X2: "0:26:20",
                    X3: "0:17:30",
                },
                Other: "1.02x",
            },
            lvl3: {
                lvl: 3,
                Lumber: 1280,
                Clay: 690,
                Iron: 1080,
                Crop: 885,
                Resources: 3935,
                CropBalance: 3,
                CP: 1,
                Warehouse: "1(2 lvl)",
                Granary: "1(1 lvl)",
                Time: {
                    X1: "1:11:00",
                    X2: "0:35:30",
                    X3: "0:23:40",
                },
                Other: "1.03x",
            },
            lvl4: {
                lvl: 4,
                Lumber: 1635,
                Clay: 880,
                Iron: 1385,
                Crop: 1130,
                Resources: 5030,
                CropBalance: 3,
                CP: 1,
                Warehouse: "1(2 lvl)",
                Granary: "1(1 lvl)",
                Time: {
                    X1: "1:32:20",
                    X2: "0:46:10",
                    X3: "0:30:50",
                },
                Other: "1.04x",
            },
            lvl5: {
                lvl: 5,
                Lumber: 2095,
                Clay: 1125,
                Iron: 1770,
                Crop: 1450,
                Resources: 6440,
                CropBalance: 3,
                CP: 1,
                Warehouse: "1(3 lvl)",
                Granary: "1(2 lvl)",
                Time: {
                    X1: "1:57:00",
                    X2: "0:58:30",
                    X3: "0:39:00",
                },
                Other: "1.05x",
            },
            lvl6: {
                lvl: 6,
                Lumber: 2680,
                Clay: 1445,
                Iron: 2270,
                Crop: 1855,
                Resources: 8250,
                CropBalance: 3,
                CP: 2,
                Warehouse: "1(4 lvl)",
                Granary: "1(3 lvl)",
                Time: {
                    X1: "2:25:50",
                    X2: "1:12:50",
                    X3: "0:48:40",
                },
                Other: "1.06x",
            },
            lvl7: {
                lvl: 7,
                Lumber: 3430,
                Clay: 1845,
                Iron: 2905,
                Crop: 2375,
                Resources: 10555,
                CropBalance: 3,
                CP: 2,
                Warehouse: "1(5 lvl)",
                Granary: "1(4 lvl)",
                Time: {
                    X1: "2:59:10",
                    X2: "1:29:30",
                    X3: "0:59:40",
                },
                Other: "1.08x",
            },
            lvl8: {
                lvl: 8,
                Lumber: 4390,
                Clay: 2365,
                Iron: 3715,
                Crop: 3040,
                Resources: 13510,
                CropBalance: 3,
                CP: 2,
                Warehouse: "1(6 lvl)",
                Granary: "1(4 lvl)",
                Time: {
                    X1: "3:37:50",
                    X2: "1:48:50",
                    X3: "1:12:40",
                },
                Other: "1.09x",
            },
            lvl9: {
                lvl: 9,
                Lumber: 5620,
                Clay: 3025,
                Iron: 4755,
                Crop: 3890,
                Resources: 17290,
                CropBalance: 3,
                CP: 2,
                Warehouse: "1(7 lvl)",
                Granary: "1(5 lvl)",
                Time: {
                    X1: "4:22:40",
                    X2: "2:11:20",
                    X3: "1:27:30",
                },
                Other: "1.10x",
            },
            lvl10: {
                lvl: 10,
                Lumber: 7195,
                Clay: 3875,
                Iron: 6085,
                Crop: 4980,
                Resources: 22135,
                CropBalance: 3,
                CP: 4,
                Warehouse: "1(8 lvl)",
                Granary: "1(6 lvl)",
                Time: {
                    X1: "5:14:40",
                    X2: "2:37:20",
                    X3: "1:44:50",
                },
                Other: "1.11x",
            },
            lvl11: {
                lvl: 11,
                Lumber: 9210,
                Clay: 4960,
                Iron: 7790,
                Crop: 6375,
                Resources: 28335,
                CropBalance: 4,
                CP: 3,
                Warehouse: "1(9 lvl)",
                Granary: "1(8 lvl)",
                Time: {
                    X1: "6:15:00",
                    X2: "3:07:30",
                    X3: "2:05:00",
                },
                Other: "1.12x",
            },
            lvl12: {
                lvl: 12,
                Lumber: 11785,
                Clay: 6345,
                Iron: 9975,
                Crop: 8160,
                Resources: 36265,
                CropBalance: 4,
                CP: 5,
                Warehouse: "1(10 lvl)",
                Granary: "1(9 lvl)",
                Time: {
                    X1: "7:25:00",
                    X2: "3:42:30",
                    X3: "2:28:20",
                },
                Other: "1.14x",
            },
            lvl13: {
                lvl: 13,
                Lumber: 15085,
                Clay: 8125,
                Iron: 12765,
                Crop: 10445,
                Resources: 46420,
                CropBalance: 4,
                CP: 5,
                Warehouse: "1(12 lvl)",
                Granary: "1(10 lvl)",
                Time: {
                    X1: "8:46:10",
                    X2: "4:23:00",
                    X3: "2:55:20",
                },
                Other: "1.15x",
            },
            lvl14: {
                lvl: 14,
                Lumber: 19310,
                Clay: 10400,
                Iron: 16340,
                Crop: 13370,
                Resources: 59420,
                CropBalance: 4,
                CP: 7,
                Warehouse: "1(13 lvl)",
                Granary: "1(11 lvl)",
                Time: {
                    X1: "10:20:20",
                    X2: "5:10:10",
                    X3: "3:26:50",
                },
                Other: "1.16x",
            },
            lvl15: {
                lvl: 15,
                Lumber: 24720,
                Clay: 13310,
                Iron: 20915,
                Crop: 17115,
                Resources: 76060,
                CropBalance: 4,
                CP: 7,
                Warehouse: "1(14 lvl)",
                Granary: "1(12 lvl)",
                Time: {
                    X1: "12:09:40",
                    X2: "6:04:50",
                    X3: "4:03:10",
                },
                Other: "1.18x",
            },
            lvl16: {
                lvl: 16,
                Lumber: 31640,
                Clay: 17035,
                Iron: 26775,
                Crop: 21905,
                Resources: 97355,
                CropBalance: 4,
                CP: 9,
                Warehouse: "1(16 lvl)",
                Granary: "1(14 lvl)",
                Time: {
                    X1: "14:16:20",
                    X2: "7:08:10",
                    X3: "4:45:30",
                },
                Other: "1.19x",
            },
            lvl17: {
                lvl: 17,
                Lumber: 40500,
                Clay: 21810,
                Iron: 34270,
                Crop: 28040,
                Resources: 124620,
                CropBalance: 4,
                CP: 12,
                Warehouse: "1(17 lvl)",
                Granary: "1(15 lvl)",
                Time: {
                    X1: "16:43:20",
                    X2: "8:21:40",
                    X3: "5:34:30",
                },
                Other: "1.20x",
            },
            lvl18: {
                lvl: 18,
                Lumber: 51840,
                Clay: 27915,
                Iron: 43865,
                Crop: 35890,
                Resources: 159510,
                CropBalance: 4,
                CP: 13,
                Warehouse: "1(18 lvl)",
                Granary: "1(16 lvl)",
                Time: {
                    X1: "19:33:50",
                    X2: "9:47:00",
                    X3: "6:31:20",
                },
                Other: "1.22x",
            },
            lvl19: {
                lvl: 19,
                Lumber: 66355,
                Clay: 35730,
                Iron: 56145,
                Crop: 45940,
                Resources: 204170,
                CropBalance: 4,
                CP: 16,
                Warehouse: "1(19 lvl)",
                Granary: "1(18 lvl)",
                Time: {
                    X1: "22:51:40",
                    X2: "11:25:50",
                    X3: "7:37:10",
                },
                Other: "1.23x",
            },
            lvl20: {
                lvl: 20,
                Lumber: 84935,
                Clay: 45735,
                Iron: 71870,
                Crop: 58800,
                Resources: 261340,
                CropBalance: 4,
                CP: 19,
                Warehouse: "2(6 lvl)",
                Granary: "1(19 lvl)",
                Time: {
                    X1: "26:41:10",
                    X2: "13:20:40",
                    X3: "8:53:40",
                },
                Other: "1.25x",
            },
            lvl00: {
                lvl: 0,
                Lumber: 0,
                Clay: 0,
                Iron: 0,
                Crop: 0,
                Resources: 0,
                CropBalance: 0,
                CP: 0,
                Warehouse: "",
                Granary: "",
                Time: {
                    X1: "",
                    X2: "",
                    X3: "",
                },
                Other: "",
            },
        }
    }
    
};


export default Buildings;