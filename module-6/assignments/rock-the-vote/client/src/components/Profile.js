import React, { useContext, useState } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'
import { FaMicrophone } from 'react-icons/fa'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

const IssuesLayout = styled.div`
    display: flex;
    padding: 0 15px;
    justify-content: center;
    background: #DAE0E6;

    .layout-container {
        display: grid;
        width: 100%;
        max-width: 1028px;
        grid-template-columns: 2fr 1fr;
        grid-gap: 25px;
    }

    .first-column {
        div {
            margin-top: 15px;
        }
    }

    .second-column {
        div {
            background: white;
        }

        .button-container {
            width: 95%;
            display: flex;
            margin: auto;
        }

        button {
            width: 100%;
            text-align: center;
            margin: auto;
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

    div {
        padding: 0 5px;
    }

    input {
        
    }
`

const SortingDiv = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    width: 100%;
    background: white;

    p { 
        margin: 0;
    }

    input {
        
    }
`

export default function Profile() {
    const [toggle, setToggle] = useState(false)

    const {
        user: { username }, addIssue, issues
    } = useContext(UserContext)
    return (
        <IssuesLayout>
            <div className="layout-container">
                <div className="first-column">
                    {!toggle? 
                    (
                    <div>
                        <CreateNewIssueDiv>

                            <div>
                                <FaMicrophone />
                            </div>
                            <input type="text" placeholder="Create New Issue" onClick={() => setToggle(true)}/>
                        </CreateNewIssueDiv>
                        <SortingDiv>
                            <p>Change how your issues are displayed:</p>
                            <hr/>

                        
                        </SortingDiv>
                        <IssueList issues={issues} />
                    </div>
                    ) 
                    : <Redirect push to="/submit" />
                  
                    }
                </div>
                <div className="second-column">
                    <div>
                        <p>Today's top issues</p>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <div className="button-container">
                            <button>View All</button>

                        </div>
                    </div>
                    <div>
                        <p>Rules Posting to Rock The Vote</p>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                </div>
            </div>

    
        </IssuesLayout>
    )
}