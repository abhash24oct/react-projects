import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App =() =>{
    return (
        <div className="ui container comments" >
            <ApprovalCard>
                <div>
                    <h4>
                        Warning !!
                    </h4>
                    Are u sure you want to do this !!
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author='Sam' 
                                timeAgo="Yesterday at 05:45 PM" 
                                commentText={Faker.lorem.text()}/>
            </ApprovalCard>    
            <ApprovalCard >
                 <CommentDetail author="Peter" timeAgo="Today at 02:45 PM"  commentText={Faker.lorem.text()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Derek" timeAgo="Yesterday at 12:45 PM"  commentText={Faker.lorem.text()}/>
            </ApprovalCard>      
            <ApprovalCard >   
                <CommentDetail author="Runben" timeAgo="Today at 11:45 PM"  commentText={Faker.lorem.text()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Robin"timeAgo="Yesterday at 12:45 PM"  commentText={Faker.lorem.text()} />
            </ApprovalCard>
            
     
        </div>
    );
}


ReactDOM.render(<App />,document.querySelector("#root"));