import React from 'react'
import authorization from '../images/authorization.jpeg'
import firebase from '../images/firebase.png'
const Blogs = () => {
  return (
    <div className='container d-flex justify-content-center flex-column '>
        <img className='mx-auto d-block img-fluid' src={authorization} alt="" />
        <p className='mt-5'>what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
    
    <img className='mt-5' src={firebase} alt="" />
    <p className='mt-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
   <h2>other services does firebase provide other than authentication</h2>
   <h3>
   Parse – Open Source Backend Platform;<br/>
Back4app – Parse Hosting Platform;<br/>
Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;<br/>
Backendless – Mobile Backend and API Services Platform;<br/>
Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;<br/>
Pubnub – Real-time APIs and Global Messaging;<br/>
Kumulos – App Performance Management;<br/>
Game Sparks – Game Backend Platform;<br/>
Hoodie – Generic backend with a client API for Offline First applications;<br/>
Appwrite – Open-Source backend for Flutter developers<br/>
Deployd – Simple core library, with a modular API for your application;<br/>
NHost – Accelerates development and provides full control;<br/>
Amplify JS – Open-source Javascript framework;<br/>
Heroku – Platform as a service backed by Salesforce.</h3>
    </div>
  )
}

export default Blogs