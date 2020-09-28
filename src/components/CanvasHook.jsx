import { useRef, useEffect } from 'react';

const useCanvas = draw => {
  
  const canvasRef = useRef(null)

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    
    const render = () => {
      frameCount++
      draw(context, frameCount, width/2, height/2, height/1.3)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas