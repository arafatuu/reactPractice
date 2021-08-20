import Emoji from './Emoji';

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.Addemoji('I love you Tithy', '<3');
        return super.render(decoratedText);
    }
}
