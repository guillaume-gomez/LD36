export const StringDialog = {
  onComputer: "Press enter to use the computer",
  typeRecordDialog: "Press enter to leave",
  useTypeRecorder: "Use type recorder",
  typePassword:"Enter the password"
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
  x: 200,
  y: FloorY - 64/2
}


export const HeightTypeRecorder = 63 / 2;
export const HeightComputer = 63 / 2;

export const Code = "9356";
export const StyleRef = { font: "bold 8px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
export const Style = { font: "bold 15px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };