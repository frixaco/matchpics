import p1 from "./angry.jpg";
import p2 from "./cry.jpg";
import p3 from "./happy.jpg";
import p4 from "./laugh.jpg";
import p5 from "./nerd.jpg";
import p6 from "./neutral.jpg";
import p7 from "./sad.jpg";
import p8 from "./surprise.jpg";

export function shufflePics(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const pics = [
  { src: p1, face: "angry" },
  { src: p1, face: "angry" },
  { src: p2, face: "cry" },
  { src: p2, face: "cry" },
  { src: p3, face: "happy" },
  { src: p3, face: "happy" },
  { src: p4, face: "laugh" },
  { src: p4, face: "laugh" },
  { src: p5, face: "nerd" },
  { src: p5, face: "nerd" },
  { src: p6, face: "neutral" },
  { src: p6, face: "neutral" },
  { src: p7, face: "sad" },
  { src: p7, face: "sad" },
  { src: p8, face: "surprise" },
  { src: p8, face: "surprise" },
];

shufflePics(pics);

export default pics;
