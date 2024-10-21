
import './App.css'
import Imagegallery from './components/Imagegallery'

function App() {
  const imgs = [
    { alt: "img1", url: "/images/img1.jpg" },
    { alt: "img2", url: "/images/img2.jpg" },
    { alt: "img3", url: "/images/img3.jpg" },
    { alt: "img4", url: "/images/img4.jpg" },
    { alt: "img5", url: "/images/img5.jpg" },
    { alt: "img6", url: "/images/img6.jpg" },
    { alt: "img7", url: "/images/img7.jpg" },
    { alt: "img8", url: "/images/img8.jpg" },
    { alt: "img9", url: "/images/img9.jpg" },
    { alt: "img10", url: "/images/img10.jpg" },
    { alt: "img11", url: "/images/img11.jpg" },
    { alt: "img12", url: "/images/img12.jpg" }
  ]
  return (
    <>
      <Imagegallery images={imgs} />
    </>
  )
}

export default App
