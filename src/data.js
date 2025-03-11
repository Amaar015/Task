import yellow from "./assets/yellow.png";
import green from "./assets/green.png";
import red from "./assets/red.png";

export const selects = [
  {
    title: "Priority",
    label: "Select",
    disable: "Priority",
    errors: "priority",
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
    errors: "status",
    item: ["Pending", "Active", "Closed"],
    color: ["#FFB72A", "#74D453", "#F25353"],
  },
  {
    title: "Assignee",
    label: "Select",
    errors: "assignee",
    disable: "Assignee",
    item: ["Syed Muqarrab", "Saud Haris", "Saeed"],
  },
];

export const ExistingTask = [
  {
    id: 1,
    name: "Create Mobile App",
    duedate: "2025-02-19",
    assignee: "Saud Shaikh",
    priority: "Low",
    image: yellow,
    status: "Pending",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
    assignedBy: "Majid Ali",
  },
  {
    id: 2,
    name: "Website Design",
    duedate: "25 jan 2024",
    assignee: "Mohammad Zubair",
    priority: "High",
    image: red,
    status: "Active",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 3,
    name: "UI UX Design",
    duedate: "20 jan 2024",
    assignee: "Mohammad Mubashir",
    priority: "Normal",
    image: green,
    status: "Closed",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 4,
    name: "iOS Development",
    duedate: "25 jan 2024",
    assignee: "Sahir Shah",
    priority: "Low",
    image: yellow,
    status: "Pending",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 5,
    name: "Test Api's",
    duedate: "20 jan 2024",
    assignee: "Syed Muqarrab",
    priority: "High",
    image: red,
    status: "Active",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 6,
    name: "Plugin Development",
    duedate: "20 jan 2024",
    assignee: "Mohammad Saeed",
    priority: "Normal",
    image: green,
    status: "Closed",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 7,
    name: "Database Desinger",
    duedate: "20 jan 2024",
    assignee: "Saud Shaikh",
    priority: "Low",
    image: yellow,
    status: "Pending",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 8,
    name: "MERN Stack Developer",
    duedate: "25 jan 2024",
    assignee: "Mohammad Zubair",
    priority: "High",
    image: red,
    status: "Active",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 9,
    name: "SQA",
    duedate: "20 jan 2024",
    assignee: "Mohammad Mubashir",
    priority: "Normal",
    image: green,
    status: "Closed",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 10,
    name: "Python Developer",
    duedate: "25 jan 2024",
    assignee: "Mahmood Rasheed",
    priority: "Low",
    image: yellow,
    status: "Pending",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 11,
    name: "Api's Integration",
    duedate: "20 jan 2024",
    assignee: "Syed Muqarrab",
    priority: "High",
    image: red,
    status: "Active",
    assignedBy: "M Zubair",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
  {
    id: 12,
    name: "Flutter Development",
    duedate: "20 jan 2024",
    assignee: "Mohammad Saeed",
    priority: "Normal",
    image: green,
    status: "Closed",
    assignedBy: "Majid Ali",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora perferendis, provident placeat eius eos, iusto accusamus sequi et aut corrupti expedita iste! Possimus odit quidem odio repudiandae natus. Similique. Inventore corrupti, aliquam consequatur laborum fugit quasi incidunt blanditiis vel totam, delectus maiores molestias tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste, aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore, molestiae voluptatibus repellat minus.",
  },
];
