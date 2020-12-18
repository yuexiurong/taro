import Taro,{Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import './introduce.less'

class Introduce extends Component{
  constructor(){
    super(...arguments);
    this.state={
      introduceInfo:[
        {
          address:"北京市东城区和平里东街11号创新楼B座B1-A号",
          daan:"查看食品安全档案",
          peisongfangshi:"配送服务:由美团快送提供配送服务",
          peisongtime:"00:00-23:59",
          service:"商家服务"
        }
      ]
    }
  }
  render(){
    let {introduceInfo} = this.state;
    return(
      <View className="introduce">
        <View className="info">{introduceInfo[0].address}</View>
        <View className="info">{introduceInfo[0].daan}</View>
        <View className="info">{introduceInfo[0].peisongfangshi}</View>
        <View className="info">{introduceInfo[0].peisongtime}</View>
        <View className="info">{introduceInfo[0].service}</View>
      </View>
    )
  }

}
export default Introduce