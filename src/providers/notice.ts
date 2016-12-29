import { Injectable } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Api } from './api'

@Injectable()
export class Notice {

  list: Array<{                       // 列表
    id: number,                       // 编号
    title: string,                    // 标题
    content: string                   // 内容
  }>
  selected: {                         // 详情
    id: number,                       // 编号
    title: string,                    // 标题
    content: string                   // 内容
  }

  constructor (
    public api: Api,
    public platform: Platform
  ) {
    this.list = []
    this.selected = {
      id: 0,
      title: '',
      content: ''
    }
    this.platform.is('cordova') || this.ngOnInit()
  }

  // 测试数据
  ngOnInit () {
    this.list = [
      { id: 1, title: '我是标题-1', content: '我是内容-1' },
      { id: 2, title: '我是标题-2', content: '我是内容-2' }
    ]
  }

  // 转义数据格式
  makeNotice (data) {
    return {
      id: data.id,
      title: data.title,
      content: data.content
    }
  }

  doUpdateList () {
    return this.api
      .get('/notice')
      .then(res => res.map(this.makeNotice.bind(this)))
      .then(list => this.list = list)
  }

}
