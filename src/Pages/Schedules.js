import react from "react";
import DegreePlan from "../Components/output";
import Navbar from '../Components/navbar';

export default function Schedules(){
    return(
        <div>
            <Navbar/>
            <DegreePlan/>
        </div>
        

    )
    
}
/*class apiFetch():
	url = "http://127.0.0.1:8000/showSchedule?format=json"
	returndata = requests.get(url).json()

class index(request):
		data = apiFetch.returndata*/


