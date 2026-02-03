import { useState } from 'react'
import './App.css'

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noClickCount, setNoClickCount] = useState(0)
  const [sadMessages, setSadMessages] = useState([])

  const sadTexts = ["No!", "Don't do it!", "Oh no!", "Why?", "Not me!", "Really?", "Come on!", "Stop!"]
  const sadEmojis = ["😢", "😭", "😞", "😔", "😕", "😢", "💔", "😖"]

  const handleNoClick = () => {
    const randomX = Math.random() * 300 - 150
    const randomY = Math.random() * 300 - 150
    setNoButtonPos({ x: randomX, y: randomY })
    setNoClickCount(noClickCount + 1)

    // Add sad message with emoji
    const newMessage = {
      id: Date.now(),
      text: sadTexts[Math.floor(Math.random() * sadTexts.length)],
      emoji: sadEmojis[Math.floor(Math.random() * sadEmojis.length)],
      x: randomX,
      y: randomY
    }
    setSadMessages([...sadMessages, newMessage])

    // Remove message after animation
    setTimeout(() => {
      setSadMessages(prev => prev.filter(msg => msg.id !== newMessage.id))
    }, 2000)
  }

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100
    const randomY = Math.random() * 200 - 100
    setNoButtonPos({ x: randomX, y: randomY })
  }

  const handleYes = () => {
    setShowMessage(true)
  }

  return (
    <div className="valentine-container">
      {!showMessage ? (
        <>
          {/* Floating Stars */}
          <div className="stars-container">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}>✨</div>
            ))}
          </div>

          {/* Main Content */}
          <div className="content">
            {/* Teddy Bear with Flowers */}
            <div className="teddy-section">
              <div className="teddy-bear">
                <div className="bear-head">
                  <div className="bear-ears left-ear"></div>
                  <div className="bear-ears right-ear"></div>
                  <div className="bear-snout"></div>
                  <div className="bear-eye left-eye"></div>
                  <div className="bear-eye right-eye"></div>
                  <div className="bear-nose"></div>
                </div>
                <div className="bear-body"></div>
                <div className="bear-arms">
                  <div className="bear-arm left-arm"></div>
                  <div className="bear-arm right-arm"></div>
                </div>
              </div>

              {/* Flowers in paws */}
              <div className="flowers">
                <div className="flower">🌹</div>
                <div className="flower">🌷</div>
                <div className="flower">🌹</div>
              </div>

              {/* Hearts around */}
              <div className="hearts-container">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="heart-float" style={{
                    animation: `heartFloat ${2 + Math.random() * 1}s ease-in infinite`,
                    animationDelay: `${Math.random() * 1}s`
                  }}>❤️</div>
                ))}
              </div>
            </div>

            {/* Question Text */}
            <div className="question-text">
              <h1 className="fade-in">Will you be my Valentine?</h1>
            </div>

            {/* Buttons */}
            <div className="buttons-container">
              <button 
                className="btn yes-btn" 
                onClick={handleYes}
              >
                ❤️ Yes ❤️
              </button>

              <div className="no-button-wrapper">
                <button 
                  className="btn no-btn" 
                  onMouseEnter={handleNoHover}
                  onClick={handleNoClick}
                  onTouchStart={handleNoClick}
                  style={{
                    transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  No
                </button>

                {/* Sad Messages */}
                {sadMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className="sad-message"
                    style={{
                      left: `calc(50% + ${msg.x}px)`,
                      top: `calc(50% + ${msg.y + 60}px)`,
                    }}
                  >
                    <span className="sad-emoji">{msg.emoji}</span>
                    <span className="sad-text">{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="success-message">
          <div className="message-content">
            <div className="celebration-emojis">
              {['🎉', '💕', '🌹', '✨', '💖', '🌟'].map((emoji, i) => (
                <div key={i} className="emoji-pop" style={{
                  animation: `pop ${0.8 + Math.random() * 0.4}s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`
                }}>
                  {emoji}
                </div>
              ))}
            </div>

            <div className="message-box">
              <h2 className="slide-in">Yay! 💕</h2>
              <p className="fade-in-slow">You just made me the happiest! 🥰</p>
              
              <div className="hearts-rain">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="heart-rain" style={{
                    left: `${Math.random() * 100}%`,
                    animation: `rainDown ${2 + Math.random() * 1}s linear infinite`,
                    animationDelay: `${Math.random() * 1}s`
                  }}>❤️</div>
                ))}
              </div>

              <div className="love-messages">
                <p className="message-line">✨ You make my heart skip a beat</p>
                <p className="message-line">🌹 Every moment with you is magical</p>
                <p className="message-line">💫 You're my favorite person in the world</p>
                <p className="message-line">💕 Let's make beautiful memories together</p>
                <p className="message-line">🎀 Happy Valentine's Day to you! 💗</p>
              </div>

              <button 
                className="btn reset-btn"
                onClick={() => {
                  setShowMessage(false)
                  setNoButtonPos({ x: 0, y: 0 })
                }}
              >
                Start Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
