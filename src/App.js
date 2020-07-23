import React, { useState } from 'react';
import useEasyJobSearch from './useEasyJobSearch'
import { Container, Spinner } from 'react-bootstrap'
import GitJobList from './GitJobList'
import JobsPagination from './JobsPagination'
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useEasyJobSearch(params, page)


  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-5">
      <h1 className="font-weight-bold mb-5">"SearchJobHub" - <span className="text-muted font-weight-light mb-10" >Easy Job search</span> </h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <Spinner classsName="mb-5 mt-5" animation="grow" variant="info" >
        <span className="sr-only">Loading...</span>
      </Spinner>

      }
      {error && <h1>Reload</h1>}
      {
        jobs.map(job => {
          return <GitJobList key={job.id} job={job} />
        })
      }
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container >

  )
}

export default App;


