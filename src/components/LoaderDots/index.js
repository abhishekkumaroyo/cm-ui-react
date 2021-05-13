import React, { PureComponent } from 'react';
import './styles.scss';

class LoaderDots extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { width, cssClass, dotsColor } = this.props;
        return (
            <div className={`d-loader ${cssClass || ''}`}>
                <div className="d-loader__dotsWrapper">
                    <div className={`d-loader__dot ${dotsColor || ''}`} />
                    <div className={`d-loader__dot ${dotsColor || ''}`} />
                    <div className={`d-loader__dot ${dotsColor || ''}`} />
                </div>
            </div>
        );
    }
}

export default LoaderDots;
