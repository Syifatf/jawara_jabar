import React, { Component } from 'react';
// import 'public/css/bootstrap4/bootstrap.min.css';

class Agenda extends Component {
  render() {
    return (
        <div>
            {/* Events */}
            {/* Calendar */}
        <div className="calendar">
        <div className="container reset_container">
        <div className="col-lg-12 text-center">
                <h4 className="section-heading text-uppercase">Agenda </h4>
                <h5 className="section-subheading text-muted">Rangkaian agenda di setiap bulan</h5>
              </div>
        <div className="row">
            <div className="col-xl-6 calendar_col">
            <div className="calendar_container">
                <div className="calendar_title_bar d-flex flex-row align-items-center justify-content-start">
                <div><div className="calendar_icon"><img src="images/calendar.svg" alt /></div></div>
                <div className="calendar_title">22 april events calendar</div>
                </div>
                <div className="calendar_items">
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_1.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>14:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>Business 101</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_2.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>15:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>About technology</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_3.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>17:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>Conference calls</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_4.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>20:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>Drinks and dinner</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-xl-6 calendar_col">
            <div className="calendar_container">
                <div className="calendar_title_bar d-flex flex-row align-items-center justify-content-start">
                <div><div className="calendar_icon"><img src="images/calendar.svg" alt /></div></div>
                <div className="calendar_title">23 april events calendar</div>
                </div>
                <div className="calendar_items">
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_5.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>14:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>Business 101</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_6.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>15:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>About technology</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_7.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>17:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>Conference calls</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                {/* Calendar Item */}
                <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
                    <div><div className="calendar_item_image"><img src="images/event_8.jpg" alt /></div></div>
                    <div className="calendar_item_time">
                    <div>20:00</div>
                    <div>Auditorium</div>
                    </div>
                    <div className="calendar_item_text">
                    <div>Drinks and dinner</div>
                    <div>08 AM - 04 PM</div>
                    <div>Speaker: Daniel Hill</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>

);
}
}

export default Agenda;