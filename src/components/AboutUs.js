// import React, { useState } from 'react'
import React from 'react'

export default function AboutUs(props) {
    // const [myStyle,setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText,setbtntext] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if (myStyle.color === 'black') {
    //         setmyStyle({
    //              color: 'white',
    //              backgroundColor: 'black'
    //         })
    //         setbtntext("Enable Light Mode")
            
    //     }

    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //        })
    //        setbtntext("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'#222022',
        backgroundColor : props.mode === 'dark'?'#222022':'white'
    }
  return (

    <div className='container'>
        <h1 className='m-4'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button fw-bold" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextUtils
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a versatile and easy-to-use web application designed for anyone who works with text. Whether you’re a writer, student, or professional, TextUtils offers essential tools to transform, analyze, and optimize your text in a simple, distraction-free interface. With just a few clicks, you can modify text case, count words and characters, or preview your text in real-time. Our mission is to make text processing efficient, accessible, and enjoyable!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed fw-bold" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Features of TextUtils
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils provides a variety of useful features to make text manipulation easy:

                Convert to Uppercase and Lowercase: Seamlessly switch text to uppercase, lowercase, or capitalize each word’s first letter.
                Text Analysis: Get detailed insights into your text, including word and character counts, which can help with content creation or meeting specific length requirements.
                Dark Mode: Our Dark Mode feature is designed for your comfort, letting you work in low-light conditions without straining your eyes.
                These features are crafted with simplicity in mind, allowing you to focus on your text without unnecessary complexity.            
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed fw-bold" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Why Choose TextUtils?
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is built to be fast, reliable, and accessible from anywhere. Here’s why users love TextUtils:

            Ease of Use: TextUtils offers an intuitive interface that is easy to navigate and quick to learn.
            Productivity Boost: Save time and streamline your workflow by using our single platform for all basic text transformations and analyses.
            100% Free: All features on TextUtils are entirely free to use, with no hidden fees or limitations.
            We’re committed to continually enhancing TextUtils to meet our users’ needs and keep it as the go-to tool for text transformation. Thank you for choosing TextUtils!

            </div>
            </div>
        </div>
</div>

    {/* <button onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button> */}
    </div>
  )
}
