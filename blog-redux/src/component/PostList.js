import React from 'react';
import {connect} from 'react-redux';
import {fetchPostAndUsers} from '../actions';

import UserHeader from "./UserHeader";


class PostList extends React.Component {


    componentDidMount(){
        this.props.fetchPostAndUsers();
    }

    renderList(){
        return this.props.posts.map(post =>{
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="content">
                            <div className="description">
                                <h1>{post.title}</h1>
                                <h4>{post.body}</h4>
                            </div>

                            <UserHeader userId={post.userId} key={post.id} />
                        </div>
                    </div>

                </div>
            )
        })
    }
    render(){
        
        return <div className="ui relaxed divided list">
              {this.renderList()}  
        </div>

    }
};
 
const mapStateToProps = (state) =>{
    return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPostAndUsers})(PostList);