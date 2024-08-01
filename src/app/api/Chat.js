'use client'
import { useState } from "react";
import axios from "axios";
import Content from "../components/ChatiInterface";



export default function Chat() {


  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


 

  async function GetAns(buttonName) {
    setAnswer("Loading");

    if (buttonName == "Find my hobby") {
      setQuestion('Find my hobby');
    } else if (buttonName == "I interest to play cricket then What is my hobbies?") {
      setQuestion('I interest to play cricket then What is my hobbies?');
    } else if (buttonName == "I like Singing what is my Hobby?") {
      setQuestion('I like Singing what is my Hobby?');
    }
    else if (buttonName == "I am angry person what is my hobby?") {
      setQuestion('I am angry person what is my hobby?');
    }
    else if (buttonName == "How to find Hobby?") {
      setQuestion('How to find Hobby?');
    }
    else if (buttonName == "Tell me about yourself") {
      setQuestion('Tell me about yourself');
    }
    else if (buttonName == "Develop Hobby") {
      setQuestion('Develop Hobby');
    }





    
    
    
    
    // const apiKey = process.env.REACT_APP_API_KEY;
    
    // const response = await axios({
    //   method: 'post',
    //   url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=',

    //   data: {

    //     contents:
    //       [{ parts: [{ "text": question }] }],
    //   }

    // });
    
    const apiKey =  process.env.REACT_APP_API_KEY;
    console.log(apiKey);

const response = await axios({
  method: 'post',
  url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
  data: {
    contents: [{ parts: [{ text: question }] }],
  },
});




    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);


  }




  return (

    <div>
      <div className="flex flex-col ">
        {/* <h1 className="text-xl text-center m-5" >Chat-Bot</h1> */}

        <Content />


<div className="flex flex-row justify-center my-4">

        <div className="text-center m-2">
          <button onClick={() => GetAns("Find my hobby")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">Find my hobby</button>
        </div>

        <div className="text-center m-2 ">
          <button onClick={() => GetAns("I interest to play cricket then What is my hobbies?")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">I interest to play cricket then What is my hobbies?</button>
        </div>
</div>

<div className="flex flex-row justify-center">

        <div className="text-center m-2 ">
          <button onClick={() => GetAns("I like Singing what is my Hobby?")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">I like Singing what is my Hobby?</button>
        </div>

        <div className="text-center m-2 ">
          <button onClick={() => GetAns("I am angry person what is my hobby?")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">I am angry person what is my hobby?</button>
        </div>
</div>

<div className="flex flex-row justify-center">

        <div className="text-center m-2 ">
          <button onClick={() => GetAns("How to find Hobby?")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">How to find Hobby?</button>
        </div>

        <div className="text-center m-2 ">
          <button onClick={() => GetAns("Tell me about yourself")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">Tell me about yourself</button>
        </div>
</div>
<div className="flex flex-row justify-center">

        <div className="text-center m-2 ">
          <button onClick={() => GetAns("Develop Hobby")} className="border-2 border-solid w-56  py-4 rounded-md bg-blue-500 hover:bg-black hover:text-white cursor-pointer w-96">Develop Hobby</button>
        </div>

</div>




        <div className="flex justify-center ">

          <div className="flex flex-row ">


            <div className="relative">

              <textarea type="text" value={question} className="m-5 p-5 w-92 relative text-center rounded-md"
                style={{ width: "58rem" }} placeholder="Ask a question" onChange={(e) => setQuestion(e.target.value)}></textarea>

            </div>



            <div className="text-center m-2 absolute" style={{ margin: "2.5rem 1rem 1rem 48rem" }}>

              <button onClick={GetAns} className="border-2 border-solid w-36 py-2 rounded-md bg-blue-500 hover:bg-black hover:text-white absolute ">Answer</button>


            </div>

          </div>
        </div>





        <div className="flex justify-center">
          <p className="m-5 p-5 w-96">{answer}</p>

        </div>

      </div>


    </div>

  )
}