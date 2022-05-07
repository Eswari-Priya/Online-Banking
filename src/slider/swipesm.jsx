import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faKey,faPager,faMessage,faBars,faBell,faPlus,faExclamationTriangle,faBookmark,faPrint,faIdBadge,faGear, faHandHoldingHand, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import '../style.css';

class Swipesm extends Component {
    render() {
      return (
        <div>
            <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper text-dark"
          >
            <SwiperSlide className='slider-box'> 
            <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faKey} />
              </div>
               <div>
                <h5 className='swipe-head'>Simplified login and password generation</h5>
                <p>Login with your CRN / Username / Card number & Password. Or use the simplified steps to reset your Password</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='slider-box'>
            <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faPager} />
              </div>
               <div>
                <h5 className='swipe-head'>One Page Banking</h5>
                <p>Introducing One Page Banking where you get a single page view of your entire relationship with Kotak</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='slider-box'>
              <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faGear} />
              </div>
               <div>
                <h5 className='swipe-head'>Settings</h5>
                <p>Settings to manage your Accounts, Cards, Profile, Security preferences and much more</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='slider-box'>
            <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faMessage} />
              </div>
               <div>
                <h5 className='swipe-head'>Statements</h5>
                <p> Suite of statements tailor-made for all your banking needs, right from Account level to Combined, Financial year to Calendar year</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faBell} />
              </div>
               <div>
                <h5 className='swipe-head'>Your Messages</h5>
                <p>New section where we bring together curated offers, insights and communication just for you</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faBars} />
              </div>
               <div>
                <h5 className='swipe-head'>Enhanced left side Menu</h5>
                <p>All Products and Services are arranged in an intuitive way to make your navigation struggle-free </p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'><div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faPlus} />
              </div>
               <div>
                <h5 className='swipe-head'>Shortcuts</h5>
                <p>Pick your favourite transactions and add them to "Shortcuts" available on your home screen to access them in a single step</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faExclamationTriangle} />
              </div>
               <div>
                <h5 className='swipe-head'>Emergency</h5>
                <p>An easily accessible "Emergency" icon right on the homepage to help you report fraud or loss of card or to stop a cheque</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faUserCircle} />
              </div>
               <div>
                <h5 className='swipe-head'>Accounts</h5>
                <p>Check your latest balance, verify recent transactions, order a Chequebook and do much more.</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faIdBadge} />
              </div>
               <div>
                <h5 className='swipe-head'>Profile</h5>
                <p>Revamped Profile section to view and edit your profile details with Kotak</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faPrint} />
              </div>
               <div>
                <h5 className='swipe-head'>Service Requests</h5>
                <p>Consolidated page to list down all requests available in Net Banking </p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faHandHoldingHand} />
              </div>
               <div>
                <h5 className='swipe-head'>Enhanced Onboarding experience</h5>
                <p>Onboarding cards to help you explore the revamped platform & personalize your Net Banking experience</p>
            </div>
            </div></SwiperSlide>
            <SwiperSlide className='slider-box'> <div>
              <div className='mb-4 p-4 icon-border'>
              <FontAwesomeIcon className='icon-size' icon={faBookmark} />
              </div>
               <div>
                <h5 className='swipe-head'>"Remember Me" to login faster</h5>
                <p>Save CRN on your system for faster Net Banking access next time</p>
            </div>
            </div></SwiperSlide>
          </Swiper>
        </div>);
      };
    }

  export default Swipesm;