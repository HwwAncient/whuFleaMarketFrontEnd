var ask_Database = [{
    id: "1",
    owner: {
      id: "1",
      name: "张三",
      headSrc: "/images/home/user-image1.jpg",
      school: "计算机学院"
    },
    address: "C7舍",
    time: "8:40",
    content: "求乒乓球拍 全新",
    status: 0,
    category: 1,
    mode: 0
  },
  {
    id: "2",
    owner: {
      id: "1",
      name: "李四",
      headSrc: "/images/home/user-image2.jpg",
      school: "国家网络安全学院"
    },
    address: "C4舍",
    time: "9:50",
    content: "收托福词汇书 新旧均可",
    status: 0,
    category: 1,
    mode: 0
  },
  {
    id: "3",
    owner: {
      id: "1",
      name: "王五",
      headSrc: "/images/home/user-image3.jpg",
      school: "测绘学院学院"
    },
    address: "13舍",
    time: "11:50",
    content: "收安卓机 价格好商量",
    status: 0,
    category: 1,
    mode: 0
  }
]

const deal_Database = [{
    id: "4",
    owner: {
      id: "11",
      name: "小明",
      headSrc: "/images/home/user-image1.jpg",
      school: "国际软件学院"
    },
    address: "11舍",
    time: "10:30",
    title: "全套书柜",
    description: "刚买不久，全新",
    images: [
      "/images/home/deal/addaptor2.jpg",
      "/images/home/deal/book.jpg",
      "/images/home/deal/bookshelf.jpg"
    ],
    status: 0,
    category: 1,
    mode: 1,
    isCollected: true
  },
  {
    id: "5",
    owner: {
      id: "12",
      name: "小红",
      headSrc: "/images/home/user-image2.jpg",
      school: "计算机学院"
    },
    address: "C7舍",
    time: "8:40",
    title: "《活着》",
    description: "刚买不久，全新",
    images: [
      "/images/home/deal/bookshelf.jpg",
      "/images/home/deal/addaptor2.jpg",
      "/images/home/deal/book.jpg",
    ],
    status: 0,
    category: 2,
    mode: 2,
    isCollected: true
  },
  {
    id: "6",
    owner: {
      id: "13",
      name: "小白",
      headSrc: "/images/home/user-image3.jpg",
      school: "经济管理学院"
    },
    address: "C4舍",
    time: "12:40",
    title: "乒乓球拍",
    description: "刚买不久，全新",
    images: [
      "/images/home/deal/book.jpg",
      "/images/home/deal/bookshelf.jpg",
      "/images/home/deal/addaptor2.jpg",
    ],
    status: 0,
    category: 3,
    mode: 1,
    isCollected: false
  }
]

module.exports = {
  askList: ask_Database,
  dealList: deal_Database
}