import { Injectable } from '@angular/core'
import { Api } from './api'

@Injectable()
export class Common {

  activeMenu: boolean                 // 开启侧栏
  mainTab: string                     // 首页标签
  menu: Array<{                       // 侧栏导航
    name: string,                     // 名称
    url: string                       // 路径
  }>

  constructor (
    public api: Api
  ) {
    this.activeMenu = false
    this.mainTab = ''
    this.menu = []
    window['cordova'] || this.ngOnInit()
  }

  // 测试数据
  ngOnInit () { }

  doAppInit () {
    return Promise.resolve((() => {
      this.mainTab = 'primary'
      this.menu = [
        { name: '列表页', url: '/list' },
        { name: '详细页', url: '/detail' }
      ]
    })())
  }

}
