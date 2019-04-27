import React,{Component} from 'react';
import Axios from 'axios';

class Apicall extends Component{

  componentWillMount(){
    this.getReddit();
  }

  getReddit(){
    var posts=[];
    Axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
        .then( res =>{
          posts=res.data.data.children.map(d => d.data);
          this.setState({posts});
        })

  }

  constructor(props){
    super(props);

    this.state ={
      posts: [],
      subr:'space'
    };
    this.getReddit=this.getReddit.bind(this);
  }
  render(){
    return(
      <div>
        <h1> {`/r/${this.state.subr}`}</h1>
        <ul>

            {this.state.posts.map(post =>{
            return <li key={post.id}> {post.title} </li>
          })}

        </ul>
       </div>
    )
  }
}

export default Apicall;
