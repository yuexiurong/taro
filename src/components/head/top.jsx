import Taro,{Component} from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import './top.less'
class Top extends Component{
  render(){
    return(
      <View className="top">
        <View className="left">
          <Image className="img" src={require("../../assets/img/back.png")}/>
        </View>
        <View className="right">
          <Image className="img" src={require("../../assets/img/search.png")}/>
          <Image className="img" src={require("../../assets/img/favorite.png")}/>
          <Image className="img" src={require("../../assets/img/add-account.png")}/>
          <Image className="img" src={require("../../assets/img/Category.png")}/>
        </View>
      </View>
    )
  }
}
export default Top