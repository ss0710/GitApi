import React from 'react';

class List extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="list-div">
                <h2>Total Repositories: {this.props.data.length}</h2>
                {
                this.props.data.map((data,i)=>{
                        return <div  key={i}>
                           <div className="list-inner-div">
                           <h2>{data.name}</h2>
                           <h6>branch:- {data.default_branch}</h6><br/>
                           <h5>Created at:- {data.created_at}</h5>
                           <h5>Language:- {data.language}</h5>
                           <h4><a href={data.html_url} target="_blank">Click to view Project</a></h4>
                           <p>Clone URL:- {data.clone_url}</p>
                        </div>
                        </div>
                    })
                }
                </div>
            </React.Fragment>
        );
    }
}

export default List;