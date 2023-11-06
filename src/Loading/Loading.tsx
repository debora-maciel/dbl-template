import React, { ComponentProps } from 'react';
import Spinner from './Spinner';

interface ButtonProp extends ComponentProps<"button"> {
    message?: string;
    theme?: 'dark' | 'light';
    open?: boolean | undefined;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'contained';
    color?: 'success' | 'warning' | 'error' | 'info'
}

export default function TestSpinn() {
    return (
        <div className={''}>
            <Loading size={'small'} open={true} message={'Carregando dados...'} />
        </div>
    )
}

export function Loading({ message, open, size, color }: ButtonProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '7px',
        minWidth: '120px',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 20px',
    }

    const sizeMessage: React.CSSProperties = {
        fontSize: size === 'small' ? '12px' :
            size === 'large' ? '20px' :
                size === 'medium' ? '18px' : '20px'
    }

    return (
        open ? (
            <div style={sxMain}>
                <Spinner size={size} color={color} />
                <span style={sizeMessage}>
                    {message ? message : 'Loading...'}
                </span>
            </div>
        ) : <></>
    )
}