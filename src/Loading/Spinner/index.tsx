import './index.css';

interface SpinnerProps {
    size?: 'small' | 'large' | 'medium';

    color?: 'error' | 'info' | 'success' | 'warning'
}

export default function Spinner({ color, size }: SpinnerProps): JSX.Element {

    const sxStyle: React.CSSProperties = {
        backgroundColor:
            color === 'error' ? 'rgb(252 165 165)' :
                color === 'success' ? 'rgb(110 231 183)' :
                    color === 'info' ? 'rgb(125 211 252)' :
                        color === 'warning' ? 'rgb(253 224 71)' :
                            'inherit',
        width: size === 'small' ? '30px' : size === 'medium' ? '40px' : '50px',
        height: size === 'small' ? '30px' : size === 'medium' ? '40px' : '50px',
        marginRight: '5px'
    }

    return (
        <progress style={sxStyle}
            className={"pure-material-progress-circular"} />
    )
}