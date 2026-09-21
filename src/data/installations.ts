export type Install = {
  name: string;
  city: string;
  state: string;
  sport: string;
  model: string;
};

export const installations: Install[] = [
  { name: "Riverside High School", city: "Painesville", state: "OH", sport: "Baseball", model: "LX1250" },
  { name: "Georgia Military College", city: "Wrightsville", state: "GA", sport: "Football", model: "LX3050" },
  { name: "Johnson County High School", city: "Wrightsville", state: "GA", sport: "Baseball", model: "LX1710" },
  { name: "Grace Christian School", city: "West Columbia", state: "SC", sport: "Multi-sport", model: "LX1320" },
  { name: "Pitt County Schools", city: "Greenville", state: "NC", sport: "Multi-sport", model: "LX1390" },
  { name: "Prospect Mountain High School", city: "Alton", state: "NH", sport: "Multi-sport", model: "LX1390" },
  { name: "Marist High School", city: "Atlanta", state: "GA", sport: "Baseball", model: "LX1750" },
  { name: "Mosley High School", city: "Lynn Haven", state: "FL", sport: "Baseball", model: "LX1750" },
  { name: "Pojoaque Wellness Center", city: "Santa Fe", state: "NM", sport: "Multi-sport", model: "LX1390" },
  { name: "Fayetteville Christian School", city: "Fayetteville", state: "NC", sport: "Multi-sport", model: "LX1320" },
  { name: "New Creation Christian Academy", city: "McDonough", state: "GA", sport: "Multi-sport", model: "LX1320" },
  { name: "Crossroads Christian School", city: "Henderson", state: "NC", sport: "Baseball", model: "LX1730" },
];
