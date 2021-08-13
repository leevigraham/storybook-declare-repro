
export default {
    title: 'Example/Failing',
    argTypes: {},
};

class ExampleClass {
    // This line throws an error
    declare foo: string;
    render() {
        return `<div>Lorem</div>`;
    }
}

const Template = ({ ...args }) => {
    const exampleClass = new ExampleClass();
    return exampleClass.render();
};

export const Default = Template.bind({});
Default.args = {};