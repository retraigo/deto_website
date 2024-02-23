export enum EVENT_TYPE {
  TECH,
  NONTECH,
  ONLINE,
}

export enum EVENT_MODE {
  OFFLINE,
  ONLINE,
}

export enum EVENT_COUNT {
  PER_HEAD,
  PER_TEAM,
}

export enum EVENT_ID {
  SHERLOCK_CODE,
  TECH_PITCH,
  WHISPERING_IMAGES,
  CODE_RELAY,
  PAPER_PRESENTATION,
  CODE_GOLF,
  SWITCH_SAGA,
  PULSE_POP,
  KOLLYWOOD_TRIVIA,
  GREEN_SCREEN,
  MURDER_MYSTERY,
  SOLO_SINGING,
  REELS_RHYTHM,
  MEME_TEMPLATE,
  FOCUS_AND_FRAME,
}

export enum UPI_ID {
  ASVIN = "asvinbaskar@okhdfcbank",
  JENNIFER = "jennifersharon07@oksbi",
  DEEPAK = "deepakat274@okhdfcbank",
  NAVEEN = "snaveenkumar343@okhdfcbank",
  SABETHA = "aisabetha05@okaxis",
}

export enum UPI_NO {
  ASVIN = "7358652205",
  JENNIFER = "9840860012",
  DEEPAK = "9500163095",
  NAVEEN = "7904302894",
  SABETHA = "9345225837",
}

export const EVENTS = [
  /*
  {
    name: "Sherlock Code",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 100,
    minTeam: 1,
    maxTeam: 2,
    whatsapp: "https://chat.whatsapp.com/JODPQA1bNFAL1c9goBalxD",
    mobile: UPI_NO.JENNIFER,
  },*/
  {
    name: "Tech Pitch",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 80,
    minTeam: 1,
    maxTeam: 2,
    whatsapp: "https://chat.whatsapp.com/FfuGw3bG2Bt3LHO6v6CCaE",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Whispering Images",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.DEEPAK,
    fee: 120,
    minTeam: 1,
    maxTeam: 3,
    whatsapp: "https://chat.whatsapp.com/EwdnQG3zNblFk0IQ0Y3MB4",
    mobile: UPI_NO.DEEPAK,
  },
 /* {
    name: "Code Relay",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 150,
    minTeam: 3,
    maxTeam: 3,
    whatsapp: "https://chat.whatsapp.com/IXsQ3ze6fxDKXwj2S2VfWn",
    mobile: UPI_NO.NAVEEN,
  },*/
  /*
  {
    name: "Paper Presentation",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 200,
    minTeam: 1,
    maxTeam: 3,
    whatsapp: "https://chat.whatsapp.com/E47UeLm6f3W3zUZwGoaCfl",
    mobile: UPI_NO.JENNIFER,
  },
/*  {
    name: "Code Golf",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.DEEPAK,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://chat.whatsapp.com/IMIQzVBksasEgbP8TUxrvV",
    mobile: UPI_NO.DEEPAK,
  },*/
  {
    name: "Switch Saga",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 80,
    minTeam: 1,
    maxTeam: 2,
    whatsapp: "https://chat.whatsapp.com/ClmctRIvzIRDkpSShY0NYe",
    mobile: UPI_NO.NAVEEN,
  },/*
  {
    name: "Pulse Pop",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.ASVIN,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://chat.whatsapp.com/JqHpUSN4e1EKtw6C2Llsbk",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Kollywood Trivia",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 120,
    minTeam: 3,
    maxTeam: 4,
    whatsapp: "https://chat.whatsapp.com/GJzHiSg46q2BUrVziUtAb2",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Murder Mystery",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 150,
    minTeam: 3,
    maxTeam: 4,
    whatsapp: "https://chat.whatsapp.com/KCUKfQYZesKAdLwS8Tfd9B",
    mobile: UPI_NO.NAVEEN,
  },*/
  /*{
    name: "Green Screen",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.SABETHA,
    fee: 100,
    minTeam: 1,
    maxTeam: 3,
    whatsapp: "https://chat.whatsapp.com/DigEcVDe9lJGzI6YsPe1o6",
    mobile: UPI_NO.SABETHA,
  },*/
  {
    name: "Solo Singing",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://chat.whatsapp.com/Bvw9bpckAIZ7b3a53IVTFE",
    mobile: UPI_NO.JENNIFER,
  },/*
  {
    name: "Reels Rythm",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.DEEPAK,
    fee: 20,
    minTeam: 1,
    maxTeam: 1,
//    whatsapp: "https://chat.whatsapp.com/Jyh6lSt48jB07N6qGn9Qu9",
    mobile: UPI_NO.DEEPAK,
  },
  {
    name: "Focus and Frame",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.NAVEEN,
    fee: 20,
    minTeam: 1,
    maxTeam: 1,
 //   whatsapp: "https://chat.whatsapp.com/F9HTmRc51iMIeN2GJ276pi",
    mobile: UPI_NO.NAVEEN,
  },
  {
    name: "Meme Template",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.SABETHA,
    fee: 20,
    minTeam: 1,
    maxTeam: 1,
 //   whatsapp: "https://chat.whatsapp.com/JKpqMFifJdlGwwDEQJqqjW",
    mobile: UPI_NO.SABETHA,
  },*/
];

export const UPI_ID_MAIN = "q355562908@ybl";
