import { Link } from 'react-router-dom'

const FooterButtons = ({icon, customFunc, size, link}) => (
        <Link to={`${link}`}>
            <button type='button' onClick={customFunc} className={`${size}`} >
                    {icon}
            </button>
        </Link>
)

export default FooterButtons