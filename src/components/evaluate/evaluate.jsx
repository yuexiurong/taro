import Taro,{Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import './evaluate.less'
class Evaluate extends Component{
  constructor(){
    super(...arguments);
    this.state={
      evaluateList:[
        {title:'分量很足，味道也不错',time:'2020-07-15'},
        {title:'包装不错，味道也很好',time:'2020-07-15'},
        {title:'很好吃，量大',time:'2020-08-05'},
        {title:'分量很足，味道也不错',time:'2020-10-15'},
        {title:'很好吃，量大',time:'2020-10-20'},
        {title:'包装不错，味道也很好',time:'2020-11-30'}
      ]
    }
  }
  render(){
    let {evaluateList} = this.state;
    return(
      <View className="evaluate">
      {
        evaluateList.map(item=>{
          return(
            <View className="content">
              <Text>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
          )
        })
      }
      </View>
    )
  }

}
export default Evaluate