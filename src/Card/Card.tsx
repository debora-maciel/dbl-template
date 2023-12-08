import React, { ComponentProps, ReactNode } from 'react';
import { Button } from '../Buttons';

interface CardProp extends ComponentProps<"div"> {
    children?: ReactNode;
    theme?: 'dark' | 'light';
}

export default function TestCard() {
    return (
        <div>
            <Card theme={'dark'}>
                <CardTitle>
                    Titulo do artigo
                </CardTitle>
                <CardContent>
                    asasdasdasdas a  adsasd ascontent asdasdopasidpoasidpasdasdasdasda asd asda asd asdas
                    asdasdasdsad asd asd asd asd
                </CardContent>
                <CardFooter className={'flex items-center justify-between'}>
                    <Button variant={'outlined'} size={'medium'}>
                        Cancel
                    </Button>
                    <Button variant={'outlined'} size={'medium'} color={'info'}>
                        Confirm
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export function Card({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '7px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}

export function CardTitle({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        padding: '0 15px',
        fontWeight: 700,
        whiteSpace: 'break-spaces',
        textAlign: 'left',
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}


export function CardContent({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        textAlign: 'left',
        padding: '10px 15px',
        fontWeight: 400
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}


export function CardFooter({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}