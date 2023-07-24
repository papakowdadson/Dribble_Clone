"use-client";

import React from 'react';
import { getProviders, signIn } from 'next-auth/';
import { useState, useEffect } from 'react';

type Provider={
  id:string,
  name:string,
  type:string,
  signinUrl:string,
  callbackUrl:string,
  signinUrlParams: Record<string,string> | null,
}
type Providers=Record<string,Provider>

const AuthProviders = () => {

  const [providers,setProviders]=useState< Providers | null >( null );
  useEffect(()=>{
    fetchProviders();
  },[]);

  const fetchProviders = async () => {
    const res = await getProviders(); 
    console.log(res)
    setProviders(res);
  }

  if(providers){
    return (
    <div>{Object.values(providers).map((provider:Provider,index) => (<button key={index}>{provider.id}</button>) )}</div>
  )
  }
  else{

  }
  
}

export default AuthProviders