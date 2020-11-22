import React from 'react';
import GithubWhiteLogo from '../../assets/images/github-white-logo.png';
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="About-outer-div">
                    <img src={GithubWhiteLogo} alt="git-logo"/>
                    <h6>GitHub is a code hosting platform for version control and collaboration.
                         It lets you and others work together on projects from anywhere. A repository is like a folder for your project. Your project's repository contains all of your project's files and stores each file's revision history.
                         For user-owned repositories, you can give other people collaborator access so that they can collaborate on your project.In search bar of Home page you can type the username to view
                         all their repositories and other imformation. You also get a clone link through which you can clone that particular project on your local system. Do visit Home page and give it a try.</h6>
                    <div>
                    <Link to="/"><button>Home</button></Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;