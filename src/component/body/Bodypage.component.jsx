import React from 'react';
import './Bodypage.style.css';
import tar from './../../assets/tar.png';
import rar from './../../assets/rar.png';
import zip from './../../assets/zip.png';

function Bodypage(){
    return(
        <div className="bodypage">
            <div className="tar">
                <img className="tar-img" src={tar} />
                <div>
                    <h3>Untar Online</h3>
                    <p className="tar-p">
                        Tar is another archive format,it is typically
                        used on Unix and Linux systems to consolidate
                        multiple files into one file. This tool 
                        also allows to extract tar file online!
                    </p>
                </div>
            </div>
            <div className="padding-div"></div>
            <div className="tar">
                <img className="tar-img" src={rar} />
                <div>
                    <h3>Unzip files online</h3>
                    <p className="tar-p">
                        The Zip file format is the most popular archive 
                        file format. This format supports lossless data
                        compression. A ZIP file may contain one or more 
                        files or directories.

                    </p>
                </div>
            </div>
            <div className="padding-div"></div>
            <div className="tar">
                <img className="tar-img" src={zip} />
                <div>
                    <h3>Unrar online</h3>
                    <p className="tar-p">
                        RAR is a proprietary archive file format. This 
                        format supports data compression, error recovery
                        and file spanning! RAR files have the file
                        extensions .rar, .rev, .r00, .r01, ...
                        This tool allows to unzip rar files online. 
                        You can easily and quickly extract rar file online.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bodypage;