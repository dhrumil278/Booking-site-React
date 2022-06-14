function Form() {
    return (
        <>
            <div className="mainForm">
                <div className="formItems">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Gujarat' />
                </div>
                <div className="formItems">
                    <label htmlFor="">Chack in</label>
                    <input type="text" placeholder='27 July' />
                </div>
                <div className="formItems">
                    <label htmlFor="">Check out</label>
                    <input type="text" placeholder='29 July' />
                </div>
                <div className="formItems submit">
                    <button className='submit-btn'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Form;