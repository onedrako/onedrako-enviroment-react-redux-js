import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import config from '../../config'
import { setState } from '../redux/slices/stateSlice'

const HelloWorld = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.state)

  useEffect(() => {
    dispatch(setState([1]))
  }, [])

  console.log(state)

  return (
    <>
      <h1>Hello World</h1>
      <p>{config.api}</p>
    </>
  )
}

export { HelloWorld }
