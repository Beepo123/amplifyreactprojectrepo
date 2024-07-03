import React from 'react'
import './App.css'
import HelloComponent from './assets/HelloComponent'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
function App() {

  return (
    <>
      <HelloComponent></HelloComponent>
      more edits
      test upload
      <br />
      test another upload
      <br />
      should upload
    </>
  )
}

export default App
