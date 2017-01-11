/* eslint-env node, browser */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FRC from 'formsy-react-components';

const { Form, Input, File, RadioGroup, Checkbox, CheckboxGroup, Select } = FRC;

class App extends Component {

    componentDidMount() {
        /*
        console.log(this.innerRef);
        console.log(this.componentRef);
        console.log(this.componentRef.control);
        console.log(this.componentRef.control.element);
        */

        this.inputRef.element.focus();

        console.info(
            this.inputRef.element,
            this.fileRef.element,
            this.radiosRef.elements,
            this.checkboxRef.element,
            this.checkboxesRef.elements,
            this.selectRef.element
        );
    }

    render() {
        const multiOptions = [
            {label: 'Option 1', value: 'one'},
            {label: 'Option 2', value: 'two'},
            {label: 'Option 3', value: 'three'}
        ];

        return (
            <div>
                <h1><code>refs</code> Example</h1>
                <p>The first input is initially focussed by accessing the form control via <code>refs</code>.</p>
                <p>Check the browser console for the form control elements that are exposed as refs.</p>
                <Form>
                    <Input
                        label="Text"
                        name="input"
                        //innerRef={(component) => { this.innerRef = component; } }
                        componentRef={(component) => { this.inputRef = component; } }
                    />
                    <File
                        label="File picker"
                        name="file"
                        componentRef={(component) => { this.fileRef = component; } }
                    />
                    <RadioGroup
                        label="Radio buttons"
                        name="radios"
                        options={multiOptions}
                        componentRef={(component) => { this.radiosRef = component; } }
                    />
                    <Checkbox
                        label="Single checkbox"
                        valueLabel="One option"
                        name="checkbox"
                        componentRef={(component) => { this.checkboxRef = component; } }
                    />
                    <CheckboxGroup
                        label="Checkbox group"
                        name="checkboxes"
                        options={multiOptions}
                        componentRef={(component) => { this.checkboxesRef = component; } }
                    />
                    <Select
                        label="Select"
                        name="select"
                        options={multiOptions}
                        componentRef={(component) => { this.selectRef = component; } }
                    />
                </Form>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);