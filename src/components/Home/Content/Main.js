import React from 'react';
import styled from 'styled-components';

import Slider from '../Sliding/Slider'

const Base = styled.div`
    margin: 10px;
`

export default function Developer() {
    return (
        <Base>
            <Slider />
        </Base>
    )
}