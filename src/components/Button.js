import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: nxtChange } = nextProps;

        if (currentChange === nxtChange) return false;
        return true;
    }

    render() {
        const { change, locale } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    Click Here
                </button>
            </div>
        );
    }
}
export default Button;
