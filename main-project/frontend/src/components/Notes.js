import React from 'react';
import Note from './Note';

function Notes() {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <Note title='My first card' description='My first description' />
          <Note title='My 2nd card' description='My 2nd description' />
          <Note title='My oher card' description='My oher description' />
          <Note title='My oher card' description='My oher description' />
          <Note title='My oher card' description='My oher description' />
          <Note title='My oher card' description='My oher description' />
        </div>
      </div>
    </section>
  );
}

export default Notes;
