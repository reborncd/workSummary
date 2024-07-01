enum MessageType {
  IMAGE = 'Image',
  VIDEO = 'Video',
}
type Message = {
  id: number,
  type: string,
  msg: string
}

let arr: Message[] = [
  {
    id: 1,
    type: MessageType.IMAGE,
    msg: '我是1 - I'
  },
  {
    id: 2,
    type: MessageType.VIDEO,
    msg: '我是2 - V'
  },
]

function schMsg(condition: MessageType): Message[] // 函数重载
function schMsg(condition: number): Message | undefined // 函数重载
function schMsg(condition: MessageType | number): Message | Message[] | undefined {
  // 实现签名 这里的类型必须兼容上面重载的所有类型
  if (typeof condition === 'number') {
    return arr.find(msg => condition === msg.id)
  } else {
    return arr.filter(msg => condition === msg.type)
  }
}
