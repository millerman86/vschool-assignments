import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserProvider'
import styled from 'styled-components'
import { useParams} from 'react-router-dom'
import Background from '../rockthevoteimage.jpeg'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import userAxios from '../../config/requestinterceptor'
import CommentList from '../Comment/CommentList'
import parse from 'html-react-parser'

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

    .first-column {
        margin: 20px 0;
        background: white;
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



export default function Profile() {
    const [toggle, setToggle] = useState(false)
    const history = useHistory()
    const [issue, setIssue] = useState('')
    
    const {
        issues
    } = useContext(UserContext)
    
    const { issueId } = useParams()
    function getComments(issueId) {
        userAxios
          .get(`/api/issue/user/${issueId}`)
          .then(res => {
              setIssue(res.data.issue)
        })
    }

    useEffect(() => {
        getComments(issueId)
    }, [])

    return (
        <IssuesLayout>
            <div className="grid-parent">
                <div className="first-column">
                    <div className="comment">issue</div>
                    <div>this is the add comment box</div>
                    <span>{parse(issue)}</span>
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
