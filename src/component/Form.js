function Form(props) {
    return (
        <>
            <div className="mainForm">
                <div className="formItems">
                    <label htmlFor="">{props.label1}</label>
                    <input type="text" placeholder='' value={props.input1} />
                </div>
                <div className="formItems">
                    <label htmlFor="">{props.label2}</label>
                    <input type="text" placeholder='' value={props.input2}/>
                </div>
                <div className="formItems">
                    <label htmlFor="">{props.label3}</label>
                    <input type="text" placeholder='' value={props.input3}/>
                </div>
                <div className="formItems submit">
                    <button className='submit-btn'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Form;