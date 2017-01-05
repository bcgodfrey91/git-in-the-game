import React from 'react';

export default class Repos extends React.Component {
  constructor() {
    super();
}

render(){
  return(
      <section className='home-container'>
        <section className='back back-left'>
          <img src='../imgs/left-arrow.svg' />
        </section>

        <section className='home'>
          <section className='current-mod-stats'>
            <section className='stat'>

            </section>
            <form className='mod-form'>
              <section className='mod-input'>
                <label>
                  <h2>Mod 1</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
              <section className='mod-input'>
                <label>
                  <h2>Mod 2</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
              <section className='mod-input'>
                <label>
                  <h2>Mod 3</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
              <section className='mod-input'>
                <label>
                  <h2>Mod 4</h2>
                  <h4>Start Date:</h4>
                </label>
                <input type='date' />
              </section>
            </form>
          </section>
        </section>
      </section>
    );
  }
};
