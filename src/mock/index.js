import mockjs from 'mockjs'

mockjs.setup({
  timeout: '100-200',
})

function CreateMessage(id = mockjs.Random.id()) {
  // 消息类型（text:文本; pic:图片; system:系统消息）
  let type = mockjs.Random.pick(['text', 'pic', 'system'])
  let content = mockjs.Random.cparagraph()
  // let content = `笔试题目：写一个类似微信的渲染消息流的组件，
  // 支持不同类型：1.文本 2.图片 3.系统消息，如加某个人到群组里，撤销消息；<br>
  // 要求考虑可扩展性，具体UI可以简单实现。<br>
  // Tips：<br>
  // 1.不要使用switch/case/if/else判断消息类型<br>
  // 2.不要把所有消息类型及逻辑都放在一个组件里<br>
  // <br>
  // 重点考察组件设计和代码的扩展能力`

  if (type === 'pic') {
    content = mockjs.Random.image()
  } else if (type === 'system') {
    content = '系统消息'
  }

  return mockjs.mock({
    id,
    type,
    'isUser|1': ['0', '1'],
    avatar: require('../assets/img/avatar.png'),
    content,
  })
}

mockjs.mock(/queryChatList/, (options) => {
  let url = options.url
  let pageNo = +url.match(/pageNo=(\d+)/)[1]
  let pageSize = 10
  let totalSize = 56
  let totalPage = Math.ceil(totalSize / pageSize)
  let data = []
  let len = pageSize

  console.log(options, pageNo)

  if (pageNo > totalPage) len = 0
  else if (pageNo === totalPage) len = totalSize - (pageNo - 1) * pageSize

  for (let i = 0; i < len; i++) {
    data.push(CreateMessage((pageNo - 1) * pageSize + i))
  }

  return {
    chatList: data,
    totalPage,
  }
})

mockjs.mock(/queryNewChatList/, () => {
  let data = []

  for (let i = 0; i < 5; i++) {
    data.push(CreateMessage())
  }

  return {
    chatList: data,
  }
})
