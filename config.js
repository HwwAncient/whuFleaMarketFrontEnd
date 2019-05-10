const config = {
  api_base_url: 'http://localhost:8080/whufleamarket/',
  appId: "wx01bcd217f96b83a7",
  appSecret: "ef125c4f7b194823b4986841e4ec7720",
  decrypt_base_url: "https://api.weixin.qq.com/sns/jscode2session"
  // api_base_url: 'http://bl.7yue.pro/v1/',
  // appkey: "JieympC4hVYHYYtm",
}

const proxyItems = [
  '文理学部食堂',
  '信息学部食堂',
  '工学部食堂',
  '文理学部珞珈超市',
  '信息学部珞珈超市',
  '工学部珞珈超市'
]


export {
  config,
  proxyItems
}