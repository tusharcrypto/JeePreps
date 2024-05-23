    import React from "react";
    import { useNavigate } from "react-router-dom";
    const MockQuizeStart = ()=>{
        const navigate = useNavigate()
        function handlebtn(){
            navigate('/quize-now')
        }
    return <div>
        
        <div className="subject-card bg-green-400 w-11 ">
        <button onClick={handlebtn}>Solve Now</button>
        </div>
    </div>
    }
    export default MockQuizeStart