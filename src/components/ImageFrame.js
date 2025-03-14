import React, { useRef } from 'react'
import html2canvas from 'html2canvas';
import "./Ss.css"
import logo from "../logo.png"

export const ImageFrame = () => {

/*     const [thumbnailImage, setThumbnailImage] = useState(null); */
    const  bg_ref = useRef(null)
    const handleImageChange = (e) => {
        const file = e.target.files[0]; 
        const url = URL.createObjectURL(file)
        bg_ref.current.style.background  = `url('${url}')`
         bg_ref.current.style.backgroundSize  = `cover`
         bg_ref.current.style.backgroundPosition  = `center`
         bg_ref.current.style.backgroundRepeat= `no-repeat`
      };

    const captureScreenshot = () => {
        const element = document.getElementById('divIdToCapture');
        const upscaleFactor = 3;
    
        html2canvas(element,{ scale: upscaleFactor, backgroundColor:"red" }).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          //console.log(html2canvas)
          const link = document.createElement('a');
          link.download = 'Aayush-SKp-SS.png';
          link.href = imgData;
          link.click();
        });
      };

   
    return (
        <div className="container_pre_event">
            <div className="template-frame">


                <div ref={bg_ref} className="frame-content" id='divIdToCapture'>
                    <div className="fest-motto">
                        <div style={{ color: '#E9C65E' }}>1st Technical Festival<br />
                            Graduate School of Engineering, MU </div>
                        <br />Empower-Innovate-Create
                    </div>
                    
                    <div className="custom-shape-divider-bottom-1711916014">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                        </svg>
                    </div>
                    
                    <img src={logo} alt="Logo"/>
                </div>


                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button onClick={captureScreenshot}>Download</button>
            </div>
        </div>
    )
}
