import { IoMusicalNotesOutline } from "react-icons/io5";
import { GiPresent } from "react-icons/gi";
import { FaShieldHalved } from "react-icons/fa6";
import { HiMiniLanguage } from "react-icons/hi2";

export const SAKURA_API_URL = "http://localhost:5151";
export const APP_NAME = "SAKURA";
export const INVITE_URL =
  "https://discord.com/api/oauth2/authorize?client_id=1132975288142274720&permissions=8&scope=bot%20applications.commands";
export const DISCORD_URL = "https://discord.gg/eGBE5ehj6j";

export const features = [
  {
    icon: <IoMusicalNotesOutline />,
    title: "เล่นเพลงเพื่อคุณ",
    description: "เล่นเพลงด้วยเสียงเพลงแบบไม่มีสะดุด และคุณภาพสูงให้กับคุณ",
  },
  {
    icon: <GiPresent />,
    title: "แจกของรางวัล",
    description: "แจกของรางวัลให้ทุกคนในเซิร์ฟเวอร์ของคุณ",
  },
  {
    icon: <FaShieldHalved />,
    title: "ปลอดภัย",
    description: "ข้อมูลส่วนตัวของคุณจะถูกเก็บอย่างปลอดภัย",
  },
  {
    icon: <HiMiniLanguage />,
    title: "รองรับหลายภาษา",
    description: "บอทของเรารองรับภาษาอังกฤษและไทย",
  },
];
