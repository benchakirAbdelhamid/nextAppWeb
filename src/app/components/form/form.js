import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label >Location</label>
                    <input type="text"  placeholder="where are you going ?"/>
                </div>
                <div className="mb-3">
                    <label >Duplex House</label>
                    <input type="text"  placeholder="Property type"/>
                </div>
                <div className="mb-3">
                    <label >$100K</label>
                    <input type="text"  placeholder="Choose price range"/>
                </div>
                <div className="mb-3">
                    <button>logo search</button>
                   
                </div>
              
            </form>
        </div>
    );
}

export default Form;
