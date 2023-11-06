import React, { ComponentProps } from 'react';

interface ButtonProp extends ComponentProps<"button"> {
    children?: string;
    theme?: 'dark' | 'light';
    rounded?: boolean | undefined;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'contained';
    color?: 'default' | 'success' | 'warning' | 'error' | 'info'
}

export default function TestButton() {
    return (
        <div className='flex items-center justify-evenly my-10 flex-wrap gap-1'>
            <Button
                variant={'outlined'}
                color={'error'}
                size={'large'}
                rounded
            >
                Error
            </Button>
            <Button
                variant={'outlined'}
                color={'success'}
                size={'large'}
                rounded
            >
                Sucess
            </Button>
            <Button
                variant={'outlined'}
                color={'info'}
                size={'large'}
                rounded
            >
                Info
            </Button>

            <Button
                variant={'outlined'}
                color={'warning'}
                size={'large'}
                rounded
            >
                Warning
            </Button>

            <Button
                variant={'outlined'}
                size={'large'}
                rounded
            >
                Default
            </Button>

            <Button

                color={'error'}
                size={'large'}
                rounded
            >
                Error
            </Button>
            <Button

                color={'success'}
                size={'large'}
                rounded
            >
                Sucess
            </Button>
            <Button

                color={'info'}
                size={'large'}
                rounded
            >
                Info
            </Button>

            <Button

                color={'warning'}
                size={'large'}
                rounded
            >
                Warning
            </Button>

            <Button

                color={'error'}
                size={'large'}
            >
                Error
            </Button>
            <Button

                color={'success'}
                size={'large'}
            >
                Sucess
            </Button>
            <Button

                color={'info'}
                size={'large'}
            >
                Info
            </Button>

            <Button

                color={'warning'}
                size={'large'}
            >
                Warning
            </Button>
        </div>
    )
}

export function Button({ children, variant, size, color, rounded, ...rest }: ButtonProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        boxShadow: variant === 'outlined' ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
        fontSize: size === 'large' ? '13px' : size === 'medium' ? '12px' : size === 'small' ? '9px' : '',
        backgroundColor:
            color === 'error' ? 'rgb(254 202 202)' :
                color === 'success' ? 'rgb(167 243 208)' :
                    color === 'warning' ? 'rgb(254 240 138)' :
                        color === 'info' ? 'rgb(186 230 253)' :
                            'transparent',
        color:
            color === 'error' ? 'rgb(185 28 28)' :
                color === 'success' ? 'rgb(4 120 87)' :
                    color === 'warning' ? 'rgb(161 98 7)' :
                        color === 'info' ? 'rgb(3 105 161)' :
                            'inherit',
        border:
            variant === 'outlined' && color === 'error' ? '1.5px solid rgb(252 165 165)' :
                variant === 'outlined' && color === 'success' ? '1.5px solid rgb(110 231 183)' :
                    variant === 'outlined' && color === 'warning' ? '1.5px solid rgb(253 224 71)' :
                        variant === 'outlined' && color === 'info' ? '1.5px solid rgb(125 211 252)' :
                            'none',
        minWidth: '100px',
        textAlign: 'center',
        borderRadius: rounded ? '25px' : '0px',
        padding: '10px',
        display: 'flex',
        fontWeight: 700,
        outline: 'none',
        flexDirection: 'column',
    }

    return (
        <button {...rest} style={sxMain}>
            <span style={{ width: '100%' }}>
                {children}
            </span>
        </button>
    )
}