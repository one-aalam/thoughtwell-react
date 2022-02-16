import logoSvg from '../favicon.svg'


export default function Header() {
    return (
        <div className="header">
            <img src={logoSvg} alt={'logo'} width={60} />
            <h1>
                <span>thought</span>
                <u style={{ color: 'indigo'}}>well</u>
            </h1>
            <h6>where people connnect on what they're up to...</h6>
        </div>
    )
}
