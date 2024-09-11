import EventsStyle from "../Events/Events.module.css";

const eventWrapper = EventsStyle.eventWrapper;
const events = EventsStyle.events;
const brClass = EventsStyle.brClass;

const EventsData = [
  {
    id: 1,
    event: (
      <div>
        <h6>EVERY</h6>
        <h1>SUNDAY</h1>
        <div className={eventWrapper}>
          <p>
            10:45 AM <br />
            <span className={events}>Fresh Anointed Prayer</span>
          </p>
        </div>
        <div>
          <p>
            11:00 AM <br />
            <span className={events}>Service Begins</span>
          </p>
        </div>
        {/* <div className={eventWrapper}>
          <p>
            7:00 p.m. <br />
            <span className={events}>EVENT A2</span>
          </p>
        </div> */}
      </div>
    ),
  },
  {
    id: 2,
    event: (
      <div>
        <br className={brClass} />
        <h6>STARTING SEPTEMBER 4TH</h6>
        <h1>WEDNESDAY</h1>
        <div className={eventWrapper}>
          <p>
            6:00 PM <br />
            <span className={events}>Counsel Training</span>
          </p>
        </div>
        <div className={eventWrapper}>
          <p>
            7:00 PM <br />
            <span className={events}>Bible Study</span>
          </p>
        </div>
        {/*    <div className={eventWrapper}>
          <p>
            7:00 p.m. <br />
            <span className={events}>EVENT B2</span>
          </p>
        </div> */}
      </div>
    ),
  },
  {
    id: 3,
    event: (
      <div>
        <h6>EVERY</h6>
        <h1>FRIDAY</h1>
        <div className={eventWrapper}>
          <p>
            7:30 PM <br />
            <span className={events}>Youth Evangelistic Service</span>
          </p>
        </div>
        {/* <div className={eventWrapper}>
          <p>
            2:00 p.m. <br />
            <span className={events}>EVENT C1</span>
          </p>
        </div>
        <div className={eventWrapper}>
          <p>
            7:00 p.m. <br />
            <span className={events}>EVENT C2</span>
          </p>
        </div> */}
      </div>
    ),
  },
];

export default EventsData;
