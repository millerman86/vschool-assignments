import React, {useContext} from 'react'
import IssueForm from './IssueForm'
import { UserContext } from '../context/UserProvider'
import styled from 'styled-components'


const IssuesLayout = styled.div`
    display: flex;
    padding: 0 15px;
    justify-content: center;
    background: #DAE0E6;
    min-height: 100vh;

    .rules-for-posting {
        margin-top: 40px;
    }

    .rules-for-posting ol {
        padding: 0 25px;
    }

    .layout-container {
        display: grid;
        width: 100%;
        max-width: 1028px;
        grid-template-columns: 2fr 1fr;
        grid-gap: 25px;
    }

    .first-column {
        > div {
            margin-top: 15px;
        }
    }

    .second-column {
        > div {
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

export default function Submit() {
    const {addIssue} = useContext(UserContext)

    return (
        <IssuesLayout>
            <div className="layout-container">
                <div className="first-column">
                    <h3>Add an Issue</h3>
                    <hr />
                    <IssueForm addIssue={addIssue} /> 
                    <h3>Your Political Issues</h3>
                </div>
                <div className="second-column">
                    <div className="rules-for-posting">
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