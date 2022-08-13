import React, { Component } from 'react';

import style from '../../pages/article-screen/style.module.scss';

class ImageComponent extends Component {

    render() {
        return (
            <div>

                <img className={style.Bcss} src={this.props.url} alt="display images" />

            </div>
        );
    }
}

export default ImageComponent;