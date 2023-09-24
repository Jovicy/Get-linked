import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Timelines() {
  const timeline = [
    {
      date: 'November 18, 2023',
      title: 'Hackathon Announcement',
      task: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
    },
    {
      date: 'November 18, 2023',
      title: 'Teams Registration begins',
      task: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    },
    {
      date: 'November 18, 2023',
      title: 'Teams Registration ends',
      task: 'Interested Participants are no longer Allowed to register',
    },
    {
      date: 'November 18, 2023',
      title: 'Announcement of the accepted teams and ideas',
      task: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    },
    {
      date: 'November 18, 2023',
      title: 'Getlinked Hackathon 1.0 Offically Begins',
      task: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    },
    {
      date: 'November 18, 2023',
      title: 'Demo Day',
      task: 'Teams get the opportunity to pitch their projects to judges The winner of the hackathon will also be announced on this day',
    },
  ];

  return (
    <div className="w-full flex justify-end items-center mx-auto">
      <VerticalTimeline>
        {timeline.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={<span className="text-2xl font-montserrat font-bold">{index + 1}</span>}
            iconStyle={{ background: '#D434FE', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            contentStyle={{ background: 'none', display: 'flex', justifyContent: 'center', alignItems: "start", boxShadow: 'none', color: "#D434FE", fontWeight: "700", fontFamily: "Montserrat" }}
            contentArrowStyle={{ display: 'none' }}
          >
            <div className='flex flex-col gap-0 justify-center text-right'>
              <div>
                <p className='text-span text-2xl font-black font-montserrat'>{item.title}</p>
              </div>
              <div>
                <p className="text-white text-sm font-normal font-montserrat">{item.task}</p>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timelines;
