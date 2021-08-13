import React from 'react';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { PlayIt, buttonName } = this.props;
        return (
            <div>
                <button type="button" onClick={() => PlayIt()}>
                    {buttonName}
                </button>
            </div>
        );
    }
}

export default CustomButton;
