import React, {Fragment} from 'react';
import styled from 'styled-components'

const CardStack = (props) => (
    <div style={{position: "relative"}}>
        {props.children.map((card, i) => (
            <div style={{
                position: "absolute",
                top: `${i * 30}px`,
                zIndex: i,
            }}>
                {card}
            </div>
        ))}
    </div>
)

export default CardStack;