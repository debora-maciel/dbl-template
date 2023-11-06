import React from 'react';

interface DblInputMaskProp {
    title?: string;
    /**
     * The title is used for tooltips of the input
     * O título é utilizado para o títlo/mensagem de detalhe do input
     */

    label?: string;
    /**
    * The label is in the ahead of the input
    * O label é usado para denominar o input
    */

    color?: 'info' | 'error' | 'success';
    /**
     * The color of the component
     * A cor do componente
     */

    theme?: 'dark' | 'light';
}


export default function TestTemplate() {
    return (
        <div>
            <DblInputMask color={'error'} theme={'dark'} label="Default" />
            <DblInputMaskContained label="Contained" />
            <DblInputMaskOutlined color={'success'} label={'Outlined'} />
        </div>
    )
}

export function DblInputMask(props: DblInputMaskProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    }

    const sxLabel: React.CSSProperties = {
        fontWeight: 600,

    }

    function getValue(color?: 'info' | 'error' | 'success'): React.CSSProperties {
        const bgColor = color == 'error' ? 'rgb(254 202 202)' :
            color == 'success' ?
                'rgb(187 247 208)'
                : 'rgb(186 230 253)'

        const borderColor = color == 'error' ? 'rgb(185 28 28)' :
            color == 'success' ?
                'rgb(6 78 59)'
                : 'rgb(12 74 110)'


        const sxInput: React.CSSProperties = {
            width: '100%',
            height: '100%',
            fontFamily: 'mono',
            textDecorationLine: 'none',
            textDecoration: 'none',
            display: 'flex',
            outline: 'none',
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '4px 3px',
            background: bgColor,
            border: `2px solid ${borderColor}`
        }
        return sxInput;
    }

    return (
        <div style={sxMain}>
            <div style={sxLabel}>{props.label}</div>
            <input style={getValue(props.color)} />
        </div>
    )
}

export function DblInputMaskOutlined(props: DblInputMaskProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    }

    const sxLabel: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '12px'
    }

    function getValue(color?: 'info' | 'error' | 'success'): React.CSSProperties {
        const bgColor = color == 'error' ? 'rgb(254 202 202)' :
            color == 'success' ?
                'rgb(187 247 208)'
                : 'rgb(186 230 253)'

        const borderColor = color == 'error' ? 'rgb(185 28 28)' :
            color == 'success' ?
                'rgb(6 78 59))'
                : 'rgb(12 74 110)'


        const sxInput: React.CSSProperties = {
            width: '100%',
            height: '100%',
            textDecorationLine: 'none',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '4px 3px',
            background: bgColor,
            border: `2px solid ${borderColor}`
        }
        return sxInput;
    }

    return (
        <div style={sxMain}>
            <div style={sxLabel}>{props.label}</div>
            <input style={getValue(props.color)} />
        </div>
    )
}

export function DblInputMaskContained(props: DblInputMaskProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    }

    const sxLabel: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '12px'
    }

    function getValue(color?: 'info' | 'error' | 'success'): React.CSSProperties {
        const bgColor = color == 'error' ? 'rgb(254 202 202)' :
            color == 'success' ?
                'rgb(187 247 208)'
                : 'rgb(186 230 253)'

        const borderColor = color == 'error' ? 'rgb(185 28 28)' :
            color == 'success' ?
                'rgb(6 78 59))'
                : 'rgb(12 74 110)'


        const sxInput: React.CSSProperties = {
            width: '100%',
            height: '100%',
            textDecorationLine: 'none',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '4px 3px',
            background: bgColor,
            border: `2px solid ${borderColor}`
        }
        return sxInput;
    }

    return (
        <div style={sxMain}>
            <div style={sxLabel}>{props.label}</div>
            <input style={getValue(props.color)} />
        </div>
    )
}