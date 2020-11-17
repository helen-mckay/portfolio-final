import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        //update state
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        
    }

    render()
    {
        if (this.state.hasError) {
            return <p>Something went wrong.</p>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;