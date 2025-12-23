import { GlobalConnection } from '../types';

export const ALL_CONNECTIONS: GlobalConnection[] = [
  {
    "id": "eot-1",
    "fromEventId": "modern-13",
    "toEventId": "p4-30",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-2",
    "fromEventId": "p4-30",
    "toEventId": "modern-12",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-3",
    "fromEventId": "modern-12",
    "toEventId": "p6-1",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eot-4",
    "fromEventId": "p6-1",
    "toEventId": "modern-9",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eot-5",
    "fromEventId": "modern-9",
    "toEventId": "p8-20",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-6",
    "fromEventId": "p8-14",
    "toEventId": "p8-26",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-7",
    "fromEventId": "p8-20",
    "toEventId": "p8-30",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-8",
    "fromEventId": "p8-30",
    "toEventId": "modern-7",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-9",
    "fromEventId": "modern-7",
    "toEventId": "p9-1",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-10",
    "fromEventId": "p9-1",
    "toEventId": "p9-16",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-11",
    "fromEventId": "p9-18",
    "toEventId": "pilot-1",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-12",
    "fromEventId": "p9-23",
    "toEventId": "p10-11",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-13",
    "fromEventId": "modern-6",
    "toEventId": "pilot-2",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-14",
    "fromEventId": "modern-7",
    "toEventId": "modern-5",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-15",
    "fromEventId": "pilot-2",
    "toEventId": "p10-10",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-16",
    "fromEventId": "modern-4",
    "toEventId": "p11-14",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-17",
    "fromEventId": "p11-14",
    "toEventId": "modern-3",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-18",
    "fromEventId": "pilot-3",
    "toEventId": "p12-3",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-19",
    "fromEventId": "modern-5",
    "toEventId": "modern-3",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-20",
    "fromEventId": "p12-3",
    "toEventId": "p12-7",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-21",
    "fromEventId": "p12-3",
    "toEventId": "p12-13",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-22",
    "fromEventId": "p12-11",
    "toEventId": "p12-22",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eot-23",
    "fromEventId": "p12-7",
    "toEventId": "p12-29",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-24",
    "fromEventId": "p12-13",
    "toEventId": "modern-1",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eot-25",
    "fromEventId": "modern-12",
    "toEventId": "p12-29",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-1",
    "fromEventId": "p4-3",
    "toEventId": "p4-9",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-2",
    "fromEventId": "p4-9",
    "toEventId": "p4-14",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-3",
    "fromEventId": "p4-14",
    "toEventId": "p4-25",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-4",
    "fromEventId": "p4-25",
    "toEventId": "p4-29",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-5",
    "fromEventId": "p4-29",
    "toEventId": "p5-2",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-6",
    "fromEventId": "p4-30",
    "toEventId": "p5-1",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-7",
    "fromEventId": "p5-2",
    "toEventId": "p5-8",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-8",
    "fromEventId": "p5-1",
    "toEventId": "p5-9",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-9",
    "fromEventId": "p5-2",
    "toEventId": "p5-11",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-10",
    "fromEventId": "p5-15",
    "toEventId": "p5-24",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-11",
    "fromEventId": "p5-11",
    "toEventId": "p5-16",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-12",
    "fromEventId": "p5-17",
    "toEventId": "p5-21",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-13",
    "fromEventId": "p5-21",
    "toEventId": "p6-3",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-14",
    "fromEventId": "p5-31",
    "toEventId": "p6-1",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-15",
    "fromEventId": "p5-29",
    "toEventId": "p6-4",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-16",
    "fromEventId": "p6-4",
    "toEventId": "p6-11",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-17",
    "fromEventId": "p6-1",
    "toEventId": "p6-9",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-18",
    "fromEventId": "p6-11",
    "toEventId": "p6-21",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-19",
    "fromEventId": "p6-9",
    "toEventId": "p6-20",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-20",
    "fromEventId": "p6-18",
    "toEventId": "p6-22",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-21",
    "fromEventId": "p6-21",
    "toEventId": "p6-22",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-22",
    "fromEventId": "p6-22",
    "toEventId": "p6-28",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-23",
    "fromEventId": "p6-28",
    "toEventId": "p6-29",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-24",
    "fromEventId": "p6-20",
    "toEventId": "p6-30",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "roc-25",
    "fromEventId": "p6-29",
    "toEventId": "p7-6",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "roc-26",
    "fromEventId": "p6-30",
    "toEventId": "p7-4",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-27",
    "fromEventId": "p7-4",
    "toEventId": "p7-10",
    "type": "related",
    "weight": 1
  },
  {
    "id": "roc-28",
    "fromEventId": "p7-10",
    "toEventId": "p7-12",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c1",
    "fromEventId": "cosmic-1",
    "toEventId": "cosmic-2",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c2",
    "fromEventId": "cosmic-2",
    "toEventId": "1",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c3",
    "fromEventId": "1",
    "toEventId": "2",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c4",
    "fromEventId": "2",
    "toEventId": "cosmic-3",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c5",
    "fromEventId": "cosmic-3",
    "toEventId": "3",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c6",
    "fromEventId": "3",
    "toEventId": "cosmic-5",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c7",
    "fromEventId": "cosmic-5",
    "toEventId": "4",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c8",
    "fromEventId": "4",
    "toEventId": "cosmic-7",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c9",
    "fromEventId": "4",
    "toEventId": "cosmic-8",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c10",
    "fromEventId": "cosmic-8",
    "toEventId": "cosmic-9",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c11",
    "fromEventId": "cosmic-9",
    "toEventId": "5",
    "type": "related",
    "weight": 1
  },
  {
    "id": "c12",
    "fromEventId": "5",
    "toEventId": "6",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c13",
    "fromEventId": "6",
    "toEventId": "cosmic-12",
    "type": "related",
    "weight": 1
  },
  {
    "id": "c14",
    "fromEventId": "cosmic-12",
    "toEventId": "7",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c15",
    "fromEventId": "7",
    "toEventId": "cosmic-14",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c16",
    "fromEventId": "cosmic-14",
    "toEventId": "8",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c17",
    "fromEventId": "8",
    "toEventId": "cosmic-15",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c18",
    "fromEventId": "cosmic-15",
    "toEventId": "cosmic-16",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c19",
    "fromEventId": "cosmic-16",
    "toEventId": "cosmic-17",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c20",
    "fromEventId": "cosmic-17",
    "toEventId": "9",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c21",
    "fromEventId": "9",
    "toEventId": "cosmic-19",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c22",
    "fromEventId": "cosmic-19",
    "toEventId": "cosmic-20",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c23",
    "fromEventId": "cosmic-20",
    "toEventId": "10",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c24",
    "fromEventId": "10",
    "toEventId": "11",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c25",
    "fromEventId": "11",
    "toEventId": "12",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c26",
    "fromEventId": "12",
    "toEventId": "cosmic-24",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c27",
    "fromEventId": "cosmic-24",
    "toEventId": "cosmic-25",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c28",
    "fromEventId": "cosmic-25",
    "toEventId": "15",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "c29",
    "fromEventId": "15",
    "toEventId": "cosmic-27",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "c30",
    "fromEventId": "cosmic-27",
    "toEventId": "18",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "hoa-1",
    "fromEventId": "art-1",
    "toEventId": "p4-29",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-venus",
    "fromEventId": "art-venus",
    "toEventId": "art-gobekli",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-gobekli",
    "fromEventId": "art-gobekli",
    "toEventId": "p4-3",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "hoa-ur",
    "fromEventId": "art-ur",
    "toEventId": "p4-29",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-nefertiti",
    "fromEventId": "art-nefertiti",
    "toEventId": "p6-11",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-terra",
    "fromEventId": "art-terracotta",
    "toEventId": "p6-30",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-kells",
    "fromEventId": "art-kells",
    "toEventId": "art-2",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-ife",
    "fromEventId": "art-ife",
    "toEventId": "art-3",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-fankuan",
    "fromEventId": "art-fankuan",
    "toEventId": "art-3",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-2",
    "fromEventId": "p6-11",
    "toEventId": "art-2",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-3",
    "fromEventId": "art-2",
    "toEventId": "art-3",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-4",
    "fromEventId": "art-3",
    "toEventId": "modern-9",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-arnolfini",
    "fromEventId": "art-arnolfini",
    "toEventId": "art-4",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-5",
    "fromEventId": "modern-9",
    "toEventId": "art-4",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-greatwave",
    "fromEventId": "art-greatwave",
    "toEventId": "art-5",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "hoa-6",
    "fromEventId": "art-4",
    "toEventId": "art-5",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "hoa-7",
    "fromEventId": "art-5",
    "toEventId": "art-starry",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "hoa-starry",
    "fromEventId": "art-starry",
    "toEventId": "art-6",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-8",
    "fromEventId": "art-6",
    "toEventId": "art-7",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-bauhaus",
    "fromEventId": "art-bauhaus",
    "toEventId": "p11-14",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-9",
    "fromEventId": "art-7",
    "toEventId": "art-pollock",
    "type": "related",
    "weight": 1
  },
  {
    "id": "hoa-pollock",
    "fromEventId": "art-pollock",
    "toEventId": "art-warhol",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-warhol",
    "fromEventId": "art-warhol",
    "toEventId": "art-basquiat",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-paik",
    "fromEventId": "art-paik",
    "toEventId": "art-pixar",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "hoa-pixar",
    "fromEventId": "art-pixar",
    "toEventId": "art-nft",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "hoa-nft",
    "fromEventId": "art-nft",
    "toEventId": "art-8",
    "type": "related",
    "weight": 1
  },
  {
    "id": "ai-1",
    "fromEventId": "ai-aristotle",
    "toEventId": "ai-alkhwarizmi",
    "type": "influenced",
    "weight": 1
  },
  {
    "id": "ai-2",
    "fromEventId": "ai-alkhwarizmi",
    "toEventId": "ai-llull",
    "type": "influenced",
    "weight": 1
  },
  {
    "id": "ai-3",
    "fromEventId": "ai-llull",
    "toEventId": "ai-jacquard",
    "type": "influenced",
    "weight": 1
  },
  {
    "id": "ai-4",
    "fromEventId": "ai-jacquard",
    "toEventId": "ai-lovelace",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-5",
    "fromEventId": "ai-lovelace",
    "toEventId": "ai-boole",
    "type": "related",
    "weight": 1
  },
  {
    "id": "ai-6",
    "fromEventId": "ai-boole",
    "toEventId": "ai-principia",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-7",
    "fromEventId": "ai-principia",
    "toEventId": "modern-13",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-8",
    "fromEventId": "modern-13",
    "toEventId": "ai-mcculloch",
    "type": "influenced",
    "weight": 1
  },
  {
    "id": "ai-9",
    "fromEventId": "ai-mcculloch",
    "toEventId": "ai-dartmouth",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-10",
    "fromEventId": "ai-dartmouth",
    "toEventId": "ai-perceptron",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-11",
    "fromEventId": "ai-perceptron",
    "toEventId": "ai-winter",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-12",
    "fromEventId": "ai-winter",
    "toEventId": "ai-deepblue",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "ai-13",
    "fromEventId": "ai-deepblue",
    "toEventId": "ai-alexnet",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "ai-14",
    "fromEventId": "ai-alexnet",
    "toEventId": "ai-alphago",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "ai-15",
    "fromEventId": "ai-alphago",
    "toEventId": "ai-transformer",
    "type": "influenced",
    "weight": 1
  },
  {
    "id": "money-1",
    "fromEventId": "p4-3",
    "toEventId": "money-shekel",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "money-2",
    "fromEventId": "money-shekel",
    "toEventId": "money-lydia",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "money-3",
    "fromEventId": "money-lydia",
    "toEventId": "money-paper",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "money-4",
    "fromEventId": "money-paper",
    "toEventId": "money-medici",
    "type": "related",
    "weight": 1
  },
  {
    "id": "money-5",
    "fromEventId": "money-medici",
    "toEventId": "money-gold",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "money-6",
    "fromEventId": "money-gold",
    "toEventId": "modern-7",
    "type": "influenced",
    "weight": 1
  },
  {
    "id": "money-7",
    "fromEventId": "modern-7",
    "toEventId": "money-card",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "money-8",
    "fromEventId": "money-card",
    "toEventId": "money-nixon",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "money-9",
    "fromEventId": "money-nixon",
    "toEventId": "p12-14",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "money-10",
    "fromEventId": "p12-14",
    "toEventId": "money-algo",
    "type": "related",
    "weight": 1
  },
  {
    "id": "money-11",
    "fromEventId": "p12-14",
    "toEventId": "p12-15",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "money-12",
    "fromEventId": "money-algo",
    "toEventId": "p12-29",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-1",
    "fromEventId": "18",
    "toEventId": "19",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-2",
    "fromEventId": "19",
    "toEventId": "20",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-3",
    "fromEventId": "20",
    "toEventId": "23",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-4",
    "fromEventId": "23",
    "toEventId": "24",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-5",
    "fromEventId": "24",
    "toEventId": "26",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-6",
    "fromEventId": "26",
    "toEventId": "27",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-7",
    "fromEventId": "27",
    "toEventId": "31",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-8",
    "fromEventId": "31",
    "toEventId": "p2-1",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-9",
    "fromEventId": "p2-1",
    "toEventId": "p2-2",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-10",
    "fromEventId": "p2-1",
    "toEventId": "p2-3",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-11",
    "fromEventId": "p2-2",
    "toEventId": "p2-5",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-12",
    "fromEventId": "p2-5",
    "toEventId": "p2-6",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-13",
    "fromEventId": "p2-6",
    "toEventId": "p2-7",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-14",
    "fromEventId": "p2-7",
    "toEventId": "p2-9",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-15",
    "fromEventId": "p2-9",
    "toEventId": "p2-10",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-16",
    "fromEventId": "p2-10",
    "toEventId": "p2-11",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-17",
    "fromEventId": "p2-11",
    "toEventId": "p2-12",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-18",
    "fromEventId": "p2-12",
    "toEventId": "p2-13",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-19",
    "fromEventId": "p2-13",
    "toEventId": "p2-14",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-20",
    "fromEventId": "p2-14",
    "toEventId": "p2-15",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-21",
    "fromEventId": "p2-15",
    "toEventId": "p2-16",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-22",
    "fromEventId": "p2-16",
    "toEventId": "p2-17",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-23",
    "fromEventId": "p2-17",
    "toEventId": "p2-19",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-24",
    "fromEventId": "p2-19",
    "toEventId": "p2-21",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-25",
    "fromEventId": "p2-21",
    "toEventId": "p2-22",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-26",
    "fromEventId": "p2-22",
    "toEventId": "p2-23",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-27",
    "fromEventId": "p2-23",
    "toEventId": "p2-24",
    "type": "related",
    "weight": 1
  },
  {
    "id": "eol-28",
    "fromEventId": "p2-24",
    "toEventId": "p2-25",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-29",
    "fromEventId": "p2-25",
    "toEventId": "p2-27",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-30",
    "fromEventId": "p2-27",
    "toEventId": "p2-28",
    "type": "preceded",
    "weight": 1
  },
  {
    "id": "eol-31",
    "fromEventId": "p2-28",
    "toEventId": "p2-29",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-32",
    "fromEventId": "p2-29",
    "toEventId": "41",
    "type": "caused",
    "weight": 1
  },
  {
    "id": "eol-33",
    "fromEventId": "41",
    "toEventId": "42",
    "type": "preceded",
    "weight": 1
  }
];
