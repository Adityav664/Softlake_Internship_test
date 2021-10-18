import React, { useState } from "react";
import './Ziphandle.style.css';
import { StyledDropZone } from 'react-drop-zone';
import zipimg from './../../assets/zipimg.png';


function Ziphandle() {
    const [data, setData] = useState(null);
    return (
        <div className="ziphandle">

            <StyledDropZone className="drop" onDrop={(file) => setData(file)}>
                <img className="zipimg" src={zipimg} />
                {(data)?
                     <div>
                         <p > {data.name}</p>
                         <p>Size :- {data.size} Kb</p>
                     </div>:
                     <p> Click here or Drag and Drop files here</p>
                }
            </StyledDropZone>

            {/* <DropZone onDrop={(file) => setData(file)}>
                {
                    ({ over, overDocument }) =>
                    <div>
                    {
                      over ?
                        'file is over element' :
                      overDocument ?
                        'file is over document' :
                        'no file'
                    }
                    </div>
                }
            </DropZone> */}
            {(data) ? console.log(data) : null}
        </div>
    );
}

export default Ziphandle;