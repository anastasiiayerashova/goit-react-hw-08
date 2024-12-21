import s from './Loader.module.css'
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {
    return (
        <ThreeDots visible={true} height="80" width="80" color="#213547" radius="9" ariaLabel="three-dots-loading" wrapperClass={s.loader}/>
    )
}