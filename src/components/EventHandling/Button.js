import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show } = this.props;
        console.log(locale);
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'en-US' ? 'ঘড়ি পরিবর্তন করুন' : 'Change Clock'}
                </button>
                {/* <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'গড়ি পরিবর্তন করুন'}
                </button> */}
                {show && (
                    <div>
                        <h2>This is English content. Not for Bengeli </h2>
                    </div>
                )}
                {show || (
                    <div>
                        <h3>এটি বাঙ্গালীদের জন্য</h3>
                    </div>
                )}
            </div>
        );
    }
}
export default Button;
