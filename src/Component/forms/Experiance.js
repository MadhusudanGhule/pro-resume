import React from 'react';

const Experiance = () => {
    return (
        <div className='text-center'>
            <h1>Experiance</h1>
            <div className='row' >
                <div className="col-sm">
                    <div>
                        <label htmlFor="">company name</label>
                        <input type="text"
                            id='comapanyName'
                        />
                    </div>
                    <div>
                        <label htmlFor="">designation</label>
                        <input type="text"
                            id='designation'
                        />
                    </div><div>
                        <label htmlFor="">city</label>
                        <input type="text"
                            id='city'
                        />
                    </div><div>
                        <label htmlFor="">Achievements/Tasks</label>
                        <input type="text"
                            id='Tasks' />
                    </div><div>
                        <label htmlFor="">Tecknology</label>
                        <input type="text"
                            id='Tecknology' />
                    </div><div>
                        <label htmlFor="">comany name</label>
                        <input type="text"
                            id='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiance;
