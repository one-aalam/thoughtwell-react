import logoSvg from '../favicon.svg'


export default function Header() {
    return React.createElement('div', { className: 'header' },
        React.createElement('img', { src: logoSvg , alt: 'logo', width: 60 }),
        React.createElement('h1', {},
            React.createElement('span', {}, 'thought'),
            React.createElement('u', { style: { color: 'indigo'}}, 'well')
        ),
        React.createElement('h6', {}, 'where people connnect on what they\'re up to...'),
    )
}
