import EventsStyle from "../Events/Events.module.css";

const eventWrapper = EventsStyle.eventWrapper;
const events = EventsStyle.events;

const EventsData = [
    {
        id: 1,
        event: <div>
                    <h6>MONDAY</h6>
                    <h1>Sep 6</h1>
                    <div className={eventWrapper}>
                        <p>12:00 p.m. <br />
                            <span className={events}>EVENT A</span>
                        </p>
                    </div>
                    <div className={eventWrapper}>
                        <p>2:00 p.m. <br />
                            <span className={events}>EVENT A1</span>
                        </p>
                    </div>
                    <div className={eventWrapper}>
                        <p>7:00 p.m. <br />
                            <span className={events}>EVENT A2</span>
                        </p>
                    </div>
                </div>
    },
    {
        id: 2,
        event: <div>
                    <h6>TUESDAY</h6>
                    <h1>Sep 7</h1>
                    <div className={eventWrapper}>
                        <p>12:00 p.m. <br />
                            <span className={events}>EVENT B</span>
                        </p>
                    </div>
                    <div className={eventWrapper}>
                        <p>2:00 p.m. <br />
                            <span className={events}>EVENT B1</span>
                        </p>
                    </div>
                    <div className={eventWrapper}>
                        <p>7:00 p.m. <br />
                            <span className={events}>EVENT B2</span>
                        </p>
                    </div>
                </div>
    },
    {
        id: 3,
        event: <div>
                    <h6>WEDNESDAY</h6>
                    <h1>Sep 8</h1>
                    <div className={eventWrapper}>
                        <p>12:00 p.m. <br />
                            <span className={events}>EVENT C</span>
                        </p>
                    </div>
                    <div className={eventWrapper}>
                        <p>2:00 p.m. <br />
                            <span className={events}>EVENT C1</span>
                        </p>
                    </div>
                    <div className={eventWrapper}>
                        <p>7:00 p.m. <br />
                            <span className={events}>EVENT C2</span>
                        </p>
                    </div>
                </div>
    },
];

export default EventsData;