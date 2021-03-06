import Taro,{Component} from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import {getAllFoodInfo,getEvent} from '../../utils/common'
import './bottom.less'
let events=getEvent();
class Bottom extends Component{
  constructor(){
    super(...arguments);
    this.state={
      Num:0,
      sendProce:3,
      supportTakeBySelf:false,
      sendMustPrice:20,//满多少起送
      allPrice:0,//总价
    };
  }
  componentDidMount(){
    //要获取整体的存储的菜品数据 进行计算
    //获取计算好的 设置给state
    let {allPrice,allNum}=getAllFoodInfo();
    this.setState({Num:allNum,allPrice:allPrice});
    events.on("addcut",()=>{
      let {allPrice,allNum}=getAllFoodInfo();
      this.setState({Num:allNum,allPrice:allPrice});
    })
  }
  render(){
    let {allPrice,Num,sendProce,supportTakeBySelf,sendMustPrice} = this.state;
    return(
      <View className="bottom">
        <View className="bottom_body">
          {Num?<Text className="num">{Num}</Text>:null}
          <Image className="store_img" src={Num?require('../../assets/img/shoppingM.png'):require('../../assets/img/shoppingK.png')}></Image>
          <View className="info">
            {allPrice?<Text className="price">￥{allPrice}</Text>:<Text>{sendProce?"另需配送费￥"+sendProce+" | ":""}</Text>}
            <Text>{supportTakeBySelf?"支持自取":"不支持自取"}</Text>
          </View>
          <View className="submit">{allPrice>=sendMustPrice?<Text className="goPay">去结算</Text>:<Text>{sendMustPrice?"￥"+sendMustPrice+"起送":""}</Text>}</View>
        </View>
      </View>
    )
  }
}
export default Bottom