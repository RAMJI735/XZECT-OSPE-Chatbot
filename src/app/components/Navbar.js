import Home from "../page";

export default function Navbar() {
    return (
        
        <div className="bg-yellow-500">


            <div className="flex items-center justify-around">
                <div className="flex m-4" >
                    <div>
                        <i className="mx-8"> icon</i>
                    </div>
                    <div>
                        <a href="" className="bg-blue-400 p-3 rounded-md">login</a>

                    </div>


                </div>



                <div className="flex justify-end space-x-2 mx-4 justify-space-between">
                    <div className="mx-8">
                        <a href="" className="flex items-center">Github</a>

                    </div>
                    <div  >
                        <a href="" className="border-solid bg-blue-500 p-3 rounded-md">Deploy</a>

                    </div>
                </div>

            </div>


        </div>
    )
}