import React, { useEffect } from 'react';
import './HomePage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEventById, getEvents, filterEventsByCategoryId } from '../../store/event'
import { useHistory } from "react-router-dom";

function HomePage({isLoaded}) {

    const dispatch = useDispatch();
    const events = useSelector(state => state.event.events);
    const history = useHistory();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const toEventPage = (id) => {
        history.push(`/event/${id}`);
        window.scroll({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    }


    const getEventsByCategoryId = (categoryId) => {
        if(categoryId === 0) {
            dispatch(getEvents());
        } else {
            dispatch(filterEventsByCategoryId(categoryId));
        }

    }

 return(
    <div>
        <Navigation isLoaded={isLoaded}/>
        <div className='adsBanner'>
            <h1>The event for event creators is here</h1>
            <p>Introducing RECONVENE, a free, two-day virtual networking and skillsharing summit about the future of events. Register now to explore where the industry is heading — and where you’d like to take it.</p>
        </div>
        <div className="bestOnline">
            <div className="greySquare"></div>
            <h1 className="orangeText">Discover the best</h1>
            <h1 className="blackText">online events</h1>
            <button style={{cursor: 'pointer'}} className="getTicketsBtn" >Get tickets</button>
            <img className="homepageImg" src="../imgs/HomepagePic.png"></img>
        <div className="secondNavbar">
            <div className="searchfield">
            <h1>Popular in</h1>
            <input className='second_search' type='search' placeholder="Online Events" />
            </div>
            <div className='tagMenu'>
                <button className='tagMenu_btn' onClick={() => {getEventsByCategoryId(0)}} style={{cursor: 'pointer'}}> All Events </button>
                <button className='tagMenu_btn' onClick={() => {getEventsByCategoryId(4)}} style={{cursor: 'pointer'}}> Online Events </button>
                <button className='tagMenu_btn' onClick={() => {getEventsByCategoryId(2)}} style={{cursor: 'pointer'}}> Food & Drinks </button>
                <button className='tagMenu_btn' onClick={() => {getEventsByCategoryId(1)}} style={{cursor: 'pointer'}}> Music </button>
                <button className='tagMenu_btn' onClick={() => {getEventsByCategoryId(7)}} style={{cursor: 'pointer'}}> Mother's Day </button>


            </div>

        </div>
        </div>

        <div className='popularEvents'>
            {
                events?.map(e =>  { return (
                    <div style={{cursor: 'pointer'}} className="card" onClick={()=>{toEventPage(e.id)}}>
                        <img className='image' src={e.event_img} alt="picture" />
                        <div className="container">
                            {e.title}
                        </div>
                    </div>
                    )
                })
            }

        </div>

        <footer className="homepageFooter">
            <div className="author">
                <div>Designed and made with <span>♥︎</span> in <br />NewYork by</div>

                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEqQoTglqnIBw/profile-displayphoto-shrink_400_400/0/1574704466963?e=1625702400&v=beta&t=HDU9c0I0F_KfqiyI7M1LKbb7J1mTNmKqkHcLQOd9nP8"></img>
                <a href="https://www.linkedin.com/in/qingweichen/">Qingwei Chen(Vivian)</a>
            </div>
            <div className="socialmedia"></div>
            <div className="aboutApp"></div>
        </footer>


    </div>

 )
}



export default HomePage;
