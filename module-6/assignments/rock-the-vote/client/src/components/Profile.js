import React, { useContext, useState, } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { FaMicrophone, FaFileImage, FaLink } from 'react-icons/fa'
import IssueList from './IssueList'
import styled from 'styled-components'
import Background from './rockthevoteimage.jpeg'




const IssuesLayout = styled.div`
    padding: 0 15px;
    background: #DAE0E6;
    min-height: 100vh;
    background-image: url("${Background}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    p {
        margin: 0;
    }

    .second-column {
        margin: 20px 0;
    }

    .second-column {
        display: none;
    }

    .fa-icon {
        cursor: pointer;
        margin: 0 5px;
    }

    .create-new-issue-container {
        margin: 20px 0;
    }

    @media only screen and (min-width: 768px) {
        .grid-parent {
            width: 100%;
            align-self: center;
            max-width: 915px;
    
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-gap: 20px;
        }

        .second-column {
            display: block;
        }


        .profile-container {
            border-radius: 5px;
        }

        .profile-background {
            background: #33a8ff;
            border-radius: 5px 5px 0 0;
            height: 85px;
        }

        .profile-information-container {
            background: white;
            border-radius: 0 0 5px 5px;
            padding: 8px;
        }

        .profile-picture {
            height: 70px; 
            width: 70px;
            background: grey;
            margin-top: -60px;
            border-radius: 50%;
        }
    }
`


const CreateNewIssueDiv = styled.div`
    border: 1px solid #DCDCDC;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    background: white;
    margin-bottom: 20px;
    border-radius: 5px;

    div {
        padding: 0 5px;
    }

    input {
        flex: 1;
        margin-right: 10px;
        font-size: 1.2em;
        line-height: 1.5em;
        padding-left: 10px;
    }
`


export default function Public() {
    const [toggle, setToggle] = useState(false)

    const {
        issues, 
    } = useContext(UserContext)

    const history = useHistory()

    function redirect(extension) {
        history.push(`/submit/${extension}`)
    }


    const sortedIssues = issues.sort((a, b) => {
        return b.voteCount - a.voteCount
    })

    return (
        <IssuesLayout>
            <div className="grid-parent">
                <div className="first-column">
                {!toggle? 
                    (
                        <div className="create-new-issue-container">
                        <CreateNewIssueDiv>

                            <FaMicrophone className="fa-icon" onClick={() => redirect('submit')}/>

                                <input type="text" placeholder="Create New Issue" onClick={() => setToggle(true)}/>

                            <FaFileImage className="fa-icon" onClick={() => redirect('image')} />

                            <FaLink className="fa-icon" onClick={() => redirect('link')}/>

                        </CreateNewIssueDiv>
                       
                        <IssueList issues={sortedIssues} />
                    </div>
                    ) 
                    : <Redirect push to="/submit" />
                    
                }
                </div>
                <div className="second-column">
                    <div className="profile-container">
                        <div className="profile-background">
                        </div>
                        <div className="profile-information-container">
                            <div className="profile-picture" ></div>
                            profile information
                        </div>
                    </div>                       
                </div>
            </div>
        </IssuesLayout>
    )
}
