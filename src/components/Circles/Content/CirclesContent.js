import React from "react";
import { Card } from "antd";

import './Content.scss';

const { Meta } = Card;

const CirclesContent = ({name, content, img, url}) => {
    return (
        <div>
            <Card
                hoverable
                style= {{ width: 300 }}
                cover = { <div className="cover-content"><img src={img} /></div>
            }>
                <Meta
                    title={name}
                    description={content}
                />
            </Card>
            
        </div>
    )
}

export default CirclesContent;