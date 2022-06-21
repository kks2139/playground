import {ErrorBoundary} from 'react-error-boundary';

interface Props {
    children: React.ReactNode
}

function ErrorBoundaryWrapper({children}: Props){
    const onError = ()=>{
        alert('에러~');
    }

    return(
        <ErrorBoundary fallback={<div>에러!!!!</div>} onError={onError}>
            {children}
        </ErrorBoundary>
    );
}

export default ErrorBoundaryWrapper;