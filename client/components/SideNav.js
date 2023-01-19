import React from 'react'
import { fetchProductsAsync, sortByCategory } from '../slices/allProductsSlice'
import { useDispatch } from 'react-redux'


function SideNav() {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
       await dispatch(fetchProductsAsync())
       await dispatch(sortByCategory(e.target.value))
    };
    const sideNavStyle = {
      display: 'flex',
      border: '2px solid lightBlue',
      width: '170vh',
      padding: '12px',
      margin: '8px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'pink',
      fontSize: '25px',
      position: 'relative',
    };
    const all = {
      width: '8vw',
      height: '3vw',
      backgroundColor: 'white',
      color: 'black'
    };
    const xbox = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#e6e6e6',
      color: '#00cc66'
    };
    const wii = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#bfbfbf',
      color: 'blue'
    };
    const ps3 = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#999999',
      color: 'white'
    };
    const ps2 = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#737373',
      color: '#66ccff'
    };
    const ps = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#4d4d4d',
      color: 'red'
    };
    const n64 = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#333333',
      color: 'lightBlue'
    };
    const snes = {
      width: '8vw',
      height: '3vw',
      backgroundColor: '#0d0d0d',
      color: 'red'
    };
    const nes = {
      width: '8vw',
      height: '3vw',
      backgroundColor: 'black',
      color: 'red'
    };
  return (
    <>
        <div className='sideNav' style={sideNavStyle}>Filter via your favorite consoles!
          <button value='all' onClick={() => dispatch(fetchProductsAsync())} style={all}>All Products</button> 
          <button value='xbox' onClick={handleSubmit} style={xbox}>XBOX</button> 
          <button value='wii' onClick={handleSubmit} style={wii}>Wii</button> 
          <button value='ps3' onClick={handleSubmit} style={ps3}>Playstation 3</button> 
          <button value='Playstation 2' onClick={handleSubmit} style={ps2}>Playstation 2</button> 
          <button value='Playstation' onClick={handleSubmit} style={ps}>Playstation</button> 
          <button value='Nintendo 64' onClick={handleSubmit} style={n64}>N64</button> 
          <button value='snes' onClick={handleSubmit} style={snes}>SNES</button> 
          <button value='NES' onClick={handleSubmit} style={nes}>NES</button> 
        </div>
    </>
  )
}

export default SideNav
