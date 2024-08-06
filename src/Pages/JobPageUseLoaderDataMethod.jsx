import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const JobPageUseLoaderDataMethod = () => {

    const {id} = useParams();
    const job = useLoaderData();

  return (
    <h1>{job.role}</h1>
  )
}

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {JobPageUseLoaderDataMethod as default, jobLoader}