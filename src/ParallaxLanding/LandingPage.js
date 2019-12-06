import React from 'react';
import './LandingPage.css'
class NewComponent extends React.Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <div className="bgimg-1">
          <div className="caption">
            <span className="border">BELIEVE IN THE DREAM</span>
          </div>
        </div>
        <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'justify', padding: '50px 80px' }}>
          <h3 style={{ textAlign: 'center' }}>Run Your Race</h3>
          <p>Today, all of us do, by our presence here, and by our celebrations in other parts of our country and the world, confer glory and hope to newborn liberty.

Out of the experience of and extraordinary human disaster that lasted too long, must be born a society of which all humanity will be proud.

Our daily deeds as ordinary South Africans must produce an actual South African reality that will reinforce humanity's belief in justice, strengthen its confidence in the nobility of the human soul and sustain all our hopes for glorious life for all.

All this we owe both to ourselves and to the peoples of the world who are so well represented here today.

To my compatriots, I have no hesitation in saying that each one of us is as intimately attached to the soil of this beautiful country as are the famous jacaranda trees of Pretoria and the mimosa trees of the bushveld.

Each time one of us touches the soil of this land, we feel a sense of personal renewal. The national mood changes as the seasons change.

We are moved by a sense of joy and exhilaration when the grass turns green and the flowers bloom.</p>
        </div>
        <div className="bgimg-2">
          <div className="caption">
            <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>FEED PASSION</span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'justify', padding: '50px 80px' }}>
            <p>Men make history and not the other way around. In periods where there is no leadership, society stands still. Progress occurs when courageous, skillful leaders seize the opportunity to change things for the better.</p>
          </div>
        </div>
        <div className="bgimg-3">
          <div className="caption">
            <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>BOW BEFORE GREATNESS</span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'justify', padding: '50px 80px' }}>
            <p>No problem can be solved from the same level of consciousness that created it.</p>
          </div>
        </div>
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">SPEAK TO A MAN IN A SECOND LANGUAGE, & YOU SPEAK TO HIS BRAIN; SPEAK TO HIM IN HIS MOTHER TONGUE, & YOU SPEAK TO HIS HEART</span>
          </div>
        </div>
      </div>
    );
  }
};

export default NewComponent;