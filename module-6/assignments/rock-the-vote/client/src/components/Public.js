import React, { useContext, useState, useEffect } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'
import { FaMicrophone, FaFileImage, FaLink, FaArrowDown } from 'react-icons/fa'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import Background from './rockthevoteimage.jpeg'
import { useHistory } from 'react-router-dom'
import userAxios from '../config/requestinterceptor'



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
    .second-column div {
        background: white;
    }

    .second-column {
        display: none;
    }

    .fa-icon {
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


const SortingDiv = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    background: white;

    p { 
        margin: 0;
    }

    input {
        
    }
`


export default function Public() {
    const [toggle, setToggle] = useState(false)
    const [issues, setIssues] = useState([])


    const history = useHistory()

    function redirect(extension) {
        history.push(`/submit/${extension}`)
    }

    useEffect(() => {
        userAxios.get('/api/issue')
            .then(res => {
                console.log('res', res);
                setIssues(res.data)
            })
    }, [])

    return (
        <IssuesLayout>
            <div className="grid-parent">
                <div className="first-column">
                {!toggle? 
                    (
                        <div className="create-new-issue-container">
                        <CreateNewIssueDiv>

                            <FaMicrophone className="fa-icon" />

                                <input type="text" placeholder="Create New Issue" onClick={() => setToggle(true)}/>

                            <FaFileImage className="fa-icon" onClick={() => redirect('image')} />

                            <FaLink className="fa-icon" onClick={() => redirect('link')}/>

                        </CreateNewIssueDiv>
                       
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
