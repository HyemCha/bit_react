import React,{Component} from 'react';
import '../App.css';

class TwoApp extends Component{
    constructor(props){
        super(props);  
        this.state={
            number:0
        }  
        //이벤트 등록
        this.numberIncre = this.numberIncre.bind(this);
        this.numberDecre = this.numberDecre.bind(this);
    }

    //이벤트 함수
    numberIncre = () =>{
        if(this.state.number===10){
            alert("10까지만 증가됨!!!");
            return;
        }
        this.setState({
            number:this.state.number + 1
        })
    }
    numberDecre = () =>{
        if(this.state.number === 0){
            alert("0까지만 감소됨!!!");
            return;
        }
        this.setState({
            number:this.state.number - 1
        })
    }
    render(){
        return(
            <div>
                <h3 className='alert alert-success'>TwoApp(클래스타입)</h3>
                <div className='number'>{this.state.number}</div>
                <button type="button" style={{marginLeft:'70px'}}
                onClick={this.numberIncre}>증가</button>
                <button type="button" style={{marginLeft:'70px'}}
                onClick={this.numberDecre}>감소</button>
            </div>
        )
    }
}

export default TwoApp;