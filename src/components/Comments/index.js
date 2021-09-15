import React from 'react';

const Comments = () => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="here"
                   aria-label="here" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
    );
};

export default Comments;