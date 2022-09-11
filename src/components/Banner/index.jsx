import { useEffect, useRef } from 'react'
export default function Banner(){
    const banner = useRef()
  /* eslint-disable */
    const atOptions = {
        key: '3b8ef8ea35d648797a6e4cd6161eec35',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    useEffect(() => {
    if (!banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        if (banner.current) {
            banner.current.append(conf)
            banner.current.append(script)
        }
    }
}, [])
  /* eslint-enable */
    return <div ref={banner} className='flex justify-center items-center'></div>
}