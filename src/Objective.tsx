import React, {Component} from 'react';

interface objectiveDetail {
}

interface ObjectiveProps {
    objectiveDescription?: string
}

class Objective extends Component<ObjectiveProps>{
    render() {
        const {objectiveDescription = 'Test Description'} = this.props;
        return (
            <div>
                <label>{objectiveDescription}</label>
            </div>
        );
    }
}

export default Objective;