import React from 'react'


class Status extends React.Component{
    constructor(){
        super()
        this.activateEditMode=this.activateEditMode.bind(this)
    }
    state={
        editMode:false,
    }
   
    componentDidUpdate(prevProps,prevState){
      console.log("ASDSA")
      debugger;
      if(prevProps.status!==this.props.status){
        this.setState({status:this.props.status})
      }
   
    }
    activateEditMode(){
      this.setState({editMode:true})
    }
    deactivateEditMode=()=>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e)=>{
      this.setState({status:e.currentTarget.value});
    
    }
  render(){
      return(
          <>
       {!this.state.editMode &&
      <div>
      <span onClick={this.activateEditMode}>{this.state.status}</span>
    </div>
  }{this.state.editMode &&
    <div>
      <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} placeholder={this.state.status}/> 
    </div>
  }
      </>
      )
  }
}
export default Status