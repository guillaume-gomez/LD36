export const StringDialog = {
  onComputer: "Press enter to use the computer",
  typeRecordDialog: "Press enter to leave",
  useTypeRecorder: "Use type recorder",
  typePassword:"Enter the password : ",
  vhsPicked: "You picked the vhs cassette"
};

export const TextPosition = {
  x: 100,
  y: 20,
  x0: 0,
  y0: 400,
  x1:200,
  y1: 100
};

export const FloorY = TextPosition.y0 + 17;

export const TypeRecorderPosition = {
  x: 1400,
  y: FloorY
}

export const ComputerPosition = {
  x: 600,
  y: FloorY
}

export const PositionAfterComputer = {
  x: 600,
  y: FloorY
};

export const DoorPosition = {
  x: 1537,
  y: FloorY - 64/2 - 1
}

export const VhsPosition = {
  x: 1530,
  y: 238
}

export const offsetTypeRecorderImg = 10;
export const HeightTypeRecorder = (52 - offsetTypeRecorderImg) / 2;
export const HeightComputer = 63 / 2;

export const Code = "9356";
export const StyleRef = { font: "bold 8px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
export const Style = { font: "bold 15px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };