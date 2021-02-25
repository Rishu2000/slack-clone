import React from 'react'
import styled from "styled-components"

function ChatMessage() {
    return (
        <Container>
            <UserAvtar>
                <img src="https://randomuser.me/api/portraits/women/43.jpg"/>
            </UserAvtar>
            <MessageContent>
                <Name>
                    Rishav Kumar
                    <span>2/23/2021 6:00 AM</span>
                </Name>
                <Text>
                    How is Channel
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding:8px 20px;
    display:flex;
    aling-items:center;
`

const UserAvtar = styled.div`
    width:36px;
    height:36px;
    border-radius:20px;
    overflow:hidden;
    margin-right:8px;

    img{
        width:100%;
    }
`

const MessageContent = styled.div`
    display:flex;
    flex-direction:column;
`

const Name = styled.span`
    font-weight:900;
    font-size:15px;
    line-height:1.4;
    span{
        margin-left:8px;
        font-weight:400;
        color: rgb(97,96,97);
        font-size:13px;
    }
`

const Text = styled.span``
