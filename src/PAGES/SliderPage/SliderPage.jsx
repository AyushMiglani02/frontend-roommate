import React from 'react'
import CarouselItem from '../../COMPONENTS/SliderPage/CarouselItem.jsx'
import SideBar from '../../COMPONENTS/SliderPage/SideBar.jsx'
import './SliderPage.css'

const SliderPage = () => {

  const [activepage, setActivePage] = React.useState('Home');

	const props = {
    img: 'https://plus.unsplash.com/premium_photo-1715876234432-aee502a59dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    name: 'Name',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam distinctio, ratione molestiae, laudantium vero vel et natus in eius impedit ea nulla dolorum qui mollitia pariatur tempore velit quam reprehenderit. Dolor magni rerum fuga ullam facere fugit, nesciunt similique exercitationem provident libero esse adipisci est natus quia iusto molestiae.',
    sleep: "10PM-8AM",
    clean: 5,
    study: '4PM-6PM'
  }

  return (
    // <div className='SliderPage'>
		// 	<SideBar />
    //   <CarouselItem {...props}/>
    // </div>
    <div className='container'>
      <div className='inContainer'>
        <div className='left'>
          <SideBar activepage={activepage} />
        </div>
        <div className='right'>
          {
            activepage === 'Home' && <CarouselItem {...props}/>
          }
        </div>
      </div>
    </div>
  )
}

export default SliderPage