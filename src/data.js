import yellow from "./assets/yellow.png";
import green from "./assets/green.png";
import red from "./assets/red.png";

export const selects = [
  {
    title: "Priority",
    label: "Select",
    disable: "Priority",
    errors:"priority",
    item1: "Low",
    item2: "Normal",
    item3: "High",
    item: ["low", "Normal", "High"],
    image: [yellow, green, red],
  },
  {
    title: "Status",
    label: "Select Status",
    disable: "Select Status",
     errors:"status",
    item: ["Pending", "Active", "Closed"],
    color: ["#FFB72A", "#74D453", "#F25353"],
  },
  {
    title: "Assignee",
    label: "Select",
    errors:"assignee",
    disable: "Assignee",
    item:["Syed Muqarrab","Saud Haris","Saeed"]
  },
];
