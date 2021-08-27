class MyContext {
    MyContext(value) {
        this.value = value;
    }

    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };

    Consumer = ({ children }) => children(this.value);
}

export default function CreateContext(value = null) {
    const context = new MyContext(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
    // ok
}
