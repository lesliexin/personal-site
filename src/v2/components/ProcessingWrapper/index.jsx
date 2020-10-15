import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import p5 from 'p5';

import { generate } from 'shortid'

export default function (id = generate()) {
    let canvas = null

    function ProcessingWrapper({
        sketch = () => { },
        state = {},
        dispatch = () => { },
    }) {
        console.log(`::: ProcessingWrapper(${id}) component has been re-rendered`)

        const sketchContainer = useRef(null)

        useEffect(() => {
            console.log(`::: ProcessingWrapper(${id})/useEffect()`)
            canvas = new p5(sketch, sketchContainer.current)
            canvas.state = state
            canvas.dispatch = dispatch

            return () => {
                console.log(`::: ProcessingWrapper(${id})/useEffect.return()`)
                canvas.remove()
            }
        }, [dispatch, sketch, state])

        return (
            <div ref={sketchContainer} className="section">
                <h5>{`ProcessingWrapper #${id}`}</h5>
            </div>
        )
    }

    ProcessingWrapper.propTypes = {
        state: PropTypes.object,

        dispatch: PropTypes.func,
        sketch: PropTypes.func,
    }

    ProcessingWrapper.defaultProps = {
        state: {},

        dispatch: () => { },
        sketch: () => { },
    }

    return memo(ProcessingWrapper, (_, nextProps) => {
        canvas.state = { ...nextProps.state }

        return true
    })
}