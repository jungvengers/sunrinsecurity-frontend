import React from 'react';
import styled from 'styled-components';


const Base = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 80px;
`

const ProfileBase = styled.div`
    width: 90%;
    display: flex;
    margin: 10px;
    padding-top: 30px;
`

const TextBase = styled.div`
    padding-left: 50px;
    display: flex;
    flex-direction: column;
`

const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
`

const Names = styled.div`
    font-size: 20px;
`

const Field = styled.div`
    display: flex;
    font-size: 30px;
`

export default function Developer() {
    const names = [ "YeonGyu Kim", "Seungwon Nam", "Gangyeon Jo", "Heewon Seo"]
    const img = ["https://avatars.githubusercontent.com/u/11153873?v=4", "https://avatars.githubusercontent.com/u/50164908?v=4", "https://avatars.githubusercontent.com/u/49161970?v=4", "https://avatars.githubusercontent.com/u/45059120?v=4"]

    return (
        <Base>
            <ProfileBase>
                <ProfileImg src={img[0]} />
                <TextBase>
                    <Names>{names[0]}</Names>
                    <Field>Back</Field>
                </TextBase>
            </ProfileBase>
            <ProfileBase>
                <ProfileImg src={img[1]} />
                <TextBase>
                    <Names>{names[1]}</Names>
                    <Field>Back</Field>
                </TextBase>
            </ProfileBase>
            <ProfileBase>
                <ProfileImg src={img[2]} />
                <TextBase>
                    <Names>{names[2]}</Names>
                    <Field>Front</Field>
                </TextBase>
            </ProfileBase>
            <ProfileBase>
                <ProfileImg src={img[3]} />
                <TextBase>
                    <Names>{names[3]}</Names>
                    <Field>Front</Field>
                </TextBase>
            </ProfileBase>
        </Base>
    )
}