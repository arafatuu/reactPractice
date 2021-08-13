import React from 'react';

export default class FormHandle extends React.Component {
    state = {
        title: 'This is default text',
        textmsg: 'This is default text message',
        library: 'React',
        isChecked: true,
    };

    SubmitComfirmation = (e) => {
        const { title, textmsg, library, isChecked } = this.state;
        e.preventDefault();
        console.log(title, textmsg, library, isChecked);
    };

    FormController = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                textmsg: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isChecked: e.target.checked,
            });
        } else {
            console.log('No change');
        }
    };

    render() {
        const { title, textmsg, library, isChecked } = this.state;
        return (
            <div>
                <form onSubmit={this.SubmitComfirmation}>
                    <input type="text" value={title} onChange={this.FormController} />
                    <h2>{title}</h2>

                    <br />
                    <br />

                    <textarea
                        name="textarea"
                        type="textarea"
                        cols="30"
                        rows="10"
                        value={textmsg}
                        onChange={this.FormController}
                    />
                    <br />
                    <br />
                    <select value={library} onChange={this.FormController}>
                        <option value="Anglar">Angular Js</option>
                        <option value="Vue">Vue Js</option>
                        <option value="React">React Js</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isChecked} onChange={this.FormController} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
