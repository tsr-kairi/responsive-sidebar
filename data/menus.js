import {
  MdDashboard,
  MdChat,
  MdOutlineAccountTree,
  MdDateRange,
  MdSearch,
} from "react-icons/md";
import { AiOutlineBarChart, AiFillFolderOpen, AiOutlineSetting } from "react-icons/ai";

const Menus = [
  { title: "Dashboard", logo: <MdDashboard />, path: "/dashboard" },
  { title: "Inbox", logo: <MdChat />, path: "/inbox" },
  { title: "Account", logo: <MdOutlineAccountTree />, path: "/account", gap: true },
  { title: "Schedule", logo: <MdDateRange />, path: "/schedule" },
  { title: "Search", logo: <MdSearch />, path: "/search" },
  { title: "Analytics", logo: <AiOutlineBarChart />, path: "/analytics" },
  { title: "Files", logo: <AiFillFolderOpen />, path: "/files", gap: true },
  { title: "Setting", logo: <AiOutlineSetting />, path: "/setting" },
];

export default Menus;
