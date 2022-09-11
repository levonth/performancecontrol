import { useState } from 'react'
import { useContextHook } from "../../hooks/contexts";
const BackgroundContainer = (props) => {
  const {
    setDisplayDropdown,
    displayOverlay,
    setDisplayOverlay,
    displayInsertImageModal,
    setDisplayInsertImageModal
  } = useContextHook()
  
  const [cookies, setCookies] = useState(localStorage.getItem('cookies') === 'disabled' ? false : true)
  const [imageLinkField, setImageLinkField] = useState()

  const handleConfirm = ()=>{
    localStorage.setItem('user_image', imageLinkField)
    setDisplayInsertImageModal(false)
  }

  return (
    <>
      <div
        className={`absolute w-full h-custom bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 ${displayOverlay}`}
        onClick={() => {
          setDisplayDropdown(false);
          setDisplayInsertImageModal(false)
          setDisplayOverlay("z-1");
        }}
      ></div>
      { cookies &&
        <div className="absolute w-full h-auto left-0 bottom-0 bg-white z-10 flex justify-center items-center px-2">
          <p className='text-base py-4'>Este site utiliza cookies para registrar o tempo de atividade e exibir a comparação de desempenho.</p>
          <button onClick={()=>{setCookies(false); localStorage.setItem('cookies', 'disabled')}} className="px-4 py-2 bg-black text-white ml-2 rounded-full">Okay!</button>
        </div>
      }
      {displayInsertImageModal &&
        <div className="absolute flex flex-col justify-center items-center top-[25%] left-1/2 translate-y-[-50%] translate-x-[-50%] p-5 w-full max-w-[600px] h-auto lg:w-2/3 border px-4 py-10 border-white bg-black z-40">
          <p className='text-bold text-xl text-white'>Insira o link de sua imagem de perfil</p>
          <input type="text" className='w-full my-5 px-4 py-2 rounded-full outline-none text-black' value={imageLinkField} onChange={(e)=>{setImageLinkField(e.target.value)}}/>
          <button className='rounded-full border border-white px-4 py-2 text-white' onClick={handleConfirm}>Confirmar</button>
        </div>
      }
      <div className="w-full h-custom relative bg-black flex flex-col items-center text-white">
        {props.children}
      </div>
    </>
  );
};
export default BackgroundContainer;
