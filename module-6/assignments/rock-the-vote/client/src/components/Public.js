import React, { useState, useEffect } from 'react'
import IssueList from './IssueList'
import { FaMicrophone, FaFileImage, FaLink } from 'react-icons/fa'
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

        .about-rockthevote ol {
            padding: 0 25px;
        }

        .site-info ol {
            padding: 0 25px;
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
    const [issues, setIssues] = useState([])

    const history = useHistory()

    function redirect(extension) {
        history.push(`/submit/${extension}`)
    }

    useEffect(() => {
        userAxios.get('/api/issue')
            .then(res => {
                setIssues(res.data)
            }).catch(err => {
                console.log(err);
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
                    <div className="about-rockthevote">
                        <div>About Rock the Vote</div>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                    <div className="site-info">
                        <div>Site Rules for Rock the Vote</div>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                    <div className="various-links">
                       various links

                    </div>
                </div>
            </div>
        </IssuesLayout>
    )
}
